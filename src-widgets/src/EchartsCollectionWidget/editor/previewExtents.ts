/**
 * The preview's loaded data extents per series (ADR-0101) — the Farbskala placeholders name a
 * data-inherited bound's VALUE only when the preview has loaded the series (honest
 * placeholders): the preview reports, the cards read it through one context.
 *
 * @module EchartsCollectionWidget/editor/previewExtents
 * @remarks
 * Keyed by the EMITTED series name (the card resolves its own effective name the way the builder
 * does). An ambiguous name (two emitted series share it) is dropped — the card then shows the
 * source without a value instead of a neighbour's extent. The preview fetches a capped point
 * count, so the value is the preview's, which is what the editor can honestly know.
 */
import { createContext } from 'react';

import { seriesValueExtent, type ValueExtent } from '../seriesColorScale';

/**
 * Series name → loaded data extent; `null` = the series is loaded but carries no finite value
 * (the chart draws no scale for it). An absent name = unknown. Empty = nothing loaded (or no preview).
 */
export type PreviewExtents = Readonly<Record<string, ValueExtent | null>>;

export const PreviewExtentsContext = createContext<PreviewExtents>({});

const hasOwn = (o: object, key: string): boolean => Object.prototype.hasOwnProperty.call(o, key);

/**
 * What the preview knows about one series' values: its extent, `null` (loaded, no finite value)
 * or `undefined` (unknown — not loaded, ambiguous name). Own keys only, so a series named like an
 * object builtin never reads one.
 */
export const previewExtentOf = (extents: PreviewExtents, name: string): ValueExtent | null | undefined =>
    hasOwn(extents, name) ? extents[name] : undefined;

/** The extents of every uniquely named series of a (merged) preview option. */
export const previewSeriesExtents = (option: unknown): PreviewExtents => {
    const series = (option as { series?: unknown } | null | undefined)?.series;
    if (!Array.isArray(series)) {
        return {};
    }
    const out: Record<string, ValueExtent | null> = {};
    const seen = new Set<string>();
    for (const s of series as { name?: unknown; data?: unknown }[]) {
        const name = s?.name;
        if (typeof name !== 'string') {
            continue;
        }
        if (seen.has(name)) {
            delete out[name];
            continue;
        }
        seen.add(name);
        if (Array.isArray(s.data)) {
            out[name] = seriesValueExtent(s.data);
        }
    }
    return out;
};

/** Content equality — the modal keeps the previous object while nothing changed (no re-render churn). */
export const sameExtents = (a: PreviewExtents, b: PreviewExtents): boolean => {
    const ka = Object.keys(a);
    if (ka.length !== Object.keys(b).length) {
        return false;
    }
    return ka.every(k => {
        if (!hasOwn(b, k)) {
            return false;
        }
        const x = a[k];
        const y = b[k];
        return x === null || y === null ? x === y : x.min === y.min && x.max === y.max;
    });
};
