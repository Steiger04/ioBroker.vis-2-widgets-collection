/**
 * Unit tests for the Advanced-JSON sub-key merge analysis (ADR-0030): {@link classifyUserKeys}.
 *
 * @module EchartsCollectionWidget/editor/advancedJsonAnalysis.test
 */
import { describe, expect, it } from 'vitest';

import { classifyUserKeys } from './advancedJsonAnalysis';
import type { UKeyChip } from './advancedJsonAnalysis';

const clsOf = (userValue: Record<string, unknown>, key: string): UKeyChip | undefined =>
    classifyUserKeys(userValue).find(c => c.key === key);

describe('classifyUserKeys — non-managed / wholly-managed', () => {
    it('a non-managed key (graphic) → effective', () => {
        const c = clsOf({ graphic: [] }, 'graphic');
        expect(c?.cls).toBe('effective');
        expect(c?.managed).toEqual([]);
    });

    it('a wholly-managed key (grid) → ignored regardless of value', () => {
        expect(clsOf({ grid: { left: 10 } }, 'grid')?.cls).toBe('ignored');
    });

    it('series / tooltip / animation stay wholly ignored (no partial map)', () => {
        expect(clsOf({ series: [{ type: 'line' }] }, 'series')?.cls).toBe('ignored');
        expect(clsOf({ tooltip: { trigger: 'axis' } }, 'tooltip')?.cls).toBe('ignored');
        expect(clsOf({ animation: false }, 'animation')?.cls).toBe('ignored');
    });
});

describe('classifyUserKeys — title (partially managed)', () => {
    it('only NON-GUI subkeys → effective (the template-insert case)', () => {
        const c = clsOf(
            { title: { subtext: 'x', link: '', itemGap: 10, textStyle: { fontFamily: 'Inter' } } },
            'title',
        );
        expect(c?.cls).toBe('effective');
        expect(c?.managed).toEqual([]);
    });

    it('a non-object title value → ignored (wholly overridden by buildTitleOption)', () => {
        expect(clsOf({ title: 'just a string' }, 'title')?.cls).toBe('ignored');
    });

    it('title.text (GUI) alone → ignored', () => {
        const c = clsOf({ title: { text: 'Hi' } }, 'title');
        expect(c?.cls).toBe('ignored');
        expect(c?.managed).toEqual(['text']);
    });

    it('mixed GUI + non-GUI subkeys → partial, lists the managed ones', () => {
        const c = clsOf(
            { title: { subtext: 'x', text: 'Hi', left: 10, textStyle: { fontFamily: 'Inter', color: '#f00' } } },
            'title',
        );
        expect(c?.cls).toBe('partial');
        expect(c?.managed.sort()).toEqual(['left', 'text', 'textStyle.color']);
    });

    it('textStyle.fontFamily is free but textStyle.color is managed → partial', () => {
        const c = clsOf({ title: { textStyle: { fontFamily: 'Inter', color: '#f00' } } }, 'title');
        expect(c?.cls).toBe('partial');
        expect(c?.managed).toEqual(['textStyle.color']);
    });
});

describe('classifyUserKeys — legend (partially managed)', () => {
    it('only NON-GUI subkeys → effective', () => {
        const c = clsOf({ legend: { type: 'scroll', selectedMode: true, selector: true, selected: {} } }, 'legend');
        expect(c?.cls).toBe('effective');
    });

    it('legend.show + legend.data are GUI-owned → ignored when alone', () => {
        const c = clsOf({ legend: { show: false, data: ['a'] } }, 'legend');
        expect(c?.cls).toBe('ignored');
        expect(c?.managed.sort()).toEqual(['data', 'show']);
    });

    it('mixed (icon + selector) → partial', () => {
        const c = clsOf({ legend: { icon: 'circle', selector: true } }, 'legend');
        expect(c?.cls).toBe('partial');
        expect(c?.managed).toEqual(['icon']);
    });
});
