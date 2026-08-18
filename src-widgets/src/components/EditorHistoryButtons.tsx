/**
 * The shared undo/redo header buttons of a configurator (ADR-0038).
 *
 * @module components/EditorHistoryButtons
 * @remarks
 * The keyboard half lives in {@link module:lib/useEditorHistory.useEditorHistoryKeys}; this is
 * the visible half — a Tooltip-wrapped pair of IconButtons over an editor history, identical in
 * the echarts configurator's title bar and the Theme Studio's panel header.
 */

import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import { IconButton, Tooltip } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';

import Generic from '../Generic';

/** Props for {@link EditorHistoryButtons}. */
export interface EditorHistoryButtonsProps {
    /** Whether an undo step is available (enables the undo button). */
    canUndo: boolean;
    /** Whether a redo step is available (enables the redo button). */
    canRedo: boolean;
    /** Steps one entry back. */
    onUndo: () => void;
    /** Steps one entry forward. */
    onRedo: () => void;
    /** Button size (both configurators use `small`). */
    size?: 'small' | 'medium' | 'large';
    /** Extra styling applied to both buttons (e.g. `text.secondary` colour in the modal title). */
    sx?: SxProps<Theme>;
}

/**
 * Undo/redo button pair with tooltips and aria-labels.
 *
 * @param props - Component props.
 * @param props.canUndo - Whether an undo step is available.
 * @param props.canRedo - Whether a redo step is available.
 * @param props.onUndo - Steps one entry back.
 * @param props.onRedo - Steps one entry forward.
 * @param props.size - Button size.
 * @param props.sx - Extra styling for both buttons.
 * @returns The two buttons.
 */
function EditorHistoryButtons({
    canUndo,
    canRedo,
    onUndo,
    onRedo,
    size = 'small',
    sx,
}: EditorHistoryButtonsProps): React.JSX.Element {
    return (
        <>
            <Tooltip title={Generic.t('theme_studio_undo')}>
                <span>
                    <IconButton
                        onClick={onUndo}
                        disabled={!canUndo}
                        size={size}
                        sx={sx}
                        aria-label={Generic.t('theme_studio_undo')}
                    >
                        <UndoIcon fontSize={size} />
                    </IconButton>
                </span>
            </Tooltip>
            <Tooltip title={Generic.t('theme_studio_redo')}>
                <span>
                    <IconButton
                        onClick={onRedo}
                        disabled={!canRedo}
                        size={size}
                        sx={sx}
                        aria-label={Generic.t('theme_studio_redo')}
                    >
                        <RedoIcon fontSize={size} />
                    </IconButton>
                </span>
            </Tooltip>
        </>
    );
}

export default EditorHistoryButtons;
