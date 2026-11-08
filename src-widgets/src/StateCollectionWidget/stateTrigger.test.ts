/**
 * Zustands-Auslöser core — every event per configuration, without React.
 *
 * @module widgets/StateCollectionWidget/stateTrigger.test
 * @remarks
 * Pins the pure transition (ADR-0110 Nr. 1, ADR-0089): the click count dispatch (1 write, 2 toggle,
 * >2 dialog), the onlyStates exception, the push-button click SUPPRESSION (press and release write,
 * the trailing browser click must not) and the toggle's sameStateValue contract (string coercion
 * across type boundaries). What the hook adds around it is pinned in useStateTrigger.hook.test.ts,
 * what reaches the socket in StateCollection.test.tsx.
 *
 * The config carries the RESOLVED states from useData — blank rows are already absent there, so a
 * widget with two configured rows but one blank resolves to ONE state and clicks write (never
 * toggle against a blank).
 */
import { describe, expect, it } from 'vitest';

import { NO_PRESS, triggerStep } from './stateTrigger';
import type { StateTriggerConfig, TriggerAction, TriggerEvent } from './stateTrigger';

const PRESS: TriggerEvent = { kind: 'press' };
const RELEASE: TriggerEvent = { kind: 'release' };
const CLICK: TriggerEvent = { kind: 'click' };

const NONE: TriggerAction = { type: 'none' };
const DIALOG: TriggerAction = { type: 'open-dialog' };
const write = (value: string | number | boolean): TriggerAction => ({ type: 'write', value });

const TWO_STATES = [{ value: 0 }, { value: 1 }];
const THREE_STATES = [{ value: 0 }, { value: 1 }, { value: 2 }];

const TOGGLE: StateTriggerConfig = { states: TWO_STATES, onlyStates: true, statePushButton: false };
const PUSH_BUTTON: StateTriggerConfig = { ...TOGGLE, statePushButton: true };

/** An open press, as the transition itself reaches it. */
const OPEN = triggerStep(NO_PRESS, PRESS, PUSH_BUTTON, undefined).press;

/** Every configuration that is no push button, each with the current value it is read at. */
const NO_PUSH_BUTTON: [string, StateTriggerConfig, string | number | boolean | undefined, TriggerAction][] = [
    ['no onlyStates, two states', { ...TOGGLE, onlyStates: false }, 0, DIALOG],
    ['no onlyStates, the push-button flag set', { ...PUSH_BUTTON, onlyStates: false }, 0, DIALOG],
    ['no onlyStates, no state resolved', { states: [], onlyStates: false }, undefined, DIALOG],
    ['onlyStates, no state resolved', { states: [], onlyStates: true }, undefined, DIALOG],
    ['one state (a blank second row is absent)', { states: [{ value: 7 }], onlyStates: true }, 7, write(7)],
    ['one state, another current value', { states: [{ value: 7 }], onlyStates: true }, 3, write(7)],
    ['one state, the push-button flag set', { ...PUSH_BUTTON, states: [{ value: 7 }] }, 7, write(7)],
    ['two states at Wert[1]', TOGGLE, 0, write(1)],
    ['two states at Wert[2]', TOGGLE, 1, write(0)],
    ['two states at no value', TOGGLE, undefined, write(0)],
    ['two states at a value matching no row', TOGGLE, 7, write(0)],
    ['three states', { states: THREE_STATES, onlyStates: true }, 0, DIALOG],
    ['three states, the push-button flag set', { ...PUSH_BUTTON, states: THREE_STATES }, 0, DIALOG],
];

describe('triggerStep — every event per configuration', () => {
    describe.each([
        ['no open press', NO_PRESS],
        ['an open press', OPEN],
    ])('from %s', (_from, press) => {
        it.each(NO_PUSH_BUTTON)(
            '%s: press and release do nothing, the click decides',
            (_case, config, value, click) => {
                expect(triggerStep(press, PRESS, config, value).action).toEqual(NONE);
                expect(triggerStep(press, RELEASE, config, value).action).toEqual(NONE);
                expect(triggerStep(press, CLICK, config, value).action).toEqual(click);
            },
        );

        it('push button: press writes Wert[1], release writes Wert[2], whatever the current value', () => {
            for (const value of [0, 1, undefined]) {
                expect(triggerStep(press, PRESS, PUSH_BUTTON, value).action).toEqual(write(0));
                expect(triggerStep(press, RELEASE, PUSH_BUTTON, value).action).toEqual(write(1));
            }
        });

        it('push button: the click is suppressed, not outrun (ADR-0089)', () => {
            expect(triggerStep(press, CLICK, PUSH_BUTTON, 0).action).toEqual(NONE);
        });
    });
});

describe('triggerStep — the open press', () => {
    it('a press in push-button mode opens it', () => {
        expect(triggerStep(NO_PRESS, PRESS, PUSH_BUTTON, 0).press).toEqual({ pressOpen: true });
    });

    it('a release ends it', () => {
        expect(triggerStep(OPEN, RELEASE, PUSH_BUTTON, 0).press).toEqual(NO_PRESS);
    });

    it('a release without one leaves none', () => {
        expect(triggerStep(NO_PRESS, RELEASE, PUSH_BUTTON, 0).press).toEqual(NO_PRESS);
    });

    it.each(NO_PUSH_BUTTON)('%s: a press opens none, and a release ends a leftover one', (_case, config, value) => {
        expect(triggerStep(NO_PRESS, PRESS, config, value).press).toEqual(NO_PRESS);
        expect(triggerStep(OPEN, RELEASE, config, value).press).toEqual(NO_PRESS);
    });

    it('a click leaves it as it is: the trailing click comes after the release, a keyboard click starts none', () => {
        expect(triggerStep(OPEN, CLICK, PUSH_BUTTON, 0).press).toEqual(OPEN);
        expect(triggerStep(NO_PRESS, CLICK, PUSH_BUTTON, 0).press).toEqual(NO_PRESS);
    });
});

describe('triggerStep — the toggle', () => {
    it('crosses type boundaries via the sameStateValue contract', () => {
        // String "true" meets configured boolean true → write the other state.
        const booleanStates: StateTriggerConfig = { states: [{ value: true }, { value: false }], onlyStates: true };
        expect(triggerStep(NO_PRESS, CLICK, booleanStates, 'true').action).toEqual(write(false));

        // String "50" meets configured number 50 → write the other state.
        const numberStates: StateTriggerConfig = { states: [{ value: 50 }, { value: 100 }], onlyStates: true };
        expect(triggerStep(NO_PRESS, CLICK, numberStates, '50').action).toEqual(write(100));
    });
});

describe('triggerStep — a state without a value', () => {
    it('never writes it (worthless rows do not trigger)', () => {
        const config: StateTriggerConfig = { states: [{ value: undefined }, { value: 1 }], onlyStates: true };

        expect(triggerStep(NO_PRESS, CLICK, config, 0).action).toEqual(NONE);
        expect(triggerStep(NO_PRESS, PRESS, { ...config, statePushButton: true }, 0).action).toEqual(NONE);
    });
});
