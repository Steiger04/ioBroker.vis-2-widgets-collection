/**
 * Pure transitions of the Dialog-Sitzung — the Dialog widget's open-state decision matrix.
 *
 * @module widgets/DialogCollectionWidget/dialogSession.test
 * @remarks
 * Pins decideDialogTransition WITHOUT React, timers or socket (ADR-0095, ADR-0087 pure
 * transitions idiom, prior art: stateTrigger.test.ts): only the widget's own actions (click,
 * close request, timer expiry) write; a backend observation opens or closes but never writes;
 * only real booleans count; a read-only Sitzungs-OID is followed, never written.
 */
import { describe, expect, it } from 'vitest';

import { decideDialogTransition, parseAutoCloseTimeout, type DialogSessionConfig } from './dialogSession';

const CLOSED = false;
const OPEN = true;

const withTimer: DialogSessionConfig = { autoCloseMs: 5000, canWrite: true };
const noTimer: DialogSessionConfig = { autoCloseMs: 0, canWrite: true };

describe('decideDialogTransition — click', () => {
    it('opens a closed session, writes true and starts the auto-close timer', () => {
        expect(decideDialogTransition({ type: 'click' }, CLOSED, withTimer)).toEqual({
            open: true,
            write: true,
            timer: 'start',
        });
    });

    it('starts no timer when auto-close is off', () => {
        expect(decideDialogTransition({ type: 'click' }, CLOSED, noTimer)).toEqual({
            open: true,
            write: true,
            timer: 'keep',
        });
    });

    it('is a no-op on an open session: no write, the running timer keeps its duration', () => {
        expect(decideDialogTransition({ type: 'click' }, OPEN, withTimer)).toEqual({
            open: true,
            write: null,
            timer: 'keep',
        });
    });
});

describe('decideDialogTransition — observe (backend value, including the one at view load)', () => {
    it('true opens a closed session without writing and starts the timer', () => {
        expect(decideDialogTransition({ type: 'observe', value: true }, CLOSED, withTimer)).toEqual({
            open: true,
            write: null,
            timer: 'start',
        });
    });

    it('true on a closed session starts no timer when auto-close is off', () => {
        expect(decideDialogTransition({ type: 'observe', value: true }, CLOSED, noTimer)).toEqual({
            open: true,
            write: null,
            timer: 'keep',
        });
    });

    it('true on an open session (the echo of the own click) changes nothing', () => {
        expect(decideDialogTransition({ type: 'observe', value: true }, OPEN, withTimer)).toEqual({
            open: true,
            write: null,
            timer: 'keep',
        });
    });

    it('false closes an open session without writing (no echo write) and clears the timer', () => {
        expect(decideDialogTransition({ type: 'observe', value: false }, OPEN, withTimer)).toEqual({
            open: false,
            write: null,
            timer: 'clear',
        });
    });

    it('false on a closed session (view load, echo of the own close) writes nothing', () => {
        expect(decideDialogTransition({ type: 'observe', value: false }, CLOSED, withTimer)).toEqual({
            open: false,
            write: null,
            timer: 'keep',
        });
    });

    it.each([1, 0, 'true', 'false', null, undefined, {}])('ignores the non-boolean %j in either state', value => {
        expect(decideDialogTransition({ type: 'observe', value }, CLOSED, withTimer)).toEqual({
            open: false,
            write: null,
            timer: 'keep',
        });
        expect(decideDialogTransition({ type: 'observe', value }, OPEN, withTimer)).toEqual({
            open: true,
            write: null,
            timer: 'keep',
        });
    });
});

describe('decideDialogTransition — canWrite false (no Sitzungs-OID or read-only)', () => {
    const readOnly: DialogSessionConfig = { autoCloseMs: 5000, canWrite: false };

    it('click still opens and starts the timer, but writes nothing', () => {
        expect(decideDialogTransition({ type: 'click' }, CLOSED, readOnly)).toEqual({
            open: true,
            write: null,
            timer: 'start',
        });
    });

    it('close and timer expiry still close and clear the timer, but write nothing', () => {
        const closed = { open: false, write: null, timer: 'clear' };

        expect(decideDialogTransition({ type: 'close' }, OPEN, readOnly)).toEqual(closed);
        expect(decideDialogTransition({ type: 'timer-expired' }, OPEN, readOnly)).toEqual(closed);
    });

    it('the session still follows the state', () => {
        expect(decideDialogTransition({ type: 'observe', value: true }, CLOSED, readOnly).open).toBe(true);
        expect(decideDialogTransition({ type: 'observe', value: false }, OPEN, readOnly).open).toBe(false);
    });
});

describe.each([
    ['close (X, backdrop, Escape)', { type: 'close' } as const],
    ['timer-expired', { type: 'timer-expired' } as const],
])('decideDialogTransition — %s', (_label, event) => {
    it('closes an open session, writes false once and clears the timer', () => {
        expect(decideDialogTransition(event, OPEN, withTimer)).toEqual({
            open: false,
            write: false,
            timer: 'clear',
        });
    });

    it('is a no-op on a closed session', () => {
        expect(decideDialogTransition(event, CLOSED, withTimer)).toEqual({
            open: false,
            write: null,
            timer: 'keep',
        });
    });
});

describe('parseAutoCloseTimeout', () => {
    it.each([0, '', '0', undefined, null])('%j disables auto-close (0)', value => {
        expect(parseAutoCloseTimeout(value)).toBe(0);
    });

    it.each(['true', true])('legacy %j means the 10 s default', value => {
        expect(parseAutoCloseTimeout(value)).toBe(10_000);
    });

    it('legacy values below 60 are seconds', () => {
        expect(parseAutoCloseTimeout(30)).toBe(30_000);
        expect(parseAutoCloseTimeout('5')).toBe(5_000);
    });

    it('values from 60 on are milliseconds', () => {
        expect(parseAutoCloseTimeout(5000)).toBe(5000);
        expect(parseAutoCloseTimeout('60')).toBe(60);
    });

    it('an unparsable value falls back to 1 s', () => {
        expect(parseAutoCloseTimeout('abc')).toBe(1000);
    });
});
