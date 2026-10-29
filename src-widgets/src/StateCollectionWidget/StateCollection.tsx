import { Box, Button } from '@mui/material';
import React, { useCallback, useState, useContext } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import CollectionChangeDialog from '../components/CollectionChangeDialog';
import CollectionValueDisplay from '../components/CollectionValueDisplay';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useHtmlValue from '../hooks/useHtmlValue';
import useValueState from '../hooks/useValueState';
import { ANY_VALUE_TYPES, isAllowedOidType } from '../lib/allowedOidTypes';
import isOidReadOnly from '../lib/helper/isOidReadOnly';
import type { StateCollectionContextProps } from '../types';

/**
 * State widget body.
 *
 * @returns Widget body element.
 */
function StateCollection(): React.ReactElement {
    const context = useContext(CollectionContext) as StateCollectionContextProps;
    const { widget } = context;
    const oidObject = widget.data.oidObject;
    const { data, widgetStates, states } = useData('oid');
    const { value: oidValue, updateValue: setOidValueState } = useValueState('oid');
    const [open, setOpen] = useState(false);

    const oidType = oidObject?.type;

    const onlyStates = widget.data.onlyStates;

    const htmlValue = useHtmlValue(oidValue, widget, data);
    const contentValue = htmlValue !== undefined && htmlValue !== null ? String(htmlValue) : '';

    const downHandler = (): void => {
        const value1 = widget.data.value1;
        if (onlyStates && states.length === 2 && widget.data.statePushButton && value1 !== undefined) {
            setTimeout(() => setOidValueState(value1), 0);
        }
    };

    const upHandler = (): void => {
        const value2 = widget.data.value2;
        if (onlyStates && states.length === 2 && widget.data.statePushButton && value2 !== undefined) {
            setTimeout(() => setOidValueState(value2), 0);
        }
    };

    const clickHandler = useCallback(() => {
        if (!onlyStates) {
            setOpen(true);
            return;
        }

        switch (states.length) {
            case 1:
                if (widget.data.value1 !== undefined) {
                    setOidValueState(widget.data.value1);
                }
                break;
            case 2:
                if (widget.data.value1 !== undefined && widget.data.value2 !== undefined) {
                    !widget.data.statePushButton && String(oidValue) === String(widget.data.value1)
                        ? setOidValueState(widget.data.value2)
                        : setOidValueState(widget.data.value1);
                }
                break;
            default:
                setOpen(true);
                break;
        }
    }, [
        oidValue,
        onlyStates,
        states.length,
        widget.data.statePushButton,
        widget.data.value1,
        widget.data.value2,
        setOidValueState,
    ]);

    const StateButton = (
        <Button
            disabled={isOidReadOnly(widget.data)}
            onClick={clickHandler}
            onMouseDown={downHandler}
            onMouseUp={upHandler}
            onMouseOut={upHandler}
            onTouchStart={downHandler}
            onTouchEnd={upHandler}
            sx={{
                width: '100%',
                height: '100%',

                // Text color only — must NOT include iconColor (empty textColor used
                // to inherit iconColor here, see ADR 0004 / Bug 3). textColor now
                // resolves to a concrete terminal (theme text color) when unset.
                color: data.textColor || 'inherit',
                '&:hover': {
                    bgcolor: 'transparent',
                    /* filter:
                        (data.iconHoverActive && `brightness(${data.iconHoverActive})`) ||
                        (data.iconHover && `brightness(${data.iconHover})`), */
                },
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '100%',

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <CollectionValueDisplay
                    data={data}
                    contentValue={contentValue}
                    noIcon={widget.data.noIcon}
                    noValue={widget.data.noValue}
                />
            </Box>
        </Button>
    );

    const isValidType = isAllowedOidType(ANY_VALUE_TYPES, oidType);

    return (
        <>
            {open && (
                <CollectionChangeDialog
                    data={{ sampleInterval: false, sampleIntervalValue: 200, delay: 100 }}
                    widgetStates={widgetStates}
                    open={open}
                    closeHandler={() => setOpen(false)}
                />
            )}
            <CollectionBase
                isValidType={isValidType}
                data={data}
                oidValue={oidValue}
            >
                <CollectionBaseImage
                    data={data}
                    widget={widget}
                />
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {StateButton}
                </Box>
            </CollectionBase>
        </>
    );
}

export default StateCollection;
