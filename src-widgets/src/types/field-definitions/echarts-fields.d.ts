/**
 * Echarts widget field definitions for vis-2 Collection (v2 multi-type).
 *
 * @remarks
 * Configures an Apache ECharts (v6) widget with a **type-family data model** (ADR-0008):
 * cartesian line/bar/area and pie share the OID time-series pipeline (`[ts, val]`, pie
 * aggregating each OID to one slice); gauge binds a scalar OID + min/max/target; radar
 * binds a list of indicator OIDs. The option seam is **GUI-owns-presentation**: the GUI
 * authors all presentation (chart-wide + per-series) into the generated option G, and the
 * data-wins force-set protects only the data-binding keys (ADR-0007, supersedes ADR-0005).
 *
 * Scalar settings are edited through the modal editor and written to these fields via
 * `onDataChange`; per-series rendering metadata lives in the base64 `seriesConfig` blob,
 * family-specific structured config (gauge/radar/pie) in the base64 `chartConfig` blob,
 * and the user's supplemental Advanced presentation overrides in the base64
 * `chartOverrides` blob. The vis-2 attribute panel only shows the "Edit chart
 * configuration" trigger plus the common fields.
 */

// ─────────────────────────────────────────────────────────────────────────────
// Value unions — single source of truth (editor state + option builder import these)
// ─────────────────────────────────────────────────────────────────────────────

/** Cartesian series sub-type (the per-series override within the cartesian family). */
export type EchartsCartesianType = 'line' | 'bar' | 'area';

/**
 * The whole-chart family, chosen by the configurator's master type selector (ADR-0008).
 *
 * @remarks
 * The master selector is **family-only**: line/bar/area are NOT chosen at chart level — they are
 * the cartesian per-series sub-type ({@link EchartsCartesianType} / `EchartsSeriesMeta.type`),
 * edited per series in the Series tab. Legacy widgets may still store `'line'|'bar'|'area'` here;
 * `familyOf` tolerates them (default → cartesian) **without** an auto-migration — they are
 * normalised to `'cartesian'` only when the user re-saves after picking the family explicitly.
 */
export type EchartsChartType = 'cartesian' | 'pie' | 'gauge' | 'radar';

/** Coordinate-system family derived from {@link EchartsChartType}. */
export type EchartsChartFamily = 'cartesian' | 'pie' | 'gauge' | 'radar';

export type EchartsMode = 'history' | 'live' | 'json';
export type EchartsTimeRange = '24h' | '7d' | '30d';
export type EchartsAggregate = 'average' | 'minmax' | 'min' | 'max' | 'total' | 'count' | 'onchange' | 'none';
export type EchartsIgnoreNull = 'keep' | 'forward' | 'zero';

/** How each bound OID collapses to a single pie-slice value. */
export type EchartsPieAggregate = 'latest' | 'sum' | 'avg' | 'min' | 'max';
/** Pie label content. */
export type EchartsPieLabel = 'none' | 'name' | 'percent' | 'namePercent';
/** Rose mode (radius/area proportional). */
export type EchartsPieRose = 'none' | 'radius' | 'area';

/** Line dash style. */
export type EchartsLineStyle = 'solid' | 'dashed' | 'dotted';
/** Step rendering for line series. */
export type EchartsStep = 'none' | 'start' | 'middle' | 'end';
/** Legend placement. */
export type EchartsLegendPos = 'top' | 'bottom' | 'left' | 'right';
/** Tooltip trigger. */
export type EchartsTooltipTrigger = 'axis' | 'item' | 'none';
/** Title placement. */
export type EchartsTitlePos = 'topLeft' | 'topCenter' | 'topRight';
/** Palette source (ADR-0007 GUI ownership; defaults derived from the MUI theme). */
export type EchartsPaletteSource = 'theme' | 'preset' | 'custom';
/** Dark-mode policy. `auto` follows the resolved vis-2 theme. */
export type EchartsDarkMode = 'auto' | 'light' | 'dark';
/** Chart renderer (Canvas default; SVG for crisp export/print/scaling). @default 'canvas' */
export type EchartsRenderer = 'canvas' | 'svg';
/** Radar shape. */
export type EchartsRadarShape = 'polygon' | 'circle';

// ─────────────────────────────────────────────────────────────────────────────
// Per-series rendering metadata (stored in the base64 `seriesConfig` blob)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Per-series presentation authored by the GUI into G.
 *
 * @remarks
 * Only the cartesian-relevant fields apply to cartesian series; pie slices use `name` +
 * `color` only; radar polygons use `name` + `color` + `area`. The editor shows fields
 * type-sensitively, so unused fields simply stay undefined.
 */
export interface EchartsSeriesMeta {
    name?: string;
    color?: string;
    /** Cartesian sub-type. @default 'line' */
    type?: EchartsCartesianType;
    /** Dual-Y axis (0 = left, 1 = right). @default 0 */
    yAxisIndex?: 0 | 1;
    /** Smooth line. @default true */
    smooth?: boolean;
    /** Line width. */
    lineWidth?: number;
    /** Line dash style. @default 'solid' */
    lineStyle?: EchartsLineStyle;
    /** Area fill under the line / solid area series. @default false */
    area?: boolean;
    /** Area fill opacity (0–1) when {@link area} is on. @default 0.15 */
    areaOpacity?: number;
    /** Stack group; truthy string stacks series that share it. */
    stack?: string;
    /** Step rendering. @default 'none' */
    step?: EchartsStep;
    /** Show data-point symbols. @default false */
    symbol?: boolean;
    /** Data-point symbol size. @default 6 */
    symbolSize?: number;
    /** Connect nulls within this series. @default false */
    connectNulls?: boolean;
    /** Show value labels. @default false */
    label?: boolean;
    /** Bar category gap (0–1, echarts `barCategoryGap`). */
    barGap?: number;
    /** Bar corner radius (px, echarts `itemStyle.borderRadius`). */
    cornerRadius?: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// Family-specific structured config (stored in the base64 `chartConfig` blob)
// ─────────────────────────────────────────────────────────────────────────────

/** Gauge config — a scalar dial within a range. */
export interface EchartsGaugeConfig {
    min?: number;
    max?: number;
    /** Optional target marker. */
    target?: number;
    /** Progress arc width (px). @default 14 */
    progressWidth?: number;
    /** Value unit suffix. */
    unit?: string;
}

/** One radar indicator (axis) bound to an OID supplying its current value. */
export interface EchartsRadarIndicator {
    name: string;
    /** Axis maximum. @default 100 */
    max?: number;
    /** OID supplying this indicator's current value (auto-subscribed as `oidN`). */
    oid: string;
}

/** Radar config — the indicator list + polygon shape. */
export interface EchartsRadarConfig {
    shape?: EchartsRadarShape;
    /** Number of split rings. @default 5 */
    splitNumber?: number;
    /** Area-fill the polygon. @default true */
    area?: boolean;
    /** Indicators (the axes). Empty list = no radar. */
    indicators: EchartsRadarIndicator[];
}

/** Pie config — aggregation + donut/rose/label. */
export interface EchartsPieConfig {
    aggregate?: EchartsPieAggregate;
    /** Donut inner radius (0–1 of the smaller viewport side). 0 = full pie. @default 0 */
    innerRadius?: number;
    rose?: EchartsPieRose;
    label?: EchartsPieLabel;
}

// ─────────────────────────────────────────────────────────────────────────────
// Chart-wide presentation (scalar rxData fields, edited via the modal)
// ─────────────────────────────────────────────────────────────────────────────

/** A horizontal/vertical threshold line on a cartesian value axis. */
export interface EchartsMarkLine {
    /** Threshold value on the Y axis. */
    value: number;
    label?: string;
    color?: string;
    dashed?: boolean;
}

/** Continuous value→colour visual map. */
export interface EchartsVisualMapConfig {
    enabled?: boolean;
    min?: number;
    max?: number;
    /** Colour stops low→high. @default blue→green→yellow→red */
    colors?: string[];
}

// ─────────────────────────────────────────────────────────────────────────────
// rxData
// ─────────────────────────────────────────────────────────────────────────────

export interface EchartsFieldsRxData {
    // ── Family & data mode ──────────────────────────────────────────────────

    /** Whole-chart family. Drives the data shape and which binding UI applies. @default 'cartesian' */
    chartType?: EchartsChartType;

    /** Data source mode. @default 'history' */
    mode?: EchartsMode;

    // ── History-mode options (shared across all cartesian/pie series) ────────

    /** Time range to fetch. @default '24h' */
    timeRange?: EchartsTimeRange;
    /** Aggregation for getHistory. @default 'average' */
    aggregate?: EchartsAggregate;
    /** Maximum number of points per series. @default 500 */
    count?: number;
    /** Periodic refresh interval in ms (0 = no periodic refresh). @default 60000 */
    refreshMs?: number;
    /** History adapter instance (optional; auto-detected when omitted). */
    instance?: string;
    /** How null gaps in the fetched history are handled. @default 'keep' */
    ignoreNull?: EchartsIgnoreNull;

    // ── JSON mode ───────────────────────────────────────────────────────────

    /**
     * Single OID whose JSON value supplies the chart data (json mode only).
     * Auto-detects `{ series: [{ name?, data }] }`, a bare array, or `{ data: [...] }`.
     */
    jsonOid?: string;

    /**
     * Chart title text — may contain vis-2 `{oid.val}` bindings. vis-2 resolves them into
     * rxData; the widget injects the live string as `title.text` (a forced data-wins key).
     */
    titleText?: string;
    /** Title placement. @default 'topCenter' */
    titlePos?: EchartsTitlePos;

    // ── Multi-OID series (indexed, auto-subscribed) ─────────────────────────

    /** Number of configured series. Drives the indexed `series` group expansion. */
    series_count?: number;
    /** Series OIDs as indexed rxData fields `oid1..oidN` (auto-subscribed by vis-2). */
    [key: `oid${number}`]: string | undefined;

    // ── Persisted config blobs (base64; read/written by the modal) ──────────

    /** Base64 `[{...EchartsSeriesMeta}]` aligned by index with `oidN`. */
    seriesConfig?: string;
    /** Base64 family-specific structured config (gauge / radar / pie). */
    chartConfig?: string;
    /** Base64 supplemental presentation overrides (the demoted U escape hatch). */
    chartOverrides?: string;

    // ── Chart-wide presentation (cartesian-relevant items apply per family) ─

    legendShow?: boolean;
    legendPos?: EchartsLegendPos;
    tooltipTrigger?: EchartsTooltipTrigger;
    /** echarts string template (`{a}/{b}/{c}`) that may embed vis-2 `{oid.val}` bindings. */
    tooltipTemplate?: string;
    tooltipUnits?: string;
    tooltipDecimals?: number;
    animation?: boolean;
    animationDuration?: number;
    /** Chart background colour (`'transparent'` or a CSS colour). @default 'transparent' */
    bgColor?: string;

    /** yAxis bounds (cartesian). `undefined` = auto. */
    yMin?: number;
    yMax?: number;
    yName?: string;
    /** Logarithmic Y axis (cartesian). @default false */
    yLog?: boolean;
    /** Y-axis label format template (`{value} kW`, cartesian). Empty = default formatting. */
    yFormat?: string;
    /** Show axis split lines. */
    xSplit?: boolean;
    ySplit?: boolean;

    /** dataZoom (cartesian). */
    dataZoomSlider?: boolean;
    dataZoomInside?: boolean;

    /** Palette (ADR-0007). @default source 'theme' */
    paletteSource?: EchartsPaletteSource;
    palettePreset?: string;
    /** `;`- or `,`-separated custom colour list when source = 'custom'. */
    paletteCustom?: string;

    /** Dark-mode policy. @default 'auto' */
    darkMode?: EchartsDarkMode;
    /** Chart renderer (Canvas default; SVG for crisp export/print). @default 'canvas' */
    renderer?: EchartsRenderer;

    /** Threshold lines (cartesian), stored as a base64 `[...EchartsMarkLine]` blob. */
    markLines?: string;
    /** Value→colour visual map (cartesian). */
    visualMapMin?: number;
    visualMapMax?: number;
    visualMapColors?: string;
    visualMapEnabled?: boolean;
}
