/**
 * Checkbox collection renderer.
 *
 * @module widgets/CheckboxCollection
 */

import { Box, Checkbox, FormControlLabel } from '@mui/material';
import React, { useContext, useMemo } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import CollectionValueText from '../components/CollectionValueText';
import useData from '../hooks/useData/useData';
import useHtmlValue from '../hooks/useHtmlValue';
import useValueState from '../hooks/useValueState';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import isOidReadOnly from '../lib/helper/isOidReadOnly';
import SafeImg from '../components/SafeImg';

import type { CheckboxCollectionContextProps } from '../types';
import type { StyleData } from '../hooks/useData/types';
import type { CSSProperties } from 'react';

const defaultIconTrue =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSAzSDVhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJWNWEyIDIgMCAwIDAtMi0yem0tOSAxNGwtNS01bDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5eiIvPjwvc3ZnPg==';
const defaultIconFalse =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yeiIvPjwvc3ZnPg==';

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
    // Frozen label collapse: the legacy template dropped falsy values
    // (`${v || ''}`) — a raw `false` renders an empty label, unlike the
    // null-only collapse State/Input apply for their centered values.
    const labelValue = String(contentValue || '');

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
                                disabled={isOidReadOnly(widget.data)}
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
                                <CollectionValueText
                                    valueSize={data.valueSize}
                                    textColor={data.textColor}
                                    contentValue={labelValue}
                                    sx={{
                                        justifyContent: 'flex-start',
                                        pr: 2,
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
