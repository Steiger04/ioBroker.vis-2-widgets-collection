/**
 * Value dialog behind the Zustands-Auslöser: renders the resolved state list and
 * an optional range slider for number OIDs.
 *
 * @module widgets/StateCollectionWidget/StateChangeDialog
 * @remarks
 * Purely props-driven: no CollectionContext access and no own `useValueState`
 * binding — every commit travels through `onCommit`, the body's single write
 * chain, so dialog and widget share one debounce/ignore window. The slider gate
 * is decided by the Zustands-Auslöser, the title fallback and the translated close
 * label by the body (StateCollection); they arrive here as `slider` / `title` /
 * `closeLabel` and the dialog only renders what it is given. The title carries no id
 * of its own: MUI links it to the dialog's `aria-labelledby` through the id it generates.
 * The body mounts it only while it is open, so every opening seeds the slider anew.
 *
 * The list follows the rows, duplicates included, marks every Aktiver Zustand and stays open
 * after a choice (ADR-0110 Nr. 10). The slider's range is the object copy's, which a pick seeds
 * with 0..100 where the object declares no bound (ADR-0109 Nr. 8); its local position keeps a
 * drag off the echo and follows a Fremdänderung (ADR-0110 Nr. 11).
 *
 * The Sperre can take hold while the dialog is open: rows and slider then commit nothing and keep
 * showing the value, and the dialog neither closes on its own nor stops being closable.
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
import { useState, type FC, type MouseEvent } from 'react';
import type { StateStyleData } from '../hooks/useData/types';
import { solidOf } from '../lib/helper/colorDerivation';
import { isGradientColor } from '../lib/helper/colorValidation';
import { gradientTextSx } from '../lib/helper/gradientTextSx';
import isNumber from '../lib/helper/isNumber';
import type { SliderRange } from './stateTrigger';

/**
 * Props for {@link module:widgets/StateCollectionWidget/StateChangeDialog.default}.
 */
export interface StateChangeDialogProps {
    /** The resolved states from useData, one list entry per state in the order of the rows. */
    states: StateStyleData[];
    /** Callback to close the dialog. */
    closeHandler: () => void;
    /** Accessible name of the close button, translated by the body. */
    closeLabel: string;
    /** Dialog title; the body resolves the header/OID-name/i18n fallback chain. */
    title: string;
    /** Background of the whole dialog, a gradient included; empty keeps the theme surface. */
    backgroundColor?: string;
    /** Text color of the whole dialog; a gradient clips through the title, the rest paints its Vollfarbe. */
    textColor?: string;
    /** Current OID value; seeds the slider position and moves it on a Fremdänderung. */
    currentValue?: string | number | boolean | null;
    /** The body's Fremdänderung flag (`useValueState`): the slider position follows `currentValue`. */
    hasForeignChange?: boolean;
    /** The body's single write chain — every list/slider commit goes through it. */
    onCommit: (value: string | number | boolean) => void;
    /** The Sperre (CONTEXT): rows and slider commit nothing; the list and the position keep following the value. */
    locked?: boolean;
    /** Range bounds and step (default 1); omit to render the state list without a slider. */
    slider?: SliderRange;
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
 * @param props.closeHandler - Callback to close the dialog.
 * @param props.closeLabel - Accessible name of the close button, translated by the body.
 * @param props.title - Dialog title (header/OID-name/i18n chain resolved by the body).
 * @param props.backgroundColor - Background of the whole dialog.
 * @param props.textColor - Text color of the whole dialog.
 * @param props.currentValue - Current OID value; seeds the slider position and moves it on a Fremdänderung.
 * @param props.hasForeignChange - The body's Fremdänderung flag; the slider position follows `currentValue`.
 * @param props.onCommit - The body's single write chain — every commit goes through it.
 * @param props.locked - The Sperre: rows and slider commit nothing, the dialog can still be closed.
 * @param props.slider - Range bounds and step (default 1); omit to render the list without a slider.
 * @returns Dialog UI.
 * @example
 * ```tsx
 * {open && (
 *   <StateChangeDialog
 *     closeHandler={() => setOpen(false)}
 *     closeLabel={closeLabel}
 *     states={states}
 *     title={dialogTitle}
 *     currentValue={oidValue}
 *     hasForeignChange={hasForeignChange}
 *     onCommit={setOidValueState}
 *     slider={{ min: 0, max: 100 }}
 *   />
 * )}
 * ```
 */
const StateChangeDialog: FC<StateChangeDialogProps> = ({
    states,
    closeHandler,
    closeLabel,
    title,
    backgroundColor,
    textColor,
    currentValue,
    hasForeignChange,
    onCommit,
    locked,
    slider,
}) => {
    const [sliderValue, setSliderValue] = useState<number>(() => sliderPosition(currentValue) ?? 0);

    // A Fremdänderung (any size) wins over the local position; the own write and its
    // echo never raise the flag, so a drag does not hang on the echo. Applied while rendering
    // whenever the flag or the value changed (on the first render too).
    const [followed, setFollowed] = useState<{ hasForeignChange?: boolean; currentValue?: unknown }>({});
    if (
        !('currentValue' in followed) ||
        followed.hasForeignChange !== hasForeignChange ||
        !Object.is(followed.currentValue, currentValue)
    ) {
        setFollowed({ hasForeignChange, currentValue });
        const position = sliderPosition(currentValue);
        if (hasForeignChange && position !== undefined) {
            setSliderValue(position);
        }
    }

    const hasStates = states.length > 0;

    const handleSliderChange = (_event: Event, value: number | number[]): void => {
        const numericValue = Array.isArray(value) ? value[0] : value;
        setSliderValue(numericValue);
        onCommit(numericValue);
    };

    const createListItemClickHandler =
        (value: StateStyleData['value']) =>
        (event: MouseEvent<HTMLDivElement>): void => {
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
        };

    // `color` cannot draw a gradient: only the title clips it, everything below reads the
    // Repräsentative Vollfarbe. Any other value is drawn as given, a color name included.
    const bodyTextColor = isGradientColor(textColor) ? solidOf(textColor) : textColor;

    return (
        <Dialog
            open
            onClose={closeHandler}
            maxWidth="xs"
            fullWidth
            slotProps={{
                paper: {
                    sx: {
                        // The shorthand takes a gradient and replaces the dark theme's elevation overlay.
                        background: backgroundColor || undefined,
                        color: bodyTextColor,
                    },
                },
            }}
        >
            {/* Title and list labels come from `html` fields (header, alias), like the frame's lines. */}
            <DialogTitle
                sx={{ m: 0, p: 2, ...gradientTextSx(textColor) }}
                dangerouslySetInnerHTML={{ __html: title }}
            />
            <IconButton
                aria-label={closeLabel}
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
                    sx={{
                        color: 'inherit',
                        // Shows the dialog's surface through: `inherit` would restart a gradient
                        // on the card's own box and stack a translucent color on itself.
                        background: backgroundColor ? 'transparent' : undefined,
                    }}
                >
                    {slider && (
                        <Box sx={{ px: 3 }}>
                            <Slider
                                // Room for the list below — the old commonStates condition
                                // reads as "the dialog shows a list" now that the list is
                                // the only thing besides the slider.
                                sx={{ pb: hasStates ? 4 : 3 }}
                                size="small"
                                min={slider.min}
                                max={slider.max}
                                step={slider.step ?? 1}
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
                                disabled={locked}
                                value={sliderValue}
                                onChange={handleSliderChange}
                            />
                        </Box>
                    )}
                    {hasStates && (
                        <List>
                            {states.map(state => (
                                <ListItem
                                    disablePadding
                                    key={state.fieldNumber}
                                >
                                    <ListItemButton
                                        disabled={locked}
                                        selected={state.active}
                                        // `disabled` alone is no guard here: ButtonBase still fires its
                                        // onClick on the space key of a row that kept the focus.
                                        onClick={locked ? undefined : createListItemClickHandler(state.value)}
                                    >
                                        <ListItemText
                                            slotProps={{ primary: { variant: 'body2' } }}
                                            primary={<span dangerouslySetInnerHTML={{ __html: state.label ?? '' }} />}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    )}
                </Stack>
            </DialogContent>
        </Dialog>
    );
};

export default StateChangeDialog;
