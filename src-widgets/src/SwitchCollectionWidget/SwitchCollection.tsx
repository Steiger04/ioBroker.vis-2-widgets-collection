/**
 * Renderer for the Switch Collection widget.
 *
 * @module widgets/SwitchCollection
 */

import { Box } from '@mui/material';
import React, { useContext, useState } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useContentBox from '../hooks/useContentBox';
import useData from '../hooks/useData';
import useElementDimensions from '../hooks/useElementDimensions';
import useValueState from '../hooks/useValueState';
import MaterialUISwitch from './MaterialUISwitch';
import { TRACK_SIZE_DEFAULT } from '../lib/switchFields';
import type { SwitchCollectionContextProps } from '../types';

/**
 * The switch, its thumb capped by the height budget: the frame's Content-Box height
 * (ADR-0098) — a child of CollectionBase, where the box is published.
 */
function BudgetedSwitch(props: Omit<React.ComponentProps<typeof MaterialUISwitch>, 'maxHeight'>): React.JSX.Element {
    const { height } = useContentBox();

    return (
        <MaterialUISwitch
            {...props}
            maxHeight={height}
        />
    );
}

function SwitchCollection(): React.JSX.Element {
    // The width comes from the track row itself (measured locally, its own element); the
    // height budget is the frame's Content-Box (BudgetedSwitch) — no coupling to
    // CollectionBase's internal structure (ADR-0098).
    const [trackRowRef, setTrackRowRef] = useState<HTMLDivElement | null>(null);
    const { width: rowWidth } = useElementDimensions(trackRowRef);

    const context = useContext(CollectionContext);
    if (!context) {
        throw new Error('SwitchCollection must be used within a CollectionProvider');
    }
    const { widget, theme } = context as SwitchCollectionContextProps;

    const oidObject = widget.data.oidObject;

    const { data } = useData('oid');
    const { value: oidValue, updateValue, locked } = useValueState('oid');

    const oidType = oidObject?.type;

    const isValidType = oidType === 'boolean';

    /** Toggles the boolean state using debounced backend writes. */
    const handleSwitchChange = (): void => {
        updateValue(!oidValue);
    };

    return (
        <CollectionBase
            isValidType={isValidType}
            data={data}
            oidValue={oidValue}
        >
            <Box
                ref={setTrackRowRef}
                sx={{
                    position: 'relative',

                    width: '100%',
                    height: (widget.data.trackSize && `${widget.data.trackSize}%`) || `${TRACK_SIZE_DEFAULT}%`,
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',

                        px: '8px',

                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {oidValue !== undefined && widget.data.thumbSize !== undefined && (
                        <BudgetedSwitch
                            disabled={locked}
                            width={rowWidth}
                            data={data}
                            widget={widget}
                            checked={Boolean(oidValue)}
                            onChange={handleSwitchChange}
                            sx={{
                                '& .MuiTouchRipple-root': {
                                    color: data.iconColor || theme.palette.primary.main,
                                },
                            }}
                        />
                    )}
                </Box>
            </Box>
        </CollectionBase>
    );
}

export default SwitchCollection;
