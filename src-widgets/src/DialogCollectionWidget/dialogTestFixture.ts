/**
 * The fixture the Dialog tests share: the bound Sitzungs-OID and vis-2's view renderer, stubbed.
 *
 * @module widgets/DialogCollectionWidget/dialogTestFixture
 */
import { createElement, type ReactElement } from 'react';

/** The Sitzungs-OID (`dialogId`) the Dialog tests bind. */
export const DIALOG_OID = 'demo.0.dialog';

/**
 * The widget data binding the Sitzungs-OID: `dialogId` and its boolean object.
 *
 * @param write - The object's `write` flag; `false` marks the Sitzungs-OID read-only.
 */
export const sessionOidData = (
    write = true,
): { dialogId: string; dialogIdObject: { _id: string; type: 'boolean'; write: boolean } } => ({
    dialogId: DIALOG_OID,
    dialogIdObject: { _id: DIALOG_OID, type: 'boolean', write },
});

/** vis-2's view renderer, stubbed: the embedded view is a marker element naming the view. */
export const getWidgetView = (view: string): ReactElement =>
    createElement('div', { 'data-testid': 'dialog-view', 'data-view': view });
