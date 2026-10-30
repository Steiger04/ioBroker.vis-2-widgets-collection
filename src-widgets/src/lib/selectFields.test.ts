/**
 * Select editor fields: the display-only toggle follows the write target (ADR-0090).
 *
 * @module lib/selectFields.test
 */
import { describe, expect, it, vi } from 'vitest';

import type { WidgetData } from '@iobroker/types-vis-2';

// The field list renders CollectionDivider / CollectionGradientColorPicker, which pull
// Generic (extends window.visRxWidget, absent outside vis-2). The predicates never render.
vi.mock('../components/CollectionGradientColorPicker', () => ({ default: () => null }));
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
