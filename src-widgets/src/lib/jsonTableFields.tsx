/**
 * vis-2 widget editor field generator for JSON Table options.
 *
 * @module lib/jsonTableFields
 * @remarks
 * Produces field definitions for the JsonTableCollectionWidget property editor.
 * Sections: Column Config, Features, Pagination, Selection, Analysis (Technical)
 *           Layout, Table Border, Header Style, Cell Borders, Cell Style (Layout)
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/json-table-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';
import JsonTableColumnEditor from '../JsonTableCollectionWidget/JsonTableColumnEditor';
import { createColorField } from './fieldFactories';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

const jsonTableFields = (): (RxWidgetInfoAttributesField | ExtendedField)[] => [
    // ═══════════════════════════════════════════════════════════════════
    // TECHNISCHE ASPEKTE (Daten, Logik, State)
    // ═══════════════════════════════════════════════════════════════════

    // ── Column Config (Custom Editor) - WICHTIGSTE! ───────────────────
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

    // ── Features ──────────────────────────────────────────────────────
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
        default: true,
        tooltip: 'json_table_filtering_tooltip',
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
    {
        name: 'tableHiding',
        type: 'checkbox',
        label: 'json_table_hiding',
        default: true,
        tooltip: 'json_table_hiding_tooltip',
    },

    // ── Pagination ────────────────────────────────────────────────────
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

    // ── Selection ─────────────────────────────────────────────────────
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

    // ── Analysis Options ───────────────────────────────────────────────
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

    // ═══════════════════════════════════════════════════════════════════
    // LAYOUT-THEMEN (Darstellung, Design) - von außen nach innen
    // ═══════════════════════════════════════════════════════════════════

    // ── Layout (Gesamte Tabelle) ──────────────────────────────────────
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

    // ── Table Border (Äußerer Rahmen) ─────────────────────────────────
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider dividerText="group_table_border" />,
    },
    {
        name: 'borderWidth',
        label: 'table_border_width',
        type: 'slider',
        min: 0,
        max: 20,
        step: 1,
        default: 0,
    },
    {
        name: 'borderStyle',
        label: 'table_border_style',
        type: 'select',
        options: [
            { value: 'none', label: 'none' },
            { value: 'dotted', label: 'dotted' },
            { value: 'dashed', label: 'dashed' },
            { value: 'solid', label: 'solid' },
            { value: 'double', label: 'double' },
            { value: 'groove', label: 'groove' },
            { value: 'ridge', label: 'ridge' },
            { value: 'inset', label: 'inset' },
            { value: 'outset', label: 'outset' },
            { value: 'hidden', label: 'hidden' },
        ],
        default: 'solid',
        noTranslation: true,
    },
    // Border color with noGradient
    createColorField({ name: 'borderColor', label: 'table_border_color', noGradient: true }),
    {
        name: 'borderRadius',
        label: 'table_border_radius',
        type: 'text',
        default: '',
    },

    // ── Header Styling ────────────────────────────────────────────────
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider dividerText="json_table_header_style" />,
    },
    // Header background (supports gradients)
    createColorField({ name: 'tableHeaderBgColor', label: 'json_table_header_bg_color' }),
    // Header text color (noGradient for text)
    createColorField({ name: 'tableHeaderTextColor', label: 'json_table_header_text_color', noGradient: true }),
    {
        name: 'tableHeaderFontSize',
        type: 'number',
        label: 'json_table_header_font_size',
        min: 8,
    },
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'headerBorderWidth',
        label: 'json_table_header_border_width',
        type: 'slider',
        min: 0,
        max: 10,
        step: 1,
        default: 0,
    },
    // Header border color (noGradient for borders)
    createColorField({ name: 'headerBorderColor', label: 'json_table_header_border_color', noGradient: true }),

    // ── Border & Lines (Zellgrenzen) ──────────────────────────────────
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
    // Vertical cell border color (noGradient, hidden condition)
    createColorField({
        name: 'verticalCellBorderColor',
        label: 'vertical_cell_border_color',
        noGradient: true,
        hidden: '!data.tableShowCellBorders',
    }),
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
    // Horizontal cell border color (noGradient, hidden condition)
    createColorField({
        name: 'horizontalCellBorderColor',
        label: 'horizontal_cell_border_color',
        noGradient: true,
        hidden: '!data.tableShowRowBorders',
    }),

    // ── Cell Styling ──────────────────────────────────────────────────
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider dividerText="json_table_cell_style" />,
    },
    // Row colors (support gradients for backgrounds)
    createColorField({ name: 'evenRowColor', label: 'json_table_even_row_color' }),
    createColorField({ name: 'oddRowColor', label: 'json_table_odd_row_color' }),
];

export default jsonTableFields;
