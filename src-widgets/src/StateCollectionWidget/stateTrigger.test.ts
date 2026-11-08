/**
 * Zustands-Auslöser core — every event per configuration, without React.
 *
 * @module widgets/StateCollectionWidget/stateTrigger.test
 * @remarks
 * Pins the pure transition (ADR-0110 Nr. 1, ADR-0089): the click count dispatch (1 write, 2 toggle,
 * >2 dialog), the onlyStates exception, the push-button click SUPPRESSION (press and release write,
 * the trailing browser click must not) and the toggle reading the Aktiver Zustand (ADR-0110 Nr. 8,
 * ADR-0105). What the hook adds around it is pinned in useStateTrigger.hook.test.ts, what reaches
 * the socket in StateCollection.test.tsx.
 *
 * The config carries the RESOLVED states from useData — blank rows are already absent there, so a
 * widget with two configured rows but one blank resolves to ONE state and clicks write (never
 * toggle against a blank).
 */
import { describe, expect, it } from 'vitest';

import { NO_PRESS, triggerStep } from './stateTrigger';
import type { StateTriggerConfig, TriggerAction, TriggerEvent, TriggerState } from './stateTrigger';

const PRESS: TriggerEvent = { kind: 'press' };
const RELEASE: TriggerEvent = { kind: 'release' };
const CLICK: TriggerEvent = { kind: 'click' };

const NONE: TriggerAction = { type: 'none' };
const DIALOG: TriggerAction = { type: 'open-dialog' };
const write = (value: string | number | boolean): TriggerAction => ({ type: 'write', value });

/** A resolved state; `active` is what useData decided for it. */
const row = (value: string | number | boolean | undefined, active = false): TriggerState => ({ value, active });

const TWO_STATES = [row(0), row(1)];
const THREE_STATES = [row(0), row(1), row(2)];

const TOGGLE: StateTriggerConfig = { states: TWO_STATES, onlyStates: true, statePushButton: false };
const PUSH_BUTTON: StateTriggerConfig = { ...TOGGLE, statePushButton: true };

/** An open press, as the transition itself reaches it. */
const OPEN = triggerStep(NO_PRESS, PRESS, PUSH_BUTTON).press;

/** Every configuration that is no push button, with what its click does. */
const NO_PUSH_BUTTON: [string, StateTriggerConfig, TriggerAction][] = [
    ['no onlyStates, two states', { ...TOGGLE, onlyStates: false }, DIALOG],
    ['no onlyStates, the push-button flag set', { ...PUSH_BUTTON, onlyStates: false }, DIALOG],
    ['no onlyStates, no state resolved', { states: [], onlyStates: false }, DIALOG],
    ['onlyStates, no state resolved', { states: [], onlyStates: true }, DIALOG],
    ['one state (a blank second row is absent)', { states: [row(7, true)], onlyStates: true }, write(7)],
    ['one state, not active', { states: [row(7)], onlyStates: true }, write(7)],
    ['one state, the push-button flag set', { ...PUSH_BUTTON, states: [row(7, true)] }, write(7)],
    ['two states, the first active', { ...TOGGLE, states: [row(0, true), row(1)] }, write(1)],
    ['two states, the second active', { ...TOGGLE, states: [row(0), row(1, true)] }, write(0)],
    ['two states, none active', TOGGLE, write(0)],
    ['two equal states, both active', { ...TOGGLE, states: [row(1, true), row('1', true)] }, write('1')],
    ['two equal states, none active', { ...TOGGLE, states: [row(1), row('1')] }, write(1)],
    ['three states', { states: THREE_STATES, onlyStates: true }, DIALOG],
    ['three states, the push-button flag set', { ...PUSH_BUTTON, states: THREE_STATES }, DIALOG],
];

describe('triggerStep — every event per configuration', () => {
    describe.each([
        ['no open press', NO_PRESS],
        ['an open press', OPEN],
    ])('from %s', (_from, press) => {
        it.each(NO_PUSH_BUTTON)('%s: press and release do nothing, the click decides', (_case, config, click) => {
            expect(triggerStep(press, PRESS, config).action).toEqual(NONE);
            expect(triggerStep(press, RELEASE, config).action).toEqual(NONE);
            expect(triggerStep(press, CLICK, config).action).toEqual(click);
        });

        it.each([
            ['the first', [row(0, true), row(1)]],
            ['the second', [row(0), row(1, true)]],
            ['none', TWO_STATES],
        ])('push button: press writes Wert[1], release writes Wert[2], with %s active', (_active, states) => {
            const config = { ...PUSH_BUTTON, states };

            expect(triggerStep(press, PRESS, config).action).toEqual(write(0));
            expect(triggerStep(press, RELEASE, config).action).toEqual(write(1));
        });

        it('push button: the click is suppressed, not outrun (ADR-0089)', () => {
            expect(triggerStep(press, CLICK, PUSH_BUTTON).action).toEqual(NONE);
        });
    });
});

describe('triggerStep — the open press', () => {
    it('a press in push-button mode opens it', () => {
        expect(triggerStep(NO_PRESS, PRESS, PUSH_BUTTON).press.pressOpen).toBe(true);
    });

    it('a release ends it', () => {
        expect(triggerStep(OPEN, RELEASE, PUSH_BUTTON).press).toEqual(NO_PRESS);
    });

    it('a release without one leaves none', () => {
        expect(triggerStep(NO_PRESS, RELEASE, PUSH_BUTTON).press).toEqual(NO_PRESS);
    });

    it.each(NO_PUSH_BUTTON)('%s: a press opens none, and a release ends a leftover one', (_case, config) => {
        expect(triggerStep(NO_PRESS, PRESS, config).press).toEqual(NO_PRESS);
        expect(triggerStep(OPEN, RELEASE, config).press).toEqual(NO_PRESS);
    });

    it('a click leaves it as it is: the trailing click comes after the release, a keyboard click starts none', () => {
        expect(triggerStep(OPEN, CLICK, PUSH_BUTTON).press).toEqual(OPEN);
        expect(triggerStep(NO_PRESS, CLICK, PUSH_BUTTON).press).toEqual(NO_PRESS);
    });
});

describe('triggerStep — a state without a value', () => {
    it('never writes it (worthless rows do not trigger)', () => {
        const config: StateTriggerConfig = { states: [row(undefined), row(1)], onlyStates: true };

        expect(triggerStep(NO_PRESS, CLICK, config).action).toEqual(NONE);
        expect(triggerStep(NO_PRESS, PRESS, { ...config, statePushButton: true }).action).toEqual(NONE);
    });
});
