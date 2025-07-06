import { Box, Button, Modal } from '@mui/material';
import React, { useEffect, useContext, useState } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import { useLongPress } from '../hooks/useLongPress';
import useValueState from '../hooks/useValueState';
import LightPickerCollectionBase from './LightPickerCollectionBase';

function LightCollection() {
    const { widget } = useContext(CollectionContext);
    const [open, setOpen] = useState(false);
    const { colorLightSwitchOidObject, values } = useContext(CollectionContext);
    // ON/OFF
    const { value: onOffValue, setValueState: setOnOffValueState } = useValueState('colorLightSwitchOid');

    const { data } = useData('colorLightSwitchOid');

    const oidType = colorLightSwitchOidObject?.common?.type;

    const isValidType = oidType === 'boolean';

    const longPressProps = useLongPress({
        onClick: () => setOnOffValueState(!onOffValue),
        onLongPress: () => setOpen(true),
        ms: widget.data.colorLightDelayLongPress || 500,
    });

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
                            filter: data.iconColorActive || data.iconColor ? 'drop-shadow(0px 10000px 0)' : null,
                            transform: data.iconColorActive || data.iconColor ? 'translateY(-10000px)' : null,
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
