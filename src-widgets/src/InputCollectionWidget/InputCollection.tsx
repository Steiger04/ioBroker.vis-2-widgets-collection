/**
 * Input collection renderer.
 *
 * @module widgets/InputCollection
 */

import { Box, Button, InputAdornment, TextField } from '@mui/material';
import { useContext, useEffect, useRef, type FC } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionValueDisplay from '../components/CollectionValueDisplay';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useHtmlValue from '../hooks/useHtmlValue';
import { INPUT_ENTRY_TYPES, isAllowedOidType } from '../lib/allowedOidTypes';
import useInlineEdit from './useInlineEdit';

import type { InputCollectionContextProps } from '../types';

/**
 * Renders a text/number value bound to a single OID as display-first inline-edit.
 *
 * @remarks
 * Whatever is present (icon, value, or both) is shown centered as one group. A click
 * switches inline to a TextField (the icon is hidden while editing); the session
 * rules (draft, live vs. OK-button commit, the Sperre at the start) live in
 * {@link module:InputCollectionWidget/inlineEditSession}, behind
 * {@link module:widgets/InputCollectionWidget/useInlineEdit}:
 * - OK-button mode (`showOkButton`): keeps a local draft and commits on blur/Enter/click.
 * - Otherwise: forwards every keystroke to {@link module:hooks/useValueState} (debounced write).
 *
 * Locked widgets (the binding's Sperre: `onlyDisplay` or non-writable OID) never enter edit mode.
 * Type conversion and debouncing are handled by `useValueState`.
 */
const InputCollection: FC = () => {
    const context = useContext(CollectionContext) as InputCollectionContextProps;
    const {
        widget,
        widget: {
            data: { oidObject },
        },
    } = context;

    const { data, oidValue } = useData('oid');
    const showOkButton = Boolean(widget.data.showOkButton);
    const { editing, locked, start, confirm, field } = useInlineEdit('oid', { showOkButton });

    // Formatted display value (alias → value → oidValue+unit, may contain HTML).
    const htmlValue = useHtmlValue(oidValue, widget, data);
    const contentValue = htmlValue !== undefined && htmlValue !== null ? String(htmlValue) : '';

    const oidType = oidObject?.type;
    const isValidType = isAllowedOidType(INPUT_ENTRY_TYPES, oidType);
    const isNumber = oidType === 'number';

    const textColor = data.textColor;
    const inputVariant = widget.data.inputVariant ?? 'standard';

    const minValue = widget.data.minValue !== undefined ? Number(widget.data.minValue) : undefined;
    const maxValue = widget.data.maxValue !== undefined ? Number(widget.data.maxValue) : undefined;
    const step = widget.data.step !== undefined ? Number(widget.data.step) : undefined;

    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-focus the field when entering edit mode.
    useEffect(() => {
        if (editing) {
            inputRef.current?.focus();
        }
    }, [editing]);

    return (
        <CollectionBase
            isValidType={isValidType}
            data={data}
            oidValue={oidValue}
        >
            {editing ? (
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
                        {...field}
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
                            onClick={confirm}
                        >
                            OK
                        </Button>
                    )}
                </Box>
            ) : (
                <Box
                    onClick={start}
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: locked ? 'default' : 'text',
                    }}
                >
                    <CollectionValueDisplay
                        data={data}
                        contentValue={contentValue}
                        noIcon={widget.data.noIcon}
                        noValue={widget.data.noValue}
                    />
                </Box>
            )}
        </CollectionBase>
    );
};

export default InputCollection;
