/**
 * The Zustandseditor toolbar: search and the row actions (Ticket 04/05) — for now its place.
 *
 * @module components/StateEditor/StateEditorToolbar
 * @remarks
 * Sits in the value cell of the „Zeilen (n)" row (the `values_count` field). Ticket 04 adds
 * add/clone/delete/up/down/clear/recreate, Ticket 05 the search; each writes one patch from
 * the Zustandszeilen-Operationen (`lib/stateRows`) through `onDataChange` and moves the
 * selection with `select` (`useStateEditor`).
 */
import { Box } from '@mui/material';
import type React from 'react';

import { STATE_EDITOR_ROW_HEIGHT } from './StateEditorSurface';

import type { StateEditorFieldProps } from './useStateEditor';

/**
 * Renders the toolbar of the Zustandseditor.
 *
 * @param _props The field props (used once the actions arrive).
 * @returns The toolbar row.
 */
function StateEditorToolbar(_props: StateEditorFieldProps): React.JSX.Element {
    return (
        <Box
            data-state-editor-toolbar
            sx={{ display: 'flex', alignItems: 'center', gap: 0.5, minHeight: STATE_EDITOR_ROW_HEIGHT }}
        />
    );
}

export default StateEditorToolbar;
