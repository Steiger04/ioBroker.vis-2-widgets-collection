/**
 * Color picker field component for the vis-2 widget editor.
 *
 * @module components/CollectionGradientColorPicker
 * @remarks
 * Edits gradient/background color fields. Supports Hex/RGB/RGBA and gradients
 * (`linear-gradient` / `radial-gradient`).
 *
 * Resolution model (ADR 0004):
 * - The **swatch** shows the field's *effective* color via `resolveEffectiveColor`
 *   (the field's Auflösungskaskade, stages at `cascadeCandidates`), so it reflects theme/fallback changes immediately — even when the field is
 *   empty ("inherit"). The text field still shows the *stored* value.
 * - The field's value is only ever persisted on an **explicit** user choice
 *   (pick / type / clear). The picker never "materializes" a resolved color into
 *   data merely because the popover was opened — "empty" stays a first-class
 *   "inherit" state.
 * - The clear (trash) button appears only when an explicit override exists; clearing
 *   returns the field to "inherit".
 *
 * Typed text runs through the Regeln für Farbeingaben (`lib/helper/colorInputRules`,
 * ADR-0102): every CSS colour the browser accepts (names, `hsl()`, `transparent`,
 * `var(--…)`) is stored as typed; a gradient only where the field allows it — typed into a
 * `noGradient` field it is an error with its own message. Validation is real-time; invalid
 * input is marked with an error state and does not trigger `onDataChange`. Empty values are
 * normalized to null.
 *
 * The swatch opens the Farbwähler (`colorPicker/CollectionColorPicker`) with the field label as
 * title; it commits picks debounced and normalized (solid `#rrggbb` / `#rrggbbaa`, gradient
 * unchanged) and hides Solid/Gradient in `noGradient` fields, so no gradient reaches them.
 */

import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton, TextField, ThemeProvider } from '@mui/material';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type React from 'react';
import Generic from '../Generic';
import { resolveEffectiveColor } from '../lib/helper/resolveEffectiveColor';
import { applyColorInputRules, type ColorInputInvalidReason } from '../lib/helper/colorInputRules';
import useCollectionTheme from '../hooks/useCollectionTheme';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import CollectionColorPicker from './colorPicker/CollectionColorPicker';
import type { RxWidgetInfoCustomComponentProperties, WidgetData, VisTheme } from '@iobroker/types-vis-2';

/**
 * Props for CollectionGradientColorPicker component.
 *
 * @interface CollectionGradientColorPickerProps
 * @property {ExtendedField} field - Field definition with optional `fallbackFields`, `terminal`, `inheritTextStyle`, `noGradient`.
 * @property {WidgetData} data - Current editor data map.
 * @property {(patch: WidgetData) => void} onDataChange - Callback invoked with partial updates.
 * @property {RxWidgetInfoCustomComponentProperties} props - vis-2 editor context (socket, theme, views, selected widget, …).
 * @property {'standard' | 'outlined'} [inputVariant] - Text input variant. Default `standard` (the vis-2
 *  attribute panel's underline look); the widget configurators pass `outlined` so the colour field
 *  matches its outlined neighbours (review 2026-11-03, B10).
 */
interface CollectionGradientColorPickerProps {
    field: ExtendedField;
    data: WidgetData;
    onDataChange: (patch: WidgetData) => void;
    props: RxWidgetInfoCustomComponentProperties;
    inputVariant?: 'standard' | 'outlined';
}

/**
 * Reads the vis-2 widget CSS `color` for the widget currently being edited.
 *
 * The editor custom-field props do not expose `widget` directly; the widget's
 * style is reached through the project map
 * (`context.views[selectedView].widgets[selectedWidget]`). Returns undefined when
 * the path is unavailable — `resolveEffectiveColor` then simply skips the
 * vis-2-style cascade level.
 */
function readWidgetStyleColor(props: RxWidgetInfoCustomComponentProperties): { color?: string } | undefined {
    const ctx = props.context as unknown as {
        views?: Record<string, { widgets?: Record<string, { style?: { color?: string } }> }>;
    };
    const widgetId = props.selectedWidgets?.[0] ?? props.selectedWidget;
    const style = widgetId ? ctx?.views?.[props.selectedView]?.widgets?.[widgetId as string]?.style : undefined;
    return style;
}

/**
 * Renders a compact gradient picker with a popover editor.
 *
 * @param props - Component props.
 * @param props.field - Field definition (name, fallbackFields, terminal, inheritTextStyle, noGradient).
 * @param props.data - Current editor data map.
 * @param props.onDataChange - Callback invoked with partial updates.
 * @param props.props - vis-2 editor context (socket, theme, views, selected widget, …).
 * @param props.inputVariant - Text input variant (default `standard`).
 * @returns Rendered field UI.
 */
function CollectionGradientColorPicker({
    field,
    data,
    onDataChange,
    props,
    inputVariant = 'standard',
}: CollectionGradientColorPickerProps): React.JSX.Element {
    const outlined = inputVariant === 'outlined';
    const fieldName: string = field.name!;
    const fieldValue = data[fieldName];
    const [cachedValue, setCachedValue] = useState<string>(fieldValue || '');
    // Why the current text cannot be stored (null = storable); drives the error mark and message.
    const [errorReason, setErrorReason] = useState<ColorInputInvalidReason | null>(null);
    const error = errorReason !== null;
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    // Track the last prop value to detect external changes only
    const lastPropValueRef = useRef<string | null | undefined>(fieldValue);

    // Editor chrome uses the vis-2 HOST theme. The attribute editor is a vis-2
    // surface — its text, placeholder ("erbt"), borders and popover must follow
    // vis-2, never the collection theme. What is configured here affects only the
    // widget, not the editor itself.
    const hostTheme = props.context.theme;

    // The collection (merged) theme is used ONLY to compute the effective color
    // shown in the swatch — that swatch is a preview of what the widget renders,
    // and the widget runs under the collection theme.
    const collectionTheme = useCollectionTheme(props.context.socket, props.context.theme) as VisTheme;

    // vis-2 widget CSS `color` (for the inheritTextStyle cascade level)
    const styleColor = useMemo(() => readWidgetStyleColor(props), [props]);

    // Effective color shown in the swatch / used as the popover's starting color.
    // Recomputed whenever data, theme, or the widget style changes.
    const effectiveColor = useMemo(
        () => resolveEffectiveColor(field, data, collectionTheme, styleColor),
        [field, data, collectionTheme, styleColor],
    );

    // Header title of the Farbwähler: the field label, as the attribute panel shows it.
    const fieldTitle = 'label' in field && field.label ? Generic.t(field.label) : undefined;

    // Explicit override exists ⇔ a non-empty value is stored for this field.
    const overridden = typeof fieldValue === 'string' && fieldValue.trim() !== '';

    // The Farbwähler commits debounced and already normalized (Regeln für Farbeingaben, picked).
    const handlePickerCommit = useCallback(
        (picked: string): void => {
            setCachedValue(picked);
            setErrorReason(null);
            // Update lastPropValueRef BEFORE onDataChange so the sync effect keeps the value
            lastPropValueRef.current = picked;
            onDataChange({ [fieldName]: picked });
        },
        [fieldName, onDataChange],
    );

    // Typed text runs through the Regeln für Farbeingaben (ADR-0102): any CSS colour the browser
    // accepts is stored as typed, a gradient only where the field allows it; invalid text is
    // marked and not stored, emptied text stores null (Erben).
    const handleTextChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>): void => {
            const text = event.target.value;
            const result = applyColorInputRules(text, { source: 'typed', allowGradient: field.noGradient !== true });
            if (result.kind === 'invalid') {
                setCachedValue(text);
                setErrorReason(result.reason);
                return;
            }
            const finalValue = result.kind === 'value' ? result.value : null;
            setCachedValue(finalValue === null ? '' : text);
            setErrorReason(null);
            // Update lastPropValueRef BEFORE onDataChange so the sync effect keeps the typed text
            lastPropValueRef.current = finalValue;
            onDataChange({ [fieldName]: finalValue });
        },
        [fieldName, field.noGradient, onDataChange],
    );

    // Clearing returns the field to "inherit".
    const handleClear = useCallback((): void => {
        setCachedValue('');
        setErrorReason(null);
        lastPropValueRef.current = null;
        onDataChange({ [fieldName]: null });
    }, [fieldName, onDataChange]);

    // Synchronize with external prop changes (e.g., undo/redo, preset loading)
    useEffect(() => {
        // Only update if the prop value has actually changed from the outside
        if (fieldValue !== lastPropValueRef.current) {
            lastPropValueRef.current = fieldValue;
            setCachedValue(fieldValue || '');
            setErrorReason(null);
        }
    }, [fieldValue]);

    return (
        <>
            <ThemeProvider theme={hostTheme}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: outlined ? 'center' : 'flex-start',
                        gap: 0.5,
                        mt: outlined ? 0 : 1,
                    }}
                >
                    <TextField
                        variant={inputVariant}
                        size={outlined ? 'small' : undefined}
                        fullWidth
                        value={cachedValue}
                        error={error}
                        placeholder={overridden ? '' : Generic.t('color_inherit')}
                        helperText={
                            errorReason === 'gradientNotAllowed'
                                ? Generic.t('color_gradient_not_allowed')
                                : errorReason === 'notAColor'
                                  ? Generic.t('color_invalid')
                                  : ''
                        }
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
                        onClick={(e: React.MouseEvent<HTMLDivElement>): void => setAnchorEl(e.currentTarget)}
                        title={Generic.t('choose_color')}
                        sx={{
                            mt: outlined ? 0 : cachedValue ? '4px' : '-2px',
                            px: '4px',
                            py: cachedValue ? '4px' : '3px',
                            backgroundColor: effectiveColor
                                ? hostTheme.name === 'light'
                                    ? hostTheme.palette.common.white
                                    : '#121212'
                                : 'transparent',
                            borderRadius: '1px',
                            display: 'inline-block',
                            cursor: 'pointer',
                            verticalAlign: 'middle',
                            boxSizing: 'border-box',
                            border: error
                                ? `1px solid ${hostTheme.palette.error.main}`
                                : effectiveColor
                                  ? `1px solid ${hostTheme.name === 'light' ? hostTheme.palette.grey['400'] : hostTheme.palette.common.black}`
                                  : `1px dashed ${hostTheme.name === 'light' ? hostTheme.palette.grey['400'] : hostTheme.palette.text.secondary}`,
                            opacity: error ? 0.6 : 1,
                        }}
                    >
                        <Box
                            sx={{
                                width: effectiveColor ? '36px' : '38px',
                                height: effectiveColor ? '14px' : '18px',
                                borderRadius: '2px',
                                background: error
                                    ? 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,0,0,0.1) 2px, rgba(255,0,0,0.1) 4px)'
                                    : effectiveColor,
                            }}
                        />
                    </Box>
                </Box>

                <CollectionColorPicker
                    anchorEl={anchorEl}
                    onClose={(): void => setAnchorEl(null)}
                    title={fieldTitle}
                    value={cachedValue || effectiveColor || collectionTheme.palette.primary.main}
                    onCommit={handlePickerCommit}
                    allowGradient={field.noGradient !== true}
                    socket={props.context.socket}
                />
            </ThemeProvider>
        </>
    );
}

export default CollectionGradientColorPicker;
