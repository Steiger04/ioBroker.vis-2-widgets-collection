import { describe, expect, it } from 'vitest';

import { adoptBackendValue, initLocalValue } from './useOptimisticNumber';

// The pure transitions pin the three documented sync cases (the hook itself is
// a thin React shell around them — useEditorHistory pattern):
// - Init: adopt a backend number only while nothing local exists.
// - Echo: covered by useValueState's ignore window (useValueState.test.ts /
//   useValueState.hook.test.ts pin the decideBackendChange precedence).
// - Non-numeric: a significant backend change dismantles the slider.

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
