/**
 * vis-2 widget editor field generator for JSON Table options.
 *
 * @module lib/jsonTableFields
 * @remarks
 * Produces field definitions for the JsonTableCollectionWidget property editor.
 * Sections: Layout, Pagination, Features, Selection, Borders, Header Style, Cell Style, Column Config.
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/json-table-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';
import CollectionGradientColorPicker from '../components/CollectionGradientColorPicker';
import JsonTableColumnEditor from '../JsonTableCollectionWidget/JsonTableColumnEditor';

import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

const jsonTableFields = (): RxWidgetInfoAttributesField[] => [
    // ── Layout ──────────────────────────────────────────────────────
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider dividerText="json_table_layout" />,
    },
    {
        name: 'tableDensity',
        label: 'json_table_density',
        type: 'select',
        options: [
            { value: 'compact', label: 'compact' },
            { value: 'standard', label: 'standard' },
            { value: 'comfortable', label: 'comfortable' },
        ],
        default: 'standard',
        noTranslation: true,
    },
    {
        name: 'tableRowHeight',
        type: 'number',
        label: 'json_table_row_height',
        min: 20,
        tooltip: 'json_table_row_height_tooltip',
    },
    {
        name: 'tableHeaderHeight',
        type: 'number',
        label: 'json_table_header_height',
        min: 20,
    },
    {
        name: 'tableAutoSize',
        type: 'checkbox',
        label: 'json_table_auto_size',
        default: false,
    },
    {
        name: 'tableHeaderElevation',
        label: 'json_table_header_elevation',
        type: 'slider',
        min: 0,
        max: 24,
        step: 1,
        default: 6,
        tooltip: 'json_table_header_elevation_tooltip',
    },
    {
        name: 'jsonTablePadding',
        type: 'number',
        label: 'json_table_padding',
        default: 1,
        step: 0.5,
        min: 0,
    },

    // ── Pagination ──────────────────────────────────────────────────
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider dividerText="json_table_pagination" />,
    },
    {
        name: 'tablePagination',
        type: 'checkbox',
        label: 'json_table_pagination_enabled',
        default: true,
    },
    {
        name: 'tablePageSize',
        type: 'number',
        label: 'json_table_page_size',
        default: 25,
        min: 1,
    },
    {
        name: 'tablePageSizeOptions',
        type: 'text',
        label: 'json_table_page_size_options',
        default: '10,25,50,100',
        tooltip: 'json_table_page_size_options_tooltip',
    },
    {
        name: 'tableVirtualizeThreshold',
        type: 'number',
        label: 'json_table_virtualize_threshold',
        default: 50,
        min: 0,
        tooltip: 'json_table_virtualize_threshold_tooltip',
    },

    // ── Features ────────────────────────────────────────────────────
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider dividerText="json_table_features" />,
    },
    {
        name: 'tableSorting',
        type: 'checkbox',
        label: 'json_table_sorting',
        default: true,
    },
    {
        name: 'tableSortingMulti',
        type: 'checkbox',
        label: 'json_table_sorting_multi',
        default: false,
        tooltip: 'json_table_sorting_multi_tooltip',
    },
    {
        name: 'tableFiltering',
        type: 'checkbox',
        label: 'json_table_filtering',
        default: false,
    },
    {
        name: 'tableQuickFilter',
        type: 'checkbox',
        label: 'json_table_quick_filter',
        default: false,
    },
    {
        name: 'tableColumnMenu',
        type: 'checkbox',
        label: 'json_table_column_menu',
        default: true,
    },

    // ── Selection ───────────────────────────────────────────────────
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider dividerText="json_table_selection" />,
    },
    {
        name: 'tableRowSelection',
        type: 'checkbox',
        label: 'json_table_row_selection',
        default: false,
    },

    // ── Border & Lines ──────────────────────────────────────────────
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider dividerText="json_table_borders" />,
    },
    {
        name: 'tableShowCellBorders',
        type: 'checkbox',
        label: 'json_table_show_cell_borders',
        default: false,
    },
    {
        name: 'verticalCellBorderWidth',
        label: 'vertical_cell_border_width',
        type: 'slider',
        min: 0,
        max: 10,
        step: 1,
        default: 1,
        hidden: '!data.tableShowCellBorders',
    },
    {
        name: 'verticalCellBorderColor',
        label: 'vertical_cell_border_color',
        default: '',
        type: 'custom',
        hidden: '!data.tableShowCellBorders',
        component: (field, data, onDataChange, props) => (
            <CollectionGradientColorPicker
                field={{ ...field, noGradient: true }}
                data={data}
                onDataChange={onDataChange}
                props={props}
            />
        ),
    },
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'tableShowRowBorders',
        type: 'checkbox',
        label: 'json_table_show_row_borders',
        default: true,
    },
    {
        name: 'horizontalCellBorderWidth',
        label: 'horizontal_cell_border_width',
        type: 'slider',
        min: 0,
        max: 10,
        step: 1,
        default: 1,
        hidden: '!data.tableShowRowBorders',
    },
    {
        name: 'horizontalCellBorderColor',
        label: 'horizontal_cell_border_color',
        default: '',
        type: 'custom',
        hidden: '!data.tableShowRowBorders',
        component: (field, data, onDataChange, props) => (
            <CollectionGradientColorPicker
                field={{ ...field, noGradient: true }}
                data={data}
                onDataChange={onDataChange}
                props={props}
            />
        ),
    },

    // ── Header Styling ──────────────────────────────────────────────
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider dividerText="json_table_header_style" />,
    },
    {
        name: 'tableHeaderBgColor',
        label: 'json_table_header_bg_color',
        default: '',
        type: 'custom',
        component: (field, data, onDataChange, props) => (
            <CollectionGradientColorPicker
                field={field}
                data={data}
                onDataChange={onDataChange}
                props={props}
            />
        ),
    },
    {
        name: 'tableHeaderTextColor',
        label: 'json_table_header_text_color',
        default: '',
        type: 'custom',
        component: (field, data, onDataChange, props) => (
            <CollectionGradientColorPicker
                field={{ ...field, noGradient: true }}
                data={data}
                onDataChange={onDataChange}
                props={props}
            />
        ),
    },
    {
        name: 'tableHeaderFontSize',
        type: 'number',
        label: 'json_table_header_font_size',
        min: 8,
    },

    // ── Cell Styling ────────────────────────────────────────────────
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider dividerText="json_table_cell_style" />,
    },
    {
        name: 'tableStripedColor',
        label: 'json_table_striped_color',
        default: '',
        type: 'custom',
        component: (field, data, onDataChange, props) => (
            <CollectionGradientColorPicker
                field={field}
                data={data}
                onDataChange={onDataChange}
                props={props}
            />
        ),
    },
    {
        name: 'tableCellFontSize',
        type: 'number',
        label: 'json_table_cell_font_size',
        min: 8,
    },

    // ── Analysis Options ────────────────────────────────────────────
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider dividerText="json_table_analysis" />,
    },
    {
        name: 'tableMaxDepth',
        type: 'number',
        label: 'json_table_max_depth',
        default: 10,
        min: 1,
        max: 50,
        tooltip: 'json_table_max_depth_tooltip',
    },

    // ── Column Config (Custom Editor) ───────────────────────────────
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider dividerText="json_table_column_config" />,
    },
    {
        name: 'columnConfig',
        label: 'json_table_column_config_label',
        type: 'custom',
        component: JsonTableColumnEditor,
    },
];

export default jsonTableFields;
