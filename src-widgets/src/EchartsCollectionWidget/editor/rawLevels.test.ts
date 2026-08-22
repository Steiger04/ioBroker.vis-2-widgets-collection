/**
 * Raw-level characterization (ADR-0047) — the load/save round-trip contract of every raw
 * level, pinned BEFORE the registry exists so the refactor underneath stays a pure refactor.
 *
 * @module EchartsCollectionWidget/editor/rawLevels.test
 * @remarks
 * The scenarios run over a per-level accessor table (blob-side store/read + state-side
 * read/write), so the SAME fixtures drive the registry loop once `RAW_LEVELS` exists — plus
 * the meta test that every registry id has a fixture here. The scenario matrix per level:
 * clean / stale-id-drop (catalog prune) / keep-only-drop (the badge never outlives its
 * content) / empty→blob-lean. Every scenario heals under the DEFAULT cartesian family — that
 * pins ADR-0047's family-free semantics (radar/pie blobs ride across family switches).
 */
import { describe, expect, it } from 'vitest';

import { decodeBlob, encodeBlob } from '../../lib/encoding';
import { RAW_LEVELS, healSaveLevels } from './rawLevels';
import { DEFAULT_EDITOR_STATE, loadEditorState, saveEditorState, type EditorState } from './editorState';

/** The stored chartConfig fragment shape (base64-decoded). */
type Cfg = Record<string, unknown>;

/** A raw level's placement — the only per-level knowledge the harness has. */
interface LevelAccess {
    /** Registry id (post-refactor the meta test maps RAW_LEVELS against this). */
    id: 'title' | 'legend' | 'tooltip' | 'radar' | 'pie';
    /** A real catalog id whose activation survives with {@link keepRaw}. */
    validId: string;
    /** Raw text keeping {@link validId} alive (≥1 leaf path present). */
    keepRaw: string;
    /** Write the stored pair for a load scenario (undefined = key absent). */
    store: (cfg: Cfg, raw: string | undefined, ids: string[] | undefined) => void;
    /** Read the loaded state-side pair. */
    loaded: (state: EditorState) => { raw: string; ids: string[] | undefined };
    /** Write the state-side pair for a save scenario. */
    setState: (state: EditorState, raw: string, ids: string[] | undefined) => void;
    /** Read the saved chartConfig fragment pair (undefined = key absent). */
    saved: (cfg: Cfg) => { raw: string | undefined; ids: string[] | undefined };
}

/** Flat section levels share the same placement anatomy — factory over the two state keys. */
const flatLevel = (
    id: LevelAccess['id'],
    validId: string,
    keepRaw: string,
    keys: { raw: string; snippets: string },
): LevelAccess => ({
    id,
    validId,
    keepRaw,
    store: (cfg, raw, ids) => {
        if (raw !== undefined) {
            cfg[keys.raw] = raw;
        }
        if (ids !== undefined) {
            cfg[keys.snippets] = ids;
        }
    },
    loaded: state => ({
        raw: state[keys.raw as keyof EditorState] as string,
        ids: state[keys.snippets as keyof EditorState] as string[],
    }),
    setState: (state, raw, ids) => {
        (state as unknown as Record<string, unknown>)[keys.raw] = raw;
        (state as unknown as Record<string, unknown>)[keys.snippets] = ids ?? [];
    },
    saved: cfg => ({
        raw: cfg[keys.raw] as string | undefined,
        ids: cfg[keys.snippets] as string[] | undefined,
    }),
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
    flatLevel('radar', 'radar-splitarea', '{ "splitArea": { "show": true } }', {
        raw: 'radarRaw',
        snippets: 'radarSnippets',
    }),
    // pie — the scalar level nested in the chartConfig blob's pie config (its raw key rides
    // even when empty: `{ ...state.pie }` spreads `raw: ''` — pinned as-is, ADR-0047 pure refactor).
    {
        id: 'pie',
        validId: 'pie-itemstyle',
        keepRaw: '{ "itemStyle": { "opacity": 0.5 } }',
        store: (cfg, raw, ids) => {
            const pie = { ...((cfg.pie as Cfg | undefined) ?? {}) };
            if (raw !== undefined) {
                pie.raw = raw;
            }
            if (ids !== undefined) {
                pie.snippets = ids;
            }
            cfg.pie = pie;
        },
        loaded: state => ({ raw: state.pie.raw ?? '', ids: state.pie.snippets }),
        setState: (state, raw, ids) => {
            state.pie = { ...state.pie, raw, snippets: ids };
        },
        saved: cfg => {
            const pie = cfg.pie as { raw?: string; snippets?: string[] } | undefined;
            return { raw: pie?.raw, ids: pie?.snippets };
        },
    },
];

const loadWith = (cfg: Cfg): EditorState => loadEditorState({ chartConfig: encodeBlob(JSON.stringify(cfg)) });

const savedCfg = (state: EditorState): Cfg => JSON.parse(decodeBlob(saveEditorState(state).chartConfig as string));

describe('raw-level load characterization (ADR-0047 — pinned before the registry, family-free by construction)', () => {
    it.each(LEVELS)('$id — clean: valid activation + its leaves survive', level => {
        const cfg: Cfg = {};
        level.store(cfg, level.keepRaw, [level.validId]);
        const loaded = level.loaded(loadWith(cfg));
        expect(loaded.raw).toBe(level.keepRaw);
        expect(loaded.ids).toEqual([level.validId]);
    });

    it.each(LEVELS)('$id — stale id drops silently (catalog prune)', level => {
        const cfg: Cfg = {};
        level.store(cfg, level.keepRaw, [level.validId, 'retired-by-catalog-rework']);
        expect(level.loaded(loadWith(cfg)).ids).toEqual([level.validId]);
    });

    it.each(LEVELS)('$id — activation without any leaf left drops (keep-only heal)', level => {
        const cfg: Cfg = {};
        level.store(cfg, '{ "handWrittenKey": 1 }', [level.validId]);
        expect(level.loaded(loadWith(cfg)).ids).toEqual([]);
    });

    it.each(LEVELS)('$id — empty load heals nothing into existence (blob-lean)', level => {
        const loaded = level.loaded(loadWith({}));
        expect(loaded.raw).toBe('');
        // pie stays undefined-lean (no activation object at all); flat levels normalise to [].
        expect(loaded.ids).toEqual(level.id === 'pie' ? undefined : []);
    });
});

describe('raw-level save characterization (ADR-0047 — the Apply-time heal, independent of the state)', () => {
    it.each(LEVELS)('$id — save heals the working copy (stale ids pruned, keep-only honored)', level => {
        const state = { ...DEFAULT_EDITOR_STATE };
        level.setState(state, level.keepRaw, [level.validId, 'retired-by-catalog-rework']);
        const saved = level.saved(savedCfg(state));
        expect(saved.raw).toBe(level.keepRaw);
        expect(saved.ids).toEqual([level.validId]);
    });

    it.each(LEVELS)('$id — keep-only drop on save: the blob never carries a badge its content cannot back', level => {
        const state = { ...DEFAULT_EDITOR_STATE };
        level.setState(state, '{ "handWrittenKey": 1 }', [level.validId]);
        expect(level.saved(savedCfg(state)).ids).toBeUndefined();
    });

    it.each(LEVELS)('$id — empty state saves lean (flat keys omitted; pie keeps its raw: "" husk)', level => {
        const state = { ...DEFAULT_EDITOR_STATE };
        level.setState(state, '', undefined);
        const saved = level.saved(savedCfg(state));
        if (level.id === 'pie') {
            // `{ ...state.pie }` always rides — raw: '' included, snippets undefined-lean.
            expect(saved.raw).toBe('');
        } else {
            expect(saved.raw).toBeUndefined();
        }
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

    it('families is UI-visibility metadata only (radar/pie scoped, the rest family-free)', () => {
        const byId = new Map(RAW_LEVELS.map(level => [level.id, level]));
        expect(byId.get('radar')?.families).toEqual(['radar']);
        expect(byId.get('pie')?.families).toEqual(['pie']);
        expect(byId.get('title')?.families).toBeUndefined();
        expect(byId.get('legend')?.families).toBeUndefined();
        expect(byId.get('tooltip')?.families).toBeUndefined();
    });

    it('every scalar level annotates lossRelevant: false (validation.ts owns the counting)', () => {
        expect(RAW_LEVELS.every(level => level.lossRelevant === false)).toBe(true);
    });

    it('the save heal never rewrites the state (ADR-0042 stale-until-Apply; the draft is the only output)', () => {
        const state = {
            ...DEFAULT_EDITOR_STATE,
            titleRaw: '{ "textStyle": { "fontFamily": "serif" } }',
            titleSnippets: ['textstyle', 'retired-by-catalog-rework'],
        };
        const drafts = { chartConfig: {} as Record<string, unknown> };
        healSaveLevels(state, drafts);
        // The working copy keeps the stale id until Apply; only the draft is healed.
        expect(state.titleSnippets).toEqual(['textstyle', 'retired-by-catalog-rework']);
        expect(drafts.chartConfig.titleSnippets).toEqual(['textstyle']);
        expect(drafts.chartConfig.titleRaw).toBe('{ "textStyle": { "fontFamily": "serif" } }');
    });
});
