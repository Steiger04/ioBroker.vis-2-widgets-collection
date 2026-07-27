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
        name: 'jsonOid',
        type: 'text',
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
];

export default echartsFields;
