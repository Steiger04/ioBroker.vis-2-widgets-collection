/**
 * The Zustandseditor Kopfzeile: ‹ n / Anzahl › and „Wert · Alias" of the selected row.
 *
 * @module components/StateEditor/StateRowHeader
 * @remarks
 * A native attribute row („Gewählte Zeile") above the detail fields (Ticket 03), so the user
 * knows which row they edit even with the list scrolled away, and pages through 50–200 rows
 * without scrolling up. Paging changes only the shared selection — no `onDataChange`.
 */
import { Box, IconButton } from '@mui/material';
import PreviousIcon from '@mui/icons-material/ChevronLeft';
import NextIcon from '@mui/icons-material/ChevronRight';
import type React from 'react';

import Generic from '../../Generic';
import StateEditorSurface, { STATE_EDITOR_ROW_HEIGHT } from './StateEditorSurface';
import { useStateEditor, type StateEditorFieldProps } from './useStateEditor';

/**
 * Renders the Kopfzeile of the Zustandseditor.
 *
 * @param fieldProps See {@link StateEditorFieldProps}.
 * @returns The paging row.
 */
function StateRowHeader(fieldProps: StateEditorFieldProps): React.JSX.Element {
    const { rows, selected, select } = useStateEditor(fieldProps);
    const row = rows[selected - 1];
    const previousLabel = Generic.t('state_editor_previous_row');
    const nextLabel = Generic.t('state_editor_next_row');

    return (
        <StateEditorSurface props={fieldProps.props}>
            <Box
                data-state-row-header
                sx={{ display: 'flex', alignItems: 'center', gap: 0.5, minHeight: STATE_EDITOR_ROW_HEIGHT }}
            >
                <IconButton
                    size="small"
                    aria-label={previousLabel}
                    title={previousLabel}
                    disabled={selected <= 1}
                    onClick={() => select(selected - 1)}
                    sx={{ p: 0.25 }}
                >
                    <PreviousIcon fontSize="small" />
                </IconButton>
                <Box
                    component="span"
                    sx={{ whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}
                >
                    {`${selected} / ${rows.length}`}
                </Box>
                <IconButton
                    size="small"
                    aria-label={nextLabel}
                    title={nextLabel}
                    disabled={selected >= rows.length}
                    onClick={() => select(selected + 1)}
                    sx={{ p: 0.25 }}
                >
                    <NextIcon fontSize="small" />
                </IconButton>
                <Box
                    component="span"
                    sx={{
                        ml: 1,
                        minWidth: 0,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        color: 'primary.main',
                    }}
                >
                    {row ? [row.value, row.alias].filter(part => part !== '').join(' · ') : ''}
                </Box>
            </Box>
        </StateEditorSurface>
    );
}

export default StateRowHeader;
