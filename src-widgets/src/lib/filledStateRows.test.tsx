/**
 * Rows with a value: the blank rule, and the raw-data question against the runtime's answer.
 *
 * @module lib/filledStateRows.test
 * @remarks
 * `pushButtonModeActive` reads the raw widget data, the runtime decides over useData's resolved
 * states. Each row of the table runs through both, on the real provider and the real trigger — so
 * the editor cannot promise a push button the runtime does not deliver, nor hide one it does.
 */
import type { FC } from 'react';
import { describe, expect, it } from 'vitest';

import useData from '../hooks/useData/useData';
import { NO_PRESS, triggerStep } from '../StateCollectionWidget/stateTrigger';
import { filledStateRowCount, isBlankStateValue, pushButtonModeActive, pushButtonModeOffered } from './filledStateRows';
import { collectionScene, testScopedMount } from './testing/collectionScene';

import type { WidgetData } from '@iobroker/types-vis-2';
import type { StateStyleData } from '../hooks/useData/types';

const OID = 'demo.0.mode';
const STRING_OID = { oid: OID, oidObject: { _id: OID, type: 'string' } };
const LEGACY_COMMON_STATES = {
    oid: OID,
    oidObject: { _id: OID, type: 'number', commonStates: { 0: 'off', 1: 'on' } },
    values_count: 0,
};
const PUSH_BUTTON = { onlyStates: true, statePushButton: true };

const mount = testScopedMount();

/** The resolved states of useData over the given widget data. */
const resolvedStates = (data: Record<string, unknown>): StateStyleData[] => {
    const captured: { states?: StateStyleData[] } = {};
    const Probe: FC = () => {
        captured.states = useData('oid').states;
        return null;
    };
    mount(Probe, collectionScene('filled-state-rows', data, undefined));
    return captured.states ?? [];
};

/** Whether the runtime treats a press as a push-button press over these resolved states. */
const runtimeIsPushButton = (data: Record<string, unknown>): boolean =>
    triggerStep(
        NO_PRESS,
        { kind: 'press' },
        {
            states: resolvedStates(data),
            onlyStates: data.onlyStates as boolean | undefined,
            statePushButton: data.statePushButton as boolean | undefined,
        },
    ).action.type === 'write';

describe('isBlankStateValue', () => {
    it.each<[string, string | number | boolean | undefined, boolean]>([
        ['a missing value', undefined, true],
        ['an empty string', '', true],
        ['spaces', '   ', true],
        ['tabs and line breaks', '\t\n', true],
        ['text', 'a', false],
        ['text inside spaces', ' a ', false],
        ['the number 0', 0, false],
        ['false', false, false],
    ])('%s → %s', (_label, value, blank) => {
        expect(isBlankStateValue(value)).toBe(blank);
    });
});

describe('filledStateRowCount', () => {
    it('counts only the rows the Zustandsmenge walks, like useData', () => {
        expect(filledStateRowCount({ ...STRING_OID, values_count: 2, value1: 'a', value3: 'c' } as WidgetData)).toBe(1);
    });

    it('takes the row count of a legacy widget from its common states', () => {
        expect(filledStateRowCount({ ...LEGACY_COMMON_STATES, value1: 0, value2: 1 } as unknown as WidgetData)).toBe(2);
    });

    it('reads nothing while the bound object is missing', () => {
        expect(filledStateRowCount({ values_count: 2, value1: 'a', value2: 'b' } as WidgetData)).toBe(0);
    });
});

describe('pushButtonModeOffered and pushButtonModeActive', () => {
    const TWO_ROWS = { ...STRING_OID, values_count: 2, value1: 'a', value2: 'b' };

    it('offers the mode without the flag, but only then calls it active with the flag', () => {
        const offered = { ...TWO_ROWS, onlyStates: true } as WidgetData;

        expect([pushButtonModeOffered(offered), pushButtonModeActive(offered)]).toEqual([true, false]);
    });

    it('keeps a stored flag from counting while the rows do not allow the mode', () => {
        const blanked = { ...TWO_ROWS, ...PUSH_BUTTON, value2: ' ' } as WidgetData;

        expect([pushButtonModeOffered(blanked), pushButtonModeActive(blanked)]).toEqual([false, false]);
    });
});

describe('pushButtonModeActive agrees with the runtime — ticket 09', () => {
    it.each<[string, boolean, Record<string, unknown>]>([
        ['two rows with a value', true, { ...STRING_OID, ...PUSH_BUTTON, values_count: 2, value1: 'a', value2: 'b' }],
        ['two rows, one empty', false, { ...STRING_OID, ...PUSH_BUTTON, values_count: 2, value1: 'a', value2: '' }],
        ['two rows, one spaces', false, { ...STRING_OID, ...PUSH_BUTTON, values_count: 2, value1: 'a', value2: '  ' }],
        [
            'three rows, one empty',
            true,
            { ...STRING_OID, ...PUSH_BUTTON, values_count: 3, value1: 'a', value2: '', value3: 'c' },
        ],
        [
            'three rows with a value',
            false,
            { ...STRING_OID, ...PUSH_BUTTON, values_count: 3, value1: 'a', value2: 'b', value3: 'c' },
        ],
        [
            'a value behind the counted rows',
            false,
            { ...STRING_OID, ...PUSH_BUTTON, values_count: 2, value1: 'a', value3: 'c' },
        ],
        [
            'false and 0 are values',
            true,
            { oid: OID, oidObject: { type: 'mixed' }, ...PUSH_BUTTON, values_count: 2, value1: false, value2: 0 },
        ],
        ['legacy widget, rows filled', true, { ...LEGACY_COMMON_STATES, ...PUSH_BUTTON, value1: 0, value2: 1 }],
        ['legacy widget, one row filled', false, { ...LEGACY_COMMON_STATES, ...PUSH_BUTTON, value1: 0 }],
        ['no OID object', false, { oid: OID, ...PUSH_BUTTON, values_count: 2, value1: 'a', value2: 'b' }],
        ['no onlyStates', false, { ...STRING_OID, statePushButton: true, values_count: 2, value1: 'a', value2: 'b' }],
        ['no flag', false, { ...STRING_OID, onlyStates: true, values_count: 2, value1: 'a', value2: 'b' }],
    ])('%s → %s', (_label, active, data) => {
        expect(runtimeIsPushButton(data)).toBe(active);
        expect(pushButtonModeActive(data as WidgetData)).toBe(active);
    });
});
