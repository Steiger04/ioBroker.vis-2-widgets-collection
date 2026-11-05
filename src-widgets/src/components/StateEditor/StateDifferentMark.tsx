/**
 * The „unterschiedlich" marks of a multi-selection: on a detail field, and on a list row.
 *
 * @module components/StateEditor/StateDifferentMark
 * @remarks
 * vis-2 marks a field whose value differs between the selected widgets by the placeholder
 * „different" in its empty input (fork `Attributes/Widget/WidgetField.tsx`,
 * `placeholder={isDifferent ? t('different') : undefined}`). The Zustandseditor's detail field
 * cannot hand that flag through vis-2's `Editor` (its props are the hull's, whose name never
 * appears in vis-2's `isDifferent`), so the hull compares the selected widgets itself
 * (`stateRowKeyDiffers`) and writes the same word beside the field, in the placeholder's
 * colour (`text.disabled`) and the field's 80 % type (`commonStyles.fieldContent`).
 *
 * A list row has no room for a word (Nr · Wert · Alias · Icon in the value column), so a row
 * that differs (`stateRowDiffers`) carries a warning-coloured right edge, mirroring the
 * selection's left edge; the InfoBox above the list names the mark.
 */
import { Box } from '@mui/material';
import type React from 'react';

import Generic from '../../Generic';

/**
 * The word „unterschiedlich" beside a detail field whose value differs between the widgets.
 *
 * @returns The mark.
 */
export function StateDifferentMark(): React.JSX.Element {
    return (
        <Box
            component="span"
            data-state-detail-different
            sx={{ flex: '0 0 auto', ml: 0.5, fontSize: '80%', color: 'text.disabled', whiteSpace: 'nowrap' }}
        >
            {Generic.t('state_editor_different')}
        </Box>
    );
}

/**
 * The attributes of a list row that differs between the widgets: a data flag and its
 * accessible description.
 *
 * @param differs The row differs.
 * @returns Props to spread on the row: a data flag and `aria-description` when it differs.
 */
export const stateRowDiffersProps = (
    differs: boolean,
): { 'data-state-row-differs'?: true; 'aria-description'?: string } =>
    differs ? { 'data-state-row-differs': true, 'aria-description': Generic.t('state_editor_different') } : {};

/** The right edge of a list row; warning-coloured when the row differs (see the module remarks). */
export const stateRowDiffersSx = (differs: boolean): Record<string, unknown> => ({
    borderRight: 2,
    borderRightColor: differs ? 'warning.main' : 'transparent',
});
