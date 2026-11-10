/**
 * JsonTableColumnEditorModal — every opening starts from the stored columns.
 *
 * @module widgets/JsonTableCollectionWidget/components/JsonTableColumnEditorModal.test
 * @remarks
 * The modal edits a working copy. Opening it, or new stored columns while it is open, replaces the
 * working copy and selects the first column; nothing of an abandoned edit stays.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';
import { createTheme } from '@mui/material/styles';
import type { Connection } from '@iobroker/gui-components';

import JsonTableColumnEditorModal from './JsonTableColumnEditorModal';
import type { ColumnConfigEntry } from '../types';
import { renderComponent, type RenderComponentHandle } from '../../lib/testing/testHarness';

type Props = Parameters<typeof JsonTableColumnEditorModal>[0];

const theme = createTheme();

const props = (open: boolean, columns: ColumnConfigEntry[]): Props => ({
    open,
    onClose: vi.fn(),
    columns,
    onSave: vi.fn(),
    theme: theme as unknown as Props['theme'],
    // No OID: the discovery on open finds nothing and leaves the working copy alone.
    data: {},
    socket: { getState: vi.fn() } as unknown as Connection,
    inheritance: { theme, styleColor: undefined },
});

const mounted: RenderComponentHandle<Props>[] = [];
afterEach(() => {
    mounted.splice(0).forEach(handle => handle.unmount());
});

const mount = (open: boolean, columns: ColumnConfigEntry[]): RenderComponentHandle<Props> => {
    const handle = renderComponent(JsonTableColumnEditorModal, props(open, columns));
    mounted.push(handle);
    return handle;
};

const column = (path: string): ColumnConfigEntry => ({ path, visible: true, headerName: path });

/** The dialog renders into a portal on the body. */
const shows = (key: string): boolean => document.body.textContent?.includes(key) ?? false;

describe('JsonTableColumnEditorModal', () => {
    it('selects the first column when it opens', () => {
        const handle = mount(false, [column('a'), column('b')]);
        handle.rerender(props(true, [column('a'), column('b')]));
        expect(shows('json_table_select_column')).toBe(false);
        expect(shows('json_table_no_columns')).toBe(false);
    });

    it('selects nothing for an empty column list', () => {
        mount(true, []);
        expect(shows('json_table_no_columns')).toBe(true);
    });

    it('replaces the working copy with new stored columns while open', () => {
        const handle = mount(true, [column('a')]);
        handle.rerender(props(true, []));
        expect(shows('json_table_no_columns')).toBe(true);
    });
});
