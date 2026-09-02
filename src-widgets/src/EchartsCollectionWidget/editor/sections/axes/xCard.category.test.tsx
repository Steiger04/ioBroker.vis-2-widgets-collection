/**
 * Render tests for the X-Karte's Time-format visibility gate (ADR-0075 ticket 05): string
 * categories label themselves — the moment combobox hides instead of lying inert. Verlauf and
 * serien-förmig (no `isCategory`) always keep the field.
 *
 * @module EchartsCollectionWidget/editor/sections/axes/xCard.category.test
 * @remarks
 * The identity-t stub surfaces label keys verbatim (the sectionTabs precedent).
 */
import { describe, expect, it, vi } from 'vitest';

// The colour picker is a heavy leaf for THIS gate (it drags the theme hook); marker-mock it —
// the sectionTabs precedent. The gate under test is the Zeitformat combobox's visibility.
vi.mock('../../colorFields', () => ({
    default: () => <span>COLOR_FIELD</span>,
}));

vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});
import { act, createElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import XCard from './XCard';
import type { EchartsXAxisConfig } from '../../../../types/field-definitions/echarts-fields';

/** Mount any component; returns the live container. */
const mount = (type: (props: never) => unknown, props: unknown): HTMLElement => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root: Root = createRoot(container);
    act(() => {
        root.render(createElement(type as never, props as never));
    });
    return container;
};

const props = (isCategory?: boolean): Record<string, unknown> => ({
    x: {} as EchartsXAxisConfig,
    open: true,
    onToggle: () => undefined,
    onChange: () => undefined,
    pickerCtx: {},
    fallbackColor: '#111',
    dividerColor: '#222',
    ...(isCategory !== undefined ? { isCategory } : {}),
});

/** Click through every tab and return the UNION of all tab contents' text. */
const allTabsText = (el: HTMLElement): string => {
    const seen: string[] = [];
    const tabs = Array.from(el.querySelectorAll('[role="tab"]'));
    for (const t of tabs) {
        act(() => {
            t.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        seen.push(el.textContent ?? ''); // only the ACTIVE tab's content is mounted
    }
    return seen.join('');
};

describe('XCard — the Time-format gate (ADR-0075 ticket 05)', () => {
    it('time X (Verlauf/serien-förmig, no flag): the Zeitformat field renders', () => {
        expect(allTabsText(mount(XCard, props()))).toContain('echarts_x_format');
        expect(allTabsText(mount(XCard, props(false)))).toContain('echarts_x_format');
    });

    it('category X (json-table, isCategory): the Zeitformat field HIDES — labels are the payload text', () => {
        expect(allTabsText(mount(XCard, props(true)))).not.toContain('echarts_x_format');
    });
});
