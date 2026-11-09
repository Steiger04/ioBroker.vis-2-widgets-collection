/**
 * The `values_count` field of the values group: label "Rows (n)", toolbar — or the InfoBox
 * "pick an OID first".
 *
 * @module components/StateEditor/StateEditorRowsField
 * @remarks
 * The group must own the key `values_count`: vis-2 renders a group's body only while one of its
 * named fields has a value (`hasValues`, `Attributes/Widget/index.tsx` `recalculateFields`).
 * So this field carries the name and the native label "Rows"; the row count joins the label
 * in the native label cell — vis-2 labels are static i18n keys (`I18n.t(field.label)`), so the
 * count is portalled into that cell (the row's first `<td>`). Where the cell cannot be found,
 * the count stays in the value cell. Under multi-selection with rows (or source states) that
 * differ between the widgets, an InfoBox below the toolbar explains why actions are locked.
 */
import { useRef } from 'react';
import type React from 'react';
import { createPortal } from 'react-dom';

import { translate } from '../../lib/translate';
import { stateRowsDifference } from '../../lib/stateRows';
import { InfoBox } from '../controls';
import StateEditorSurface from './StateEditorSurface';
import StateEditorToolbar from './StateEditorToolbar';
import { useLabelCell } from './useLabelCell';
import { selectedWidgetDatas, useStateEditor, type StateEditorFieldProps } from './useStateEditor';

import type { StateRowsDifference } from '../../lib/stateRows';

/** The InfoBox text per reason the rows differ — literal keys, so the code scan finds them. */
const ROWS_DIFFER_TEXTS: Record<StateRowsDifference, string> = {
    rows: 'state_editor_rows_differ',
    count: 'state_editor_rows_differ_count',
    bindings: 'state_editor_rows_differ_bindings',
    states: 'state_editor_rows_differ_states',
};

/**
 * Renders the "Rows (n)" row of the Zustandseditor.
 *
 * @param fieldProps See {@link StateEditorFieldProps}.
 * @returns The toolbar (or the InfoBox) and the count beside the native label.
 */
function StateEditorRowsField(fieldProps: StateEditorFieldProps): React.JSX.Element {
    const { hasOidObject, rows } = useStateEditor(fieldProps);
    const anchor = useRef<HTMLDivElement>(null);
    const labelCell = useLabelCell(anchor);
    const count = <span data-state-editor-count>{` (${rows.length})`}</span>;
    // Multi-selection: one patch goes into every widget, so structural actions need identical
    // rows (ADR-0104 §4) — the toolbar locks them, this InfoBox says why: it points to the
    // marked rows only where a row is marked, else to the row count or the bindings.
    const difference = stateRowsDifference(selectedWidgetDatas(fieldProps), fieldProps.spec.config);

    return (
        <StateEditorSurface props={fieldProps.props}>
            <div ref={anchor}>
                {labelCell ? createPortal(count, labelCell) : count}
                {hasOidObject ? (
                    <>
                        <StateEditorToolbar {...fieldProps} />
                        {difference ? (
                            <InfoBox
                                tone="warning"
                                text={translate(ROWS_DIFFER_TEXTS[difference])}
                            />
                        ) : null}
                    </>
                ) : (
                    <InfoBox text={translate('state_editor_pick_oid_first')} />
                )}
            </div>
        </StateEditorSurface>
    );
}

export default StateEditorRowsField;
