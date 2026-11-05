/**
 * The `values_count` field of the „Werte" group: label „Zeilen (n)", toolbar — or the InfoBox
 * „erst OID wählen".
 *
 * @module components/StateEditor/StateEditorRowsField
 * @remarks
 * The group must own the key `values_count`: vis-2 renders a group's body only while one of its
 * named fields has a value (`hasValues`, `Attributes/Widget/index.tsx` `recalculateFields`).
 * So this field carries the name and the native label „Zeilen"; the row count joins the label
 * in the native label cell — vis-2 labels are static i18n keys (`I18n.t(field.label)`), so the
 * count is portalled into that cell (the row's first `<td>`). Where the cell cannot be found,
 * the count stays in the value cell.
 */
import { useRef } from 'react';
import type React from 'react';
import { createPortal } from 'react-dom';

import Generic from '../../Generic';
import { InfoBox } from '../controls';
import StateEditorSurface from './StateEditorSurface';
import StateEditorToolbar from './StateEditorToolbar';
import { useLabelCell } from './useLabelCell';
import { useStateEditor, type StateEditorFieldProps } from './useStateEditor';

/**
 * Renders the „Zeilen (n)" row of the Zustandseditor.
 *
 * @param fieldProps See {@link StateEditorFieldProps}.
 * @returns The toolbar (or the InfoBox) and the count beside the native label.
 */
function StateEditorRowsField(fieldProps: StateEditorFieldProps): React.JSX.Element {
    const { hasOidObject, rows } = useStateEditor(fieldProps);
    const anchor = useRef<HTMLDivElement>(null);
    const labelCell = useLabelCell(anchor);
    const count = <span data-state-editor-count>{` (${rows.length})`}</span>;

    return (
        <StateEditorSurface props={fieldProps.props}>
            <div ref={anchor}>
                {labelCell ? createPortal(count, labelCell) : count}
                {hasOidObject ? (
                    <StateEditorToolbar {...fieldProps} />
                ) : (
                    <InfoBox text={Generic.t('state_editor_pick_oid_first')} />
                )}
            </div>
        </StateEditorSurface>
    );
}

export default StateEditorRowsField;
