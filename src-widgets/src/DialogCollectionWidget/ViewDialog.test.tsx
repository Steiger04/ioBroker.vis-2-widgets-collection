/**
 * ViewDialog — the dialog title, rendered.
 *
 * @module widgets/DialogCollectionWidget/ViewDialog.test
 * @remarks
 * DOM contract of the open dialog on the preview context: with "header as title" the header
 * text is the dialog's title line and the frame header stays empty; without it the header
 * sits in the frame and the title line stays empty. The embedded view is vis-2's
 * `getWidgetView`, stubbed as a marker carrying the view name. The Modal portals into
 * `document.body`, so every query runs there.
 */
import { describe, expect, it } from 'vitest';
import { createElement, useContext, type FC } from 'react';

import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData/useData';
import {
    collectionScene,
    installInertResizeObserver,
    testScopedMount,
    type MountedCollectionBody,
} from '../lib/testing/collectionScene';
import ViewDialog from './ViewDialog';
import { DIALOG_OID, getWidgetView, sessionOidData } from './dialogTestFixture';
import type { DialogCollectionContextProps } from '../types';

installInertResizeObserver();

/** The open dialog, wired the way DialogCollection wires it. */
const OpenViewDialog: FC = () => {
    const { widget, getWidgetView: renderView } = useContext(CollectionContext) as DialogCollectionContextProps;
    const { data } = useData('dialogId');
    return createElement(ViewDialog, {
        open: true,
        handleClose: () => {},
        widget,
        data,
        getWidgetView: renderView,
    });
};

const mountBody = testScopedMount();

/**
 * Mounts the open dialog.
 *
 * @param data - Widget data over the dialog defaults.
 * @param style - The widget's vis-2 CSS (kebab-case keys, as vis-2 provides them).
 */
const mountDialog = (data: Record<string, unknown>, style: Record<string, string> = {}): MountedCollectionBody => {
    const scene = collectionScene(
        'view-dialog-test',
        {
            ...sessionOidData(),
            view: 'detail',
            header: 'Küche',
            dialogCloseButtonTop: true,
            noFooter: true,
            ...data,
        },
        true,
        DIALOG_OID,
    );
    (scene.context.widget as { style?: Record<string, string> }).style = style;
    return mountBody(OpenViewDialog, scene, { getWidgetView });
};

/** The dialog's frame (CollectionBase's outer paper) inside the portalled Modal. */
const dialogFrame = (): Element | null => document.querySelector('.MuiModal-root .BASE-PAPER-0');

/** The frame header: CollectionBase's header box above the frame's content box. */
const frameHeader = (): Element | null | undefined => dialogFrame()?.querySelector('.BASE-HEADER');

/** The dialog's title line: the first text slot inside the frame's content. */
const titleLine = (): Element | null | undefined => dialogFrame()?.querySelector('.BASE-PAPER-1 p');

describe('ViewDialog title', () => {
    it('header as title shows the header in the title line and leaves the frame header empty', () => {
        mountDialog({ dialogHeaderAsTitle: true });

        expect(titleLine()?.textContent).toBe('Küche');
        expect(frameHeader()?.textContent).toBe('');
    });

    it('without header as title the header sits in the frame and the title line stays empty', () => {
        mountDialog({ dialogHeaderAsTitle: false });

        expect(frameHeader()?.textContent).toBe('Küche');
        expect(titleLine()).not.toBeNull();
        expect(titleLine()?.textContent).toBe('');
    });

    it('header as title shows the title even when the widget has no header', () => {
        mountDialog({ dialogHeaderAsTitle: true, noHeader: true });

        expect(titleLine()?.textContent).toBe('Küche');
        expect(frameHeader()?.textContent).toBe('');
    });

    it('embeds the configured view', () => {
        mountDialog({ dialogHeaderAsTitle: true });

        const views = document.querySelectorAll('.MuiModal-root [data-testid="dialog-view"]');
        expect([...views].map(view => view.getAttribute('data-view'))).toEqual(['detail']);
    });
});

describe('ViewDialog frame background', () => {
    it.each(['transparent', 'red', 'var(--x)'])(
        'renders with a vis-2 background-color %s no tint calculation can read',
        backgroundColor => {
            mountDialog({ dialogHeaderAsTitle: true }, { 'background-color': backgroundColor });

            expect(dialogFrame()).not.toBeNull();
            expect(titleLine()?.textContent).toBe('Küche');
        },
    );
});
