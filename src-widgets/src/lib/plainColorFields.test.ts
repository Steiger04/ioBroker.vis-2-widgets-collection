/**
 * Characterisation of the 27 Schlichte Farbfelder (ADR-0102): the colour fields without a
 * Field-Vertrag — Gauge 25, `dialogCloseButtonColor`, `markerIconColor`. `colorLightBorderColor`,
 * the 28th of the former vis-2 colour fields, became a Field-Vertrag (ADR-0102 Nachtrag
 * 2026-11-07, `lib/light2ColorContract.test`).
 *
 * @module lib/plainColorFields.test
 * @remarks
 * Pins what a stored widget configuration depends on — name, label, default and the hidden
 * rule — so switching the editor that renders them cannot change any of it. Hidden rules are
 * compared by behaviour: a string expression literally (vis-2 evaluates it), a predicate by its
 * answers over probe data (vis-2 hands it the raw widget data).
 */
import { describe, expect, it, vi } from 'vitest';

// The field lists pull the field components, which pull Generic (extends window.visRxWidget,
// absent outside vis-2). Only the field DATA is read here.
vi.mock('../components/ContractColorField', () => ({ default: () => null }));
vi.mock('../components/PlainColorField', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));

import dialogFields from './dialogFields';
import { createColorField, createPlainColorField } from './fieldFactories';
import gaugeFields from './gaugeFields';
import light2Fields from './light2Fields';
import sliderFields from './sliderFields';

interface FieldLike {
    name?: string;
    label?: string;
    type?: string;
    default?: unknown;
    hidden?: unknown;
    plainColor?: boolean;
    noGradient?: boolean;
    terminal?: string;
    component?: (...args: unknown[]) => unknown;
}

/** Calls a custom field's component the way vis-2 does and returns the element type. */
const renderedBy = (field: FieldLike): unknown =>
    (field.component?.(field, {}, () => undefined, {}) as { type?: unknown } | null)?.type;

// The adapters, read off the factories themselves: the node project shares its module cache
// across files (vitest `isolate: false`), so a sentinel of this file's mock may not be the one
// the field lists were built with — the factories always are.
const PLAIN_ADAPTER = renderedBy(createPlainColorField({ name: 'probe', label: 'probe' }) as FieldLike);
const CONTRACT_ADAPTER = renderedBy(createColorField({ name: 'probe', label: 'probe' }) as FieldLike);

/** Probe data for predicate hidden rules: every condition the 27 fields depend on. */
const PROBES: Record<string, unknown>[] = [{}, { gaugeType: 'linear' }, { gaugeType: 'radial' }, { marks: true }];

/** Hidden rule as comparable data: the expression, the predicate's answers, or none. */
type HiddenRule = { expression: string } | { answers: boolean[] } | 'none';

const LINEAR: HiddenRule = { answers: [true, false, true, true] };
const RADIAL: HiddenRule = { answers: [true, true, false, true] };

const hiddenRule = (hidden: unknown): HiddenRule => {
    if (hidden === undefined) {
        return 'none';
    }
    if (typeof hidden === 'string') {
        return { expression: hidden };
    }
    if (typeof hidden === 'function') {
        return { answers: PROBES.map(data => Boolean((hidden as (data: unknown) => unknown)(data))) };
    }
    throw new Error(`unexpected hidden rule of type ${typeof hidden}`);
};

interface Characteristic {
    list: 'gauge' | 'dialog' | 'light2' | 'slider';
    name: string;
    label: string;
    default: string | undefined;
    hidden: HiddenRule;
}

const gauge = (name: string, label: string, defaultValue: string, hidden: HiddenRule = 'none'): Characteristic => ({
    list: 'gauge',
    name,
    label,
    default: defaultValue,
    hidden,
});

/** The 27 fields as they were rendered by vis-2 (`type: 'color'`) before ADR-0102. */
const PLAIN_COLOR_FIELDS: Characteristic[] = [
    gauge('gaugeColorBarEnd', 'gauge_color_bar_end', '', LINEAR),
    gauge('gaugeColorBarProgressEnd', 'gauge_color_bar_progress_end', '', LINEAR),
    gauge('gaugeColorNeedleCircleOuter', 'gauge_color_needle_circle_outer', '#f0f0f0', RADIAL),
    gauge('gaugeColorNeedleCircleOuterEnd', 'gauge_color_needle_circle_outer_end', '#ccc', RADIAL),
    gauge('gaugeColorNeedleCircleInner', 'gauge_color_needle_circle_inner', '#e8e8e8', RADIAL),
    gauge('gaugeColorNeedleCircleInnerEnd', 'gauge_color_needle_circle_inner_end', '#f5f5f5', RADIAL),
    gauge('gaugeColorPlate', 'gauge_color_plate', 'rgba(0,0,0,0)'),
    gauge('gaugeColorPlateEnd', 'gauge_color_plate_end', 'rgba(0,0,0,0)'),
    gauge('gaugeColorValueText', 'gauge_color_value_text', '#444'),
    gauge('gaugeColorValueTextShadow', 'gauge_color_value_text_shadow', 'rgba(0,0,0,0.3)'),
    gauge('gaugeColorBorderShadow', 'gauge_color_border_shadow', 'rgba(0,0,0,0.5)'),
    gauge('gaugeColorBorderOuter', 'gauge_color_border_outer', '#ddd'),
    gauge('gaugeColorBorderOuterEnd', 'gauge_color_border_outer_end', '#aaa'),
    gauge('gaugeColorBorderMiddle', 'gauge_color_border_middle', '#eee'),
    gauge('gaugeColorBorderMiddleEnd', 'gauge_color_border_middle_end', '#f0f0f0'),
    gauge('gaugeColorBorderInner', 'gauge_color_border_inner', '#fafafa'),
    gauge('gaugeColorBorderInnerEnd', 'gauge_color_border_inner_end', '#ccc'),
    gauge('gaugeColorValueBoxRect', 'gauge_color_value_box_rect', '#888'),
    gauge('gaugeColorValueBoxRectEnd', 'gauge_color_value_box_rect_end', '#666'),
    gauge('gaugeColorValueBoxBackground', 'gauge_color_value_box_background', '#babab2'),
    gauge('gaugeColorValueBoxShadow', 'gauge_color_value_box_shadow', 'rgba(0,0,0,1)'),
    gauge('gaugeColorNeedleShadowUp', 'gauge_color_needle_shadow_up', 'rgba(2,255,255,0.2)'),
    gauge('gaugeColorNeedleShadowDown', 'gauge_color_needle_shadow_down', 'rgba(188,143,143,0.45)'),
    gauge('gaugeColorBarStroke', 'gauge_color_bar_stroke', '#222'),
    gauge('gaugeColorBar', 'gauge_color_bar', '#ccc'),
    {
        list: 'dialog',
        name: 'dialogCloseButtonColor',
        label: 'dialog_close_button_color',
        default: undefined,
        hidden: 'none',
    },
    {
        list: 'slider',
        name: 'markerIconColor',
        label: 'marker_icon_color',
        default: undefined,
        hidden: { expression: '!data.marks' },
    },
];

const LISTS: Record<Characteristic['list'], () => FieldLike[]> = {
    gauge: () => gaugeFields() as FieldLike[],
    dialog: () => dialogFields() as FieldLike[],
    light2: () => light2Fields() as FieldLike[],
    slider: () => sliderFields() as FieldLike[],
};

const findField = (list: Characteristic['list'], name: string): FieldLike => {
    const matches = LISTS[list]().filter(field => field.name === name);
    expect(matches, `${list}Fields declares ${name} exactly once`).toHaveLength(1);
    return matches[0];
};

describe('Schlichte Farbfelder — characterisation of the 27 former vis-2 colour fields', () => {
    it('covers 27 fields (Gauge 25 + Dialog, Slider one each)', () => {
        expect(PLAIN_COLOR_FIELDS).toHaveLength(27);
        expect(PLAIN_COLOR_FIELDS.filter(field => field.list === 'gauge')).toHaveLength(25);
    });

    it.each(PLAIN_COLOR_FIELDS)('$name keeps its label, default and hidden rule', expected => {
        const field = findField(expected.list, expected.name);
        expect({
            label: field.label,
            default: field.default,
            hidden: hiddenRule(field.hidden),
        }).toEqual({ label: expected.label, default: expected.default, hidden: expected.hidden });
    });

    it.each(PLAIN_COLOR_FIELDS)('$name is a Schlichtes Farbfeld: the collection adapter, solid only', expected => {
        const field = findField(expected.list, expected.name);
        expect(field.type).toBe('custom');
        expect(renderedBy(field)).toBe(PLAIN_ADAPTER);
        expect(renderedBy(field)).not.toBe(CONTRACT_ADAPTER);
        expect(field.plainColor).toBe(true);
        expect(field.noGradient).toBe(true);
        expect(field.terminal).toBeUndefined();
    });

    it.each(Object.keys(LISTS) as Characteristic['list'][])(
        '%sFields renders no colour field through vis-2 anymore',
        list => {
            expect(
                LISTS[list]()
                    .filter(field => field.type === 'color')
                    .map(field => field.name),
            ).toEqual([]);
        },
    );
});
