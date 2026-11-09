/**
 * TypeBadgeChip — the type badge renders in the vis-2 host.
 *
 * @module widgets/JsonTableCollectionWidget/components/TypeBadgeChip.test
 * @remarks
 * An own `t` that uses the prefix: the chip's text reaches the host's `t` with the prefix as
 * receiver, so the assertions read the prefixed key.
 */
import { describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static getI18nPrefix(): string {
            return '';
        }

        static t(this: { getI18nPrefix(): string }, key: string): string {
            return `${this.getI18nPrefix()}${key}`;
        }
    };
});

import { act, createElement } from 'react';
import { createRoot } from 'react-dom/client';

import TypeBadgeChip from './TypeBadgeChip';
import { typeBadgeOf } from './typeBadge';

/** Mount the chip; returns the live container. */
const mount = (badge: ReturnType<typeof typeBadgeOf>): HTMLElement => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
        createRoot(container).render(createElement(TypeBadgeChip, { badge }));
    });
    return container;
};

describe('TypeBadgeChip in the vis-2 host', () => {
    it('renders the Effektiver Typ and names the Detected type where the Format type overrides it', () => {
        const chip = mount(typeBadgeOf('number', 'string')).querySelector('[aria-label]');
        expect(chip?.textContent).toBe('number');
        expect(chip?.getAttribute('aria-label')).toContain('vis_2_widgets_collection_json_table_type_label');
        expect(chip?.getAttribute('aria-label')).toContain('vis_2_widgets_collection_json_table_detected_type_hint');
    });

    it('renders without a tooltip where the Detected type is the Effektiver Typ', () => {
        const chip = mount(typeBadgeOf(undefined, 'string')).querySelector('[aria-label]');
        expect(chip?.getAttribute('aria-label')).toBe('vis_2_widgets_collection_json_table_type_label: string');
    });
});
