import { describe, expect, it } from 'vitest';

import { adoptBackendValue, initLocalValue, rebindLocalValue } from './useOptimisticNumber';

// The pure transitions pin the documented sync cases (the hook itself is
// a thin React shell around them — useEditorHistory pattern):
// - Init: adopt a backend number only while nothing local exists.
// - Echo: covered by useValueState's ignore window (useValueState.test.ts /
//   useValueState.hook.test.ts pin the decideBackendChange precedence).
// - Non-numeric: a Fremdänderung to a non-numeric value dismantles the slider.
// - Rebind: a changed OID binding drops the local value for the new OID's.

describe('initLocalValue', () => {
    it('adopts a backend number while no local value exists', () => {
        expect(initLocalValue(undefined, 42)).toBe(42);
    });

    it('keeps the local value once one exists', () => {
        expect(initLocalValue(7, 42)).toBe(7);
    });

    it('ignores non-numeric backend values', () => {
        expect(initLocalValue(undefined, '42')).toBeUndefined();
        expect(initLocalValue(undefined, null)).toBeUndefined();
        expect(initLocalValue(undefined, undefined)).toBeUndefined();
    });

    it('keeps undefined when both sides are unset', () => {
        expect(initLocalValue(undefined, undefined)).toBeUndefined();
    });
});

describe('adoptBackendValue', () => {
    it('adopts a backend number', () => {
        expect(adoptBackendValue(42)).toBe(42);
        expect(adoptBackendValue(-3.5)).toBe(-3.5);
    });

    it('dismantles on every non-numeric value', () => {
        expect(adoptBackendValue('42')).toBeUndefined();
        expect(adoptBackendValue(true)).toBeUndefined();
        expect(adoptBackendValue(null)).toBeUndefined();
        expect(adoptBackendValue(undefined)).toBeUndefined();
    });
});

describe('rebindLocalValue', () => {
    it('keeps the local value while the binding is unchanged', () => {
        expect(rebindLocalValue(0.2, 0.7, 'a.0.x', 'a.0.x')).toBe(0.2);
    });

    it('drops the local value for the new OID value on a rebind — even a sub-unit apart', () => {
        expect(rebindLocalValue(0.2, 0.45, 'a.0.x', 'a.0.y')).toBe(0.45);
    });

    it('drops to undefined while the new OID has no numeric value yet (Init adopts it later)', () => {
        expect(rebindLocalValue(0.2, undefined, 'a.0.x', 'a.0.y')).toBeUndefined();
        expect(rebindLocalValue(0.2, 'on', 'a.0.x', 'a.0.y')).toBeUndefined();
    });

    it('treats binding and unbinding as a rebind', () => {
        expect(rebindLocalValue(0.2, undefined, 'a.0.x', undefined)).toBeUndefined();
        expect(rebindLocalValue(undefined, 0.7, undefined, 'a.0.y')).toBe(0.7);
    });
});
