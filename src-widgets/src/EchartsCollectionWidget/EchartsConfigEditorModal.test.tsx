/**
 * EchartsConfigEditorModal — every fresh load starts the session chrome anew.
 *
 * @module EchartsCollectionWidget/EchartsConfigEditorModal.test
 * @remarks
 * The component instance survives close and open; the maximize toggle is session-only, so a
 * reopening shows the configurator at normal size again (ADR-0048). The rail and the preview
 * are marker-mocked — the chrome is under test, not their content.
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
import { renderComponent, type RenderComponentHandle } from '../lib/testing/testHarness';

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
