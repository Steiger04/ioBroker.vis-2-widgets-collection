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
import { applyRawOverride } from '../utils/mergeOption';
import type { PresentationConfig } from './types';

/** echarts `valueFormatter`: append units + clamp decimals. Exported for the editor's live example. */
export const makeValueFormatter = (units?: string, decimals?: number): ((v: unknown) => string) => {
    return (v: unknown): string => {
        const parsed = typeof v === 'number' ? v : Number(v);
        const finite = Number.isFinite(parsed) ? parsed : (v as number);
        const txt = decimals !== undefined ? finite.toFixed(decimals) : String(finite);
        return units ? `${txt} ${units}` : txt;
    };
};

/** The cartesian tooltip's moment header input (ADR-0052) — the X-Karte's Time format. */
export interface TooltipTimeContext {
    /** Authored Time format (moment tokens); unset → `DEFAULT_TOOLTIP_FORMAT`. */
    format?: string;
}

/** The (loosely typed) param object echarts hands a tooltip `formatter` callback. */
type TooltipParam = {
    axisValue?: unknown;
    marker?: string;
    seriesName?: string;
    value?: unknown;
};

/**
 * One series' value as the tooltip sees it: the LAST dimension of an array-shaped point
 * (`[ts, val]` → val), else the bare value.
 */
const paramValue = (p: TooltipParam): unknown => (Array.isArray(p.value) ? p.value[p.value.length - 1] : p.value);

/**
 * The hovered timestamp: axis trigger → `axisValue`; item trigger → the point's own `[ts, …]`
 * head. A BARE scalar value is a value, not a timestamp (pie/gauge numbers) → null.
 */
const paramTs = (p: TooltipParam): number | null => {
    const raw = p.axisValue ?? (Array.isArray(p.value) && typeof p.value[0] === 'number' ? p.value[0] : null);
    return typeof raw === 'number' ? raw : null;
};

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
    p: { seriesName?: string; ts: number | null; value: unknown },
    opts: { format?: string; lang: string; valueFmt?: (v: unknown) => string },
): string => {
    return template
        .replace(/\{a\}/g, p.seriesName ?? '')
        .replace(/\{b\}/g, p.ts !== null ? formatTooltipHeader(opts.format, p.ts, opts.lang) : '')
        .replace(/\{c\}/g, readableValue(p.value, opts.valueFmt));
};

/**
 * The cartesian AUTHORED-TEMPLATE formatter: one line per series, each the user's template with
 * OUR token resolution ({b} = moment time, units/decimals folded in — a callback bypasses
 * echarts' own `valueFormatter` application). No header: the template is the whole line, full
 * user control (ADR-0052: the template overrides the moment header).
 */
const makeTemplateTooltipFormatter =
    (template: string, ctx: TooltipTimeContext, valueFmt?: (v: unknown) => string): ((params: unknown) => string) =>
    params => {
        const list = (Array.isArray(params) ? params : [params]) as TooltipParam[];
        return list
            .map(
                p =>
                    `${markerPrefix(p)}${resolveTooltipTokens(
                        template,
                        { seriesName: p.seriesName, ts: paramTs(p), value: paramValue(p) },
                        { format: ctx.format, lang: resolveHostLang(), valueFmt },
                    )}`,
            )
            .join('<br/>');
    };

/**
 * The moment-header tooltip formatter: `<b>header</b>` (the hovered timestamp via the Time
 * format, `<br />` token left intact — the tooltip renders HTML) + one marker/name/value row per
 * series, the value line honouring the units/decimals `valueFormatter` semantics (a custom
 * formatter callback bypasses echarts' own `valueFormatter` application, so the same formatting
 * is folded in here).
 */
const makeMomentTooltipFormatter =
    (ctx: TooltipTimeContext, valueFmt?: (v: unknown) => string): ((params: unknown) => string) =>
    params => {
        const list = (Array.isArray(params) ? params : [params]) as TooltipParam[];
        const ts = paramTs(list[0]);
        const header = ts !== null ? `<b>${formatTooltipHeader(ctx.format, ts, resolveHostLang())}</b><br/>` : '';
        return (
            header +
            list
                .map(p => `${markerPrefix(p)}${p.seriesName ?? ''}: ${readableValue(paramValue(p), valueFmt)}`)
                .join('<br/>')
        );
    };

/**
 * Build the chart-wide tooltip option fragment.
 *
 * @param p - Chart-wide presentation (trigger / template / units / decimals + the section raw).
 * @param time - The cartesian moment-header context (ADR-0052); omit on families without a time
 * axis (their tooltip keeps the echarts-default header + `valueFormatter` path).
 * @returns `'none'` → `{ show: false }`; otherwise trigger + template / moment-header formatter +
 * units. The Tooltip section's raw escape hatch (ADR-0044) is folded UNDER the built entry — the
 * GUI wins every collision; free keys (frame, behaviour, axisPointer) merge through.
 */
export const buildTooltip = (p: PresentationConfig, time?: TooltipTimeContext): Record<string, unknown> => {
    let entry: Record<string, unknown>;
    if (p.tooltipTrigger === 'none') {
        entry = { show: false };
    } else {
        const valueFmt =
            p.tooltipUnits || p.tooltipDecimals !== undefined
                ? makeValueFormatter(p.tooltipUnits, p.tooltipDecimals)
                : undefined;
        if (p.tooltipTemplate) {
            // Authored template wins over the moment header (ADR-0052). On a cartesian chart we
            // resolve the tokens OURSELVES ({b} = the time in the Time format) — echarts' string
            // path renders an EMPTY {b} on a time axis. Non-cartesian charts keep the echarts
            // string verbatim: category axes have real {b}/{d}, and echarts' own resolution is
            // correct there.
            entry = time
                ? {
                      trigger: p.tooltipTrigger,
                      formatter: makeTemplateTooltipFormatter(p.tooltipTemplate, time, valueFmt),
                  }
                : {
                      trigger: p.tooltipTrigger,
                      formatter: p.tooltipTemplate,
                      ...(valueFmt ? { valueFormatter: valueFmt } : {}),
                  };
        } else if (time) {
            // A custom callback bypasses echarts' valueFormatter application — fold it in.
            entry = { trigger: p.tooltipTrigger, formatter: makeMomentTooltipFormatter(time, valueFmt) };
        } else {
            entry = { trigger: p.tooltipTrigger, ...(valueFmt ? { valueFormatter: valueFmt } : {}) };
        }
    }
    return applyRawOverride(entry, p.tooltipRaw);
};
