/**
 * ViewDialog — the dialog title, rendered.
 *
 * @module widgets/DialogCollectionWidget/ViewDialog.test
 * @remarks
 * DOM contract of the open dialog on the preview context: with "header as title" the header
 * text is the dialog's title line and the frame header stays empty; without it the header
 * sits in the frame and the title line stays empty. The dialog frame carries no corner icon
 * (CONTEXT "Eck-Icon"): the style data it renders is the button's. The embedded view is vis-2's
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
import dialogFields from '../lib/dialogFields';
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

describe('ViewDialog corner icon', () => {
    it("carries no corner icon in the dialog frame — the button's icon data stays on the button", () => {
        mountDialog({ dialogHeaderAsTitle: true, noHeaderIcon: false, icon: 'button.svg' });

        expect(dialogFrame()).not.toBeNull();
        expect(dialogFrame()?.querySelector('img')).toBeNull();
    });
});

describe('ViewDialog dialog background', () => {
    /** The background the Modal root paints behind the dialog (the MUI backdrop is its child). */
    const modalBackground = (): string => {
        const root = document.querySelector('.MuiModal-root');
        expect(root).not.toBeNull();
        return getComputedStyle(root!).background;
    };

    it('without an own value paints nothing — transparent, no CSS inherit of the body background', () => {
        mountDialog({ dialogHeaderAsTitle: true });

        expect(modalBackground()).not.toContain('inherit');
        expect(modalBackground()).toBe('transparent');
    });

    it('an own value applies unchanged', () => {
        mountDialog({ dialogHeaderAsTitle: true, dialogBackgroundColor: 'rgba(16, 21, 34, 0.8)' });

        expect(modalBackground()).toBe('rgba(16, 21, 34, 0.8)');
    });

    it('keeps the MUI backdrop', () => {
        mountDialog({ dialogHeaderAsTitle: true });

        expect(document.querySelector('.MuiModal-root .MuiBackdrop-root')).not.toBeNull();
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

describe('ViewDialog size', () => {
    /** The default of a dialog field, from its definition. */
    const defaultOf = (name: string): unknown =>
        (dialogFields().find(field => field.name === name) as { default?: unknown } | undefined)?.default;

    /** The size of the box that holds the dialog frame. */
    const dialogSize = (): { width: string; height: string } => {
        const box = dialogFrame()?.parentElement;
        expect(box).toBeTruthy();
        const style = getComputedStyle(box!);
        return { width: style.width, height: style.height };
    };

    it('opens at the configured size, in percent or in pixels', () => {
        mountDialog({ dialogWidth: 80, dialogHeight: '60' });
        expect(dialogSize()).toEqual({ width: '80%', height: '60%' });
    });

    // The palette stores the defaults, so an unset size comes only from raw data; emptied, the
    // number field keeps ''. Each read 'undefined%', 'null%' or '%' — no size at all.
    it.each([
        ['unset', {}],
        ['stored as null', { dialogWidth: null, dialogHeight: null }],
        ['emptied', { dialogWidth: '', dialogHeight: '' }],
    ])('opens at the default size the panel shows for a size %s', (_case, size) => {
        mountDialog(size);
        expect(dialogSize()).toEqual({
            width: `${String(defaultOf('dialogWidth'))}%`,
            height: `${String(defaultOf('dialogHeight'))}%`,
        });
    });

    it('opens at the default size in pixels for an unset size in pixels', () => {
        mountDialog({ dialogInPixel: true });
        expect(dialogSize()).toEqual({
            width: `${String(defaultOf('dialogWidth'))}px`,
            height: `${String(defaultOf('dialogHeight'))}px`,
        });
    });
});
