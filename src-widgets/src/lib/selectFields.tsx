/**
 * vis-2 widget editor field generator for select-specific options.
 *
 * @module lib/selectFields
 * @remarks
 * Provides additional fields used by the Select collection widget (display-only toggle, control ID and
 * arrow styling).
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/select-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';
import { ANY_VALUE_TYPES } from './allowedOidTypes';
import { oidChangeHandlerAsync } from './commonObjectFields';
import { createColorField, createOnlyDisplayField } from './fieldFactories';
import { writeTargetDeniesWrite } from './writeTarget';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

const selectFields = (): (RxWidgetInfoAttributesField | ExtendedField)[] => [
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="selection" />,
    },
    {
        ...createOnlyDisplayField(),
        // The toggle is moot exactly when the WRITE TARGET is read-only (ADR-0090) —
        // not the root `write`, which belongs to the main OID: a writable control ID
        // keeps it available over a read-only status OID.
        disabled: writeTargetDeniesWrite,
        hidden: writeTargetDeniesWrite,
    },
    // The control ID — the Select's sole write target when set (Schreibziel, ADR-0090).
    // `allowedTypes` is an introspectable mirror of the onChange filter — the
    // allowedOidTypes parity test reads it (vis-2 ignores unknown keys).
    {
        name: 'cid',
        type: 'id',
        label: 'cid',
        onChange: oidChangeHandlerAsync(ANY_VALUE_TYPES, 'cid'),
        allowedTypes: ANY_VALUE_TYPES,
    } as RxWidgetInfoAttributesField,
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="arrow" />,
    },
    // Arrow color with noGradient (only solid colors for icons). Unset, the arrow takes the
    // active state's text colour (Select-Chrome), so the swatch shows the text colour's base
    // cascade: textColor → vis-2 CSS colour → theme text (ADR-0004).
    createColorField({
        name: 'arrowColor',
        label: 'arrow_color',
        fallbackFields: ['textColor'],
        noGradient: true,
        terminal: 'text',
        inheritTextStyle: true,
    }),
];

export default selectFields;
