/**
 * The field module of the Raumthermostat: its binding (the room-thermostat subset of the meaning
 * catalogue and the valve list) and its widget values.
 *
 * @module lib/heating/thermostatFields
 * @remarks
 * The binding comes from the binding building block (`lib/heating/bindingFields`,
 * `lib/heating/valveListFields`), unnumbered: a Raumthermostat binds one room. The widget values are
 * stored in user projects from the first release on:
 * - `komfort` / `absenk` — the comfort and setback temperatures the pills write into `soll`;
 * - `ansicht` — the upper bound of the size stages (ADR-0122): `voll` allows every stage, `einfach`
 *   stops at Einfach.
 */
import { heatingBindingFields } from './bindingFields';
import { ROOM_THERMOSTAT } from './meaningCatalog';
import { heatingValveListFields } from './valveListFields';

import type { ExtendedField } from '../../types/field-definitions/extended-field';
import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

/** The layouts `ansicht` caps the size stages at. */
export const THERMOSTAT_VIEWS = ['voll', 'einfach'] as const;

/** A value of `ansicht`. */
export type ThermostatView = (typeof THERMOSTAT_VIEWS)[number];

/**
 * The binding fields of the Raumthermostat.
 *
 * @returns Main Bedeutung, Bezeichnung, Unterzeile, the other Bedeutungen, then the valve list.
 */
export function thermostatBindingFields(): RxWidgetInfoAttributesField[] {
    return [...heatingBindingFields(ROOM_THERMOSTAT), ...heatingValveListFields()];
}

/**
 * The widget values of the Raumthermostat.
 *
 * @returns `komfort` (21), `absenk` (17) and `ansicht` (`voll`).
 */
export function thermostatValueFields(): (RxWidgetInfoAttributesField | ExtendedField)[] {
    return [
        {
            name: 'komfort',
            type: 'number',
            label: 'heating_komfort',
            default: 21,
            step: 0.5,
            // An emptied temperature writes the default, not 0 °C.
            emptiedReadsUnset: true,
        },
        {
            name: 'absenk',
            type: 'number',
            label: 'heating_absenk',
            default: 17,
            step: 0.5,
            emptiedReadsUnset: true,
        },
        {
            name: 'ansicht',
            type: 'select',
            label: 'heating_ansicht',
            options: THERMOSTAT_VIEWS.map(view => ({ value: view, label: `heating_ansicht_${view}` })),
            default: 'voll' satisfies ThermostatView,
            emptiedReadsUnset: true,
        },
    ];
}
