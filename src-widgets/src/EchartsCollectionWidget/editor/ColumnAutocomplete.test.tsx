/**
 * Render tests for the ColumnAutocomplete closed state (zuordnung-redesign ticket 03) — the
 * type badge and the Zeitachse hint answer "what will this column give me?" WITHOUT opening
 * the picker, and a truncating path carries the full path in a native title tooltip.
 *
 * @module EchartsCollectionWidget/editor/ColumnAutocomplete.test
 */
import { describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});
// The icons barrel is a heavy leaf (minutes of transform) — controls.tsx only needs the
// chevron, which these assertions never look at. Marker-mock, the sectionTabs precedent.
vi.mock('@mui/icons-material', () => ({ ExpandMore: () => null, ErrorOutline: () => null }));

import { act, createElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import ColumnAutocomplete from './ColumnAutocomplete';
import type { JsonTableColumn } from '../../hooks/useJsonTableAnalysis';

/** Mount with props; returns the live container. */
const mount = (props: Record<string, unknown>): HTMLElement => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root: Root = createRoot(container);
    act(() => {
        root.render(createElement(ColumnAutocomplete as never, props as never));
    });
    return container;
};

const column = (path: string, type: JsonTableColumn['type']): JsonTableColumn => ({
    path,
    type,
    nullable: false,
    typeCounts: { [type]: 3 },
    nullCount: 0,
    distinctCount: 3,
    confidence: 1,
});

const COLUMNS: JsonTableColumn[] = [
    column('temp', 'number'),
    { ...column('timestamp', 'date'), dateFormat: 'ISO-8601' },
    column('name', 'string'),
];

/** The closed field's native input (the visible value carrier). */
const inputOf = (el: HTMLElement): HTMLInputElement => {
    const input = el.querySelector('input');
    if (!input) {
        throw new Error('no input rendered');
    }
    return input;
};

describe('ColumnAutocomplete — closed state badges (ticket 03)', () => {
    it("shows the selected column's type badge without opening", () => {
        const el = mount({ label: 'X', value: 'temp', columns: COLUMNS, onChange: () => {}, emptyLabel: '(idx)' });
        expect(inputOf(el).value).toBe('temp');
        expect(el.textContent).toContain('echarts_col_type_number');
    });

    it('the dateHint (X picker) adds the Zeitachse chip for date columns only', () => {
        const el = mount({
            label: 'X',
            value: 'timestamp',
            columns: COLUMNS,
            onChange: () => {},
            emptyLabel: '(idx)',
            dateHint: true,
        });
        expect(el.textContent).toContain('echarts_col_type_date');
        expect(el.textContent).toContain('echarts_mapping_time_axis');
    });

    it('a date column WITHOUT dateHint (yPath rows) gets the type badge but no Zeitachse chip', () => {
        const el = mount({
            label: 'Y',
            value: 'timestamp',
            columns: COLUMNS,
            onChange: () => {},
            emptyLabel: '(none)',
        });
        expect(el.textContent).toContain('echarts_col_type_date');
        expect(el.textContent).not.toContain('echarts_mapping_time_axis');
    });

    it('the empty option carries no badges and no title', () => {
        const el = mount({ label: 'X', value: '', columns: COLUMNS, onChange: () => {}, emptyLabel: '(idx)' });
        expect(el.textContent).not.toContain('echarts_col_type_');
        expect(inputOf(el).title).toBe('');
    });

    it('a drifted path (not in the schema) shows no badges — the picker does not invent a type', () => {
        const el = mount({
            label: 'X',
            value: 'gone.column',
            columns: COLUMNS,
            onChange: () => {},
            emptyLabel: '(idx)',
        });
        expect(inputOf(el).value).toBe('gone.column');
        expect(el.textContent).not.toContain('echarts_col_type_');
    });

    it('a selected path carries the full path as native title (the truncation tooltip)', () => {
        const el = mount({
            label: 'X',
            value: 'order.items[0].sku',
            columns: [{ ...column('order.items[0].sku', 'string') }],
            onChange: () => {},
            emptyLabel: '(idx)',
        });
        expect(inputOf(el).title).toBe('order.items[0].sku');
    });
});
