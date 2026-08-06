/**
 * useFloatingPanel — window-geometry math + persistence (ADR-0020 addendum).
 *
 * @module hooks/useFloatingPanel.test
 */
import { beforeEach, describe, expect, it } from 'vitest';

import {
    clampGeometry,
    clampHeight,
    clampPosition,
    clampWidth,
    maxPanelHeight,
    maxPanelWidth,
    PANEL_DEFAULT_W,
    PANEL_MIN_H,
    PANEL_MIN_W,
    readStoredGeometry,
    resizeGeometry,
    storeGeometry,
    VIEWPORT_MARGIN,
} from './useFloatingPanel';

const KEY = 'vis-2-widgets-collection:theme-studio:geometry';
const VP = { w: 1000, h: 800 };
const START = { x: 100, y: 50, w: 380, h: 400 };

describe('size clamps', () => {
    it('passes an in-range size through unchanged (rounded)', () => {
        expect(clampWidth(440, 1000)).toBe(440);
        expect(clampWidth(440.6, 1000)).toBe(441);
        expect(clampHeight(500, 800)).toBe(500);
    });

    it('floors at the minimum', () => {
        expect(clampWidth(100, 1000)).toBe(PANEL_MIN_W);
        expect(clampWidth(0, 1000)).toBe(PANEL_MIN_W);
        expect(clampHeight(100, 800)).toBe(PANEL_MIN_H);
    });

    it('caps at viewport − 2×margin (dynamic ceiling, no fixed cap)', () => {
        expect(clampWidth(2000, 1000)).toBe(1000 - 2 * VIEWPORT_MARGIN);
        expect(clampHeight(2000, 800)).toBe(800 - 2 * VIEWPORT_MARGIN);
    });

    it('stays total on degenerate (tiny) viewports: the minimum wins', () => {
        expect(clampWidth(440, 300)).toBe(PANEL_MIN_W);
        expect(maxPanelWidth(300)).toBe(PANEL_MIN_W);
        expect(maxPanelHeight(200)).toBe(PANEL_MIN_H);
    });
});

describe('clampPosition', () => {
    it('keeps the whole rectangle on-screen', () => {
        expect(clampPosition(100, 50, 380, 400, VP)).toEqual({ x: 100, y: 50 });
        expect(clampPosition(900, 700, 380, 400, VP)).toEqual({ x: 620, y: 400 });
        expect(clampPosition(-10, -20, 380, 400, VP)).toEqual({ x: 0, y: 0 });
    });
});

describe('resizeGeometry', () => {
    it('e grip: grows rightward, x anchored', () => {
        expect(resizeGeometry(START, 'e', 40, 0, VP)).toEqual({ x: 100, y: 50, w: 420, h: 400 });
    });

    it('e grip: the edge stops at the viewport boundary', () => {
        // 380 + 2000 requested, but x + w may not exceed the viewport width.
        expect(resizeGeometry(START, 'e', 2000, 0, VP)).toEqual({ x: 100, y: 50, w: 900, h: 400 });
    });

    it('w grip: grows leftward, the right edge stays put', () => {
        expect(resizeGeometry(START, 'w', -40, 0, VP)).toEqual({ x: 60, y: 50, w: 420, h: 400 });
    });

    it('w grip: stops at the left boundary (x never goes negative)', () => {
        expect(resizeGeometry(START, 'w', -2000, 0, VP)).toEqual({ x: 0, y: 50, w: 480, h: 400 });
    });

    it('w grip: the anchor beats the delta at the minimum (right edge still fixed)', () => {
        // 380 − 100 = 280 requested → floored to 320; x re-anchors to right − 320.
        expect(resizeGeometry(START, 'w', 100, 0, VP)).toEqual({ x: 160, y: 50, w: 320, h: 400 });
    });

    it('s grip: grows downward, y anchored; minimum keeps the top anchored', () => {
        expect(resizeGeometry(START, 's', 30, 0, VP).h).toBe(400);
        expect(resizeGeometry(START, 's', 0, 30, VP)).toEqual({ x: 100, y: 50, w: 380, h: 430 });
        expect(resizeGeometry(START, 's', 0, -1000, VP)).toEqual({ x: 100, y: 50, w: 380, h: PANEL_MIN_H });
    });

    it('n grip: grows upward, the bottom edge stays put', () => {
        expect(resizeGeometry(START, 'n', 0, -30, VP)).toEqual({ x: 100, y: 20, w: 380, h: 430 });
    });

    it('n grip: stops at the top boundary (y never goes negative)', () => {
        expect(resizeGeometry(START, 'n', 0, -2000, VP)).toEqual({ x: 100, y: 0, w: 380, h: 450 });
    });

    it('corners drive both dimensions with both anchors', () => {
        expect(resizeGeometry(START, 'nw', -40, -30, VP)).toEqual({ x: 60, y: 20, w: 420, h: 430 });
        expect(resizeGeometry(START, 'se', 40, 30, VP)).toEqual({ x: 100, y: 50, w: 420, h: 430 });
        expect(resizeGeometry(START, 'ne', 40, -30, VP)).toEqual({ x: 100, y: 20, w: 420, h: 430 });
        expect(resizeGeometry(START, 'sw', -40, 30, VP)).toEqual({ x: 60, y: 50, w: 420, h: 430 });
    });
});

describe('clampGeometry (intent → applied)', () => {
    it('clamps size first, then position against the clamped size', () => {
        expect(clampGeometry({ x: 1500, y: 700, w: 1200, h: 900 }, 600, VP)).toEqual({
            x: 1000 - 952,
            y: 800 - 752,
            w: 952,
            h: 752,
        });
    });

    it('passes Auto height (h: null) through and position-clamps with the measured height', () => {
        expect(clampGeometry({ x: 900, y: 500, w: 380, h: null }, 300, VP)).toEqual({
            x: 620,
            y: 500,
            w: 380,
            h: null,
        });
    });

    it('is the identity for an intent that fits (window re-grown restores the intent)', () => {
        const intent = { x: 400, y: 100, w: 500, h: 600 };
        expect(clampGeometry(intent, 300, VP)).toEqual(intent);
    });
});

describe('geometry persistence', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('round-trips a geometry with fixed and Auto height', () => {
        storeGeometry(KEY, { x: 40, y: 24, w: 500, h: 620 });
        expect(readStoredGeometry(KEY)).toEqual({ x: 40, y: 24, w: 500, h: 620 });
        storeGeometry(KEY, { x: 40, y: 24, w: 380, h: null });
        expect(readStoredGeometry(KEY)).toEqual({ x: 40, y: 24, w: 380, h: null });
    });

    it('stores the intent verbatim — no clamping on write or read', () => {
        // Off-viewport intent (stored on a larger monitor) must survive the round-trip.
        storeGeometry(KEY, { x: 5000, y: 3000, w: 1200, h: null });
        expect(readStoredGeometry(KEY)).toEqual({ x: 5000, y: 3000, w: 1200, h: null });
    });

    it('returns null when nothing is stored', () => {
        expect(readStoredGeometry(KEY)).toBeNull();
    });

    it('rejects invalid stored values', () => {
        const bad = [
            'abc',
            '42',
            'null',
            '{}',
            '{"x":1,"y":2,"w":3}', // h missing
            '{"x":"1","y":2,"w":300,"h":null}', // wrong types
            '{"x":1,"y":2,"w":0,"h":null}', // w <= 0
            '{"x":1,"y":2,"w":300,"h":-5}', // h <= 0
            '{"x":1,"y":2,"w":300,"h":"auto"}', // h wrong type
        ];
        for (const raw of bad) {
            localStorage.setItem(KEY, raw);
            expect(readStoredGeometry(KEY), raw).toBeNull();
        }
    });

    it('never throws when storage is unavailable', () => {
        const broken = {
            getItem: () => {
                throw new Error('denied');
            },
            setItem: () => {
                throw new Error('denied');
            },
        } as unknown as Storage;
        expect(readStoredGeometry(KEY, broken)).toBeNull();
        expect(() => storeGeometry(KEY, { x: 0, y: 0, w: 380, h: null }, broken)).not.toThrow();
    });

    it('exposes a sane default width', () => {
        expect(PANEL_DEFAULT_W).toBeGreaterThanOrEqual(PANEL_MIN_W);
        expect(PANEL_DEFAULT_W).toBeLessThanOrEqual(maxPanelWidth(1024));
    });
});
