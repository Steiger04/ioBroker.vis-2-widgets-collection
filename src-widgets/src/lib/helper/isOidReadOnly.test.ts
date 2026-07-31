/**
 * Unit tests for the OID read-only guard.
 *
 * @module lib/helper/isOidReadOnly.test
 */
import { describe, expect, it } from 'vitest';

import isOidReadOnly from './isOidReadOnly';

describe('isOidReadOnly', () => {
    it('is writable when write === true', () => {
        expect(isOidReadOnly({ write: true })).toBe(false);
    });

    it('is read-only when write === false (sensor/indicator)', () => {
        expect(isOidReadOnly({ write: false })).toBe(true);
    });

    it('treats missing write as writable (lenient default)', () => {
        expect(isOidReadOnly({ write: undefined })).toBe(false);
        expect(isOidReadOnly({})).toBe(false);
    });

    it('is read-only when onlyDisplay is true (user-forced or non-writable)', () => {
        expect(isOidReadOnly({ onlyDisplay: true })).toBe(true);
    });

    it('is writable when onlyDisplay is false and write is true', () => {
        expect(isOidReadOnly({ onlyDisplay: false, write: true })).toBe(false);
    });

    it('onlyDisplay wins over a writable OID (forced display-only)', () => {
        expect(isOidReadOnly({ onlyDisplay: true, write: true })).toBe(true);
    });

    it('write === false wins even if onlyDisplay is false', () => {
        expect(isOidReadOnly({ onlyDisplay: false, write: false })).toBe(true);
    });

    it('handles null / undefined data as writable', () => {
        expect(isOidReadOnly(null)).toBe(false);
        expect(isOidReadOnly(undefined)).toBe(false);
    });
});
