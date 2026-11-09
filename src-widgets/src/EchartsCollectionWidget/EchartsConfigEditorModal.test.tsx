/**
 * EchartsConfigEditorModal — every fresh load starts the session chrome anew.
 *
 * @module EchartsCollectionWidget/EchartsConfigEditorModal.test
 * @remarks
 * The component instance survives close and open; the maximize toggle is session-only, so a
 * reopening shows the configurator at normal size again (ADR-0048). The rail and the preview
 * are marker-mocked — the chrome is under test, not their content. The reset belongs to the
 * previous session only: a notice the load itself raises stays.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('@mui/icons-material', () => ({
    ExpandMore: () => null,
    Add: () => null,
    ArrowDownward: () => null,
    ArrowUpward: () => null,
    Search: () => null,
    DeleteOutlineOutlined: () => null,
    KeyboardArrowDown: () => null,
    KeyboardArrowUp: () => null,
    ContentCopy: () => null,
    Restore: () => null,
    InsertDriveFile: () => null,
    Image: () => null,
    Code: () => null,
    Close: () => null,
    CloseFullscreen: () => null,
    OpenInFull: () => null,
    Undo: () => null,
    Redo: () => null,
}));
vi.mock('@iobroker/gui-components', () => ({ SelectID: () => null, I18n: { t: (k: string) => k } }));
vi.mock('./editor/ChartPreview', () => ({ default: () => <div>PREVIEW</div> }));
vi.mock('./editor/EchartsEditorSections', () => ({ default: () => <div>SECTIONS</div>, sectionInventory: () => [] }));

import { act } from 'react';
import { createTheme } from '@mui/material/styles';
import type { Connection } from '@iobroker/gui-components';

import EchartsConfigEditorModal from './EchartsConfigEditorModal';
import { DEFAULT_EDITOR_STATE, saveEditorState, type EditorState } from './editor/editorState';
import { useEchartsEditorLifecycle, useJsonAxisReconcile } from './editor/useEchartsEditorLifecycle';
import { renderComponent, renderHook, type RenderComponentHandle } from '../lib/testing/testHarness';

type Props = Parameters<typeof EchartsConfigEditorModal>[0];

const data = { chartType: 'line' } as unknown as Props['data'];

const props = (open: boolean): Props => ({
    open,
    onClose: vi.fn(),
    data,
    onDataChange: vi.fn(),
    theme: createTheme() as unknown as Props['theme'],
    socket: {
        getState: vi.fn(() => new Promise(() => undefined)),
        subscribeStateAsync: vi.fn(() => Promise.resolve()),
        unsubscribeState: vi.fn(),
    } as unknown as Connection,
});

const mounted: RenderComponentHandle<Props>[] = [];
afterEach(() => {
    mounted.splice(0).forEach(handle => handle.unmount());
});

/** The window toggle in the title bar (the dialog renders into a portal on the body). */
const windowToggle = (): HTMLElement | null =>
    document.body.querySelector('[aria-label="echarts_editor_maximize"], [aria-label="echarts_editor_restore"]');

describe('EchartsConfigEditorModal', () => {
    it('opens at normal size again after it was maximized', () => {
        const handle = renderComponent(EchartsConfigEditorModal, props(true));
        mounted.push(handle);
        act(() => {
            windowToggle()?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        expect(windowToggle()?.getAttribute('aria-label')).toBe('echarts_editor_restore');

        handle.rerender(props(false));
        handle.rerender(props(true));
        expect(windowToggle()?.getAttribute('aria-label')).toBe('echarts_editor_maximize');
    });
});

describe('EchartsConfigEditorModal — the JSON axis sync on opening', () => {
    const PAYLOAD_OID = '0_userdata.0.payload';

    /** A stored serien-förmig JSON widget, written through the real save path. */
    const storedWidget = (patch: Partial<EditorState>): Props['data'] =>
        saveEditorState(
            {
                ...DEFAULT_EDITOR_STATE,
                chartType: 'line',
                mode: 'json',
                jsonKind: 'series',
                jsonOid: PAYLOAD_OID,
                ...patch,
            },
            0,
        );

    /** A bar chart whose payload names A and B each own an axis, saved by a configurator session. */
    const barWithAxesForAAndB = (): Props['data'] => {
        const stored = storedWidget({ chartType: 'bar' });
        const session = renderHook(() => {
            const lifecycle = useEchartsEditorLifecycle(true, stored);
            useJsonAxisReconcile(lifecycle.state, ['A', 'B'], lifecycle.set);
            return lifecycle;
        });
        const saved = session.result.current.apply();
        session.unmount();
        return saved;
    };

    /** A socket whose payload state names the series A only. */
    const socket = {
        getState: vi.fn(() => Promise.resolve({ val: JSON.stringify({ series: [{ name: 'A', data: [] }] }) })),
        subscribeStateAsync: vi.fn(() => Promise.resolve()),
        unsubscribeState: vi.fn(),
    } as unknown as Connection;

    const jsonProps = (open: boolean, widgetData: Props['data']): Props => ({
        ...props(open),
        data: widgetData,
        socket,
    });

    it('keeps the axis-death notice the opening sync raises over the previous payload names', async () => {
        const lineChart = storedWidget({});
        const handle = renderComponent(EchartsConfigEditorModal, jsonProps(true, lineChart));
        mounted.push(handle);
        // Session 1 sees the payload: A only.
        await act(async () => {
            await Promise.resolve();
            await Promise.resolve();
        });
        handle.rerender(jsonProps(false, lineChart));

        // Reopened over a widget whose B axis has no payload series (the names are still the
        // previous session's): the sync on opening kills the B axis and says so.
        handle.rerender(jsonProps(true, barWithAxesForAAndB()));
        expect(document.body.textContent).toContain('echarts_axis_died_info');
    });
});
