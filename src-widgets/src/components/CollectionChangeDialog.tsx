/**
 * Dialog component used to change a widget's value via slider or discrete state list.
 *
 * @module components/CollectionChangeDialog
 * @remarks
 * Value updates are delegated to {@link module:hooks/useValueState.default}, which may debounce backend writes.
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
import React, { useCallback, useContext, useState, useMemo, type FC, type MouseEvent } from 'react';
import useValueState from '../hooks/useValueState';
import { CollectionContext } from './CollectionProvider';
import type { StateCollectionContextProps } from '../types';

/**
 * Map of selectable state keys to their display labels.
 *
 * @example
 * ```ts
 * const widgetStates: WidgetStates = {
 *   '0': 'Off',
 *   '1': 'On',
 *   '50': 'Dim 50%'
 * };
 * ```
 */
interface WidgetStates {
    [key: string]: string | number | boolean;
}

/**
 * Minimal shape of the OID object used by this dialog.
 */
interface OidObject {
    commonStates?: WidgetStates;
    type?: string;
    name?: string;
    minValue?: number;
    maxValue?: number;
}

/**
 * Props for {@link module:components/CollectionChangeDialog.default}.
 */
interface CollectionChangeDialogProps {
    /** Available states to render as a selectable list. */
    widgetStates: WidgetStates;
    /** Widget style/presentation data used to theme the dialog. */
    data: {
        header?: string;
        backgroundColor?: string;
        textColor?: string;
        sampleInterval?: boolean;
        sampleIntervalValue?: number;
        delay?: number;
        [key: string]: unknown;
    };
    /** Whether the dialog is open. */
    open: boolean;
    /** Callback to close the dialog. */
    closeHandler: () => void;
}

/**
 * Dialog for changing a widget's current value.
 *
 * @param props - Component props.
 * @returns Dialog UI.
 * @example
 * ```tsx
 * <CollectionChangeDialog
 *   open={open}
 *   closeHandler={() => setOpen(false)}
 *   widgetStates={widgetStates}
 *   data={data}
 * />
 * ```
 */
const CollectionChangeDialog: FC<CollectionChangeDialogProps> = ({ widgetStates, data, open, closeHandler }) => {
    const { widget, getPropertyValue } = useContext(CollectionContext);

    const oidObject = (widget.data as StateCollectionContextProps['widget']['data']).oidObject;
    const onlyStates = (widget.data as StateCollectionContextProps['widget']['data']).onlyStates;

    const [sliderValue, setSliderValue] = useState<number>(() => {
        const value = getPropertyValue('oid');
        return typeof value === 'number' ? value : 0;
    });

    const { updateValue: setOidValueState } = useValueState('oid');

    const oidObjectProps = useMemo(() => {
        const commonStates = (oidObject as OidObject)?.commonStates;
        const oidType = (oidObject as OidObject)?.type;
        const oidName = (oidObject as OidObject)?.name;
        const minValue = (oidObject as OidObject)?.minValue;
        const maxValue = (oidObject as OidObject)?.maxValue;

        return {
            commonStates,
            oidType,
            oidName,
            minValue,
            maxValue,
        };
    }, [oidObject]);

    const changeHandler = useCallback(
        (value: string | number | boolean) => {
            setOidValueState(value);
        },
        [setOidValueState],
    );

    const handleSliderChange = useCallback(
        (_event: Event, value: number | number[]) => {
            const numericValue = Array.isArray(value) ? value[0] : value;
            setSliderValue(numericValue);
            changeHandler(numericValue);
        },
        [changeHandler],
    );

    const handleClose = useCallback(
        (event?: object, reason?: 'backdropClick' | 'escapeKeyDown') => {
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
            changeHandler(key);
        },
        [changeHandler],
    );

    const ChangeSlider = useMemo(() => {
        const { oidType, commonStates, minValue, maxValue } = oidObjectProps;

        const shouldShowSlider =
            oidType === 'number' && !onlyStates && minValue !== undefined && maxValue !== undefined;

        if (!shouldShowSlider) {
            return null;
        }

        return (
            <Box sx={{ px: 3 }}>
                <Slider
                    sx={{ pb: commonStates ? 4 : 3 }}
                    size="small"
                    min={minValue}
                    max={maxValue}
                    marks={[
                        {
                            value: minValue,
                            label: String(minValue),
                        },
                        {
                            value: maxValue,
                            label: String(maxValue),
                        },
                    ]}
                    valueLabelDisplay="auto"
                    value={sliderValue}
                    onChange={handleSliderChange}
                />
            </Box>
        );
    }, [oidObjectProps, onlyStates, sliderValue, handleSliderChange]);

    const ChangeList = useMemo(() => {
        if (!widgetStates || !Object.keys(widgetStates).length) {
            return null;
        }

        return (
            <List>
                {Object.entries(widgetStates).map(([key, value]) => (
                    <ListItem
                        disablePadding
                        key={key}
                    >
                        <ListItemButton
                            // disableGutters
                            onClick={createListItemClickHandler(key)}
                        >
                            <ListItemText
                                primaryTypographyProps={{ variant: 'body2' }}
                                primary={String(value)}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        );
    }, [widgetStates, createListItemClickHandler]);

    const dialogTitle = useMemo(() => {
        return data.header || oidObjectProps.oidName || 'Change Value';
    }, [data.header, oidObjectProps.oidName]);

    const hasWidgetStates = useMemo(() => {
        return widgetStates && Object.keys(widgetStates).length > 0;
    }, [widgetStates]);

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="xs"
            fullWidth
            PaperProps={{
                sx: {
                    bgcolor: data.backgroundColor,
                    color: data.textColor,
                },
            }}
        >
            <DialogTitle
                sx={{ m: 0, p: 2 }}
                id="customized-dialog-title"
            >
                {dialogTitle}
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

export default CollectionChangeDialog;
