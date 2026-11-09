/**
 * Checkbox collection renderer.
 *
 * @module widgets/CheckboxCollection
 */

import { Box, Checkbox, FormControlLabel } from '@mui/material';
import React, { useContext, useMemo } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import CollectionValueText from '../components/CollectionValueText';
import useData from '../hooks/useData/useData';
import { sameStateValue } from '../hooks/useData/stateValueEquality';
import useValueState from '../hooks/useValueState';
import { displayText } from '../lib/displayText';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
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

    const checkboxContext = context as CheckboxCollectionContextProps;
    const { widget } = checkboxContext;

    const oidObject = widget.data.oidObject;

    const { data } = useData('oid');
    const { value: oidValue, updateValue: setOidValueState, locked } = useValueState('oid');

    const oidType = oidObject?.type;
    const isValidType = oidType === 'boolean';

    // The `true` row is active exactly when the backend value matches `true` under the
    // state-value equality — the rule useData resolves the label and colours by (ADR-0105).
    const checked = sameStateValue(true, oidValue);

    const contentValue = displayText({
        value: oidValue,
        unit: oidObject?.unit,
        alias: data.alias,
        rowValue: data.value,
    });
    // Frozen label collapse: the legacy template dropped falsy values
    // (`${v || ''}`) — a raw `false` renders an empty label, unlike the
    // null-only collapse State/Input apply for their centered values.
    const labelValue = String(contentValue || '');

    // Memoize icon styles to prevent recreation on every render
    const iconStyle = useMemo((): CSSProperties => {
        return {
            objectFit: 'contain',
            // Box-relative: `iconWidth`/`iconHeight` walk the `iconSize` chain (active, row,
            // base, 100) as a plain number. Not `iconSizeOnly` — that skips the base size
            // once a Zustandszeile matches, and the boolean rows always match.
            width: `${data.iconWidth}%`,
            height: `${data.iconHeight}%`,
            // useData's icon colour chain ends on the primary terminal — no fallback here.
            ...getIconColorStyles(data.icon || defaultIconTrue, data.iconColor, data.forceColorMask),
        };
    }, [data.iconWidth, data.iconHeight, data.icon, data.iconColor, data.forceColorMask]);

    return (
        <CollectionBase
            isValidType={isValidType}
            data={data}
            oidValue={oidValue}
        >
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
                        // MUI wraps non-Typography label elements in an extra
                        // body1 span (FormControlLabel: label.type !== Typography)
                        // — that span has no flexGrow and squeezes the label out
                        // of the root's flex row. disableTypography keeps the
                        // label element as the direct flex child, as it always was.
                        disableTypography
                        labelPlacement={widget.data.checkboxLabelPlacement}
                        sx={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            m: 0,
                        }}
                        control={
                            <Checkbox
                                disabled={locked}
                                disableRipple
                                checked={checked}
                                onChange={() => setOidValueState(!checked)}
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
                                    wrapperFullWidth
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
