/**
 * The Zustandseditor toolbar: the row actions — add, clone, delete, up, down, „Zeile leeren",
 * „aus common.states neu anlegen".
 *
 * @module components/StateEditor/StateEditorToolbar
 * @remarks
 * Sits in the value cell of the „Zeilen (n)" row (the `values_count` field), the search in front
 * of the buttons: it filters the list (shared through `stateRowListStore`) and locks up/down
 * while active. Each button writes one patch of the Zustandszeilen-Operationen through
 * {@link useStateRowActions}, which also moves the selection, and hands the focus to the list.
 * Add, clone and delete ask nothing — vis-2's undo takes them back; „Zeile leeren" and „neu
 * anlegen" ask first.
 *
 * The buttons copy vis-2's group-head buttons (`Attributes/Widget/index.tsx`, the clone/delete/
 * up/down/add buttons of an indexed group): `@mui/icons-material` icons at their default 24 px
 * size in a 24 × 24 small `IconButton`, side by side without a gap, each with a tooltip whose
 * popper lets the pointer through.
 */
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    TextField,
    Tooltip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MoveDownIcon from '@mui/icons-material/ArrowDownward';
import MoveUpIcon from '@mui/icons-material/ArrowUpward';
import CloneIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearRowIcon from '@mui/icons-material/FormatClear';
import RecreateIcon from '@mui/icons-material/RestartAlt';
import { useRef, useState } from 'react';
import type React from 'react';

import Generic from '../../Generic';
import { focusStateRowList, isStateRowSearchActive, useStateRowSearch } from './stateRowListStore';
import { STATE_EDITOR_ROW_HEIGHT } from './StateEditorSurface';
import { stateEditorSelectionKey } from './useStateEditor';
import { useStateRowActions } from './useStateRowActions';

import type { StateRowOperation } from '../../lib/stateRows';
import type { StateEditorFieldProps } from './useStateEditor';

/** vis-2's group-head button box (`styles.groupButton`). */
const GROUP_BUTTON_STYLE = { width: 24, height: 24 } as const;

/**
 * The actions that ask before they write, with the i18n keys of their name and question —
 * literal keys, so the code scan against en.json finds them.
 */
const QUESTIONS = {
    clear: { name: 'state_editor_clear_row', text: 'state_editor_clear_row_confirm' },
    recreate: { name: 'state_editor_recreate_rows', text: 'state_editor_recreate_rows_confirm' },
} as const;

type ConfirmedAction = keyof typeof QUESTIONS;

/** Props of {@link ToolButton}. */
type ToolButtonProps = {
    /** The translated tooltip and accessible name. */
    label: string;
    disabled: boolean;
    onClick: () => void;
    children: React.ReactNode;
};

/**
 * One toolbar button as vis-2 draws a group-head button.
 *
 * @param props See {@link ToolButtonProps}.
 * @param props.label The translated tooltip and accessible name.
 * @param props.disabled The action is not offered.
 * @param props.onClick Runs the action.
 * @param props.children The icon.
 * @returns The button with its tooltip; the span keeps the tooltip on a disabled button.
 */
function ToolButton({ label, disabled, onClick, children }: ToolButtonProps): React.JSX.Element {
    return (
        <Tooltip
            title={label}
            describeChild
            slotProps={{ popper: { sx: { pointerEvents: 'none' } } }}
        >
            <Box
                component="span"
                sx={{ display: 'inline-flex' }}
            >
                <IconButton
                    aria-label={label}
                    size="small"
                    style={GROUP_BUTTON_STYLE}
                    disabled={disabled}
                    onClick={onClick}
                >
                    {children}
                </IconButton>
            </Box>
        </Tooltip>
    );
}

/** Props of {@link StateEditorToolbar}. */
export type StateEditorToolbarProps = StateEditorFieldProps & {
    /** Locks up/down on top of the search, which locks them while it filters the list. */
    reorderLocked?: boolean;
};

/**
 * Renders the toolbar of the Zustandseditor.
 *
 * @param props The field props and the reorder lock.
 * @param props.reorderLocked Locks up/down.
 * @returns The toolbar row and the question a confirmed action asks first.
 */
function StateEditorToolbar({ reorderLocked, ...fieldProps }: StateEditorToolbarProps): React.JSX.Element {
    const selectionKey = stateEditorSelectionKey(fieldProps.props);
    const [search, setSearch] = useStateRowSearch(selectionKey);
    const actions = useStateRowActions(fieldProps, {
        reorderLocked: !!reorderLocked || isStateRowSearchActive(search),
    });
    const { rows, selected, can } = actions;
    // The question stays filled while the dialog fades out; `asking` opens and closes it.
    const [question, setQuestion] = useState<ConfirmedAction>('clear');
    const [asking, setAsking] = useState(false);
    const confirmed = useRef(false);
    const hasRow = selected > 0;

    const ask = (action: ConfirmedAction): void => {
        confirmed.current = false;
        setQuestion(action);
        setAsking(true);
    };
    // Each action hands the focus to the list: a focused button that turns disabled (down on
    // the last row, delete of the last row) would drop it on <body>, where vis-2's Delete key
    // deletes the widget.
    const run = (op: StateRowOperation): void => {
        actions.run(op);
        focusStateRowList(selectionKey);
    };
    // A confirmed action hands the focus to the list once the dialog is gone — the dialog
    // first restores it to the button that opened it.
    const confirm = (): void => {
        confirmed.current = true;
        setAsking(false);
        actions.run(question === 'clear' ? { kind: 'clear', row: selected } : { kind: 'recreate' });
    };

    return (
        <Box
            data-state-editor-toolbar
            sx={{ display: 'flex', alignItems: 'center', minHeight: STATE_EDITOR_ROW_HEIGHT }}
        >
            <TextField
                variant="standard"
                size="small"
                type="search"
                value={search}
                placeholder={Generic.t('state_editor_search')}
                onChange={event => setSearch(event.target.value)}
                slotProps={{ htmlInput: { 'aria-label': Generic.t('state_editor_search') } }}
                sx={{ flex: '1 1 64px', minWidth: 40, mr: 0.5, '& .MuiInputBase-root': { fontSize: 'inherit' } }}
            />
            <ToolButton
                label={Generic.t('state_editor_add_row')}
                disabled={!can('add')}
                onClick={() => run({ kind: 'add' })}
            >
                <AddIcon />
            </ToolButton>
            <ToolButton
                label={Generic.t('state_editor_clone_row')}
                disabled={!hasRow || !can('clone')}
                onClick={() => run({ kind: 'clone', row: selected })}
            >
                <CloneIcon />
            </ToolButton>
            <ToolButton
                label={Generic.t('state_editor_delete_row')}
                disabled={!hasRow || !can('delete')}
                onClick={() => run({ kind: 'delete', row: selected })}
            >
                <DeleteIcon />
            </ToolButton>
            <ToolButton
                label={Generic.t('state_editor_move_row_up')}
                disabled={selected <= 1 || !can('move')}
                onClick={() => run({ kind: 'move', from: selected, to: selected - 1 })}
            >
                <MoveUpIcon />
            </ToolButton>
            <ToolButton
                label={Generic.t('state_editor_move_row_down')}
                disabled={!hasRow || selected >= rows.length || !can('move')}
                onClick={() => run({ kind: 'move', from: selected, to: selected + 1 })}
            >
                <MoveDownIcon />
            </ToolButton>
            <ToolButton
                label={Generic.t(QUESTIONS.clear.name)}
                disabled={!hasRow || !can('clear')}
                onClick={() => ask('clear')}
            >
                <ClearRowIcon />
            </ToolButton>
            <ToolButton
                label={Generic.t(QUESTIONS.recreate.name)}
                disabled={!can('recreate')}
                onClick={() => ask('recreate')}
            >
                <RecreateIcon />
            </ToolButton>
            <Dialog
                open={asking}
                onClose={() => setAsking(false)}
                aria-labelledby="state-editor-confirm-title"
                aria-describedby="state-editor-confirm-text"
                slotProps={{
                    transition: {
                        onExited: () => {
                            if (confirmed.current) {
                                focusStateRowList(selectionKey);
                            }
                        },
                    },
                }}
            >
                <DialogTitle id="state-editor-confirm-title">{Generic.t(QUESTIONS[question].name)}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="state-editor-confirm-text">
                        {Generic.t(QUESTIONS[question].text)}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        data-state-editor-confirm="cancel"
                        onClick={() => setAsking(false)}
                        color="primary"
                    >
                        {Generic.t('cancel')}
                    </Button>
                    <Button
                        data-state-editor-confirm="ok"
                        onClick={confirm}
                        color="error"
                        variant="contained"
                        autoFocus
                    >
                        {Generic.t(QUESTIONS[question].name)}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default StateEditorToolbar;
