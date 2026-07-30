/**
 * Presentation-config assembly + palette resolution for the v2 echarts widget (ADR-0007/0008).
 *
 * @module EchartsCollectionWidget/presentation
 * @remarks
 * Bridges the persisted widget data (rxData scalars + the base64 `chartConfig` / `markLines`
 * blobs) — or an editor working state with the same field names — into the
 * {@link PresentationConfig} the family builders consume. One converter serves both the live
 * body and the editor preview because the field names match.
 */
import type {
    EchartsCartesianType,
    EchartsChartFamily,
    EchartsGaugeConfig,
    EchartsLegendPos,
    EchartsMarkLine,
    EchartsPieConfig,
    EchartsRadarConfig,
    EchartsTitlePos,
    EchartsTooltipTrigger,
    EchartsVisualMapConfig,
} from '../types/field-definitions/echarts-fields';
import { decodeBlob } from '../lib/encoding';
import { extractGradientColors } from '../lib/helper/extractColorFromValue';
import type { PresentationConfig } from './optionBuilders/types';

/** Map the title-position union to the echarts `title.left/top` pair (all positions are top row). */
export const TITLE_PLACEMENT: Record<EchartsTitlePos, { left: 'left' | 'center' | 'right'; top: 'top' }> = {
    topLeft: { left: 'left', top: 'top' },
    topCenter: { left: 'center', top: 'top' },
    topRight: { left: 'right', top: 'top' },
};

/** Named categorical palette presets (ADR-0007). The default `theme` palette comes from the caller. */
export const PALETTE_PRESETS: Record<string, string[]> = {
    tableau: ['#4E79A7', '#F28E2B', '#E15759', '#76B7B2', '#59A14F', '#EDC948', '#B07AA1', '#FF9DA7'],
    vibrant: ['#5470C6', '#91CC75', '#EE6666', '#73C0DE', '#3BA272', '#FC8452', '#9A60B4', '#EA7CCC'],
    pastel: ['#93b5d8', '#cdb699', '#eea29b', '#a5cc82', '#cdb4d6', '#94c4c4', '#d8b36b', '#c98d9d'],
    warm: ['#E15759', '#FF9D2E', '#F1CE63', '#59A14F', '#4E79A7', '#76B7B2', '#B07AA1', '#9C755F'],
    cool: ['#2E5EAA', '#4C9F70', '#8AB8D8', '#5C8A8A', '#6A8D73', '#A0B0A0', '#3D6A8C', '#7BA7BC'],
    accessible: ['#0173B2', '#DE8F05', '#029E73', '#CC78BC', '#CA9161', '#FBAFE4', '#949494', '#ECE133'],
};

const num = (v: unknown): number | undefined => (typeof v === 'number' && Number.isFinite(v) ? v : undefined);
const str = (v: unknown, dft: string): string => (typeof v === 'string' && v ? v : dft);
const bool = (v: unknown, dft: boolean): boolean => (typeof v === 'boolean' ? v : dft);

/** Decode the base64 family-config blob into its gauge/radar/pie parts. */
export const decodeChartConfig = (
    raw: string | undefined | null,
): { gauge?: EchartsGaugeConfig; radar?: EchartsRadarConfig; pie?: EchartsPieConfig } => {
    if (!raw) {
        return {};
    }
    try {
        const parsed = JSON.parse(decodeBlob(raw));
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
            return parsed as { gauge?: EchartsGaugeConfig; radar?: EchartsRadarConfig; pie?: EchartsPieConfig };
        }
    } catch {
        /* ignore — fall back to empty */
    }
    return {};
};

/** Decode the base64 mark-lines blob. */
export const decodeMarkLines = (raw: string | undefined | null): EchartsMarkLine[] => {
    if (!raw) {
        return [];
    }
    try {
        const parsed = JSON.parse(decodeBlob(raw));
        return Array.isArray(parsed) ? (parsed as EchartsMarkLine[]) : [];
    } catch {
        return [];
    }
};

/** Parse a `;`/`,`-separated colour list string into a palette array. */
const parseCustomPalette = (raw: string | undefined): string[] =>
    (raw ?? '')
        .split(/[;,]/)
        .map(s => s.trim())
        .filter(Boolean);

/**
 * Parse a visualMap colour scale into the ordered colour array echarts `inRange.color` needs.
 *
 * A value→colour scale IS a gradient, so the preferred source is a single CSS gradient string
 * (one gradient picker). The gradient is checked FIRST because it contains commas — the legacy
 * `;`/`,`-separated list split must not run on a gradient string. A legacy `;`-separated list
 * (older widgets) is still accepted as a fallback.
 */
const parseColorScale = (raw: string | undefined): string[] => {
    const stops = extractGradientColors(raw);
    return stops && stops.length ? stops : parseCustomPalette(raw);
};

/**
 * Resolve the active series palette from its source.
 *
 * @param source - 'theme' | 'preset' | 'custom'.
 * @param preset - Preset name when source = 'preset'.
 * @param custom - `;`/`,`-separated colours when source = 'custom'.
 * @param themePalette - The MUI-derived palette (the 'theme' default + fallback).
 */
export const resolvePalette = (
    source: string | undefined,
    preset: string | undefined,
    custom: string | undefined,
    themePalette: string[],
): string[] => {
    if (source === 'custom') {
        const list = parseCustomPalette(custom);
        if (list.length) {
            return list;
        }
    }
    if (source === 'preset' && preset && PALETTE_PRESETS[preset]) {
        return PALETTE_PRESETS[preset];
    }
    return themePalette;
};

/**
 * Assemble a {@link PresentationConfig} from a field map (rxData or editor state) plus the
 * resolved palette and decoded family configs. Pure — no decoding here.
 */
export const toPresentationConfig = (opts: {
    src: Record<string, unknown>;
    palette: string[];
    family: EchartsChartFamily;
    chartConfig?: { gauge?: EchartsGaugeConfig; radar?: EchartsRadarConfig; pie?: EchartsPieConfig };
    markLines?: EchartsMarkLine[];
}): PresentationConfig => {
    const { src: s, palette, chartConfig = {}, markLines = [] } = opts;
    const visualMapEnabled = bool(s.visualMapEnabled, false);
    const visualMap: EchartsVisualMapConfig | undefined = visualMapEnabled
        ? {
              enabled: true,
              min: num(s.visualMapMin) ?? 0,
              max: num(s.visualMapMax) ?? 100,
              colors: parseColorScale(s.visualMapColors as string | undefined),
          }
        : undefined;

    // The cartesian chart type is the default series type inherited by non-overridden series
    // (ADR-0008 addendum r3: the top selector is authoritative; per-series type is opt-in).
    const cartesianType: EchartsCartesianType =
        opts.family === 'cartesian' && (s.chartType === 'line' || s.chartType === 'bar' || s.chartType === 'area')
            ? (s.chartType as EchartsCartesianType)
            : 'line';

    return {
        legendShow: bool(s.legendShow, true),
        legendPos: (s.legendPos as EchartsLegendPos) ?? 'top',
        tooltipTrigger: (s.tooltipTrigger as EchartsTooltipTrigger) ?? (opts.family === 'cartesian' ? 'axis' : 'item'),
        tooltipTemplate: typeof s.tooltipTemplate === 'string' ? s.tooltipTemplate : undefined,
        tooltipUnits: typeof s.tooltipUnits === 'string' ? s.tooltipUnits : undefined,
        tooltipDecimals: num(s.tooltipDecimals),
        animation: bool(s.animation, true),
        animationDuration: num(s.animationDuration) ?? 600,
        bgColor: str(s.bgColor, 'transparent'),
        cartesianType,
        yMin: num(s.yMin),
        yMax: num(s.yMax),
        yName: typeof s.yName === 'string' ? s.yName : '',
        yLog: bool(s.yLog, false),
        yFormat: typeof s.yFormat === 'string' && s.yFormat ? s.yFormat : undefined,
        xSplit: bool(s.xSplit, false),
        ySplit: bool(s.ySplit, true),
        dataZoomSlider: bool(s.dataZoomSlider, false),
        dataZoomInside: bool(s.dataZoomInside, false),
        palette,
        markLines,
        visualMap,
        gauge: chartConfig.gauge,
        radar: chartConfig.radar,
        pie: chartConfig.pie,
    };
};
