/**
 * vis-2 widget editor field generator for the Echarts widget options.
 *
 * @module lib/echartsFields
 * @remarks
 * The modal editor is the sole editor for every chart-specific field (map decision 06); the
 * `chart` group exposes the "Edit chart configuration" trigger plus the four panel-owned chart
 * padding sliders (layout, not chart config — `.scratch/chart-padding/`); all other scalars and
 * the `seriesConfig` / `toolboxConfig` blobs are hidden rxData fields (defaults still seed on
 * widget creation). The indexed `series` group (auto-subscribed `oid1..oidN`) is declared in
 * getWidgetInfo; its OID field is hidden too (the modal writes `oidN` directly).
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/echarts-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';
import EchartsConfigEditor from '../EchartsCollectionWidget/EchartsConfigEditor';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

/** vis-2 `hidden` is a string expression or a function — never a bare boolean. */
const alwaysHidden = (): boolean => true;

const echartsFields = (): (RxWidgetInfoAttributesField | ExtendedField)[] => [
    // ── Editor trigger (sole UI for chart-specific config) ───────────
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider dividerText="group_echarts" />,
    },
    {
        name: 'chartConfig',
        label: 'echarts_editor_edit_config',
        type: 'custom',
        component: EchartsConfigEditor,
    },

    // ── Chart padding (4-side, panel-owned layout — not chart config; .scratch/chart-padding/) ──
    // MUI spacing units like basePadding; CSS on the chart wrapper OUTSIDE the frame, additive
    // beneath basePadding. Default 0 = pixel-identical (the resolver emits no sx key).
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider dividerText="echarts_padding" />,
    },
    {
        name: 'paddingTop',
        label: 'echarts_padding_top',
        type: 'slider',
        min: 0,
        max: 10,
        step: 0.1,
        default: 0,
    },
    {
        name: 'paddingBottom',
        label: 'echarts_padding_bottom',
        type: 'slider',
        min: 0,
        max: 10,
        step: 0.1,
        default: 0,
    },
    {
        name: 'paddingLeft',
        label: 'echarts_padding_left',
        type: 'slider',
        min: 0,
        max: 10,
        step: 0.1,
        default: 0,
    },
    {
        name: 'paddingRight',
        label: 'echarts_padding_right',
        type: 'slider',
        min: 0,
        max: 10,
        step: 0.1,
        default: 0,
    },

    // ── Modal-owned scalars (hidden; edited via the modal) ───────────
    {
        name: 'mode',
        type: 'text',
        default: 'history',
        hidden: alwaysHidden,
    },
    {
        name: 'timeRange',
        type: 'text',
        default: '1d',
        hidden: alwaysHidden,
    },
    {
        name: 'timeType',
        type: 'text',
        default: 'relative',
        hidden: alwaysHidden,
    },
    {
        name: 'relativeEnd',
        type: 'text',
        default: 'now',
        hidden: alwaysHidden,
    },
    {
        name: 'staticStart',
        type: 'text',
        default: '',
        hidden: alwaysHidden,
    },
    {
        name: 'staticEnd',
        type: 'text',
        default: '',
        hidden: alwaysHidden,
    },
    {
        name: 'resolutionStep',
        type: 'number',
        default: 0,
        hidden: alwaysHidden,
    },
    {
        // No default: undefined = unset (the server's 50 applies); 0 is a valid authored level.
        name: 'percentileValue',
        type: 'number',
        hidden: alwaysHidden,
    },
    {
        name: 'integralUnit',
        type: 'number',
        default: 0,
        hidden: alwaysHidden,
    },
    {
        name: 'integralInterpolation',
        type: 'text',
        default: '',
        hidden: alwaysHidden,
    },
    {
        name: 'barInterval',
        type: 'text',
        default: 'auto',
        hidden: alwaysHidden,
    },
    {
        name: 'barDiff',
        type: 'checkbox',
        default: false,
        hidden: alwaysHidden,
    },
    {
        name: 'aggregate',
        type: 'text',
        default: 'average',
        hidden: alwaysHidden,
    },
    {
        name: 'count',
        type: 'number',
        default: 500,
        hidden: alwaysHidden,
    },
    {
        name: 'refreshMs',
        type: 'number',
        default: 60000,
        hidden: alwaysHidden,
    },
    {
        name: 'instance',
        type: 'text',
        default: '',
        hidden: alwaysHidden,
    },
    {
        name: 'ignoreNull',
        type: 'text',
        default: 'keep',
        hidden: alwaysHidden,
    },
    {
        // OID-typed, NOT text: the runtime body reads the JSON-state value via
        // useOidValue('jsonOid') → getPropertyValue → this.state.values['<oid>.val'],
        // which vis-2 populates ONLY for id-type fields. A text field would store the
        // OID string but never subscribe, so the value stays undefined at runtime → no
        // chart (the editor preview still works because it subscribes directly via
        // socket — a misleading asymmetry). See ADR-0006 addendum (all OID-valued
        // echarts fields must be type:'id', even hidden/modal-owned).
        name: 'jsonOid',
        type: 'id',
        default: '',
        hidden: alwaysHidden,
    },
    {
        // JSON payload family (ADR-0075): 'series' = finished series (ADR-0011), 'table' = rows
        // + Zuordnung. Default 'series' keeps existing widgets byte-stable.
        name: 'jsonKind',
        type: 'text',
        default: 'series',
        hidden: alwaysHidden,
    },
    {
        // Table family: dot-path to the rows array. NO default — undefined = unset (the
        // document itself must be the array); the editor patch sends null to clear (sparse).
        name: 'jsonRowPath',
        type: 'text',
        hidden: alwaysHidden,
    },
    {
        // Table family: X column path. NO default — undefined = unset (row-index X).
        name: 'jsonXPath',
        type: 'text',
        hidden: alwaysHidden,
    },
    {
        name: 'titleText',
        type: 'text',
        default: '',
        hidden: alwaysHidden,
    },
    {
        name: 'series_count',
        type: 'number',
        default: 0,
        hidden: alwaysHidden,
    },

    // ── Persisted config blobs (hidden; read/written by the modal) ───
    {
        name: 'seriesConfig',
        type: 'text',
        default: '',
        hidden: alwaysHidden,
    },
    {
        // Toolbox GUI config (ADR-0045, legendConfig precedent). No default — an empty/absent
        // blob decodes to {} (= master off, no toolbox block).
        name: 'toolboxConfig',
        type: 'text',
        default: '',
        hidden: alwaysHidden,
    },
    {
        // JSON-mode deny-list of hidden payload series names (Problem-2). Hidden blob, modal-owned.
        name: 'jsonHidden',
        type: 'text',
        default: '',
        hidden: alwaysHidden,
    },
    {
        // JSON-mode name-keyed per-series style overlay (ADR-0011). Has persisted as a
        // patch-only key since ADR-0011 — declared here for the default-seeding convention
        // (ADR-0075 ticket 02 opportunity cleanup).
        name: 'jsonSeriesStyle',
        type: 'text',
        default: '',
        hidden: alwaysHidden,
    },

    // ── Modal-owned presentation scalars (hidden; edited via the modal) ──────────
    // Defaults mirror DEFAULT_EDITOR_STATE so a fresh widget renders sensibly before the modal
    // is first opened. yMin/yMax are intentionally NOT declared: `undefined` = auto-axis.
    { name: 'chartType', type: 'text', default: 'line', hidden: alwaysHidden },
    { name: 'titlePos', type: 'text', default: 'topCenter', hidden: alwaysHidden },
    { name: 'legendShow', type: 'checkbox', default: true, hidden: alwaysHidden },
    // A 9-grid key (ADR-0021) — the legacy 'top' only rendered topCenter by prefix accident.
    { name: 'legendPos', type: 'text', default: 'topCenter', hidden: alwaysHidden },
    // Parity Build E option cluster (ADR-0054): the adapter options-tab scalars.
    { name: 'legendShowValues', type: 'checkbox', default: false, hidden: alwaysHidden },
    // tooltipTrigger: no field default — `undefined` lets the runtime default per family
    // ('axis' for cartesian, 'item' otherwise) in presentation + loadEditorState, the single
    // source of truth (ADR-0011 Tier 3 — avoids a fresh pie widget rendering axis-trigger).
    { name: 'tooltipTrigger', type: 'text', hidden: alwaysHidden },
    { name: 'tooltipTemplate', type: 'text', default: '', hidden: alwaysHidden },
    { name: 'tooltipUnits', type: 'text', default: '', hidden: alwaysHidden },
    { name: 'tooltipDecimals', type: 'number', default: 0, hidden: alwaysHidden },
    { name: 'tooltipBgColor', type: 'text', default: '', hidden: alwaysHidden },
    { name: 'tooltipNoInterpolate', type: 'checkbox', default: false, hidden: alwaysHidden },
    { name: 'tooltipHideNulls', type: 'checkbox', default: false, hidden: alwaysHidden },
    { name: 'decimalComma', type: 'checkbox', default: false, hidden: alwaysHidden },
    { name: 'animation', type: 'checkbox', default: true, hidden: alwaysHidden },
    { name: 'animationDuration', type: 'number', default: 600, hidden: alwaysHidden },
    { name: 'animationEasing', type: 'text', default: '', hidden: alwaysHidden },
    { name: 'bgColor', type: 'text', default: 'transparent', hidden: alwaysHidden },
    { name: 'renderer', type: 'text', default: 'canvas', hidden: alwaysHidden },
    // Cartesian axes + zoom. Y-axes config lives in the `yAxes` base64 blob (ADR-0012); the single
    // X-axis (time, flat config) lives in the `xAxis` base64 blob (ADR-0035; legacy `xSplit` is
    // synthesised into `splitLine` at load).
    { name: 'yAxes', type: 'text', default: '', hidden: alwaysHidden },
    { name: 'xAxis', type: 'text', default: '', hidden: alwaysHidden },
    { name: 'dataZoomSlider', type: 'checkbox', default: false, hidden: alwaysHidden },
    { name: 'dataZoomInside', type: 'checkbox', default: false, hidden: alwaysHidden },
    { name: 'zoomResetAfterIdle', type: 'text', default: '', hidden: alwaysHidden },
    // Palette + dark mode (ADR-0007).
    { name: 'paletteSource', type: 'text', default: 'theme', hidden: alwaysHidden },
    { name: 'palettePreset', type: 'text', default: 'tableau', hidden: alwaysHidden },
    { name: 'paletteCustom', type: 'text', default: '', hidden: alwaysHidden },
    { name: 'darkMode', type: 'text', default: 'auto', hidden: alwaysHidden },
    // Cartesian extras: threshold blob + value→colour visual map.
    { name: 'markLines', type: 'text', default: '', hidden: alwaysHidden },
    { name: 'visualMapEnabled', type: 'checkbox', default: false, hidden: alwaysHidden },
    { name: 'visualMapMin', type: 'number', default: 0, hidden: alwaysHidden },
    { name: 'visualMapMax', type: 'number', default: 100, hidden: alwaysHidden },
    {
        name: 'visualMapColors',
        type: 'text',
        default: 'linear-gradient(90deg, #1976d2 0%, #4caf50 33%, #ff9800 66%, #f44336 100%)',
        hidden: alwaysHidden,
    },
    // Chart frame (parity Build D, ADR-0056): flat scalars, visualMap precedent. Container CSS
    // around the chart area (frameStyle.ts), never an echarts option.
    { name: 'frameEnabled', type: 'checkbox', default: false, hidden: alwaysHidden },
    { name: 'frameWidth', type: 'number', default: 1, hidden: alwaysHidden },
    { name: 'frameColor', type: 'text', default: '', hidden: alwaysHidden },
    { name: 'frameStyle', type: 'text', default: 'solid', hidden: alwaysHidden },
    { name: 'framePadding', type: 'number', default: 0, hidden: alwaysHidden },
];

export default echartsFields;
