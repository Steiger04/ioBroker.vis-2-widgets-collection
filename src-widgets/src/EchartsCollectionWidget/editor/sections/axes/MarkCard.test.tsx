/**
 * Render tests for the marking card's per-edge label SubGroups (ADR-0081, spec ticket 03):
 * the cluster-per-authored-bound gating, the tuning-without-text contract (no hasText gate —
 * the tuning also styles the Wert-Fallback), and the collapsed title resolution.
 *
 * @module EchartsCollectionWidget/editor/sections/axes/MarkCard.test
 * @remarks
 * Heavy leaves are marker-mocked (the icons barrel, the colour picker, SelectID) — the
 * assertions read the LABEL KEYS, which the identity-t stub surfaces verbatim (the
 * sectionTabs.test idiom).
 */
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});
vi.mock('@mui/icons-material', () => ({
    DeleteOutline: () => null,
    Search: () => null,
    ExpandMore: () => null,
}));
vi.mock('../../colorFields', () => ({ default: () => null, ColorListField: () => null }));
vi.mock('@iobroker/adapter-react-v5', () => ({ SelectID: () => null }));

import { act, createElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import MarkCard from './MarkCard';
import type { EchartsMarkLine } from '../../../../types/field-definitions/echarts-fields';

const PROPS = {
    axisOptions: [
        ['0', '1 · PV'],
        ['1', '2 · Verbrauch'],
    ] as ReadonlyArray<[string, string]>,
    open: true,
    onToggle: () => undefined,
    onChange: () => undefined,
    onRemove: () => undefined,
    pickerCtx: {} as never,
    dividerColor: '#d',
    textSecondary: '#ts',
};

let root: Root | undefined;
const mountMark = (mark: EchartsMarkLine): HTMLElement => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
        root?.render(createElement(MarkCard, { ...PROPS, mark }));
    });
    return container;
};

afterEach(() => {
    act(() => root?.unmount());
    root = undefined;
    document.body.innerHTML = '';
});

const occurrences = (el: HTMLElement, key: string): number => el.textContent?.split(key).length - 1 ?? 0;

describe('MarkCard — per-edge label SubGroups (ADR-0081)', () => {
    it('a band shows BOTH label SubGroups, each with its own tuning fields', () => {
        const el = mountMark({ id: '1', upper: 24, lower: 18 });
        expect(el.textContent).toContain('echarts_mark_grp_label_upper');
        expect(el.textContent).toContain('echarts_mark_grp_label_lower');
        // One tuning cluster per edge — the fields are counted, not just present. The select
        // label counts DOUBLE (MUI outlined: <label> + the notch legend); the FieldLabel-based
        // colour field renders once.
        expect(occurrences(el, 'echarts_mark_label_position')).toBe(4);
        expect(occurrences(el, 'echarts_mark_label_color')).toBe(2);
    });

    it('a textless band still shows the tuning (no hasText gate — it styles the Wert-Fallback)', () => {
        // No labelUpper/labelLower authored: the edges will draw their bound VALUES, and the
        // position/offset/size/colour fields must be there to tune exactly those.
        const el = mountMark({ id: '1', upper: 24, lower: 18 });
        expect(occurrences(el, 'echarts_threshold_label')).toBe(2);
    });

    it('the cluster gating follows its bound — a lone line shows only its own cluster', () => {
        const upperOnly = mountMark({ id: '1', upper: 24 });
        expect(upperOnly.textContent).toContain('echarts_mark_grp_label_upper');
        expect(upperOnly.textContent).not.toContain('echarts_mark_grp_label_lower');
        const lowerOnly = mountMark({ id: '2', lower: 18 });
        expect(lowerOnly.textContent).not.toContain('echarts_mark_grp_label_upper');
        expect(lowerOnly.textContent).toContain('echarts_mark_grp_label_lower');
    });

    it('the collapsed title prefers an edge label, else shows the authored bounds span', () => {
        const titled = mountMark({ id: '1', upper: 24, lower: 18, labelUpper: 'Oben' });
        expect(titled.textContent).toContain('Oben');
        const untitled = mountMark({ id: '1', upper: 24, lower: 18 });
        expect(untitled.textContent).toContain('18 … 24');
    });
});
