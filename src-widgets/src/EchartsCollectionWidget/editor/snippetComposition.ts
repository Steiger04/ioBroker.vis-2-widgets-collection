/**
 * Snippet composition — the two-source model behind the template multi-select (ADR-0042).
 *
 * @module EchartsCollectionWidget/editor/snippetComposition
 * @remarks
 * All three raw escape hatches (chart-level U, Series raw, Axis raw) switched their template
 * affordance from a stateless one-shot insert to a PERSISTENT, ordered activation ("Aktive
 * Vorlage"). The editor text is the composition of the active templates (deep-merged in
 * selection order, last activation winning a shared leaf) plus the **Eigenanteil** — the leaves
 * the user hand-wrote or hand-changed. The text stays the persisted truth; the activation ids
 * ride beside it (chart: `chartSnippets`; series/axis/pie: `snippets` on their config objects).
 *
 * Attribution is a leaf-diff against the composed templates (arrays atomic — deepMerge treats
 * them as units), recomputed at every toggle: a leaf belongs to the Eigenanteil iff it is absent
 * from the composition or its value differs. Deletions need no persisted markers — a composed
 * path absent from the text IS the tombstone (derived fresh each toggle), which is exactly the
 * ADR-0042 rule that deactivating a template clears its tombstones: an empty composition
 * deletes nothing, so a deactivation→reactivation cycle restores the pristine snippet.
 */
import { deepMerge } from '../utils/mergeOption';

/** The structural catalog shape every template level satisfies (the id + JSON payload matter here). */
export interface SnippetTemplate {
    /** Stable catalog id (the persisted activation references it). */
    id: string;
    /** The snippet's JSON object as a string (catalog-audited valid). */
    json: string;
}

/** A level's persisted template activation: ordered ids, selection order = merge order. */
export interface SnippetSelection {
    ids: string[];
}

/** One toggle's outcome: the next selection, the recomposed text, and the two notice counts. */
export interface RecomposeResult {
    selection: SnippetSelection;
    /** The recomposed editor text ('' when nothing remains — no `{}` husk). */
    text: string;
    /** Eigenanteil leaves kept through the recomposition ("n Schlüsser blieben erhalten"). */
    kept: number;
    /** Template-supplied leaves that stay deleted (tombstones derived from the text). */
    deleted: number;
}

const isPlainObject = (v: unknown): v is Record<string, unknown> => !!v && typeof v === 'object' && !Array.isArray(v);

/**
 * Parse raw-override text into a plain object. Empty text is the empty composition (nothing
 * authored); invalid or non-object text is `null` — the toggle guard that locks the menu.
 */
const parseTextObject = (text: string): Record<string, unknown> | null => {
    const trimmed = (text ?? '').trim();
    if (!trimmed) {
        return {};
    }
    try {
        const v = JSON.parse(trimmed);
        return isPlainObject(v) ? v : null;
    } catch {
        return null;
    }
};

/**
 * Flatten an object into dotted leaf paths: plain objects descended, arrays and primitives
 * atomic (a `markPoint.data` list is one leaf, mirroring deepMerge's array-replace semantics).
 */
const leafMap = (obj: Record<string, unknown>, prefix = ''): Map<string, unknown> => {
    const out = new Map<string, unknown>();
    for (const [k, v] of Object.entries(obj)) {
        const path = prefix ? `${prefix}.${k}` : k;
        if (isPlainObject(v)) {
            for (const [p, val] of leafMap(v, path)) {
                out.set(p, val);
            }
        } else {
            out.set(path, v);
        }
    }
    return out;
};

/** Atomic leaf equality — both sides always come from `JSON.parse`, so stringify comparison suffices. */
const sameValue = (a: unknown, b: unknown): boolean => a === b || JSON.stringify(a) === JSON.stringify(b);

/** Rebuild a nested object from dotted leaf paths (the inverse of {@link leafMap}). */
const fromLeafMap = (leaves: Map<string, unknown>): Record<string, unknown> => {
    const root: Record<string, unknown> = {};
    for (const [path, v] of leaves) {
        const parts = path.split('.');
        let cur = root;
        for (let i = 0; i < parts.length - 1; i++) {
            if (!isPlainObject(cur[parts[i]])) {
                cur[parts[i]] = {};
            }
            cur = cur[parts[i]] as Record<string, unknown>;
        }
        cur[parts[parts.length - 1]] = v;
    }
    return root;
};

/**
 * Compose the active templates' JSON in selection order — later ids win shared leaves
 * (ADR-0042 decision 4). Unknown ids (family-pruned or stale) are skipped, not fatal.
 */
export const composeActiveSnippets = (
    templates: readonly SnippetTemplate[],
    ids: readonly string[],
): Record<string, unknown> => {
    const byId = new Map(templates.map(t => [t.id, t]));
    let out: Record<string, unknown> = {};
    for (const id of ids) {
        const t = byId.get(id);
        const v = t ? parseTextObject(t.json) : null;
        if (v && Object.keys(v).length) {
            out = deepMerge(out, v);
        }
    }
    return out;
};

/**
 * Drop the tombstoned paths from a composed object. Pure (rebuilds, never mutates); a branch
 * left without leaves is pruned entirely so the text never grows `{}` husks. Returns `null`
 * when nothing survives.
 */
const pruneTombstones = (
    node: Record<string, unknown>,
    tombstones: ReadonlySet<string>,
    prefix = '',
): Record<string, unknown> | null => {
    const out: Record<string, unknown> = {};
    let live = false;
    for (const [k, v] of Object.entries(node)) {
        const path = prefix ? `${prefix}.${k}` : k;
        if (isPlainObject(v)) {
            const child = pruneTombstones(v, tombstones, path);
            if (child) {
                out[k] = child;
                live = true;
            }
        } else if (!tombstones.has(path)) {
            out[k] = v;
            live = true;
        }
    }
    return live ? out : null;
};

/**
 * Toggle one template's activation and recompose the editor text (ADR-0042 decisions 1–5).
 *
 * @returns The next selection + recomposed text + notice counts, or `null` when the current
 * text is invalid JSON — the caller must have the menu locked in that state (decision 8);
 * nothing is ever silently discarded.
 */
export const toggleSnippet = (args: {
    templates: readonly SnippetTemplate[];
    selection: SnippetSelection;
    id: string;
    currentText: string;
}): RecomposeResult | null => {
    const current = parseTextObject(args.currentText);
    if (!current) {
        return null;
    }
    const oldIds = args.selection.ids;
    const nextIds = oldIds.includes(args.id) ? oldIds.filter(i => i !== args.id) : [...oldIds, args.id];

    // Attribution: a leaf belongs to the Eigenanteil iff absent from the current composition or
    // changed by hand (arrays/objects atomic).
    const oldLeaves = leafMap(composeActiveSnippets(args.templates, oldIds));
    const curLeaves = leafMap(current);
    const own = new Map<string, unknown>();
    for (const [p, v] of curLeaves) {
        if (!oldLeaves.has(p) || !sameValue(oldLeaves.get(p), v)) {
            own.set(p, v);
        }
    }

    // Tombstones: composed paths absent from the text were deleted by hand and stay deleted —
    // but only count (and only block) when the NEXT composition would re-supply them. An empty
    // composition derives none, so a deactivation clears its own tombstones by construction.
    const nextLeaves = leafMap(composeActiveSnippets(args.templates, nextIds));
    const tombstones = new Set<string>();
    for (const p of oldLeaves.keys()) {
        if (!curLeaves.has(p) && nextLeaves.has(p)) {
            tombstones.add(p);
        }
    }

    const merged = pruneTombstones(
        deepMerge(composeActiveSnippets(args.templates, nextIds), fromLeafMap(own)),
        tombstones,
    );
    const text = merged && Object.keys(merged).length ? JSON.stringify(merged, null, 2) : '';
    return { selection: { ids: nextIds }, text, kept: own.size, deleted: tombstones.size };
};

/**
 * Prune an activation list to the ids the catalog still offers (family prune on Apply,
 * ADR-0042 decision 6) — `saveEditorState` runs every level's list through this.
 */
export const pruneSnippetIds = (templates: readonly SnippetTemplate[], ids: readonly string[]): string[] => {
    const offered = new Set(templates.map(t => t.id));
    return ids.filter(id => offered.has(id));
};

/**
 * The persistence-normalised config patch one recomposition commits at a card/axis/pie host:
 * the raw text (undefined when empty) + the activations (undefined when none) — one object the
 * host spreads into its series/axis/pie config, so both layers change in ONE history step.
 */
export const snippetPatch = (result: { text: string; ids: string[] }): { raw?: string; snippets?: string[] } => ({
    raw: result.text || undefined,
    snippets: result.ids.length ? result.ids : undefined,
});
