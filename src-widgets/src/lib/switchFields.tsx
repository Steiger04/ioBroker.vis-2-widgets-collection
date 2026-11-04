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
import { createColorField, createOnlyDisplayField } from './fieldFactories';
import { switchColorContracts } from './switchColorContract';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

/** Default thumb size (px) — the single source; the renderer fallback reads it. */
export const THUMB_SIZE_DEFAULT = 62;

/** Default track row height (%) — the single source; the renderer fallback reads it. */
export const TRACK_SIZE_DEFAULT = 10;

const switchFields = (): (RxWidgetInfoAttributesField | ExtendedField)[] => [
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    createOnlyDisplayField(),
    {
        name: 'thumbSize',
        label: 'thumb_size',
        type: 'slider',
        min: 0,
        max: 500,
        default: THUMB_SIZE_DEFAULT,
        step: 1,
    },
    // Thumb colours: each field spreads the contract its thumb resolves at runtime
    // (lib/switchColorContract, ADR-0004) — unset, the swatch shows the MUI Switch default.
    createColorField({ ...switchColorContracts.thumbColorTrue, label: 'thumb_color_true' }),
    createColorField({ ...switchColorContracts.thumbColorFalse, label: 'thumb_color_false' }),
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'trackSize',
        label: 'track_size',
        type: 'slider',
        // 0 would be an invisible widget (0 px track row) and is silently
        // coerced to the TRACK_SIZE_DEFAULT by the renderer's falsy fallback
        min: 1,
        max: 100,
        default: TRACK_SIZE_DEFAULT,
        step: 1,
    },
    // Track color (no fallback to disable theme primary color)
    createColorField({ name: 'trackColor', label: 'track_color', fallbackFields: [] }),
];

export default switchFields;
