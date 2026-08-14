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
    EchartsGaugeConfig,
    EchartsLegendConfig,
    EchartsLegendPos,
    EchartsMarkLine,
    EchartsPieConfig,
    EchartsRadarConfig,
    EchartsSeriesMeta,
    EchartsTooltipTrigger,
    EchartsVisualMapConfig,
    EchartsXAxisConfig,
} from '../../types/field-definitions/echarts-fields';
import type { SeriesPoint } from '../historyLogic';
import type { ThemeTokens } from '../echartsTheme';

/** A resolved cartesian/pie series the chart can render. */
export interface ChartSeries {
    name: string;
    data: SeriesPoint[];
}

/**
 * Chart-wide + family presentation assembled from widget rxData by the body, then handed to
 * the family builders so they author presentation into G (GUI-owns-presentation, ADR-0007).
 */
export interface PresentationConfig {
    legendShow: boolean;
    legendPos: EchartsLegendPos;
    /** Legend styling (ADR-0021 `legendConfig` blob); `undefined` keys inherit echarts/theme defaults. */
    legend?: EchartsLegendConfig;
    tooltipTrigger: EchartsTooltipTrigger;
    tooltipTemplate?: string;
    tooltipUnits?: string;
    tooltipDecimals?: number;
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
    visualMap?: EchartsVisualMapConfig;
    // family-specific structured config
    gauge?: EchartsGaugeConfig;
    radar?: EchartsRadarConfig;
    pie?: EchartsPieConfig;
    // resolved series palette (theme / preset / custom), applied per-series when no meta colour
    palette: string[];
    // semantic theme colours for theme-derived defaults (gauge zones, visualMap ramp, markLine,
    // legend border) + the editor inherit swatches — resolved from the chart's theme (ADR-0027).
    themeTokens: ThemeTokens;
}

/** Discriminated input to the orchestrator {@link buildGeneratedOption}. */
export type GeneratedInput =
    | { family: 'cartesian'; series: ChartSeries[]; meta: EchartsSeriesMeta[]; p: PresentationConfig }
    | { family: 'pie'; series: ChartSeries[]; meta: EchartsSeriesMeta[]; p: PresentationConfig }
    | { family: 'gauge'; value: number | null; meta: EchartsSeriesMeta[]; p: PresentationConfig }
    | { family: 'radar'; values: (number | null)[]; meta: EchartsSeriesMeta[]; p: PresentationConfig };

export type { EchartsSeriesMeta, EChartsOption };
