/**
 * vis-2 widget editor field generator for the Echarts widget options.
 *
 * @module lib/echartsFields
 * @remarks
 * Produces the `chart` group fields (data mode + history options). In P2 these are visible
 * so the data pipeline can be exercised end-to-end; once the modal editor lands (P3) the
 * modal-owned scalars are hidden and the modal becomes the sole editor (map decision 06).
 *
 * The indexed `series` group (auto-subscribed `oid1..oidN`) is declared in getWidgetInfo;
 * per-series rendering metadata lives in the base64 `seriesConfig` blob.
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/echarts-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

const echartsFields = (): (RxWidgetInfoAttributesField | ExtendedField)[] => [
    // ── Data source ──────────────────────────────────────────────────
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider dividerText="echarts_data_source" />,
    },
    {
        name: 'mode',
        label: 'echarts_mode',
        type: 'select',
        options: [
            { value: 'history', label: 'echarts_mode_history' },
            { value: 'live', label: 'echarts_mode_live' },
            { value: 'json', label: 'echarts_mode_json' },
        ],
        default: 'history',
    },
    {
        name: 'jsonOid',
        label: 'oid',
        type: 'id',
        hidden: 'data.mode !== "json"',
    },
    {
        name: 'series_count',
        label: 'echarts_series_count',
        type: 'number',
        default: 0,
        min: 0,
    },

    // ── History options ──────────────────────────────────────────────
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider dividerText="echarts_history_options" />,
        hidden: 'data.mode !== "history"',
    },
    {
        name: 'timeRange',
        label: 'echarts_time_range',
        type: 'select',
        options: [
            { value: '24h', label: '24h' },
            { value: '7d', label: '7d' },
            { value: '30d', label: '30d' },
        ],
        default: '24h',
        noTranslation: true,
        hidden: 'data.mode !== "history"',
    },
    {
        name: 'aggregate',
        label: 'echarts_aggregate',
        type: 'select',
        options: [
            { value: 'average', label: 'average' },
            { value: 'minmax', label: 'minmax' },
            { value: 'min', label: 'min' },
            { value: 'max', label: 'max' },
            { value: 'total', label: 'total' },
            { value: 'onchange', label: 'onchange' },
            { value: 'none', label: 'none' },
        ],
        default: 'average',
        noTranslation: true,
        hidden: 'data.mode !== "history"',
    },
    {
        name: 'count',
        label: 'echarts_count',
        type: 'number',
        default: 500,
        min: 1,
        hidden: 'data.mode !== "history"',
    },
    {
        name: 'refreshMs',
        label: 'echarts_refresh',
        type: 'number',
        default: 60000,
        min: 0,
        step: 1000,
        tooltip: 'echarts_refresh_tooltip',
        hidden: 'data.mode !== "history"',
    },
    {
        name: 'instance',
        label: 'echarts_instance',
        type: 'text',
        tooltip: 'echarts_instance_tooltip',
        hidden: 'data.mode !== "history"',
    },
    {
        name: 'ignoreNull',
        label: 'echarts_ignore_null',
        type: 'select',
        options: [
            { value: 'keep', label: 'keep' },
            { value: 'forward', label: 'forward' },
            { value: 'zero', label: 'zero' },
        ],
        default: 'keep',
        noTranslation: true,
        hidden: 'data.mode !== "history"',
    },
];

export default echartsFields;
