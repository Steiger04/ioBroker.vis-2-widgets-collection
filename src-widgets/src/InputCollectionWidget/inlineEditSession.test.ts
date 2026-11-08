/**
 * Inline-Edit-Sitzung core — one case per event and mode.
 *
 * @module InputCollectionWidget/inlineEditSession.test
 * @remarks
 * The pure transition behind `useInlineEdit` (ADR-0109 Nr. 1), without React. What a written value
 * becomes on the OID is `updateValue`'s conversion, pinned at the body in `InputCollection.test.tsx`.
 */
import { describe, expect, it } from 'vitest';

import { NO_SESSION, sessionStep } from './inlineEditSession';
import type { InlineEditEvent, InlineEditInputs, InlineEditSession } from './inlineEditSession';

const LIVE: InlineEditInputs = { showOkButton: false, locked: false };
const OK: InlineEditInputs = { showOkButton: true, locked: false };

const RUNNING: InlineEditSession = { editing: true, draft: 'draft' };

const input = (value: string): InlineEditEvent => ({ kind: 'input', value });
const key = (pressed: string): InlineEditEvent => ({ kind: 'key', key: pressed });
const BLUR: InlineEditEvent = { kind: 'blur' };
const OK_CLICK: InlineEditEvent = { kind: 'ok' };

const running = (draft: string): InlineEditSession => ({ editing: true, draft });

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
            expect(sessionStep(NO_SESSION, { kind: 'start', value }, inputs)).toEqual({ session: running(draft) });
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
    it.each<[string, InlineEditInputs, InlineEditEvent, InlineEditSession, string | undefined]>([
        ['live: a keystroke writes itself', LIVE, input('41'), running('41'), '41'],
        ['live: a cleared field goes to the write as an empty string', LIVE, input(''), running(''), ''],
        ['live: a blur only leaves', LIVE, BLUR, NO_SESSION, undefined],
        ['live: Enter only leaves', LIVE, key('Enter'), NO_SESSION, undefined],
        ['live: Escape only leaves', LIVE, key('Escape'), NO_SESSION, undefined],
        ['live: another key does nothing', LIVE, key('a'), RUNNING, undefined],
        ['live: OK commits the draft', LIVE, OK_CLICK, NO_SESSION, 'draft'],

        ['OK: a keystroke only buffers', OK, input('41'), running('41'), undefined],
        ['OK: a blur commits the draft', OK, BLUR, NO_SESSION, 'draft'],
        ['OK: Enter commits the draft', OK, key('Enter'), NO_SESSION, 'draft'],
        ['OK: Escape discards the draft', OK, key('Escape'), NO_SESSION, undefined],
        ['OK: another key does nothing', OK, key('Tab'), RUNNING, undefined],
        ['OK: the OK button commits the draft', OK, OK_CLICK, NO_SESSION, 'draft'],
    ])('%s', (_case, inputs, event, session, write) => {
        const step = sessionStep(RUNNING, event, inputs);

        expect(step.session).toEqual(session);
        expect(step.write).toBe(write);
    });

    it('commits an emptied draft as an empty string, which is a value to write', () => {
        expect(sessionStep(running(''), OK_CLICK, OK)).toEqual({ session: NO_SESSION, write: '' });
    });

    it.each<[string, InlineEditEvent, InlineEditSession, string | undefined]>([
        ['a keystroke', input('41'), running('41'), undefined],
        ['a blur', BLUR, NO_SESSION, 'draft'],
        ['Enter', key('Enter'), NO_SESSION, 'draft'],
        ['Escape', key('Escape'), NO_SESSION, undefined],
        ['the OK button', OK_CLICK, NO_SESSION, 'draft'],
    ])(
        'checks the Sperre at the start only: %s runs on under a lock arriving later',
        (_case, event, session, write) => {
            const step = sessionStep(RUNNING, event, { ...OK, locked: true });

            expect(step.session).toEqual(session);
            expect(step.write).toBe(write);
        },
    );

    it('builds on the session of the step before', () => {
        const typed = sessionStep(RUNNING, input('a'), OK).session;

        expect(sessionStep(typed, OK_CLICK, OK).write).toBe('a');
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
        ])('%s neither starts a session nor writes', (_case, event) => {
            expect(sessionStep(NO_SESSION, event, inputs)).toEqual({ session: NO_SESSION });
        });
    });
});
