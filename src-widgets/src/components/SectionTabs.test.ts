/**
 * Component tests for the SectionTabs control (ADR-0073) — the one Sektions-Tab/Karten-Tab
 * idiom: rendering, the ⚠ issue dot, local-only tab state (reset on remount), the scrollable
 * variant for narrow rails, and the Behaviour-section reference integration.
 *
 * @module components/SectionTabs.test
 * @remarks
 * `window.visRxWidget` is stubbed in a hoisted block where Generic is in the import chain; the
 * MUI icons barrel is mocked (minutes of Node module resolution in vitest otherwise — see the
 * SeriesDataFields test for the probe).
 */
import { describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});
vi.mock('@mui/icons-material', () => ({ ExpandMore: () => null }));

import { act, createElement } from 'react';
import { renderComponent, type RenderComponentHandle } from '../lib/testing/testHarness';
import { SectionTabs, type SectionTab } from './controls';
import BehaviorSection from '../EchartsCollectionWidget/editor/sections/BehaviorSection';

type TabsProps = Parameters<typeof SectionTabs>[0];

const mount = (over: Partial<TabsProps> = {}): RenderComponentHandle<TabsProps> =>
    renderComponent<TabsProps>(SectionTabs, {
        tabs: [
            { key: 'a', label: 'Alpha' },
            { key: 'b', label: 'Beta' },
        ],
        children: [createElement('div', null, 'CONTENT_A'), createElement('div', null, 'CONTENT_B')],
        ...over,
    });

/** Click the n-th tab (MUI Tab is a role=tab button; a bubbled click switches). */
const clickTab = (el: HTMLElement, n: number): void => {
    const tabs = el.querySelectorAll('[role="tab"]');
    act(() => {
        tabs[n]?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
};

describe('SectionTabs (ADR-0073 — the one tab idiom)', () => {
    it('renders every label and shows ONLY the first tab content on mount', () => {
        const h = mount();
        const labels = Array.from(h.container.querySelectorAll('[role="tab"]')).map(t => t.textContent);
        expect(labels).toEqual(['Alpha', 'Beta']);
        expect(h.container.textContent).toContain('CONTENT_A');
        expect(h.container.textContent).not.toContain('CONTENT_B');
    });

    it('switches on click — the selected tab is addressable, the others hidden', () => {
        const h = mount();
        clickTab(h.container, 1);
        expect(h.container.textContent).toContain('CONTENT_B');
        expect(h.container.textContent).not.toContain('CONTENT_A');
        expect(h.container.querySelectorAll('[role="tab"]')[1]?.getAttribute('aria-selected')).toBe('true');
    });

    it('tab state is LOCAL: a remount starts on the first tab again (no persistence)', async () => {
        const container = document.createElement('div');
        document.body.appendChild(container);
        const props: TabsProps = {
            tabs: [
                { key: 'a', label: 'Alpha' },
                { key: 'b', label: 'Beta' },
            ],
            children: [createElement('div', null, 'CONTENT_A'), createElement('div', null, 'CONTENT_B')],
        };
        const { createRoot: mountRoot } = await import('react-dom/client');
        const root = mountRoot(container);
        act(() => root.render(createElement(SectionTabs, props)));
        clickTab(container, 1);
        expect(container.textContent).toContain('CONTENT_B');
        act(() => root.render(createElement('div'))); // unmount the tabs (own commit)
        act(() => root.render(createElement(SectionTabs, props))); // fresh mount
        expect(container.textContent).toContain('CONTENT_A'); // back on tab 1 — never persisted
        act(() => root.unmount());
        container.remove();
    });

    it('renders the ⚠ dot ONLY on tabs with issueCount > 0 (beside the label, rollup stays)', () => {
        const h = mount({
            tabs: [
                { key: 'a', label: 'Alpha' },
                { key: 'b', label: 'Beta', issueCount: 2 },
            ],
        });
        const dots = h.container.querySelectorAll('[data-issue-dot]');
        expect(dots).toHaveLength(1);
        expect(dots[0]?.closest('[role="tab"]')?.textContent).toContain('Beta');
    });

    it('uses the SCROLLABLE variant (long tab sets scroll in the 320–720 px rail, never wrap)', () => {
        const h = mount({
            tabs: Array.from({ length: 8 }, (_, i): SectionTab => ({ key: `t${i}`, label: `Tab ${i + 1}` })),
            children: Array.from({ length: 8 }, (_, i) => createElement('div', null, `C${i}`)),
        });
        // MUI v6 folds the variant into emotion css — the STABLE signal is the scroller element
        // (MuiTabs-scrollableX) whose computed overflow is the scroll machinery itself.
        const scroller = h.container.querySelector('.MuiTabs-scrollableX');
        expect(scroller).toBeTruthy();
        expect(getComputedStyle(scroller as Element).overflow).toBe('scroll');
        expect(h.container.querySelectorAll('[role="tab"]')).toHaveLength(8);
    });

    it('carries the label as aria-label on every tab (keyboard arrows stay MUI-standard)', () => {
        const h = mount();
        const aria = Array.from(h.container.querySelectorAll('[role="tab"]')).map(t => t.getAttribute('aria-label'));
        expect(aria).toEqual(['Alpha', 'Beta']);
    });
});

describe('Behaviour section — the FIRST SectionTabs reference integration (ADR-0073)', () => {
    it('splits Bewegung | Renderer: motion fields first, the renderer select + hint on tab 2', () => {
        const h = renderComponent(BehaviorSection, {
            state: {
                animation: true,
                animationDuration: 800,
                animationEasing: '',
                renderer: 'canvas' as const,
            },
            set: () => undefined,
        });
        expect(h.container.textContent).toContain('echarts_animation_duration'); // motion tab visible
        expect(h.container.textContent).not.toContain('echarts_renderer_info'); // renderer tab hidden
        clickTab(h.container, 1);
        expect(h.container.textContent).toContain('echarts_renderer_canvas');
        expect(h.container.textContent).toContain('echarts_renderer_info');
        expect(h.container.textContent).not.toContain('echarts_animation_duration');
    });
});
