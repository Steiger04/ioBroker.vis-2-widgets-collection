/**
 * PIN — Light2 write behaviour: which Kanal gets which value from a picker change.
 *
 * @module Light2CollectionWidget/channelMapping.writePins.test
 * @remarks
 * Derived from the body's write map as it stood before the channel mapping (dev @ b2fb111d,
 * `Light2Collection.tsx:200-390`, spec licht2-architektur-2026-11 ticket 02) and made green
 * against a verbatim extraction of it first. These pins are the yardstick of every refactor
 * up to ticket 12 (ADR-0108, spec „Schreibverhalten"): a refactor must leave them green
 * unchanged; only a released fix may change a row, and says so next to it.
 *
 * Real `iro.Color` (it runs under node): Kanal, value, `Math.round`, Hue-Skala at `maxValue`
 * 254, HSV change flags, picker filter of the CCT-Ansicht, a Kanal without object is skipped,
 * fallback for a missing picker property. The guards of the write path (`processingRef`) stay
 * in the body and are not part of the pin.
 */
import iro from '@jaames/iro';
import { describe, expect, it } from 'vitest';

import { channelWrites } from './channelMapping';
import type { Light2WidgetData } from './channelMapping';

/** Every Kanal bound, each with its OID object (plain percent channels, maximum 100). */
const ALL_OBJECTS = {
    colorLightTemperatureOidObject: { maxValue: 6500 },
    colorLightRgbHexOidObject: {},
    colorLightRedOidObject: { maxValue: 255 },
    colorLightGreenOidObject: { maxValue: 255 },
    colorLightBlueOidObject: { maxValue: 255 },
    colorLightHueOidObject: { maxValue: 360 },
    colorLightSaturationOidObject: { maxValue: 100 },
    colorLightBrightnessOidObject: { maxValue: 100 },
};

const makeData = (overrides: Record<string, unknown> = {}): Light2WidgetData =>
    ({ ...ALL_OBJECTS, ...overrides }) as unknown as Light2WidgetData;

/** Philips-Hue-compatible saturation and brightness (maximum 254) — and a hue object that also says 254. */
const HUE_SCALE = makeData({
    colorLightSaturationOidObject: { maxValue: 254 },
    colorLightBrightnessOidObject: { maxValue: 254 },
    colorLightHueOidObject: { maxValue: 254 },
});

/** A Kelvin-Picker colour set to 4000 K — iro reads it back as 3989.12 K (lossy, ADR-0108). */
const kelvinColor = (): iro.Color => {
    const color = new iro.Color('#ffffff');
    color.kelvin = 4000;
    return color;
};

/** h 120.4, s 33.3, v 66.6 — iro returns the hsv components unrounded. */
const hsvColor = (): iro.Color => new iro.Color({ h: 120.4, s: 33.3, v: 66.6 });

describe('PIN write: CCT-Ansicht', () => {
    it.each(['cct', 'rgbcct', 'r/g/b/cct', 'h/s/v/cct'])(
        '%s: the Kelvin-Picker writes only the rounded temperature',
        type => {
            expect(
                channelWrites(kelvinColor(), { type, view: 'cct', picker: 'kelvin' }, undefined, makeData()),
            ).toEqual([{ field: 'colorLightTemperatureOid', value: 3989 }]);
        },
    );

    it.each(['cct', 'rgbcct', 'r/g/b/cct', 'h/s/v/cct'])(
        '%s: the Helligkeits-Picker writes only the brightness — rounded, or on the Hue-Skala',
        type => {
            const target = { type, view: 'cct', picker: 'brightness' } as const;

            expect(channelWrites(hsvColor(), target, undefined, makeData())).toEqual([
                { field: 'colorLightBrightnessOid', value: 67 },
            ]);
            expect(channelWrites(hsvColor(), target, undefined, HUE_SCALE)).toEqual([
                { field: 'colorLightBrightnessOid', value: 169 },
            ]);
        },
    );

    it('the brightness of the CCT-Ansicht ignores the HSV change flags', () => {
        expect(
            channelWrites(
                hsvColor(),
                { type: 'h/s/v/cct', view: 'cct', picker: 'brightness' },
                { h: true },
                makeData(),
            ),
        ).toEqual([{ field: 'colorLightBrightnessOid', value: 67 }]);
    });

    it('without a picker nothing is written', () => {
        expect(channelWrites(kelvinColor(), { type: 'cct', view: 'cct' }, undefined, makeData())).toEqual([]);
    });

    it('a Kanal without object is skipped', () => {
        const data = makeData({ colorLightTemperatureOidObject: undefined, colorLightBrightnessOidObject: undefined });

        expect(channelWrites(kelvinColor(), { type: 'cct', view: 'cct', picker: 'kelvin' }, undefined, data)).toEqual(
            [],
        );
        expect(channelWrites(hsvColor(), { type: 'cct', view: 'cct', picker: 'brightness' }, undefined, data)).toEqual(
            [],
        );
    });
});

describe('PIN write: colour view', () => {
    it.each(['rgb', 'rgbcct'])('%s: the hex string', type => {
        expect(channelWrites(new iro.Color('#ff8000'), { type, view: 'color' }, undefined, makeData())).toEqual([
            { field: 'colorLightRgbHexOid', value: '#ff8000' },
        ]);
    });

    it.each(['r/g/b', 'r/g/b/cct'])('%s: red, green, blue in this order', type => {
        expect(channelWrites(new iro.Color('#0a141e'), { type, view: 'color' }, undefined, makeData())).toEqual([
            { field: 'colorLightRedOid', value: 10 },
            { field: 'colorLightGreenOid', value: 20 },
            { field: 'colorLightBlueOid', value: 30 },
        ]);
    });

    it.each(['h/s/v', 'h/s/v/cct'])('%s without change flags: hue, saturation, brightness, rounded', type => {
        expect(channelWrites(hsvColor(), { type, view: 'color' }, undefined, makeData())).toEqual([
            { field: 'colorLightHueOid', value: 120 },
            { field: 'colorLightSaturationOid', value: 33 },
            { field: 'colorLightBrightnessOid', value: 67 },
        ]);
    });

    it('h/s/v on the Hue-Skala: saturation and brightness scaled to 0-254, the hue never', () => {
        expect(channelWrites(hsvColor(), { type: 'h/s/v', view: 'color' }, undefined, HUE_SCALE)).toEqual([
            { field: 'colorLightHueOid', value: 120 },
            { field: 'colorLightSaturationOid', value: 85 },
            { field: 'colorLightBrightnessOid', value: 169 },
        ]);
    });

    it.each<[object, string[]]>([
        [{ h: true }, ['colorLightHueOid']],
        [{ s: true, v: true }, ['colorLightSaturationOid', 'colorLightBrightnessOid']],
        [{ v: true }, ['colorLightBrightnessOid']],
        [{}, []],
    ])('h/s/v with change flags %j: only the flagged Kanäle', (changes, fields) => {
        expect(
            channelWrites(hsvColor(), { type: 'h/s/v', view: 'color' }, changes, makeData()).map(write => write.field),
        ).toEqual(fields);
    });

    it('the change flags gate only h/s/v', () => {
        expect(channelWrites(new iro.Color('#0a141e'), { type: 'r/g/b', view: 'color' }, {}, makeData())).toHaveLength(
            3,
        );
        expect(channelWrites(new iro.Color('#ff8000'), { type: 'rgb', view: 'color' }, {}, makeData())).toHaveLength(1);
    });

    it('a Kanal without object is skipped, the others are written', () => {
        expect(
            channelWrites(
                new iro.Color('#0a141e'),
                { type: 'r/g/b', view: 'color' },
                undefined,
                makeData({ colorLightGreenOidObject: undefined }),
            ),
        ).toEqual([
            { field: 'colorLightRedOid', value: 10 },
            { field: 'colorLightBlueOid', value: 30 },
        ]);
    });

    it.each(['none', undefined, 'unknown'])('%s: nothing is written', type => {
        expect(channelWrites(hsvColor(), { type, view: 'color' }, undefined, makeData())).toEqual([]);
    });
});

describe('PIN write: fallback for a missing picker property', () => {
    /** A picker colour without the property: 2000 K, #ffffff, else 0. */
    const empty = {} as iro.Color;

    it.each<[string, 'color' | 'cct', 'kelvin' | 'brightness' | undefined, object[]]>([
        ['cct', 'cct', 'kelvin', [{ field: 'colorLightTemperatureOid', value: 2000 }]],
        ['cct', 'cct', 'brightness', [{ field: 'colorLightBrightnessOid', value: 0 }]],
        ['rgb', 'color', undefined, [{ field: 'colorLightRgbHexOid', value: '#ffffff' }]],
        [
            'r/g/b',
            'color',
            undefined,
            [
                { field: 'colorLightRedOid', value: 0 },
                { field: 'colorLightGreenOid', value: 0 },
                { field: 'colorLightBlueOid', value: 0 },
            ],
        ],
        [
            'h/s/v',
            'color',
            undefined,
            [
                { field: 'colorLightHueOid', value: 0 },
                { field: 'colorLightSaturationOid', value: 0 },
                { field: 'colorLightBrightnessOid', value: 0 },
            ],
        ],
    ])('%s (%s view, %s picker)', (type, view, picker, writes) => {
        expect(channelWrites(empty, { type, view, picker }, undefined, makeData())).toEqual(writes);
    });
});
