/**
 * Unit tests for the title/legend presentation builders (ADR-0009 + ADR-0021):
 * {@link buildTitleOption}, {@link buildLegend}, {@link normalizeLegendPos}, {@link decodeLegendConfig}.
 *
 * @module EchartsCollectionWidget/presentation.test
 */
import { describe, expect, it } from 'vitest';

import { encodeBlob } from '../lib/encoding';
import {
    buildLegend,
    buildTitleOption,
    decodeLegendConfig,
    normalizeLegendPos,
    toPresentationConfig,
    type TitleOptionInput,
} from './presentation';
import type { PresentationConfig } from './optionBuilders/types';

/** Run buildTitleOption on an empty option object and return the resulting `title`. */
const title = (opts: TitleOptionInput): Record<string, unknown> => {
    const merged: Record<string, unknown> = {};
    buildTitleOption(merged, opts);
    return merged.title as Record<string, unknown>;
};

describe('buildTitleOption — placement', () => {
    describe('top row', () => {
        it('topLeft no offset → left edge', () => {
            expect(title({ text: 'T', titlePos: 'topLeft', dx: 0, dy: 0 })).toEqual({
                text: 'T',
                left: 'left',
                top: 'top',
            });
        });
        it('topCenter → center anchor', () => {
            expect(title({ text: 'T', titlePos: 'topCenter', dx: 0, dy: 0 })).toEqual({
                text: 'T',
                left: 'center',
                top: 'top',
            });
        });
        it('topRight → right anchor', () => {
            expect(title({ text: 'T', titlePos: 'topRight', dx: 0, dy: 0 })).toEqual({
                text: 'T',
                left: 'right',
                top: 'top',
            });
        });
    });

    describe('bottom row (ADR-0021)', () => {
        it('bottomLeft → left + bottom edge', () => {
            expect(title({ text: 'T', titlePos: 'bottomLeft', dx: 0, dy: 0 })).toEqual({
                text: 'T',
                left: 'left',
                bottom: 'bottom',
            });
        });
        it('bottomCenter → bottom center', () => {
            expect(title({ text: 'T', titlePos: 'bottomCenter', dx: 0, dy: 0 })).toEqual({
                text: 'T',
                left: 'center',
                bottom: 'bottom',
            });
        });
        it('bottomRight → bottom right', () => {
            expect(title({ text: 'T', titlePos: 'bottomRight', dx: 0, dy: 0 })).toEqual({
                text: 'T',
                left: 'right',
                bottom: 'bottom',
            });
        });
    });
});

describe('buildTitleOption — offsets', () => {
    it('topLeft dx → numeric left + textAlign (measurement-free)', () => {
        expect(title({ text: 'T', titlePos: 'topLeft', dx: 12, dy: 0 })).toEqual({
            text: 'T',
            left: 12,
            top: 'top',
            textAlign: 'left',
        });
    });
    it('topLeft dy → numeric top', () => {
        expect(title({ text: 'T', titlePos: 'topLeft', dx: 0, dy: 7 })).toEqual({
            text: 'T',
            left: 'left',
            top: 7,
        });
    });
    it('topCenter ignores dx (named anchor kept, ADR-0009 addendum)', () => {
        expect(title({ text: 'T', titlePos: 'topCenter', dx: 10, dy: 0 })).toEqual({
            text: 'T',
            left: 'center',
            top: 'top',
        });
    });
    it('bottomLeft dx → numeric left (left-edge offset extends to the bottom row)', () => {
        expect(title({ text: 'T', titlePos: 'bottomLeft', dx: 5, dy: 0 })).toEqual({
            text: 'T',
            left: 5,
            bottom: 'bottom',
            textAlign: 'left',
        });
    });
    it('bottom dy is down-positive → negative bottom (past the edge)', () => {
        expect(title({ text: 'T', titlePos: 'bottomCenter', dx: 0, dy: 5 })).toEqual({
            text: 'T',
            left: 'center',
            bottom: -5,
        });
    });
    it('non-finite dx/dy are ignored', () => {
        expect(title({ text: 'T', titlePos: 'topCenter', dx: Number.NaN, dy: 0 })).toEqual({
            text: 'T',
            left: 'center',
            top: 'top',
        });
    });
});

describe('buildTitleOption — textStyle (ADR-0021)', () => {
    it('no styling → no textStyle key', () => {
        expect(title({ text: 'T', titlePos: 'topCenter', dx: 0, dy: 0 })).not.toHaveProperty('textStyle');
    });
    it('colour override → textStyle.color', () => {
        expect(title({ text: 'T', titlePos: 'topCenter', dx: 0, dy: 0, color: '#f00' })).toEqual({
            text: 'T',
            left: 'center',
            top: 'top',
            textStyle: { color: '#f00' },
        });
    });
    it('deep-merges onto the theme textStyle (size-only keeps theme colour)', () => {
        const merged: Record<string, unknown> = { title: { textStyle: { color: '#theme' } } };
        buildTitleOption(merged, { text: 'T', titlePos: 'topCenter', dx: 0, dy: 0, fontSize: 18 });
        expect(merged.title).toEqual({
            textStyle: { color: '#theme', fontSize: 18 },
            text: 'T',
            left: 'center',
            top: 'top',
        });
    });
    it('fontWeight override', () => {
        const r = title({ text: 'T', titlePos: 'topCenter', dx: 0, dy: 0, fontWeight: 'bold' });
        expect((r.textStyle as Record<string, unknown>).fontWeight).toBe('bold');
    });
    it('numeric fontWeight override — preserved as a number (ADR-0029)', () => {
        const r = title({ text: 'T', titlePos: 'topCenter', dx: 0, dy: 0, fontWeight: 600 });
        const fw = (r.textStyle as Record<string, unknown>).fontWeight;
        expect(fw).toBe(600);
        expect(typeof fw).toBe('number');
    });
    it('fontStyle override (ADR-0029)', () => {
        const r = title({ text: 'T', titlePos: 'topCenter', dx: 0, dy: 0, fontStyle: 'italic' });
        expect((r.textStyle as Record<string, unknown>).fontStyle).toBe('italic');
    });
});

/** Minimal presentation config for legend tests (only legend-relevant fields are read). */
/** Minimal theme tokens for buildLegend / toPresentationConfig tests (ADR-0027). */
const TOKENS = {
    primary: '#p',
    secondary: '#s',
    success: '#su',
    warning: '#w',
    error: '#e',
    info: '#i',
    divider: '#d',
    textPrimary: '#tp',
    textSecondary: '#ts',
} as const;

const legendP = (
    over: {
        legendShow?: boolean;
        legendPos?: PresentationConfig['legendPos'];
        legend?: PresentationConfig['legend'];
    } = {},
): PresentationConfig =>
    ({
        legendShow: over.legendShow ?? true,
        legendPos: over.legendPos ?? 'topCenter',
        legend: over.legend,
        themeTokens: TOKENS,
    }) as unknown as PresentationConfig;

describe('buildLegend — placement (3×3 grid, orient auto)', () => {
    it('top row → top edge, horizontal, aligns by cell (left/right numeric edges)', () => {
        expect(buildLegend(legendP({ legendPos: 'topLeft' }), ['a', 'b'])).toMatchObject({
            show: true,
            data: ['a', 'b'],
            top: 4,
            left: 4,
            orient: 'horizontal',
        });
        expect(buildLegend(legendP({ legendPos: 'topRight' }), ['a'])).toMatchObject({
            top: 4,
            right: 4,
            orient: 'horizontal',
        });
    });
    it('bottom row → bottom edge, horizontal', () => {
        expect(buildLegend(legendP({ legendPos: 'bottomCenter' }), ['a'])).toMatchObject({
            bottom: 4,
            left: 'center',
            orient: 'horizontal',
        });
    });
    it('left column → vertical, vertically centred at the left edge', () => {
        expect(buildLegend(legendP({ legendPos: 'middleLeft' }), ['a'])).toMatchObject({
            top: 'center',
            left: 4,
            orient: 'vertical',
        });
    });
    it('right column → vertical, vertically centred at the right edge', () => {
        expect(buildLegend(legendP({ legendPos: 'middleRight' }), ['a'])).toMatchObject({
            top: 'center',
            right: 4,
            orient: 'vertical',
        });
    });
    it('middleCenter → centred horizontal', () => {
        expect(buildLegend(legendP({ legendPos: 'middleCenter' }), ['a'])).toMatchObject({
            top: 'center',
            left: 'center',
            orient: 'horizontal',
        });
    });
    it('show false → show:false, names still carried', () => {
        expect(buildLegend(legendP({ legendShow: false }), ['a'])).toMatchObject({ show: false, data: ['a'] });
    });
});

describe('buildLegend — styling', () => {
    it('no styling → only show/data/placement (no textStyle/icon/frame keys)', () => {
        const l = buildLegend(legendP(), ['a']);
        expect(l).not.toHaveProperty('textStyle');
        expect(l).not.toHaveProperty('icon');
        expect(l).not.toHaveProperty('backgroundColor');
        expect(l).not.toHaveProperty('borderWidth');
    });
    it('text colour/size/weight → textStyle', () => {
        expect(
            buildLegend(legendP({ legend: { color: '#f00', fontSize: 12, fontWeight: 'bold' } }), ['a']),
        ).toMatchObject({
            textStyle: { color: '#f00', fontSize: 12, fontWeight: 'bold' },
        });
    });
    it('fontStyle → textStyle.fontStyle (ADR-0029)', () => {
        expect(buildLegend(legendP({ legend: { fontStyle: 'italic' } }), ['a'])).toMatchObject({
            textStyle: { fontStyle: 'italic' },
        });
    });
    it('numeric fontWeight — preserved as a number (ADR-0029)', () => {
        const l = buildLegend(legendP({ legend: { fontWeight: 600 } }), ['a']);
        const fw = (l.textStyle as Record<string, unknown> | undefined)?.fontWeight;
        expect(fw).toBe(600);
        expect(typeof fw).toBe('number');
    });
    it('icon + item sizing/gap', () => {
        expect(
            buildLegend(legendP({ legend: { icon: 'circle', itemWidth: 20, itemHeight: 12, itemGap: 5 } }), ['a']),
        ).toMatchObject({ icon: 'circle', itemWidth: 20, itemHeight: 12, itemGap: 5 });
    });
    it('inactive colour', () => {
        expect(buildLegend(legendP({ legend: { inactiveColor: '#ccc' } }), ['a'])).toMatchObject({
            inactiveColor: '#ccc',
        });
    });
    it('background emitted only when not transparent', () => {
        expect(buildLegend(legendP({ legend: { bgColor: 'transparent' } }), ['a'])).not.toHaveProperty(
            'backgroundColor',
        );
        expect(buildLegend(legendP({ legend: { bgColor: '#eee' } }), ['a'])).toMatchObject({ backgroundColor: '#eee' });
    });
    it('border emitted only when width > 0', () => {
        expect(buildLegend(legendP({ legend: { borderColor: '#000' } }), ['a'])).not.toHaveProperty('borderWidth');
        expect(buildLegend(legendP({ legend: { borderWidth: 2, borderColor: '#000' } }), ['a'])).toMatchObject({
            borderWidth: 2,
            borderColor: '#000',
        });
    });
    it('border colour defaults to the theme divider token when unset (ADR-0027)', () => {
        expect(buildLegend(legendP({ legend: { borderWidth: 2 } }), ['a'])).toMatchObject({
            borderWidth: 2,
            borderColor: '#d',
        });
    });
    it('radius + padding', () => {
        expect(buildLegend(legendP({ legend: { borderRadius: 4, padding: 6 } }), ['a'])).toMatchObject({
            borderRadius: 4,
            padding: 6,
        });
    });
});

describe('normalizeLegendPos (legacy 4-edge → 3×3 grid)', () => {
    it('maps legacy edges', () => {
        expect(normalizeLegendPos('top')).toBe('topCenter');
        expect(normalizeLegendPos('bottom')).toBe('bottomCenter');
        expect(normalizeLegendPos('left')).toBe('middleLeft');
        expect(normalizeLegendPos('right')).toBe('middleRight');
    });
    it('passes 9-grid values through', () => {
        expect(normalizeLegendPos('bottomRight')).toBe('bottomRight');
        expect(normalizeLegendPos('middleCenter')).toBe('middleCenter');
        expect(normalizeLegendPos('topLeft')).toBe('topLeft');
    });
    it('falls back to topCenter for invalid input', () => {
        expect(normalizeLegendPos(undefined)).toBe('topCenter');
        expect(normalizeLegendPos('nonsense')).toBe('topCenter');
        expect(normalizeLegendPos(42)).toBe('topCenter');
    });
});

describe('decodeLegendConfig', () => {
    it('empty/invalid → {}', () => {
        expect(decodeLegendConfig(undefined)).toEqual({});
        expect(decodeLegendConfig('not-a-blob')).toEqual({});
    });
    it('round-trips a legendConfig blob', () => {
        const blob = encodeBlob(JSON.stringify({ color: '#f00', icon: 'circle', itemGap: 8 }));
        expect(decodeLegendConfig(blob)).toEqual({ color: '#f00', icon: 'circle', itemGap: 8 });
    });
});

describe('buildLegend — orient override', () => {
    it('auto: a top row derives horizontal', () => {
        expect(buildLegend(legendP({ legendPos: 'topCenter' }), ['a'])).toMatchObject({ orient: 'horizontal' });
    });
    it('auto: a left column derives vertical', () => {
        expect(buildLegend(legendP({ legendPos: 'middleLeft' }), ['a'])).toMatchObject({ orient: 'vertical' });
    });
    it('explicit vertical overrides the edge-derived horizontal', () => {
        expect(buildLegend(legendP({ legendPos: 'topCenter', legend: { orient: 'vertical' } }), ['a'])).toMatchObject({
            orient: 'vertical',
        });
    });
    it('explicit horizontal overrides the edge-derived vertical', () => {
        expect(
            buildLegend(legendP({ legendPos: 'middleLeft', legend: { orient: 'horizontal' } }), ['a']),
        ).toMatchObject({
            orient: 'horizontal',
        });
    });
});

describe('buildLegend — edge offsets (ADR-0021)', () => {
    it('top-left: offsetX adds to the left edge, offsetY to the top', () => {
        expect(buildLegend(legendP({ legendPos: 'topLeft', legend: { offsetX: 10 } }), ['a'])).toMatchObject({
            left: 14,
            top: 4,
        });
        expect(buildLegend(legendP({ legendPos: 'topLeft', legend: { offsetY: 8 } }), ['a'])).toMatchObject({
            top: 12,
            left: 4,
        });
    });
    it('bottom-right: offsetX/Y subtract from the right/bottom edges (right-/down-positive)', () => {
        expect(
            buildLegend(legendP({ legendPos: 'bottomRight', legend: { offsetX: 6, offsetY: 6 } }), ['a']),
        ).toMatchObject({
            right: -2,
            bottom: -2,
        });
    });
    it('centre column ignores offsetX (kept responsive)', () => {
        expect(buildLegend(legendP({ legendPos: 'topCenter', legend: { offsetX: 20 } }), ['a'])).toMatchObject({
            left: 'center',
            top: 4,
        });
    });
    it('middle row ignores offsetY (kept responsive)', () => {
        expect(buildLegend(legendP({ legendPos: 'middleLeft', legend: { offsetY: 20 } }), ['a'])).toMatchObject({
            top: 'center',
            left: 4,
        });
    });
    it('middle-left: offsetX still nudges horizontally', () => {
        expect(buildLegend(legendP({ legendPos: 'middleLeft', legend: { offsetX: 10 } }), ['a'])).toMatchObject({
            left: 14,
            top: 'center',
        });
    });
    it('middle-center: both offsets ignored', () => {
        expect(
            buildLegend(legendP({ legendPos: 'middleCenter', legend: { offsetX: 30, offsetY: 30 } }), ['a']),
        ).toMatchObject({
            top: 'center',
            left: 'center',
        });
    });
});

describe('toPresentationConfig — legend source (ADR-0021 fix)', () => {
    // The editor preview passes the editor state as `src` (legend styling is the `legend` OBJECT);
    // the live body passes rxData (legend styling is the `legendConfig` base64 BLOB). Both must resolve.
    const base = { palette: ['#1'], family: 'cartesian' as const, themeTokens: TOKENS };
    it('reads the editor-state legend OBJECT when present', () => {
        const p = toPresentationConfig({ ...base, src: { legend: { color: '#f00', orient: 'vertical' } } });
        expect(p.legend).toEqual({ color: '#f00', orient: 'vertical' });
    });
    it('decodes the rxData legendConfig BLOB when no object is present', () => {
        const blob = encodeBlob(JSON.stringify({ icon: 'circle' }));
        const p = toPresentationConfig({ ...base, src: { legendConfig: blob } });
        expect(p.legend).toEqual({ icon: 'circle' });
    });
    it('stamps the resolved themeTokens through (ADR-0027)', () => {
        const p = toPresentationConfig({ ...base, src: {} });
        expect(p.themeTokens).toEqual(TOKENS);
    });
});
