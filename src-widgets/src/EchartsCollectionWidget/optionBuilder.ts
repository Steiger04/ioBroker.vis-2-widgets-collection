/**
 * echarts option orchestrator — the generated (G) side dispatcher + the persisted-config
 * parsers (ADR-0007 GUI-owns-presentation seam, ADR-0008 type-family data model).
 *
 * @module EchartsCollectionWidget/optionBuilder
 * @remarks
 * G is built per **chart family** (cartesian / pie / gauge / radar). Each family builder
 * authors both the data (series points, coordinate system, legend names) AND the GUI-owned
 * presentation (per-series styling, chart-wide legend/tooltip/animation/dataZoom/thresholds)
 * into one option fragment. The data-wins seam ({@link mergeOptionForEcharts}) then layers U
 * (the demoted Advanced JSON) over G and forces only the data-binding keys back.
 *
 * The parsers live here (not in the family modules) because they are family-agnostic:
 * `parseJsonState` (json-mode payload), `parseSeriesConfig` (per-series meta blob),
 * `parseUserJson` (Advanced-JSON validator).
 */
import type { EChartsOption } from 'echarts';

import type {
    EchartsChartFamily,
    EchartsChartType,
    EchartsSeriesMeta,
} from '../types/field-definitions/echarts-fields';
import { decodeBlob } from '../lib/encoding';
import type { SeriesPoint } from './historyLogic';

import { buildCartesianOption } from './optionBuilders/cartesian';
import { buildGaugeOption } from './optionBuilders/gauge';
import { buildPieOption } from './optionBuilders/pie';
import { buildRadarOption } from './optionBuilders/radar';
import type { ChartSeries, GeneratedInput, PresentationConfig } from './optionBuilders/types';

// Re-export the shared builder types so existing imports (`SeriesMeta`, `ChartSeries`) keep working.
export type { ChartSeries, GeneratedInput, PresentationConfig };
/** Alias kept for continuity with v1 imports. */
export type SeriesMeta = EchartsSeriesMeta;
export type { EchartsChartFamily, EchartsChartType } from '../types/field-definitions/echarts-fields';

/**
 * Derive the coordinate-system family from the concrete {@link EchartsChartType} (ADR-0008
 * addendum r4). line/bar → cartesian; pie/gauge/radar → themselves. The `default` arm also
 * covers legacy values still stored by older widgets (no auto-migration): the family-only
 * `'cartesian'` AND the removed `'area'` type (r4 — area is now a per-series fill mode, not a
 * chart type) both render as the cartesian family (default line).
 */
export const familyOf = (chartType: EchartsChartType | 'cartesian' | 'area' | undefined): EchartsChartFamily => {
    switch (chartType) {
        case 'pie':
            return 'pie';
        case 'gauge':
            return 'gauge';
        case 'radar':
            return 'radar';
        // line / bar / legacy 'cartesian' / legacy 'area' / undefined → cartesian
        default:
            return 'cartesian';
    }
};

export type UserJsonResult = { ok: true; value: Record<string, unknown> } | { ok: false; error: string };

/**
 * Validate the Advanced JSON (chartOverrides / U) — must be a JSON object of presentation keys.
 * An empty string is valid (no overrides). Functions are not expressible in JSON, so this
 * inherently rejects free-JS formatters (ADR-0007).
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
export const parseSeriesConfig = (raw: string | undefined | null): EchartsSeriesMeta[] => {
    if (!raw) {
        return [];
    }
    try {
        const parsed = JSON.parse(decodeBlob(raw));
        return Array.isArray(parsed) ? (parsed as EchartsSeriesMeta[]) : [];
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

/** Result of parsing a JSON-state payload: the resolved series (data only) and any parse error. */
export type JsonStateResult = { series: ChartSeries[]; error?: string };

/**
 * Parse a JSON-state payload (json mode) into chart series (data only — presentation comes from
 * the name-keyed overlay in the builder, ADR-0011). Auto-detects four shapes:
 *  - `{ series: [{ name?, data }] }` — multi-series (one entry per element).
 *  - `{ data: [...] }` — a single series.
 *  - bare points array `[[ts,val],...]` / `[{ts,val},...]` — a single series.
 *  - bare array of series objects `[{name,data},...]` — multi-series (ADR-0011; the natural shape
 *    that previously collapsed to one null-series).
 *
 * A malformed JSON string surfaces an `error` instead of a silent blank chart (ADR-0011).
 */
export const parseJsonState = (raw: string | undefined | null): JsonStateResult => {
    if (!raw) {
        return { series: [] };
    }
    let v: unknown;
    try {
        v = JSON.parse(raw);
    } catch (e) {
        return { series: [], error: (e as Error).message };
    }
    if (v && typeof v === 'object' && !Array.isArray(v)) {
        const o = v as Record<string, unknown>;
        if (Array.isArray(o.series)) {
            return {
                series: (o.series as unknown[]).map((s, i) => {
                    const so = (s ?? {}) as Record<string, unknown>;
                    return {
                        name: typeof so.name === 'string' ? so.name : `Series ${i + 1}`,
                        data: normalizePoints(so.data),
                    };
                }),
            };
        }
        if (Array.isArray(o.data)) {
            return { series: [{ name: 'Series 1', data: normalizePoints(o.data) }] };
        }
        return { series: [] };
    }
    if (Array.isArray(v)) {
        // Bare array: a points list (one series) OR a list of series objects (multi-series).
        // Distinguish by the first non-null element: a plain object with an array-valued `data`
        // field is a series object, not a point.
        const first = v.find(x => x !== null && x !== undefined);
        const isArrayOfSeries =
            first !== undefined &&
            typeof first === 'object' &&
            !Array.isArray(first) &&
            Array.isArray((first as Record<string, unknown>).data);
        if (isArrayOfSeries) {
            return {
                series: v.map((s, i) => {
                    const so = (s ?? {}) as Record<string, unknown>;
                    return {
                        name: typeof so.name === 'string' ? so.name : `Series ${i + 1}`,
                        data: normalizePoints(so.data),
                    };
                }),
            };
        }
        return { series: [{ name: 'Series 1', data: normalizePoints(v) }] };
    }
    return { series: [] };
};

/** Decode + parse the `jsonSeriesStyle` blob into the name-keyed overlay (ADR-0011). Empty/invalid → `{}`. */
export const parseJsonSeriesStyle = (raw: string | undefined | null): Record<string, EchartsSeriesMeta> => {
    if (!raw) {
        return {};
    }
    try {
        const parsed = JSON.parse(decodeBlob(raw));
        return parsed && typeof parsed === 'object' && !Array.isArray(parsed)
            ? (parsed as Record<string, EchartsSeriesMeta>)
            : {};
    } catch {
        return {};
    }
};

/**
 * G — build the generated option by dispatching to the active family builder.
 *
 * @param input - Discriminated by family; carries the resolved data + meta + presentation.
 * @returns The G fragment (data + GUI-owned presentation), pre-merge.
 */
export const buildGeneratedOption = (input: GeneratedInput): EChartsOption => {
    switch (input.family) {
        case 'pie':
            return buildPieOption(input.series, input.meta, input.p);
        case 'gauge':
            return buildGaugeOption(input.value, input.meta, input.p);
        case 'radar':
            return buildRadarOption(input.values, input.meta, input.p);
        case 'cartesian':
        default:
            return buildCartesianOption(input.series, input.meta, input.p);
    }
};
