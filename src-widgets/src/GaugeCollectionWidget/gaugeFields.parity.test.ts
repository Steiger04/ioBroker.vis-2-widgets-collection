/**
 * Parity invariant between the real field definitions and the Options-Builder.
 *
 * @module GaugeCollectionWidget/gaugeFields.parity.test
 * @remarks
 * Imports the real `gaugeFields()`. The invariant this file pins: every field
 * either maps to an option key by the `gaugeX → x` prefix convention or is an
 * explicitly known special — a new field that silently maps nowhere fails here,
 * which is exactly what the four hand-synchronised copies of the option surface
 * historically allowed to rot.
 */

import { describe, it, expect } from 'vitest';
import type { Theme } from '@mui/material';
import type { ColorTerminal } from '../types/field-definitions/extended-field';

/** Minimal fake theme for the color-contract terminals. */
const theme = {
    palette: { primary: { main: '#1976d2' }, text: { primary: 'rgba(0,0,0,0.87)' }, background: { paper: '#fff' } },
} as unknown as Theme;

import gaugeFields from '../lib/gaugeFields';
import { buildGaugeOptions, isEditorChrome } from './gaugeOptions';

/**
 * Structural view of the field union — the schema type is a wide union whose
 * members carry `name`/`type` only optionally; the parity invariant reads
 * exactly these three properties.
 */
type FieldLike = {
    name?: string;
    type?: string;
    default?: unknown;
    terminal?: ColorTerminal;
    plainColor?: boolean;
};

const fields = (): FieldLike[] => gaugeFields() as FieldLike[];

/** Option keys the builder computes instead of deriving them from a field. */
const COMPUTED_KEYS = [
    'gaugeType',
    'minValue',
    'maxValue',
    'majorTicks',
    'width',
    'height',
    'value',
    'units',
    'title',
    'highlights',
];

/** Special fields consumed OUTSIDE the option object (overlay, dimensions, class choice). */
const NON_OPTION_FIELDS = new Set(['gaugeType', 'gaugeIconFit', 'gaugePadding']);

/** Independent re-implementation of the naming convention (so the test verifies it, not mirrors it). */
const strip = (name: string): string =>
    name.startsWith('gauge') ? name.charAt(5).toLowerCase() + name.slice(6) : name;

/** A set value for every field type, so no key is dropped for being unset. */
function sampleValue(type: string): unknown {
    switch (type) {
        case 'number':
            return 10;
        case 'checkbox':
            return true;
        default:
            return 'set';
    }
}

function buildFullyPopulated(): Record<string, unknown> {
    const list = fields();
    const data: Record<string, unknown> = {};
    for (const field of list) {
        // Mirrors the builder: editor chrome (a divider) carries no option; contract colour
        // fields and Schlichte Farbfelder are real option fields.
        if (field.type && field.name && !isEditorChrome(field)) {
            data[field.name] = sampleValue(field.type);
        }
    }
    return buildGaugeOptions(list, data, {
        width: 300,
        height: 150,
        value: 42,
        unit: '°C',
        header: 'Title',
        states: [],
        theme,
        textStyles: undefined,
    }) as Record<string, unknown>;
}

describe('gaugeFields ↔ Options-Builder parity', () => {
    it('every field maps to an option key (prefix convention or known special)', () => {
        const options = buildFullyPopulated();
        const keys = new Set(Object.keys(options));

        for (const field of fields()) {
            if (!field.type || !field.name || isEditorChrome(field)) {
                continue; // dividers / editor-only components
            }
            const key = strip(field.name);
            if (NON_OPTION_FIELDS.has(field.name)) {
                expect(
                    keys.has(key),
                    `field ${field.name} is a non-option special — key "${key}" must not leak into the options`,
                ).toBe(false);
            } else {
                expect(keys.has(key), `field ${field.name} must map to option "${key}"`).toBe(true);
            }
        }
    });

    it('the option object contains NOTHING beyond fields and computed specials', () => {
        const options = buildFullyPopulated();
        const expected = new Set(COMPUTED_KEYS);
        for (const field of fields()) {
            if (!field.type || !field.name || isEditorChrome(field) || NON_OPTION_FIELDS.has(field.name)) {
                continue;
            }
            expected.add(strip(field.name));
        }
        expect(new Set(Object.keys(options))).toEqual(expected);
    });
});
