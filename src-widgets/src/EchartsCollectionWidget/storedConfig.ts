/**
 * The stored chart configuration: what each configuration blob holds (KI-Integration, ADR-0114).
 *
 * @module EchartsCollectionWidget/storedConfig
 * @remarks
 * The configuration editor stores the chart's structured settings as JSON blobs (`b64:`, so vis-2's
 * `extractBinding` cannot mistake them for bindings); the vis-2 assistant writes them as plain
 * JSON, possibly broken or reduced by a flat update. The field definitions declare each blob's
 * top level (`storedValue`, read by the Rückfall-Regel in `Generic`), and every decoder — live
 * body, option builder and configuration editor alike — reads its blob with the shared blob
 * readers (`lib/usableJson`) and the kind tables here:
 * - a value that is no JSON text of the blob's top level (plain or blob) reads as no blob;
 * - a list entry that is no object reads as an unset entry: an empty entry where the list is
 *   positional (`seriesConfig` pairs with `oid{n}`, `yAxes` with `yAxisIndex`), left out otherwise;
 * - a key whose value is not of its JSON type reads as not written, so the builders read it the way
 *   they read it unset.
 *
 * The kinds name JSON types, not value lists: the builders already read an unknown text value
 * (a legacy chart type, area or stack mode the editor heals on load, ADR-0008/0071/0084) the way
 * their own tolerance decides, and a legacy form of another JSON type (a boolean `area`, a textual
 * mark bound or offset) is listed with its type. Keys no kind names stay as written, so legacy keys
 * the migrations read (`dashed`, the retired label cluster) reach them.
 */
import type {
    EchartsAxisConfig,
    EchartsLegendConfig,
    EchartsMarkLine,
    EchartsPieConfig,
    EchartsSeriesMeta,
    EchartsToolboxConfig,
    EchartsXAxisConfig,
} from '../types/field-definitions/echarts-fields';
import { anyOf, isFlag, isNumber, isRecord, isText, isTextList, type KeyKinds } from '../lib/usableJson';
import type { ChartConfigBlob } from './presentation';

const textOrNumber = anyOf(isText, isNumber);

/** The keys of a series' settings (`seriesConfig` entries, `jsonSeriesStyle` values). */
export const SERIES_META_KINDS: KeyKinds<EchartsSeriesMeta> = {
    id: isText,
    name: isText,
    color: isText,
    type: isText,
    yAxisIndex: isNumber,
    instance: isText,
    yPath: isText,
    smooth: isFlag,
    lineWidth: isNumber,
    lineStyle: isText,
    // Legacy `area: true` reads as the flat fill (ADR-0008 r4).
    area: anyOf(isText, isFlag),
    areaGradient: isText,
    areaOpacity: isNumber,
    stack: isText,
    step: isText,
    symbol: isFlag,
    symbolSize: isNumber,
    connectNulls: isFlag,
    unit: isText,
    decimals: isNumber,
    oidType: isText,
    trueText: isText,
    falseText: isText,
    states: isRecord,
    valueMap: isRecord,
    yOffset: isNumber,
    formula: isText,
    // A number of milliseconds or an offset key ('1m', '-1y').
    xOffset: textOrNumber,
    aggregate: isText,
    percentileValue: isNumber,
    integralUnit: isNumber,
    integralInterpolation: isText,
    diffMode: isText,
    nullMode: isText,
    smoothWindow: isNumber,
    cumulative: isFlag,
    shadowBlur: isNumber,
    noFuture: isFlag,
    legendOnly: isFlag,
    colorScale: isFlag,
    colorScaleMin: isNumber,
    colorScaleMax: isNumber,
    colorScaleColors: isText,
    label: isFlag,
    labelPosition: isText,
    labelFontSize: isNumber,
    labelColor: isText,
    barGap: isNumber,
    barCategoryGap: isNumber,
    barWidth: isText,
    cornerRadius: isNumber,
    raw: isText,
    snippets: isTextList,
};

/** The keys of the pie family's settings (`chartConfig.pie`). */
export const PIE_KINDS: KeyKinds<EchartsPieConfig> = {
    aggregate: isText,
    innerRadius: isNumber,
    rose: isText,
    label: isText,
    labelColor: isText,
    raw: isText,
    snippets: isTextList,
};

/** The keys of the family and section settings (`chartConfig`). */
export const CHART_CONFIG_KINDS: KeyKinds<ChartConfigBlob> = {
    pie: isRecord,
    titleRaw: isText,
    titleSnippets: isTextList,
    legendRaw: isText,
    legendSnippets: isTextList,
    tooltipRaw: isText,
    tooltipSnippets: isTextList,
    stackMode: isText,
    stackSum: isFlag,
};

/** The keys of a Y axis (`yAxes` entries). */
export const AXIS_KINDS: KeyKinds<EchartsAxisConfig> = {
    id: isText,
    name: isText,
    min: isNumber,
    max: isNumber,
    log: isFlag,
    format: isText,
    position: isText,
    offset: isNumber,
    color: isText,
    owner: isText,
    scale: isFlag,
    splitLine: isFlag,
    splitNumber: isNumber,
    minInterval: isNumber,
    alignTicks: isFlag,
    axisTick: isFlag,
    nameRotate: isNumber,
    nameLocation: isText,
    nameGap: isNumber,
    labelFontSize: isNumber,
    tickColor: isText,
    gridColor: isText,
    gridWidth: isNumber,
    gridType: isText,
    raw: isText,
    snippets: isTextList,
};

/** The keys of the X axis (`xAxis`). */
export const X_AXIS_KINDS: KeyKinds<EchartsXAxisConfig> = {
    name: isText,
    format: isText,
    color: isText,
    axisTick: isFlag,
    splitLine: isFlag,
    splitNumber: isNumber,
    minInterval: isNumber,
    nameRotate: isNumber,
    labelRotate: isNumber,
    labelFontSize: isNumber,
    tickColor: isText,
    gridColor: isText,
    gridWidth: isNumber,
    gridType: isText,
    position: isText,
    offset: isNumber,
    raw: isText,
    snippets: isTextList,
};

/** The keys of a marking (`markLines` entries); a bound is a number or a bound OID's text. */
export const MARK_LINE_KINDS: KeyKinds<EchartsMarkLine> = {
    id: isText,
    upper: textOrNumber,
    lower: textOrNumber,
    fill: isNumber,
    // Legacy stage-1 value, migrated to `upper` (ADR-0061).
    value: textOrNumber,
    labelUpper: isText,
    color: isText,
    lineStyle: isText,
    dashed: isFlag,
    width: isNumber,
    shadow: isNumber,
    labelUpperPosition: isText,
    labelUpperOffset: isNumber,
    labelUpperSize: isNumber,
    labelUpperColor: isText,
    labelLower: isText,
    labelLowerPosition: isText,
    labelLowerOffset: isNumber,
    labelLowerSize: isNumber,
    labelLowerColor: isText,
    yAxisIndex: isNumber,
};

/** The keys of the legend styling (`legendConfig`). */
export const LEGEND_KINDS: KeyKinds<EchartsLegendConfig> = {
    color: isText,
    fontSize: isNumber,
    fontWeight: textOrNumber,
    fontStyle: isText,
    icon: isText,
    orient: isText,
    itemWidth: isNumber,
    itemHeight: isNumber,
    itemGap: isNumber,
    inactiveColor: isText,
    bgColor: isText,
    borderColor: isText,
    borderWidth: isNumber,
    borderRadius: isNumber,
    padding: isNumber,
    offsetX: isNumber,
    offsetY: isNumber,
};

/** The keys of the toolbox (`toolboxConfig`); the features' own keys stay with the builder. */
export const TOOLBOX_KINDS: KeyKinds<EchartsToolboxConfig> = {
    show: isFlag,
    pos: isText,
    orient: isText,
    itemSize: isNumber,
    itemGap: isNumber,
    showTitle: isFlag,
    iconColor: isText,
    iconHoverColor: isText,
    borderWidth: isNumber,
    borderColor: isText,
    borderRadius: isNumber,
    padding: isNumber,
    backgroundColor: isText,
    features: isRecord,
};
