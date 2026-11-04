/**
 * The Farbwähler — the one colour picker of every editor surface (ADR-0102).
 *
 * @module components/colorPicker/CollectionColorPicker
 * @remarks
 * A *controlled* popover: the field row owns the trigger and the open state (open ⇔ an anchor is
 * passed) and receives the chosen value through `onCommit`. This module is the only importer of
 * the picker library (`react-best-gradient-color-picker`), so an engine swap touches one place.
 *
 * Inside: a header row (title left, close × right), the library with its configuration, and the
 * popover that follows its content (`FollowingPopover`). Picks are shown at once and committed
 * live with a 150 ms debounce; a pending commit is flushed when the Farbwähler closes (×,
 * Escape, click outside, the field row taking the anchor away) and on unmount. A pick passes the
 * Regeln für Farbeingaben as `picked`: solid colours are stored as `#rrggbb` / `#rrggbbaa`,
 * gradients unchanged.
 *
 * Light/dark follows the ambient MUI theme of the surface it opens in (vis-2 host theme, the
 * ECharts editor theme, the studio): the library mode is forced with `disableDarkMode` /
 * `disableLightMode`, the paper and the library surface take that theme's colours.
 *
 * Escape closes only the Farbwähler, never a surrounding MUI dialog — MUI's top-modal rule
 * (the popover is the topmost modal while open).
 */

import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Tooltip, Typography, useTheme } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import { useCallback, useEffect, useRef, useState } from 'react';
import type React from 'react';
import ColorPicker, { type ColorPickerProps } from 'react-best-gradient-color-picker';
import Generic from '../../Generic';
import { applyColorInputRules } from '../../lib/helper/colorInputRules';
import FollowingPopover from './FollowingPopover';

/** Debounce of the live commit while the user drags, in ms. */
const COMMIT_DELAY_MS = 150;

/** Props for {@link CollectionColorPicker}. */
export interface CollectionColorPickerProps {
    /** Element the Farbwähler hangs from; `null` = closed. */
    anchorEl: HTMLElement | null;
    /** Called when the Farbwähler wants to close (×, Escape, click outside) — after any flush. */
    onClose: () => void;
    /** Header title, e.g. the field name; the header shows only the × without it. */
    title?: string;
    /** Colour the picker starts from / shows (stored value or effective colour). */
    value: string;
    /** Receives each chosen value, normalized (solid `#rrggbb` / `#rrggbbaa`, gradient unchanged). */
    onCommit: (value: string) => void;
    /** Whether the field takes gradients: shows Solid/Gradient and the gradient controls. */
    allowGradient: boolean;
    /**
     * Preset colours (Ticket 05: preset row with large preview; without them the Farbwähler reads
     * the Collection theme colours while open). Not shown yet.
     */
    presets?: string[];
}

/** Whether the browser offers the native EyeDropper API (the library's fallback is slow/broken). */
function hasNativeEyeDropper(): boolean {
    return typeof window !== 'undefined' && 'EyeDropper' in window;
}

/**
 * Library configuration of the Farbwähler: which parts show, light/dark, surface style.
 *
 * @param options - What the field allows and the ambient theme.
 * @param options.allowGradient - Field takes gradients.
 * @param options.theme - Ambient MUI theme of the surface.
 * @returns Library props (without value / onChange).
 */
function libraryConfig({
    allowGradient,
    theme,
}: {
    allowGradient: boolean;
    theme: Theme;
}): Omit<ColorPickerProps, 'value' | 'onChange'> {
    const dark = theme.palette.mode === 'dark';
    const muted = theme.palette.text.secondary;
    return {
        // Square, hue, alpha, Advanced sliders and Color Guide stay on (library defaults).
        hideColorTypeBtns: !allowGradient,
        hideGradientControls: !allowGradient,
        // The own input row replaces the library inputs (library bugs, upstream #126).
        hideInputs: true,
        hideInputType: true,
        hideEyeDrop: !hasNativeEyeDropper(),
        // Presets come with Ticket 05.
        hidePresets: true,
        disableDarkMode: !dark,
        disableLightMode: dark,
        style: {
            body: { background: theme.palette.background.paper },
            rbgcpControlBtn: { color: muted },
            rbgcpControlIcon: { stroke: muted },
            rbgcpControlIcon2: { fill: muted },
            rbgcpComparibleLabel: { color: theme.palette.text.primary },
        },
    };
}

/**
 * Header row: title left (when given), close × right.
 *
 * @param props - Component props.
 * @param props.title - Header title.
 * @param props.onClose - Close handler of the ×.
 * @returns The header row.
 */
function PickerHeader({ title, onClose }: { title?: string; onClose: () => void }): React.JSX.Element {
    const closeLabel = Generic.t('color_picker_close');
    return (
        <Box
            data-picker-header
            sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, minHeight: 28 }}
        >
            {title ? (
                <Typography
                    data-picker-title
                    variant="subtitle2"
                    noWrap
                    sx={{ flex: 1, minWidth: 0, color: 'text.primary' }}
                >
                    {title}
                </Typography>
            ) : (
                <Box sx={{ flex: 1 }} />
            )}
            <Tooltip title={closeLabel}>
                <IconButton
                    size="small"
                    aria-label={closeLabel}
                    onClick={onClose}
                    sx={{ p: 0.5, mr: -0.5 }}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            </Tooltip>
        </Box>
    );
}

/**
 * The Farbwähler popover.
 *
 * @param props - Component props.
 * @param props.anchorEl - Anchor element; `null` = closed.
 * @param props.onClose - Close request (after the flush).
 * @param props.title - Header title.
 * @param props.value - Colour shown.
 * @param props.onCommit - Receives each chosen, normalized value.
 * @param props.allowGradient - Field takes gradients.
 * @returns The popover.
 */
function CollectionColorPicker({
    anchorEl,
    onClose,
    title,
    value,
    onCommit,
    allowGradient,
}: CollectionColorPickerProps): React.JSX.Element {
    const theme = useTheme();
    const open = anchorEl !== null;

    // What the library shows: the raw pick while editing, else the value from outside.
    const [draft, setDraft] = useState(value);
    // Last value committed or received — a value prop equal to it is our own commit coming back.
    const knownValueRef = useRef(value);
    const pendingRef = useRef<{ timer: ReturnType<typeof setTimeout>; raw: string } | null>(null);
    // Latest commit inputs, read by the timer and the unmount flush.
    const latestRef = useRef({ onCommit, allowGradient });
    useEffect(() => {
        latestRef.current = { onCommit, allowGradient };
    }, [onCommit, allowGradient]);

    useEffect(() => {
        if (value !== knownValueRef.current) {
            knownValueRef.current = value;
            setDraft(value);
        }
    }, [value]);

    /** Runs a pending commit now (no-op without one). */
    const flush = useCallback((): void => {
        const pending = pendingRef.current;
        if (pending === null) {
            return;
        }
        clearTimeout(pending.timer);
        pendingRef.current = null;
        const result = applyColorInputRules(pending.raw, {
            source: 'picked',
            allowGradient: latestRef.current.allowGradient,
        });
        if (result.kind === 'value') {
            knownValueRef.current = result.value;
            latestRef.current.onCommit(result.value);
        }
    }, []);

    const handlePick = useCallback(
        (raw: string): void => {
            setDraft(raw);
            if (pendingRef.current !== null) {
                clearTimeout(pendingRef.current.timer);
            }
            pendingRef.current = { raw, timer: setTimeout(flush, COMMIT_DELAY_MS) };
        },
        [flush],
    );

    const handleClose = useCallback((): void => {
        flush();
        onClose();
    }, [flush, onClose]);

    // The field row may take the anchor away itself; flush then, and on unmount.
    useEffect(() => {
        if (!open) {
            flush();
        }
    }, [open, flush]);
    useEffect(() => flush, [flush]);

    return (
        <FollowingPopover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            paperSx={{
                p: '9px',
                borderRadius: '6px',
                backgroundColor: 'background.paper',
                backgroundImage: 'none',
                border: 1,
                borderColor: 'divider',
            }}
        >
            <PickerHeader
                title={title}
                onClose={handleClose}
            />
            <ColorPicker
                {...libraryConfig({ allowGradient, theme })}
                value={draft}
                onChange={handlePick}
            />
            {/* Input row HEX · R · G · B · A (Ticket 04) docks here: value={draft}, onChange={handlePick}. */}
        </FollowingPopover>
    );
}

export default CollectionColorPicker;
