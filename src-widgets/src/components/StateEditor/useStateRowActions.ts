/**
 * Runs a Zustandseditor row action: one patch through `onDataChange`, then the selection
 * follows the action.
 *
 * @module components/StateEditor/useStateRowActions
 * @remarks
 * The one place that turns a row action into project data — the toolbar buttons use it, and
 * so do the list's Alt+↑/↓ and drop (Ticket 05). Each action is exactly one patch of the
 * Zustandszeilen-Operationen (`lib/stateRows`), so vis-2 records it as one history step and
 * its undo takes it back whole (vis-2 `Editor.tsx` `changeProject` → `saveHistory`).
 *
 * - The patch is computed from the first selected widget's stored data, and an action is
 *   offered only where `stateRowOperationAllowed` holds for ALL selected widgets — under
 *   multi-selection the custom-field API writes the one patch into every selected widget
 *   (ADR-0104 §4).
 * - Reordering can be locked from outside (`reorderLocked`): the list locks it while its
 *   search filters the rows (Spec, search).
 */
import { useCallback } from 'react';

import { applyStateRowOperation, stateRowOperationAllowed } from '../../lib/stateRows';
import {
    selectedWidgetDatas,
    useStateEditor,
    type StateEditorFieldProps,
    type StateEditorState,
} from './useStateEditor';

import type { StateRowOperation, StateRowPatch } from '../../lib/stateRows';

/** Options of {@link useStateRowActions}. */
export type StateRowActionOptions = {
    /** Refuse every move (up/down, Alt+↑/↓, drop) — the list's search is active. */
    reorderLocked?: boolean;
};

/** The row actions of one Zustandseditor, on top of its rows and selection. */
export type StateRowActions = StateEditorState & {
    /** Whether the action is offered for the selected widgets (and, for a move, unlocked). */
    can: (kind: StateRowOperation['kind']) => boolean;
    /**
     * Writes the action's patch and moves the selection.
     *
     * @returns The patch written, or `null` when the action is not offered or refused — then
     *   nothing is written.
     */
    run: (op: StateRowOperation) => StateRowPatch | null;
};

/**
 * The row selected after an action (Spec, selection after actions).
 *
 * @param op The action.
 * @param selected The row selected before it.
 * @param patch The action's patch (its `values_count` is the new row count).
 * @returns Add: the new last row; clone: the copy; delete: the following row, after the last
 *   one the previous; move: the moved row at its new place; recreate: the first row, the old
 *   Feldnummer names a different state now; clear and supplement: unchanged.
 */
export const stateRowSelectionAfter = (op: StateRowOperation, selected: number, patch: StateRowPatch): number => {
    const count = Number(patch.values_count) || 0;
    switch (op.kind) {
        case 'add':
            return count;
        case 'clone':
            return op.row + 1;
        case 'delete':
            return Math.max(1, Math.min(op.row, count));
        case 'move':
            return op.to;
        case 'recreate':
            return 1;
        default:
            return selected;
    }
};

/**
 * The row actions of one Zustandseditor field.
 *
 * @param fieldProps The props of the field (see {@link StateEditorFieldProps}).
 * @param options See {@link StateRowActionOptions}.
 * @param options.reorderLocked Refuse every move.
 * @returns Rows, selection, and `can`/`run` for the row actions.
 */
export const useStateRowActions = (
    fieldProps: StateEditorFieldProps,
    { reorderLocked = false }: StateRowActionOptions = {},
): StateRowActions => {
    const editor = useStateEditor(fieldProps);
    const { spec, data, onDataChange, props } = fieldProps;
    const { selected, select } = editor;

    const can = useCallback(
        (kind: StateRowOperation['kind']): boolean =>
            !(kind === 'move' && reorderLocked) &&
            stateRowOperationAllowed(kind, selectedWidgetDatas({ data, props }), spec.config),
        [data, props, spec, reorderLocked],
    );

    const run = useCallback(
        (op: StateRowOperation): StateRowPatch | null => {
            if (!can(op.kind)) {
                return null;
            }
            const patch = applyStateRowOperation(selectedWidgetDatas({ data, props })[0], op, spec.config);
            if (!patch) {
                return null;
            }
            onDataChange(patch);
            select(stateRowSelectionAfter(op, selected, patch));
            return patch;
        },
        [can, data, props, spec, onDataChange, select, selected],
    );

    return { ...editor, can, run };
};
