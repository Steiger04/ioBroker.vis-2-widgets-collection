/**
 * vis-2 widget editor field generator for select-specific options.
 *
 * @module lib/selectFields
 * @remarks
 * Provides additional fields used by the Select collection widget (e.g. content OID and arrow styling).
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/select-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';
import { oidChangeHandlerAsync } from './commonObjectFields';
import { createColorField } from './fieldFactories';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

const selectFields = (): (RxWidgetInfoAttributesField | ExtendedField)[] => [
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="selection" />,
    },
    {
        name: 'cid',
        type: 'id',
        label: 'cid',
        onChange: oidChangeHandlerAsync(['boolean', 'number', 'string', 'mixed'], 'cid'),
    },
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="arrow" />,
    },
    // Arrow color with noGradient (only solid colors for icons)
    createColorField({ name: 'arrowColor', label: 'arrow_color', fallbackFields: [''], noGradient: true }),
];

export default selectFields;
