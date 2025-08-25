import { Box, Button, Modal } from '@mui/material';
import React, { useContext, useState } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import { useLongPress } from '../hooks/useLongPress';
import useValueState from '../hooks/useValueState';
import LightPickerCollectionBase from './LightPickerCollectionBase';

import type { LightCollectionContextProps } from 'src';

/**
 * LightCollection Component
 *
 * Komponente für Light Widget mit Ein-/Ausschalter und Color Picker Modal
 * Verwendet Long Press für das Öffnen des Color Pickers und normalen Klick für Ein-/Ausschalten
 */
function LightCollection(): React.JSX.Element {
    const context = useContext(CollectionContext) as LightCollectionContextProps;
    const { widget } = context;
    const [open, setOpen] = useState<boolean>(false);

    // ON/OFF State Management
    const { value: onOffValue, updateValue: setOnOffValueState } = useValueState('colorLightSwitchOid');

    // UI Data für Styling und Darstellung
    const { data } = useData('colorLightSwitchOid');

    // Type-safe Zugriff auf das OID Object
    const colorLightSwitchOidObject = widget.data.colorLightSwitchOidObject;
    const oidType = colorLightSwitchOidObject?.type;
    const isValidType = oidType === 'boolean';

    // Long Press Handler für Klick vs. Long Press Unterscheidung
    const longPressProps = useLongPress({
        onClick: () => setOnOffValueState(!onOffValue),
        onLongPress: () => setOpen(true),
        ms: widget.data.colorLightDelayLongPress || 500,
    });

    // Conditional Rendering basierend auf colorLightButton Setting
    return widget.data.colorLightButton ? (
        <>
            <CollectionBase
                isValidType={isValidType}
                data={data}
                oidValue={onOffValue}
            >
                <CollectionBaseImage
                    data={data}
                    widget={widget}
                />
                <Button
                    variant="text"
                    {...longPressProps}
                    sx={{
                        color: data.iconColorActive || 'inherit',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img
                        alt=""
                        src={
                            data.iconActive ||
                            'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                        }
                        style={{
                            width:
                                (typeof data.iconSizeOnly === 'number' && `calc(100% * ${data.iconSizeOnly} / 100)`) ||
                                '100%',
                            height:
                                (typeof data.iconSizeOnly === 'number' && `calc(100% * ${data.iconSizeOnly} / 100)`) ||
                                '100%',
                            objectFit: 'contain',
                            color: data.iconColorActive || data.iconColor,
                            filter: data.iconColorActive || data.iconColor ? 'drop-shadow(0px 10000px 0)' : undefined,
                            transform: data.iconColorActive || data.iconColor ? 'translateY(-10000px)' : undefined,
                        }}
                    />
                </Button>
            </CollectionBase>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: widget.data.colorLightModalWidth || 'auto',
                        height: widget.data.colorLightModalHeight || 300,
                    }}
                >
                    <LightPickerCollectionBase />
                </Box>
            </Modal>
        </>
    ) : (
        <LightPickerCollectionBase />
    );
}

export default LightCollection;
