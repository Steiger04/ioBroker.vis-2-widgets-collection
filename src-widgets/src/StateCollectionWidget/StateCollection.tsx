import { Box, Button } from '@mui/material';
import React, { useContext } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionValueDisplay from '../components/CollectionValueDisplay';
import { CollectionContext } from '../components/CollectionProvider';
import Generic from '../Generic';
import useData from '../hooks/useData';
import useHtmlValue from '../hooks/useHtmlValue';
import useValueState from '../hooks/useValueState';
import { ANY_VALUE_TYPES, isAllowedOidType } from '../lib/allowedOidTypes';
import { useStateTrigger } from './useStateTrigger';
import StateChangeDialog from './StateChangeDialog';
import type { StateCollectionContextProps } from '../types';

/**
 * State widget body — pure wiring over the Zustands-Auslöser.
 *
 * @remarks
 * The button takes the handlers of {@link module:widgets/StateCollectionWidget/useStateTrigger};
 * the decision (including the push-button click suppression, ADR-0089, and the slider gate) lives
 * in its pure core over the RESOLVED `states[]` from useData.
 * @returns Widget body element.
 */
function StateCollection(): React.ReactElement {
    const context = useContext(CollectionContext) as StateCollectionContextProps;
    const { widget } = context;
    const oidObject = widget.data.oidObject;
    const { data, states } = useData('oid');
    const { value: oidValue, updateValue: setOidValueState, locked, hasForeignChange } = useValueState('oid');

    const oidType = oidObject?.type;

    // Title fallback chain: `data.header` resolves the configured header, then the OID's name; then i18n.
    const dialogTitle = data.header || Generic.t('state_change_dialog_title');

    const htmlValue = useHtmlValue(oidValue, widget, data);
    const contentValue = htmlValue !== undefined ? String(htmlValue) : '';

    const { buttonProps, buttonSx, dialog } = useStateTrigger({
        states,
        onlyStates: widget.data.onlyStates,
        statePushButton: widget.data.statePushButton,
        locked,
        oidObject,
        write: setOidValueState,
    });

    const StateButton = (
        <Button
            disabled={locked}
            {...buttonProps}
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
                ...buttonSx,
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
            {dialog.open && (
                <StateChangeDialog
                    states={states}
                    closeHandler={dialog.close}
                    closeLabel={Generic.t('close')}
                    title={dialogTitle}
                    backgroundColor={data.backgroundColor || data.background}
                    textColor={data.textColor}
                    currentValue={oidValue}
                    hasForeignChange={hasForeignChange}
                    onCommit={setOidValueState}
                    slider={dialog.slider}
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
