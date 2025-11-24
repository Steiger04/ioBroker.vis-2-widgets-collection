import { Box, Button, Modal } from '@mui/material';
import React, { useContext, useState } from 'react';
import CollectionBase from './CollectionBase';
import CollectionBaseImage from './CollectionBaseImage';
import { CollectionContext } from './CollectionProvider';
import useData from '../hooks/useData';
import { useLongPress } from '../hooks/useLongPress';
import useValueState from '../hooks/useValueState';

type WithButtonModalProps<P> = P;

function withButtonModal<P extends object>(Component: React.ComponentType<P>): React.ComponentType<P> {
    const WithButtonModal = (props: WithButtonModalProps<P>): React.JSX.Element => {
        const context = useContext(CollectionContext);
        if (!context || !context.widget) {
            throw new Error('withButtonModal must be used within a CollectionProvider');
        }
        const { widget } = context;
        const [open, setOpen] = useState(false);

        const { value: onOffValue, updateValue: setOnOffValueState } = useValueState('colorLightSwitchOid');
        const { data } = useData('colorLightSwitchOid');

        const colorLightSwitchOidObject = widget.data.colorLightSwitchOidObject;
        const oidType = colorLightSwitchOidObject?.type;
        const isValidType = oidType === 'boolean';

        const longPressProps = useLongPress({
            onClick: () => setOnOffValueState(!onOffValue),
            onLongPress: () => setOpen(true),
            ms: widget.data.colorLightDelayLongPress ?? 500,
        });

        const sliderSize = (widget.data.colorLightSliderWidth || 1) * 28;
        const hasModalWidth =
            typeof widget.data.colorLightModalWidth === 'number' && widget.data.colorLightModalWidth > 0;
        const modalWidth = hasModalWidth
            ? widget.data.colorLightModalWidth
            : (widget.data.colorLightModalHeight || 300) + 40 + 12 + sliderSize;

        if (!widget.data.colorLightButton) {
            return <Component {...props} />;
        }

        return (
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
                                    (typeof data.iconSizeOnly === 'number' &&
                                        `calc(100% * ${data.iconSizeOnly} / 100)`) ||
                                    '100%',
                                height:
                                    (typeof data.iconSizeOnly === 'number' &&
                                        `calc(100% * ${data.iconSizeOnly} / 100)`) ||
                                    '100%',
                                objectFit: 'contain',
                                color: data.iconColorActive || data.iconColor,
                                filter:
                                    data.iconColorActive || data.iconColor ? 'drop-shadow(0px 10000px 0)' : undefined,
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
                            width: modalWidth,
                            height: widget.data.colorLightModalHeight || 300,
                        }}
                    >
                        <Component {...props} />
                    </Box>
                </Modal>
            </>
        );
    };

    const componentName = Component.displayName || Component.name || 'Component';
    WithButtonModal.displayName = `withButtonModal(${componentName})`;

    return WithButtonModal;
}

export default withButtonModal;
