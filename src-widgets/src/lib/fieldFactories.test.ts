import { describe, expect, it, vi } from 'vitest';

// fieldFactories pulls CollectionGradientColorPicker, which pulls Generic, which
// extends window.visRxWidget — undefined outside the vis-2 runtime. The pure
// factory logic (predicates, options, createDivider shape) is independent of
// those components, so mock them to isolate the unit under test.
vi.mock('../components/CollectionGradientColorPicker', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));

import {
    createDivider,
    hiddenIf,
    hiddenUnless,
    hiddenWhenFalsy,
    fontStyleOptions,
    fontWeightOptions,
    sideOptions,
} from './fieldFactories';

// The hidden-predicate family is the deepest new module: a single bug silently
// mis-hides ~30 fields. Truth tables pin the contract.
describe('hidden predicates', () => {
    describe('hiddenUnless — visible only when field === value', () => {
        const pred = hiddenUnless('gaugeType', 'linear');
        it('shows when field equals value', () => {
            expect(pred({ gaugeType: 'linear' })).toBe(false);
        });
        it('hides when field differs', () => {
            expect(pred({ gaugeType: 'radial' })).toBe(true);
        });
        it('hides when field is absent', () => {
            expect(pred({})).toBe(true);
        });
    });

    describe('hiddenIf — hidden when field === value', () => {
        const pred = hiddenIf('oidObject', undefined);
        it('hides when field equals value', () => {
            expect(pred({ oidObject: undefined })).toBe(true);
        });
        it('shows when field is set', () => {
            expect(pred({ oidObject: { _id: 'x' } })).toBe(false);
        });
    });

    describe('hiddenWhenFalsy — hidden when field is falsy', () => {
        const pred = hiddenWhenFalsy('write');
        it.each<[unknown, boolean]>([
            [false, true],
            [0, true],
            ['', true],
            [null, true],
            [undefined, true],
            [true, false],
            [1, false],
            ['write', false],
        ])('write=%j -> hidden=%s', (value, hidden) => {
            expect(pred({ write: value })).toBe(hidden);
        });
    });
});

describe('createDivider', () => {
    it('builds a custom divider field', () => {
        const field = createDivider('gauge_basic_options') as {
            label: string;
            type: string;
            component: unknown;
        };
        expect(field.label).toBe('');
        expect(field.type).toBe('custom');
        expect(typeof field.component).toBe('function');
    });

    it('attaches a hidden predicate when given', () => {
        const hidden = hiddenUnless('gaugeType', 'linear');
        const field = createDivider('gauge_linear_borders_options', { hidden });
        expect((field as { hidden?: unknown }).hidden).toBe(hidden);
    });

    it('omits hidden when not given', () => {
        const field = createDivider('gauge_basic_options');
        expect((field as { hidden?: unknown }).hidden).toBeUndefined();
    });
});

describe('shared option constants', () => {
    it('fontWeightOptions has the 13 documented weights', () => {
        expect(fontWeightOptions).toHaveLength(13);
        expect(fontWeightOptions[0].value).toBe('normal');
        expect(fontWeightOptions.at(-1)?.value).toBe('900');
    });

    it('fontStyleOptions has normal/italic/oblique', () => {
        expect(fontStyleOptions).toHaveLength(3);
        expect(fontStyleOptions.map(o => o.value)).toEqual(['normal', 'italic', 'oblique']);
    });

    it('sideOptions has both/left/right', () => {
        expect(sideOptions).toHaveLength(3);
        expect(sideOptions.map(o => o.value)).toEqual(['both', 'left', 'right']);
    });
});
