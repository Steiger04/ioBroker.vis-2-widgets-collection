/**
 * Raw-level registry (ADR-0047) — the STATE side of every section raw: one module owning the
 * active-template lifecycle (catalog prune + keep-only heal + blob encode) that was previously
 * a ~14-call-site convention across `editorState.ts`.
 *
 * @module EchartsCollectionWidget/editor/rawLevels
 * @remarks
 * Bindings-hybrid form: an entry owns PLACEMENT only (which state field / chartConfig key a
 * level's raw + activation list live in); the generic core owns iteration, `healedIds` and
 * timing. One binding per SLOT — scalar levels bind one, per-item levels (series, axes — the
 * step-2 lift) one per card — and the CATALOG hangs off the binding, because catalog
 * resolution is per-slot (a series card with a bar type override heals against the bar
 * catalog). The EditorState FORM is untouched; a future scalar level is an entry + a
 * `defineCatalog` bundle + a RawJsonSection host — loadEditorState/saveEditorState are not
 * touched again.
 *
 * `families` is UI visibility ONLY: heal/encode run regardless of the current family — the
 * pie blob deliberately rides across family switches ("switching away and back preserves it",
 * ADR-0044/0045).
 */
import { familyOf } from '../optionBuilder';
import { AXIS_TEMPLATES } from './axisTemplates';
import { LEGEND_TEMPLATES } from './legendTemplates';
import { SERIES_TEMPLATES, seriesSlotOf } from './seriesTemplates';
import { TITLE_TEMPLATES } from './titleTemplates';
import { TOOLTIP_TEMPLATES } from './tooltipTemplates';
import { X_AXIS_TEMPLATES } from './xAxisTemplates';
import type { EditorState } from './editorState';
import type { SeriesMeta } from '../optionBuilder';
import type { EchartsAxisConfig, EchartsXAxisConfig } from '../../types/field-definitions/echarts-fields';
import type { SnippetTemplate } from './snippetComposition';
import { keepSnippetIds, pruneSnippetIds } from './snippetComposition';

/** The chart family union (from the single source {@link familyOf}). */
export type RawLevelFamily = ReturnType<typeof familyOf>;

/** Registry id — the section name. */
export type RawLevelId = 'title' | 'legend' | 'tooltip' | 'pie' | 'series' | 'yAxes' | 'xAxis' | 'jsonSeriesStyle';

/**
 * Catalog prune + keep-only heal in one (ADR-0042 #6 + addendum) — for single-catalog levels.
 * The whole lifecycle rule under the registry: a stale id drops silently (its composed leaves
 * stay in the raw text as the user's own), an activation whose template has no leaf path left
 * drops (the badge never outlives its content), additions never happen.
 */
export const healedIds = (templates: readonly SnippetTemplate[], ids: string[], raw: string | undefined): string[] =>
    keepSnippetIds(templates, pruneSnippetIds(templates, ids), raw ?? '');

/** One raw slot — the level-agnostic pair the generic loop heals. */
export interface RawBinding {
    /** The slot's raw override text (the persisted truth; `undefined` = nested-and-absent). */
    readonly raw: string | undefined;
    /** The slot's active template ids — possibly stale; the heal decides. */
    readonly ids: string[] | undefined;
    /** The slot's catalog — per-slot by design (see module remarks). */
    readonly templates: readonly SnippetTemplate[];
    /** Write the healed ids where the slot lives; `undefined` = nothing active (blob-lean). */
    commitHealed: (healed: string[] | undefined) => void;
}

/**
 * The per-blob draft objects the save side commits into (built by `saveEditorState`, encoded
 * once). The per-item drafts are SKELETONS the entries heal in place: saveEditorState owns the
 * family collapse and the non-snippet fields, the registry writes the healed activations
 * (ADR-0047 series boundary).
 */
export interface SaveDrafts {
    chartConfig: Record<string, unknown>;
    /** The seriesConfig meta items (skeleton incl. raw; entries write `snippets`). */
    seriesConfig: SeriesMeta[];
    /** The yAxes items (copies of the working copy; entries heal `snippets` in place). */
    yAxes: EchartsAxisConfig[];
    /** The X-Karte config (a copy; the entry heals `snippets` in place). */
    xAxis: EchartsXAxisConfig;
    /** The json-mode overlay entries (copies; entries heal `snippets` in place). */
    jsonSeriesStyle: Record<string, SeriesMeta>;
}

/** One raw level: placement only — the lifecycle is the registry's. */
export interface RawLevelEntry {
    readonly id: RawLevelId;
    /** UI visibility ONLY — heal/encode run regardless (see module remarks). */
    readonly families?: readonly RawLevelFamily[];
    /** Annotation: scalar levels contribute no family-switch loss (`validation.ts` owns counting). */
    readonly lossRelevant?: false;
    bindLoad(state: EditorState): RawBinding[];
    bindSave(state: EditorState, drafts: SaveDrafts): RawBinding[];
}

/** The four flat section levels share one placement anatomy — a factory over the two state keys. */
const flatSectionLevel = (
    id: 'title' | 'legend' | 'tooltip',
    templates: readonly SnippetTemplate[],
    keys: {
        raw: 'titleRaw' | 'legendRaw' | 'tooltipRaw';
        snippets: 'titleSnippets' | 'legendSnippets' | 'tooltipSnippets';
    },
    families?: readonly RawLevelFamily[],
): RawLevelEntry => ({
    id,
    lossRelevant: false,
    ...(families ? { families } : {}),
    bindLoad: state => [
        {
            raw: state[keys.raw],
            ids: state[keys.snippets],
            templates,
            // Flat state fields normalise an empty heal to [] (the interface is non-optional).
            commitHealed: healed => {
                state[keys.snippets] = healed ?? [];
            },
        },
    ],
    bindSave: (state, drafts) => [
        {
            raw: state[keys.raw],
            ids: state[keys.snippets],
            templates,
            // Blob-lean: the raw key rides only when set, the healed ids only when non-empty.
            commitHealed: healed => {
                if (state[keys.raw]) {
                    drafts.chartConfig[keys.raw] = state[keys.raw];
                }
                if (healed?.length) {
                    drafts.chartConfig[keys.snippets] = healed;
                }
            },
        },
    ],
});

/** pie — the scalar whole-pie level nested in the chartConfig blob's pie config. */
const pieLevel: RawLevelEntry = {
    id: 'pie',
    lossRelevant: false,
    families: ['pie'],
    bindLoad: state => [
        {
            raw: state.pie.raw,
            ids: state.pie.snippets,
            templates: SERIES_TEMPLATES.pie,
            // Faithful to the pre-registry load: an absent/empty activation list leaves the
            // loaded pie config untouched; a present one heals in place ([] stays []).
            commitHealed: healed => {
                if (!state.pie.snippets?.length) {
                    return;
                }
                state.pie = { ...state.pie, snippets: healed ?? [] };
            },
        },
    ],
    bindSave: (state, drafts) => [
        {
            raw: state.pie.raw,
            ids: state.pie.snippets,
            templates: SERIES_TEMPLATES.pie,
            // The pie fragment always rides (family-free), blob-lean like the flat sections
            // (follow-up decision 2026-08-22): the raw key rides only when set — the former
            // `raw: ''` husk is gone; empty activations go undefined-lean.
            commitHealed: healed => {
                const fragment: Record<string, unknown> = { ...state.pie };
                if (!state.pie.raw) {
                    fragment.raw = undefined;
                }
                fragment.snippets = healed?.length ? healed : undefined;
                drafts.chartConfig.pie = fragment;
            },
        },
    ],
};

/** The slot catalog of one series card / json overlay entry (slot = family + chartType + type override). */
const seriesCatalogFor = (m: SeriesMeta, state: EditorState): readonly SnippetTemplate[] =>
    SERIES_TEMPLATES[seriesSlotOf(familyOf(state.chartType), state.chartType, m)];

/** series — per-card raw in the seriesConfig meta blob; the catalog is SLOT-resolved per card. */
const seriesLevel: RawLevelEntry = {
    id: 'series',
    // No lossRelevant annotation: series activations ARE the family-switch loss source.
    bindLoad: state =>
        // Series snippets are undefined-lean on every empty heal outcome (normalizeSeriesSnippets
        // parity).
        state.series.map(s => ({
            raw: s.raw,
            ids: s.snippets,
            templates: seriesCatalogFor(s, state),
            commitHealed: healed => {
                s.snippets = healed?.length ? healed : undefined;
            },
        })),
    bindSave: (state, drafts) =>
        // The metaBlob skeleton is saveEditorState's —
        // the entry reads the working copy's cards and writes only the healed snippets into
        // the items (ADR-0047 series boundary: the registry owns the raw lifecycle, not the
        // data configuration).
        drafts.seriesConfig.map((item, i) => {
            const s = state.series[i] ?? {};
            return {
                raw: s.raw,
                ids: s.snippets,
                templates: seriesCatalogFor(s, state),
                commitHealed: healed => {
                    item.snippets = healed?.length ? healed : undefined;
                },
            };
        }),
};

/** Axis-card bindings — load binds the state's cards, save the draft copies (same pairs). */
const axisBindings = (axes: readonly EchartsAxisConfig[]): RawBinding[] =>
    axes.map(a => ({
        raw: a.raw,
        ids: a.snippets,
        templates: AXIS_TEMPLATES,
        // Axis snippets keep [] both ways (empty input passthrough + heal-to-empty) — the
        // pre-registry semantics, pinned by the characterization suite.
        commitHealed: healed => {
            if (!a.snippets?.length) {
                return;
            }
            a.snippets = healed ?? [];
        },
    }));

/** yAxes — per-card raw in the yAxes blob; the heal KEEPS [] both sides (pinned pre-registry semantics). */
const yAxesLevel: RawLevelEntry = {
    id: 'yAxes',
    lossRelevant: false,
    bindLoad: state => axisBindings(state.yAxes),
    bindSave: (state, drafts) => axisBindings(drafts.yAxes),
};

const xAxisBinding = (x: EchartsXAxisConfig): RawBinding => ({
    raw: x.raw,
    ids: x.snippets,
    templates: X_AXIS_TEMPLATES,
    // Empty input stays untouched; a heal that drops everything goes undefined-lean.
    commitHealed: healed => {
        if (!x.snippets?.length) {
            return;
        }
        x.snippets = healed?.length ? healed : undefined;
    },
});

/** xAxis — the single X-Karte's raw in the xAxis blob. */
const xAxisLevel: RawLevelEntry = {
    id: 'xAxis',
    lossRelevant: false,
    bindLoad: state => [xAxisBinding(state.xAxis)],
    bindSave: (state, drafts) => [xAxisBinding(drafts.xAxis)],
};

const jsonSeriesBindings = (overlay: Record<string, SeriesMeta>, state: EditorState): RawBinding[] =>
    Object.values(overlay).map(m => ({
        raw: m.raw,
        ids: m.snippets,
        templates: seriesCatalogFor(m, state),
        commitHealed: healed => {
            m.snippets = healed?.length ? healed : undefined;
        },
    }));

/** jsonSeriesStyle — per-payload-name raw in the jsonSeriesStyle blob, slot-resolved like series. */
const jsonSeriesStyleLevel: RawLevelEntry = {
    id: 'jsonSeriesStyle',
    lossRelevant: false,
    bindLoad: state => jsonSeriesBindings(state.jsonSeriesStyle, state),
    bindSave: (state, drafts) => jsonSeriesBindings(drafts.jsonSeriesStyle, state),
};

/** The registry — ADR-0047: the scalar levels (step 1) + the per-item lift (step 2). */
export const RAW_LEVELS: readonly RawLevelEntry[] = [
    flatSectionLevel('title', TITLE_TEMPLATES, { raw: 'titleRaw', snippets: 'titleSnippets' }),
    flatSectionLevel('legend', LEGEND_TEMPLATES, { raw: 'legendRaw', snippets: 'legendSnippets' }),
    flatSectionLevel('tooltip', TOOLTIP_TEMPLATES, { raw: 'tooltipRaw', snippets: 'tooltipSnippets' }),
    pieLevel,
    seriesLevel,
    yAxesLevel,
    xAxisLevel,
    jsonSeriesStyleLevel,
];

/** Heal one binding list — the one-line lifecycle rule every level shares. */
const healBindings = (bindings: readonly RawBinding[]): void => {
    for (const binding of bindings) {
        binding.commitHealed(binding.ids?.length ? healedIds(binding.templates, binding.ids, binding.raw) : undefined);
    }
};

/**
 * The load-side single heal pass (ADR-0047): runs over the freshly constructed — still
 * unhealed — state, in place. Semantically identical to the former per-level inline heals:
 * the heal is pure per level and idempotent, no level observes another.
 */
export const healLoadLevels = (state: EditorState): void => {
    for (const level of RAW_LEVELS) {
        healBindings(level.bindLoad(state));
    }
};

/**
 * The save-side heal (ADR-0042 Apply-time prune + addendum): heals the WORKING COPY's pairs
 * into the blob drafts without rewriting the state — between a family switch and Apply the
 * stale ids deliberately stay in the working copy.
 */
export const healSaveLevels = (state: EditorState, drafts: SaveDrafts): void => {
    for (const level of RAW_LEVELS) {
        healBindings(level.bindSave(state, drafts));
    }
};
