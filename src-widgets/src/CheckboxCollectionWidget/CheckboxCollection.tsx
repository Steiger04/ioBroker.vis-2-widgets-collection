/**
 * Checkbox collection renderer.
 *
 * @module widgets/CheckboxCollection
 */

import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import React, { useContext, useMemo } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData/useData';
import useHtmlValue from '../hooks/useHtmlValue';
import useValueState from '../hooks/useValueState';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { gradientColor } from '../lib/helper/gradientColor';
import SafeImg from '../components/SafeImg';

import type { CheckboxCollectionContextProps } from '../types';
import type { StyleData } from '../hooks/useData/types';
import type { CSSProperties } from 'react';

const defaultIconTrue =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSAzSDVhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJWNWEyIDIgMCAwIDAtMi0yem0tOSAxNGwtNS01bDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5eiIvPjwvc3ZnPg==';
const defaultIconFalse =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yeiIvPjwvc3ZnPg==';

/**
 * Helper function to get gradient text styles.
 */
function getGradientTextStyle(textColor: string | undefined): CSSProperties {
    if (!textColor) {
        return { color: undefined };
    }
    const gradient = gradientColor(textColor);
    if (gradient) {
        return {
            background: gradient,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
        };
    }
    return { color: textColor };
}

/**
 * Helper function to render checkbox icon with consistent styling.
 */
function renderCheckboxIcon(isChecked: boolean, data: StyleData, iconStyle: CSSProperties): React.JSX.Element {
    const defaultIcon = isChecked ? defaultIconTrue : defaultIconFalse;
    return (
        <SafeImg
            alt=""
            src={data.icon || defaultIcon}
            style={iconStyle}
        />
    );
}

function CheckboxCollection(): React.JSX.Element {
    const context = useContext(CollectionContext);
    if (!context) {
        throw new Error('CheckboxCollection must be used within a CollectionProvider');
    }

    const checkboxContext = context as CheckboxCollectionContextProps;
    const { widget, theme } = checkboxContext;

    const oidObject = widget.data.oidObject;

    const { data } = useData('oid');
    const { value: oidValue, updateValue: setOidValueState } = useValueState('oid');

    const oidType = oidObject?.type;
    const isValidType = oidType === 'boolean';

    const contentValue = useHtmlValue(oidValue, widget, data);

    // Memoize icon styles to prevent recreation on every render
    const iconStyle = useMemo((): CSSProperties => {
        return {
            objectFit: 'contain',
            width: `calc(100% * (${data.iconSize} / 24px))`,
            height: `calc(100% * (${data.iconSize} / 24px))`,
            ...getIconColorStyles(
                data.icon || defaultIconTrue,
                data.iconColor || theme.palette.primary.main,
                data.forceColorMask,
            ),
        };
    }, [data.iconSize, data.icon, data.iconColor, data.forceColorMask, theme.palette.primary.main]);

    // Memoize gradient text styles
    const gradientTextStyle = useMemo(() => getGradientTextStyle(data.textColor), [data.textColor]);

    return (
        <CollectionBase
            isValidType={isValidType}
            data={data}
            oidValue={oidValue}
        >
            <CollectionBaseImage
                data={data}
                widget={widget}
            />

            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {oidValue !== undefined && (
                    <FormControlLabel
                        labelPlacement={widget.data.checkboxLabelPlacement}
                        sx={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            m: 0,
                        }}
                        control={
                            <Checkbox
                                disabled={widget.data.onlyDisplay}
                                disableRipple
                                checked={Boolean(oidValue)}
                                onChange={() => setOidValueState(!oidValue)}
                                checkedIcon={renderCheckboxIcon(true, data, iconStyle)}
                                icon={renderCheckboxIcon(false, data, iconStyle)}
                                sx={{
                                    left: data.iconXOffset,
                                    bottom: data.iconYOffset,
                                    objectFit: 'contain',
                                    width: '100%',
                                    height: '100%',
                                    flexGrow: 1,
                                    p: 0,
                                    '& .MuiSvgIcon-root': {
                                        width: '100%',
                                        height: '100%',
                                    },
                                }}
                            />
                        }
                        label={
                            !widget.data.withoutLabel && (
                                <Typography
                                    component="div"
                                    variant="body2"
                                    sx={{
                                        fontSize: data.valueSize,
                                        textAlign: 'center',
                                        bgcolor: 'transparent',
                                        ...gradientTextStyle,
                                        textTransform: 'none',
                                        px: 1,
                                        pl: 0,
                                        pr: 2,
                                        width: '100%',
                                        height: '100%',
                                        flexGrow: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        overflowWrap: 'break-word',
                                        wordBreak: 'break-word',
                                        whiteSpace: 'normal',
                                        hyphens: 'auto',
                                        '& > div': {
                                            textAlign: 'left',
                                            display: 'inline-block',
                                        },
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: `<div style="text-align: left; display: inline-block; width: 100%;">${contentValue || ''}</div>`,
                                    }}
                                />
                            )
                        }
                    />
                )}
            </Box>
        </CollectionBase>
    );
}

export default CheckboxCollection;
