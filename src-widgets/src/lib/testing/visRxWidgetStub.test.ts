/**
 * The one host stub of the dom project: `Generic.t` breaks here as it breaks in vis-2.
 *
 * @module lib/testing/visRxWidgetStub.test
 * @remarks
 * Goes through the real `Generic`, the way production code reaches the host's `t`. A bare
 * `Generic.t` handed on as a callback crashed the host on 2026-11-01 while every stub of
 * the time stayed green.
 */
import { describe, expect, it } from 'vitest';

import Generic from '../../Generic';

describe('the host stub', () => {
    it('throws on an unbound Generic.t, with the error the host shows', () => {
        // Detached on purpose: this is the call that has to break.
        const unbound = Generic.t;

        expect(() => unbound('some_key')).toThrow("Cannot read properties of undefined (reading 'getI18nPrefix')");
    });

    it('returns the key to a direct call', () => {
        expect(Generic.t('some_key')).toBe('some_key');
    });

    it('returns the key to a bound call', () => {
        const bound = Generic.t.bind(Generic);

        expect(bound('some_key')).toBe('some_key');
    });

    it('returns the key and leaves the placeholder arguments alone', () => {
        expect(Generic.t('some_key', 'first', 'second')).toBe('some_key');
    });
});
