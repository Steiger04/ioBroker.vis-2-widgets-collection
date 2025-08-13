import CloseIcon from '@mui/icons-material/Close';
import {
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

/**
 * Widget States Map für die Darstellung verfügbarer Werte
 */
interface WidgetStates {
    [key: string]: string | number | boolean;
}

/**
 * OID Object Interface für Objekt-Informationen
 */
interface OidObject {
    commonStates?: WidgetStates;
    type?: string;
    name?: string;
    min?: number;
    max?: number;
}

/**
 * Props für CollectionChangeDialog Komponente
 */
interface CollectionChangeDialogProps {
    /** Verfügbare Widget-States für die Auswahl */
    widgetStates: WidgetStates;
    /** Widget-Daten mit Styling-Informationen */
    data: {
        header?: string;
        backgroundColor?: string;
        textColor?: string;
        sampleInterval?: any;
        sampleIntervalValue?: any;
        delay?: number;
        [key: string]: any; // Zusätzliche Eigenschaften erlauben
    };
    /** Dialog-Öffnungsstatus */
    open: boolean;
    /** Handler zum Schließen des Dialogs */
    closeHandler: () => void;
}

/**
 * Dialog-Komponente für die Änderung von Widget-Werten
 * Unterstützt sowohl Slider für numerische Werte als auch Listen für diskrete Werte
 *
 * @param props - Props für die Komponente
 * @param props.widgetStates - Verfügbare Widget-States für die Auswahl
 * @param props.data - Widget-Daten mit Styling-Informationen
 * @param props.open - Dialog-Öffnungsstatus
 * @param props.closeHandler - Handler zum Schließen des Dialogs
 * @returns React-Komponente für Wert-Änderung
 */
const CollectionChangeDialog: FC<CollectionChangeDialogProps> = ({ widgetStates, data, open, closeHandler }) => {
    const { widget, getPropertyValue } = useContext(CollectionContext);

    // Sicherer Zugriff auf optionale Properties
    const oidObject = (widget.data as any).oidObject;
    const onlyStates = (widget.data as any).onlyStates;

    // State für Slider-Wert
    const [sliderValue, setSliderValue] = useState<number>(() => {
        const value = getPropertyValue('oid');
        return typeof value === 'number' ? value : 0;
    });

    const { updateValue: setOidValueState } = useValueState('oid');

    // Memoized OID-Objekt-Eigenschaften
    const oidObjectProps = useMemo(() => {
        const commonStates = (oidObject as OidObject)?.commonStates;
        const oidType = (oidObject as OidObject)?.type;
        const oidName = (oidObject as OidObject)?.name;
        const minValue = (oidObject as OidObject)?.min;
        const maxValue = (oidObject as OidObject)?.max;

        return {
            commonStates,
            oidType,
            oidName,
            minValue,
            maxValue,
        };
    }, [oidObject]);

    // Memoized Change Handler (jetzt ohne eigenes Tracking)
    const changeHandler = useCallback(
        (value: string | number | boolean) => {
            setOidValueState(value);
        },
        [setOidValueState],
    );

    // Memoized Slider Change Handler
    const handleSliderChange = useCallback(
        (_event: Event, value: number | number[]) => {
            const numericValue = Array.isArray(value) ? value[0] : value;
            setSliderValue(numericValue);
            changeHandler(numericValue);
        },
        [changeHandler],
    );

    // Standard Close Handler (lässt Debounce-Observable weiterlaufen)
    const handleClose = useCallback(
        (event?: object, reason?: 'backdropClick' | 'escapeKeyDown') => {
            // Kein Flush - Debounce-Observable läuft weiter und schreibt nach Ablauf der Verzögerung
            if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
                closeHandler();
            }
        },
        [closeHandler],
    );

    // Standard External Close Handler (lässt Debounce-Observable weiterlaufen)
    const handleExternalClose = useCallback(() => {
        // Kein Flush - Debounce-Observable läuft weiter und schreibt nach Ablauf der Verzögerung
        closeHandler();
    }, [closeHandler]);

    // Memoized List Item Click Handler
    const createListItemClickHandler = useCallback(
        (key: string) => (event: MouseEvent<HTMLDivElement>) => {
            event.preventDefault();
            changeHandler(key);
        },
        [changeHandler],
    );

    // Memoized Slider-Komponente
    const ChangeSlider = useMemo(() => {
        const { oidType, commonStates, minValue, maxValue } = oidObjectProps;

        const shouldShowSlider =
            oidType === 'number' && !onlyStates && minValue !== undefined && maxValue !== undefined;

        if (!shouldShowSlider) {
            return null;
        }

        return (
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
        );
    }, [oidObjectProps, onlyStates, sliderValue, handleSliderChange]);

    // Memoized List-Komponente
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
                            disableGutters
                            onClick={createListItemClickHandler(key)}
                        >
                            <ListItemText
                                sx={{ px: 2 }}
                                primaryTypographyProps={{ variant: 'body2' }}
                                primary={String(value)}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        );
    }, [widgetStates, createListItemClickHandler]);

    // Memoized Dialog-Titel
    const dialogTitle = useMemo(() => {
        return data.header || oidObjectProps.oidName || 'Change Value';
    }, [data.header, oidObjectProps.oidName]);

    // Memoized Widget States Keys für Divider-Logik
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
                    divider={hasWidgetStates && <Divider flexItem />}
                    sx={{
                        px: 2,
                    }}
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
