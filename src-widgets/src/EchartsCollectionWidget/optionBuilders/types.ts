/**
 * Shared types for the family option builders (the G side, ADR-0007/0008).
 *
 * @module EchartsCollectionWidget/optionBuilders/types
 * @remarks
 * Lives outside {@link module:EchartsCollectionWidget/optionBuilder} (the orchestrator) so the
 * family builders can import it without a cycle. The orchestrator imports the family builders;
 * the family builders import only these shared types.
 */
import type { EChartsOption } from 'echarts';

import type {
    EchartsAxisConfig,
    EchartsCartesianType,
    EchartsLegendConfig,
    EchartsLegendPos,
    EchartsMarkLine,
    EchartsPieConfig,
    EchartsSeriesMeta,
    EchartsTooltipTrigger,
    EchartsToolboxConfig,
    EchartsVisualMapConfig,
    EchartsXAxisConfig,
} from '../../types/field-definitions/echarts-fields';

import type { SeriesPoint } from '../historyLogic';
import type { ThemeTokens } from '../echartsTheme';

/**
 * A resolved cartesian/pie series the chart can render. `data` is `[ts, val]` points on the
 * time axis — EXCEPT category bars (ADR-0065): when `PresentationConfig.barCategories` rides
 * along, a bar series' data is the plain per-bucket array `(number | null)[]` (echarts
 * category indexing).
 */
export interface ChartSeries {
    name: string;
    data: SeriesPoint[] | (number | null)[];
}

/**
 * Chart-wide + family presentation assembled from widget rxData by the body, then handed to
 * the family builders so they author presentation into G (GUI-owns-presentation, ADR-0007).
 */
export interface PresentationConfig {
    legendShow: boolean;
    legendPos: EchartsLegendPos;
    /**
     * Show each series' current value in the legend (`Name [value]`, adapter `legActual`;
     * ADR-0054). The formatter reads {@link legendValues}.
     */
    legendShowValues: boolean;
    /**
     * Current value per series NAME (ADR-0054) — NOT rxData-sourced: the pipeline resolves it
     * (Live = subscribed value, Verlauf/JSON = last point) and injects it into its presentation
     * copy when the legend-values toggle is on.
     */
    legendValues?: Record<string, number | null>;
    /** Legend styling (ADR-0021 `legendConfig` blob); `undefined` keys inherit echarts/theme defaults. */
    legend?: EchartsLegendConfig;
    /**
     * Runtime legend selection (name → active; a MISSING key = active) — the Legenden-Folge
     * state (ADR-0074). View state, never rxData: the host (body/preview) owns it and the
     * pipeline injects it, so `legend.selected` and the cartesian axis emission follow legend
     * clicks across option rebuilds (the replaceMerge reset repair). Per-name fallback when a
     * name is unknown to the state: the config rule („Nur in Legende" = inactive).
     */
    legendSelection?: Record<string, boolean>;
    tooltipTrigger: EchartsTooltipTrigger;
    tooltipTemplate?: string;
    tooltipUnits?: string;
    tooltipDecimals?: number;
    /** Tooltip background colour (adapter `hoverBackground`; ADR-0054). Empty/unset = theme default. */
    tooltipBgColor?: string;
    /** Drop non-exact (carried-over) tooltip rows — adapter `hoverNoInterpolate` (ADR-0054). */
    tooltipNoInterpolate?: boolean;
    /** Hide null-valued tooltip rows — adapter `hoverNoNulls` (ADR-0054). */
    tooltipHideNulls?: boolean;
    /**
     * Comma as the decimal separator in chart values (adapter `useComma`; ADR-0054) — the
     * `valueFormat.ts` base applied to tooltip values, legend values and default Y-axis labels.
     */
    decimalComma?: boolean;
    /** The Tooltip section's raw escape hatch (ADR-0044) — folded UNDER `buildTooltip`'s output. */
    tooltipRaw?: string;
    /** The Legend section's raw escape hatch (ADR-0044) — folded UNDER `buildLegend`'s output. */
    legendRaw?: string;
    /** The Title section's raw escape hatch (ADR-0044) — folded UNDER `buildTitleOption`'s output. */
    titleRaw?: string;
    /** The Toolbox section's GUI config (ADR-0045 `toolboxConfig` blob); unset = no toolbox. */
    toolbox?: EchartsToolboxConfig;
    animation: boolean;
    animationDuration: number;
    /** echarts animation easing; emitted only when set (empty = echarts default). */
    animationEasing?: string;
    bgColor: string;
    // cartesian-only
    /** Default cartesian series type (the chart type) inherited by any series without an explicit override. */
    cartesianType: EchartsCartesianType;
    /** Cartesian Y-axes (ADR-0012) — one entry per axis, each individually configured. */
    yAxes: EchartsAxisConfig[];
    /** The single cartesian X-axis (ADR-0035) — flat presentation config (`type:'time'` fixed). */
    xAxis: EchartsXAxisConfig;
    dataZoomSlider: boolean;
    dataZoomInside: boolean;
    markLines: EchartsMarkLine[];
    /**
     * The shared bar-bucket category grid (ADR-0065) — present ⇒ the cartesian builder emits a
     * CATEGORY x axis (timestamps as data, the X-Karte's time format as the label formatter)
     * and bar series data is plain bucket arrays. Absent ⇒ the time axis, exactly as before.
     */
    barCategories?: number[];
    visualMap?: EchartsVisualMapConfig;
    // family-specific structured config
    pie?: EchartsPieConfig;
    // resolved series palette (theme / preset / custom), applied per-series when no meta colour
    palette: string[];
    // semantic theme colours for theme-derived defaults (visualMap ramp, markLine,
    // legend border) + the editor inherit swatches — resolved from the chart's theme (ADR-0027).
    themeTokens: ThemeTokens;
    /**
     * The EFFECTIVE chart dark mode (darkMode policy resolved against the theme palette) —
     * drives the toolbox token literals (ADR-0045).
     */
    themeDark: boolean;
}

/** Discriminated input to the orchestrator {@link buildGeneratedOption}. */
export type GeneratedInput =
    | { family: 'cartesian'; series: ChartSeries[]; meta: EchartsSeriesMeta[]; p: PresentationConfig }
    | { family: 'pie'; series: ChartSeries[]; meta: EchartsSeriesMeta[]; p: PresentationConfig };

export type { EchartsSeriesMeta, EChartsOption };
