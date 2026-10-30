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
import { useCallback, useMemo, useState, type FC, type MouseEvent } from 'react';

/**
 * Props for {@link module:widgets/StateCollectionWidget/StateChangeDialog.default}.
 */
export interface StateChangeDialogProps {
    /** Available states to render as a selectable list (state key → display label). */
    widgetStates: Record<string, string>;
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
    /** Current OID value; seeds the slider position. */
    currentValue?: string | number | boolean | null;
    /** The body's single write chain — every list/slider commit goes through it. */
    onCommit: (value: string | number | boolean) => void;
    /** Range bounds; omit to render the state list without a slider. */
    slider?: { min: number; max: number };
}

/**
 * Dialog for changing a widget's current value.
 *
 * @param props - Component props.
 * @param props.widgetStates - Available states to render as a selectable list.
 * @param props.open - Whether the dialog is open.
 * @param props.closeHandler - Callback to close the dialog.
 * @param props.title - Dialog title (header/OID-name/i18n chain resolved by the body).
 * @param props.backgroundColor - Dialog paper background color.
 * @param props.textColor - Dialog paper text color.
 * @param props.currentValue - Current OID value; seeds the slider position.
 * @param props.onCommit - The body's single write chain — every commit goes through it.
 * @param props.slider - Range bounds; omit to render the list without a slider.
 * @returns Dialog UI.
 * @example
 * ```tsx
 * <StateChangeDialog
 *   open={open}
 *   closeHandler={() => setOpen(false)}
 *   widgetStates={widgetStates}
 *   title={dialogTitle}
 *   currentValue={oidValue}
 *   onCommit={setOidValueState}
 *   slider={{ min: 0, max: 100 }}
 * />
 * ```
 */
const StateChangeDialog: FC<StateChangeDialogProps> = ({
    widgetStates,
    open,
    closeHandler,
    title,
    backgroundColor,
    textColor,
    currentValue,
    onCommit,
    slider,
}) => {
    const [sliderValue, setSliderValue] = useState<number>(() => (typeof currentValue === 'number' ? currentValue : 0));

    const hasWidgetStates = Boolean(widgetStates && Object.keys(widgetStates).length);

    const handleSliderChange = useCallback(
        (_event: Event, value: number | number[]) => {
            const numericValue = Array.isArray(value) ? value[0] : value;
            setSliderValue(numericValue);
            onCommit(numericValue);
        },
        [onCommit],
    );

    const handleClose = useCallback(
        (_event?: object, reason?: 'backdropClick' | 'escapeKeyDown') => {
            if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
                closeHandler();
            }
        },
        [closeHandler],
    );

    const handleExternalClose = useCallback(() => {
        closeHandler();
    }, [closeHandler]);

    const createListItemClickHandler = useCallback(
        (key: string) => (event: MouseEvent<HTMLDivElement>) => {
            event.preventDefault();
            const numericValue = Number(key);
            if (!isNaN(numericValue)) {
                setSliderValue(numericValue);
            }
            onCommit(key);
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
                    sx={{ pb: hasWidgetStates ? 4 : 3 }}
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
    }, [slider, hasWidgetStates, sliderValue, handleSliderChange]);

    const ChangeList = useMemo(() => {
        if (!hasWidgetStates) {
            return null;
        }

        return (
            <List>
                {Object.entries(widgetStates).map(([key, value]) => (
                    <ListItem
                        disablePadding
                        key={key}
                    >
                        <ListItemButton onClick={createListItemClickHandler(key)}>
                            <ListItemText
                                primaryTypographyProps={{ variant: 'body2' }}
                                primary={String(value)}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        );
    }, [hasWidgetStates, widgetStates, createListItemClickHandler]);

    return (
        <Dialog
            open={open}
            onClose={handleClose}
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
                onClick={handleExternalClose}
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
                    divider={hasWidgetStates && <Divider />}
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
