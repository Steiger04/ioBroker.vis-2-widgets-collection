/**
 * Render tests for the payload-family toggle (ADR-0075 ticket 02) — the pinned-under-mode
 * visibility gate (json only, the family is a property OF the json mode, never a third mode)
 * and the crossing handler: flip + reset arrive as ONE patch (a single undo step).
 *
 * @module EchartsCollectionWidget/editor/jsonKindSelect.test
 * @remarks
 * The identity-t stub surfaces label keys verbatim (the sectionTabs precedent); the reset
 * SCOPE itself is pinned in lifecycleGuards.test — this file pins the component's wiring.
 */
import { describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});
import { act, createElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { JsonKindSelect } from './controls';
import { DEFAULT_EDITOR_STATE, type EditorState, type SetEditor } from './editorState';

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

const state = (over: Partial<EditorState> = {}): EditorState => ({ ...DEFAULT_EDITOR_STATE, ...over });

describe('JsonKindSelect — the payload-family toggle (ADR-0075)', () => {
    it('renders ONLY while the json mode is active (hidden entirely otherwise)', () => {
        const json = mount(JsonKindSelect, { state: state({ mode: 'json' }), set: () => undefined });
        expect(json.textContent).toContain('echarts_json_kind_series');
        expect(json.textContent).toContain('echarts_json_kind_table');

        const history = mount(JsonKindSelect, { state: state({ mode: 'history' }), set: () => undefined });
        expect(history.textContent).toBe('');
    });

    it('the crossing fires ONE patch: the flip AND the full family reset together', () => {
        const patches: Partial<EditorState>[] = [];
        const set: SetEditor = (patch: Partial<EditorState>) => {
            patches.push(patch);
        };
        const el = mount(JsonKindSelect, { state: state({ mode: 'json', jsonKind: 'series' }), set });
        const table = Array.from(el.querySelectorAll('button')).find(b => b.textContent === 'echarts_json_kind_table');
        expect(table).toBeTruthy();
        act(() => {
            table!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        expect(patches).toHaveLength(1); // flip + reset in ONE patch — a single undo step
        expect(patches[0]).toMatchObject({
            jsonKind: 'table',
            series: [],
            yAxes: [],
            jsonRowPath: '',
        });
        expect(patches[0]).not.toHaveProperty('jsonOid'); // the data point survives
    });

    it('re-selecting the current kind crosses nothing — no patch (exclusive-group semantics)', () => {
        const patches: Partial<EditorState>[] = [];
        const el = mount(JsonKindSelect, {
            state: state({ mode: 'json', jsonKind: 'table' }),
            set: (p: Partial<EditorState>) => patches.push(p),
        });
        const table = Array.from(el.querySelectorAll('button')).find(b => b.textContent === 'echarts_json_kind_table');
        act(() => {
            table!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        // MUI's exclusive group reports a re-select as null → the handler's `!v` early-return:
        // no reset, no flip, no history entry (same semantics as the mode toggle above).
        expect(patches).toEqual([]);
    });
});
