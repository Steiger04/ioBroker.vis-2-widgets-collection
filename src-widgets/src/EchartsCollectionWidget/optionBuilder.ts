/**
 * echarts option builders — the generated (G) side of the data-wins seam (map decision 03)
 * plus the parsers for the persisted config blobs and the JSON-state payload.
 *
 * @module EchartsCollectionWidget/optionBuilder
 * @remarks
 * G owns `series`, `xAxis`, `yAxis`, `legend.data`. It is built from the resolved chart
 * series (history / live / json) plus the per-series rendering metadata stored in the
 * `seriesConfig` blob. The user presentation overrides (`chartOverrides`) are validated by
 * {@link parseUserJson} and merged over G upstream (see mergeOptionForEcharts).
 */
import type { EChartsOption } from 'echarts';

import { decodeBlob } from '../lib/encoding';
import type { SeriesPoint } from './historyLogic';

/** Per-series rendering metadata (stored in the `seriesConfig` blob, keyed by index). */
export interface SeriesMeta {
    name?: string;
    color?: string;
    type?: 'line' | 'bar';
    yAxisIndex?: 0 | 1;
}

/** A resolved series the chart can render. */
export interface ChartSeries {
    name: string;
    data: SeriesPoint[];
}

/** Template presentation defaults (U-side foundation) for the line template. */
export const LINE_TEMPLATE_DEFAULTS: Record<string, unknown> = {
    tooltip: { trigger: 'axis' },
    grid: { left: 48, right: 18, top: 30, bottom: 28 },
    legend: { top: 4 },
};

export type UserJsonResult = { ok: true; value: Record<string, unknown> } | { ok: false; error: string };

/**
 * Validate the Advanced JSON (chartOverrides) — must be a JSON object of presentation keys.
 * An empty string is valid (no overrides).
 */
export const parseUserJson = (raw: string): UserJsonResult => {
    const trimmed = raw.trim();
    if (!trimmed) {
        return { ok: true, value: {} };
    }
    try {
        const v = JSON.parse(trimmed);
        if (v && typeof v === 'object' && !Array.isArray(v)) {
            return { ok: true, value: v as Record<string, unknown> };
        }
        return { ok: false, error: 'Must be a JSON object of presentation keys.' };
    } catch (e) {
        return { ok: false, error: (e as Error).message };
    }
};

/** Decode + parse the `seriesConfig` blob into per-series metadata. Empty/invalid → `[]`. */
export const parseSeriesConfig = (raw: string | undefined | null): SeriesMeta[] => {
    if (!raw) {
        return [];
    }
    try {
        const parsed = JSON.parse(decodeBlob(raw));
        return Array.isArray(parsed) ? (parsed as SeriesMeta[]) : [];
    } catch {
        return [];
    }
};

/** Normalize a heterogeneous array of points into echarts `[ts, val]` pairs. */
const normalizePoints = (data: unknown): SeriesPoint[] => {
    if (!Array.isArray(data)) {
        return [];
    }
    return data.map((p, i): SeriesPoint => {
        if (Array.isArray(p) && p.length >= 2 && typeof p[0] === 'number') {
            return [p[0], typeof p[1] === 'number' ? p[1] : null];
        }
        if (p && typeof p === 'object') {
            const o = p as Record<string, unknown>;
            const ts = o.ts ?? o.time ?? o.x;
            const val = o.val ?? o.value ?? o.y;
            return [typeof ts === 'number' ? ts : i, typeof val === 'number' ? val : null];
        }
        return [i, null];
    });
};

/**
 * Parse a JSON-state payload (json mode) into chart series.
 *
 * @remarks
 * Auto-detects the shape (map decision 04):
 *  - `{ series: [{ name?, data }] }` — multi-series
 *  - `{ data: [...] }`               — single series
 *  - `[...]` (bare array of points)  — single series
 * Points may be `[ts, val]` pairs or `{ ts|time|x, val|value|y }` objects.
 */
export const parseJsonState = (raw: string | undefined | null): ChartSeries[] => {
    if (!raw) {
        return [];
    }
    let v: unknown;
    try {
        v = JSON.parse(raw);
    } catch {
        return [];
    }
    if (v && typeof v === 'object' && !Array.isArray(v)) {
        const o = v as Record<string, unknown>;
        if (Array.isArray(o.series)) {
            return (o.series as unknown[]).map((s, i) => {
                const so = (s ?? {}) as Record<string, unknown>;
                return {
                    name: typeof so.name === 'string' ? so.name : `Series ${i + 1}`,
                    data: normalizePoints(so.data),
                };
            });
        }
        if (Array.isArray(o.data)) {
            return [{ name: 'Series 1', data: normalizePoints(o.data) }];
        }
    }
    if (Array.isArray(v)) {
        return [{ name: 'Series 1', data: normalizePoints(v) }];
    }
    return [];
};

/**
 * G — the data-driven option owned by the widget (per seam 03).
 *
 * Owns `series`, `xAxis`, `yAxis`, `legend.data`; per-series styling comes from the
 * `seriesConfig` metadata (name / colour / type / yAxisIndex).
 *
 * @param series - Resolved chart series (history / live / json).
 * @param meta - Per-series rendering metadata from the `seriesConfig` blob.
 */
export const buildGeneratedOption = (series: readonly ChartSeries[], meta: readonly SeriesMeta[]): EChartsOption => {
    const built = series.map((s, i) => {
        const m = meta[i];
        const name = m?.name || s.name || `Series ${i + 1}`;
        const entry: Record<string, unknown> = {
            name,
            type: m?.type ?? 'line',
            yAxisIndex: m?.yAxisIndex ?? 0,
            smooth: true,
            showSymbol: false,
            data: s.data,
        };
        if (m?.color) {
            entry.color = m.color;
            entry.itemStyle = { color: m.color };
        }
        return { name, entry };
    });
    return {
        legend: { data: built.map(x => x.name) },
        xAxis: { type: 'time' },
        yAxis: [{ type: 'value' }, { type: 'value' }],
        series: built.map(x => x.entry) as unknown as EChartsOption['series'],
    };
};
