/**
 * Inline-Edit-Sitzung core — one case per event and mode.
 *
 * @module InputCollectionWidget/inlineEditSession.test
 * @remarks
 * The pure transition behind `useInlineEdit` (ADR-0109 Nr. 1), without a mounted hook. The conversion
 * is the real one the shell hands in; what a written value becomes on the OID is `updateValue`'s
 * business, pinned at the body in `InputCollection.test.tsx`.
 */
import { describe, expect, it } from 'vitest';

import { convertToOidType } from '../hooks/useValueState';
import type { OidType } from '../types';
import { NO_SESSION, sessionStep } from './inlineEditSession';
import type { InlineEditEvent, InlineEditInputs, InlineEditSession } from './inlineEditSession';

/** The inputs of a session on an OID of the given type. */
const inputsOf = (showOkButton: boolean, oidType: OidType = 'string'): InlineEditInputs => ({
    showOkButton,
    locked: false,
    convert: raw => convertToOidType(raw, oidType),
});

const LIVE = inputsOf(false);
const OK = inputsOf(true);

const input = (value: string): InlineEditEvent => ({ kind: 'input', value });
const key = (pressed: string): InlineEditEvent => ({ kind: 'key', key: pressed });
const BLUR: InlineEditEvent = { kind: 'blur' };
const OK_CLICK: InlineEditEvent = { kind: 'ok' };
/** A backend observation; `significant` is the flag of that render, a state that can be stale. */
const backend = (value: ioBroker.StateValue | undefined, significant = true): InlineEditEvent => ({
    kind: 'backend',
    value,
    significant,
});

/** The session after a start at `value` and the given events, folded through the transition. */
const sessionAfter = (
    inputs: InlineEditInputs,
    value: ioBroker.StateValue | undefined,
    events: InlineEditEvent[] = [],
): InlineEditSession =>
    events.reduce(
        (session, event) => sessionStep(session, event, inputs).session,
        sessionStep(NO_SESSION, { kind: 'start', value }, inputs).session,
    );

/** A running session whose draft differs from where it started. */
const RUNNING = sessionAfter(OK, 'start', [input('draft')]);

/** What the session shows, without what it compares against. */
const seen = ({ editing, draft }: InlineEditSession): Pick<InlineEditSession, 'editing' | 'draft'> => ({
    editing,
    draft,
});

const running = (draft: string): Pick<InlineEditSession, 'editing' | 'draft'> => ({ editing: true, draft });
const LEFT = seen(NO_SESSION);

describe('sessionStep: start', () => {
    describe.each([
        ['live', LIVE],
        ['OK', OK],
    ])('in %s mode', (_mode, inputs) => {
        it.each([
            ['a number', 40, '40'],
            ['zero', 0, '0'],
            ['a string', 'abc', 'abc'],
            ['an empty string', '', ''],
            ['true', true, 'true'],
            ['false', false, 'false'],
            ['null', null, ''],
            ['undefined', undefined, ''],
        ])('seeds the draft from %s and writes nothing', (_case, value, draft) => {
            const step = sessionStep(NO_SESSION, { kind: 'start', value }, inputs);

            expect(seen(step.session)).toEqual(running(draft));
            expect(step.write).toBeUndefined();
        });

        it('stays out of the session under the Sperre', () => {
            const step = sessionStep(NO_SESSION, { kind: 'start', value: 40 }, { ...inputs, locked: true });

            expect(step).toEqual({ session: NO_SESSION });
        });

        it('keeps the draft of a running session', () => {
            expect(sessionStep(RUNNING, { kind: 'start', value: 40 }, inputs)).toEqual({ session: RUNNING });
        });
    });
});

describe('sessionStep: during a session', () => {
    it.each<[string, InlineEditInputs, InlineEditEvent, Pick<InlineEditSession, 'editing' | 'draft'>, string?]>([
        ['live: a keystroke writes itself', LIVE, input('41'), running('41'), '41'],
        ['live: a cleared field goes to the write as an empty string', LIVE, input(''), running(''), ''],
        ['live: a blur only leaves', LIVE, BLUR, LEFT],
        ['live: Enter only leaves', LIVE, key('Enter'), LEFT],
        ['live: Escape only leaves', LIVE, key('Escape'), LEFT],
        ['live: another key does nothing', LIVE, key('a'), running('draft')],
        ['live: OK commits the draft', LIVE, OK_CLICK, LEFT, 'draft'],

        ['OK: a keystroke only buffers', OK, input('41'), running('41')],
        ['OK: a blur commits the changed draft', OK, BLUR, LEFT, 'draft'],
        ['OK: Enter commits the changed draft', OK, key('Enter'), LEFT, 'draft'],
        ['OK: Escape discards the draft', OK, key('Escape'), LEFT],
        ['OK: another key does nothing', OK, key('Tab'), running('draft')],
        ['OK: the OK button commits the changed draft', OK, OK_CLICK, LEFT, 'draft'],
    ])('%s', (_case, inputs, event, session, write) => {
        const step = sessionStep(RUNNING, event, inputs);

        expect(seen(step.session)).toEqual(session);
        expect(step.write).toBe(write);
    });

    it('commits an emptied draft as an empty string, which is a value to write', () => {
        const step = sessionStep(sessionAfter(OK, 'alt', [input('')]), OK_CLICK, OK);

        expect(seen(step.session)).toEqual(LEFT);
        expect(step.write).toBe('');
    });

    it.each<[string, InlineEditEvent, Pick<InlineEditSession, 'editing' | 'draft'>, string?]>([
        ['a keystroke', input('41'), running('41')],
        ['a blur', BLUR, LEFT, 'draft'],
        ['Enter', key('Enter'), LEFT, 'draft'],
        ['Escape', key('Escape'), LEFT],
        ['the OK button', OK_CLICK, LEFT, 'draft'],
    ])(
        'checks the Sperre at the start only: %s runs on under a lock arriving later',
        (_case, event, session, write) => {
            const step = sessionStep(RUNNING, event, { ...OK, locked: true });

            expect(seen(step.session)).toEqual(session);
            expect(step.write).toBe(write);
        },
    );

    it('builds on the session of the step before', () => {
        const typed = sessionStep(RUNNING, input('a'), OK).session;

        expect(sessionStep(typed, OK_CLICK, OK).write).toBe('a');
    });
});

describe('sessionStep: Sitzungskonflikt', () => {
    const NUMBER_LIVE = inputsOf(false, 'number');
    const MIXED_LIVE = inputsOf(false, 'mixed');
    const NUMBER_OK = inputsOf(true, 'number');

    describe.each([
        ['live', NUMBER_LIVE],
        ['OK', NUMBER_OK],
    ])('in %s mode', (_mode, inputs) => {
        it.each<[string, ioBroker.StateValue | undefined, InlineEditEvent[], boolean]>([
            ['starts without a mark', 40, [], false],
            ['a significant change since the start is one', 40, [backend(50)], true],
            ['a change before the start is none, the flag still being true', 50, [backend(50)], false],
            ['the same value in another representation is none', 5, [backend('5')], false],
            ['null and an empty string are the same value', null, [backend('')], false],
            ['the flag staying true over a follow-up change is one', 50, [backend(50), backend(60)], true],
            ['jitter alone is none', 40, [backend(40.5, false)], false],
            ['jitter does not end it', 40, [backend(50), backend(50.5, false)], true],
            ['the backend returning to the start does not end it', 40, [backend(50), backend(40)], true],
            ['a key without an input does not end it', 40, [backend(50), key('a')], true],
        ])('%s', (_case, value, events, conflict) => {
            expect(sessionAfter(inputs, value, events).conflict).toBe(conflict);
        });

        it('hands an observation without a new conflict back as the same session', () => {
            const calm = sessionAfter(inputs, 40);
            const marked = sessionAfter(inputs, 40, [backend(50)]);

            expect(sessionStep(calm, backend(40), inputs).session).toBe(calm);
            expect(sessionStep(calm, backend(41, false), inputs).session).toBe(calm);
            expect(sessionStep(marked, backend(60), inputs).session).toBe(marked);
        });

        it('ignores observations outside a session', () => {
            expect(sessionStep(NO_SESSION, backend(50), inputs).session).toBe(NO_SESSION);
        });

        it.each<[string, InlineEditEvent]>([
            ['Escape', key('Escape')],
            ['a blur', BLUR],
            ['Enter', key('Enter')],
        ])('starts the next session without the mark after leaving by %s', (_case, leave) => {
            const left = sessionStep(sessionAfter(inputs, 40, [backend(50)]), leave, inputs).session;

            const restarted = sessionStep(left, { kind: 'start', value: 50 }, inputs).session;

            expect(left.conflict).toBe(false);
            expect(restarted.conflict).toBe(false);
            expect(sessionStep(restarted, backend(50), inputs).session.conflict).toBe(false);
        });

        it.each<[string, InlineEditEvent]>([
            ['a blur', BLUR],
            ['Enter', key('Enter')],
            ['Escape', key('Escape')],
            ['the OK button', OK_CLICK],
            ['a keystroke', input('41')],
        ])('warns only: %s writes the same with and without the mark', (_case, event) => {
            const calm = sessionAfter(inputs, 40, [input('41')]);
            const marked = sessionStep(calm, backend(50), inputs).session;

            expect(marked.conflict).toBe(true);
            expect(sessionStep(marked, event, inputs).write).toBe(sessionStep(calm, event, inputs).write);
        });
    });

    describe('in live mode the reference is the last own value', () => {
        it.each<[string, InlineEditInputs, ioBroker.StateValue | undefined, InlineEditEvent[], boolean]>([
            ['the own keystroke ends it', NUMBER_LIVE, 40, [backend(50), input('41')], false],
            ['the echo of the keystroke is none', NUMBER_LIVE, 40, [backend(50), input('41'), backend(41)], false],
            ['a change after the keystroke is one again', NUMBER_LIVE, 40, [input('41'), backend(50)], true],
            ['the start value after a keystroke is one', NUMBER_LIVE, 40, [input('41'), backend(40)], true],
            ['the echo comes converted: "5.0" arrives as 5', NUMBER_LIVE, 40, [input('5.0'), backend(5)], false],
            ['the echo comes converted: mixed "007" arrives as 7', MIXED_LIVE, 'a', [input('007'), backend(7)], false],
            [
                'the echo comes converted: mixed "TRUE" arrives as true',
                MIXED_LIVE,
                'a',
                [input('TRUE'), backend(true)],
                false,
            ],
            ['the echo of false is none', MIXED_LIVE, 'a', [input('false'), backend(false)], false],
            [
                'several keystrokes before the first echo: only the last counts',
                NUMBER_LIVE,
                40,
                [input('5'), input('55'), input('551'), backend(551)],
                false,
            ],
            [
                'echoes between the keystrokes, the last one past the ignore window',
                MIXED_LIVE,
                'a',
                [input('0'), backend(0, false), input('007'), backend(7)],
                false,
            ],
            // Accepted rest: only the last own value is the reference, a list would swallow foreign changes.
            [
                'an older echo behind a newer keystroke, past the ignore window, counts',
                NUMBER_LIVE,
                40,
                [input('41'), input('42'), backend(41)],
                true,
            ],
            // `updateValue` drops what does not convert: nothing reached the backend.
            ['a keystroke that does not convert does not end it', NUMBER_LIVE, 40, [backend(50), input('')], true],
            ['nor does it move the reference', NUMBER_LIVE, 50, [input(''), backend(50)], false],
            ['the first keystroke that converts ends it', NUMBER_LIVE, 40, [backend(50), input(''), input('6')], false],
        ])('%s', (_case, inputs, value, events, conflict) => {
            expect(sessionAfter(inputs, value, events).conflict).toBe(conflict);
        });
    });

    describe('in OK mode the reference stays the value at the start', () => {
        it.each<[string, InlineEditEvent[], boolean]>([
            ['a keystroke does not end it', [backend(50), input('41')], true],
            ['the backend reaching the buffered draft is a conflict too', [input('41'), backend(41)], true],
            ['a change to the start value is none', [input('41'), backend(40)], false],
        ])('%s', (_case, events, conflict) => {
            expect(sessionAfter(NUMBER_OK, 40, events).conflict).toBe(conflict);
        });
    });
});

describe('sessionStep: a blur is no command', () => {
    const inOkMode = (oidType: OidType): InlineEditInputs => inputsOf(true, oidType);

    it.each<[string, OidType, ioBroker.StateValue | undefined, InlineEditEvent[], string?]>([
        ['without a change writes nothing', 'number', 40, []],
        ['with a change writes the draft', 'number', 40, [input('41')], '41'],
        ['typed back to the start writes nothing', 'number', 40, [input('41'), input('40')]],
        ['on an emptied draft writes the empty string', 'string', 'abc', [input('')], ''],
        ['on a mixed "007" without a change writes nothing', 'mixed', '007', []],
        ['on a null without a change writes nothing', 'string', null, []],
        ['in a conflict without a change writes nothing', 'number', 40, [backend(50)]],
        ['in a conflict with a change writes the draft', 'number', 40, [backend(50), input('41')], '41'],
    ])('%s', (_case, oidType, value, events, write) => {
        const inputs = inOkMode(oidType);

        const step = sessionStep(sessionAfter(inputs, value, events), BLUR, inputs);

        expect(seen(step.session)).toEqual(LEFT);
        expect(step.write).toBe(write);
    });
});

describe('sessionStep: Enter and OK are explicit', () => {
    describe.each<[string, InlineEditEvent]>([
        ['Enter', key('Enter')],
        ['the OK button', OK_CLICK],
    ])('%s', (_way, commit) => {
        const stepOf = (
            oidType: OidType,
            value: ioBroker.StateValue | undefined,
            events: InlineEditEvent[] = [],
        ): ReturnType<typeof sessionStep> => {
            const inputs = inputsOf(true, oidType);

            return sessionStep(sessionAfter(inputs, value, events), commit, inputs);
        };

        it.each<[string, OidType, ioBroker.StateValue, string]>([
            ['a number', 'number', 5, '5'],
            ['zero', 'number', 0, '0'],
            ['a string', 'string', 'abc', 'abc'],
            ['an empty string', 'string', '', ''],
            ['a mixed number', 'mixed', 5, '5'],
            ['a mixed true', 'mixed', true, 'true'],
            ['a mixed false', 'mixed', false, 'false'],
            ['a mixed text', 'mixed', 'abc', 'abc'],
            ['a boolean true', 'boolean', true, 'true'],
            ['a boolean false', 'boolean', false, 'false'],
        ])('sends %s again that the conversion leaves as it is', (_case, oidType, value, write) => {
            const step = stepOf(oidType, value);

            expect(seen(step.session)).toEqual(LEFT);
            expect(step.write).toBe(write);
        });

        it.each<[string, OidType, ioBroker.StateValue | undefined]>([
            ['a mixed "007" the conversion would turn into 7', 'mixed', '007'],
            ['a mixed "5" the conversion would turn into 5', 'mixed', '5'],
            ['a null on a string OID the conversion would turn into ""', 'string', null],
            ['an undefined on a string OID the conversion would turn into ""', 'string', undefined],
            ['a number on a string OID the conversion would turn into a string', 'string', 5],
            // What `updateValue` would drop has nothing to send: these leave without a write as well.
            ['a null on a number OID the conversion drops', 'number', null],
            ['an undefined on a number OID the conversion drops', 'number', undefined],
            ['a text on a number OID the conversion drops', 'number', 'abc'],
        ])('leaves silently on %s', (_case, oidType, value) => {
            const step = stepOf(oidType, value);

            expect(seen(step.session)).toEqual(LEFT);
            expect(step.write).toBeUndefined();
        });

        it.each<[string, OidType, ioBroker.StateValue, InlineEditEvent[], string]>([
            ['a typed "007", which is a changed input', 'mixed', 'abc', [input('007')], '007'],
            ['a draft the conversion drops, which `updateValue` then drops', 'number', 40, [input('')], ''],
            ['a changed draft in a conflict', 'number', 40, [backend(50), input('41')], '41'],
            ['the start value again in a conflict', 'number', 40, [backend(50)], '40'],
            ['a draft typed back to the start, as a re-send', 'number', 40, [input('41'), input('40')], '40'],
        ])('writes %s', (_case, oidType, value, events, write) => {
            const step = stepOf(oidType, value, events);

            expect(seen(step.session)).toEqual(LEFT);
            expect(step.write).toBe(write);
        });

        it('leaves silently on a draft typed back to a value the conversion would change', () => {
            const step = stepOf('mixed', '007', [input('7'), input('007')]);

            expect(seen(step.session)).toEqual(LEFT);
            expect(step.write).toBeUndefined();
        });

        it.each<[string, OidType, ioBroker.StateValue, InlineEditEvent[]]>([
            ['a changed draft', 'number', 40, [input('41')]],
            ['a re-send', 'number', 40, []],
            ['a silent leave', 'mixed', '007', []],
        ])('ends the session on %s, so the blur of the unmount writes nothing', (_case, oidType, value, events) => {
            const inputs = inputsOf(true, oidType);
            const left = sessionStep(sessionAfter(inputs, value, events), commit, inputs).session;

            expect(sessionStep(left, BLUR, inputs)).toEqual({ session: NO_SESSION });
        });
    });
});

describe('sessionStep: live mode stays as it is', () => {
    it.each<[string, InlineEditEvent]>([
        ['a blur', BLUR],
        ['Enter', key('Enter')],
        ['Escape', key('Escape')],
    ])('%s leaves without a write, with and without a change', (_case, leave) => {
        const inputs = inputsOf(false, 'mixed');

        expect(sessionStep(sessionAfter(inputs, '007'), leave, inputs)).toEqual({ session: NO_SESSION });
        expect(sessionStep(sessionAfter(inputs, '007', [input('8')]), leave, inputs)).toEqual({ session: NO_SESSION });
    });

    it('the OK event keeps committing the draft, whatever the conversion makes of it', () => {
        const inputs = inputsOf(false, 'mixed');

        expect(sessionStep(sessionAfter(inputs, '007'), OK_CLICK, inputs).write).toBe('007');
    });
});

describe('sessionStep: outside a session', () => {
    describe.each([
        ['live', LIVE],
        ['OK', OK],
    ])('in %s mode', (_mode, inputs) => {
        it.each<[string, InlineEditEvent]>([
            ['a keystroke', input('41')],
            ['a blur', BLUR],
            ['Enter', key('Enter')],
            ['Escape', key('Escape')],
            ['the OK button', OK_CLICK],
            ['a backend observation', backend(50)],
        ])('%s neither starts a session nor writes', (_case, event) => {
            expect(sessionStep(NO_SESSION, event, inputs)).toEqual({ session: NO_SESSION });
        });
    });
});
