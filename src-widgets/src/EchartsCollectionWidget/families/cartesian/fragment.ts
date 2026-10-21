/**
 * Cartesian presentation fragment (ADR-0083 ticket 03) — the cartesian family's share of the
 * presentation assembly.
 *
 * @module EchartsCollectionWidget/families/cartesian/fragment
 * @remarks
 * The cartesian fragment carries what only the cartesian builder reads: the inherited
 * cartesian type, the Y-axes (with the legacy axis-0 synthesis, ADR-0012), the X-Karte
 * (ADR-0035 — object/blob/legacy-xSplit resolution over the body-side decode), both dataZoom
 * toggles, the resolved markings, and the value→colour scale. The decode helpers stay
 * body-side (`presentation.ts`); this module only composes — the pre-split
 * `toPresentationConfig` cartesian arm, moved into the profile byte-identically.
 */
import type { EchartsAxisConfig, EchartsCartesianType } from '../../../types/field-definitions/echarts-fields';
import { bool, num, parseColorScale, legacyAxis, decodeXAxisWithLegacy } from '../../presentation';
import type { CartesianFragment } from '../../optionBuilders/types';
import type { PresentationCompanions } from '../types';

/** Assemble the cartesian presentation fragment from the decoded companions. */
export const cartesianPresentationFragment = (companions: PresentationCompanions): CartesianFragment => {
    const s = companions.src;

    // The cartesian chart type is the default series type inherited by non-overridden series
    // (ADR-0008 r4: the top selector is authoritative; per-series type is opt-in). A legacy
    // stored 'area' is not a cartesian type (area is a per-series fill mode) → falls back to
    // 'line' — as does every foreign value (the pre-split family guard collapsed to the same).
    const cartesianType: EchartsCartesianType =
        s.chartType === 'bar' || s.chartType === 'scatter' ? s.chartType : 'line';

    // Y-axes: decoded blob, else a single axis synthesised from the legacy chart-level scalars
    // (ADR-0012 migration — no silent rewrite; legacy widgets render unchanged).
    const yAxes: EchartsAxisConfig[] = companions.yAxes && companions.yAxes.length ? companions.yAxes : [legacyAxis(s)];

    // X-axis (ADR-0035): editor state carries the `xAxis` OBJECT (decoded once on load, spread
    // into `src` like `legend`); persisted rxData carries the base64 BLOB; a legacy widget has
    // only the `xSplit` boolean → synthesised into `splitLine` so it renders unchanged.
    const xAxis =
        s.xAxis && typeof s.xAxis === 'object' && !Array.isArray(s.xAxis)
            ? (s.xAxis as CartesianFragment['xAxis'])
            : decodeXAxisWithLegacy(s.xAxis as string | undefined, bool(s.xSplit, false));

    const visualMapEnabled = bool(s.visualMapEnabled, false);

    return {
        cartesianType,
        yAxes,
        xAxis,
        dataZoomSlider: bool(s.dataZoomSlider, false),
        dataZoomInside: bool(s.dataZoomInside, false),
        markLines: companions.markLines,
        visualMap: visualMapEnabled
            ? {
                  enabled: true,
                  min: num(s.visualMapMin) ?? 0,
                  max: num(s.visualMapMax) ?? 100,
                  colors: parseColorScale(s.visualMapColors as string | undefined),
              }
            : undefined,
    };
};
