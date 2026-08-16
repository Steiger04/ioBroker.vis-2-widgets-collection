/**
 * Unit tests for the state-aware axis-raw merge analysis (ADR-0037).
 *
 * @module EchartsCollectionWidget/editor/axisRawAnalysis.test
 */
import { describe, expect, it } from 'vitest';

import { classifyAxisKeys, type AxisKeyChip } from './axisRawAnalysis';
import type { EchartsAxisConfig } from '../../types/field-definitions/echarts-fields';

const chip = (raw: string, axis: EchartsAxisConfig, seriesColor?: string, seriesName?: string): AxisKeyChip[] =>
    classifyAxisKeys(JSON.parse(raw) as Record<string, unknown>, { axis, seriesColor, seriesName });

describe('classifyAxisKeys — unconditional free keys', () => {
    it('builder-uncovered keys are effective regardless of card state (the feature promise)', () => {
        const res = chip('{ "logBase": 2, "inverse": true, "maxInterval": 25 }', {
            name: 'kW',
            min: 0,
            max: 100,
            format: '{value} kW',
            color: '#f00',
            splitNumber: 5,
            nameLocation: 'middle',
        });
        expect(res).toEqual([
            { key: 'logBase', cls: 'effective', managed: [] },
            { key: 'inverse', cls: 'effective', managed: [] },
            { key: 'maxInterval', cls: 'effective', managed: [] },
        ]);
    });

    it('font stacks stay effective even with an axis colour set (only .color is managed)', () => {
        const res = chip('{ "axisLabel": { "fontFamily": "mono", "fontSize": 14 } }', { color: '#f00' });
        expect(res[0]).toEqual({ key: 'axisLabel', cls: 'effective', managed: [] });
    });
});

describe('classifyAxisKeys — always-managed keys', () => {
    it('type/position/offset/alignTicks/nameLocation/nameGap are ignored on any card', () => {
        const raw =
            '{ "type": "log", "position": "right", "offset": 80, "alignTicks": true, "nameLocation": "end", "nameGap": 30 }';
        const res = chip(raw, {});
        for (const c of res) {
            expect(c.cls).toBe('ignored');
        }
    });

    it('splitLine.show / axisTick.show are managed while their style siblings are free', () => {
        const res = chip('{ "splitLine": { "show": false, "lineStyle": { "type": "dashed" } } }', {});
        expect(res[0].cls).toBe('partial');
        expect(res[0].managed).toEqual(['splitLine.show']);
        const tick = chip('{ "axisTick": { "show": true, "length": 8, "inside": true } }', {});
        expect(tick[0].cls).toBe('partial');
        expect(tick[0].managed).toEqual(['axisTick.show']);
    });

    it('a wholly-managed object (only managed leaves) is ignored', () => {
        const res = chip('{ "splitLine": { "show": false } }', {});
        expect(res[0].cls).toBe('ignored');
    });
});

describe('classifyAxisKeys — conditional keys are STATE-aware', () => {
    it('min is effective when the card leaves it unset, ignored once the card sets it', () => {
        expect(chip('{ "min": 0 }', {})[0].cls).toBe('effective');
        expect(chip('{ "min": 0 }', { min: 5 })[0].cls).toBe('ignored');
    });

    it('axisLabel.formatter follows the format field', () => {
        expect(chip('{ "axisLabel": { "formatter": "{value} W" } }', {})[0].cls).toBe('effective');
        expect(chip('{ "axisLabel": { "formatter": "{value} W" } }', { format: '{value} kW' })[0].cls).toBe('ignored');
    });

    it('the colour trio follows the card colour OR the inherited series colour', () => {
        // No colour anywhere → the whole axisLabel/axisLine/nameTextStyle objects are free.
        expect(chip('{ "axisLabel": { "color": "#333", "fontFamily": "mono" } }', {})[0].cls).toBe('effective');
        // Explicit axis colour → .color leaves managed, fontFamily free → partial.
        const withColor = chip('{ "axisLabel": { "color": "#333", "fontFamily": "mono" } }', { color: '#f00' });
        expect(withColor[0].cls).toBe('partial');
        expect(withColor[0].managed).toEqual(['axisLabel.color']);
        // Inherited bound-series colour drives the same emits (ADR-0018 runtime default).
        const inherited = chip('{ "axisLabel": { "color": "#333" } }', {}, '#abc');
        expect(inherited[0].cls).toBe('ignored');
    });

    it('axisLine.lineStyle.depth: .color is managed when coloured, .type stays free', () => {
        const res = chip('{ "axisLine": { "lineStyle": { "type": "dashed", "color": "#333" } } }', { color: '#f00' });
        expect(res[0].cls).toBe('partial');
        expect(res[0].managed).toEqual(['axisLine.lineStyle.color']);
        // Without a colour the lineStyle object is wholly free.
        expect(chip('{ "axisLine": { "lineStyle": { "type": "dashed", "color": "#333" } } }', {})[0].cls).toBe(
            'effective',
        );
    });

    it('name follows explicit-OR-inherited ("" counts as unset)', () => {
        expect(chip('{ "name": "kW" }', {})[0].cls).toBe('effective');
        expect(chip('{ "name": "kW" }', {}, undefined, 'Power')[0].cls).toBe('ignored');
        expect(chip('{ "name": "kW" }', { name: 'W' })[0].cls).toBe('ignored');
        expect(chip('{ "name": "kW" }', { name: '' })[0].cls).toBe('effective');
    });

    it('scale/splitNumber/minInterval/nameRotate follow their card fields', () => {
        expect(
            chip('{ "scale": true, "splitNumber": 4, "minInterval": 2, "nameRotate": 90 }', {}).every(
                c => c.cls === 'effective',
            ),
        ).toBe(true);
        expect(
            chip('{ "scale": true, "splitNumber": 4, "minInterval": 2, "nameRotate": 90 }', {
                scale: true,
                splitNumber: 5,
                minInterval: 1,
                nameRotate: 45,
            }).every(c => c.cls === 'ignored'),
        ).toBe(true);
    });

    it('scalar value on a managed key is wholly overridden', () => {
        expect(chip('{ "axisLabel": "broken" }', { format: '{value} kW' })[0].cls).toBe('ignored');
    });
});
