/**
 * Textfeld-Zeile — the field row of colour fields: text field · trash · swatch (ADR-0102).
 *
 * @module components/ColorTextFieldRow
 * @remarks
 * One row for the contract colour fields of the attribute panel (via the contract adapter
 * `ContractColorField`), the Schlichte Farbfelder and the ECharts configurator. It knows nothing
 * of field definitions, widget data or the Auflösungskaskade: the caller hands in the stored
 * value and the colour the swatch shows (`effectiveColor`) and receives every change as the value
 * to store (`null` = no override, the field inherits again).
 *
 * - **Text field** — shows the stored value; typed text runs through the Regeln für Farbeingaben
 *   (`typed`): every CSS colour the browser accepts is stored as typed, a gradient only with
 *   `allowGradient`; invalid text is marked with its message and not stored; emptied text stores
 *   `null`. In the `inherit` placeholder mode an empty field shows "erbt".
 * - **Trash** — only while a value is stored; removes the override (`null`).
 * - **Swatch** — shows `effectiveColor`; a click opens the Farbwähler (`colorPicker/CollectionColorPicker`)
 *   with `title` in its header, starting from the stored value, else the effective colour, else
 *   the ambient primary colour. Picks arrive debounced and normalized (`#rrggbb` / `#rrggbbaa`,
 *   gradients unchanged).
 * - **Disabled** — the whole row is `inert` and dimmed (ADR-0019 „deaktiviert statt
 *   ausgeblendet"): value and swatch stay visible, nothing takes focus, clicks or opens.
 *
 * The row renders under the ambient MUI theme — the caller provides the surface theme (the
 * attribute panel: the vis-2 host theme; the configurator: its editor theme).
 */

import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton, TextField, useTheme } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import type React from 'react';
import type { VisTheme } from '@iobroker/types-vis-2';
import Generic from '../Generic';
import { applyColorInputRules, type ColorInputInvalidReason } from '../lib/helper/colorInputRules';
import CollectionColorPicker from './colorPicker/CollectionColorPicker';

/** Props for {@link ColorTextFieldRow}. */
export interface ColorTextFieldRowProps {
    /** Stored value; `null` / `undefined` / `''` = no override. */
    value: string | null | undefined;
    /** Receives the value to store — typed (valid only), picked (normalized) or `null` (trash / emptied). */
    onChange: (value: string | null) => void;
    /** Colour the swatch shows (`''` = none: dashed empty swatch). Contract fields: the resolved cascade. */
    effectiveColor: string;
    /** `inherit`: an empty field shows the "erbt" placeholder; `none`: no placeholder. */
    placeholder: 'inherit' | 'none';
    /** `standard` (vis-2 attribute panel underline look, default) or `outlined` (configurators). */
    variant?: 'standard' | 'outlined';
    /** Whether gradients may be typed and picked (Solid/Gradient in the Farbwähler). */
    allowGradient: boolean;
    /** Farbwähler header title, e.g. the translated field name; without it the header shows only ×. */
    title?: string;
    /** Greyed out and inert: the value stays visible, nothing reacts. */
    disabled?: boolean;
}

/** Message key for why the current text cannot be stored. */
const ERROR_MESSAGE: Record<ColorInputInvalidReason, string> = {
    gradientNotAllowed: 'color_gradient_not_allowed',
    notAColor: 'color_invalid',
};

/**
 * Renders the text-field row of a colour field.
 *
 * @param props - See {@link ColorTextFieldRowProps}.
 * @param props.value - Stored value.
 * @param props.onChange - Receives the value to store (`null` = no override).
 * @param props.effectiveColor - Colour the swatch shows.
 * @param props.placeholder - `inherit` ("erbt" while empty) or `none`.
 * @param props.variant - `standard` (default) or `outlined`.
 * @param props.allowGradient - Whether gradients may be typed and picked.
 * @param props.title - Farbwähler header title.
 * @param props.disabled - Greyed out and inert.
 * @returns The row (text field, trash while overridden, swatch) and its Farbwähler.
 */
function ColorTextFieldRow({
    value,
    onChange,
    effectiveColor,
    placeholder,
    variant = 'standard',
    allowGradient,
    title,
    disabled = false,
}: ColorTextFieldRowProps): React.JSX.Element {
    const theme = useTheme();
    const outlined = variant === 'outlined';
    // Light frame as the vis-2 attribute panel draws it: by the vis-2 theme name, else the mode.
    const visThemeName = (theme as Partial<VisTheme>).name;
    const light = visThemeName ? visThemeName === 'light' : theme.palette.mode === 'light';

    const [text, setText] = useState<string>(value || '');
    // Why the current text cannot be stored (null = storable); drives the error mark and message.
    const [errorReason, setErrorReason] = useState<ColorInputInvalidReason | null>(null);
    const error = errorReason !== null;
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    // The last value this row stored or received, to tell external changes from its own.
    const lastValueRef = useRef<string | null | undefined>(value);

    const store = useCallback(
        (next: string | null, shownText: string): void => {
            setText(shownText);
            setErrorReason(null);
            // Before onChange, so the sync effect keeps the row's own value.
            lastValueRef.current = next;
            onChange(next);
        },
        [onChange],
    );

    const handleTextChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>): void => {
            const typed = event.target.value;
            const result = applyColorInputRules(typed, { source: 'typed', allowGradient });
            if (result.kind === 'invalid') {
                setText(typed);
                setErrorReason(result.reason);
                return;
            }
            if (result.kind === 'empty') {
                store(null, '');
                return;
            }
            store(result.value, typed);
        },
        [allowGradient, store],
    );

    const handlePick = useCallback((picked: string): void => store(picked, picked), [store]);
    const handleClear = useCallback((): void => store(null, ''), [store]);

    // Take values changed from outside (undo/redo, preset loading, another editor).
    useEffect(() => {
        if (value !== lastValueRef.current) {
            lastValueRef.current = value;
            setText(value || '');
            setErrorReason(null);
        }
    }, [value]);

    const overridden = typeof value === 'string' && value.trim() !== '';
    const shown = effectiveColor !== '';

    const row = (
        <Box
            sx={{
                display: 'flex',
                alignItems: outlined ? 'center' : 'flex-start',
                gap: 0.5,
                mt: outlined ? 0 : 1,
            }}
        >
            <TextField
                variant={variant}
                size={outlined ? 'small' : undefined}
                fullWidth
                value={text}
                error={error}
                placeholder={placeholder === 'inherit' && !overridden ? Generic.t('color_inherit') : ''}
                helperText={errorReason ? Generic.t(ERROR_MESSAGE[errorReason]) : ''}
                onChange={handleTextChange}
                slotProps={{
                    htmlInput: {
                        style: {
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            ...(outlined ? {} : { paddingBottom: '2px', fontSize: '80%' }),
                        } as React.CSSProperties,
                    },
                }}
            />
            {overridden && (
                <IconButton
                    onClick={handleClear}
                    title={Generic.t('clear_color')}
                    size={outlined ? 'small' : 'large'}
                    sx={outlined ? undefined : { mt: -1, mr: -1.5 }}
                >
                    <DeleteIcon />
                </IconButton>
            )}

            <Box
                data-color-swatch
                data-invalid={error ? 'true' : undefined}
                onClick={(event: React.MouseEvent<HTMLDivElement>): void => {
                    if (!disabled) {
                        setAnchorEl(event.currentTarget);
                    }
                }}
                title={Generic.t('choose_color')}
                sx={{
                    mt: outlined ? 0 : text ? '4px' : '-2px',
                    px: '4px',
                    py: text ? '4px' : '3px',
                    backgroundColor: shown ? (light ? theme.palette.common.white : '#121212') : 'transparent',
                    borderRadius: '1px',
                    display: 'inline-block',
                    cursor: 'pointer',
                    verticalAlign: 'middle',
                    boxSizing: 'border-box',
                    border: error
                        ? `1px solid ${theme.palette.error.main}`
                        : shown
                          ? `1px solid ${light ? theme.palette.grey['400'] : theme.palette.common.black}`
                          : `1px dashed ${light ? theme.palette.grey['400'] : theme.palette.text.secondary}`,
                    opacity: error ? 0.6 : 1,
                }}
            >
                <Box
                    sx={{
                        width: shown ? '36px' : '38px',
                        height: shown ? '14px' : '18px',
                        borderRadius: '2px',
                        background: error
                            ? 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,0,0,0.1) 2px, rgba(255,0,0,0.1) 4px)'
                            : effectiveColor,
                    }}
                />
            </Box>
        </Box>
    );

    return (
        <>
            {disabled ? (
                <Box
                    inert
                    aria-disabled
                    sx={{ opacity: theme.palette.action.disabledOpacity }}
                >
                    {row}
                </Box>
            ) : (
                row
            )}
            <CollectionColorPicker
                anchorEl={disabled ? null : anchorEl}
                onClose={(): void => setAnchorEl(null)}
                title={title}
                value={text || effectiveColor || theme.palette.primary.main}
                onCommit={handlePick}
                allowGradient={allowGradient}
            />
        </>
    );
}

export default ColorTextFieldRow;
