/**
 * The Lichttyp channel table: which Kanäle each Lichttyp binds, per view.
 *
 * @module lib/light2Channels.test
 * @remarks
 * Table tests over all eight Lichttypen (plus an unset one): the views, the Kanäle of each
 * view with their picker property, Hue-Skala, HSV change flag and CCT picker, the editor
 * visibility of every Kanal field, and the fixed order of the main-colour sync Kanäle.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

import {
    LIGHT2_CHANNEL_FIELDS,
    channelsOf,
    hasView,
    isChannelFieldVisible,
    mainColorSyncFields,
    offersViewSwitch,
    viewsOf,
} from './light2Channels';
import type { Light2ChannelField, Light2Type } from './light2Channels';

const TYPES: (Light2Type | undefined)[] = [
    'none',
    'cct',
    'rgb',
    'rgbcct',
    'r/g/b',
    'r/g/b/cct',
    'h/s/v',
    'h/s/v/cct',
    undefined,
];

const TEMPERATURE = {
    field: 'colorLightTemperatureOid',
    property: 'kelvin',
    hueScale: false,
    picker: 'kelvin',
};
const CCT_BRIGHTNESS = {
    field: 'colorLightBrightnessOid',
    property: 'value',
    hueScale: true,
    picker: 'brightness',
};
const RGB_HEX = { field: 'colorLightRgbHexOid', property: 'hexString', hueScale: false };
const RED = { field: 'colorLightRedOid', property: 'red', hueScale: false };
const GREEN = { field: 'colorLightGreenOid', property: 'green', hueScale: false };
const BLUE = { field: 'colorLightBlueOid', property: 'blue', hueScale: false };
const HUE = { field: 'colorLightHueOid', property: 'hue', hueScale: false, changeFlag: 'h' };
const SATURATION = { field: 'colorLightSaturationOid', property: 'saturation', hueScale: true, changeFlag: 's' };
const HSV_BRIGHTNESS = { field: 'colorLightBrightnessOid', property: 'value', hueScale: true, changeFlag: 'v' };

describe('views per Lichttyp', () => {
    it.each<[Light2Type | undefined, string[], boolean]>([
        ['none', [], false],
        ['cct', ['cct'], false],
        ['rgb', ['color'], false],
        ['rgbcct', ['color', 'cct'], true],
        ['r/g/b', ['color'], false],
        ['r/g/b/cct', ['color', 'cct'], true],
        ['h/s/v', ['color'], false],
        ['h/s/v/cct', ['color', 'cct'], true],
        // A widget stored without the key shows the colour picker, without Kanäle.
        [undefined, ['color'], false],
    ])('%s: views %j, view switch %s', (type, views, switchable) => {
        expect(viewsOf(type)).toEqual(views);
        expect(hasView(type, 'color')).toBe(views.includes('color'));
        expect(hasView(type, 'cct')).toBe(views.includes('cct'));
        expect(offersViewSwitch(type)).toBe(switchable);
    });
});

describe('Kanäle per Lichttyp and view', () => {
    it.each<[Light2Type | undefined, object[], object[]]>([
        ['none', [], []],
        ['cct', [], [TEMPERATURE, CCT_BRIGHTNESS]],
        ['rgb', [RGB_HEX], []],
        ['rgbcct', [RGB_HEX], [TEMPERATURE, CCT_BRIGHTNESS]],
        ['r/g/b', [RED, GREEN, BLUE], []],
        ['r/g/b/cct', [RED, GREEN, BLUE], [TEMPERATURE, CCT_BRIGHTNESS]],
        ['h/s/v', [HUE, SATURATION, HSV_BRIGHTNESS], []],
        ['h/s/v/cct', [HUE, SATURATION, HSV_BRIGHTNESS], [TEMPERATURE, CCT_BRIGHTNESS]],
        [undefined, [], []],
    ])('%s', (type, color, cct) => {
        expect(channelsOf(type, 'color')).toEqual(color);
        expect(channelsOf(type, 'cct')).toEqual(cct);
    });

    it('lists every Kanal field once', () => {
        expect(LIGHT2_CHANNEL_FIELDS).toEqual([
            'colorLightTemperatureOid',
            'colorLightRgbHexOid',
            'colorLightRedOid',
            'colorLightGreenOid',
            'colorLightBlueOid',
            'colorLightHueOid',
            'colorLightSaturationOid',
            'colorLightBrightnessOid',
        ]);
    });
});

describe('editor visibility of the Kanal fields', () => {
    const VISIBLE: Record<string, Light2ChannelField[]> = {
        none: [],
        cct: ['colorLightTemperatureOid', 'colorLightBrightnessOid'],
        rgb: ['colorLightRgbHexOid'],
        // The CCT-Ansicht writes and reads the brightness, so the editor shows it (fix V4).
        rgbcct: ['colorLightTemperatureOid', 'colorLightRgbHexOid', 'colorLightBrightnessOid'],
        'r/g/b': ['colorLightRedOid', 'colorLightGreenOid', 'colorLightBlueOid'],
        // The CCT-Ansicht writes and reads the brightness, so the editor shows it (fix V4).
        'r/g/b/cct': [
            'colorLightTemperatureOid',
            'colorLightRedOid',
            'colorLightGreenOid',
            'colorLightBlueOid',
            'colorLightBrightnessOid',
        ],
        'h/s/v': ['colorLightHueOid', 'colorLightSaturationOid', 'colorLightBrightnessOid'],
        'h/s/v/cct': [
            'colorLightTemperatureOid',
            'colorLightHueOid',
            'colorLightSaturationOid',
            'colorLightBrightnessOid',
        ],
        undefined: [],
    };

    it.each(TYPES)('%s', type => {
        expect(LIGHT2_CHANNEL_FIELDS.filter(field => isChannelFieldVisible(type, field))).toEqual(
            VISIBLE[String(type)],
        );
    });
});

describe('module boundary', () => {
    it('imports no components and no iro (the editor path loads it)', () => {
        const source = readFileSync(fileURLToPath(new URL('./light2Channels.ts', import.meta.url)), 'utf8');
        const imports = source.match(/^import .*$/gm) ?? [];

        expect(imports.every(line => line.startsWith('import type '))).toBe(true);
        expect(source).not.toMatch(/@jaames\/iro|\.tsx['"]|components\//);
    });
});

describe('main-colour sync Kanäle (backendSyncKey order)', () => {
    it.each<[Light2Type | undefined, Light2ChannelField[]]>([
        ['none', []],
        ['cct', []],
        ['rgb', ['colorLightRgbHexOid']],
        ['rgbcct', ['colorLightRgbHexOid']],
        ['r/g/b', ['colorLightRedOid', 'colorLightGreenOid', 'colorLightBlueOid']],
        ['r/g/b/cct', ['colorLightRedOid', 'colorLightGreenOid', 'colorLightBlueOid']],
        ['h/s/v', ['colorLightHueOid', 'colorLightSaturationOid', 'colorLightBrightnessOid']],
        ['h/s/v/cct', ['colorLightHueOid', 'colorLightSaturationOid', 'colorLightBrightnessOid']],
        [undefined, []],
    ])('%s in the colour view', (type, fields) => {
        expect(mainColorSyncFields(type, 'color')).toEqual(fields);
    });

    it.each(TYPES)('%s in the CCT-Ansicht: none (temperature and brightness sync on their own)', type => {
        expect(mainColorSyncFields(type, 'cct')).toEqual([]);
    });
});
