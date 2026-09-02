/**
 * Chart-wide tooltip builder shared by every family (ADR-0007 GUI-owned presentation).
 *
 * @module EchartsCollectionWidget/optionBuilders/tooltip
 * @remarks
 * The tooltip is GUI-owned: its trigger, template, units and decimals are authored by the
 * configurator. `'none'` disables it. The units/decimals `valueFormatter` is a function living
 * in G (built at runtime), so it never round-trips through JSON.
 *
 * ADR-0052: on a cartesian chart the tooltip's time follows the X-Karte's **Time format**
 * (moment tokens, locale = host language) — as the default moment header, and inside an authored
 * template's `{b}` token (resolved by US: echarts' own string path renders an empty `{b}` on a
 * time axis). An authored `tooltipTemplate` overrides the moment header entirely (one template
 * line per series); on non-cartesian families it stays the echarts-native string (category
 * axes have a real `{b}`/`{d}`).
 */
import { formatTooltipHeader, resolveHostLang } from '../timeFormat';
import {
    formatChartValue,
    formatSeriesValue,
    hasSeriesValueFormat,
    type ChartValueFormat,
    type SeriesFactsByName,
} from '../valueFormat';
import { applyRawOverride } from '../utils/mergeOption';
import type { PresentationConfig } from './types';

/**
 * The chart-level value-format context of a presentation config (the comma switch + the tooltip
 * cluster as the per-fact fallback) — the ONE projection, shared by the cartesian chart context
 * and this builder's gates so the two cannot drift.
 */
export const chartValueFormatOf = (p: PresentationConfig): ChartValueFormat => ({
    comma: p.decimalComma,
    units: p.tooltipUnits,
    decimals: p.tooltipDecimals,
});

/**
 * echarts `valueFormatter`: append units + clamp decimals + the chart-wide comma separator
 * (ADR-0054). Exported for the editor's live example.
 */
export const makeValueFormatter = (units?: string, decimals?: number, comma?: boolean): ((v: unknown) => string) => {
    return (v: unknown): string => {
        const txt = formatChartValue(v, decimals, comma);
        return units ? `${txt} ${units}` : txt;
    };
};

/**
 * The per-ROW formatter resolver of a cartesian tooltip (ADR-0057 per-series Wert-Formatter):
 * one formatter per series NAME — the row's series facts beat the chart-level cluster per fact,
 * a series without facts formats through the cluster alone, and a chart without either renders
 * the bare value text (`undefined` — exactly the pre-Build-B behaviour).
 */
const makeRowFormatter = (
    facts: SeriesFactsByName | undefined,
    chart: ChartValueFormat,
): ((name?: string) => ((v: unknown) => string) | undefined) | undefined => {
    if (!facts && !hasSeriesValueFormat(undefined, chart)) {
        return undefined;
    }
    return (name?: string): ((v: unknown) => string) | undefined => {
        const f = name !== undefined ? facts?.[name] : undefined;
        return hasSeriesValueFormat(f, chart) ? (v: unknown): string => formatSeriesValue(v, f, chart) : undefined;
    };
};

/** The cartesian tooltip's moment header input (ADR-0052) — the X-Karte's Time format. */
export interface TooltipTimeContext {
    /** Authored Time format (moment tokens); unset → `DEFAULT_TOOLTIP_FORMAT`. */
    format?: string;
    /**
     * STRING categories ride the X axis (ADR-0075): the header and `{b}` show the CATEGORY
     * NAME (echarts' `params.name`), never a moment time — the rows carry no timestamps.
     */
    category?: boolean;
}

/** The (loosely typed) param object echarts hands a tooltip `formatter` callback. */
type TooltipParam = {
    axisValue?: unknown;
    marker?: string;
    seriesName?: string;
    /** The category label on a category axis (empty on time axes — ADR-0052 footnote). */
    name?: string;
    value?: unknown;
};

/**
 * One series' value as the tooltip sees it: the LAST dimension of an array-shaped point
 * (`[ts, val]` → val), else the bare value.
 */
const paramValue = (p: TooltipParam): unknown => (Array.isArray(p.value) ? p.value[p.value.length - 1] : p.value);

/**
 * The hovered timestamp: axis trigger → `axisValue`; item trigger → the point's own `[ts, …]`
 * head. A BARE scalar value is a value, not a timestamp (pie numbers) → null.
 */
const paramTs = (p: TooltipParam): number | null => {
    const raw = p.axisValue ?? (Array.isArray(p.value) && typeof p.value[0] === 'number' ? p.value[0] : null);
    return typeof raw === 'number' ? raw : null;
};

/**
 * The param's OWN point timestamp — the array-shaped value head ONLY (never `axisValue`): on an
 * axis trigger every param carries the SAME hovered axisValue, so telling an exact row from a
 * carried-over one (ADR-0054 `noInterpolate`) must compare against the point's own ts. A bare
 * scalar value has no point ts → null.
 */
const pointTs = (p: TooltipParam): number | null =>
    Array.isArray(p.value) && typeof p.value[0] === 'number' ? p.value[0] : null;

/** The marker prefix (echarts' coloured series dot) incl. its separating space. */
const markerPrefix = (p: TooltipParam): string => (p.marker ? `${p.marker} ` : '');

/** A value as tooltip text: valueFormatter when authored, primitives stringified, objects JSON'd, null → '-'. */
const readableValue = (v: unknown, valueFmt?: (v: unknown) => string): string =>
    v === null || v === undefined
        ? '-'
        : valueFmt
          ? valueFmt(v)
          : typeof v === 'number' || typeof v === 'string' || typeof v === 'boolean'
            ? String(v)
            : JSON.stringify(v);

/**
 * Resolve the authored template's tokens against ONE series' tooltip line — OUR dialect, not
 * echarts' (echarts' string-template path is broken on time axes: `{b}` maps to `params.name`,
 * which is empty there — only category axes have a name dimension; verified against the echarts
 * 6.1.0 source, `TooltipView._showTooltipContent` → `formatTpl` over `$vars
 * ['seriesName','name','value']`).
 *
 *  - `{a}` — the series name.
 *  - `{b}` — the time, in the X-Karte's **Time format** (the same surface as the axis labels
 *    and the default header; empty when the line has no timestamp).
 *  - `{c}` — the value, honouring the units/decimals semantics (`null` → `-`).
 *
 * Unknown tokens stay literal — no half-substitution.
 */
export const resolveTooltipTokens = (
    template: string,
    p: { seriesName?: string; ts: number | null; value: unknown; name?: string },
    opts: { format?: string; lang: string; valueFmt?: (v: unknown) => string },
): string => {
    return (
        template
            .replace(/\{a\}/g, p.seriesName ?? '')
            // Category name first (ADR-0075: string categories have a name, no ts); else the time.
            .replace(/\{b\}/g, p.name ?? (p.ts !== null ? formatTooltipHeader(opts.format, p.ts, opts.lang) : ''))
            .replace(/\{c\}/g, readableValue(p.value, opts.valueFmt))
    );
};

/**
 * The cartesian tooltip's ROW FILTERS (ADR-0054, adapter `hoverNoNulls` / `hoverNoInterpolate`):
 * `hideNulls` drops rows whose value is null (gap series stop filling the tooltip with null
 * lines); `noInterpolate` drops rows whose point ts is NOT the hovered ts — echarts hands the
 * axis tooltip the NEAREST real point, so a gap shows a carried-over value under a header it
 * does not belong to; the filter removes exactly those phantom rows.
 */
export interface TooltipRowFilters {
    hideNulls?: boolean;
    noInterpolate?: boolean;
}

/** Apply the row filters to one tooltip param list (no-ops when both flags are off). */
const filterTooltipRows = (
    list: TooltipParam[],
    hoveredTs: number | null,
    filters: TooltipRowFilters,
): TooltipParam[] => {
    if (!filters.hideNulls && !filters.noInterpolate) {
        return list;
    }
    return list.filter(p => {
        if (filters.hideNulls) {
            const v = paramValue(p);
            if (v === null || v === undefined) {
                return false;
            }
        }
        if (filters.noInterpolate && hoveredTs !== null) {
            const pts = pointTs(p);
            if (pts !== null && pts !== hoveredTs) {
                return false;
            }
        }
        return true;
    });
};

/**
 * The cartesian AUTHORED-TEMPLATE formatter: one line per series, each the user's template with
 * OUR token resolution ({b} = moment time, the row's OWN series facts folded into {c} — a
 * callback bypasses echarts' own `valueFormatter` application). No header: the template is the
 * whole line, full user control (ADR-0052: the template overrides the moment header).
 */
const makeTemplateTooltipFormatter =
    (
        template: string,
        ctx: TooltipTimeContext,
        valueFmtFor?: (name?: string) => ((v: unknown) => string) | undefined,
        filters?: TooltipRowFilters,
    ): ((params: unknown) => string) =>
    params => {
        const raw = (Array.isArray(params) ? params : [params]) as TooltipParam[];
        const list = filterTooltipRows(raw, paramTs(raw[0]), filters ?? {});
        return list
            .map(
                p =>
                    `${markerPrefix(p)}${resolveTooltipTokens(
                        template,
                        {
                            seriesName: p.seriesName,
                            ts: paramTs(p),
                            value: paramValue(p),
                            // The category dimension (ADR-0075): {b} is the NAME on string
                            // categories, the time everywhere else — resolved here, one dialect.
                            name: ctx.category ? p.name : undefined,
                        },
                        { format: ctx.format, lang: resolveHostLang(), valueFmt: valueFmtFor?.(p.seriesName) },
                    )}`,
            )
            .join('<br/>');
    };

/**
 * The moment-header tooltip formatter: `<b>header</b>` (the hovered timestamp via the Time
 * format, `<br />` token left intact — the tooltip renders HTML) + one marker/name/value row per
 * series, each value line formatted through its OWN series facts (ADR-0057; a custom formatter
 * callback bypasses echarts' own `valueFormatter` application, so the formatting is folded in
 * here).
 */
const makeMomentTooltipFormatter =
    (
        ctx: TooltipTimeContext,
        valueFmtFor?: (name?: string) => ((v: unknown) => string) | undefined,
        filters?: TooltipRowFilters,
    ): ((params: unknown) => string) =>
    params => {
        const raw = (Array.isArray(params) ? params : [params]) as TooltipParam[];
        // The header derives from the HOVERED entry (the first param) and survives the row
        // filters — an all-rows-dropped tooltip still tells the user WHERE they are: the
        // category name on string categories (ADR-0075 — the rows carry no timestamps), the
        // hovered time via the Time format everywhere else.
        const ts = paramTs(raw[0]);
        const header = ctx.category
            ? raw[0]?.name
                ? `<b>${raw[0].name}</b><br/>`
                : ''
            : ts !== null
              ? `<b>${formatTooltipHeader(ctx.format, ts, resolveHostLang())}</b><br/>`
              : '';
        const list = filterTooltipRows(raw, ts, filters ?? {});
        return (
            header +
            list
                .map(
                    p =>
                        `${markerPrefix(p)}${p.seriesName ?? ''}: ${readableValue(
                            paramValue(p),
                            valueFmtFor?.(p.seriesName),
                        )}`,
                )
                .join('<br/>')
        );
    };

/**
 * Build the chart-wide tooltip option fragment.
 *
 * @param p - Chart-wide presentation (trigger / template / units / decimals + the section raw).
 * @param time - The cartesian moment-header context (ADR-0052); omit on families without a time
 * axis (their tooltip keeps the echarts-default header + `valueFormatter` path).
 * @param seriesFacts - Per-series Wert-Formatter facts by effective series name (ADR-0057,
 * cartesian only): each ROW formats through its own series facts, the chart-level cluster as the
 * per-fact fallback. Ignored on the non-cartesian paths (echarts' `valueFormatter` has no
 * per-series context).
 * @returns `'none'` → `{ show: false }`; otherwise trigger + template / moment-header formatter +
 * values. The Tooltip section's raw escape hatch (ADR-0044) is folded UNDER the built entry — the
 * GUI wins every collision; free keys (frame, behaviour, axisPointer) merge through.
 */
export const buildTooltip = (
    p: PresentationConfig,
    time?: TooltipTimeContext,
    seriesFacts?: SeriesFactsByName,
): Record<string, unknown> => {
    let entry: Record<string, unknown>;
    if (p.tooltipTrigger === 'none') {
        entry = { show: false };
    } else {
        const chartCtx = chartValueFormatOf(p);
        // The valueFormatter semantics apply when ANY of its three knobs is authored — comma alone
        // (no units/decimals) must still route numbers through formatChartValue (ADR-0054). One
        // gate predicate for both formatter shapes (the row resolver shares the chart context).
        const valueFmt = hasSeriesValueFormat(undefined, chartCtx)
            ? makeValueFormatter(p.tooltipUnits, p.tooltipDecimals, p.decimalComma)
            : undefined;
        // The cartesian rows format per series NAME (ADR-0057): series facts first, the chart
        // cluster as the per-fact fallback.
        const rowFmt = time ? makeRowFormatter(seriesFacts, chartCtx) : undefined;
        // The cartesian row filters (ADR-0054) ride the custom formatters — echarts' own string /
        // valueFormatter paths have no row concept to filter.
        const filters: TooltipRowFilters = { hideNulls: p.tooltipHideNulls, noInterpolate: p.tooltipNoInterpolate };
        if (p.tooltipTemplate) {
            // Authored template wins over the moment header (ADR-0052). On a cartesian chart we
            // resolve the tokens OURSELVES ({b} = the time in the Time format) — echarts' string
            // path renders an EMPTY {b} on a time axis. Non-cartesian charts keep the echarts
            // string verbatim: category axes have real {b}/{d}, and echarts' own resolution is
            // correct there.
            entry = time
                ? {
                      trigger: p.tooltipTrigger,
                      formatter: makeTemplateTooltipFormatter(p.tooltipTemplate, time, rowFmt, filters),
                  }
                : {
                      trigger: p.tooltipTrigger,
                      formatter: p.tooltipTemplate,
                      ...(valueFmt ? { valueFormatter: valueFmt } : {}),
                  };
        } else if (time) {
            // A custom callback bypasses echarts' valueFormatter application — fold it in.
            entry = {
                trigger: p.tooltipTrigger,
                formatter: makeMomentTooltipFormatter(time, rowFmt, filters),
            };
        } else {
            entry = { trigger: p.tooltipTrigger, ...(valueFmt ? { valueFormatter: valueFmt } : {}) };
        }
        // Tooltip background (adapter `hoverBackground`, ADR-0054) — set on the BUILT entry, i.e.
        // before the raw fold below, so the GUI colour wins a raw-JSON collision.
        if (p.tooltipBgColor) {
            entry.backgroundColor = p.tooltipBgColor;
        }
    }
    return applyRawOverride(entry, p.tooltipRaw);
};
