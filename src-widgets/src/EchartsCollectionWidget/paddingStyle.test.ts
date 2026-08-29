/**
 * Unit tests for the chart-padding resolver (chart padding spec, `.scratch/chart-padding/`).
 *
 * @module EchartsCollectionWidget/paddingStyle.test
 * @remarks
 * Chart padding is pure CONTAINER CSS around the chart area (never an echarts option) — the
 * resolver is the extracted pure decision function the body applies (view itself untested,
 * project rule). Same contract family as the frame resolver (frameStyle.ts).
 */
import { describe, expect, it } from 'vitest';

import { resolvePaddingSx } from './paddingStyle';

describe('resolvePaddingSx (4-side chart padding, .scratch/chart-padding/)', () => {
    it('emits nothing when all sides are unset or 0 — the pixel-identical default', () => {
        expect(resolvePaddingSx({})).toEqual({});
        expect(resolvePaddingSx({ top: 0, right: 0, bottom: 0, left: 0 })).toEqual({});
        expect(resolvePaddingSx({ top: undefined, right: undefined, bottom: undefined, left: undefined })).toEqual({});
    });

    it('emits only the authored sides as MUI spacing-unit shorthand keys', () => {
        expect(resolvePaddingSx({ top: 2, left: 0.5 })).toEqual({ pt: 2, pl: 0.5 });
        expect(resolvePaddingSx({ bottom: 1 })).toEqual({ pb: 1 });
        // MUI units allow fractional steps (the panel slider steps 0.1).
        expect(resolvePaddingSx({ right: 3.7 })).toEqual({ pr: 3.7 });
    });

    it('coerces rxData string numbers and drops invalid, negative, or NaN values', () => {
        expect(resolvePaddingSx({ top: '2', left: '0.5' })).toEqual({ pt: 2, pl: 0.5 });
        expect(resolvePaddingSx({ top: 'abc', right: Number.NaN })).toEqual({});
        expect(resolvePaddingSx({ top: -1, right: -0.5 })).toEqual({});
        // Empty string is "cleared back to unset", not an invalid CSS value.
        expect(resolvePaddingSx({ top: '', bottom: 4 })).toEqual({ pb: 4 });
    });
});
