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
 * Map a chart type to its coordinate-system family.
 *
 * `cartesian` and the `default` arm also cover legacy widgets that still store the per-series
 * sub-type (`'line'|'bar'|'area'`) in `chartType` — there is no auto-migration (ADR-0008
 * addendum), so those values fall through to the cartesian family here.
 */
export const familyOf = (chartType: EchartsChartType | undefined): EchartsChartFamily => {
    switch (chartType) {
        case 'pie':
            return 'pie';
        case 'gauge':
            return 'gauge';
        case 'radar':
            return 'radar';
        case 'cartesian':
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

/**
 * Parse a JSON-state payload (json mode) into chart series.
 * Auto-detects `{ series: [{ name?, data }] }`, `{ data: [...] }`, or a bare array.
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
