/**
 * Decision table for the write-target rule (Schreibziel, ADR-0090).
 *
 * @module lib/writeTarget.test
 */
import { describe, expect, it } from 'vitest';

import { resolveWriteTarget, writeTargetDeniesWrite } from './writeTarget';

// Typical control-ID setup: a read-only status OID plus a writable command state.
const STATUS_READ_ONLY = { _id: 'zigbee.0.lamp.mode_status', write: false };
const COMMAND_WRITABLE = { _id: 'zigbee.0.lamp.mode_set', write: true };

describe('resolveWriteTarget — which OID a selection writes', () => {
    it('writes the main OID when no control ID is set', () => {
        expect(resolveWriteTarget({ oidObject: STATUS_READ_ONLY }).idName).toBe('oid');
    });

    it('writes the control ID once it is resolved', () => {
        expect(resolveWriteTarget({ oidObject: STATUS_READ_ONLY, cidObject: COMMAND_WRITABLE }).idName).toBe('cid');
    });

    it('stays on the main OID while the control-ID object is unresolved (no _id)', () => {
        expect(resolveWriteTarget({ oidObject: STATUS_READ_ONLY, cidObject: { write: true } }).idName).toBe('oid');
    });
});

describe('resolveWriteTarget — the lock follows the write target', () => {
    const STATUS = 'zigbee.0.lamp.mode_status';
    const COMMAND = 'zigbee.0.lamp.mode_set';

    it.each([
        // Without a control ID: the main OID's writability decides.
        { row: 'main writable', data: { oidObject: { _id: STATUS, write: true } }, readOnly: false },
        { row: 'main write missing (lenient)', data: { oidObject: { _id: STATUS } }, readOnly: false },
        { row: 'main read-only', data: { oidObject: { _id: STATUS, write: false } }, readOnly: true },
        {
            row: 'main writable + onlyDisplay',
            data: { onlyDisplay: true, oidObject: { _id: STATUS, write: true } },
            readOnly: true,
        },
        {
            row: 'main write missing + onlyDisplay',
            data: { onlyDisplay: true, oidObject: { _id: STATUS } },
            readOnly: true,
        },
        {
            row: 'main read-only + onlyDisplay',
            data: { onlyDisplay: true, oidObject: { _id: STATUS, write: false } },
            readOnly: true,
        },
        {
            row: 'main read-only + onlyDisplay off',
            data: { onlyDisplay: false, oidObject: { _id: STATUS, write: false } },
            readOnly: true,
        },
        // With a control ID: only the control ID's writability decides.
        {
            row: 'read-only status + writable control ID',
            data: { oidObject: { _id: STATUS, write: false }, cidObject: { _id: COMMAND, write: true } },
            readOnly: false,
        },
        {
            row: 'read-only status + control ID write missing',
            data: { oidObject: { _id: STATUS, write: false }, cidObject: { _id: COMMAND } },
            readOnly: false,
        },
        {
            row: 'writable status + read-only control ID',
            data: { oidObject: { _id: STATUS, write: true }, cidObject: { _id: COMMAND, write: false } },
            readOnly: true,
        },
        {
            row: 'writable control ID + onlyDisplay',
            data: { onlyDisplay: true, oidObject: { _id: STATUS }, cidObject: { _id: COMMAND, write: true } },
            readOnly: true,
        },
        {
            row: 'control ID write missing + onlyDisplay',
            data: { onlyDisplay: true, oidObject: { _id: STATUS }, cidObject: { _id: COMMAND } },
            readOnly: true,
        },
        {
            row: 'read-only control ID + onlyDisplay',
            data: { onlyDisplay: true, oidObject: { _id: STATUS }, cidObject: { _id: COMMAND, write: false } },
            readOnly: true,
        },
        // Nothing bound yet: only onlyDisplay can lock.
        { row: 'nothing bound', data: {}, readOnly: false },
        { row: 'nothing bound + onlyDisplay', data: { onlyDisplay: true }, readOnly: true },
    ])('$row → readOnly $readOnly', ({ data, readOnly }) => {
        expect(resolveWriteTarget(data).readOnly).toBe(readOnly);
    });

    it('reads writability from the target object, so a leaked root write cannot lock it', () => {
        // Stored widgets may carry a root `write` leaked by the former control-ID handler.
        const data = { write: false, oidObject: { _id: STATUS, write: true } };
        expect(resolveWriteTarget(data).readOnly).toBe(false);
    });
});

describe('writeTargetDeniesWrite — the editor suggestion and toggle lock follow the write target', () => {
    const STATUS = 'zigbee.0.lamp.mode_status';
    const COMMAND = 'zigbee.0.lamp.mode_set';

    it.each([
        { row: 'main read-only', data: { oidObject: { _id: STATUS, write: false } }, suggestion: true },
        { row: 'main writable', data: { oidObject: { _id: STATUS, write: true } }, suggestion: false },
        { row: 'main write missing', data: { oidObject: { _id: STATUS } }, suggestion: false },
        {
            row: 'read-only status + writable control ID',
            data: { oidObject: { _id: STATUS, write: false }, cidObject: { _id: COMMAND, write: true } },
            suggestion: false,
        },
        {
            row: 'writable status + read-only control ID',
            data: { oidObject: { _id: STATUS, write: true }, cidObject: { _id: COMMAND, write: false } },
            suggestion: true,
        },
        {
            row: 'read-only status + control ID write missing',
            data: { oidObject: { _id: STATUS, write: false }, cidObject: { _id: COMMAND } },
            suggestion: false,
        },
        {
            row: 'read-only status + unresolved control ID',
            data: { oidObject: { _id: STATUS, write: false }, cidObject: { write: true } },
            suggestion: true,
        },
        { row: 'nothing bound', data: {}, suggestion: false },
    ])('$row → $suggestion', ({ data, suggestion }) => {
        expect(writeTargetDeniesWrite(data)).toBe(suggestion);
    });

    it('derives the suggestion from writability alone, not from the current onlyDisplay', () => {
        expect(writeTargetDeniesWrite({ onlyDisplay: true, oidObject: { _id: STATUS, write: true } })).toBe(false);
    });
});
