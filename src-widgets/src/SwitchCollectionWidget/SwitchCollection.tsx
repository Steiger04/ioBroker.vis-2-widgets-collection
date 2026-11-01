/**
 * Renderer for the Switch Collection widget.
 *
 * @module widgets/SwitchCollection
 */

import { Box } from '@mui/material';
import React, { useContext, useState } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useElementDimensions from '../hooks/useElementDimensions';
import useValueState from '../hooks/useValueState';
import MaterialUISwitch from './MaterialUISwitch';
import { TRACK_SIZE_DEFAULT } from '../lib/switchFields';
import type { SwitchCollectionContextProps } from '../types';

function SwitchCollection(): React.JSX.Element {
    // Measured via ResizeObserver (the RadioGroup pattern), not by walking the
    // DOM during render: the width comes from the track row itself, the height
    // budget from a zero-width probe spanning the full content height —
    // no coupling to CollectionBase's internal structure (ADR-0088).
    const [trackRowRef, setTrackRowRef] = useState<HTMLDivElement | null>(null);
    const [heightProbeRef, setHeightProbeRef] = useState<HTMLDivElement | null>(null);
    const { width: rowWidth } = useElementDimensions(trackRowRef);
    const { height: contentHeight } = useElementDimensions(heightProbeRef);

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
            <CollectionBaseImage
                data={data}
                widget={widget}
            />

            {/* Invisible height probe: resolves against the inner Paper's height
                while taking no flow width, so the track row stays centred. */}
            <Box
                ref={setHeightProbeRef}
                aria-hidden="true"
                sx={{ width: 0, height: '100%' }}
            />

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
                        <MaterialUISwitch
                            disabled={locked}
                            width={rowWidth}
                            maxHeight={contentHeight}
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
