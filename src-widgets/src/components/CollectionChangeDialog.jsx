import CloseIcon from '@mui/icons-material/Close';
import { Paper, Slider, Stack } from '@mui/material';
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
} from '@mui/material';
import React, { useCallback, useContext, useState } from 'react';
import useValueState from '../hooks/useValueState';
// import isNumber from "../lib/helper/isNumber";
import { CollectionContext } from './CollectionProvider';

function CollectionChangeDialog(props) {
    const { widgetStates, data, open, closeHandler } = props;
    const { widget, oidObject, getPropertyValue } = useContext(CollectionContext);

    const [sliderValue, setSliderValue] = useState(getPropertyValue('oid'));
    const { setValueState: setOidValueState } = useValueState('oid');

    const oidStates = oidObject?.common?.states;
    const oidType = oidObject?.common?.type;

    const changeHandler = useCallback(value => setOidValueState(value), [setOidValueState]);

    const ChangeSlider =
        oidType === 'number' &&
        !widget.data.onlyStates &&
        oidObject?.common?.min !== undefined &&
        oidObject?.common?.max !== undefined ? (
            <Slider
                sx={{ pb: oidStates ? 4 : 3 }}
                size="small"
                min={oidObject.common.min}
                max={oidObject.common.max}
                marks={[
                    {
                        value: oidObject.common.min,
                        label: String(oidObject.common.min),
                    },
                    {
                        value: oidObject.common.max,
                        label: String(oidObject.common.max),
                    },
                ]}
                valueLabelDisplay="auto"
                // value={getPropertyValue("oid") || 0}
                value={sliderValue}
                onChange={(_, value) => {
                    setSliderValue(value);
                    changeHandler(value);
                }}
            />
        ) : null;

    const ChangeList = widgetStates ? (
        <List>
            {Object.entries(widgetStates).map(([key, value]) => {
                return (
                    <ListItem
                        disablePadding
                        key={key}
                    >
                        <ListItemButton
                            disableGutters
                            onClick={() => changeHandler(key)}
                        >
                            <ListItemText
                                sx={{ px: 2 }}
                                primaryTypographyProps={{ variant: 'body2' }}
                                primary={String(value)}
                            />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    ) : null;

    return (
        <Dialog
            open={open}
            onClose={closeHandler}
            maxWidth="xs"
            fullWidth
            PaperProps={{
                sx: {
                    // bgcolor: data.backgroundColor,
                    // color: data.textColor,
                },
            }}
        >
            <DialogTitle
                sx={{ m: 0, p: 2 }}
                id="customized-dialog-title"
            >
                {data.header || oidObject.common.name}
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
                    divider={Object.keys(widgetStates).length && <Divider flexItem />}
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
}

export default CollectionChangeDialog;
