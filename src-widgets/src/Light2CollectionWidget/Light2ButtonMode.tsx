/**
 * The Light2 Button-Modus: the button face and the modal hosting the Lampen-Bedienelement.
 *
 * @module Light2CollectionWidget/Light2ButtonMode
 * @remarks
 * Composed by the Light2 body when `colorLightButton` is set (ADR-0108 Nr. 4): a click on the face
 * toggles the Schalter-OID, a long press (`colorLightDelayLongPress`) opens the modal. The body
 * holds the switch binding once and hands its value and toggle in; the face reads the
 * Zustandszeilen of the Schalter-OID through useData.
 */

import { Box, Button, Modal } from '@mui/material';
import React, { useContext, useState } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import SafeImg from '../components/SafeImg';
import useData from '../hooks/useData/useData';
import { useLongPress } from '../hooks/useLongPress';
import type { UseValueStateReturn } from '../hooks/useValueState';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import type { Light2CollectionContextProps } from '../types';
import { modalWidthOf } from './pickerGeometry';

/** Props of {@link Light2ButtonMode}. */
interface Light2ButtonModeProps {
    /** Whether the Schalter-OID is a boolean (otherwise the frame shows the OID hint). */
    isValidType: boolean;
    /** The current value of the Schalter-OID. */
    onOffValue: UseValueStateReturn['value'];
    /** Toggles the Schalter-OID (the face's click). */
    onToggle: () => void;
    /** The Lampen-Bedienelement the modal hosts. */
    children: React.ReactNode;
}

/**
 * Renders the button face and, after a long press, the modal with the Lampen-Bedienelement.
 *
 * @param props - Component props.
 * @param props.isValidType - Whether the Schalter-OID is a boolean.
 * @param props.onOffValue - The current value of the Schalter-OID.
 * @param props.onToggle - Toggles the Schalter-OID.
 * @param props.children - The Lampen-Bedienelement.
 * @returns The face and its modal.
 */
function Light2ButtonMode({ isValidType, onOffValue, onToggle, children }: Light2ButtonModeProps): React.JSX.Element {
    const {
        widget: { data: rxData },
    } = useContext(CollectionContext) as Light2CollectionContextProps;
    const [open, setOpen] = useState(false);

    const { data } = useData('colorLightSwitchOid');

    const longPressProps = useLongPress({
        onClick: onToggle,
        onLongPress: () => setOpen(true),
        ms: rxData.colorLightDelayLongPress ?? 500,
    });

    // Explicit width or the auto width from the picker geometry (height + slider + gap).
    const modalWidth = modalWidthOf({
        modalWidth: rxData.colorLightModalWidth,
        modalHeight: rxData.colorLightModalHeight,
        sliderWidth: rxData.colorLightSliderWidth,
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
                                (typeof data.iconSizeOnly === 'number' && `calc(100% * ${data.iconSizeOnly} / 100)`) ||
                                '100%',
                            height:
                                (typeof data.iconSizeOnly === 'number' && `calc(100% * ${data.iconSizeOnly} / 100)`) ||
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
                        height: rxData.colorLightModalHeight || 300,
                    }}
                >
                    {children}
                </Box>
            </Modal>
        </>
    );
}

export default Light2ButtonMode;
