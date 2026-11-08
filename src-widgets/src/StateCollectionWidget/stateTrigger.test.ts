/**
 * Zustands-Auslöser core — every event per configuration, without React.
 *
 * @module widgets/StateCollectionWidget/stateTrigger.test
 * @remarks
 * Pins the pure transition (ADR-0110 Nr. 1, ADR-0089): the click count dispatch (1 write, 2 toggle,
 * >2 dialog), the onlyStates exception, the slider gate and the dialog with nothing to show (ADR-0110
 * Nr. 9), the push-button click SUPPRESSION (press and release write, the trailing browser click must
 * not) and the toggle reading the Aktiver Zustand (ADR-0110 Nr. 8, ADR-0105). What the hook adds
 * around it is pinned in useStateTrigger.hook.test.ts, what reaches the socket in
 * StateCollection.test.tsx.
 *
 * The config carries the RESOLVED states from useData — blank rows are already absent there, so a
 * widget with two configured rows but one blank resolves to ONE state and clicks write (never
 * toggle against a blank).
 */
import { describe, expect, it } from 'vitest';

import { NO_PRESS, sliderRange, triggerStep } from './stateTrigger';
import type { StateTriggerConfig, TriggerAction, TriggerEvent, TriggerOidObject, TriggerState } from './stateTrigger';

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
    ['no onlyStates, no state resolved', { states: [], onlyStates: false }, NONE],
    ['onlyStates, no state resolved', { states: [], onlyStates: true }, NONE],
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
        ])('push button: press writes Wert[1], with %s active', (_active, states) => {
            expect(triggerStep(press, PRESS, { ...PUSH_BUTTON, states }).action).toEqual(write(0));
        });

        it('push button: the click is suppressed, not outrun (ADR-0089)', () => {
            expect(triggerStep(press, CLICK, PUSH_BUTTON).action).toEqual(NONE);
        });
    });
});

describe('triggerStep — Wert[2] only out of an open press (ticket 04)', () => {
    /** The values a run of events writes, folded through the transition. */
    const writesOf = (events: TriggerEvent[]): TriggerAction[] => {
        let press = NO_PRESS;
        const actions: TriggerAction[] = [];

        for (const event of events) {
            const step = triggerStep(press, event, PUSH_BUTTON);
            press = step.press;
            if (step.action.type === 'write') {
                actions.push(step.action);
            }
        }

        return actions;
    };

    it.each([
        ['press, release', [PRESS, RELEASE], [write(0), write(1)]],
        ['press, release, the trailing click', [PRESS, RELEASE, CLICK], [write(0), write(1)]],
        ['passing over: a release without a press', [RELEASE], []],
        ['passing over twice', [RELEASE, RELEASE], []],
        ['a keyboard click, then a release', [CLICK, RELEASE], []],
        ['press, leaving, coming back, letting go', [PRESS, RELEASE, RELEASE], [write(0), write(1)]],
        [
            'press, leaving, coming back, letting go, a new press and its release',
            [PRESS, RELEASE, RELEASE, PRESS, RELEASE],
            [write(0), write(1), write(0), write(1)],
        ],
    ])('%s', (_case, events, expected) => {
        expect(writesOf(events)).toEqual(expected);
    });

    it('a release out of an open press writes Wert[2]', () => {
        expect(triggerStep(OPEN, RELEASE, PUSH_BUTTON).action).toEqual(write(1));
    });

    it('a release without an open press writes nothing', () => {
        expect(triggerStep(NO_PRESS, RELEASE, PUSH_BUTTON).action).toEqual(NONE);
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

describe('the slider gate (ticket 17)', () => {
    const number = (range: { minValue?: number; maxValue?: number } = {}): TriggerOidObject => ({
        type: 'number',
        ...range,
    });
    const RANGE = { minValue: 0, maxValue: 100 };

    describe('sliderRange', () => {
        it.each<[string, TriggerOidObject, { min: number; max: number }]>([
            ['the object copy pre-filled with 0..100 (ADR-0109 Nr. 8)', number(RANGE), { min: 0, max: 100 }],
            ['a negative lower bound', number({ minValue: -20, maxValue: 40 }), { min: -20, max: 40 }],
            ['an upper bound of 0', number({ minValue: -10, maxValue: 0 }), { min: -10, max: 0 }],
            ['a span below 1', number({ minValue: 0, maxValue: 0.5 }), { min: 0, max: 0.5 }],
        ])('a number OID with %s earns the slider', (_case, oidObject, range) => {
            expect(sliderRange({ oidObject })).toEqual(range);
        });

        it.each<[string, TriggerOidObject | undefined, boolean?]>([
            ['no object copy', undefined],
            ['a copy without a range', number()],
            ['only a lower bound', number({ minValue: 0 })],
            ['only an upper bound', number({ maxValue: 100 })],
            ['min = max', number({ minValue: 5, maxValue: 5 })],
            ['min > max', number({ minValue: 200, maxValue: 100 })],
            ['a string OID with a range', { ...RANGE, type: 'string' }],
            ['a mixed OID with a range', { ...RANGE, type: 'mixed' }],
            ['a boolean OID with a range', { ...RANGE, type: 'boolean' }],
            ['onlyStates on a number OID with a range', number(RANGE), true],
        ])('%s gets no slider', (_case, oidObject, onlyStates) => {
            expect(sliderRange({ oidObject, onlyStates })).toBeUndefined();
        });
    });

    describe('the click sees the whole result', () => {
        const ONE_STATE = [row(7)];

        it.each<[string, StateTriggerConfig]>([
            ['a string OID without rows', { states: [], oidObject: { type: 'string' } }],
            ['a number OID without rows and without a range', { states: [], oidObject: number() }],
            ['a number OID without rows, min > max', { states: [], oidObject: number({ minValue: 2, maxValue: 1 }) }],
            [
                'a stale onlyStates on a number OID without rows',
                { states: [], onlyStates: true, oidObject: number(RANGE) },
            ],
            ['no object copy and no rows', { states: [] }],
        ])('neither a list nor a slider: %s does nothing', (_case, config) => {
            expect(triggerStep(NO_PRESS, CLICK, config).action).toEqual(NONE);
        });

        it.each<[string, StateTriggerConfig]>([
            ['the slider alone', { states: [], oidObject: number(RANGE) }],
            ['the list alone, on a string OID', { states: ONE_STATE, oidObject: { type: 'string' } }],
            ['the list alone, min > max', { states: ONE_STATE, oidObject: number({ minValue: 2, maxValue: 1 }) }],
            ['the list and the slider', { states: ONE_STATE, oidObject: number(RANGE) }],
            ['the list of three, onlyStates', { states: THREE_STATES, onlyStates: true, oidObject: number(RANGE) }],
        ])('%s opens the dialog', (_case, config) => {
            expect(triggerStep(NO_PRESS, CLICK, config).action).toEqual(DIALOG);
        });
    });
});

describe('triggerStep — a state without a value', () => {
    it('never writes it (worthless rows do not trigger)', () => {
        const config: StateTriggerConfig = { states: [row(undefined), row(1)], onlyStates: true };

        expect(triggerStep(NO_PRESS, CLICK, config).action).toEqual(NONE);
        expect(triggerStep(NO_PRESS, PRESS, { ...config, statePushButton: true }).action).toEqual(NONE);
    });
});
