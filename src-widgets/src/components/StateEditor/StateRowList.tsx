/**
 * The Zustandseditor list: every Zustandszeile as one compact row — Nr · Wert · Alias · Icon.
 *
 * @module components/StateEditor/StateRowList
 * @remarks
 * Its own attribute row with an empty label, in the value column (Spec „Listenfeld"). Rows are
 * 28 px high, the list shows 8 rows and scrolls; the selected row is kept in view. Choosing a
 * row changes only the shared selection (`stateRowSelection`) — no `onDataChange`, so vis-2
 * does not recalculate. Ticket 05 adds the grip column, drag-and-drop, keyboard, search and
 * the height grip.
 */
import { Box } from '@mui/material';
import IconHintIcon from '@mui/icons-material/Lightbulb';
import { useLayoutEffect, useRef } from 'react';
import type React from 'react';

import Generic from '../../Generic';
import { stateRowDiffers } from '../../lib/stateRows';
import { stateRowDiffersProps, stateRowDiffersSx } from './StateDifferentMark';
import StateEditorSurface, { STATE_EDITOR_ROW_HEIGHT } from './StateEditorSurface';
import { selectedWidgetDatas, useStateEditor, type StateEditorFieldProps } from './useStateEditor';

/** Rows the list shows before it scrolls. */
export const STATE_ROW_LIST_VISIBLE_ROWS = 8;

/**
 * Scrolls a list so that row `n` (1-based, fixed row height) is fully visible.
 *
 * @param list The scrolling list element.
 * @param n The Feldnummer.
 * @param visibleHeight The list's visible height.
 */
const keepInView = (list: HTMLElement, n: number, visibleHeight: number): void => {
    const top = (n - 1) * STATE_EDITOR_ROW_HEIGHT;
    const bottom = top + STATE_EDITOR_ROW_HEIGHT;
    if (top < list.scrollTop) {
        list.scrollTop = top;
    } else if (bottom > list.scrollTop + visibleHeight) {
        list.scrollTop = bottom - visibleHeight;
    }
};

/**
 * Renders the list of Zustandszeilen.
 *
 * @param fieldProps See {@link StateEditorFieldProps}.
 * @returns The scrolling list.
 */
function StateRowList(fieldProps: StateEditorFieldProps): React.JSX.Element {
    const { rows, selected, select } = useStateEditor(fieldProps);
    // Multi-selection (Ticket 07): rows that differ between the selected widgets are marked.
    const datas = selectedWidgetDatas(fieldProps);
    const rowDiffers = (n: number): boolean => stateRowDiffers(datas, n, fieldProps.spec.config);
    const listRef = useRef<HTMLDivElement>(null);
    const visibleHeight = Math.min(Math.max(rows.length, 1), STATE_ROW_LIST_VISIBLE_ROWS) * STATE_EDITOR_ROW_HEIGHT;

    useLayoutEffect(() => {
        if (listRef.current && selected > 0) {
            keepInView(listRef.current, selected, listRef.current.clientHeight || visibleHeight);
        }
    }, [selected, visibleHeight]);

    return (
        <StateEditorSurface props={fieldProps.props}>
            <Box
                ref={listRef}
                role="listbox"
                tabIndex={0}
                aria-label={Generic.t('state_editor_rows')}
                aria-activedescendant={selected > 0 ? `state-row-${selected}` : undefined}
                sx={{
                    height: visibleHeight,
                    overflowY: 'auto',
                    border: 1,
                    borderColor: 'divider',
                    borderRadius: 0.5,
                    outline: 'none',
                    '&:focus-visible': { borderColor: 'primary.main' },
                }}
            >
                {rows.length === 0 ? (
                    <Box
                        sx={{
                            px: 1,
                            lineHeight: `${STATE_EDITOR_ROW_HEIGHT}px`,
                            color: 'text.secondary',
                            fontStyle: 'italic',
                        }}
                    >
                        {Generic.t('state_editor_no_rows')}
                    </Box>
                ) : (
                    rows.map(row => {
                        const isSelected = row.n === selected;
                        const differs = rowDiffers(row.n);
                        return (
                            <Box
                                key={row.n}
                                id={`state-row-${row.n}`}
                                role="option"
                                aria-selected={isSelected}
                                {...stateRowDiffersProps(differs)}
                                onClick={() => select(row.n)}
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: '28px minmax(0, 2fr) minmax(0, 3fr) 20px',
                                    alignItems: 'center',
                                    columnGap: 1,
                                    height: STATE_EDITOR_ROW_HEIGHT,
                                    px: 0.5,
                                    cursor: 'pointer',
                                    borderLeft: 2,
                                    borderLeftColor: isSelected ? 'primary.main' : 'transparent',
                                    ...stateRowDiffersSx(differs),
                                    bgcolor: isSelected ? 'action.selected' : undefined,
                                    '&:hover': { bgcolor: isSelected ? 'action.selected' : 'action.hover' },
                                    '& > [data-col]': {
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                    },
                                }}
                            >
                                <Box
                                    data-col="nr"
                                    sx={{ textAlign: 'right', color: 'text.secondary' }}
                                >
                                    {row.n}
                                </Box>
                                <Box
                                    data-col="value"
                                    sx={{ fontWeight: 'bold' }}
                                    title={row.value}
                                >
                                    {row.value}
                                </Box>
                                <Box
                                    data-col="alias"
                                    title={row.alias}
                                >
                                    {row.alias}
                                </Box>
                                <Box
                                    data-col="icon"
                                    sx={{ display: 'flex', justifyContent: 'center' }}
                                >
                                    {row.hasIcon ? (
                                        <IconHintIcon
                                            data-icon-hint
                                            titleAccess={Generic.t('state_editor_has_icon')}
                                            sx={{ fontSize: 16, color: 'warning.main' }}
                                        />
                                    ) : null}
                                </Box>
                            </Box>
                        );
                    })
                )}
            </Box>
        </StateEditorSurface>
    );
}

export default StateRowList;
