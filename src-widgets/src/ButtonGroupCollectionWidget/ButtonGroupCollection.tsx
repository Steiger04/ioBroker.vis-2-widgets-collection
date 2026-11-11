/**
 * Button-group collection renderer.
 *
 * @module widgets/ButtonGroupCollection
 */

import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import React, { useCallback, useContext } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import SafeImg from '../components/SafeImg';
import useData from '../hooks/useData';
import { ANY_VALUE_TYPES, isAllowedOidType } from '../lib/allowedOidTypes';
import useValueState from '../hooks/useValueState';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { gradientTextSx } from '../lib/helper/gradientTextSx';
import { buildButtonChrome, buildGroupChrome } from './chrome';

import type { ButtonGroupCollectionContextProps } from '../types';

function ButtonGroupCollection(): React.JSX.Element {
    const context = useContext(CollectionContext);
    const { widget, theme } = context as ButtonGroupCollectionContextProps;

    const oidObject = widget.data.oidObject;
    const { data: styleData, states: buttonStates } = useData('oid');
    const { value: oidValue, updateValue: setOidValueState, locked } = useValueState('oid');

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
            <Box sx={{ width: '100%', height: '100%', display: 'flex' }}>
                {/* MUI compares the group value against each button value with strict
                    === internally. Coercing both sides to string applies the
                    sameStateValue contract (hooks/useData) through that strict equality —
                    keep the coercion, it is not redundant. */}
                <ToggleButtonGroup
                    exclusive
                    value={String(oidValue)}
                    disabled={locked}
                    fullWidth
                    // A stored null is unset: MUI applies its default to undefined only.
                    orientation={buttonGroupOrientation ?? undefined}
                    sx={buildGroupChrome({
                        variant: buttonGroupVariant,
                        orientation: buttonGroupOrientation,
                        data: widget.data,
                        count: buttonStates.length,
                        theme,
                    })}
                >
                    {buttonStates.map(({ value, active: isActive, ...state }, index) => {
                        // Aktiver Zustand (ADR-0105): every duplicate of the matching value is
                        // active — the same buttons MUI selects, so selection, Active styling
                        // and the active treatment agree.

                        // String(value!) coerces for MUI's strict === selection,
                        // applying the sameStateValue contract (see group value above).
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
