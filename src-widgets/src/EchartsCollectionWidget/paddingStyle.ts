/**
 * The chart-padding resolver (chart padding spec, `.scratch/chart-padding/`) — pure CSS decision
 * for the 4-side inset between the widget edge and everything the diagram renders.
 *
 * @module EchartsCollectionWidget/paddingStyle
 * @remarks
 * Four panel-owned scalars („Diagramm" attribute group) become MUI spacing-unit shorthand
 * (`pt`/`pr`/`pb`/`pl`, 1 = 8 px — deliberately NOT px, mirroring `basePadding`). The padding sits
 * OUTSIDE the chart frame (widget edge → chart padding → frame → frame padding → chart) and is
 * additive beneath the collection-wide `basePadding`; `boxSizing: 'border-box'` on the host box
 * keeps the widget bounds. Container layout, never an echarts option — same contract family as
 * the frame resolver (frameStyle.ts, ADR-0056).
 *
 * Pure + view-adjacent: the body applies it; the editor preview does not (padding is configured
 * in the vis-2 panel, so the live canvas behind the modal is the preview).
 */
/** The four sides as stored (flat rxData scalars) — everything optional; the resolver normalises. */
export interface PaddingSides {
    top?: number | string;
    right?: number | string;
    bottom?: number | string;
    left?: number | string;
}

/** The resolved MUI sx shorthand — only authored sides (> 0) appear; `{}` = pixel-identical. */
export type PaddingSx = Partial<{ pt: number; pr: number; pb: number; pl: number }>;

/** Coerce one side: unset/invalid/negative/0 all mean "no padding" and emit no key. */
const side = (value: number | string | undefined): number | undefined => {
    const n = Number(value);
    return Number.isFinite(n) && n > 0 ? n : undefined;
};

/**
 * Resolve the four padding scalars into MUI sx shorthand.
 *
 * @param padding - The stored sides (flat rxData scalars; numbers may arrive as strings).
 * @returns Only the authored sides — an empty object renders pixel-identical to before.
 */
export const resolvePaddingSx = (padding: PaddingSides): PaddingSx => {
    const pt = side(padding.top);
    const pr = side(padding.right);
    const pb = side(padding.bottom);
    const pl = side(padding.left);
    return {
        ...(pt !== undefined && { pt }),
        ...(pr !== undefined && { pr }),
        ...(pb !== undefined && { pb }),
        ...(pl !== undefined && { pl }),
    };
};
