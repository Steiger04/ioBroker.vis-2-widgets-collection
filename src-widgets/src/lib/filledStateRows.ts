/**
 * Zustandszeilen with a value: the ONE blank rule and what the editor asks through it.
 *
 * @module lib/filledStateRows
 * @remarks
 * The Zustandsmenge counts rows, blank ones included (`effectiveStateCount`, ADR-0104); the
 * resolved `states[]` of useData hold only rows with a value. The push-button mode (ADR-0089)
 * depends on the latter, so the editor asks the same question on the widget's raw data — all a
 * vis-2 `hidden` predicate gets: no defaults merged, no bindings applied. A bound row reads as
 * filled here, whatever its binding resolves to at runtime.
 */
import { ANY_VALUE_TYPES, isAllowedOidType } from './allowedOidTypes';
import { MAIN_OID_ROWS, stateRowCount, stateRowOidObject } from './stateRows';

import type { WidgetData } from '@iobroker/types-vis-2';

/**
 * The ONE blank rule: a row without a value, or with nothing but whitespace, is no state.
 *
 * @param value The row's `value{n}`.
 * @returns `true` for a blank row. `false` and `0` are values.
 */
export const isBlankStateValue = (value: string | number | boolean | undefined): boolean =>
    value === undefined || !/\S/.test(String(value));

/**
 * The number of resolved states the runtime gets out of the widget's raw data.
 *
 * @param data The raw widget data.
 * @returns The rows with a value among those the Zustandsmenge walks; `0` while the bound object's
 *   type resolves no states — the same types useData resolves.
 */
export const filledStateRowCount = (data: WidgetData): number => {
    if (!isAllowedOidType(ANY_VALUE_TYPES, stateRowOidObject(data, MAIN_OID_ROWS)?.type)) {
        return 0;
    }

    const rows = stateRowCount(data, MAIN_OID_ROWS);
    let filled = 0;
    for (let i = 1; i <= rows; i++) {
        if (!isBlankStateValue(data[`value${i}`])) {
            filled++;
        }
    }
    return filled;
};

/**
 * Whether the widget can be a push button at all: what the switch needs to be offered.
 *
 * @param data The raw widget data.
 * @returns `true` with `onlyStates` on and exactly two rows with a value.
 */
export const pushButtonModeOffered = (data: WidgetData): boolean =>
    Boolean(data.onlyStates) && filledStateRowCount(data) === 2;

/**
 * The push-button mode on the raw widget data — the condition `stateTrigger` applies to the
 * resolved states at runtime.
 *
 * @param data The raw widget data.
 * @returns `true` when the widget works as a push button.
 */
export const pushButtonModeActive = (data: WidgetData): boolean =>
    pushButtonModeOffered(data) && Boolean(data.statePushButton);
