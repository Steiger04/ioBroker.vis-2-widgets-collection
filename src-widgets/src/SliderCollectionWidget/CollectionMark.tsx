/**
 * Slider mark-label renderer used by MUI `Slider`.
 *
 * @module widgets/CollectionMark
 */

import { SliderMarkLabel, Box, Typography } from '@mui/material';
import React, { useState, useEffect, type FC, type HTMLAttributes } from 'react';

import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { gradientColor } from '../lib/helper/gradientColor';

import { type StateStyleData } from '../hooks/useData/types';
import SafeImg from '../components/SafeImg';

// Extend HTMLAttributes for the remaining props passed through to SliderMarkLabel.
export interface CollectionMarkProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
    marks: boolean;
    sliderOrientation: 'horizontal' | 'vertical';
    aliasActive?: string;
    activeMarkIndex?: number | null;
    defaultIconColor?: string;
    'data-index': number;
    ownerState: {
        marks?: StateStyleData[];
    };
    // Additional MUI-specific props.
    style?: React.CSSProperties;
    className?: string;
}

const CollectionMark: FC<CollectionMarkProps> = ({
    marks,
    sliderOrientation,
    aliasActive,
    activeMarkIndex,
    defaultIconColor,
    ...props
}) => {
    const [ref, setRef] = useState<HTMLElement | null>(null);

    const index = props['data-index'];
    // Get the mark data from MUI's ownerState.marks (which contains our sliderMarks)
    const mark = props.ownerState.marks?.[index];

    // Check if this is exactly the current selected mark using our index
    const isCurrentSelected = activeMarkIndex === index;

    useEffect(() => {
        if (ref && mark?.label) {
            // Use aliasActive ONLY for the currently selected mark (not all active marks)
            if (isCurrentSelected && aliasActive) {
                ref.innerHTML = aliasActive;
            } else {
                ref.innerHTML = mark.label;
            }
        }
    }, [mark?.label, ref, isCurrentSelected, aliasActive, index]);

    return marks && mark ? (
        <SliderMarkLabel {...props}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: sliderOrientation === 'vertical' ? 'row' : 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    data-font="active"
                    ref={setRef}
                    sx={{
                        textTransform: 'none',
                        flexGrow: 1,
                        pr: sliderOrientation === 'vertical' ? 1 : 0,
                        pb: sliderOrientation === 'vertical' ? 0 : 1,

                        fontSize: mark.valueSize,

                        background: gradientColor(mark.textColor),
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: gradientColor(mark.textColor) ? 'transparent' : mark.textColor,
                    }}
                />
                <Box
                    data-position="active"
                    sx={{
                        position: 'relative',

                        bottom: mark.iconYOffset,
                        left: mark.iconXOffset,

                        flexGrow: 1,
                    }}
                >
                    <SafeImg
                        data-img="active"
                        src={mark.icon}
                        alt=""
                        style={{
                            position: 'relative',

                            width: mark.iconSize,
                            // height: mark.iconSize,

                            ...getIconColorStyles(mark.icon, mark.iconColor, mark?.forceColorMask),
                        }}
                    />
                </Box>
            </Box>
        </SliderMarkLabel>
    ) : null;
};

export default CollectionMark;
