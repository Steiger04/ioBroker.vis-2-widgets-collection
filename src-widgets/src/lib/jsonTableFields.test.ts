/**
 * JSON-table feature fields: a setting is hidden exactly when a coupling of the
 * Tabellen-Fähigkeiten blocks it, i.e. when switching it on would have no effect.
 *
 * @module lib/jsonTableFields.test
 * @remarks
 * vis-2 hands `hidden` closures the RAW widget data, so the inputs here are raw too.
 */
import { describe, expect, it, vi } from 'vitest';

import type { WidgetData } from '@iobroker/types-vis-2';

// The field list renders the column editor, which pulls Generic (extends window.visRxWidget,
// absent outside vis-2). The predicates never render.
vi.mock('../JsonTableCollectionWidget/JsonTableColumnEditor', () => ({ default: () => null }));

import jsonTableFields from './jsonTableFields';

type Predicate = (data: WidgetData) => boolean;

const hiddenOf = (name: string): Predicate => {
    const field = jsonTableFields().find(f => (f as { name?: string }).name === name) as
        { hidden?: Predicate } | undefined;
    return field?.hidden ?? (() => false);
};

const FEATURE_FIELDS = ['tableSorting', 'tableSortingMulti', 'tableFiltering', 'tableColumnMenu', 'tableHiding'];

describe('jsonTableFields — feature settings follow the Tabellen-Fähigkeiten', () => {
    it.each(FEATURE_FIELDS)('shows %s with default settings', name => {
        expect(hiddenOf(name)({})).toBe(false);
    });

    it.each(FEATURE_FIELDS)('hides %s with the Header', name => {
        expect(hiddenOf(name)({ tableShowHeader: false })).toBe(true);
    });

    it.each(['tableFiltering', 'tableHiding'])('hides %s while the column menu is off', name => {
        expect(hiddenOf(name)({ tableColumnMenu: false })).toBe(true);
    });

    it('keeps sorting and the column menu setting visible while the column menu is off', () => {
        expect(hiddenOf('tableSorting')({ tableColumnMenu: false })).toBe(false);
        expect(hiddenOf('tableColumnMenu')({ tableColumnMenu: false })).toBe(false);
    });

    it('hides multi-sort while sorting is off', () => {
        expect(hiddenOf('tableSortingMulti')({ tableSorting: false })).toBe(true);
    });

    it('never hides a setting because of its own value', () => {
        expect(hiddenOf('tableFiltering')({ tableFiltering: false })).toBe(false);
        expect(hiddenOf('tableHiding')({ tableHiding: false })).toBe(false);
        expect(hiddenOf('tableSorting')({ tableSorting: false })).toBe(false);
    });

    it('keeps the quick filter independent of the Header', () => {
        expect(hiddenOf('tableQuickFilter')({ tableShowHeader: false })).toBe(false);
    });
});

describe('jsonTableFields — row border fields follow the runtime', () => {
    /** Evaluates a `hidden` expression as vis-2 does: against the raw widget data. */
    const isHidden = (name: string, data: WidgetData): boolean => {
        const field = jsonTableFields().find(f => (f as { name?: string }).name === name) as { hidden: string };
        return Boolean(new Function('data', `return ${field.hidden};`)(data));
    };

    const ROW_BORDER_FIELDS = ['horizontalCellBorderWidth', 'horizontalCellBorderColor'];

    it.each(ROW_BORDER_FIELDS)('shows %s while the key is missing: the runtime draws the borders then', name => {
        expect(isHidden(name, {})).toBe(false);
    });

    it.each(ROW_BORDER_FIELDS)('hides %s only with the row borders explicitly off', name => {
        expect(isHidden(name, { tableShowRowBorders: false })).toBe(true);
        expect(isHidden(name, { tableShowRowBorders: true })).toBe(false);
    });
});
