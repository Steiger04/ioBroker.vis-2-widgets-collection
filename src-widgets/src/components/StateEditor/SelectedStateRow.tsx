/**
 * The Gewählte Zeile row of the Zustandseditor: ‹ n / count › and "value · alias" of the selected
 * row.
 *
 * @module components/StateEditor/SelectedStateRow
 * @remarks
 * A native attribute row (label "Selected row") above the detail fields, so the user
 * knows which row they edit even with the list scrolled away, and pages through 50–200 rows
 * without scrolling up. Paging changes only the shared selection — no `onDataChange` — and,
 * like ↑/↓ in the list, steps only through the rows an active search keeps, so the selection
 * stays visible in the list (ADR-0104 Nachtrag Code-Review). The ‹ › icons keep their default 24 px, like
 * vis-2's group-head icons.
 */
import { Box, IconButton } from '@mui/material';
import PreviousIcon from '@mui/icons-material/ChevronLeft';
import NextIcon from '@mui/icons-material/ChevronRight';
import { useMemo } from 'react';
import type React from 'react';

import { translate } from '../../lib/translate';
import { filterStateRows, neighbourStateRow, useStateRowSearch } from './stateRowListStore';
import StateEditorSurface, { STATE_EDITOR_ROW_HEIGHT } from './StateEditorSurface';
import { useStateEditor, type StateEditorFieldProps } from './useStateEditor';

/**
 * Renders the Gewählte Zeile row of the Zustandseditor.
 *
 * @param fieldProps See {@link StateEditorFieldProps}.
 * @returns The paging row.
 */
function SelectedStateRow(fieldProps: StateEditorFieldProps): React.JSX.Element {
    const { rows, selected, select, selectionKey } = useStateEditor(fieldProps);
    const [search] = useStateRowSearch(selectionKey);
    const shown = useMemo(() => filterStateRows(rows, search), [rows, search]);
    const previous = neighbourStateRow(shown, selected, -1);
    const next = neighbourStateRow(shown, selected, 1);
    const row = rows[selected - 1];
    const previousLabel = translate('state_editor_previous_row');
    const nextLabel = translate('state_editor_next_row');

    return (
        <StateEditorSurface props={fieldProps.props}>
            <Box
                data-selected-state-row
                sx={{ display: 'flex', alignItems: 'center', gap: 0.5, minHeight: STATE_EDITOR_ROW_HEIGHT }}
            >
                <IconButton
                    size="small"
                    aria-label={previousLabel}
                    title={previousLabel}
                    disabled={previous === undefined}
                    onClick={() => previous !== undefined && select(previous)}
                    sx={{ p: 0.25 }}
                >
                    <PreviousIcon />
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
                    disabled={next === undefined}
                    onClick={() => next !== undefined && select(next)}
                    sx={{ p: 0.25 }}
                >
                    <NextIcon />
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

export default SelectedStateRow;
