/**
 * vis-2 widget editor field generator for slider-specific options.
 *
 * @module lib/sliderFields
 * @remarks
 * Includes configuration for orientation, value label display, min/max/step, optional marks, and min/max icons.
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/slider-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';
import effectiveStateCount from './effectiveStateCount';
import { createColorField, createOnlyDisplayField, createPlainColorField } from './fieldFactories';
import { sliderColorContracts } from './sliderColorContract';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import type { RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';

/**
 * The effective state count (Zustandsmenge) of the widget's editor data — the same reading of
 * `effectiveStateCount` as `stateFields` and useData, so the `onlyStates` option shows exactly
 * when the runtime has states to snap to (ADR-0106 decision 8).
 *
 * @param data The raw widget data vis-2 hands a hidden predicate.
 * @remarks Twin of `countOf` in `stateFields.tsx` — kept apart because the shared state layer
 * is used, not changed, by the slider rework; change both together.
 */
const stateCountOf = (data: WidgetData): number =>
    effectiveStateCount({
        valuesCount: data.values_count,
        commonStatesCount: Object.keys(data.oidObject?.commonStates || {}).length,
        ignoreCommonStates: data.ignoreCommonStates,
    });

const sliderFields = (): (RxWidgetInfoAttributesField | ExtendedField)[] => [
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    } as const,
    createOnlyDisplayField(),
    {
        name: 'sliderSize',
        label: 'slider_size',
        type: 'select',
        options: [
            { value: 'small', label: 'slider_small' },
            { value: 'medium', label: 'slider_medium' },
        ],
        default: 'medium',
    } as const,
    {
        name: 'sliderOrientation',
        label: 'slider_orientation',
        type: 'select',
        options: [
            { value: 'horizontal', label: 'horizontal' },
            { value: 'vertical', label: 'vertical' },
        ],
        default: 'horizontal',
    } as const,
    {
        name: 'sliderGap',
        label: 'slider_gap',
        type: 'number',
        default: 0,
        min: 0,
        max: 100,
        step: 0.1,
    } as const,
    {
        name: 'valueLabelDisplay',
        label: 'value_label_display',
        type: 'select',
        options: [
            { value: 'on', label: 'label_on' },
            { value: 'off', label: 'label_off' },
            { value: 'auto', label: 'label_auto' },
        ],
        default: 'off',
    } as const,
    {
        name: 'labelPosition',
        label: 'label_position',
        type: 'text',
        default: '-5px',
        hidden: "data.valueLabelDisplay === 'off'",
    } as const,
    // Colour fields: each spreads the contract its chrome part resolves at runtime
    // (lib/sliderColorContract, ADR-0004) — terminal primary, the parts fall back to sliderColor.
    createColorField({ ...sliderColorContracts.sliderColor, label: 'slider_color' }),
    {
        name: 'sliderPadding',
        label: 'slider_padding',
        type: 'number',
        default: 1,
        min: 0,
        step: 0.5,
    } as const,
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="thumb" />,
    } as const,
    {
        name: 'thumbWidth',
        label: 'thumb_width',
        type: 'number',
        default: 20,
        min: 0,
    } as const,
    {
        name: 'thumbHeight',
        label: 'thumb_height',
        type: 'number',
        default: 20,
        min: 0,
    } as const,
    createColorField({ ...sliderColorContracts.thumbColor, label: 'thumb_color' }),
    {
        name: 'thumbBorderWidth',
        label: 'thumb_border_width',
        type: 'number',
        default: 0,
        min: 0,
        max: 100,
    } as const,
    // thumbBorderColor follows the runtime cascade thumbColor → sliderColor
    createColorField({ ...sliderColorContracts.thumbBorderColor, label: 'thumb_border_color' }),
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="track" />,
    } as const,
    {
        name: 'trackLength',
        label: 'track_length',
        type: 'number',
        default: 4,
        min: 0,
    } as const,
    createColorField({ ...sliderColorContracts.trackBackgroundColor, label: 'track_background_color' }),
    {
        name: 'trackBorderWidth',
        label: 'track_border_width',
        type: 'number',
        default: 1,
        min: 0,
        max: 100,
    } as const,
    createColorField({ ...sliderColorContracts.trackBorderColor, label: 'track_border_color' }),
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="rail" />,
    } as const,
    {
        name: 'railLength',
        label: 'rail_length',
        type: 'number',
        default: 4,
        min: 0,
    } as const,
    createColorField({ ...sliderColorContracts.railBackgroundColor, label: 'rail_background_color' }),
    {
        name: 'railBorderWidth',
        label: 'rail_border_width',
        type: 'number',
        default: 0,
        min: 0,
        max: 100,
    } as const,
    createColorField({ ...sliderColorContracts.railBorderColor, label: 'rail_border_color' }),
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="mark" />,
    } as const,
    {
        name: 'markWidth',
        label: 'mark_width',
        type: 'number',
        default: 2,
        min: 0,
    } as const,
    {
        name: 'markHeight',
        label: 'mark_height',
        type: 'number',
        default: 2,
        min: 0,
    } as const,
    createColorField({ ...sliderColorContracts.markBackgroundColor, label: 'mark_background_color' }),
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="values" />,
    } as const,
    {
        name: 'minValue',
        type: 'number',
        label: 'min_value',
        default: 0,
    } as const,
    {
        name: 'maxValue',
        type: 'number',
        label: 'max_value',
        default: 100,
    } as const,
    {
        name: 'step',
        type: 'number',
        label: 'step',
        default: 10,
    } as const,
    {
        type: 'custom',
        component: () => <CollectionDivider />,
        hidden: (data: WidgetData) => stateCountOf(data) === 0,
    } as const,
    {
        name: 'onlyStates',
        type: 'checkbox',
        label: 'only_states',
        default: false,
        hidden: (data: WidgetData) => stateCountOf(data) === 0,
    } as const,
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="marks" />,
    } as const,
    {
        name: 'marks',
        type: 'checkbox',
        label: 'marks',
        default: false,
    } as const,
    {
        type: 'custom',
        component: () => <CollectionDivider />,
        hidden: '!data.marks',
    } as const,
    {
        name: 'markPosition',
        label: 'mark_position',
        type: 'text',
        default: '30px',
        hidden: '!data.marks',
    } as const,
    {
        name: 'markStep',
        type: 'number',
        label: 'mark_step',
        default: 10,
        hidden: '!data.marks',
    } as const,
    {
        type: 'custom',
        component: () => <CollectionDivider />,
        hidden: '!data.marks',
    } as const,
    // Label field, not chrome: useData renders the mark text through
    // textColor{n} → markerTextColor → textColor → vis-2 text style → theme
    // text, so the contract mirrors that runtime cascade. See ADR 0004.
    createColorField({ ...sliderColorContracts.markerTextColor, label: 'marker_text_color', hidden: '!data.marks' }),
    {
        name: 'markerTextSize',
        label: 'marker_text_size',
        type: 'slider',
        min: 0,
        max: 500,
        step: 1,
        hidden: '!data.marks',
    } as const,
    {
        type: 'custom',
        component: () => <CollectionDivider />,
        hidden: '!data.marks',
    } as const,
    createPlainColorField({
        name: 'markerIconColor',
        label: 'marker_icon_color',
        hidden: '!data.marks',
    }),
    {
        name: 'markerIconSize',
        label: 'marker_icon_size',
        type: 'slider',
        min: 1,
        max: 500,
        step: 1,
        hidden: '!data.marks',
    } as const,

    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="icon" />,
    } as const,
    {
        name: 'iconSmallMin',
        label: 'icon_small_min',
        type: 'icon64',
        hidden: 'data.iconMin',
    } as const,
    {
        name: 'iconMin',
        label: 'icon_min',
        type: 'image',
        hidden: 'data.iconSmallMin',
    } as const,
    {
        name: 'iconSizeStart',
        label: 'icon_size',
        type: 'text',
        default: '24px',
        hidden: '!data.iconMin && !data.iconSmallMin',
    } as const,
    // Start/end icon color: solid only, NO sliderColor fallback. The runtime
    // colors these icons with theme primary (for base64 icons), so the contract
    // must match (terminal 'primary') to keep picker swatch and widget in sync.
    // See ADR 0004.
    createColorField({
        ...sliderColorContracts.startIconColor,
        label: 'icon_color',
        noGradient: true,
        hidden: '!data.iconMin && !data.iconSmallMin',
    }),
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="icon" />,
    } as const,
    {
        name: 'iconSmallMax',
        label: 'icon_small_max',
        type: 'icon64',
        hidden: 'data.iconMax',
    } as const,
    {
        name: 'iconMax',
        label: 'icon_max',
        type: 'image',
        hidden: 'data.iconSmallMax',
    } as const,
    {
        name: 'iconSizeEnd',
        label: 'icon_size',
        type: 'text',
        default: '24px',
        hidden: '!data.iconMax && !data.iconSmallMax',
    } as const,
    createColorField({
        ...sliderColorContracts.endIconColor,
        label: 'icon_color',
        noGradient: true,
        hidden: '!data.iconMax && !data.iconSmallMax',
    }),
];

export default sliderFields;
