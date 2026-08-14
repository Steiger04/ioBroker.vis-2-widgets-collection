/**
 * Unit tests for the Advanced-JSON sub-key merge analysis (ADR-0030): {@link classifyUserKeys}.
 *
 * @module EchartsCollectionWidget/editor/advancedJsonAnalysis.test
 */
import { describe, expect, it } from 'vitest';

import { classifyUserKeys } from './advancedJsonAnalysis';
import type { UKeyChip } from './advancedJsonAnalysis';
import { X_AXIS_SCAFFOLD_JSON } from './xAxisScaffold';

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

describe('classifyUserKeys — tooltip (partially managed, ADR-0032)', () => {
    it('only NON-GUI subkeys → effective (the template-insert case)', () => {
        const c = clsOf(
            { tooltip: { axisPointer: { type: 'cross' }, backgroundColor: '#fff', padding: 5 } },
            'tooltip',
        );
        expect(c?.cls).toBe('effective');
        expect(c?.managed).toEqual([]);
    });

    it('a non-object tooltip value → ignored (wholly overridden by buildTooltip)', () => {
        expect(clsOf({ tooltip: false }, 'tooltip')?.cls).toBe('ignored');
    });

    it('tooltip.trigger (GUI) alone → ignored', () => {
        const c = clsOf({ tooltip: { trigger: 'axis' } }, 'tooltip');
        expect(c?.cls).toBe('ignored');
        expect(c?.managed).toEqual(['trigger']);
    });

    it('formatter + valueFormatter (both GUI) → ignored', () => {
        const c = clsOf({ tooltip: { formatter: '{b}', valueFormatter: 'x' } }, 'tooltip');
        expect(c?.cls).toBe('ignored');
        expect(c?.managed.sort()).toEqual(['formatter', 'valueFormatter']);
    });

    it('mixed (trigger + axisPointer) → partial, lists trigger', () => {
        const c = clsOf({ tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } } }, 'tooltip');
        expect(c?.cls).toBe('partial');
        expect(c?.managed).toEqual(['trigger']);
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
});

describe('xAxis scaffold audit (ADR-0035)', () => {
    it('is valid JSON and duplicates no GUI-owned key — classifies effective, not partial', () => {
        const json = JSON.parse(X_AXIS_SCAFFOLD_JSON);
        const c = clsOf(json, 'xAxis');
        expect(c?.cls).toBe('effective');
        expect(c?.managed).toEqual([]);
    });
});
