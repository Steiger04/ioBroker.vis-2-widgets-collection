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
    EchartsAxisConfig,
    EchartsCartesianType,
    EchartsChartFamily,
    EchartsFontStyle,
    EchartsFontWeight,
    EchartsGaugeConfig,
    EchartsLegendConfig,
    EchartsLegendPos,
    EchartsMarkLine,
    EchartsPieConfig,
    EchartsRadarConfig,
    EchartsTitlePos,
    EchartsTooltipTrigger,
    EchartsVisualMapConfig,
    EchartsXAxisConfig,
} from '../types/field-definitions/echarts-fields';
import { decodeBlob } from '../lib/encoding';
import { extractGradientColors } from '../lib/helper/extractColorFromValue';
import type { PresentationConfig } from './optionBuilders/types';
import type { ThemeTokens } from './echartsTheme';

/**
 * Title placement + styling, authored by the GUI (ADR-0007; ADR-0009 offsets; ADR-0021 bottom row
 * + colour/size/weight). The 3×2 anchor grid maps to echarts `left` (uniform — never `right`) +
 * `top` (top row) / `bottom` (bottom row) + an optional `textAlign` for the numeric-offset path.
 *
 * - `dx` (px, right-positive) applies to the LEFT-edge anchors only (`topLeft`/`bottomLeft`) — the
 *   one measurement-free horizontal offset (`left: dx` is width-independent). Center/right anchors
 *   keep their responsive named anchor and ignore `dx` (ADR-0009 addendum; a centered/right nudge
 *   needed the container width to recenter → a removed resize→rebuild churn path).
 * - `dy` (px, down-positive) applies to every anchor: top row `top: dy`, bottom row `bottom: -dy`
 *   (down = past the bottom edge).
 *
 * The bottom row needs echarts `bottom`, so switching top↔bottom would leave a stale key across
 * `setOption` merges. `'title'` (and `'legend'`) therefore joined `replaceMerge` in ADR-0021 — the
 * component is replaced each setOption, clearing any stale edge key. (Canvas, the default renderer,
 * redraws the text with no flicker; SVG swaps the node — a theoretical cost only.)
 */
const titlePlacement = (pos: EchartsTitlePos, dx: number, dy: number): Record<string, unknown> => {
    const hasDx = Number.isFinite(dx) && dx !== 0;
    const hasDy = Number.isFinite(dy) && dy !== 0;
    const isTopRow = pos === 'topLeft' || pos === 'topCenter' || pos === 'topRight';
    const hAlign: 'left' | 'center' | 'right' =
        pos === 'topLeft' || pos === 'bottomLeft'
            ? 'left'
            : pos === 'topRight' || pos === 'bottomRight'
              ? 'right'
              : 'center';

    const out: Record<string, unknown> = {};
    out[isTopRow ? 'top' : 'bottom'] = isTopRow ? (hasDy ? dy : 'top') : hasDy ? -dy : 'bottom';

    // Left-edge anchors get the measurement-free numeric offset; center/right keep the named anchor.
    if ((pos === 'topLeft' || pos === 'bottomLeft') && hasDx) {
        out.left = dx;
        out.textAlign = 'left';
    } else {
        out.left = hAlign;
    }
    return out;
};

/** Options for {@link buildTitleOption}. */
export interface TitleOptionInput {
    text: string;
    titlePos: EchartsTitlePos;
    dx: number;
    dy: number;
    /** Title colour override (`title.textStyle.color`); empty = inherit theme text-primary. */
    color?: string | null;
    /** Title font-size override; `undefined` = inherit. */
    fontSize?: number;
    /** Title font-weight override (ADR-0029 full doc set); `null` = inherit. */
    fontWeight?: EchartsFontWeight | null;
    /** Title font-style override (ADR-0029); `null` = inherit. */
    fontStyle?: EchartsFontStyle | null;
}

/**
 * Set `merged.title` from the live title text + placement + GUI-owned styling (ADR-0009 + ADR-0021).
 * The single place the title is assembled, so the widget body and the editor preview never drift
 * (ADR-0009 "one central helper, both consumers call it"). The theme already merged
 * `title.textStyle.color`; a user colour/size/weight/style overlays onto that (deep-merged, not replaced,
 * so a size-only override keeps the theme colour).
 */
export const buildTitleOption = (merged: Record<string, unknown>, opts: TitleOptionInput): void => {
    const existing = (merged.title as Record<string, unknown> | undefined) ?? {};
    const textStyleOverride: Record<string, unknown> = {};
    if (opts.color) {
        textStyleOverride.color = opts.color;
    }
    if (opts.fontSize !== undefined && Number.isFinite(opts.fontSize)) {
        textStyleOverride.fontSize = opts.fontSize;
    }
    if (opts.fontWeight) {
        textStyleOverride.fontWeight = opts.fontWeight;
    }
    if (opts.fontStyle) {
        textStyleOverride.fontStyle = opts.fontStyle;
    }
    const existingTextStyle = (existing.textStyle as Record<string, unknown> | undefined) ?? {};
    merged.title = {
        ...existing,
        text: opts.text,
        ...titlePlacement(opts.titlePos, opts.dx, opts.dy),
        ...(Object.keys(textStyleOverride).length ? { textStyle: { ...existingTextStyle, ...textStyleOverride } } : {}),
    };
};

/**
 * Legacy 4-edge → 3×3-grid legend position migration (ADR-0021). Old widgets may still store
 * `top`/`bottom`/`left`/`right`; mapped on load, never rewritten to storage.
 */
const LEGACY_LEGEND_POS: Record<string, EchartsLegendPos> = {
    top: 'topCenter',
    bottom: 'bottomCenter',
    left: 'middleLeft',
    right: 'middleRight',
};
const LEGEND_POS_9 = new Set<EchartsLegendPos>([
    'topLeft',
    'topCenter',
    'topRight',
    'middleLeft',
    'middleCenter',
    'middleRight',
    'bottomLeft',
    'bottomCenter',
    'bottomRight',
]);
/** Normalise a stored legend position to the 3×3 grid (migrating legacy 4-edge values). */
export const normalizeLegendPos = (raw: unknown): EchartsLegendPos => {
    if (typeof raw !== 'string') {
        return 'topCenter';
    }
    if (LEGACY_LEGEND_POS[raw]) {
        return LEGACY_LEGEND_POS[raw];
    }
    return LEGEND_POS_9.has(raw as EchartsLegendPos) ? (raw as EchartsLegendPos) : 'topCenter';
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

/** Decode the base64 `yAxes` blob into the per-axis config array (ADR-0012). Empty/invalid → `[]`. */
export const decodeAxes = (raw: string | undefined | null): EchartsAxisConfig[] => {
    if (!raw) {
        return [];
    }
    try {
        const parsed = JSON.parse(decodeBlob(raw));
        return Array.isArray(parsed) ? (parsed as EchartsAxisConfig[]) : [];
    } catch {
        return [];
    }
};

/** Decode the base64 `legendConfig` blob into the legend styling object (ADR-0021). Empty/invalid → `{}`. */
export const decodeLegendConfig = (raw: string | undefined | null): EchartsLegendConfig => {
    if (!raw) {
        return {};
    }
    try {
        const parsed = JSON.parse(decodeBlob(raw));
        return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? (parsed as EchartsLegendConfig) : {};
    } catch {
        return {};
    }
};

/**
 * Decode the base64 `xAxis` blob into the single X-axis config (ADR-0035). `null` when there is
 * no blob / it is invalid — the caller's legacy `xSplit` fallback applies exactly then. A saved
 * but empty `{}` blob decodes to `{}` (an explicit "all defaults" choice — the legacy fallback
 * must NOT re-apply over it).
 */
export const decodeXAxis = (raw: string | undefined | null): EchartsXAxisConfig | null => {
    if (!raw) {
        return null;
    }
    try {
        const parsed = JSON.parse(decodeBlob(raw));
        return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? (parsed as EchartsXAxisConfig) : null;
    } catch {
        return null;
    }
};

/**
 * Resolve the X-axis config with the legacy `xSplit` fallback (ADR-0035): the decoded blob wins;
 * only a legacy widget's `xSplit: true` differs from the builder default, so `false` needs no
 * config at all. Shared by the live body (`toPresentationConfig`) and the editor
 * (`loadEditorState`) so the two cannot drift.
 */
export const decodeXAxisWithLegacy = (raw: string | undefined | null, legacyXSplit: boolean): EchartsXAxisConfig =>
    decodeXAxis(raw) ?? (legacyXSplit ? { splitLine: true } : {});

/**
 * Synthesise a single axis (axis 0) from the legacy chart-level scalars (ADR-0012 migration). Used
 * only when no `yAxes` blob is present, so a legacy widget renders unchanged without a rewrite.
 */
export const legacyAxis = (s: Record<string, unknown>): EchartsAxisConfig => ({
    name: str(s.yName, ''),
    min: num(s.yMin),
    max: num(s.yMax),
    log: bool(s.yLog, false),
    format: typeof s.yFormat === 'string' && s.yFormat ? s.yFormat : undefined,
    splitLine: bool(s.ySplit, true),
    position: 'left',
});

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
    /** Decoded per-axis config (ADR-0012). When empty, axis 0 is synthesised from legacy scalars. */
    yAxes?: EchartsAxisConfig[];
    /** Semantic theme colours for the theme-derived defaults + editor inherit swatches (ADR-0027). */
    themeTokens: ThemeTokens;
}): PresentationConfig => {
    const { src: s, palette, chartConfig = {}, markLines = [], yAxes: yAxesIn, themeTokens } = opts;
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
    // (ADR-0008 r4: the top selector is authoritative; per-series type is opt-in). A legacy
    // stored 'area' is not a cartesian type (area is a per-series fill mode) → falls back to 'line'.
    const cartesianType: EchartsCartesianType =
        opts.family === 'cartesian' && (s.chartType === 'line' || s.chartType === 'bar')
            ? (s.chartType as EchartsCartesianType)
            : 'line';

    // Y-axes: decoded blob, else a single axis synthesised from the legacy chart-level scalars
    // (ADR-0012 migration — no silent rewrite; legacy widgets render unchanged).
    const yAxes: EchartsAxisConfig[] = yAxesIn && yAxesIn.length ? yAxesIn : [legacyAxis(s)];

    // X-axis (ADR-0035): editor state carries the `xAxis` OBJECT (decoded once on load, spread
    // into `src` like `legend`); persisted rxData carries the base64 BLOB; a legacy widget has
    // only the `xSplit` boolean → synthesised into `splitLine` so it renders unchanged.
    const xAxis: EchartsXAxisConfig =
        s.xAxis && typeof s.xAxis === 'object' && !Array.isArray(s.xAxis)
            ? (s.xAxis as EchartsXAxisConfig)
            : decodeXAxisWithLegacy(s.xAxis as string | undefined, bool(s.xSplit, false));

    return {
        legendShow: bool(s.legendShow, true),
        legendPos: normalizeLegendPos(s.legendPos),
        // Editor state carries the legend styling as the `legend` OBJECT (decoded once on load);
        // persisted rxData carries it as the `legendConfig` base64 BLOB. Read whichever is present so
        // the live body (rxData) and the editor preview (state) both get the styling (ADR-0021 fix:
        // the preview previously decoded an undefined blob → empty legend styling).
        legend:
            s.legend && typeof s.legend === 'object' && !Array.isArray(s.legend)
                ? (s.legend as EchartsLegendConfig)
                : decodeLegendConfig(s.legendConfig as string),
        tooltipTrigger:
            // 'axis' is meaningless off-cartesian (ADR-0012 WS2): a non-cartesian that still stores
            // it (e.g. switched from cartesian) coerces to 'item' at runtime.
            (s.tooltipTrigger as EchartsTooltipTrigger) === 'axis' && opts.family !== 'cartesian'
                ? 'item'
                : ((s.tooltipTrigger as EchartsTooltipTrigger) ?? (opts.family === 'cartesian' ? 'axis' : 'item')),
        tooltipTemplate: typeof s.tooltipTemplate === 'string' ? s.tooltipTemplate : undefined,
        tooltipUnits: typeof s.tooltipUnits === 'string' ? s.tooltipUnits : undefined,
        tooltipDecimals: num(s.tooltipDecimals),
        animation: bool(s.animation, true),
        animationDuration: num(s.animationDuration) ?? 600,
        animationEasing: typeof s.animationEasing === 'string' && s.animationEasing ? s.animationEasing : undefined,
        bgColor: str(s.bgColor, 'transparent'),
        cartesianType,
        yAxes,
        xAxis,
        dataZoomSlider: bool(s.dataZoomSlider, false),
        dataZoomInside: bool(s.dataZoomInside, false),
        palette,
        themeTokens,
        markLines,
        visualMap,
        gauge: chartConfig.gauge,
        radar: chartConfig.radar,
        pie: chartConfig.pie,
    };
};

/**
 * Map a 3×3 grid legend position to the echarts edge + `orient` (ADR-0021). Top/bottom rows place a
 * horizontal legend at that edge (left/center/right); the left/right columns place a vertical legend
 * at that edge; `middleCenter` centres a horizontal legend. `top`/`bottom`/`left`/`right` are emitted
 * freely — `'legend'` is in `replaceMerge`, so a position switch never leaves a stale edge key.
 *
 * `offsetX` (right-positive) / `offsetY` (down-positive) nudge the legend along its edge: they add to
 * the numeric edge value on the left/right columns / top/bottom rows respectively, and are IGNORED on
 * the centre column / middle row (a centred nudge needs the container size → resize churn, out of
 * scope). The 4 px edge base is uniform across all positions.
 */
const legendGridPlacement = (pos: EchartsLegendPos, offsetX: number, offsetY: number): Record<string, unknown> => {
    const dx = Number.isFinite(offsetX) ? offsetX : 0;
    const dy = Number.isFinite(offsetY) ? offsetY : 0;
    const col = pos.endsWith('Left') ? 'left' : pos.endsWith('Right') ? 'right' : 'center';
    const row = pos.startsWith('top') ? 'top' : pos.startsWith('bottom') ? 'bottom' : 'middle';
    const out: Record<string, unknown> = {};
    // Vertical: top/bottom rows take a numeric 4 px edge the down-positive Y offset adds to; the
    // middle row keeps the responsive 'center' and ignores dy (a centred Y nudge would need the
    // container height → resize→rebuild churn, deliberately out of scope).
    if (row === 'top') {
        out.top = 4 + dy;
    } else if (row === 'bottom') {
        out.bottom = 4 - dy;
    } else {
        out.top = 'center';
    }
    // Horizontal: left/right columns take a numeric 4 px edge the right-positive X offset adds to;
    // the centre column keeps 'center' and ignores dx (same measurement-free rationale).
    if (col === 'left') {
        out.left = 4 + dx;
    } else if (col === 'right') {
        out.right = 4 - dx;
    } else {
        out.left = 'center';
    }
    // orient auto from the edge: only the side columns (middleLeft/middleRight) go vertical.
    out.orient = pos === 'middleLeft' || pos === 'middleRight' ? 'vertical' : 'horizontal';
    return out;
};

/**
 * Build the echarts `legend` fragment from the presentation config + the family's legend item names
 * (ADR-0021). The single legend author for every family — cartesian/pie/radar all call it, so the
 * position/styling model is honoured uniformly (pie/radar no longer hardcode `bottom: 4`). Only the
 * GUI-owned keys are emitted; every unset field inherits the echarts/theme default.
 *
 * @param p - Chart-wide presentation (`legendShow`/`legendPos` flat + `legend` styling blob).
 * @param data - Legend item names (series/slice/polygon names — family-supplied).
 */
export const buildLegend = (p: PresentationConfig, data: string[]): Record<string, unknown> => {
    const cfg = p.legend ?? {};
    const legend: Record<string, unknown> = {
        show: p.legendShow,
        data,
        ...legendGridPlacement(p.legendPos, cfg.offsetX ?? 0, cfg.offsetY ?? 0),
    };
    // Explicit orient overrides the edge-derived auto value (ADR-0021: free horizontal/vertical choice).
    if (cfg.orient) {
        legend.orient = cfg.orient;
    }

    const textStyle: Record<string, unknown> = {};
    if (cfg.color) {
        textStyle.color = cfg.color;
    }
    if (cfg.fontSize !== undefined && Number.isFinite(cfg.fontSize)) {
        textStyle.fontSize = cfg.fontSize;
    }
    if (cfg.fontWeight) {
        textStyle.fontWeight = cfg.fontWeight;
    }
    if (cfg.fontStyle) {
        textStyle.fontStyle = cfg.fontStyle;
    }
    if (Object.keys(textStyle).length) {
        legend.textStyle = textStyle;
    }

    if (cfg.icon) {
        legend.icon = cfg.icon;
    }
    if (cfg.itemWidth !== undefined) {
        legend.itemWidth = cfg.itemWidth;
    }
    if (cfg.itemHeight !== undefined) {
        legend.itemHeight = cfg.itemHeight;
    }
    if (cfg.itemGap !== undefined) {
        legend.itemGap = cfg.itemGap;
    }
    // inactiveColor default = the theme divider token (ADR-0027), not echarts' fixed #ccc — so
    // deselected legend items stay theme-aware (esp. dark mode) and match the LegendSection swatch.
    // Always emit (an explicit override still wins via ??).
    legend.inactiveColor = cfg.inactiveColor ?? p.themeTokens.divider;

    // Legend-as-panel: background + border only emit when they would draw something.
    if (cfg.bgColor && cfg.bgColor !== 'transparent') {
        legend.backgroundColor = cfg.bgColor;
    }
    if (cfg.borderWidth) {
        legend.borderWidth = cfg.borderWidth;
        // Border default = the theme divider token (ADR-0027), not a fixed #ccc.
        legend.borderColor = cfg.borderColor ?? p.themeTokens.divider;
    }
    if (cfg.borderRadius !== undefined) {
        legend.borderRadius = cfg.borderRadius;
    }
    if (cfg.padding !== undefined) {
        legend.padding = cfg.padding;
    }

    return legend;
};
