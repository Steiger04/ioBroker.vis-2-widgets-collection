/**
 * Unit tests for the Hue-scale conversion helpers.
 *
 * @module Light2CollectionWidget/hueScale.test
 * @remarks
 * The 254 convention (Philips Hue dimmer/saturation channels) must round-trip
 * exactly — both conversion directions are live in the picker write path
 * (toHueScale) and the backend-init path (fromHueScale).
 */
import { describe, expect, it } from 'vitest';

import { fromHueScale, isHueScale, toHueScale } from './hueScale';

describe('isHueScale', () => {
    it('accepts only maxValue 254 as the Hue marker', () => {
        expect(isHueScale(254)).toBe(true);
        // 100 is the editor's fallback for a missing common.max — a normal percent channel.
        expect(isHueScale(100)).toBe(false);
        expect(isHueScale(255)).toBe(false);
        expect(isHueScale(0)).toBe(false);
    });

    it('tolerates absent metadata (unconfigured OID object)', () => {
        expect(isHueScale(undefined)).toBe(false);
        expect(isHueScale(null)).toBe(false);
    });
});

describe('toHueScale (percent → 0-254)', () => {
    it('maps the percent domain onto the Hue domain with rounding', () => {
        expect(toHueScale(0)).toBe(0);
        expect(toHueScale(100)).toBe(254);
        expect(toHueScale(50)).toBe(127);
        // 33 % lands on 83.82 → 84.
        expect(toHueScale(33)).toBe(84);
    });
});

describe('fromHueScale (0-254 → percent)', () => {
    it('maps the Hue domain onto the percent domain with rounding', () => {
        expect(fromHueScale(0)).toBe(0);
        expect(fromHueScale(254)).toBe(100);
        expect(fromHueScale(127)).toBe(50);
        // 200/254 = 78.74 → 79.
        expect(fromHueScale(200)).toBe(79);
    });
});

describe('round-trip', () => {
    it('restores whole percent values through both conversions', () => {
        for (let percent = 0; percent <= 100; percent++) {
            expect(fromHueScale(toHueScale(percent))).toBe(percent);
        }
    });
});
