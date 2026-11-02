/**
 * SliderCollection — the value label, rendered.
 *
 * @module widgets/SliderCollection.test
 * @remarks
 * DOM contract of the renderer on the preview context (the Checkbox/Radio pattern). The
 * Marker-Ebene applies to marks only (CONTEXT "Marker-Ebene"): the value label follows
 * `textColorActive` → active state → base → theme text, never the marker text colour — even
 * while a state is active, where the retired local marker stage used to cut in. The Sperre
 * cases pin the slider's `disabled` against the OID binding's `locked`.
 */
import { describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    // The chrome contracts derive from sliderFields, which pulls Generic (extends
    // window.visRxWidget, undefined outside the vis-2 host) — the repo's stub pattern.
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});

import { collectionScene, installInertResizeObserver, testScopedMount } from '../lib/testing/collectionScene';
import SliderCollection from './SliderCollection';

installInertResizeObserver();

const mount = testScopedMount();

const OID = 'demo.0.dimmer';
const MARKER_TEXT_COLOR = '#aa0000';

/** A horizontal slider at 50 with its label always shown and one state row matching 50. */
const valueLabelColor = (data: Record<string, unknown>): string => {
    const { container } = mount(
        SliderCollection,
        collectionScene(
            'slider-test',
            {
                oid: OID,
                oidObject: { _id: OID, type: 'number' },
                sliderOrientation: 'horizontal',
                valueLabelDisplay: 'on',
                marks: true,
                minValue: 0,
                maxValue: 100,
                values_count: 1,
                value1: '50',
                noHeader: true,
                noFooter: true,
                noHeaderIcon: true,
                ...data,
            },
            50,
        ),
    );

    const valueLabel = container.querySelector('.MuiSlider-valueLabel');
    if (!valueLabel) {
        throw new Error('the slider rendered no value label');
    }
    return getComputedStyle(valueLabel).color;
};

describe('SliderCollection value label ignores the marker text colour', () => {
    it.each([
        ['the base text colour', { textColor: '#0000aa' }, '#0000aa'],
        ["the active state's text colour", { textColor: '#0000aa', textColor1: '#00aa00' }, '#00aa00'],
        ['textColorActive', { textColor: '#0000aa', textColorActive: '#aa00aa' }, '#aa00aa'],
    ])('follows %s while a state is active', (_case, data, expected) => {
        expect(valueLabelColor({ ...data, markerTextColor: MARKER_TEXT_COLOR })).toBe(expected);
    });

    it('falls back to the theme text exactly as without a marker text colour', () => {
        const withoutMarker = valueLabelColor({});

        // Guards against a vacuous match should happy-dom stop resolving the Emotion rules.
        expect(withoutMarker).not.toBe('');
        expect(valueLabelColor({ markerTextColor: MARKER_TEXT_COLOR })).toBe(withoutMarker);
    });
});

describe('SliderCollection Sperre', () => {
    /** The slider's native range input, mounted with the given widget data. */
    const rangeInput = (data: Record<string, unknown>): HTMLInputElement | null => {
        const { container } = mount(
            SliderCollection,
            collectionScene(
                'slider-lock-test',
                {
                    oid: OID,
                    oidObject: { _id: OID, type: 'number' },
                    sliderOrientation: 'horizontal',
                    minValue: 0,
                    maxValue: 100,
                    noHeader: true,
                    noFooter: true,
                    noHeaderIcon: true,
                    ...data,
                },
                50,
            ),
        );
        return container.querySelector<HTMLInputElement>('input[type="range"]');
    };

    it('leaves the slider enabled for a writable bound object', () => {
        expect(rangeInput({})?.disabled).toBe(false);
    });

    it.each([
        ['onlyDisplay', { onlyDisplay: true }],
        // The lock follows the bound object — no root `write` copy here.
        ['a non-writable bound object (write === false)', { oidObject: { _id: OID, type: 'number', write: false } }],
    ])('disables the slider for %s', (_case, data) => {
        expect(rangeInput(data)?.disabled).toBe(true);
    });
});
