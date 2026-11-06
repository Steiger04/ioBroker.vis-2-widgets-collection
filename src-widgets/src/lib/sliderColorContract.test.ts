/**
 * The slider colour fields spread the contracts the runtime resolves (ADR-0004, ADR-0106
 * decision 5).
 *
 * @module lib/sliderColorContract.test
 * @remarks
 * One declaration site: every slider colour field with a contract carries exactly its entry
 * of `sliderColorContracts`, and the field list around it — name, label, `noGradient`,
 * `hidden` — stays as the editor and the stored widget data know it.
 */
import { describe, expect, it, vi } from 'vitest';

import type { ExtendedField } from '../types/field-definitions/extended-field';
import { sliderColorContracts } from './sliderColorContract';

// The field list renders CollectionDivider / ContractColorField, which pull Generic (extends
// window.visRxWidget, absent outside vis-2). The field tests read only the field data.
vi.mock('../components/ContractColorField', () => ({ default: () => null }));
vi.mock('../components/PlainColorField', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));

import sliderFields from './sliderFields';

/** A slider field as the editor reads it: its contract plus the attribute-panel data. */
type ColorField = ExtendedField & { label?: string };

/** The slider fields that declare a colour cascade (a terminal). */
const contractFields = (): ColorField[] =>
    sliderFields().filter((field): field is ColorField => (field as ExtendedField).terminal !== undefined);

describe('sliderFields — the colour fields spread the slider colour contracts', () => {
    it('every contract colour field carries exactly its contract', () => {
        for (const field of contractFields()) {
            const { name, fallbackFields, terminal, inheritTextStyle } = field;
            const contract = sliderColorContracts[name as keyof typeof sliderColorContracts];

            expect({ name, fallbackFields, terminal, inheritTextStyle }, name).toEqual(contract);
        }
    });

    it('every contract has its colour field', () => {
        expect(contractFields().map(field => field.name)).toEqual(Object.keys(sliderColorContracts));
    });

    it('keeps the colour fields as the editor knows them (label, noGradient, hidden)', () => {
        expect(
            contractFields().map(({ name, label, noGradient, hidden }) => ({ name, label, noGradient, hidden })),
        ).toEqual([
            { name: 'sliderColor', label: 'slider_color', noGradient: undefined, hidden: undefined },
            { name: 'thumbColor', label: 'thumb_color', noGradient: undefined, hidden: undefined },
            { name: 'thumbBorderColor', label: 'thumb_border_color', noGradient: undefined, hidden: undefined },
            { name: 'trackBackgroundColor', label: 'track_background_color', noGradient: undefined, hidden: undefined },
            { name: 'trackBorderColor', label: 'track_border_color', noGradient: undefined, hidden: undefined },
            { name: 'railBackgroundColor', label: 'rail_background_color', noGradient: undefined, hidden: undefined },
            { name: 'railBorderColor', label: 'rail_border_color', noGradient: undefined, hidden: undefined },
            { name: 'markBackgroundColor', label: 'mark_background_color', noGradient: undefined, hidden: undefined },
            { name: 'markerTextColor', label: 'marker_text_color', noGradient: undefined, hidden: '!data.marks' },
            {
                name: 'startIconColor',
                label: 'icon_color',
                noGradient: true,
                hidden: '!data.iconMin && !data.iconSmallMin',
            },
            {
                name: 'endIconColor',
                label: 'icon_color',
                noGradient: true,
                hidden: '!data.iconMax && !data.iconSmallMax',
            },
        ]);
    });

    it('declares no fallback field on the base colour and the end symbols (no sliderColor fallback)', () => {
        for (const name of ['sliderColor', 'startIconColor', 'endIconColor'] as const) {
            expect(contractFields().find(field => field.name === name)?.fallbackFields, name).toBeUndefined();
        }
    });
});
