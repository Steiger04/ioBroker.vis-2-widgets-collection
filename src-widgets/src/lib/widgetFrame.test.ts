/**
 * The reading of one frame setting from stored data at its seam: the own value after the
 * Rückfall-Regel, the inherited value (Rahmenvorgabe, else the built-in standard) and the value the
 * widget renders.
 *
 * @module lib/widgetFrame.test
 */
import { describe, expect, it } from 'vitest';

import { storedFrameSetting } from './widgetFrame';

describe('storedFrameSetting: one frame setting read from stored data', () => {
    describe('a boolean (noCard, standard off)', () => {
        it('reads an own value over the Rahmenvorgabe', () => {
            expect(storedFrameSetting({ noCard: false }, 'noCard', { noCard: true })).toEqual({
                own: false,
                inherited: true,
                effective: false,
            });
        });

        it('reads an unusable own value as inheriting, as the widget does', () => {
            expect(storedFrameSetting({ noCard: 'yes' }, 'noCard', { noCard: true })).toEqual({
                own: undefined,
                inherited: true,
                effective: true,
            });
        });

        it('inherits the Rahmenvorgabe while unset or cleared', () => {
            expect(storedFrameSetting({}, 'noCard', { noCard: true })).toEqual({
                own: undefined,
                inherited: true,
                effective: true,
            });
            expect(storedFrameSetting({ noCard: null }, 'noCard', { noCard: true }).effective).toBe(true);
        });

        it('inherits the built-in standard without a Rahmenvorgabe', () => {
            expect(storedFrameSetting({}, 'noCard', {})).toEqual({
                own: undefined,
                inherited: false,
                effective: false,
            });
        });
    });

    describe('a number (baseElevation, standard 4, whole numbers 0…24)', () => {
        it('reads an own value over the Rahmenvorgabe — a stored text as its number', () => {
            expect(storedFrameSetting({ baseElevation: 0 }, 'baseElevation', { baseElevation: 8 })).toEqual({
                own: 0,
                inherited: 8,
                effective: 0,
            });
            expect(storedFrameSetting({ baseElevation: '12' }, 'baseElevation', {}).own).toBe(12);
        });

        it('reads an unusable own value as inheriting, as the widget does', () => {
            expect(storedFrameSetting({ baseElevation: 2.5 }, 'baseElevation', { baseElevation: 8 })).toEqual({
                own: undefined,
                inherited: 8,
                effective: 8,
            });
            expect(storedFrameSetting({ baseElevation: 'deep' }, 'baseElevation', {}).own).toBeUndefined();
        });

        it('inherits the Rahmenvorgabe while unset', () => {
            expect(storedFrameSetting({}, 'baseElevation', { baseElevation: 8 })).toEqual({
                own: undefined,
                inherited: 8,
                effective: 8,
            });
        });

        it('inherits the built-in standard without a Rahmenvorgabe', () => {
            expect(storedFrameSetting({ basePadding: '' }, 'basePadding', {})).toEqual({
                own: undefined,
                inherited: 1,
                effective: 1,
            });
            expect(storedFrameSetting({}, 'baseElevation', {}).effective).toBe(4);
        });
    });

    it('changes nothing of the stored data', () => {
        const stored = { noCard: 'yes', baseElevation: 2.5 };
        storedFrameSetting(stored, 'noCard', { noCard: true });
        storedFrameSetting(stored, 'baseElevation', {});
        expect(stored).toEqual({ noCard: 'yes', baseElevation: 2.5 });
    });
});
