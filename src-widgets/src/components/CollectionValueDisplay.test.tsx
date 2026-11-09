/**
 * CollectionValueDisplay — the shared icon + value cluster, rendered.
 *
 * @module components/CollectionValueDisplay.test
 * @remarks
 * The first test surface for the display cluster State and Input share (K3):
 * icon/value gating and the HTML passthrough of the formatted value. Pure
 * rendering over already-resolved StyleData — no context, no socket.
 */
import { describe, expect, it } from 'vitest';

import { renderComponent, type RenderComponentHandle } from '../lib/testing/testHarness';
import CollectionValueDisplay, { type CollectionValueDisplayProps } from './CollectionValueDisplay';
import type { StyleData } from '../hooks/useData/types';

/** Minimal StyleData slice the cluster consumes (icon, value, colours, offsets). */
const makeData = (overrides: Partial<StyleData> = {}): StyleData =>
    ({
        icon: undefined,
        iconColor: undefined,
        forceColorMask: false,
        iconSizeOnly: 24,
        iconXOffset: 0,
        iconYOffset: 0,
        valueSize: '1rem',
        textColor: '#123456',
        ...overrides,
    }) as unknown as StyleData;

const mount = (
    overrides: Partial<CollectionValueDisplayProps> = {},
): RenderComponentHandle<CollectionValueDisplayProps> => {
    // Fully-typed props so renderComponent infers P = CollectionValueDisplayProps.
    const props: CollectionValueDisplayProps = {
        data: overrides.data ?? makeData(),
        contentValue: overrides.contentValue ?? '21,5 °C',
        noIcon: overrides.noIcon ?? false,
        noValue: overrides.noValue ?? false,
    };

    return renderComponent(CollectionValueDisplay, props);
};

describe('CollectionValueDisplay', () => {
    it('renders the value text by default', () => {
        const { container, unmount } = mount({ contentValue: '42 kW' });

        expect(container.textContent).toContain('42 kW');
        unmount();
    });

    it('hides the value when noValue is set', () => {
        const { container, unmount } = mount({ contentValue: '42 kW', noValue: true });

        expect(container.textContent).not.toContain('42 kW');
        unmount();
    });

    it('renders an icon image when data.icon is set', () => {
        const { container, unmount } = mount({ data: makeData({ icon: 'data:image/png;base64,x' }) });

        expect(container.querySelector('img')).not.toBeNull();
        unmount();
    });

    it('paints the icon in the colour useData resolved', () => {
        const { container, unmount } = mount({
            data: makeData({ icon: 'data:image/png;base64,x', iconColor: '#abcdef' }),
        });

        expect(container.querySelector('img')?.style.color).toBe('#abcdef');
        unmount();
    });

    it('renders no icon without data.icon or with noIcon', () => {
        const withoutIcon = mount({});
        expect(withoutIcon.container.querySelector('img')).toBeNull();
        withoutIcon.unmount();

        const flagged = mount({ data: makeData({ icon: 'data:image/png;base64,x' }), noIcon: true });
        expect(flagged.container.querySelector('img')).toBeNull();
        flagged.unmount();
    });

    it('passes HTML content through into the value typography', () => {
        const { container, unmount } = mount({ contentValue: '<b>fett</b>' });

        // The cluster wraps the content in its left-aligned inline-block div.
        const wrapper = container.querySelector('div[style*="inline-block"]');
        expect(wrapper?.innerHTML).toContain('<b>fett</b>');
        unmount();
    });
});
