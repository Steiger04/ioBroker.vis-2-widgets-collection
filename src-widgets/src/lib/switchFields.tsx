/**
 * vis-2 widget editor field generator for switch-specific styling options.
 *
 * @module lib/switchFields
 * @remarks
 * Provides thumb/track sizing and colors for the Switch collection widget.
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/switch-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';
import { createColorField } from './fieldFactories';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

const switchFields = (): (RxWidgetInfoAttributesField | ExtendedField)[] => [
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'thumbSize',
        label: 'thumb_size',
        type: 'slider',
        min: 0,
        max: 500,
        default: 62,
        step: 1,
    },
    // Thumb colors (no fallback to disable theme primary color)
    createColorField({ name: 'thumbColorTrue', label: 'thumb_color_true', fallbackFields: [] }),
    createColorField({ name: 'thumbColorFalse', label: 'thumb_color_false', fallbackFields: [] }),
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'trackSize',
        label: 'track_size',
        type: 'slider',
        min: 0,
        max: 100,
        default: 10,
        step: 1,
    },
    // Track color (no fallback to disable theme primary color)
    createColorField({ name: 'trackColor', label: 'track_color', fallbackFields: [] }),
];

export default switchFields;
