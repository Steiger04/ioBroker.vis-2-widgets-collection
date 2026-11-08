/**
 * StateChangeDialog — the props-driven value dialog, rendered.
 *
 * @module widgets/StateCollectionWidget/StateChangeDialog.test
 * @remarks
 * Pure prop-level rendering on the renderComponent seam (the CollectionValueDisplay
 * pattern): the state list, commits through `onCommit` (the body's single write
 * chain), the slider gate, the title prop and the close affordance. No context,
 * no socket — everything the dialog knows arrives as props, so the dialog mounts
 * without a provider. The MUI Dialog portals into document.body, hence the
 * `document` queries instead of the mount container.
 */
import { describe, expect, it, vi } from 'vitest';
import { act } from 'react';

import type { StateStyleData } from '../hooks/useData/types';
import { renderComponent, type RenderComponentHandle } from '../lib/testing/testHarness';
import StateChangeDialog, { type StateChangeDialogProps } from './StateChangeDialog';

/** One resolved state row the way useData publishes it; its Feldnummer follows its position here. */
const row = (position: number, value: StateStyleData['value'], label: string): StateStyleData => ({
    fieldNumber: position + 1,
    active: false,
    value,
    label,
});

/** The resolved rows for `[value, label]` pairs, in the order they are given. */
const rows = (...entries: [StateStyleData['value'], string][]): StateStyleData[] =>
    entries.map(([value, label], position) => row(position, value, label));

/** Mounts the dialog fully prop-typed; defaults mirror a two-state boolean widget. */
const mount = (overrides: Partial<StateChangeDialogProps> = {}): RenderComponentHandle<StateChangeDialogProps> => {
    const props: StateChangeDialogProps = {
        states: rows([0, 'OFF'], [1, 'ON']),
        open: true,
        closeHandler: vi.fn(),
        title: 'Wert ändern',
        currentValue: 1,
        onCommit: vi.fn(),
        ...overrides,
    };

    return renderComponent(StateChangeDialog, props);
};

const listItems = (): Element[] => Array.from(document.querySelectorAll('.MuiListItemButton-root'));

const clickItem = (item: Element | undefined): void => {
    act(() => {
        item?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
};

const thumbValue = (): string | null =>
    document.querySelector('.MuiSlider-thumb input')?.getAttribute('aria-valuenow') ?? null;

describe('StateChangeDialog', () => {
    it('renders every state as a selectable list item', () => {
        const handle = mount({ states: rows([0, 'OFF'], [1, 'ON'], [50, 'Dim 50%']) });

        expect(listItems()).toHaveLength(3);
        const dialogText = document.querySelector('.MuiDialog-root')?.textContent ?? '';
        expect(dialogText).toContain('OFF');
        expect(dialogText).toContain('ON');
        expect(dialogText).toContain('Dim 50%');
        handle.unmount();
    });

    it('commits the value of the clicked state through onCommit', () => {
        const onCommit = vi.fn();
        const handle = mount({ onCommit });

        clickItem(listItems()[1]);

        expect(onCommit).toHaveBeenCalledTimes(1);
        expect(onCommit).toHaveBeenCalledWith(1);
        handle.unmount();
    });

    it('renders a slider only when the slider prop is present', () => {
        const withoutSlider = mount();
        expect(document.querySelector('.MuiSlider-root')).toBeNull();
        withoutSlider.unmount();

        const withSlider = mount({ slider: { min: 0, max: 100 } });
        expect(document.querySelector('.MuiSlider-root')).not.toBeNull();
        withSlider.unmount();
    });

    it('labels the slider marks with the passed bounds', () => {
        const handle = mount({ states: [], slider: { min: -20, max: 40 } });

        const dialogText = document.querySelector('.MuiDialog-root')?.textContent ?? '';
        expect(dialogText).toContain('-20');
        expect(dialogText).toContain('40');
        handle.unmount();
    });

    it('draws the title prop as the dialog title', () => {
        const handle = mount({ title: 'Wert ändern' });

        expect(document.querySelector('.MuiDialogTitle-root')?.textContent ?? '').toContain('Wert ändern');
        handle.unmount();
    });

    it('closes through the X button', () => {
        const closeHandler = vi.fn();
        const handle = mount({ closeHandler });

        act(() => {
            document
                .querySelector('button[aria-label="close"]')
                ?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });

        expect(closeHandler).toHaveBeenCalledTimes(1);
        handle.unmount();
    });

    it('closes when the backdrop is clicked', () => {
        const closeHandler = vi.fn();
        const handle = mount({ closeHandler });

        act(() => {
            // The backdrop carries MUI's own onClick (target === currentTarget check),
            // so the click must land on the backdrop element itself.
            document.querySelector('.MuiBackdrop-root')?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });

        expect(closeHandler).toHaveBeenCalledTimes(1);
        handle.unmount();
    });

    it('closes when Escape is pressed', () => {
        const closeHandler = vi.fn();
        const handle = mount({ closeHandler });

        act(() => {
            // MUI's keydown handler sits on the modal root; a bubbling Escape
            // from inside the dialog reaches it.
            document
                .querySelector('.MuiDialogTitle-root')
                ?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
        });

        expect(closeHandler).toHaveBeenCalledTimes(1);
        handle.unmount();
    });

    it('seeds the slider with the value of a clicked numeric state', () => {
        const onCommit = vi.fn();
        const handle = mount({
            states: rows([80, 'Dim 80%']),
            slider: { min: 0, max: 100 },
            currentValue: 55,
            onCommit,
        });

        clickItem(listItems()[0]);

        expect(thumbValue()).toBe('80');
        expect(onCommit).toHaveBeenCalledWith(80);
        handle.unmount();
    });
});

describe('StateChangeDialog list over the resolved states (ticket 13)', () => {
    it('draws the states in the order they arrive', () => {
        const handle = mount({ states: rows([100, 'hundert'], [50, 'fünfzig'], [0, 'null']) });

        expect(listItems().map(item => item.textContent)).toEqual(['hundert', 'fünfzig', 'null']);
        handle.unmount();
    });

    it('keeps duplicate values as entries of their own, each committing its value', () => {
        const onCommit = vi.fn();
        const handle = mount({ states: rows([1, 'A'], [1, 'B']), onCommit });

        expect(listItems().map(item => item.textContent)).toEqual(['A', 'B']);

        clickItem(listItems()[1]);

        expect(onCommit).toHaveBeenCalledTimes(1);
        expect(onCommit).toHaveBeenCalledWith(1);
        handle.unmount();
    });

    it.each([
        ['a text', 'an'],
        ['a boolean', true],
    ])('commits %s value as it is and leaves the slider where it was', (_case, value) => {
        const onCommit = vi.fn();
        const handle = mount({
            states: rows([value, 'A']),
            slider: { min: 0, max: 100 },
            currentValue: 55,
            onCommit,
        });

        clickItem(listItems()[0]);

        expect(thumbValue()).toBe('55');
        expect(onCommit).toHaveBeenCalledWith(value);
        handle.unmount();
    });

    it('a row on a number OID that is no number leaves the slider where it was', () => {
        const handle = mount({
            states: rows([NaN, 'A']),
            slider: { min: 0, max: 100 },
            currentValue: 55,
        });

        clickItem(listItems()[0]);

        expect(thumbValue()).toBe('55');
        handle.unmount();
    });
});
