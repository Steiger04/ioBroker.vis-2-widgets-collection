/**
 * Value dialog behind the Zustands-Auslöser: renders the resolved state list and
 * an optional range slider for number OIDs.
 *
 * @module widgets/StateCollectionWidget/StateChangeDialog
 * @remarks
 * Purely props-driven: no CollectionContext access and no own `useValueState`
 * binding — every commit travels through `onCommit`, the body's single write
 * chain, so dialog and widget share one debounce/ignore window. The slider gate
 * and the title fallback are decided by the body (StateCollection) and arrive
 * here as `slider` / `title`; the dialog only renders what it is given.
 */

import CloseIcon from '@mui/icons-material/Close';
import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Paper,
    Slider,
    Stack,
} from '@mui/material';
import { useCallback, useEffect, useMemo, useState, type FC, type MouseEvent } from 'react';
import type { StateStyleData } from '../hooks/useData/types';
import isNumber from '../lib/helper/isNumber';

/**
 * Props for {@link module:widgets/StateCollectionWidget/StateChangeDialog.default}.
 */
export interface StateChangeDialogProps {
    /** The resolved states from useData, one list entry per state in the order of the rows. */
    states: StateStyleData[];
    /** Whether the dialog is open. */
    open: boolean;
    /** Callback to close the dialog. */
    closeHandler: () => void;
    /** Dialog title; the body resolves the header/OID-name/i18n fallback chain. */
    title: string;
    /** Dialog paper background color. */
    backgroundColor?: string;
    /** Dialog paper text color. */
    textColor?: string;
    /** Current OID value; seeds the slider position and moves it on a Fremdänderung. */
    currentValue?: string | number | boolean | null;
    /** The body's Fremdänderung flag (`useValueState`): the slider position follows `currentValue`. */
    hasForeignChange?: boolean;
    /** The body's single write chain — every list/slider commit goes through it. */
    onCommit: (value: string | number | boolean) => void;
    /** Range bounds; omit to render the state list without a slider. */
    slider?: { min: number; max: number };
}

/**
 * The slider position an OID value stands for.
 *
 * @param value - Current OID value.
 * @returns The number, a numeric string counting as one; `undefined` for anything else.
 */
const sliderPosition = (value: StateChangeDialogProps['currentValue']): number | undefined =>
    typeof value !== 'boolean' && isNumber(value) ? Number(value) : undefined;

/**
 * Dialog for changing a widget's current value.
 *
 * @param props - Component props.
 * @param props.states - The resolved states to render as a selectable list.
 * @param props.open - Whether the dialog is open.
 * @param props.closeHandler - Callback to close the dialog.
 * @param props.title - Dialog title (header/OID-name/i18n chain resolved by the body).
 * @param props.backgroundColor - Dialog paper background color.
 * @param props.textColor - Dialog paper text color.
 * @param props.currentValue - Current OID value; seeds the slider position and moves it on a Fremdänderung.
 * @param props.hasForeignChange - The body's Fremdänderung flag; the slider position follows `currentValue`.
 * @param props.onCommit - The body's single write chain — every commit goes through it.
 * @param props.slider - Range bounds; omit to render the list without a slider.
 * @returns Dialog UI.
 * @example
 * ```tsx
 * <StateChangeDialog
 *   open={open}
 *   closeHandler={() => setOpen(false)}
 *   states={states}
 *   title={dialogTitle}
 *   currentValue={oidValue}
 *   hasForeignChange={hasForeignChange}
 *   onCommit={setOidValueState}
 *   slider={{ min: 0, max: 100 }}
 * />
 * ```
 */
const StateChangeDialog: FC<StateChangeDialogProps> = ({
    states,
    open,
    closeHandler,
    title,
    backgroundColor,
    textColor,
    currentValue,
    hasForeignChange,
    onCommit,
    slider,
}) => {
    const [sliderValue, setSliderValue] = useState<number>(() => sliderPosition(currentValue) ?? 0);

    // A Fremdänderung (any size) wins over the local position; the own write and its
    // echo never raise the flag, so a drag does not hang on the echo.
    useEffect(() => {
        const position = sliderPosition(currentValue);
        if (hasForeignChange && position !== undefined) {
            setSliderValue(position);
        }
    }, [hasForeignChange, currentValue]);

    const hasStates = states.length > 0;

    const handleSliderChange = useCallback(
        (_event: Event, value: number | number[]) => {
            const numericValue = Array.isArray(value) ? value[0] : value;
            setSliderValue(numericValue);
            onCommit(numericValue);
        },
        [onCommit],
    );

    const createListItemClickHandler = useCallback(
        (value: StateStyleData['value']) => (event: MouseEvent<HTMLDivElement>) => {
            event.preventDefault();
            // A state without a value is statically possible; useData skips it at runtime.
            if (value === undefined) {
                return;
            }
            // A row on a number OID that is no number resolves to NaN: no position.
            if (typeof value === 'number' && !isNaN(value)) {
                setSliderValue(value);
            }
            onCommit(value);
        },
        [onCommit],
    );

    const ChangeSlider = useMemo(() => {
        if (!slider) {
            return null;
        }

        return (
            <Box sx={{ px: 3 }}>
                <Slider
                    // Room for the list below — the old commonStates condition
                    // reads as "the dialog shows a list" now that the list is
                    // the only thing besides the slider.
                    sx={{ pb: hasStates ? 4 : 3 }}
                    size="small"
                    min={slider.min}
                    max={slider.max}
                    marks={[
                        {
                            value: slider.min,
                            label: String(slider.min),
                        },
                        {
                            value: slider.max,
                            label: String(slider.max),
                        },
                    ]}
                    valueLabelDisplay="auto"
                    value={sliderValue}
                    onChange={handleSliderChange}
                />
            </Box>
        );
    }, [slider, hasStates, sliderValue, handleSliderChange]);

    const ChangeList = useMemo(() => {
        if (!hasStates) {
            return null;
        }

        return (
            <List>
                {states.map(state => (
                    <ListItem
                        disablePadding
                        key={state.fieldNumber}
                    >
                        <ListItemButton
                            selected={state.active}
                            onClick={createListItemClickHandler(state.value)}
                        >
                            <ListItemText
                                primaryTypographyProps={{ variant: 'body2' }}
                                primary={state.label}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        );
    }, [hasStates, states, createListItemClickHandler]);

    return (
        <Dialog
            open={open}
            onClose={closeHandler}
            maxWidth="xs"
            fullWidth
            PaperProps={{
                sx: {
                    bgcolor: backgroundColor,
                    color: textColor,
                },
            }}
        >
            <DialogTitle
                sx={{ m: 0, p: 2 }}
                id="customized-dialog-title"
            >
                {title}
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={closeHandler}
                sx={theme => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                })}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent
                sx={{
                    overflow: 'unset',
                }}
            >
                <Stack
                    divider={hasStates && <Divider />}
                    spacing={0}
                    component={Paper}
                >
                    {ChangeSlider}
                    {ChangeList}
                </Stack>
            </DialogContent>
        </Dialog>
    );
};

export default StateChangeDialog;
