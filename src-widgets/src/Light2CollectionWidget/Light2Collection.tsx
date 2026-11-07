/**
 * Light2 collection renderer.
 *
 * @module Light2CollectionWidget/Light2Collection
 */

import { Box, Divider, IconButton, SvgIcon } from '@mui/material';
import { useContext, useMemo, useState } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import type { Light2CollectionContextProps } from '../types';
import Light2ButtonMode from './Light2ButtonMode';
import useData from '../hooks/useData';
import useElementDimensions from '../hooks/useElementDimensions';
import useValueState from '../hooks/useValueState';
import type { UseValueStateReturn } from '../hooks/useValueState';
import LightPicker from './Light2Picker';
import { pickerGeometry } from './pickerGeometry';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ColorWheelSvg from '../img/colorWheel.svg?react';
import CctWhiteSvg from '../img/cctWhite.svg?react';
import { LIGHT2_CHANNEL_FIELDS, offersViewSwitch } from '../lib/light2Channels';
import type { Light2ChannelField } from '../lib/light2Channels';
import type { SyncChannel } from './backendSyncKey';
import { isCctViewActive } from './lampSync';
import { useLampSync } from './useLampSync';

const ColorWheelIcon: React.FC<React.ComponentProps<typeof SvgIcon>> = props => (
    <SvgIcon
        component={ColorWheelSvg}
        viewBox="0 0 128 128"
        {...props}
    />
);

const CctWhiteIcon: React.FC<React.ComponentProps<typeof SvgIcon>> = props => (
    <SvgIcon
        component={CctWhiteSvg}
        viewBox="0 0 512 512"
        {...props}
    />
);

/** Props of {@link LampControl}: the switch binding comes from the body, which holds it once. */
interface LampControlProps {
    /** Whether the Schalter-OID is a boolean (otherwise the frame shows the OID hint). */
    isValidType: boolean;
    /** The current value of the Schalter-OID. */
    onOffValue: UseValueStateReturn['value'];
    /** Toggles the Schalter-OID (the power button). */
    onToggle: () => void;
}

/**
 * The Lampen-Bedienelement: power button, view switch and the iro pickers of the current view.
 *
 * @param props - Component props.
 * @param props.isValidType - Whether the Schalter-OID is a boolean.
 * @param props.onOffValue - The current value of the Schalter-OID.
 * @param props.onToggle - Toggles the Schalter-OID.
 * @returns The Lampen-Bedienelement in its frame.
 */
function LampControl({ isValidType, onOffValue, onToggle }: LampControlProps): React.ReactElement {
    const [cctSelected, setCctSelected] = useState(false);
    const context = useContext(CollectionContext) as Light2CollectionContextProps;
    const {
        widget,
        widget: { data: rxData },
        values,
        getPropertyValue,
    } = context;

    // Widget style without a state: the Zustandszeilen exist only in the Button-Modus (ADR-0108 Nr. 8).
    const { data } = useData('');

    // Callback-ref-as-state: useElementDimensions re-runs when the element mounts.
    // (A plain useRef would leave the hook memoizing the null of the first render.)
    // Measured locally, not the frame's Content-Box: the picker box carries its own
    // colorLightPadding (ADR-0098). Light2 derives its picker geometry from it itself.
    const [boxElement, setBoxElement] = useState<HTMLDivElement | null>(null);
    const measuredBox = useElementDimensions(boxElement);

    const hasViewSwitch = offersViewSwitch(rxData.colorLightType);
    const cctView = isCctViewActive(rxData.colorLightType, cctSelected);

    // The Kanäle: their values and Fremdänderung flags feed the lamp sync, their setters carry
    // out its write requests.
    const temperature = useValueState('colorLightTemperatureOid');
    const brightness = useValueState('colorLightBrightnessOid');
    const rgbHex = useValueState('colorLightRgbHexOid');
    const red = useValueState('colorLightRedOid');
    const green = useValueState('colorLightGreenOid');
    const blue = useValueState('colorLightBlueOid');
    const hue = useValueState('colorLightHueOid');
    const saturation = useValueState('colorLightSaturationOid');
    const bindings: Record<Light2ChannelField, UseValueStateReturn> = {
        colorLightTemperatureOid: temperature,
        colorLightRgbHexOid: rgbHex,
        colorLightRedOid: red,
        colorLightGreenOid: green,
        colorLightBlueOid: blue,
        colorLightHueOid: hue,
        colorLightSaturationOid: saturation,
        colorLightBrightnessOid: brightness,
    };
    const channels = {} as Record<Light2ChannelField, SyncChannel>;
    const setters = {} as Record<Light2ChannelField, (value: string | number) => void>;
    for (const field of LIGHT2_CHANNEL_FIELDS) {
        channels[field] = { changed: bindings[field].hasBackendChange, value: bindings[field].value };
        setters[field] = bindings[field].updateValue;
    }

    const { mainPickerRef, brightnessPickerRef, onColorInit, onInputChange } = useLampSync({
        type: rxData.colorLightType,
        cctView,
        widgetData: widget.data,
        getPropertyValue,
        channels,
        setters,
    });

    // All picker sizes and layouts from the measured box (ADR-0108 Nr. 5).
    const geometry = useMemo(
        () =>
            pickerGeometry(
                {
                    uiComponent: rxData.colorLightUIComponent,
                    cctView,
                    sliderWidth: rxData.colorLightSliderWidth,
                    ctMin: rxData.colorLightCtMin,
                    ctMax: rxData.colorLightCtMax,
                },
                measuredBox,
            ),
        [
            measuredBox,
            rxData.colorLightUIComponent,
            cctView,
            rxData.colorLightSliderWidth,
            rxData.colorLightCtMin,
            rxData.colorLightCtMax,
        ],
    );

    // Shared props for LightPicker.
    const commonLightPickerProps = useMemo(
        () => ({
            geometry,
            colorWheelLightness: rxData.colorWheelLightness,
            colorLightBorderWidth: rxData.colorLightBorderWidth,
            colorLightBorderColor: rxData.colorLightBorderColor,
        }),
        [geometry, rxData.colorWheelLightness, rxData.colorLightBorderWidth, rxData.colorLightBorderColor],
    );

    return (
        <CollectionBase
            isValidType={isValidType}
            data={data}
        >
            {rxData.colorLightType !== 'none' ? (
                <Box
                    sx={{
                        minWidth: 0,
                        height: '100%',
                        display: 'flex',
                        flexShrink: 0,
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}
                >
                    <IconButton onClick={onToggle}>
                        <PowerSettingsNewIcon
                            sx={{
                                color: onOffValue ? 'red' : 'green',
                                width: '26px',
                                height: '26px',
                            }}
                        />
                    </IconButton>

                    {hasViewSwitch && (
                        <Box
                            sx={{
                                display: 'inline-block',
                            }}
                        >
                            <Divider
                                orientation="horizontal"
                                flexItem
                                variant="fullWidth"
                            />
                            <IconButton onClick={() => setCctSelected(false)}>
                                <ColorWheelIcon
                                    sx={{
                                        width: '24px',
                                        height: '24px',
                                    }}
                                />
                            </IconButton>
                        </Box>
                    )}

                    {hasViewSwitch && (
                        <Box
                            sx={{
                                display: 'block',
                            }}
                        >
                            <IconButton onClick={() => setCctSelected(true)}>
                                <CctWhiteIcon
                                    sx={{
                                        width: '24px',
                                        height: '24px',
                                    }}
                                />
                            </IconButton>
                        </Box>
                    )}
                </Box>
            ) : null}

            <Divider
                orientation="vertical"
                flexItem
                variant="middle"
            />

            <Box
                ref={setBoxElement}
                sx={{
                    minWidth: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: Number(rxData.colorLightPadding) || 0,
                }}
            >
                {Object.keys(values).length !== 0 &&
                    measuredBox.width !== undefined &&
                    rxData.colorLightType !== 'none' && (
                        <>
                            <LightPicker
                                picker="main"
                                ref={mainPickerRef}
                                onColorInit={onColorInit}
                                onInputChange={onInputChange}
                                {...commonLightPickerProps}
                            />

                            {cctView && (
                                <Box sx={{ ml: `${geometry.secondPickerOffset}px` }}>
                                    <LightPicker
                                        picker="brightness"
                                        onColorInit={onColorInit}
                                        onInputChange={onInputChange}
                                        ref={brightnessPickerRef}
                                        {...commonLightPickerProps}
                                    />
                                </Box>
                            )}
                        </>
                    )}
            </Box>
        </CollectionBase>
    );
}

/**
 * Light2 body: holds the Schalter-OID binding once and composes the Lampen-Bedienelement —
 * directly, or in the Button-Modus behind the button face and its modal (ADR-0108 Nr. 4).
 *
 * @returns Widget body element.
 */
function Light2Collection(): React.ReactElement {
    const {
        widget: { data: rxData },
    } = useContext(CollectionContext) as Light2CollectionContextProps;

    const { value: onOffValue, updateValue: setOnOffValueState } = useValueState('colorLightSwitchOid');

    // Only a boolean Schalter-OID counts (ADR-0108 Nr. 8); any other type shows the OID hint.
    const isValidType = rxData.colorLightSwitchOidObject?.type === 'boolean';

    // The one toggle of the power button and the Button-Modus face: true when off, false when on.
    const toggleOnOff = (): void => setOnOffValueState(!onOffValue);

    const lampControl = (
        <LampControl
            isValidType={isValidType}
            onOffValue={onOffValue}
            onToggle={toggleOnOff}
        />
    );

    if (!rxData.colorLightButton) {
        return lampControl;
    }

    return (
        <Light2ButtonMode
            isValidType={isValidType}
            onOffValue={onOffValue}
            onToggle={toggleOnOff}
        >
            {lampControl}
        </Light2ButtonMode>
    );
}

export default Light2Collection;
