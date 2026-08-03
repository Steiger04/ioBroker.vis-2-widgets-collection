/**
 * vis-2 widget editor field generator for the Echarts widget options.
 *
 * @module lib/echartsFields
 * @remarks
 * The modal editor is the sole editor for every chart-specific field (map decision 06), so
 * the `chart` group exposes only the "Edit chart configuration" trigger; all scalars and the
 * `seriesConfig` / `chartOverrides` blobs are hidden rxData fields (defaults still seed on
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
        default: '24h',
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
        name: 'chartOverrides',
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

    // ── Modal-owned presentation scalars (hidden; edited via the modal) ──────────
    // Defaults mirror DEFAULT_EDITOR_STATE so a fresh widget renders sensibly before the modal
    // is first opened. yMin/yMax are intentionally NOT declared: `undefined` = auto-axis.
    { name: 'chartType', type: 'text', default: 'line', hidden: alwaysHidden },
    { name: 'titlePos', type: 'text', default: 'topCenter', hidden: alwaysHidden },
    { name: 'legendShow', type: 'checkbox', default: true, hidden: alwaysHidden },
    { name: 'legendPos', type: 'text', default: 'top', hidden: alwaysHidden },
    // tooltipTrigger: no field default — `undefined` lets the runtime default per family
    // ('axis' for cartesian, 'item' otherwise) in presentation + loadEditorState, the single
    // source of truth (ADR-0011 Tier 3 — avoids a fresh pie widget rendering axis-trigger).
    { name: 'tooltipTrigger', type: 'text', hidden: alwaysHidden },
    { name: 'tooltipTemplate', type: 'text', default: '', hidden: alwaysHidden },
    { name: 'tooltipUnits', type: 'text', default: '', hidden: alwaysHidden },
    { name: 'tooltipDecimals', type: 'number', default: 0, hidden: alwaysHidden },
    { name: 'animation', type: 'checkbox', default: true, hidden: alwaysHidden },
    { name: 'animationDuration', type: 'number', default: 600, hidden: alwaysHidden },
    { name: 'animationEasing', type: 'text', default: '', hidden: alwaysHidden },
    { name: 'bgColor', type: 'text', default: 'transparent', hidden: alwaysHidden },
    { name: 'renderer', type: 'text', default: 'canvas', hidden: alwaysHidden },
    // Cartesian axes + zoom. Y-axes config lives in the `yAxes` base64 blob (ADR-0012); X stays single (time).
    { name: 'yAxes', type: 'text', default: '', hidden: alwaysHidden },
    { name: 'xSplit', type: 'checkbox', default: false, hidden: alwaysHidden },
    { name: 'dataZoomSlider', type: 'checkbox', default: false, hidden: alwaysHidden },
    { name: 'dataZoomInside', type: 'checkbox', default: false, hidden: alwaysHidden },
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
];

export default echartsFields;
