/**
 * CollectionValueText — the shared value typography, rendered.
 *
 * @module components/CollectionValueText.test
 * @remarks
 * Structural surface for the typography the Wert-Anzeige cluster renders
 * centered and the Checkbox renders as its label: the HTML passthrough
 * wrapper (frozen inline style — the cluster variant, no width) and the
 * empty-content fallback. Visual freezes (gradient clip, alignment) ride on
 * the cluster regression test plus HMR; style-computed assertions are
 * deliberately avoided (family precedent — see CollectionValueDisplay.test).
 */
import { describe, expect, it } from 'vitest';

import { renderComponent, type RenderComponentHandle } from '../lib/testing/testHarness';
import CollectionValueText, { type CollectionValueTextProps } from './CollectionValueText';

const mount = (overrides: Partial<CollectionValueTextProps> = {}): RenderComponentHandle<CollectionValueTextProps> => {
    // Fully-typed props so renderComponent infers P = CollectionValueTextProps.
    const props: CollectionValueTextProps = {
        valueSize: '1rem',
        textColor: '#123456',
        contentValue: overrides.contentValue ?? '21,5 °C',
        ...overrides,
    };

    return renderComponent(CollectionValueText, props);
};

describe('CollectionValueText', () => {
    it('renders the formatted value', () => {
        const { container, unmount } = mount({ contentValue: '42 kW' });

        expect(container.textContent).toContain('42 kW');
        unmount();
    });

    it('wraps HTML content in the left-aligned inline-block div (frozen cluster wrapper)', () => {
        const { container, unmount } = mount({ contentValue: '<b>fett</b>' });

        const wrapper = container.querySelector('div[style*="inline-block"]');
        expect(wrapper?.innerHTML).toContain('<b>fett</b>');
        // Byte-exact cluster variant — no inline width.
        expect(wrapper?.getAttribute('style')).toBe('text-align: left; display: inline-block;');
        unmount();
    });

    it('stretches the wrapper to full width in the label variant (frozen checkbox wrapper)', () => {
        const { container, unmount } = mount({ contentValue: '<b>fett</b>', wrapperFullWidth: true });

        const wrapper = container.querySelector('div[style*="inline-block"]');
        // Byte-exact label variant — the alias HTML (block elements, images)
        // lays out over the full width, as the checkbox label always did.
        expect(wrapper?.getAttribute('style')).toBe('text-align: left; display: inline-block; width: 100%;');
        expect(wrapper?.innerHTML).toContain('<b>fett</b>');
        unmount();
    });

    it('renders an empty wrapper for empty content', () => {
        const { container, unmount } = mount({ contentValue: '' });

        const wrapper = container.querySelector('div[style*="inline-block"]');
        expect(wrapper?.innerHTML).toBe('');
        unmount();
    });

    it('mounts with consumer sx deltas without altering the wrapper', () => {
        const { container, unmount } = mount({ sx: { justifyContent: 'flex-start', pr: 2 } });

        const wrapper = container.querySelector('div[style*="inline-block"]');
        expect(wrapper?.innerHTML).toContain('21,5 °C');
        unmount();
    });
});
