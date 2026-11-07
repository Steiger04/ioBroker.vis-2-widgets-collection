/**
 * Higher-order component that adds Light2 “button mode” behavior.
 *
 * @module Light2CollectionWidget/withButtonModal
 * @remarks
 * In Light2 button mode, the wrapped widget toggles a boolean on click and opens a modal on long press.
 * For non-Light2 widgets (or when button mode is disabled), this HOC is a no-op and simply renders the
 * original component.
 *
 * This HOC is Light2-specific by design (it consumes `colorLight*` fields) and therefore lives next to
 * the widget instead of in the shared `components/` layer.
 */

import { Box, Button, Modal } from '@mui/material';
import React, { useContext, useState } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData/useData';
import { useLongPress } from '../hooks/useLongPress';
import useValueState from '../hooks/useValueState';
import type { Light2FieldsRxData } from '../types/field-definitions';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import SafeImg from '../components/SafeImg';
import { modalWidthOf } from './pickerGeometry';

type WithButtonModalProps<P> = P;

/**
 * Type guard for checking whether widget data contains Light2-specific fields.
 *
 * @param data - Widget data object.
 * @returns `true` when `data` conforms to {@link Light2FieldsRxData}.
 */
function hasLight2Fields(data: unknown): data is Light2FieldsRxData {
    return typeof data === 'object' && data !== null && 'colorLightButton' in data && 'colorLightSwitchOid' in data;
}

/**
 * Wraps a component to support Light2 button interactions.
 *
 * @template P - Wrapped component props.
 * @param Component - Component to wrap.
 * @returns A component with optional Light2 modal behavior.
 * @example
 * ```tsx
 * export default withButtonModal(Light2CollectionContent);
 * ```
 */
function withButtonModal<P extends object>(Component: React.ComponentType<P>): React.ComponentType<P> {
    const WithButtonModal = (props: WithButtonModalProps<P>): React.JSX.Element => {
        const context = useContext(CollectionContext);
        if (!context || !context.widget) {
            throw new Error('withButtonModal must be used within a CollectionProvider');
        }
        const { widget } = context;
        const [open, setOpen] = useState(false);

        const widgetData = widget.data;

        // Call hooks unconditionally (React hooks rules)
        const { value: onOffValue, updateValue: setOnOffValueState } = useValueState('colorLightSwitchOid');
        const { data } = useData('colorLightSwitchOid');

        const isLight2ButtonMode = hasLight2Fields(widgetData) && widgetData.colorLightButton;

        const colorLightSwitchOidObject = isLight2ButtonMode ? widgetData.colorLightSwitchOidObject : undefined;
        const oidType = colorLightSwitchOidObject?.type;
        const isValidType = oidType === 'boolean';

        const longPressProps = useLongPress({
            onClick: () => setOnOffValueState(!onOffValue),
            onLongPress: () => setOpen(true),
            ms: isLight2ButtonMode ? (widgetData.colorLightDelayLongPress ?? 500) : 500,
        });

        if (!isLight2ButtonMode) {
            return <Component {...props} />;
        }

        // Explicit width or the auto width from the picker geometry (height + slider + gap).
        const modalWidth = modalWidthOf({
            modalWidth: widgetData.colorLightModalWidth,
            modalHeight: widgetData.colorLightModalHeight,
            sliderWidth: widgetData.colorLightSliderWidth,
        });

        return (
            <>
                <CollectionBase
                    isValidType={isValidType}
                    data={data}
                    oidValue={onOffValue}
                >
                    <Button
                        variant="text"
                        onPointerDown={longPressProps.onPointerDown}
                        onPointerUp={longPressProps.onPointerUp}
                        onPointerLeave={longPressProps.onPointerLeave}
                        onPointerCancel={longPressProps.onPointerCancel}
                        sx={{
                            color: data.iconColorActive || 'inherit',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            touchAction: 'manipulation',
                        }}
                    >
                        <SafeImg
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
                                ...getIconColorStyles(
                                    data.iconActive ||
                                        'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
                                    data.iconColorActive || data.iconColor,
                                ),
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
                            height: widgetData.colorLightModalHeight || 300,
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
