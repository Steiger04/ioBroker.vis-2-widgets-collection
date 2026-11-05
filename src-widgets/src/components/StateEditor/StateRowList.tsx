/**
 * The Zustandseditor list: every Zustandszeile as one compact row — grip · no. · value · alias ·
 * icon — with search, keyboard, drag-and-drop and a height grip.
 *
 * @module components/StateEditor/StateRowList
 * @remarks
 * Its own attribute row with an empty label, in the value column. Rows are
 * 28 px high; the list shows 8 rows (or what the height grip set, kept in `localStorage`) and
 * scrolls; the selected row is kept in view. Choosing a row changes only the shared selection
 * (`stateRowSelection`) — no `onDataChange`, so vis-2 does not recalculate.
 *
 * - **Keyboard:** the list is focusable; ↑/↓ select, Alt+↑/↓ move the selected row. There is
 *   no Delete shortcut — vis-2 deletes the selected widget on Delete while the focus is on
 *   `<body>` (vis-2 `Editor.tsx` `onKeyDown`); every row action hands the focus to the list
 *   (`stateRowListStore`) so it never falls there.
 * - **Drag-and-drop:** native HTML5 as in the JSON table's column list; the dragged row takes
 *   the place of the row it is dropped on (the drop line marks the side it lands on).
 * - **Search** (typed in the toolbar, shared through `stateRowListStore`): filters the rows;
 *   while active, drag and Alt+↑/↓ are locked.
 *
 * Events are delegated to the list (rows carry `data-row`), so the rows stay plain memoised
 * items. They sit in normal flow, each exactly one row height tall; keeping the selected row in
 * view computes its offset as index × row height instead of measuring it.
 */
import { Box } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import IconHintIcon from '@mui/icons-material/Lightbulb';
import { memo, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type React from 'react';

import Generic from '../../Generic';
import { stateRowDiffers } from '../../lib/stateRows';
import {
    clampStateRowListRows,
    filterStateRows,
    focusStateRowList,
    isStateRowSearchActive,
    neighbourStateRow,
    readStateRowListRows,
    registerStateRowList,
    STATE_ROW_LIST_MAX_ROWS,
    STATE_ROW_LIST_MIN_ROWS,
    storeStateRowListRows,
    useStateRowSearch,
} from './stateRowListStore';
import { stateRowDiffersProps, stateRowDiffersSx } from './StateDifferentMark';
import StateEditorSurface, { STATE_EDITOR_ROW_HEIGHT } from './StateEditorSurface';
import {
    selectedWidgetDatas,
    stateEditorSelectionKey,
    type StateEditorFieldProps,
    type StateRowSummary,
} from './useStateEditor';
import { useStateRowActions } from './useStateRowActions';

/**
 * Scrolls a list so that the row at `index` (0-based, fixed row height) is fully visible.
 *
 * @param list The scrolling list element.
 * @param index The row's index among the rows shown.
 * @param visibleHeight The list's visible height.
 */
const keepInView = (list: HTMLElement, index: number, visibleHeight: number): void => {
    const top = index * STATE_EDITOR_ROW_HEIGHT;
    const bottom = top + STATE_EDITOR_ROW_HEIGHT;
    if (top < list.scrollTop) {
        list.scrollTop = top;
    } else if (bottom > list.scrollTop + visibleHeight) {
        list.scrollTop = bottom - visibleHeight;
    }
};

/**
 * The Feldnummer of the row an event happened in.
 *
 * @param event A (delegated) event of the list.
 * @returns The row's Feldnummer, or `0` outside a row.
 */
const rowOf = (event: React.SyntheticEvent): number => {
    // A drag of selected text starts on the text node, not on an element.
    const target = event.target instanceof Element ? event.target : (event.target as Node).parentElement;
    return Number(target?.closest<HTMLElement>('[data-row]')?.dataset.row) || 0;
};

/** Props of {@link StateRowItem}. */
type StateRowItemProps = {
    row: StateRowSummary;
    selected: boolean;
    /** The row can be dragged (reordering is offered and not locked by the search). */
    draggable: boolean;
    /** The row is being dragged. */
    dragging: boolean;
    /** A dragged row would land on this side of it. */
    dropSide?: 'before' | 'after';
    /** Multi-selection: the row differs between the selected widgets (warning right edge). */
    differs: boolean;
};

/**
 * One Zustandszeile of the list. Its events are handled by the list.
 *
 * @param props See {@link StateRowItemProps}.
 * @returns The row.
 */
const StateRowItem = memo(function StateRowItem({
    row,
    selected,
    draggable,
    dragging,
    dropSide,
    differs,
}: StateRowItemProps): React.JSX.Element {
    return (
        <Box
            id={`state-row-${row.n}`}
            role="option"
            aria-selected={selected}
            data-row={row.n}
            draggable={draggable}
            {...stateRowDiffersProps(differs)}
            sx={{
                display: 'grid',
                gridTemplateColumns: '16px 24px minmax(0, 2fr) minmax(0, 3fr) 20px',
                alignItems: 'center',
                columnGap: 0.75,
                boxSizing: 'border-box',
                height: STATE_EDITOR_ROW_HEIGHT,
                pr: 0.5,
                cursor: draggable ? 'grab' : 'pointer',
                borderLeft: 2,
                borderLeftColor: selected ? 'primary.main' : 'transparent',
                ...stateRowDiffersSx(differs),
                bgcolor: selected ? 'action.selected' : undefined,
                opacity: dragging ? 0.4 : 1,
                boxShadow: theme =>
                    dropSide
                        ? `inset 0 ${dropSide === 'before' ? 2 : -2}px 0 ${theme.palette.primary.main}`
                        : undefined,
                '&:hover': { bgcolor: selected ? 'action.selected' : 'action.hover' },
                '& > [data-col]': {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                },
            }}
        >
            <Box
                data-col="grip"
                sx={{ display: 'flex', visibility: draggable ? 'visible' : 'hidden' }}
            >
                <DragIndicatorIcon
                    aria-hidden="true"
                    sx={{ fontSize: 16, color: 'text.disabled' }}
                />
            </Box>
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
});

/**
 * The height grip under the list: drag (or ↑/↓) changes the visible row count.
 *
 * @param props The grip props.
 * @param props.rows The visible row count.
 * @param props.onChange Sets the visible row count (`store` once the change is done).
 * @returns The separator.
 */
function HeightGrip({
    rows,
    onChange,
}: {
    rows: number;
    onChange: (rows: number, store: boolean) => void;
}): React.JSX.Element {
    const drag = useRef<{ pointerId: number; startY: number; startRows: number; rows: number } | null>(null);

    const onPointerDown = (event: React.PointerEvent<HTMLElement>): void => {
        if (event.button !== 0) {
            return;
        }
        event.preventDefault();
        event.currentTarget.focus({ preventScroll: true });
        event.currentTarget.setPointerCapture?.(event.pointerId);
        drag.current = { pointerId: event.pointerId, startY: event.clientY, startRows: rows, rows };
    };
    const onPointerMove = (event: React.PointerEvent<HTMLElement>): void => {
        const current = drag.current;
        if (!current || current.pointerId !== event.pointerId) {
            return;
        }
        const next = clampStateRowListRows(
            current.startRows + (event.clientY - current.startY) / STATE_EDITOR_ROW_HEIGHT,
        );
        if (next !== current.rows) {
            current.rows = next;
            onChange(next, false);
        }
    };
    const onPointerEnd = (event: React.PointerEvent<HTMLElement>): void => {
        const current = drag.current;
        if (!current || current.pointerId !== event.pointerId) {
            return;
        }
        drag.current = null;
        onChange(current.rows, true);
    };
    const onKeyDown = (event: React.KeyboardEvent<HTMLElement>): void => {
        if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
            return;
        }
        event.preventDefault();
        onChange(clampStateRowListRows(rows + (event.key === 'ArrowUp' ? -1 : 1)), true);
    };

    return (
        <Box
            role="separator"
            aria-orientation="horizontal"
            aria-label={Generic.t('state_editor_resize_list')}
            aria-valuemin={STATE_ROW_LIST_MIN_ROWS}
            aria-valuemax={STATE_ROW_LIST_MAX_ROWS}
            aria-valuenow={rows}
            tabIndex={0}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerEnd}
            onPointerCancel={onPointerEnd}
            onKeyDown={onKeyDown}
            sx={{
                height: 8,
                cursor: 'ns-resize',
                touchAction: 'none',
                outline: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&::after': { content: '""', width: 32, height: 2, borderRadius: 1, bgcolor: 'divider' },
                '&:hover::after, &:focus-visible::after': { bgcolor: 'primary.main' },
            }}
        />
    );
}

/**
 * Renders the list of Zustandszeilen.
 *
 * @param fieldProps See {@link StateEditorFieldProps}.
 * @returns The scrolling list and its height grip.
 */
function StateRowList(fieldProps: StateEditorFieldProps): React.JSX.Element {
    const selectionKey = stateEditorSelectionKey(fieldProps.props);
    const [search] = useStateRowSearch(selectionKey);
    const searching = isStateRowSearchActive(search);
    const { rows, selected, select, can, run } = useStateRowActions(fieldProps, { reorderLocked: searching });
    const shown = useMemo(() => filterStateRows(rows, search), [rows, search]);
    // Multi-selection (ADR-0104 Nachtrag Ticket 07): rows that differ between the selected widgets are marked —
    // by Feldnummer, so the mark stays on its row while the search filters.
    const datas = selectedWidgetDatas(fieldProps);
    const canMove = rows.length > 1 && can('move');
    const [visibleRows, setVisibleRows] = useState(readStateRowListRows);
    const [drag, setDrag] = useState<{ from: number; over: number } | null>(null);
    const listRef = useRef<HTMLDivElement>(null);
    // The height follows all rows, not the filtered ones: typing in the search must not resize.
    const visibleHeight = Math.min(Math.max(rows.length, 1), visibleRows) * STATE_EDITOR_ROW_HEIGHT;
    const selectedIndex = shown.findIndex(row => row.n === selected);

    useLayoutEffect(
        () => (listRef.current ? registerStateRowList(selectionKey, listRef.current) : undefined),
        [selectionKey],
    );

    useLayoutEffect(() => {
        if (listRef.current && selectedIndex >= 0) {
            keepInView(listRef.current, selectedIndex, listRef.current.clientHeight || visibleHeight);
        }
    }, [selectedIndex, visibleHeight]);

    const move = (from: number, to: number): void => {
        if (from !== to && to >= 1 && to <= rows.length) {
            run({ kind: 'move', from, to });
        }
        focusStateRowList(selectionKey);
    };

    const onKeyDown = (event: React.KeyboardEvent<HTMLElement>): void => {
        if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
            return;
        }
        event.preventDefault();
        if (selected < 1) {
            return;
        }
        const up = event.key === 'ArrowUp';
        if (event.altKey) {
            if (canMove) {
                move(selected, selected + (up ? -1 : 1));
            }
            return;
        }
        const next = neighbourStateRow(shown, selected, up ? -1 : 1);
        if (next) {
            select(next);
        }
    };

    const onDragStart = (event: React.DragEvent<HTMLElement>): void => {
        const from = rowOf(event);
        if (!canMove || !from) {
            event.preventDefault();
            return;
        }
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', String(from));
        setDrag({ from, over: 0 });
    };
    const onDragOver = (event: React.DragEvent<HTMLElement>): void => {
        const over = rowOf(event);
        if (!drag || !over) {
            return;
        }
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
        if (drag.over !== over) {
            setDrag({ ...drag, over });
        }
    };
    const onDragLeave = (event: React.DragEvent<HTMLElement>): void => {
        if (drag && !event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setDrag({ ...drag, over: 0 });
        }
    };
    const onDrop = (event: React.DragEvent<HTMLElement>): void => {
        event.preventDefault();
        const to = rowOf(event);
        const from = drag?.from ?? 0;
        setDrag(null);
        if (from && to) {
            move(from, to);
        }
    };

    return (
        <StateEditorSurface props={fieldProps.props}>
            <Box
                ref={listRef}
                role="listbox"
                tabIndex={0}
                aria-label={Generic.t('state_editor_rows')}
                aria-activedescendant={selectedIndex >= 0 ? `state-row-${selected}` : undefined}
                onClick={event => {
                    const n = rowOf(event);
                    if (n) {
                        select(n);
                    }
                }}
                onKeyDown={onKeyDown}
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                onDragEnd={() => setDrag(null)}
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
                {shown.length === 0 ? (
                    <Box
                        sx={{
                            px: 1,
                            lineHeight: `${STATE_EDITOR_ROW_HEIGHT}px`,
                            color: 'text.secondary',
                            fontStyle: 'italic',
                        }}
                    >
                        {Generic.t(rows.length === 0 ? 'state_editor_no_rows' : 'state_editor_no_search_results')}
                    </Box>
                ) : (
                    shown.map(row => (
                        <StateRowItem
                            key={row.n}
                            row={row}
                            selected={row.n === selected}
                            draggable={canMove}
                            dragging={drag?.from === row.n}
                            differs={stateRowDiffers(datas, row.n, fieldProps.spec.config)}
                            dropSide={
                                drag && drag.over === row.n && drag.from !== row.n
                                    ? drag.from < row.n
                                        ? 'after'
                                        : 'before'
                                    : undefined
                            }
                        />
                    ))
                )}
            </Box>
            <HeightGrip
                rows={visibleRows}
                onChange={(next, store) => {
                    setVisibleRows(next);
                    if (store) {
                        storeStateRowListRows(next);
                    }
                }}
            />
        </StateEditorSurface>
    );
}

export default StateRowList;
