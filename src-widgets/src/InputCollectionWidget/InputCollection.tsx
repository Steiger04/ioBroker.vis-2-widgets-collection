/**
 * Input collection renderer.
 *
 * @module widgets/InputCollection
 */

import { Box, Button, InputAdornment, TextField } from '@mui/material';
import { useContext, type FC } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionValueDisplay from '../components/CollectionValueDisplay';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import { INPUT_ENTRY_TYPES, isAllowedOidType } from '../lib/allowedOidTypes';
import { displayText } from '../lib/displayText';
import { INPUT_PADDING_DEFAULT, INPUT_VARIANT_DEFAULT } from '../lib/inputFields';
import { solidOf } from '../lib/helper/colorDerivation';
import { buildEntryFieldAttributes } from './entryFieldAttributes';
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
 * - OK-button mode (`showOkButton`): keeps a local draft; Enter and OK commit it, a blur only a changed one.
 * - Otherwise: forwards every keystroke to {@link module:hooks/useValueState} (debounced write).
 *
 * The field's type, unit and spinner attributes come from
 * {@link module:InputCollectionWidget/entryFieldAttributes}.
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

    // The Anzeigetext (alias → value → oidValue+unit, may contain HTML).
    const text = displayText({ value: oidValue, unit: oidObject?.unit, alias: data.alias, rowValue: data.value });
    const contentValue = text !== undefined ? String(text) : '';

    const isValidType = isAllowedOidType(INPUT_ENTRY_TYPES, oidObject?.type);
    const attributes = buildEntryFieldAttributes({ fields: widget.data, object: oidObject, draft: field.value });

    // A field cannot clip a gradient through its text without losing the caret, so it paints the
    // Repräsentative Vollfarbe. Without one the rule stays out and the theme text colour remains.
    const fieldColor = solidOf(data.textColor);
    // '' and null come only from raw data (the vis-2 select offers the options): unset like a missing key.
    const inputVariant = widget.data.inputVariant || INPUT_VARIANT_DEFAULT;
    // An unset padding is drawn with the default vis-2's panel shows for it; an emptied field ('')
    // keeps its reading as 0.
    const inputPadding = widget.data.inputPadding ?? INPUT_PADDING_DEFAULT;

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
                        px: Number(inputPadding),
                    }}
                >
                    <TextField
                        // The field mounts only when a session starts.
                        autoFocus
                        fullWidth
                        size="small"
                        variant={inputVariant}
                        type={attributes.type}
                        {...field}
                        slotProps={{
                            input: {
                                endAdornment: attributes.unit ? (
                                    <InputAdornment position="end">{attributes.unit}</InputAdornment>
                                ) : undefined,
                            },
                            htmlInput: attributes.htmlInput,
                        }}
                        // The InputBase sets size and colour again, so both go to the input itself. MUI's
                        // error red is the line around it, not the text. The unit's Typography has a
                        // size of its own and keeps its colour. Unset values drop out of the rule.
                        sx={{
                            '& .MuiInputBase-input': { fontSize: data.valueSize, color: fieldColor },
                            '& .MuiInputAdornment-root .MuiTypography-root': { fontSize: data.valueSize },
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
