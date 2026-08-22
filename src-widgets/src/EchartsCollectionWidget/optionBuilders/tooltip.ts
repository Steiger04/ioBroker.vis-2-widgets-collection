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

/**
 * Build the chart-wide tooltip option fragment.
 *
 * @param p - Chart-wide presentation (trigger / template / units / decimals + the section raw).
 * @returns `'none'` → `{ show: false }`; otherwise trigger + optional template formatter + units.
 * The Tooltip section's raw escape hatch (ADR-0044) is folded UNDER the built entry — the GUI
 * wins every collision; free keys (frame, behaviour, axisPointer) merge through.
 */
export const buildTooltip = (p: PresentationConfig): Record<string, unknown> => {
    const entry: Record<string, unknown> =
        p.tooltipTrigger === 'none'
            ? { show: false }
            : {
                  trigger: p.tooltipTrigger,
                  ...(p.tooltipTemplate ? { formatter: p.tooltipTemplate } : {}),
                  ...(p.tooltipUnits || p.tooltipDecimals !== undefined
                      ? { valueFormatter: makeValueFormatter(p.tooltipUnits, p.tooltipDecimals) }
                      : {}),
              };
    return applyRawOverride(entry, p.tooltipRaw);
};
