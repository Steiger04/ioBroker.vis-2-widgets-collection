/**
 * DialogCollection — the Dialog-Sitzung wiring, rendered.
 *
 * @module widgets/DialogCollectionWidget/DialogCollection.test
 * @remarks
 * DOM contract of the body on the preview context (ADR-0095): loading the view never writes
 * the Sitzungs-OID — whatever its value; a click writes `true`, a close request and the
 * auto-close timer write `false` exactly once, its echo is not written back; a read-only
 * Sitzungs-OID is never written. The decision matrix itself is pinned in
 * dialogSession.test.ts as pure data.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';
import { act } from 'react';

import {
    collectionScene,
    installInertResizeObserver,
    testScopedMount,
    type MountedCollectionBody,
} from '../lib/testing/collectionScene';
import DialogCollection from './DialogCollection';
import { DIALOG_OID, getWidgetView, sessionOidData } from './dialogTestFixture';
import type { PreviewScene } from '../preview/types';

installInertResizeObserver();

const scene = (status: unknown, data: Record<string, unknown> = {}): PreviewScene =>
    collectionScene(
        'dialog-collection-test',
        {
            ...sessionOidData(),
            view: 'detail',
            dialogCloseButtonTop: true,
            noHeader: true,
            noFooter: true,
            noHeaderIcon: true,
            ...data,
        },
        status,
        DIALOG_OID,
    );

const mountBody = testScopedMount();

/**
 * Mounts the body with an echoing backend: every write lands in the scene's state, so the next
 * render observes it — the echo that made the old wiring write `false` twice.
 */
const mountDialog = (currentScene: PreviewScene): MountedCollectionBody => {
    const body = mountBody(DialogCollection, currentScene, { getWidgetView });
    body.setValue.mockImplementation((id: string, value: unknown) => {
        currentScene.context.values[`${id}.val`] = value;
    });
    return body;
};

afterEach(() => {
    vi.useRealTimers();
});

/** The embedded view — the Modal portals into document.body, so it is the dialog's presence. */
const dialogView = (): Element | null => document.querySelector('[data-testid="dialog-view"]');

const click = (element: Element | null | undefined): void => {
    act(() => {
        element?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
};

const clickDialogButton = ({ container }: MountedCollectionBody): void => click(container.querySelector('button'));

const clickCloseButton = (): void => click(document.querySelector('button[aria-label="close"]'));

describe('DialogCollection wiring', () => {
    it('loading the view with the Sitzungs-OID at false writes nothing', () => {
        const { setValue } = mountDialog(scene(false));

        expect(setValue).not.toHaveBeenCalled();
        expect(dialogView()).toBeNull();
    });

    it('loading the view with the Sitzungs-OID at true opens the dialog and writes nothing', () => {
        const { setValue } = mountDialog(scene(true));

        expect(dialogView()).not.toBeNull();
        expect(setValue).not.toHaveBeenCalled();
    });

    it('a click opens the dialog and writes true', () => {
        const body = mountDialog(scene(false));

        clickDialogButton(body);

        expect(dialogView()).not.toBeNull();
        expect(body.setValue.mock.calls).toEqual([[DIALOG_OID, true]]);
    });

    it('the close button closes the dialog and writes false', () => {
        const body = mountDialog(scene(false));
        clickDialogButton(body);

        clickCloseButton();

        expect(dialogView()).toBeNull();
        expect(body.setValue.mock.calls).toEqual([
            [DIALOG_OID, true],
            [DIALOG_OID, false],
        ]);
    });

    it('auto-close after a click writes false exactly once', () => {
        vi.useFakeTimers();
        const body = mountDialog(scene(false, { dialogAutoClose: 5000 }));
        clickDialogButton(body);

        act(() => {
            vi.advanceTimersByTime(4999);
        });
        expect(dialogView()).not.toBeNull();

        act(() => {
            vi.advanceTimersByTime(1);
        });
        expect(dialogView()).toBeNull();
        expect(body.setValue.mock.calls).toEqual([
            [DIALOG_OID, true],
            [DIALOG_OID, false],
        ]);
    });

    it('auto-close of a backend-opened dialog writes false exactly once', () => {
        vi.useFakeTimers();
        const { setValue } = mountDialog(scene(true, { dialogAutoClose: 5000 }));

        act(() => {
            vi.advanceTimersByTime(5000);
        });

        expect(dialogView()).toBeNull();
        expect(setValue.mock.calls).toEqual([[DIALOG_OID, false]]);
    });

    it('a read-only Sitzungs-OID (write === false) is never written, the dialog still works', () => {
        const body = mountDialog(scene(false, sessionOidData(false)));

        clickDialogButton(body);
        expect(dialogView()).not.toBeNull();

        clickCloseButton();
        expect(dialogView()).toBeNull();

        expect(body.setValue).not.toHaveBeenCalled();
    });
});
