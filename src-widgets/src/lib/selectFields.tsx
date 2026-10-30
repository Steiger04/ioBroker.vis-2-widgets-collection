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
import { createIdField } from './commonObjectFields';
import { createColorField, createOnlyDisplayField } from './fieldFactories';
import { arrowColorContract } from './selectColorContract';
import { CONTROL_ID_FIELD, writeTargetDeniesWrite } from './writeTarget';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

const selectFields = (): (RxWidgetInfoAttributesField | ExtendedField)[] => [
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="selection" />,
    },
    // The toggle is moot exactly when the WRITE TARGET denies writes (ADR-0090) — not
    // the root `write`, which belongs to the main OID: a writable control ID keeps it
    // available over a read-only status OID.
    createOnlyDisplayField(writeTargetDeniesWrite),
    // The control ID — the Select's sole write target when set (Schreibziel, ADR-0090).
    createIdField(CONTROL_ID_FIELD, ANY_VALUE_TYPES),
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="arrow" />,
    },
    // Arrow color with noGradient (only solid colors for icons). Its cascade is the one arrow
    // contract the Select-Chrome resolves at runtime (ADR-0004): the swatch resolves it over
    // the base fields — textColor → vis-2 CSS colour → theme text —, the runtime over the
    // active state's text colour.
    createColorField({
        ...arrowColorContract,
        label: 'arrow_color',
        noGradient: true,
    }),
];

export default selectFields;
