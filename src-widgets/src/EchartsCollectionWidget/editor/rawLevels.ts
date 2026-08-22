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
 * radar and pie blobs deliberately ride across family switches ("switching away and back
 * preserves it", ADR-0044/0045).
 */
import type { familyOf } from '../optionBuilder';
import { LEGEND_TEMPLATES } from './legendTemplates';
import { RADAR_TEMPLATES } from './radarTemplates';
import { SERIES_TEMPLATES } from './seriesTemplates';
import { TITLE_TEMPLATES } from './titleTemplates';
import { TOOLTIP_TEMPLATES } from './tooltipTemplates';
import type { EditorState } from './editorState';
import type { SnippetTemplate } from './snippetComposition';
import { keepSnippetIds, pruneSnippetIds } from './snippetComposition';

/** The chart family union (from the single source {@link familyOf}). */
export type RawLevelFamily = ReturnType<typeof familyOf>;

/** Registry id — the section name. */
export type RawLevelId = 'title' | 'legend' | 'tooltip' | 'radar' | 'pie';

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

/** The per-blob draft objects the save side commits into (built by `saveEditorState`, encoded once). */
export interface SaveDrafts {
    chartConfig: Record<string, unknown>;
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
    id: 'title' | 'legend' | 'tooltip' | 'radar',
    templates: readonly SnippetTemplate[],
    keys: {
        raw: 'titleRaw' | 'legendRaw' | 'tooltipRaw' | 'radarRaw';
        snippets: 'titleSnippets' | 'legendSnippets' | 'tooltipSnippets' | 'radarSnippets';
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
            // The pie fragment always rides (family-free); empty activations go undefined-lean
            // (and the raw key stays spread-in, even when '').
            commitHealed: healed => {
                drafts.chartConfig.pie = { ...state.pie, snippets: healed?.length ? healed : undefined };
            },
        },
    ],
};

/** The registry — step 1 (ADR-0047): the five scalar levels; step 2 lifts series/yAxes/xAxis/jsonSeriesStyle in. */
export const RAW_LEVELS: readonly RawLevelEntry[] = [
    flatSectionLevel('title', TITLE_TEMPLATES, { raw: 'titleRaw', snippets: 'titleSnippets' }),
    flatSectionLevel('legend', LEGEND_TEMPLATES, { raw: 'legendRaw', snippets: 'legendSnippets' }),
    flatSectionLevel('tooltip', TOOLTIP_TEMPLATES, { raw: 'tooltipRaw', snippets: 'tooltipSnippets' }),
    flatSectionLevel('radar', RADAR_TEMPLATES, { raw: 'radarRaw', snippets: 'radarSnippets' }, ['radar']),
    pieLevel,
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
