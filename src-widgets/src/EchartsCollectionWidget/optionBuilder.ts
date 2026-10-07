/**
 * echarts option orchestrator — the generated (G) side dispatcher + the persisted-config
 * parsers (ADR-0007 GUI-owns-presentation seam, ADR-0008 type-family data model).
 *
 * @module EchartsCollectionWidget/optionBuilder
 * @remarks
 * G is built per **chart family** (cartesian / pie — gauge/radar removed by ADR-0071). Each family builder
 * authors both the data (series points, coordinate system, legend names) AND the GUI-owned
 * presentation (per-series styling, chart-wide legend/tooltip/animation/dataZoom/thresholds)
 * into one option fragment; the chart-wide toolbox block (ADR-0045) is layered on here.
 *
 * The parsers live here (not in the family modules) because they are family-agnostic:
 * `parseJsonState` (json-mode payload), `parseSeriesConfig` (per-series meta blob).
 */
import type { EChartsOption } from 'echarts';

import type { EchartsChartFamily, EchartsSeriesMeta, LegacyChartType } from '../types/field-definitions/echarts-fields';
import { decodeBlob } from '../lib/encoding';
import {
    intakeValue,
    nullFillOf,
    type IgnoreNull,
    type MAPPED_GAP,
    type SeriesPoint,
    type SeriesValueMap,
} from './historyLogic';

import { buildCartesianOption } from './optionBuilders/cartesian';
import { buildPieOption } from './optionBuilders/pie';
import { buildToolbox } from './optionBuilders/toolbox';
import type { ChartSeries, GeneratedInput, PresentationConfig } from './optionBuilders/types';

// Re-export the shared builder types so existing imports (`SeriesMeta`, `ChartSeries`) keep working.
export type { ChartSeries, GeneratedInput, PresentationConfig };
/** Alias kept for continuity with v1 imports. */
export type SeriesMeta = EchartsSeriesMeta;
export type { EchartsChartFamily, EchartsChartType } from '../types/field-definitions/echarts-fields';

/**
 * Derive the coordinate-system family from the concrete {@link EchartsChartType} (ADR-0008
 * addendum r4). line/bar/scatter → cartesian; pie → itself. The `default` arm also covers
 * legacy values still stored by older widgets (no auto-migration): the family-only
 * `'cartesian'`, the removed `'area'` type (r4 — area is a per-series fill mode now) AND the
 * removed gauge/radar families (ADR-0071 — healed to `'line'` on editor load) all render as
 * the cartesian family (default line).
 */
export const familyOf = (chartType: LegacyChartType): EchartsChartFamily => {
    switch (chartType) {
        case 'pie':
            return 'pie';
        // line / bar / scatter / legacy 'cartesian' / legacy 'area' / legacy 'gauge'/'radar' / undefined → cartesian
        default:
            return 'cartesian';
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

/**
 * Normalize a heterogeneous array of points into echarts `[ts, val]` pairs. Values flow through
 * the shared intake — an optional series' {@link SeriesValueMap} first, then the numeric string
 * interpretation (ADR-0077) — and the NULL-Behandlung fill right after it (the Wert-Kette stage
 * the series-shaped JSON family owns since the toter-Regler fix: mapped gaps stay immune,
 * intake nulls fill per the mode, `last` carries over the payload order). `ts` must stay a
 * number — anything else falls back to the item index (a string-ts never plots as time).
 */
const normalizePoints = (data: unknown, valueMap?: SeriesValueMap, nullMode?: IgnoreNull): SeriesPoint[] => {
    if (!Array.isArray(data)) {
        return [];
    }
    let last: number | null = null;
    const out: SeriesPoint[] = [];
    data.forEach((p, i) => {
        let ts: number;
        let intake: number | typeof MAPPED_GAP | null;
        if (Array.isArray(p) && p.length >= 2 && typeof p[0] === 'number') {
            ts = p[0];
            intake = intakeValue(p[1], valueMap);
        } else if (p && typeof p === 'object') {
            const o = p as Record<string, unknown>;
            const rawTs = o.ts ?? o.time ?? o.x;
            ts = typeof rawTs === 'number' ? rawTs : i;
            intake = intakeValue(o.val ?? o.value ?? o.y, valueMap);
        } else {
            ts = i;
            intake = null;
        }
        const v = nullFillOf(intake, nullMode ?? 'keep', last);
        if (v !== null) {
            last = v;
        }
        out.push([ts, v]);
    });
    return out;
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
 * `valueMaps` (ticket 02) rides the SAME name-keyed identity the overlay uses: series data runs
 * its series' raw-value map at the intake before the numeric coercion. `nullModeOf` (the
 * toter-Regler fix) resolves each series' EFFECTIVE NULL-Behandlung by the same name-keyed
 * identity — the overlay's per-series override with the chart-level gap setting as the
 * caller-supplied default; absent = keep (gaps stay gaps, the pre-fix behaviour).
 */
export const parseJsonState = (
    raw: string | undefined | null,
    valueMaps?: Record<string, SeriesValueMap>,
    nullModeOf?: (name: string) => IgnoreNull,
): JsonStateResult => {
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
                    const name = typeof so.name === 'string' ? so.name : `Series ${i + 1}`;
                    return {
                        name,
                        data: normalizePoints(so.data, valueMaps?.[name], nullModeOf?.(name)),
                    };
                }),
            };
        }
        if (Array.isArray(o.data)) {
            return {
                series: [
                    {
                        name: 'Series 1',
                        data: normalizePoints(o.data, valueMaps?.['Series 1'], nullModeOf?.('Series 1')),
                    },
                ],
            };
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
                    const name = typeof so.name === 'string' ? so.name : `Series ${i + 1}`;
                    return {
                        name,
                        data: normalizePoints(so.data, valueMaps?.[name], nullModeOf?.(name)),
                    };
                }),
            };
        }
        return {
            series: [{ name: 'Series 1', data: normalizePoints(v, valueMaps?.['Series 1'], nullModeOf?.('Series 1')) }],
        };
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

/** Decode + parse the `jsonHidden` blob into the deny-list of hidden JSON series names. Empty/invalid → `[]`. */
export const parseJsonHidden = (raw: string | undefined | null): string[] => {
    if (!raw) {
        return [];
    }
    try {
        const parsed = JSON.parse(decodeBlob(raw));
        return Array.isArray(parsed) ? parsed.filter((n): n is string => typeof n === 'string') : [];
    } catch {
        return [];
    }
};

/**
 * G — build the generated option by dispatching to the active family builder.
 *
 * @param input - Discriminated by family; carries the resolved data + meta + presentation.
 * @returns The G fragment (data + GUI-owned presentation), pre-merge.
 */
export const buildGeneratedOption = (input: GeneratedInput): EChartsOption => {
    let base: Record<string, unknown>;
    switch (input.family) {
        case 'pie':
            base = buildPieOption(input.series, input.meta, input.p) as Record<string, unknown>;
            break;
        case 'cartesian':
        default:
            base = buildCartesianOption(input.series, input.meta, input.p) as Record<string, unknown>;
            break;
    }
    // The toolbox block is chart-wide (every family hosts it, ADR-0045) — layered on here at the
    // orchestrator seam rather than duplicated into each family builder. Sparse: absent when the
    // master switch is off, so the replaceMerge rebuild removes the component.
    const toolbox = buildToolbox(input.p.toolbox, input.family, input.p.themeDark);
    return (toolbox ? { ...base, toolbox } : base) as EChartsOption;
};
