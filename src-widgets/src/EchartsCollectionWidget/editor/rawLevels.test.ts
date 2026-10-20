/**
 * Raw-level characterization (ADR-0047) — the load/save round-trip contract of every raw
 * level, pinned BEFORE the registry exists (scalar levels) and BEFORE the per-item lift
 * (series/yAxes/xAxis/jsonSeriesStyle) so both refactors underneath stay pure refactors.
 *
 * @module EchartsCollectionWidget/editor/rawLevels.test
 * @remarks
 * The scenarios run over a per-level accessor table (blob-side store/read + state-side
 * read/write), so the SAME fixtures drive the registry loop — plus the meta test that every
 * registry id has a fixture here. The scenario matrix per level: clean / stale-id-drop
 * (catalog prune) / keep-only-drop (the badge never outlives its content) / empty→lean.
 * The lean semantics DIFFER per storage and are pinned per level: flat state fields
 * normalise to `[]` and omit their blob keys; nested items stay `undefined`-lean — except
 * yAxes, whose heal keeps `[]` both sides. Every scenario heals under the DEFAULT cartesian
 * family — that pins ADR-0047's family-free semantics (the pie blob rides across switches).
 */
import { describe, expect, it } from 'vitest';

import { decodeBlob, encodeBlob } from '../../lib/encoding';
import { RAW_LEVELS, healLoadLevels, healSaveLevels, type SaveDrafts } from './rawLevels';
import { DEFAULT_EDITOR_STATE, loadEditorState, saveEditorState, type EditorState } from './editorState';

/** A stored rxData record / an `onDataChange` patch — both carry base64 blobs. */
type Data = Record<string, unknown>;

/** A raw level's placement — the only per-level knowledge the harness has. */
interface LevelAccess {
    /** Registry id (the meta test maps RAW_LEVELS against this). */
    id: 'title' | 'legend' | 'tooltip' | 'pie' | 'series' | 'yAxes' | 'xAxis' | 'jsonSeriesStyle';
    /** A real catalog id whose activation survives with {@link keepRaw}. */
    validId: string;
    /** Raw text keeping {@link validId} alive (≥1 leaf path present). */
    keepRaw: string;
    /** Loaded ids after the keep-only drop (flat `[]`-normalised; nested `undefined`; yAxes `[]`). */
    idsAfterDrop: string[] | undefined;
    /** Loaded ids when nothing was stored (flat `[]` via `?? []`; nested `undefined`). */
    idsWhenAbsent: string[] | undefined;
    /** Saved raw key when the state's raw is `''` (flat omits the key; nested items spread it in). */
    rawWhenEmptySaved: string | undefined;
    /** Saved ids after the keep-only drop on save (yAxes keeps `[]`; the rest go `undefined`-lean). */
    savedIdsAfterDrop: string[] | undefined;
    /** Write the stored pair for a load scenario (undefined = key absent). */
    store: (data: Data, raw: string | undefined, ids: string[] | undefined) => void;
    /** Read the loaded state-side pair. */
    loaded: (state: EditorState) => { raw: string; ids: string[] | undefined };
    /** Write the state-side pair for a save scenario. */
    setState: (state: EditorState, raw: string, ids: string[] | undefined) => void;
    /** Read the saved patch-side pair (undefined = key absent). */
    saved: (patch: Data) => { raw: string | undefined; ids: string[] | undefined };
}

/** The chartConfig fragment shape (base64-decoded). */
type Cfg = Record<string, unknown>;

/** Flat section levels share one placement anatomy — a factory over the two state keys. */
const flatLevel = (
    id: 'title' | 'legend' | 'tooltip',
    validId: string,
    keepRaw: string,
    keys: { raw: string; snippets: string },
): LevelAccess => ({
    id,
    validId,
    keepRaw,
    idsAfterDrop: [],
    idsWhenAbsent: [],
    rawWhenEmptySaved: undefined,
    savedIdsAfterDrop: undefined,
    store: (data, raw, ids) => {
        const cfg: Cfg = {};
        if (raw !== undefined) {
            cfg[keys.raw] = raw;
        }
        if (ids !== undefined) {
            cfg[keys.snippets] = ids;
        }
        data.chartConfig = encodeBlob(JSON.stringify(cfg));
    },
    loaded: state => ({
        raw: state[keys.raw as keyof EditorState] as string,
        ids: state[keys.snippets as keyof EditorState] as string[],
    }),
    setState: (state, raw, ids) => {
        (state as unknown as Record<string, unknown>)[keys.raw] = raw;
        (state as unknown as Record<string, unknown>)[keys.snippets] = ids ?? [];
    },
    saved: patch => {
        const cfg: Cfg = JSON.parse(decodeBlob(patch.chartConfig as string));
        return { raw: cfg[keys.raw] as string | undefined, ids: cfg[keys.snippets] as string[] | undefined };
    },
});

/** The stored meta item of a per-item level (seriesConfig / yAxes / xAxis / jsonSeriesStyle). */
type Item = Record<string, unknown>;

/** Per-item levels share the nested placement — a factory over blob write + item read/write. */
const itemLevel = (
    id: 'series' | 'yAxes' | 'xAxis' | 'jsonSeriesStyle',
    validId: string,
    keepRaw: string,
    lean: { drop: string[] | undefined; absent: string[] | undefined },
    blob: {
        storeItem: (data: Data, item: Item) => void;
        savedItem: (patch: Data) => Item | undefined;
        loadedItem: (state: EditorState) => Item | undefined;
        setStateItem: (state: EditorState, item: Item) => void;
    },
): LevelAccess => ({
    id,
    validId,
    keepRaw,
    idsAfterDrop: lean.drop,
    idsWhenAbsent: lean.absent,
    rawWhenEmptySaved: '', // the item spreads in — an empty raw rides as '' (pinned husk)
    savedIdsAfterDrop: lean.drop,
    store: (data, raw, ids) => {
        const item: Item = {};
        if (raw !== undefined) {
            item.raw = raw;
        }
        if (ids !== undefined) {
            item.snippets = ids;
        }
        blob.storeItem(data, item);
    },
    loaded: state => {
        const item = blob.loadedItem(state);
        return { raw: (item?.raw as string | undefined) ?? '', ids: item?.snippets as string[] | undefined };
    },
    setState: (state, raw, ids) => blob.setStateItem(state, { raw, snippets: ids }),
    saved: patch => {
        const item = blob.savedItem(patch);
        return { raw: item?.raw as string | undefined, ids: item?.snippets as string[] | undefined };
    },
});

const LEVELS: LevelAccess[] = [
    flatLevel('title', 'textstyle', '{ "textStyle": { "fontFamily": "serif" } }', {
        raw: 'titleRaw',
        snippets: 'titleSnippets',
    }),
    flatLevel('legend', 'textstyle', '{ "textStyle": { "fontFamily": "serif" } }', {
        raw: 'legendRaw',
        snippets: 'legendSnippets',
    }),
    flatLevel('tooltip', 'textstyle', '{ "textStyle": { "color": "#222" } }', {
        raw: 'tooltipRaw',
        snippets: 'tooltipSnippets',
    }),
    // pie — the scalar level nested in the chartConfig blob's pie config. Since the follow-up
    // decision 2026-08-22 its fragment is blob-lean like the flat sections: an empty raw no
    // longer rides as a `raw: ''` husk.
    {
        id: 'pie',
        validId: 'pie-itemstyle',
        keepRaw: '{ "itemStyle": { "opacity": 0.5 } }',
        idsAfterDrop: [],
        idsWhenAbsent: undefined,
        rawWhenEmptySaved: undefined,
        savedIdsAfterDrop: undefined,
        store: (data, raw, ids) => {
            const pie: Cfg = {};
            if (raw !== undefined) {
                pie.raw = raw;
            }
            if (ids !== undefined) {
                pie.snippets = ids;
            }
            data.chartConfig = encodeBlob(JSON.stringify({ pie }));
        },
        loaded: state => ({ raw: state.pie.raw ?? '', ids: state.pie.snippets }),
        setState: (state, raw, ids) => {
            state.pie = { ...state.pie, raw, snippets: ids };
        },
        saved: patch => {
            const cfg: Cfg = JSON.parse(decodeBlob(patch.chartConfig as string));
            const pie = cfg.pie as { raw?: string; snippets?: string[] } | undefined;
            return { raw: pie?.raw, ids: pie?.snippets };
        },
    },
    // series — per-card raw in the seriesConfig meta blob (cartesian line, one card).
    itemLevel(
        'series',
        'line-itemstyle',
        '{ "itemStyle": { "opacity": 0.5 } }',
        { drop: undefined, absent: undefined },
        {
            storeItem: (data, item) => {
                data.series_count = 1;
                data.oid1 = 'adapter.0.test';
                data.seriesConfig = encodeBlob(JSON.stringify([{ name: 'S1', ...item }]));
            },
            loadedItem: state => state.series[0] as unknown as Item | undefined,
            setStateItem: (state, item) => {
                state.series = [{ oid: 'adapter.0.test', name: 'S1', ...item }];
            },
            savedItem: patch => (JSON.parse(decodeBlob(patch.seriesConfig as string)) as Item[])[0],
        },
    ),
    // yAxes — per-card raw in the yAxes blob; its heal KEEPS [] both sides (unlike series).
    itemLevel(
        'yAxes',
        'logbase',
        '{ "logBase": 3 }',
        { drop: [], absent: undefined },
        {
            storeItem: (data, item) => {
                // The axis needs a binder to survive the ADR-0069 load heal (history/live sight).
                data.series_count = 1;
                data.oid1 = 'adapter.0.axisraw';
                data.seriesConfig = encodeBlob(JSON.stringify([{ name: 'S1', yAxisIndex: 0 }]));
                data.yAxes = encodeBlob(JSON.stringify([{ position: 'left', splitLine: true, ...item }]));
            },
            loadedItem: state => state.yAxes[0] as Item | undefined,
            setStateItem: (state, item) => {
                state.yAxes = [{ ...state.yAxes[0], ...item }];
            },
            savedItem: patch => (JSON.parse(decodeBlob(patch.yAxes as string)) as Item[])[0],
        },
    ),
    // xAxis — the single X-Karte's raw in the xAxis blob.
    itemLevel(
        'xAxis',
        'nametextstyle',
        '{ "nameTextStyle": { "fontStyle": "italic" } }',
        { drop: undefined, absent: undefined },
        {
            storeItem: (data, item) => {
                data.xAxis = encodeBlob(JSON.stringify(item));
            },
            loadedItem: state => state.xAxis as Item,
            setStateItem: (state, item) => {
                state.xAxis = { ...state.xAxis, ...item };
            },
            savedItem: patch => JSON.parse(decodeBlob(patch.xAxis as string)) as Item,
        },
    ),
    // jsonSeriesStyle — per-payload-name raw in the jsonSeriesStyle blob (json-mode overlay).
    itemLevel(
        'jsonSeriesStyle',
        'line-itemstyle',
        '{ "itemStyle": { "opacity": 0.5 } }',
        { drop: undefined, absent: undefined },
        {
            storeItem: (data, item) => {
                data.jsonSeriesStyle = encodeBlob(JSON.stringify({ Payload: item }));
            },
            loadedItem: state => state.jsonSeriesStyle.Payload as Item | undefined,
            setStateItem: (state, item) => {
                state.jsonSeriesStyle = { Payload: item };
            },
            savedItem: patch =>
                (JSON.parse(decodeBlob(patch.jsonSeriesStyle as string)) as Record<string, Item>).Payload,
        },
    ),
];

describe('raw-level load characterization (ADR-0047 — pinned before the registry, family-free by construction)', () => {
    it.each(LEVELS)('$id — clean: valid activation + its leaves survive', level => {
        const data: Data = {};
        level.store(data, level.keepRaw, [level.validId]);
        const loaded = level.loaded(loadEditorState(data));
        expect(loaded.raw).toBe(level.keepRaw);
        expect(loaded.ids).toEqual([level.validId]);
    });

    it.each(LEVELS)('$id — stale id drops silently (catalog prune)', level => {
        const data: Data = {};
        level.store(data, level.keepRaw, [level.validId, 'retired-by-catalog-rework']);
        expect(level.loaded(loadEditorState(data)).ids).toEqual([level.validId]);
    });

    it.each(LEVELS)('$id — activation without any leaf left drops (keep-only heal)', level => {
        const data: Data = {};
        level.store(data, '{ "handWrittenKey": 1 }', [level.validId]);
        expect(level.loaded(loadEditorState(data)).ids).toEqual(level.idsAfterDrop);
    });

    it.each(LEVELS)('$id — empty load heals nothing into existence (lean)', level => {
        const loaded = level.loaded(loadEditorState({}));
        expect(loaded.raw).toBe('');
        expect(loaded.ids).toEqual(level.idsWhenAbsent);
    });
});

describe('raw-level save characterization (ADR-0047 — the Apply-time heal, independent of the state)', () => {
    it.each(LEVELS)('$id — save heals the working copy (stale ids pruned, keep-only honored)', level => {
        const state = { ...DEFAULT_EDITOR_STATE };
        level.setState(state, level.keepRaw, [level.validId, 'retired-by-catalog-rework']);
        const saved = level.saved(saveEditorState(state));
        expect(saved.raw).toBe(level.keepRaw);
        expect(saved.ids).toEqual([level.validId]);
    });

    it.each(LEVELS)('$id — keep-only drop on save: the blob never carries a badge its content cannot back', level => {
        const state = { ...DEFAULT_EDITOR_STATE };
        level.setState(state, '{ "handWrittenKey": 1 }', [level.validId]);
        expect(level.saved(saveEditorState(state)).ids).toEqual(level.savedIdsAfterDrop);
    });

    it.each(LEVELS)('$id — empty state saves lean (pie too; per-item items keep their raw: "" husk)', level => {
        const state = { ...DEFAULT_EDITOR_STATE };
        level.setState(state, '', undefined);
        const saved = level.saved(saveEditorState(state));
        expect(saved.raw).toBe(level.rawWhenEmptySaved);
        expect(saved.ids).toBeUndefined();
    });
});

describe('raw-level registry (ADR-0047 — the registry side of the pinned contract)', () => {
    const fixtureIds = new Set(LEVELS.map(level => level.id));

    it('meta: every registry id is covered by a fixture above (a future level without tests is red)', () => {
        const ids = RAW_LEVELS.map(level => level.id);
        expect(ids.every(id => fixtureIds.has(id))).toBe(true);
        expect(ids.length).toBe(fixtureIds.size);
    });

    it('families is UI-visibility metadata only (pie scoped, the rest family-free)', () => {
        const byId = new Map(RAW_LEVELS.map(level => [level.id, level]));
        expect(byId.get('pie')?.families).toEqual(['pie']);
        for (const id of ['title', 'legend', 'tooltip', 'series', 'yAxes', 'xAxis', 'jsonSeriesStyle'] as const) {
            expect(byId.get(id)?.families).toBeUndefined();
        }
    });

    it('series slot resolution: tabellarisch pie rings heal against pie-ring, slice ids prune (ADR-0082)', () => {
        const state: EditorState = {
            ...DEFAULT_EDITOR_STATE,
            mode: 'json',
            jsonKind: 'table',
            chartType: 'pie',
            series: [
                {
                    id: 'r0',
                    oid: '',
                    yPath: 'temp',
                    yAxisIndex: 0,
                    // labelLine leaves present — keeps the ring activation alive through the
                    // keep-only drop (the badge never outlives its content).
                    raw: '{ "labelLine": { "show": true } }',
                    snippets: ['pie-ring-labelline', 'slice-label'],
                },
            ],
        };
        healLoadLevels(state);
        // The ring catalog keeps its own activation; a per-slice id is stale against it
        expect(state.series[0].snippets).toEqual(['pie-ring-labelline']);
    });

    it('every level except series (the family-switch loss source) annotates lossRelevant: false', () => {
        const byId = new Map(RAW_LEVELS.map(level => [level.id, level]));
        expect(byId.get('series')?.lossRelevant).toBeUndefined();
        expect(RAW_LEVELS.every(level => level.id === 'series' || level.lossRelevant === false)).toBe(true);
    });

    it('the save heal never rewrites the state (ADR-0042 stale-until-Apply; the draft is the only output)', () => {
        const state = {
            ...DEFAULT_EDITOR_STATE,
            titleRaw: '{ "textStyle": { "fontFamily": "serif" } }',
            titleSnippets: ['textstyle', 'retired-by-catalog-rework'],
        };
        const drafts: SaveDrafts = {
            chartConfig: {},
            seriesConfig: [],
            yAxes: [],
            xAxis: {},
            jsonSeriesStyle: {},
        };
        healSaveLevels(state, drafts);
        // The working copy keeps the stale id until Apply; only the draft is healed.
        expect(state.titleSnippets).toEqual(['textstyle', 'retired-by-catalog-rework']);
        expect(drafts.chartConfig.titleSnippets).toEqual(['textstyle']);
        expect(drafts.chartConfig.titleRaw).toBe('{ "textStyle": { "fontFamily": "serif" } }');
    });
});
