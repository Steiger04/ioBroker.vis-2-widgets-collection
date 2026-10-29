/**
 * Button-group collection renderer.
 *
 * @module widgets/ButtonGroupCollection
 */

import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import React, { useCallback, useContext } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import SafeImg from '../components/SafeImg';
import useData from '../hooks/useData';
import { ANY_VALUE_TYPES, isAllowedOidType } from '../lib/allowedOidTypes';
import useValueState from '../hooks/useValueState';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { gradientTextSx } from '../lib/helper/gradientTextSx';
import isOidReadOnly from '../lib/helper/isOidReadOnly';
import { buildButtonChrome, buildGroupChrome } from './chrome';

import type { ButtonGroupCollectionContextProps } from '../types';

function ButtonGroupCollection(): React.JSX.Element {
    const context = useContext(CollectionContext);
    if (!context) {
        throw new Error('ButtonGroupCollection must be used within a CollectionProvider');
    }
    const { widget, theme } = context as ButtonGroupCollectionContextProps;

    const oidObject = widget.data.oidObject;
    const { data: styleData, states: buttonStates, activeIndex } = useData('oid');
    const { value: oidValue, updateValue: setOidValueState } = useValueState('oid');

    const buttonGroupVariant = widget.data.buttonGroupVariant;
    const buttonGroupOrientation = widget.data.buttonGroupOrientation;
    const oidType = oidObject?.type;
    const isValidType = isAllowedOidType(ANY_VALUE_TYPES, oidType);

    const handleButtonClick = useCallback(
        (selectedValue: string | number | boolean) => {
            setOidValueState(selectedValue);
        },
        [setOidValueState],
    );

    return (
        <CollectionBase
            bgActive={false}
            isValidType={isValidType}
            data={styleData}
            oidValue={oidValue}
        >
            <CollectionBaseImage
                data={styleData}
                widget={widget}
            />

            <Box sx={{ width: '100%', height: '100%', display: 'flex' }}>
                <ToggleButtonGroup
                    exclusive
                    value={String(oidValue)}
                    disabled={!isValidType || isOidReadOnly(widget.data)}
                    fullWidth
                    orientation={buttonGroupOrientation}
                    sx={buildGroupChrome({
                        variant: buttonGroupVariant,
                        orientation: buttonGroupOrientation,
                        buttonGroupColor: widget.data.buttonGroupColor,
                        basePadding: widget.data.basePadding,
                        count: buttonStates.length,
                        theme,
                    })}
                >
                    {buttonStates.map(({ value, ...state }, index) => {
                        // activeIndex is 1-based (0 / undefined = no selection)
                        const isActive = activeIndex === index + 1;

                        return (
                            <ToggleButton
                                value={String(value!)}
                                onClick={() => handleButtonClick(value!)}
                                key={`${String(value)}-${index}`}
                                sx={buildButtonChrome({ background: state.background, isActive })}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        p: 0.5,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-around',
                                        alignItems: 'center',
                                    }}
                                >
                                    {!widget.data.onlyText && state.icon && (
                                        <Box
                                            sx={{
                                                overflow: 'hidden',
                                                width: '100%',
                                                height: '100%',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <SafeImg
                                                src={state.icon}
                                                style={{
                                                    position: 'relative',
                                                    left: state.iconXOffset,
                                                    bottom: state.iconYOffset,
                                                    objectFit: 'contain',
                                                    width: state.iconSizeOnly,
                                                    height: state.iconSizeOnly,
                                                    ...getIconColorStyles(
                                                        state.icon,
                                                        state.iconColor,
                                                        state.forceColorMask,
                                                    ),
                                                }}
                                            />
                                        </Box>
                                    )}
                                    {!widget.data.onlyIcon && (
                                        <Box
                                            sx={{
                                                width: '100%',
                                                pt: 0.5,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Typography
                                                contentEditable="false"
                                                dangerouslySetInnerHTML={{
                                                    __html: state.label!,
                                                }}
                                                noWrap
                                                variant="body2"
                                                sx={{
                                                    textTransform: 'none',
                                                    fontSize: state.valueSize,
                                                    ...gradientTextSx(state.textColor),
                                                }}
                                            />
                                        </Box>
                                    )}
                                </Box>
                            </ToggleButton>
                        );
                    })}
                </ToggleButtonGroup>
            </Box>
        </CollectionBase>
    );
}

export default ButtonGroupCollection;
