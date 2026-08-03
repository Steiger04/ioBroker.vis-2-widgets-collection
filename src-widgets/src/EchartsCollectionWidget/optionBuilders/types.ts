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
    EchartsLegendPos,
    EchartsMarkLine,
    EchartsPieConfig,
    EchartsRadarConfig,
    EchartsSeriesMeta,
    EchartsTooltipTrigger,
    EchartsVisualMapConfig,
} from '../../types/field-definitions/echarts-fields';
import type { SeriesPoint } from '../historyLogic';

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
    xSplit: boolean;
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
}

/** Discriminated input to the orchestrator {@link buildGeneratedOption}. */
export type GeneratedInput =
    | { family: 'cartesian'; series: ChartSeries[]; meta: EchartsSeriesMeta[]; p: PresentationConfig }
    | { family: 'pie'; series: ChartSeries[]; meta: EchartsSeriesMeta[]; p: PresentationConfig }
    | { family: 'gauge'; value: number | null; meta: EchartsSeriesMeta[]; p: PresentationConfig }
    | { family: 'radar'; values: (number | null)[]; meta: EchartsSeriesMeta[]; p: PresentationConfig };

export type { EchartsSeriesMeta, EChartsOption };
