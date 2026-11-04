import { describe, expect, it, vi } from 'vitest';

import type { WidgetData } from '@iobroker/types-vis-2';

// fieldFactories pulls ContractColorField, which pulls Generic, which
// extends window.visRxWidget — undefined outside the vis-2 runtime. The pure
// factory logic (predicates, options, createDivider shape) is independent of
// those components, so mock them to isolate the unit under test.
vi.mock('../components/ContractColorField', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));

import {
    createColorField,
    createDivider,
    createOnlyDisplayField,
    guardWidgetData,
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

describe('createOnlyDisplayField', () => {
    it('builds the display-only toggle with its write-gate predicates', () => {
        const field = createOnlyDisplayField() as {
            name: string;
            type: string;
            label: string;
            default: boolean;
            disabled: (data: { write?: boolean }) => boolean;
            hidden: (data: { write?: boolean }) => boolean;
        };
        expect(field.name).toBe('onlyDisplay');
        expect(field.type).toBe('checkbox');
        expect(field.label).toBe('only_display');
        expect(field.default).toBe(false);
    });

    it('hides and disables only for an explicit write === false', () => {
        const { disabled, hidden } = createOnlyDisplayField() as {
            disabled: (data: { write?: boolean }) => boolean;
            hidden: (data: { write?: boolean }) => boolean;
        };
        // Missing write stays writable (the isOidReadOnly convention)
        expect(disabled({})).toBe(false);
        expect(hidden({})).toBe(false);
        expect(disabled({ write: true })).toBe(false);
        expect(disabled({ write: false })).toBe(true);
        expect(hidden({ write: false })).toBe(true);
    });

    it('returns a fresh object per call (field lists never share an instance)', () => {
        expect(createOnlyDisplayField()).not.toBe(createOnlyDisplayField());
    });

    it('takes the lock as a parameter: hidden and disabled follow it instead of write === false', () => {
        const { disabled, hidden } = createOnlyDisplayField((data: WidgetData) => data.locked === true) as {
            disabled: (data: WidgetData) => boolean;
            hidden: (data: WidgetData) => boolean;
        };

        // A read-only root write no longer locks the toggle …
        expect(disabled({ write: false })).toBe(false);
        expect(hidden({ write: false })).toBe(false);
        // … the given lock does.
        expect(disabled({ write: true, locked: true })).toBe(true);
        expect(hidden({ write: true, locked: true })).toBe(true);
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

// vis-2 renders the switch from one to several selected widgets once with the stale
// single-selection `commonValues` ({} without `data`), so a custom field receives
// `data === undefined` for that one render (Ticket 29).
describe('guardWidgetData', () => {
    const props = {} as Parameters<ReturnType<typeof guardWidgetData>>[3];
    const onDataChange = (): void => {};

    it('hands an empty data map to the component while vis-2 passes none', () => {
        const component = vi.fn((_field: unknown, data: WidgetData) => data);
        const guarded = guardWidgetData(component);

        guarded({}, undefined, onDataChange, props);

        expect(component.mock.calls[0][1]).toEqual({});
    });

    it('hands the same empty map on every render (stable memo dependency)', () => {
        const component = vi.fn((_field: unknown, data: WidgetData) => data);
        const guarded = guardWidgetData(component);

        guarded({}, undefined, onDataChange, props);
        guarded({}, undefined, onDataChange, props);

        expect(component.mock.calls[0][1]).toBe(component.mock.calls[1][1]);
    });

    it('passes present data through unchanged', () => {
        const component = vi.fn((_field: unknown, data: WidgetData) => data);
        const data = { color: '#ff0000' } as WidgetData;

        guardWidgetData(component)({}, data, onDataChange, props);

        expect(component.mock.calls[0][1]).toBe(data);
    });

    it('guards the colour field picker', () => {
        const field = createColorField({ name: 'iconColor', label: 'icon_color' });
        const { component } = field as unknown as { component: (...args: unknown[]) => { props: { data: unknown } } };
        const element = component(field, undefined, onDataChange, props);

        expect(element.props.data).toEqual({});
    });
});
