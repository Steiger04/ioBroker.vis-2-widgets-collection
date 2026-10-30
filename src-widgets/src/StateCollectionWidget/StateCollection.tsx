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
import { decideTriggerAction, type TriggerEvent } from './stateTrigger';
import type { StateCollectionContextProps } from '../types';

/**
 * State widget body — pure wiring over the Zustands-Auslöser (stateTrigger).
 *
 * @remarks
 * Every event unconditionally becomes a `fire(<event>)` call; the decision (including
 * the push-button click suppression, ADR-0089) lives in {@link
 * module:widgets/StateCollectionWidget/stateTrigger.decideTriggerAction} over the
 * RESOLVED `states[]` from useData. Writes therefore happen synchronously — no
 * `setTimeout` race between press, release and the trailing click.
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

    const fire = useCallback(
        (event: TriggerEvent): void => {
            const action = decideTriggerAction(
                event,
                {
                    states,
                    onlyStates,
                    statePushButton: widget.data.statePushButton,
                },
                oidValue,
            );

            if (action.type === 'write') {
                setOidValueState(action.value);
            } else if (action.type === 'open-dialog') {
                setOpen(true);
            }
        },
        [states, onlyStates, widget.data.statePushButton, oidValue, setOidValueState],
    );

    const StateButton = (
        <Button
            disabled={isOidReadOnly(widget.data)}
            onClick={(): void => fire('click')}
            onMouseDown={(): void => fire('press')}
            onMouseUp={(): void => fire('release')}
            onMouseOut={(): void => fire('release')}
            onTouchStart={(): void => fire('press')}
            onTouchEnd={(): void => fire('release')}
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
