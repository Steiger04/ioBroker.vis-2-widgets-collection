/**
 * The one host stub of the dom project: `Generic.t` breaks here as it breaks in vis-2.
 *
 * @module lib/testing/visRxWidgetStub.test
 * @remarks
 * Goes through the real `Generic`, the way production code reaches the host's `t`. A bare
 * `Generic.t` handed on as a callback crashed the host on 2026-11-01 while every stub of
 * the time stayed green.
 */
import { describe, expect, it, vi } from 'vitest';

import Generic from '../../Generic';
import { translate } from '../translate';

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

    it('survives translate handed on as a callback, the same way the bare Generic.t does not', () => {
        const handedOn: (key: string) => string = translate;

        expect(handedOn('some_key')).toBe('some_key');
    });

    it('sees the same prefix from Generic and from translate', () => {
        const hostT = vi.spyOn(window.visRxWidget, 't');

        Generic.t('some_key');
        translate('some_key');

        const prefixes = hostT.mock.contexts.map((receiver: { getI18nPrefix(): string }) => receiver.getI18nPrefix());
        expect(prefixes).toEqual(['vis_2_widgets_collection_', 'vis_2_widgets_collection_']);
        hostT.mockRestore();
    });
});
