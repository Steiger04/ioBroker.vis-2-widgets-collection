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

import { renderComponent, type RenderComponentHandle } from '../lib/testing/testHarness';
import StateChangeDialog, { type StateChangeDialogProps } from './StateChangeDialog';

/** Mounts the dialog fully prop-typed; defaults mirror a two-state boolean widget. */
const mount = (overrides: Partial<StateChangeDialogProps> = {}): RenderComponentHandle<StateChangeDialogProps> => {
    const props: StateChangeDialogProps = {
        widgetStates: { 0: 'OFF', 1: 'ON' },
        open: true,
        closeHandler: vi.fn(),
        title: 'Wert ändern',
        currentValue: 1,
        onCommit: vi.fn(),
        ...overrides,
    };

    return renderComponent(StateChangeDialog, props);
};

describe('StateChangeDialog', () => {
    it('renders every widgetStates entry as a selectable list item', () => {
        const handle = mount({ widgetStates: { 0: 'OFF', 1: 'ON', 50: 'Dim 50%' } });

        expect(document.querySelectorAll('.MuiListItemButton-root')).toHaveLength(3);
        const dialogText = document.querySelector('.MuiDialog-root')?.textContent ?? '';
        expect(dialogText).toContain('OFF');
        expect(dialogText).toContain('ON');
        expect(dialogText).toContain('Dim 50%');
        handle.unmount();
    });

    it('commits the clicked state key through onCommit', () => {
        const onCommit = vi.fn();
        const handle = mount({ onCommit });

        const items = document.querySelectorAll('.MuiListItemButton-root');
        act(() => {
            items[1]?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });

        expect(onCommit).toHaveBeenCalledTimes(1);
        expect(onCommit).toHaveBeenCalledWith('1');
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
        const handle = mount({ widgetStates: {}, slider: { min: -20, max: 40 } });

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

    it('does not seed the slider from an empty state key', () => {
        // Number('') is 0, not NaN — a blank key must not drag the slider to 0.
        const handle = mount({
            widgetStates: { '': 'Blank' },
            slider: { min: 0, max: 100 },
            currentValue: 55,
        });

        const sliderValue = (): string | null =>
            document.querySelector('.MuiSlider-thumb input')?.getAttribute('aria-valuenow');
        expect(sliderValue()).toBe('55');

        const blankItem = Array.from(document.querySelectorAll('.MuiListItemButton-root')).find(
            item => item.textContent === 'Blank',
        );
        act(() => {
            blankItem?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });

        expect(sliderValue()).toBe('55');
        handle.unmount();
    });

    it('seeds the slider with a clicked numeric state key', () => {
        const onCommit = vi.fn();
        const handle = mount({
            widgetStates: { 80: 'Dim 80%' },
            slider: { min: 0, max: 100 },
            currentValue: 55,
            onCommit,
        });

        const dimItem = Array.from(document.querySelectorAll('.MuiListItemButton-root')).find(
            item => item.textContent === 'Dim 80%',
        );
        act(() => {
            dimItem?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });

        expect(document.querySelector('.MuiSlider-thumb input')?.getAttribute('aria-valuenow')).toBe('80');
        expect(onCommit).toHaveBeenCalledWith('80');
        handle.unmount();
    });
});
