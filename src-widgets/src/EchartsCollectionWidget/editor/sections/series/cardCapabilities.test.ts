/**
 * The series card's capability resolution (ADR-0100 decision 2/6) — Kartenquelle × family
 * traits × series count → tabs, actions, Daten body, Basis gates.
 *
 * @module EchartsCollectionWidget/editor/sections/series/cardCapabilities.test
 */
import { describe, expect, it } from 'vitest';

import { CARD_TAB_ORDER, resolveCardCapabilities, type SeriesCardTraits } from './cardCapabilities';

// The two profile shapes (the live values sit in the family editorials; families/editorial.test pins them).
const cartesian: SeriesCardTraits = { tabs: CARD_TAB_ORDER, type: true, color: true, axis: true, ring: false };
const ring: SeriesCardTraits = { tabs: ['json', 'basis', 'daten'], type: false, color: false, axis: false, ring: true };

describe('resolveCardCapabilities', () => {
    it('Verlauf × cartesian: five tabs, fetching Daten, move/duplicate/remove', () => {
        expect(resolveCardCapabilities('history', cartesian, 2)).toEqual({
            tabs: ['basis', 'daten', 'stil', 'format', 'json'],
            actions: ['move', 'duplicate', 'remove'],
            dataTab: 'fetch',
            showType: true,
            showColor: true,
            showAxis: true,
            ring: false,
        });
    });

    it('JSON × cartesian: transform-only Daten, hide is the only action', () => {
        const caps = resolveCardCapabilities('json', cartesian, 3);
        expect(caps.dataTab).toBe('transform');
        expect(caps.actions).toEqual(['hide']);
        expect(caps.tabs).toEqual(CARD_TAB_ORDER);
    });

    it('Tabelle × cartesian: transform-only Daten, move + remove', () => {
        const caps = resolveCardCapabilities('table', cartesian, 2);
        expect(caps.dataTab).toBe('transform');
        expect(caps.actions).toEqual(['move', 'remove']);
    });

    it('the type override shows from two series on — in every source', () => {
        for (const source of ['history', 'json', 'table'] as const) {
            expect(resolveCardCapabilities(source, cartesian, 1).showType).toBe(false);
            expect(resolveCardCapabilities(source, cartesian, 2).showType).toBe(true);
        }
    });

    it('the ring traits: three tabs in the fixed order, no type (even with many series), no colour, no axis', () => {
        const caps = resolveCardCapabilities('table', ring, 5);
        expect(caps.tabs).toEqual(['basis', 'daten', 'json']);
        expect(caps.showType).toBe(false);
        expect(caps.showColor).toBe(false);
        expect(caps.showAxis).toBe(false);
        expect(caps.ring).toBe(true);
    });

    it('returns a fresh actions array (callers may not mutate the source table)', () => {
        const a = resolveCardCapabilities('history', cartesian, 2);
        a.actions.push('hide');
        expect(resolveCardCapabilities('history', cartesian, 2).actions).toEqual(['move', 'duplicate', 'remove']);
    });
});
