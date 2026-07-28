/**
 * Chart-wide tooltip builder shared by every family (ADR-0007 GUI-owned presentation).
 *
 * @module EchartsCollectionWidget/optionBuilders/tooltip
 * @remarks
 * The tooltip is GUI-owned: its trigger, string template (`{a}/{b}/{c}/{d}`, optionally embedding
 * vis-2 `{oid.val}` bindings), units and decimals are authored by the configurator. `'none'`
 * disables it. The units/decimals `valueFormatter` is a function living in G (built at runtime),
 * so it never round-trips through JSON — only U (the Advanced JSON) is JSON-only / function-free.
 */
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

/**
 * Build the chart-wide tooltip option fragment.
 *
 * @param p - Chart-wide presentation (trigger / template / units / decimals).
 * @returns `'none'` → `{ show: false }`; otherwise trigger + optional template formatter + units.
 */
export const buildTooltip = (p: PresentationConfig): Record<string, unknown> => {
    if (p.tooltipTrigger === 'none') {
        return { show: false };
    }
    return {
        trigger: p.tooltipTrigger,
        ...(p.tooltipTemplate ? { formatter: p.tooltipTemplate } : {}),
        ...(p.tooltipUnits || p.tooltipDecimals !== undefined
            ? { valueFormatter: makeValueFormatter(p.tooltipUnits, p.tooltipDecimals) }
            : {}),
    };
};
