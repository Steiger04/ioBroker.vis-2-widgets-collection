import { Box } from '@mui/material';
import { useContext, useMemo, useRef } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useOidValue from '../hooks/useOidValue';
import useElementDimensions from '../hooks/useElementDimensions';
import LightPicker from './Light2Picker';
import { getMarginBetweenPickers } from './colorPickerUtils/colorPickerMemos';
import type iro from '@jaames/iro';

function Light2Collection(): React.ReactElement {
    const context = useContext(CollectionContext);
    const {
        widget,
        widget: { data: rxData },
    } = context;

    const { data } = useData('oid');
    const oidValue = useOidValue('oid');

    const boxRef = useRef<HTMLDivElement>(null);
    const dimensions = useElementDimensions(boxRef.current, (rxData.colorLightSliderWidth || 1) * 28);

    // Type-safe Zugriff auf das OID Object
    const colorLightSwitchOidObject = widget.data.colorLightSwitchOidObject;
    const oidType = colorLightSwitchOidObject?.type;
    const isValidType = oidType === 'boolean';

    const initHandler = (color: iro.Color): void => {
        console.log('init - color:', color);
    };

    const cctInputChangeHandler = (color: iro.Color): void => {
        console.log('cctInputChange - color:', color);
    };

    const marginLeft = useMemo(
        () =>
            getMarginBetweenPickers(
                dimensions,
                rxData.colorLightUIComponent,
                rxData.colorLightSliderWidth,
                rxData.colorLightType,
            ),
        [dimensions, rxData.colorLightUIComponent, rxData.colorLightSliderWidth, rxData.colorLightType],
    );

    return (
        <CollectionBase
            isValidType={isValidType}
            data={data}
            oidValue={oidValue}
        >
            <Box
                ref={boxRef}
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: Number(rxData.colorLightPadding) || 0,
                }}
            >
                <LightPicker
                    cctComponentNumber={1} // kelvin
                    dimensions={dimensions}
                    colorLightGamut={rxData.colorLightGamut}
                    colorWheelLightness={rxData.colorWheelLightness}
                    colorLightUIComponent={rxData.colorLightUIComponent}
                    colorLightSliderWidth={rxData.colorLightSliderWidth}
                    colorLightBorderWidth={rxData.colorLightBorderWidth}
                    colorLightBorderColor={rxData.colorLightBorderColor}
                    colorLightType={rxData.colorLightType}
                    colorLightCtMin={rxData.colorLightCtMin}
                    colorLightCtMax={rxData.colorLightCtMax}
                />

                {rxData.colorLightType === 'cct' ? (
                    <Box sx={{ ml: `${marginLeft}px` }}>
                        <LightPicker
                            cctComponentNumber={2} // brightness
                            onColorInit={initHandler}
                            onInputChange={cctInputChangeHandler}
                            dimensions={dimensions}
                            colorLightGamut={rxData.colorLightGamut}
                            colorWheelLightness={rxData.colorWheelLightness}
                            colorLightUIComponent={rxData.colorLightUIComponent}
                            colorLightSliderWidth={rxData.colorLightSliderWidth}
                            colorLightBorderWidth={rxData.colorLightBorderWidth}
                            colorLightBorderColor={rxData.colorLightBorderColor}
                            colorLightType={rxData.colorLightType}
                            colorLightCtMin={rxData.colorLightCtMin}
                            colorLightCtMax={rxData.colorLightCtMax}
                        />
                    </Box>
                ) : null}
            </Box>
        </CollectionBase>
    );
}

export default Light2Collection;
