/**
 * Select editor fields: the display-only toggle follows the write target (ADR-0090);
 * the arrow colour swatch shows the base cascade the arrow falls back to (ADR-0004).
 *
 * @module lib/selectFields.test
 */
import { describe, expect, it, vi } from 'vitest';

import type { Theme } from '@mui/material';
import type { WidgetData } from '@iobroker/types-vis-2';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import { resolveEffectiveColor } from './helper/resolveEffectiveColor';
import { arrowColorContract } from './selectColorContract';

// The field list renders CollectionDivider / ContractColorField, which pull
// Generic (extends window.visRxWidget, absent outside vis-2). The predicates never render.
vi.mock('../components/ContractColorField', () => ({ default: () => null }));
vi.mock('../components/PlainColorField', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));

import selectFields from './selectFields';

type Predicate = (data: WidgetData) => boolean;

const onlyDisplayField = selectFields().find(field => (field as { name?: string }).name === 'onlyDisplay') as {
    hidden: Predicate;
    disabled: Predicate;
};

const STATUS = 'zigbee.0.lamp.mode_status';
const COMMAND = 'zigbee.0.lamp.mode_set';

describe('selectFields — the display-only toggle follows the write target', () => {
    it('stays available for a writable control ID over a read-only status OID', () => {
        // Root `write` belongs to the main OID (read-only status).
        const data = {
            write: false,
            oidObject: { _id: STATUS, write: false },
            cidObject: { _id: COMMAND, write: true },
        };

        expect(onlyDisplayField.hidden(data)).toBe(false);
        expect(onlyDisplayField.disabled(data)).toBe(false);
    });

    it('is hidden and disabled for a read-only control ID', () => {
        const data = {
            write: true,
            oidObject: { _id: STATUS, write: true },
            cidObject: { _id: COMMAND, write: false },
        };

        expect(onlyDisplayField.hidden(data)).toBe(true);
        expect(onlyDisplayField.disabled(data)).toBe(true);
    });

    it('without a control ID, a read-only main OID hides and disables it (unchanged)', () => {
        const data = { write: false, oidObject: { _id: STATUS, write: false } };

        expect(onlyDisplayField.hidden(data)).toBe(true);
        expect(onlyDisplayField.disabled(data)).toBe(true);
    });

    it('without a control ID, a writable main OID shows it (unchanged)', () => {
        const data = { write: true, oidObject: { _id: STATUS, write: true } };

        expect(onlyDisplayField.hidden(data)).toBe(false);
        expect(onlyDisplayField.disabled(data)).toBe(false);
    });
});

describe('selectFields — the arrow colour swatch shows what the arrow falls back to (ADR-0004)', () => {
    const arrowColorField = selectFields().find(
        field => (field as { name?: string }).name === 'arrowColor',
    ) as ExtendedField;

    const THEME = {
        palette: {
            primary: { main: '#pri' },
            text: { primary: '#txt' },
            background: { paper: '#pap', default: '#bg' },
        },
    } as unknown as Theme;

    /** The colour the editor swatch shows — the picker resolves the field contract exactly so. */
    const swatch = (data: Record<string, unknown>, cssColor?: string): string =>
        resolveEffectiveColor(arrowColorField, data, THEME, cssColor === undefined ? undefined : { color: cssColor });

    it('shows an explicit arrow colour as set', () => {
        expect(swatch({ arrowColor: '#aa0000', textColor: '#00aa00' }, '#0000aa')).toBe('#aa0000');
    });

    it('without one, shows the text colour', () => {
        expect(swatch({ textColor: '#00aa00' }, '#0000aa')).toBe('#00aa00');
    });

    it('without a text colour, shows the vis-2 CSS colour, else the theme text colour', () => {
        expect(swatch({}, '#0000aa')).toBe('#0000aa');
        expect(swatch({})).toBe('#txt');
    });

    it('stays solid-only', () => {
        expect(arrowColorField.noGradient).toBe(true);
    });

    it('declares the one arrow contract the runtime resolves', () => {
        const { name, fallbackFields, terminal, inheritTextStyle } = arrowColorField;

        expect({ name, fallbackFields, terminal, inheritTextStyle }).toEqual(arrowColorContract);
        expect(arrowColorContract).toEqual({
            name: 'arrowColor',
            fallbackFields: ['textColor'],
            terminal: 'text',
            inheritTextStyle: true,
        });
    });
});
