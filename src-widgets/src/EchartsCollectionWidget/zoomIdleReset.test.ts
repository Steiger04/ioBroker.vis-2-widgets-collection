/**
 * Unit tests for the zoom-idle-reset decision core (ADR-0054 parity Build E).
 *
 * @module EchartsCollectionWidget/zoomIdleReset.test
 * @remarks
 * The pure half of the adapter's `resetZoom` option: parsing the select value and deciding what
 * the View should do with its idle timer. The timer itself + the `dispatchAction` reset stay in
 * `EChart` (View layer, untested by project rule).
 */
import { describe, expect, it } from 'vitest';

import { parseZoomIdleSeconds, zoomIdleAction, ZOOM_IDLE_SECONDS } from './zoomIdleReset';

describe('parseZoomIdleSeconds', () => {
    it('parses the select values (strings) and numbers', () => {
        expect(parseZoomIdleSeconds('10')).toBe(10);
        expect(parseZoomIdleSeconds('1800')).toBe(1800);
        expect(parseZoomIdleSeconds(30)).toBe(30);
    });

    it("treats '', undefined and null as OFF (undefined)", () => {
        expect(parseZoomIdleSeconds('')).toBeUndefined();
        expect(parseZoomIdleSeconds(undefined)).toBeUndefined();
        expect(parseZoomIdleSeconds(null)).toBeUndefined();
    });

    it('rejects non-positive and garbage values', () => {
        expect(parseZoomIdleSeconds('0')).toBeUndefined();
        expect(parseZoomIdleSeconds(-10)).toBeUndefined();
        expect(parseZoomIdleSeconds('soon')).toBeUndefined();
        expect(parseZoomIdleSeconds(NaN)).toBeUndefined();
    });

    it('carries the adapter select ladder verbatim (10 s … 30 min)', () => {
        expect(ZOOM_IDLE_SECONDS).toEqual([10, 15, 30, 60, 90, 120, 180, 300, 600, 1200, 1800]);
    });
});

describe('zoomIdleAction — what the View does with its timer', () => {
    it('does nothing when the config is off, whatever the zoom state', () => {
        expect(zoomIdleAction(undefined, true)).toEqual({ type: 'none' });
        expect(zoomIdleAction(undefined, false)).toEqual({ type: 'none' });
    });

    it('arms the timer (seconds → ms) when the user has zoomed', () => {
        expect(zoomIdleAction(10, true)).toEqual({ type: 'arm', ms: 10_000 });
        expect(zoomIdleAction(1800, true)).toEqual({ type: 'arm', ms: 1_800_000 });
    });

    it('clears a running timer when the chart is back at the full window', () => {
        expect(zoomIdleAction(10, false)).toEqual({ type: 'clear' });
    });
});
