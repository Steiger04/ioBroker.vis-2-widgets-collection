/**
 * Input collection renderer.
 *
 * @module widgets/InputCollection
 */

import { Avatar, Box, Button, InputAdornment, TextField, Typography } from '@mui/material';
import { useContext, useEffect, useRef, useState, type FC } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useHtmlValue from '../hooks/useHtmlValue';
import useValueState from '../hooks/useValueState';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { gradientColor } from '../lib/helper/gradientColor';
import isOidReadOnly from '../lib/helper/isOidReadOnly';

import type { InputCollectionContextProps } from '../types';

// OID types this widget can bind to.
const VALID_TYPES = new Set(['string', 'number', 'mixed']);

/**
 * Renders a text/number value bound to a single OID as display-first inline-edit.
 *
 * @remarks
 * Whatever is present (icon, value, or both) is shown centered as one group. A click
 * switches inline to a TextField (the icon is hidden while editing):
 * - OK-button mode (`showOkButton`): keeps a local draft and commits on blur/Enter/click.
 * - Otherwise: forwards every keystroke to {@link module:hooks/useValueState} (debounced write).
 *
 * Read-only widgets (`onlyDisplay` or non-writable OID) never enter edit mode.
 * Type conversion and debouncing are handled by `useValueState`.
 */
const InputCollection: FC = () => {
    const context = useContext(CollectionContext) as InputCollectionContextProps;
    const {
        widget,
        theme,
        widget: {
            data: { oidObject },
        },
    } = context;

    const { data } = useData('oid');
    const { value: oidValue, updateValue, hasBackendChange } = useValueState('oid');

    // Formatted display value (alias → value → oidValue+unit, may contain HTML).
    const htmlValue = useHtmlValue(oidValue, widget, data);
    const contentValue = htmlValue !== undefined && htmlValue !== null ? String(htmlValue) : '';

    const oidType = oidObject?.type;
    const isValidType = oidType !== undefined && VALID_TYPES.has(oidType);
    const isNumber = oidType === 'number';
    const isReadOnly = isOidReadOnly(widget.data);
    const showOkButton = Boolean(widget.data.showOkButton);
    const editable = !isReadOnly;

    const textColor = data.textColor;
    const inputVariant = widget.data.inputVariant ?? 'standard';

    const iconSrc = data.icon;
    const iconColor = data.iconColor || theme.palette.primary.main;
    const iconStyles = getIconColorStyles(iconSrc, iconColor, Boolean(data.forceColorMask));

    const minValue = widget.data.minValue !== undefined ? Number(widget.data.minValue) : undefined;
    const maxValue = widget.data.maxValue !== undefined ? Number(widget.data.maxValue) : undefined;
    const step = widget.data.step !== undefined ? Number(widget.data.step) : undefined;

    // Raw OID value as plain string for the editable TextField.
    const rawValue = oidValue === undefined || oidValue === null ? '' : String(oidValue);

    const [localValue, setLocalValue] = useState(rawValue);
    const [editing, setEditing] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Keep the draft in sync with the backend value while not editing.
    useEffect(() => {
        if (!editing) {
            setLocalValue(rawValue);
        }
    }, [rawValue, editing]);

    // Auto-focus the field when entering edit mode.
    useEffect(() => {
        if (editing) {
            inputRef.current?.focus();
        }
    }, [editing]);

    const enterEdit = (): void => {
        if (editable) {
            setEditing(true);
        }
    };

    const commit = (): void => {
        setEditing(false);
        updateValue(localValue);
    };

    const showIcon = !widget.data.noIcon && Boolean(iconSrc);

    return (
        <CollectionBase
            isValidType={isValidType}
            data={data}
            oidValue={oidValue}
        >
            <CollectionBaseImage
                data={data}
                widget={widget}
            />
            {isValidType ? (
                editing ? (
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            px: Number(widget.data.inputPadding),
                        }}
                    >
                        <TextField
                            inputRef={inputRef}
                            fullWidth
                            size="small"
                            variant={inputVariant}
                            type={isNumber ? 'number' : 'text'}
                            value={localValue}
                            error={hasBackendChange}
                            onChange={e => {
                                setLocalValue(e.target.value);
                                // Live mode writes per keystroke; OK mode writes only on commit.
                                if (!showOkButton) {
                                    updateValue(e.target.value);
                                }
                            }}
                            onBlur={() => {
                                if (showOkButton) {
                                    commit();
                                } else {
                                    setEditing(false);
                                }
                            }}
                            onKeyDown={e => {
                                if (e.key === 'Enter') {
                                    (e.target as HTMLElement).blur();
                                }
                            }}
                            slotProps={{
                                input: {
                                    endAdornment: oidObject?.unit ? (
                                        <InputAdornment position="end">{oidObject.unit}</InputAdornment>
                                    ) : undefined,
                                },
                                htmlInput: isNumber ? { step, min: minValue, max: maxValue } : undefined,
                            }}
                            sx={{
                                fontSize: data.valueSize,
                                color: textColor,
                            }}
                        />
                        {showOkButton && (
                            <Button
                                variant="contained"
                                size="small"
                                // Prevent the field from blurring before the click registers.
                                onMouseDown={e => e.preventDefault()}
                                onClick={commit}
                            >
                                OK
                            </Button>
                        )}
                    </Box>
                ) : (
                    <Box
                        onClick={enterEdit}
                        sx={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: editable ? 'text' : 'default',
                        }}
                    >
                        {showIcon && (
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexGrow: 1,

                                    width: '100%',
                                    height: '100%',
                                }}
                            >
                                <Avatar
                                    variant="square"
                                    src={iconSrc || undefined}
                                    slotProps={{
                                        img: {
                                            style: {
                                                objectFit: 'contain',
                                                ...iconStyles,
                                            },
                                        },
                                    }}
                                    sx={{
                                        overflow: 'visible',

                                        width: data.iconSizeOnly,
                                        height: data.iconSizeOnly,

                                        left: `calc(0px + ${data.iconXOffset})`,
                                        top: `calc(0px - ${data.iconYOffset})`,
                                    }}
                                />
                            </Box>
                        )}
                        {!widget.data.noValue && (
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexGrow: 1,

                                    width: '100%',
                                    height: '100%',
                                }}
                            >
                                <Typography
                                    component={Box}
                                    variant="body2"
                                    sx={{
                                        fontSize: data.valueSize,
                                        textAlign: 'center', // For HTML content with tags
                                        bgcolor: 'transparent',

                                        background: gradientColor(textColor),
                                        WebkitBackgroundClip: 'text',
                                        backgroundClip: 'text',
                                        color: gradientColor(textColor) ? 'transparent' : textColor,

                                        textTransform: 'none',
                                        px: 1,
                                        pl: 0,
                                        pr: 1,
                                        width: '100%',
                                        height: '100%',
                                        flexGrow: 1,
                                        display: 'flex',
                                        alignItems: 'center', // Vertical centering
                                        justifyContent: 'center', // Horizontal centering of text block
                                        overflowWrap: 'break-word', // Modern CSS property for word wrapping
                                        wordBreak: 'break-word', // Additional protection for long words
                                        whiteSpace: 'normal', // Allows line breaks
                                        hyphens: 'auto', // Automatic hyphenation when supported
                                        '& > div': {
                                            textAlign: 'left', // Left-aligned lines for breaks in HTML
                                            display: 'inline-block',
                                        },
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: `<div style="text-align: left; display: inline-block;">${contentValue || ''}</div>`,
                                    }}
                                />
                            </Box>
                        )}
                    </Box>
                )
            ) : null}
        </CollectionBase>
    );
};

export default InputCollection;
