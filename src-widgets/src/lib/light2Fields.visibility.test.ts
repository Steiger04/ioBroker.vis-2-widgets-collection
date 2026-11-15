/**
 * PIN — Light2 editor visibility of the Kanal, CT, UI-component and wheel-lightness fields.
 *
 * @module lib/light2Fields.visibility.test
 * @remarks
 * Written against the editor as it stood before the Lichttyp channel table (dev @ b2fb111d)
 * and kept green unchanged by the refactor that made the `hidden` rules ask
 * `lib/light2Channels` (ADR-0108 Nr. 1). Only a released fix may change a row here; it says so
 * next to the row (fix a1efc2ec: brightness for rgbcct and r/g/b/cct). A new Lichttyp adds its
 * row (dimmer, ADR-0116 Nr. 3) and leaves the others unchanged.
 * Observed through the field list's public contract: each field's `hidden(data)` as vis-2
 * calls it with the raw widget data. An unset Lichttyp (a widget stored without the key) is
 * pinned too. A second block covers the Button-Modus fields of the modal: a Lichttyp without a
 * view has no modal, so its delay and size stay hidden (ADR-0116 Nr. 4).
 */
import { describe, expect, it } from 'vitest';

import type { RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';

import light2Fields from './light2Fields';

const fields = light2Fields();

/** The named field, or — for the unnamed dividers — the divider right after the named field. */
const fieldAt = (key: string): RxWidgetInfoAttributesField => {
    const [name, after] = key.startsWith('divider after ') ? [key.slice('divider after '.length), 1] : [key, 0];
    const index = fields.findIndex(field => field.name === name);
    if (index < 0) {
        throw new Error(`no field ${name}`);
    }
    return fields[index + after];
};

/** The fields whose visibility depends on the Lichttyp, in field-list order. */
const PINNED = [
    'colorLightUIComponent',
    'colorWheelLightness',
    'divider after colorWheelLightness',
    'divider after colorLightType',
    'colorLightTemperatureOid',
    'colorLightCtMin',
    'colorLightCtMax',
    'divider after colorLightCtMax',
    'colorLightRgbHexOid',
    'colorLightRedOid',
    'colorLightGreenOid',
    'colorLightBlueOid',
    'colorLightHueOid',
    'colorLightSaturationOid',
    'colorLightBrightnessOid',
] as const;

const isHidden = (key: string, data: WidgetData): boolean => {
    const hidden = fieldAt(key).hidden as ((data: WidgetData) => boolean) | undefined;
    return typeof hidden === 'function' ? hidden(data) : false;
};

const visibleFor = (data: WidgetData): string[] => PINNED.filter(key => !isHidden(key, data));

const COLOR_UI = ['colorLightUIComponent', 'colorWheelLightness', 'divider after colorWheelLightness'];
const CT = ['colorLightTemperatureOid', 'colorLightCtMin', 'colorLightCtMax', 'divider after colorLightCtMax'];
const TYPE_DIVIDER = ['divider after colorLightType'];

/**
 * Visible fields per Lichttyp with the wheel as UI component and a temperature OID set.
 * Hand-derived from the predicates of dev @ b2fb111d.
 */
const PIN: [string | undefined, string[]][] = [
    ['none', []],
    // ADR-0116 Nr. 3: the single brightness slider — no UI component, wheel lightness or CT range.
    ['dimmer', [...TYPE_DIVIDER, 'colorLightBrightnessOid']],
    ['cct', [...TYPE_DIVIDER, ...CT, 'colorLightBrightnessOid']],
    ['rgb', [...COLOR_UI, ...TYPE_DIVIDER, 'colorLightRgbHexOid']],
    // Fix a1efc2ec: brightness shows — the CCT-Ansicht writes and reads it.
    ['rgbcct', [...COLOR_UI, ...TYPE_DIVIDER, ...CT, 'colorLightRgbHexOid', 'colorLightBrightnessOid']],
    ['r/g/b', [...COLOR_UI, ...TYPE_DIVIDER, 'colorLightRedOid', 'colorLightGreenOid', 'colorLightBlueOid']],
    // Fix a1efc2ec: brightness shows — the CCT-Ansicht writes and reads it.
    [
        'r/g/b/cct',
        [
            ...COLOR_UI,
            ...TYPE_DIVIDER,
            ...CT,
            'colorLightRedOid',
            'colorLightGreenOid',
            'colorLightBlueOid',
            'colorLightBrightnessOid',
        ],
    ],
    ['h/s/v', [...COLOR_UI, ...TYPE_DIVIDER, 'colorLightHueOid', 'colorLightSaturationOid', 'colorLightBrightnessOid']],
    [
        'h/s/v/cct',
        [...COLOR_UI, ...TYPE_DIVIDER, ...CT, 'colorLightHueOid', 'colorLightSaturationOid', 'colorLightBrightnessOid'],
    ],
    // Unset Lichttyp: the colour-picker settings show, no Kanal field does.
    [undefined, [...COLOR_UI, ...TYPE_DIVIDER]],
];

describe('PIN light2Fields visibility per Lichttyp', () => {
    it.each(PIN)('%s: wheel UI, temperature OID set', (colorLightType, visible) => {
        expect(
            visibleFor({ colorLightType, colorLightUIComponent: 'wheel', colorLightTemperatureOid: 'lamp.ct' }),
        ).toEqual(visible);
    });

    it.each(PIN)('%s: the wheel lightness shows only with the wheel', (colorLightType, visible) => {
        expect(
            visibleFor({ colorLightType, colorLightUIComponent: 'box', colorLightTemperatureOid: 'lamp.ct' }),
        ).toEqual(visible.filter(key => key !== 'colorWheelLightness'));
    });

    it.each(PIN)('%s: the CT range shows only with a temperature OID', (colorLightType, visible) => {
        expect(visibleFor({ colorLightType, colorLightUIComponent: 'wheel' })).toEqual(
            visible.filter(key => key !== 'colorLightCtMin' && key !== 'colorLightCtMax'),
        );
    });
});

describe('light2Fields field set of dimmer', () => {
    /** Every named field the editor shows for the data. */
    const shownFields = (data: WidgetData): string[] =>
        fields.filter(field => field.name && !isHidden(field.name, data)).map(field => field.name!);

    it('shows the switch, the Lichttyp, the brightness Kanal, slider width, border, padding and the Button-Modus fields', () => {
        expect(
            shownFields({
                colorLightType: 'dimmer',
                colorLightButton: true,
                colorLightUIComponent: 'wheel',
                colorLightTemperatureOid: 'lamp.ct',
            }),
        ).toEqual([
            'colorLightButton',
            'colorLightDelayLongPress',
            'colorLightModalWidth',
            'colorLightModalHeight',
            'colorLightSliderWidth',
            'colorLightBorderWidth',
            'colorLightBorderColor',
            'colorLightPadding',
            'colorLightSwitchOid',
            'colorLightType',
            'colorLightBrightnessOid',
        ]);
    });
});

describe('light2Fields Button-Modus modal fields per Lichttyp', () => {
    const MODAL_FIELDS = ['colorLightDelayLongPress', 'colorLightModalWidth', 'colorLightModalHeight'];

    const visibleModalFields = (data: WidgetData): string[] => MODAL_FIELDS.filter(key => !isHidden(key, data));

    // Every Lichttyp with a view (and one the table does not know) opens its modal on a long press.
    it.each(['dimmer', 'cct', 'rgb', 'rgbcct', 'r/g/b', 'r/g/b/cct', 'h/s/v', 'h/s/v/cct', undefined, 'white'])(
        '%s: delay and modal size show in the Button-Modus',
        colorLightType => {
            expect(visibleModalFields({ colorLightType, colorLightButton: true })).toEqual(MODAL_FIELDS);
        },
    );

    it('none: delay and modal size stay hidden in the Button-Modus (no modal to open)', () => {
        expect(visibleModalFields({ colorLightType: 'none', colorLightButton: true })).toEqual([]);
    });

    it.each(['none', 'rgb', undefined])(
        '%s: delay and modal size stay hidden without the Button-Modus',
        colorLightType => {
            expect(visibleModalFields({ colorLightType, colorLightButton: false })).toEqual([]);
        },
    );
});
