/**
 * Slider mark-label renderer used by MUI `Slider`.
 *
 * @module widgets/CollectionMark
 * @remarks
 * Paints the mark's data only: the selected mark's final presentation (label,
 * icon offset, icon overlay) is already written onto it by `buildSliderMarks`
 * (ADR-0106). The `data-font`/`data-position`/`data-img` attributes are test
 * hooks — no rule of the slider body reaches the mark through them.
 */

import { SliderMarkLabel, Box, Typography } from '@mui/material';
import React, { type FC, type HTMLAttributes } from 'react';

import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { gradientTextSx } from '../lib/helper/gradientTextSx';

import SafeImg from '../components/SafeImg';
import type { SliderOrientation } from './chrome';
import type { SliderMark } from './marks';

/**
 * The props the slider hands to its mark-label slot (`slotProps.markLabel`).
 *
 * @remarks
 * `showMarkLabels` is named apart from the slider's own `marks` (the mark list, also on
 * `ownerState`): it is the widget's toggle, read by this slot only.
 */
export interface CollectionMarkSlotProps {
    /** The widget's `marks` toggle: without it the mark labels render nothing. */
    showMarkLabels?: boolean;
    /** The orientation the chrome renders the slider in. */
    orientation?: SliderOrientation;
}

// MUI's extension point for extra slot props: lets the slider hand the mark-label slot its
// props (`slotProps.markLabel`) typed, without a styled wrapper's prop types or a cast.
// The augmentation is GLOBAL: it applies to the mark-label slot of every MUI Slider in the
// bundle, so no name may reuse a Slider prop with another meaning — `showMarkLabels`, not
// `marks` (the mark list); `orientation` carries the very value the Slider's own prop gets.
declare module '@mui/material/Slider' {
    interface SliderMarkLabelSlotPropsOverrides {
        showMarkLabels?: CollectionMarkSlotProps['showMarkLabels'];
        orientation?: CollectionMarkSlotProps['orientation'];
    }
}

// Extend HTMLAttributes for the remaining props passed through to SliderMarkLabel.
export interface CollectionMarkProps extends CollectionMarkSlotProps, Omit<HTMLAttributes<HTMLElement>, 'children'> {
    'data-index': number;
    ownerState: {
        /** The slider's `marks` — the list `buildSliderMarks` built. */
        marks?: SliderMark[];
    };
    // Additional MUI-specific props.
    style?: React.CSSProperties;
    className?: string;
}

const CollectionMark: FC<CollectionMarkProps> = ({ showMarkLabels, orientation, ...props }) => {
    // Get the mark data from MUI's ownerState.marks (which contains our sliderMarks)
    const mark = props.ownerState.marks?.[props['data-index']];

    // Labels may carry HTML; the selected mark's alias is already its label.
    const labelHtml = mark?.label || '';

    return showMarkLabels && mark ? (
        <SliderMarkLabel {...props}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: orientation === 'vertical' ? 'row' : 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    data-font="active"
                    dangerouslySetInnerHTML={{ __html: labelHtml }}
                    sx={{
                        textTransform: 'none',
                        flexGrow: 1,
                        pr: orientation === 'vertical' ? 1 : 0,
                        pb: orientation === 'vertical' ? 0 : 1,

                        fontSize: mark.valueSize,

                        ...gradientTextSx(mark.textColor),
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
