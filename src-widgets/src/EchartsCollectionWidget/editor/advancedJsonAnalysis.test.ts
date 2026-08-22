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

    it('series / animation stay wholly ignored (no partial map)', () => {
        expect(clsOf({ series: [{ type: 'line' }] }, 'series')?.cls).toBe('ignored');
        expect(clsOf({ animation: false }, 'animation')?.cls).toBe('ignored');
    });
});

describe('classifyUserKeys — title/legend/tooltip (wholly managed since ADR-0044)', () => {
    // Each of the three components is configured in its own section (carrying a raw escape
    // hatch folded UNDER its builder); a U attempt is STRIPPED in mergeOptionForEcharts before
    // the merge — no subkey ever merges through, so every value classifies ignored.
    it('title (any subkeys, even wholly free ones) → ignored', () => {
        expect(clsOf({ title: { subtext: 'x', itemGap: 10 } }, 'title')?.cls).toBe('ignored');
        expect(clsOf({ title: 'just a string' }, 'title')?.cls).toBe('ignored');
    });

    it('legend (any subkeys) → ignored', () => {
        expect(clsOf({ legend: { type: 'scroll', selector: true } }, 'legend')?.cls).toBe('ignored');
    });

    it('tooltip (any subkeys) → ignored', () => {
        expect(clsOf({ tooltip: { axisPointer: { type: 'cross' }, padding: 5 } }, 'tooltip')?.cls).toBe('ignored');
        expect(clsOf({ tooltip: false }, 'tooltip')?.cls).toBe('ignored');
    });
});

describe('classifyUserKeys — xAxis (partially managed, ADR-0035)', () => {
    it('only NON-GUI subkeys → effective (the scaffold-insert case)', () => {
        const c = clsOf(
            { xAxis: { position: 'top', inverse: true, axisLabel: { hideOverlap: true }, minorTick: { show: true } } },
            'xAxis',
        );
        expect(c?.cls).toBe('effective');
        expect(c?.managed).toEqual([]);
    });

    it('a non-object xAxis value → ignored (wholly overridden by buildXAxisEntry)', () => {
        expect(clsOf({ xAxis: 'category' }, 'xAxis')?.cls).toBe('ignored');
    });

    it('type/name/format alone → ignored (GUI-owned)', () => {
        const c = clsOf({ xAxis: { type: 'time', name: 'Zeit', nameGap: 30 } }, 'xAxis');
        expect(c?.cls).toBe('ignored');
        expect(c?.managed.sort()).toEqual(['name', 'nameGap', 'type']);
    });

    it('nested GUI-owned show keys resolve (splitLine.show / axisTick.show are leaves)', () => {
        const c = clsOf({ xAxis: { splitLine: { show: true }, axisTick: { show: false } } }, 'xAxis');
        expect(c?.cls).toBe('ignored');
        expect(c?.managed.sort()).toEqual(['axisTick.show', 'splitLine.show']);
    });

    it('offset alone → ignored (GUI-owned since the X-Karte Versatz field)', () => {
        const c = clsOf({ xAxis: { offset: 24 } }, 'xAxis');
        expect(c?.cls).toBe('ignored');
        expect(c?.managed).toEqual(['offset']);
    });

    it('axisLine.onZero alone → ignored (conditionally GUI-owned: emitted whenever an offset is set)', () => {
        const c = clsOf({ xAxis: { axisLine: { onZero: false } } }, 'xAxis');
        expect(c?.cls).toBe('ignored');
        expect(c?.managed).toEqual(['axisLine.onZero']);
    });

    it('mixed (splitLine.show + splitLine.lineStyle + position) → partial, lists the eaten subkeys', () => {
        const c = clsOf({ xAxis: { position: 'top', splitLine: { show: true, lineStyle: { width: 2 } } } }, 'xAxis');
        expect(c?.cls).toBe('partial');
        expect(c?.managed).toEqual(['splitLine.show']);
    });

    it('axisLine.lineStyle width/type are free leaves (depth 3) → effective — the scaffold carries both', () => {
        const c = clsOf({ xAxis: { axisLine: { lineStyle: { width: 2, type: 'dashed' } } } }, 'xAxis');
        expect(c?.cls).toBe('effective');
        expect(c?.managed).toEqual([]);
    });

    it('axisLine.lineStyle.color alone → ignored (the GUI axis colour eats it, ADR-0036 refinement)', () => {
        const c = clsOf({ xAxis: { axisLine: { lineStyle: { color: '#f00' } } } }, 'xAxis');
        expect(c?.cls).toBe('ignored');
        expect(c?.managed).toEqual(['axisLine.lineStyle.color']);
    });

    it('axisLine.lineStyle colour + width mixed → partial, lists only the colour leaf', () => {
        const c = clsOf({ xAxis: { axisLine: { lineStyle: { color: '#f00', width: 3 } } } }, 'xAxis');
        expect(c?.cls).toBe('partial');
        expect(c?.managed).toEqual(['axisLine.lineStyle.color']);
    });

    it('splitNumber/minInterval/nameRotate are GUI-owned (the X-Karte knobs)', () => {
        const c = clsOf({ xAxis: { splitNumber: 4, minInterval: 60000, nameRotate: 30 } }, 'xAxis');
        expect(c?.cls).toBe('ignored');
        expect(c?.managed.sort()).toEqual(['minInterval', 'nameRotate', 'splitNumber']);
    });

    it('axisLabel.rotate is GUI-owned (the label-rotation slider)', () => {
        const c = clsOf({ xAxis: { axisLabel: { rotate: 45, hideOverlap: true } } }, 'xAxis');
        expect(c?.cls).toBe('partial');
        expect(c?.managed).toEqual(['axisLabel.rotate']);
    });
});

// The xAxis scaffold audit (ADR-0035) moved with the scaffold's retirement into
// advancedJsonTemplates.test.ts — the ADR-0040 catalog audits cover the xAxis snippets.
