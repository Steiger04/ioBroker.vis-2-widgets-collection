/**
 * Echarts widget field definitions for vis-2 Collection (v2 multi-type).
 *
 * @remarks
 * Configures an Apache ECharts (v6) widget with a **type-family data model** (ADR-0008):
 * cartesian line/bar and pie share the OID time-series pipeline (`[ts, val]`, pie
 * aggregating each OID to one slice); gauge binds a scalar OID + min/max/target; radar
 * binds a list of indicator OIDs. The option seam is **GUI-owns-presentation**: the GUI
 * authors all presentation (chart-wide + per-series) into the generated option G, and the
 * data-wins force-set protects only the data-binding keys (ADR-0007, supersedes ADR-0005).
 *
 * Area is NOT a chart type (ADR-0008 r4): echarts has no `type:'area'` — an area chart is a
 * `type:'line'` series with an `areaStyle`. Area fill is therefore a per-series **fill mode**
 * (`off` | `flat` | `gradient`), orthogonal to the line type.
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

/**
 * Cartesian series sub-type (the per-series override within the cartesian family). `area` is NOT a
 * type (ADR-0008 r4): an area chart is a `line` with an `areaStyle`, so area is a per-series fill
 * mode ({@link EchartsAreaFill}), not a cartesian type.
 */
export type EchartsCartesianType = 'line' | 'bar';

/**
 * The kind of chart the user is building — chosen once from the configurator's primary (top)
 * selector. This is the chart's user-facing identity AND the authoritative source of the rendered
 * type: `line`/`bar` share the cartesian family (every non-overridden series inherits this type);
 * `pie`/`gauge`/`radar` are single-family types. The {@link EchartsChartFamily} is *derived* from
 * this via `familyOf`, never chosen separately.
 *
 * @remarks
 * ADR-0008 r4 removed `'area'` from this union — echarts has no `type:'area'`; area is a per-series
 * fill mode. Legacy widgets may still store `'area'` (or the family-only `'cartesian'`); `familyOf`
 * tolerates both (→ cartesian) **without** an auto-migration — rewritten to a concrete type only
 * when the user re-saves after picking the type explicitly.
 */
export type EchartsChartType = 'line' | 'bar' | 'pie' | 'gauge' | 'radar';

/**
 * Per-series area fill mode for a cartesian line series (ADR-0008 r4).
 * - `off` — line only, no fill (the `line` chart-type default).
 * - `flat` — solid `areaStyle` at {@link EchartsSeriesMeta.areaOpacity}.
 * - `gradient` — `areaStyle.color` as a vertical/horizontal linear gradient parsed from the CSS
 *   gradient string in {@link EchartsSeriesMeta.areaGradient}.
 */
export type EchartsAreaFill = 'off' | 'flat' | 'gradient';

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
/**
 * Legend placement on a 3×3 grid (ADR-0021). Replaces the legacy 4-edge union (`top`/`bottom`/
 * `left`/`right`); legacy values are migrated on load (`top→topCenter`, `bottom→bottomCenter`,
 * `left→middleLeft`, `right→middleRight`) — no silent rewrite of stored data.
 */
export type EchartsLegendPos =
    | 'topLeft'
    | 'topCenter'
    | 'topRight'
    | 'middleLeft'
    | 'middleCenter'
    | 'middleRight'
    | 'bottomLeft'
    | 'bottomCenter'
    | 'bottomRight';
/** Built-in echarts legend symbol shapes (the `legend.icon` keywords). `undefined` = inherit from series. */
export type EchartsLegendIcon = 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | 'none';
/** Tooltip trigger. */
export type EchartsTooltipTrigger = 'axis' | 'item' | 'none';
/**
 * echarts `textStyle.fontWeight` — the full doc set (ADR-0029). The four named weights plus the
 * numeric CSS scale (100–900); `normal`≡400, `bold`≡700. Title weight is always-emit (default
 * `'normal'`); legend weight is nullable (`undefined` = inherit).
 */
export type EchartsFontWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | number;
/** echarts `textStyle.fontStyle` (ADR-0029). `oblique` is doc-faithful though ≈ `italic` in most fonts. */
export type EchartsFontStyle = 'normal' | 'italic' | 'oblique';
/**
 * Title placement on a 3×2 grid (ADR-0009 + ADR-0021). The bottom row was added in ADR-0021; it
 * needs the echarts `bottom` field, so `'title'` joined the `replaceMerge` list (top↔bottom
 * switches no longer leave a stale key). @default 'topCenter'
 */
export type EchartsTitlePos = 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
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
    /**
     * Stable identity for React reconciliation (NOT emitted to echarts — every builder reads meta
     * field-by-field, never spreads it). Stamped at series creation (`nextSeriesId`) and backfilled
     * on editor load by `normalizeSeries` (migration). Round-trips through the `seriesConfig` blob.
     * Fixes the index-key bug where deleting a middle series unmounted the wrong card.
     */
    id?: string;
    name?: string;
    color?: string;
    /** Cartesian sub-type. @default 'line' */
    type?: EchartsCartesianType;
    /** Cartesian Y-axis index this series binds to (0-based; ADR-0012 multi-axis). @default 0 */
    yAxisIndex?: number;
    /**
     * History adapter instance this series reads Verlauf data from (ADR-0039) — pinned per
     * series because each OID can store its history in a different adapter. Empty/undefined =
     * Auto: the datapoint's own config (`common.custom`) decides, else the server default.
     * History mode only; never emitted to echarts.
     */
    instance?: string;
    /** Smooth line. @default false (matches ECharts 'Basic Line'; ADR-0008 r4 line-family) */
    smooth?: boolean;
    /** Line width. */
    lineWidth?: number;
    /** Line dash style. @default 'solid' */
    lineStyle?: EchartsLineStyle;
    /**
     * Area fill mode for a line series (ADR-0008 r4). `off` = no fill; `flat` = solid
     * {@link areaOpacity} fill; `gradient` = linear gradient from {@link areaGradient}.
     * Legacy boolean `true` is tolerated as `flat` (no auto-migration). @default 'off'
     */
    area?: EchartsAreaFill;
    /**
     * CSS `linear-gradient(...)` string supplying the area fill colours when
     * {@link area} = `gradient`. The builder parses stops + direction into an echarts
     * `LinearGradient` (`areaStyle.color`).
     */
    areaGradient?: string;
    /** Area fill opacity (0–1) when {@link area} is `flat` or `gradient`. @default 0.15 (flat) / 0.8 (gradient) */
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
    /** Gap between bars within one category (0–1, echarts `barGap`). @default 0 (echarts auto) */
    barGap?: number;
    /** Gap between bar categories (0–1, echarts `barCategoryGap`). @default 0 (echarts auto) */
    barCategoryGap?: number;
    /** Bar corner radius (px, echarts `itemStyle.borderRadius`). */
    cornerRadius?: number;
    /**
     * Per-series raw echarts JSON override (ADR-0015): parsed and deep-merged UNDER the GUI-authored
     * entry (GUI wins on collision; the data points are force-set). The card-level escape hatch for
     * series keys the GUI does not expose (markPoint, `label.formatter`, `emphasis`, …). Because it is
     * folded into G by the builder, it wins over a chart-level U `series` entry on the same index.
     */
    raw?: string;
}

/**
 * JSON-mode per-series style overlay, keyed by the payload series NAME (ADR-0011).
 * In json mode the payload owns series identity (count + data); this overlay holds the
 * per-series presentation that re-attaches by name as the payload changes. Empty/missing →
 * the builder applies defaults (palette slot, inherited type). Entry shape is the presentation
 * subset of {@link EchartsSeriesMeta} (no OID — json mode has one `jsonOid`, not `oidN`).
 */
export type EchartsJsonSeriesStyle = Record<string, EchartsSeriesMeta>;

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
    /**
     * Stable identity for React reconciliation (NOT emitted to echarts — the radar builder maps
     * indicators to `{name, max}` field-by-field). Stamped at creation and backfilled on editor load
     * via `withStableIds`. Fixes the index-key bug on indicator delete.
     */
    id?: string;
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
    /**
     * Whole-pie series raw echarts JSON override (ADR-0017): parsed and deep-merged UNDER the
     * GUI-authored pie series (GUI wins on collision; data is force-set). The pie is one echarts
     * series with N slices, so this targets series-level keys the GUI does not expose
     * (`labelLine`, `emphasis`, `itemStyle.borderRadius`, `startAngle`, `selectedMode`, …).
     * Per-slice presentation lives on the slice's `EchartsSeriesMeta.raw` instead.
     */
    raw?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Chart-wide presentation (scalar rxData fields, edited via the modal)
// ─────────────────────────────────────────────────────────────────────────────

/** A horizontal/vertical threshold line on a cartesian value axis. */
export interface EchartsMarkLine {
    /**
     * Stable identity for React reconciliation (NOT emitted to echarts — the cartesian builder's
     * `markLineOption` reads value/label/color/dashed field-by-field). Stamped at creation and
     * backfilled on editor load via `withStableIds`. Fixes the index-key bug on threshold delete.
     */
    id?: string;
    /** Threshold value on the Y axis. */
    value: number;
    label?: string;
    color?: string;
    dashed?: boolean;
    /**
     * Which cartesian Y-axis the threshold belongs to (ADR-XXXX: multi-axis mark-line host).
     * Default 0 (the first/left axis). A threshold is drawn on the axis of the series it is attached
     * to, so the cartesian builder hangs it on the first series bound to this axis (NOT stur `entries[0]`).
     * Undefined → 0, kept tolerant for legacy thresholds that predate the field.
     */
    yAxisIndex?: number;
}

/** Continuous value→colour visual map. */
export interface EchartsVisualMapConfig {
    enabled?: boolean;
    min?: number;
    max?: number;
    /** Colour stops low→high. @default blue→green→yellow→red */
    colors?: string[];
}

/**
 * Legend styling config (ADR-0021) — stored as a base64 `legendConfig` blob. `legendShow` +
 * `legendPos` stay flat scalars (the always-on core, mirroring the `yAxes`-blob-beside-legacy-
 * scalars pattern). Every field is optional: `undefined`/empty = inherit the echarts/theme default
 * (the effective-value-with-override-shown idiom). Interaction (`selectedMode`, `selector`,
 * scroll `type`) stays in the Advanced JSON escape hatch; per-series legend `data` overrides are
 * out of scope.
 */
export interface EchartsLegendConfig {
    /** Legend text colour (`legend.textStyle.color`); `undefined` = inherit theme secondary. */
    color?: string;
    /** Legend text size (`legend.textStyle.fontSize`); `undefined` = inherit. */
    fontSize?: number;
    /** Legend text weight (`legend.textStyle.fontWeight`); `undefined` = inherit. */
    fontWeight?: EchartsFontWeight;
    /** Legend text style (`legend.textStyle.fontStyle`, ADR-0029); `undefined` = inherit. */
    fontStyle?: EchartsFontStyle;
    /** Legend symbol shape (`legend.icon`); `undefined` = inherit from the series. */
    icon?: EchartsLegendIcon;
    /**
     * Legend item orientation (`legend.orient`); `undefined` = auto (derived from the position edge —
     * top/bottom row → horizontal, left/right column → vertical, centre → horizontal). An explicit
     * override lets e.g. a top legend run vertically ("untereinander").
     */
    orient?: 'horizontal' | 'vertical';
    /** Legend symbol width (`legend.itemWidth`). @default 25 (echarts) */
    itemWidth?: number;
    /** Legend symbol height (`legend.itemHeight`). @default 14 (echarts) */
    itemHeight?: number;
    /** Gap between legend items (`legend.itemGap`). @default 10 (echarts) */
    itemGap?: number;
    /** Colour of a deselected (toggled-off) legend item (`legend.inactiveColor`). @default '#ccc' */
    inactiveColor?: string;
    /** Legend panel background (`legend.backgroundColor`); `'transparent'`/`undefined` = none. */
    bgColor?: string;
    /** Legend panel border colour (`legend.borderColor`). @default '#ccc' */
    borderColor?: string;
    /** Legend panel border width (`legend.borderWidth`); 0 = no border. @default 0 */
    borderWidth?: number;
    /** Legend panel corner radius (`legend.borderRadius`). @default 0 */
    borderRadius?: number;
    /** Legend panel inner padding (`legend.padding`). @default 5 (echarts) */
    padding?: number;
    /**
     * Horizontal nudge in px (right-positive). Adds to the numeric edge on the left/right columns;
     * ignored on the centre column (a centred nudge needs the container width → resize churn).
     */
    offsetX?: number;
    /**
     * Vertical nudge in px (down-positive). Adds to the numeric edge on the top/bottom rows; ignored
     * on the middle row (a centred nudge needs the container height → resize churn).
     */
    offsetY?: number;
}

/**
 * Per-axis config for a cartesian Y-axis (ADR-0012). Stored as a base64 `yAxes` blob (an array of
 * these). Axis 0 is the default (left, splitlines on); further axes render side-by-side via
 * `position`/`offset`. A series binds to one via {@link EchartsSeriesMeta.yAxisIndex}.
 *
 * @remarks
 * The editor exposes Core knobs (name/position/colour/min/max/log/format/splitLine) directly and
 * the Advanced knobs (scale/splitNumber/minInterval/offset/alignTicks/axisTick/nameRotate)
 * collapsibly; exotic options (boundaryGap/forced interval/axisPointer-linking) stay in the
 * Advanced-JSON templates (ADR-0014).
 */
export interface EchartsAxisConfig {
    /**
     * Stable identity for React reconciliation (NOT emitted to echarts — the cartesian builder
     * builds yAxis entries field-by-field). Stamped at creation by `axisLayout` and backfilled on
     * editor load by `normalizeAxes` (migration). Fixes the index-key bug where deleting a middle
     * axis unmounted the wrong card.
     */
    id?: string;
    /** Axis name (label). */
    name?: string;
    /** Minimum; undefined = auto. */
    min?: number;
    /** Maximum; undefined = auto. */
    max?: number;
    /** Logarithmic scale (type:'log'). @default false */
    log?: boolean;
    /** `axisLabel.formatter` string template ('{value} kW'). Empty = default formatting. */
    format?: string;
    /** Side of the grid. @default 'left' for axis 0, 'right' otherwise. */
    position?: 'left' | 'right';
    /** Px offset from the grid edge (stacks axes on the same side). @default 0 */
    offset?: number;
    /** Axis colour (axis line + label + name). Defaults to the first bound series' colour. */
    color?: string;
    /** Don't force the axis to include zero. @default false */
    scale?: boolean;
    /** Show split lines. @default true for axis 0, false otherwise. */
    splitLine?: boolean;
    /** Approximate number of segments (tick density). */
    splitNumber?: number;
    /** Minimum tick interval (e.g. 1 for integer ticks on count axes). */
    minInterval?: number;
    /** Align ticks across value axes (the #1 multi-axis legibility lever). @default true when ≥2 axes. */
    alignTicks?: boolean;
    /** Show axis ticks. */
    axisTick?: boolean;
    /** Rotate the axis name (deg, for tight multi-axis layouts). */
    nameRotate?: number;
    /**
     * Where the axis name sits along the axis (echarts `nameLocation`; on a Y-axis 'end' = top,
     * 'start' = bottom). Promoted from a builder hard-emit to a card field (ADR-0037) so no
     * always-emitted key remains silently un-overridable. @default 'middle'
     */
    nameLocation?: 'start' | 'middle' | 'end';
    /**
     * Px gap between axis line and name. Card field since ADR-0037 (was the `AXIS_NAME_GAP`
     * hard-emit). @default 18
     */
    nameGap?: number;
    /**
     * Per-axis raw echarts JSON override (ADR-0037): parsed and deep-merged UNDER the GUI-authored
     * yAxis entry by `applyRawOverride` — the card wins every collision, so GUI-covered keys
     * (min/max/splitLine.show/…) are protected while everything the builder does not emit (label
     * fonts, minorTick, splitArea, logBase, …) takes effect. Rides the `yAxes` blob; survives
     * reconcile/prune/pack (all spread-based). Freshly created axes start without one.
     */
    raw?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// rxData
// ─────────────────────────────────────────────────────────────────────────────

/**
 * The single X-axis configuration (ADR-0035) — flat presentation config, deliberately NOT a
 * miniature of the Y-axis machinery: no list, no series binding, no offset/stagger. The axis
 * type stays hardcoded `time` (all data modes normalize points to `[ts, val]`); min/max and
 * the time window belong to the data mode, not the axis.
 *
 * @remarks
 * Stored as the base64 `xAxis` rxData blob (single object). The legacy `xSplit` boolean is
 * synthesised into `splitLine` at load when no blob is present (legacy widgets render
 * unchanged). Colour inherits a theme token — the X-axis belongs to no series.
 */
export interface EchartsXAxisConfig {
    /** Axis name (rendered below the labels, `nameLocation:'middle'`). */
    name?: string;
    /** `axisLabel.formatter` time template (`{HH}:{mm}`, `{dd}.{MM}.`); empty = echarts auto-labelling. */
    format?: string;
    /** Axis colour (line + labels + name); unset = theme token inherit (ADR-0027/0035). */
    color?: string;
    /** Show axis ticks. @default true (echarts `auto` resolves true for time-x + value-y). */
    axisTick?: boolean;
    /** Show split lines. @default false (the echarts time-axis default). */
    splitLine?: boolean;
    /** Target tick count (`splitNumber`); unset = the echarts time-axis default (6). */
    splitNumber?: number;
    /** Minimum tick interval, in MILLISECONDS (a time axis counts in ms, unlike the value Y-axis). */
    minInterval?: number;
    /** Rotate the axis name (deg); unset = horizontal (echarts `null` renders 0° on a bottom axis). */
    nameRotate?: number;
    /** Rotate the tick LABELS (deg, `axisLabel.rotate`) — angled time labels on narrow widgets. */
    labelRotate?: number;
}

export interface EchartsFieldsRxData {
    // ── Family & data mode ──────────────────────────────────────────────────

    /** Kind of chart (line/bar/pie/gauge/radar — area is a per-series fill mode, not a type, ADR-0008 r4). Drives the data shape + binding UI; the family is derived via `familyOf`. @default 'line' */
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
    /** Title placement on the 3×2 grid (ADR-0009 + ADR-0021). @default 'topCenter' */
    titlePos?: EchartsTitlePos;
    /** Title horizontal pixel offset (right-positive). Applies to the left-edge anchors (`*Left`) only — the one measurement-free horizontal offset (ADR-0009 addendum). @default 0 */
    titleDx?: number;
    /** Title vertical pixel offset (down-positive). Applies to every anchor (ADR-0009). @default 0 */
    titleDy?: number;
    /** Title text colour (`title.textStyle.color`); `undefined`/empty = inherit theme text-primary. */
    titleColor?: string;
    /** Title text size (`title.textStyle.fontSize`); `undefined` = inherit. */
    titleFontSize?: number;
    /** Title text weight (`title.textStyle.fontWeight`); the editor always-emit default is `'normal'`. */
    titleWeight?: EchartsFontWeight;
    /** Title text style (`title.textStyle.fontStyle`, ADR-0029); the editor default is `'normal'`. */
    titleFontStyle?: EchartsFontStyle;

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
    /**
     * Base64 `Record<name, EchartsSeriesMeta>` — the JSON-mode per-series style overlay
     * (ADR-0011). Only meaningful in json mode; carried round-trip regardless so switching
     * modes away and back preserves the user's per-series style.
     */
    jsonSeriesStyle?: string;
    /**
     * Base64 `string[]` — JSON-mode deny-list of payload series names hidden from the chart
     * (Problem-2 / ADR-0011 companion). The payload still owns the series; this only suppresses
     * them (chart + legend + axis). Restorable in the editor.
     */
    jsonHidden?: string;

    // ── Chart-wide presentation (cartesian-relevant items apply per family) ─

    legendShow?: boolean;
    /** Legend placement on the 3×3 grid (ADR-0021); legacy 4-edge values are migrated on load. @default 'topCenter' */
    legendPos?: EchartsLegendPos;
    /** Base64 {@link EchartsLegendConfig} — legend styling (text/symbol/frame). `legendShow`+`legendPos` stay flat. */
    legendConfig?: string;
    tooltipTrigger?: EchartsTooltipTrigger;
    /** echarts string template (`{a}/{b}/{c}`) that may embed vis-2 `{oid.val}` bindings. */
    tooltipTemplate?: string;
    tooltipUnits?: string;
    tooltipDecimals?: number;
    animation?: boolean;
    animationDuration?: number;
    /** echarts animation easing name (e.g. 'cubicOut'); empty/undefined = echarts default. GUI-owned (ADR-0011 D5). */
    animationEasing?: string;
    /** Chart background colour (`'transparent'` or a CSS colour). @default 'transparent' */
    bgColor?: string;

    /**
     * Base64 `[...EchartsAxisConfig]` — the cartesian Y-axes (ADR-0012). Empty/absent = a single
     * auto axis; a legacy widget's `yMin`/`yMax`/`yName`/`yLog`/`yFormat`/`ySplit` are synthesised
     * into `yAxes[0]` at load (no silent rewrite).
     */
    yAxes?: string;
    /** @deprecated legacy cartesian axis-0 min (ADR-0012 → `yAxes`); tolerated at load only. */
    yMin?: number;
    /** @deprecated legacy cartesian axis-0 max (ADR-0012 → `yAxes`); tolerated at load only. */
    yMax?: number;
    /** @deprecated legacy cartesian axis-0 name (ADR-0012 → `yAxes`); tolerated at load only. */
    yName?: string;
    /** @deprecated legacy cartesian axis-0 log (ADR-0012 → `yAxes`); tolerated at load only. */
    yLog?: boolean;
    /** @deprecated legacy cartesian axis-0 format (ADR-0012 → `yAxes`); tolerated at load only. */
    yFormat?: string;
    /**
     * Base64 {@link EchartsXAxisConfig} — the single cartesian X-axis (ADR-0035). Absent = a
     * plain time axis; a legacy widget's `xSplit` boolean is synthesised into `splitLine` at
     * load (no silent rewrite).
     */
    xAxis?: string;
    /** @deprecated legacy X splitlines toggle (ADR-0035 → `xAxis` blob); tolerated at load only. */
    xSplit?: boolean;
    /** @deprecated legacy cartesian axis-0 splitlines (ADR-0012 → `yAxes[0].splitLine`). */
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
