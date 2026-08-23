/**
 * Chart-wide tooltip builder shared by every family (ADR-0007 GUI-owned presentation).
 *
 * @module EchartsCollectionWidget/optionBuilders/tooltip
 * @remarks
 * The tooltip is GUI-owned: its trigger, string template (`{a}/{b}/{c}/{d}`, optionally embedding
 * vis-2 `{oid.val}` bindings), units and decimals are authored by the configurator. `'none'`
 * disables it. The units/decimals `valueFormatter` is a function living in G (built at runtime),
 * so it never round-trips through JSON.
 *
 * ADR-0052: on a cartesian chart the tooltip's time header follows the X-Karte's **Time format**
 * (moment tokens, locale = host language). Only a cartesian builder passes the {@link
 * TooltipTimeContext}; an authored `tooltipTemplate` (string) overrides the moment header
 * entirely — the existing GUI semantics win.
 */
import { formatTooltipHeader, resolveHostLang } from '../timeFormat';
import { applyRawOverride } from '../utils/mergeOption';
import type { PresentationConfig } from './types';

/** echarts `valueFormatter`: append units + clamp decimals. */
const makeValueFormatter = (units?: string, decimals?: number): ((v: unknown) => string) => {
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
        const first = list[0];
        // Axis trigger → the hovered x; item trigger → the point's own timestamp ([ts, val]).
        const rawTs = first?.axisValue ?? (Array.isArray(first?.value) ? (first.value as unknown[])[0] : first?.value);
        const ts = typeof rawTs === 'number' ? rawTs : null;
        const header = ts !== null ? `<b>${formatTooltipHeader(ctx.format, ts, resolveHostLang())}</b><br/>` : '';
        const rows = list.map(p => {
            const v = Array.isArray(p.value) ? p.value[p.value.length - 1] : p.value;
            const txt = v === null || v === undefined ? '-' : valueFmt ? valueFmt(v) : String(v);
            return `${p.marker ?? ''}${p.marker ? ' ' : ''}${p.seriesName ?? ''}: ${txt}`;
        });
        return header + rows.join('<br/>');
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
            // Authored template wins over the moment header (ADR-0052) — unchanged semantics.
            entry = {
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
