/**
 * The Farbwähler — the one colour picker of every editor surface (ADR-0102).
 *
 * @module components/colorPicker/CollectionColorPicker
 * @remarks
 * A *controlled* popover: the field row owns the trigger and the open state (open ⇔ an anchor is
 * passed) and receives the chosen value through `onCommit`. The picker library
 * (`react-best-gradient-color-picker`) is used only inside its capsule, the directory
 * `components/colorPicker/` — this module and its internal parts (`ColorInputRow` uses the
 * library's `useColorPicker` hook) — so an engine swap touches one place.
 *
 * Inside: a header row (title left, close × right), the library with its configuration, the
 * library's preset row with its large preview, and the popover that follows its content
 * (`FollowingPopover`). Passed presets win; without them the Collection theme colours are read
 * through `socket` by `ThemePresets` — mounted only while open, so closed pickers cost nothing. A
 * preset click is a pick like any other (stored as its fixed value; to follow the theme, leave
 * the field empty). Picks are shown at once and committed
 * live: 150 ms after the first uncommitted pick, so a continuous drag commits at least every
 * 150 ms (the latest pick each time); a pending commit is flushed when the Farbwähler closes (×,
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
 *
 * The library's parser throws while rendering on a gradient it cannot read, and that error would
 * take the surrounding editor down: the {@link UnparsedValueGuard} shows such a value as no colour.
 */

import type { Connection } from '@iobroker/adapter-react-v5';
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Tooltip, Typography, useTheme } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import { Component, useCallback, useEffect, useRef, useState } from 'react';
import type React from 'react';
import ColorPicker, { type ColorPickerProps } from 'react-best-gradient-color-picker';
import { translate } from '../../lib/translate';
import { applyColorInputRules } from '../../lib/helper/colorInputRules';
import { TRANSPARENT } from '../swatchCheckerboard';
import ColorInputRow, { FOLLOW_PICKER_WIDTH } from './ColorInputRow';
import FollowingPopover from './FollowingPopover';
import ThemePresets from './ThemePresets';

/** Delay of the live commit after the first uncommitted pick, in ms — also its rate while dragging. */
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
     * Preset colours of the preset row (with the library's large preview); they win over the
     * Collection theme. An empty list switches the row off.
     */
    presets?: string[];
    /**
     * Connection the Collection theme is read from when no `presets` are passed — only while the
     * Farbwähler is open. Without both, the preset row stays off.
     */
    socket?: Connection;
}

/** A gradient's name and, where one stands before the first stop, its orientation. */
const GRADIENT_HEAD =
    /^(?:linear|radial)-gradient\(\s*(?:(?:-?[\d.]+deg|to\s|circle|ellipse|closest-|farthest-|at\s)[^,]*,)?/i;

/**
 * The value as the library reads it. CSS and the widgets take `LINEAR-GRADIENT(…)` as a gradient,
 * the library finds one by `includes('gradient')` and its angle by a lower-case `deg`: it would show
 * a solid colour, and the next pick would replace the gradient with that colour. The stops stay as
 * they are, an upper-case stop is how the library marks the selected one. The stored value stays
 * until the user changes it, and then comes back in the lower case the library writes.
 *
 * @param value - The Farbwähler's raw value.
 * @returns The value with a lower-case gradient head.
 */
const forLibrary = (value: string): string => value.replace(GRADIENT_HEAD, head => head.toLowerCase());

/** Most presets the library shows (two rows of nine). */
const MAX_PRESETS = 18;

/** Whether the browser offers the native EyeDropper API (the library's fallback is slow/broken). */
function hasNativeEyeDropper(): boolean {
    return typeof window !== 'undefined' && 'EyeDropper' in window;
}

/**
 * The presets the library gets: trimmed, without duplicates, gradients only where allowed.
 *
 * @param presets - Passed or theme presets.
 * @param allowGradient - Field takes gradients.
 * @returns At most {@link MAX_PRESETS} colours.
 */
function pickerPresets(presets: string[], allowGradient: boolean): string[] {
    const seen = new Set<string>();
    const result: string[] = [];
    for (const raw of presets) {
        const preset = raw.trim();
        const key = preset.toLowerCase();
        if (!preset || seen.has(key) || (!allowGradient && key.includes('gradient('))) {
            continue;
        }
        seen.add(key);
        result.push(preset);
    }
    return result.slice(0, MAX_PRESETS);
}

/**
 * Library configuration of the Farbwähler: which parts show, light/dark, surface style.
 *
 * @param options - What the field allows and the ambient theme.
 * @param options.allowGradient - Field takes gradients.
 * @param options.theme - Ambient MUI theme of the surface.
 * @param options.presets - Passed or theme presets; empty = preset row off.
 * @returns Library props (without value / onChange).
 */
function libraryConfig({
    allowGradient,
    theme,
    presets,
}: {
    allowGradient: boolean;
    theme: Theme;
    presets: string[];
}): Omit<ColorPickerProps, 'value' | 'onChange'> {
    const dark = theme.palette.mode === 'dark';
    const shownPresets = pickerPresets(presets, allowGradient);
    const muted = theme.palette.text.secondary;
    return {
        // Square, hue, alpha, Advanced sliders and Color Guide stay on (library defaults).
        hideColorTypeBtns: !allowGradient,
        hideGradientControls: !allowGradient,
        // The own input row replaces the library inputs (library bugs, upstream #126).
        hideInputs: true,
        hideInputType: true,
        hideEyeDrop: !hasNativeEyeDropper(),
        // Without presets the row stays off — the library would show its demo colours.
        hidePresets: shownPresets.length === 0,
        presets: shownPresets,
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
    const closeLabel = translate('color_picker_close');
    return (
        <Box
            data-picker-header
            sx={{ ...FOLLOW_PICKER_WIDTH, display: 'flex', alignItems: 'center', gap: 1, mb: 1, minHeight: 28 }}
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

/** Props of {@link UnparsedValueGuard}. */
interface UnparsedValueGuardProps {
    /** The value the library should show. */
    value: string;
    /** Renders the library's parts with the value they can read. */
    children: (value: string) => React.ReactNode;
}

/** State of {@link UnparsedValueGuard}. */
interface UnparsedValueGuardState {
    value: string;
    failed: boolean;
}

/**
 * Renders the library's parts and, when its parser throws on the value (the regeln store a typed
 * `linear-gradient(0.25turn, red, blue)` as it is, the library knows no such angle), renders them
 * again without a colour. The stored value stays; the next value is read afresh.
 *
 * @remarks
 * A boundary, not a check beforehand: the library exports neither its parser nor a function that
 * would throw outside a render, and a copy of its grammar would have to follow every release.
 */
class UnparsedValueGuard extends Component<UnparsedValueGuardProps, UnparsedValueGuardState> {
    state: UnparsedValueGuardState = { value: this.props.value, failed: false };

    static getDerivedStateFromError(): Partial<UnparsedValueGuardState> {
        return { failed: true };
    }

    static getDerivedStateFromProps(
        { value }: UnparsedValueGuardProps,
        state: UnparsedValueGuardState,
    ): UnparsedValueGuardState | null {
        return value === state.value ? null : { value, failed: false };
    }

    render(): React.ReactNode {
        return this.props.children(this.state.failed ? TRANSPARENT : this.props.value);
    }
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
 * @param props.presets - Preset colours (win over the Collection theme).
 * @param props.socket - Connection for the Collection theme presets.
 * @returns The popover.
 */
function CollectionColorPicker({
    anchorEl,
    onClose,
    title,
    value,
    onCommit,
    allowGradient,
    presets,
    socket,
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

    // The timer runs from the first uncommitted pick and is not restarted: while the user keeps
    // dragging, the latest pick is committed at least every COMMIT_DELAY_MS.
    const handlePick = useCallback(
        (raw: string): void => {
            setDraft(raw);
            if (pendingRef.current !== null) {
                pendingRef.current.raw = raw;
                return;
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

    // Passed presets win; without them the Collection theme supplies them (read only while open).
    const renderLibrary = (libraryPresets: string[], libraryValue: string): React.JSX.Element => (
        <ColorPicker
            {...libraryConfig({ allowGradient, theme, presets: libraryPresets })}
            value={libraryValue}
            onChange={handlePick}
        />
    );

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
            <UnparsedValueGuard value={forLibrary(draft)}>
                {(libraryValue): React.ReactNode => (
                    <>
                        {presets === undefined && socket ? (
                            <ThemePresets
                                socket={socket}
                                hostTheme={theme}
                            >
                                {(themePresets): React.JSX.Element => renderLibrary(themePresets, libraryValue)}
                            </ThemePresets>
                        ) : (
                            renderLibrary(presets ?? [], libraryValue)
                        )}
                        {/* Own input row; an edit is handled like a library change (Escape: see ColorInputRow). */}
                        <ColorInputRow
                            value={libraryValue}
                            onChange={handlePick}
                        />
                    </>
                )}
            </UnparsedValueGuard>
        </FollowingPopover>
    );
}

export default CollectionColorPicker;
