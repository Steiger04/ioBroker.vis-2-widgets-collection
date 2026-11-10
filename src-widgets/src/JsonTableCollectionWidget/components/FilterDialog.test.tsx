/**
 * FilterDialog — every opening starts from the column's current filter.
 *
 * @module widgets/JsonTableCollectionWidget/components/FilterDialog.test
 * @remarks
 * The dialog edits a draft; opening it (again) or a new current filter while it is open replaces
 * the draft with the current filter, so an abandoned edit never survives into the next opening.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';
import { act } from 'react';

import FilterDialog, { type FilterDialogProps } from './FilterDialog';
import { renderComponent, type RenderComponentHandle } from '../../lib/testing/testHarness';

const mounted: RenderComponentHandle<FilterDialogProps>[] = [];
afterEach(() => {
    mounted.splice(0).forEach(handle => handle.unmount());
});

const props = (open: boolean, currentValue: unknown): FilterDialogProps => ({
    open,
    onClose: vi.fn(),
    onApply: vi.fn(),
    currentValue,
    columnId: 'temperature',
    columnType: 'number',
});

const mount = (open: boolean, currentValue: unknown): RenderComponentHandle<FilterDialogProps> => {
    const handle = renderComponent(FilterDialog, props(open, currentValue));
    mounted.push(handle);
    return handle;
};

/** The dialog renders into a portal on the body. */
const valueField = (): HTMLInputElement | null => document.body.querySelector('input[type="number"]');

const typeInto = (input: HTMLInputElement, text: string): void => {
    act(() => {
        const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
        setter?.call(input, text);
        input.dispatchEvent(new Event('input', { bubbles: true }));
    });
};

describe('FilterDialog', () => {
    it('opens on the current filter', () => {
        mount(true, { operator: 'greaterThan', value: 5 });
        expect(valueField()?.value).toBe('5');
    });

    it('drops an abandoned edit when it opens again', () => {
        const handle = mount(true, { operator: 'greaterThan', value: 5 });
        typeInto(valueField()!, '9');
        expect(valueField()?.value).toBe('9');

        handle.rerender(props(false, { operator: 'greaterThan', value: 5 }));
        handle.rerender(props(true, { operator: 'greaterThan', value: 5 }));
        expect(valueField()?.value).toBe('5');
    });

    it('takes over a new current filter while open', () => {
        const handle = mount(true, { operator: 'greaterThan', value: 5 });
        typeInto(valueField()!, '9');

        handle.rerender(props(true, { operator: 'greaterThan', value: 7 }));
        expect(valueField()?.value).toBe('7');
    });
});
