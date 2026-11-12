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
import {
    tableCapabilities,
    type CapabilitySetting,
    type TableCapabilities,
} from '../JsonTableCollectionWidget/capabilities';
import { LIST_BLOB } from './usableJson';
import { createColorField, guardWidgetData } from './fieldFactories';
import { jsonTableColorContracts } from './jsonTableColorContracts';
import { TABLE_MAX_DEPTH_DEFAULT, TABLE_PAGE_SIZE_DEFAULT, TABLE_PAGE_SIZE_OPTIONS_DEFAULT } from './jsonTableDefaults';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import type { RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';

/**
 * A feature setting is hidden when a coupling of the Tabellen-Fähigkeiten blocks it, i.e.
 * when switching the setting itself on would leave its capability off (vis-2 hands `hidden`
 * the raw widget data).
 *
 * @param setting The widget data key of the feature setting.
 * @param capability The capability that setting switches.
 * @returns The `hidden` predicate.
 */
const blockedByCoupling =
    (setting: CapabilitySetting, capability: keyof TableCapabilities) =>
    (data: WidgetData): boolean =>
        !tableCapabilities({ ...data, [setting]: true })[capability];

const jsonTableFields = (): (RxWidgetInfoAttributesField | ExtendedField)[] => [
    // ═══════════════════════════════════════════════════════════════════
    // TECHNICAL ASPECTS (Data, Logic, State)
    // ═══════════════════════════════════════════════════════════════════

    // ── Column Config (Custom Editor) - MOST IMPORTANT! ───────────────
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider dividerText="json_table_column_config" />,
    },
    {
        name: 'columnConfig',
        label: 'json_table_column_config_label',
        type: 'custom',
        component: guardWidgetData(JsonTableColumnEditor),
        // A JSON list of Column entries: the column editor stores a `b64:` blob, plain JSON reads
        // the same. The empty list shows the assistant the shape; it reads like no configuration.
        storedValue: LIST_BLOB,
        default: '[]',
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
        hidden: blockedByCoupling('tableSorting', 'sorting'),
    },
    {
        name: 'tableSortingMulti',
        type: 'checkbox',
        label: 'json_table_sorting_multi',
        default: false,
        tooltip: 'json_table_sorting_multi_tooltip',
        hidden: blockedByCoupling('tableSortingMulti', 'multiSort'),
    },
    {
        name: 'tableFiltering',
        type: 'checkbox',
        label: 'json_table_filtering',
        default: true,
        tooltip: 'json_table_filtering_tooltip',
        hidden: blockedByCoupling('tableFiltering', 'columnFiltering'),
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
        hidden: blockedByCoupling('tableColumnMenu', 'columnMenu'),
    },
    {
        name: 'tableHiding',
        type: 'checkbox',
        label: 'json_table_hiding',
        default: true,
        tooltip: 'json_table_hiding_tooltip',
        hidden: blockedByCoupling('tableHiding', 'hiding'),
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
        default: TABLE_PAGE_SIZE_DEFAULT,
        min: 1,
    },
    {
        name: 'tablePageSizeOptions',
        type: 'text',
        label: 'json_table_page_size_options',
        default: TABLE_PAGE_SIZE_OPTIONS_DEFAULT,
        tooltip: 'json_table_page_size_options_tooltip',
    },
    {
        name: 'tableVirtualizeThreshold',
        type: 'number',
        label: 'json_table_virtualize_threshold',
        // Emptied ('') like 0: the table never renders only the rows in view.
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
        default: TABLE_MAX_DEPTH_DEFAULT,
        min: 1,
        max: 50,
        tooltip: 'json_table_max_depth_tooltip',
    },

    // ═══════════════════════════════════════════════════════════════════
    // LAYOUT TOPICS (Presentation, Design) - outside in
    // ═══════════════════════════════════════════════════════════════════

    // ── Layout (Entire Table) ─────────────────────────────────────────
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
        emptiedReadsUnset: true,
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
        name: 'tableShowHeader',
        type: 'checkbox',
        label: 'json_table_show_header',
        default: true,
        tooltip: 'json_table_show_header_tooltip',
    },
    {
        name: 'tableHeaderHeight',
        type: 'number',
        label: 'json_table_header_height',
        min: 20,
        hidden: 'data.tableShowHeader === false',
    },
    {
        name: 'tableHeaderElevation',
        label: 'json_table_header_elevation',
        type: 'slider',
        min: 0,
        max: 24,
        step: 1,
        default: 6,
        // Emptied ('') like 0: the header bar draws no shadow.
        tooltip: 'json_table_header_elevation_tooltip',
        hidden: 'data.tableShowHeader === false',
    },
    {
        name: 'tableAutoSize',
        type: 'checkbox',
        label: 'json_table_auto_size',
        default: false,
    },
    {
        name: 'jsonTablePadding',
        type: 'number',
        label: 'json_table_padding',
        default: 1,
        step: 0.5,
        min: 0,
    },

    // ── Table Border (Outer Frame) ────────────────────────────────────
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
        emptiedReadsUnset: true,
        noTranslation: true,
    },
    // Border color with noGradient; Tabellen-Chrome contract: explicit → theme divider (ADR-0004)
    createColorField({ ...jsonTableColorContracts.borderColor, label: 'table_border_color', noGradient: true }),
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
        hidden: 'data.tableShowHeader === false',
    },
    // Header background (supports gradients); contract: explicit → theme paper (transparent under noCard)
    createColorField({
        ...jsonTableColorContracts.tableHeaderBgColor,
        label: 'json_table_header_bg_color',
        hidden: 'data.tableShowHeader === false',
    }),
    // Header text color (noGradient for text); contract for the swatch only, the runtime inherits
    createColorField({
        ...jsonTableColorContracts.tableHeaderTextColor,
        label: 'json_table_header_text_color',
        noGradient: true,
        hidden: 'data.tableShowHeader === false',
    }),
    {
        name: 'tableHeaderFontSize',
        type: 'number',
        label: 'json_table_header_font_size',
        min: 8,
        hidden: 'data.tableShowHeader === false',
    },
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider />,
        hidden: 'data.tableShowHeader === false',
    },
    {
        name: 'headerBorderWidth',
        label: 'json_table_header_border_width',
        type: 'slider',
        min: 0,
        max: 10,
        step: 1,
        default: 0,
        hidden: 'data.tableShowHeader === false',
    },
    // Header border color (noGradient for borders); contract: explicit → theme divider
    createColorField({
        ...jsonTableColorContracts.headerBorderColor,
        label: 'json_table_header_border_color',
        noGradient: true,
        hidden: 'data.tableShowHeader === false',
    }),

    // ── Border & Lines (Cell Boundaries) ──────────────────────────────
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
        emptiedReadsUnset: true,
        hidden: '!data.tableShowCellBorders',
    },
    // Vertical cell border color (noGradient, hidden condition); contract: explicit → theme divider
    createColorField({
        ...jsonTableColorContracts.verticalCellBorderColor,
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
        emptiedReadsUnset: true,
        // Default-on toggle, raw data: only an explicit false switches the row borders off
        hidden: 'data.tableShowRowBorders === false',
    },
    // Horizontal cell border color (noGradient, hidden condition); contract: explicit → theme divider
    createColorField({
        ...jsonTableColorContracts.horizontalCellBorderColor,
        label: 'horizontal_cell_border_color',
        noGradient: true,
        hidden: 'data.tableShowRowBorders === false',
    }),

    // ── Cell Styling ──────────────────────────────────────────────────
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider dividerText="json_table_cell_style" />,
    },
    // Row colors (support gradients for backgrounds); unset means no stripe — the terminal
    // says so. Not a chrome contract: the row slot renders the stored value as is.
    createColorField({ name: 'evenRowColor', label: 'json_table_even_row_color', terminal: 'transparent' }),
    createColorField({ name: 'oddRowColor', label: 'json_table_odd_row_color', terminal: 'transparent' }),
];

export default jsonTableFields;
