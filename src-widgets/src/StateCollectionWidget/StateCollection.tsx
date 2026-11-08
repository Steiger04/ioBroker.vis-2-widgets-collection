import { Box, Button } from '@mui/material';
import React, { useCallback, useState, useContext } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionValueDisplay from '../components/CollectionValueDisplay';
import { CollectionContext } from '../components/CollectionProvider';
import Generic from '../Generic';
import useData from '../hooks/useData';
import useHtmlValue from '../hooks/useHtmlValue';
import useValueState from '../hooks/useValueState';
import { ANY_VALUE_TYPES, isAllowedOidType } from '../lib/allowedOidTypes';
import { decideTriggerAction, type TriggerEvent } from './stateTrigger';
import StateChangeDialog from './StateChangeDialog';
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
    const { value: oidValue, updateValue: setOidValueState, locked } = useValueState('oid');
    const [open, setOpen] = useState(false);

    const oidType = oidObject?.type;

    const onlyStates = widget.data.onlyStates;

    // Slider gate (ticket 03): a number OID outside "only states" with defined
    // bounds earns the dialog a range slider — the dialog renders, the body decides.
    const sliderBounds =
        oidType === 'number' && !onlyStates && oidObject?.minValue !== undefined && oidObject?.maxValue !== undefined
            ? { min: oidObject.minValue, max: oidObject.maxValue }
            : undefined;

    // Title fallback chain: configured header, then the OID's name, then i18n.
    const dialogTitle = data.header || oidObject?.name || Generic.t('state_change_dialog_title');

    const htmlValue = useHtmlValue(oidValue, widget, data);
    const contentValue = htmlValue !== undefined ? String(htmlValue) : '';

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
            disabled={locked}
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
                <StateChangeDialog
                    widgetStates={widgetStates}
                    open={open}
                    closeHandler={() => setOpen(false)}
                    title={dialogTitle}
                    backgroundColor={data.backgroundColor}
                    textColor={data.textColor}
                    currentValue={oidValue}
                    onCommit={setOidValueState}
                    slider={sliderBounds}
                />
            )}
            <CollectionBase
                isValidType={isValidType}
                data={data}
                oidValue={oidValue}
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
                    {StateButton}
                </Box>
            </CollectionBase>
        </>
    );
}

export default StateCollection;
