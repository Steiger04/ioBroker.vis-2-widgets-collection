/**
 * Slider mark-label renderer used by MUI `Slider`.
 *
 * @module widgets/CollectionMark
 */

import { SliderMarkLabel, Box, Typography } from '@mui/material';
import React, { useState, useEffect, useContext, useCallback, type FC, type HTMLAttributes } from 'react';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import { formatSizeRem } from '../lib/helper/formatSizeRem';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';

import type { SliderCollectionContextProps } from '../types';

interface MarkData {
    value: number;
    label: string;
    fontSize: string | null;
    textColor?: string;
    icon: string | null;
    iconWidth: number;
    iconHeight: number;
    iconXOffset: string;
    iconYOffset: string;
    iconColor: string | null;
}

// Extend HTMLAttributes for the remaining props passed through to SliderMarkLabel.
interface CollectionMarkProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
    marks: boolean;
    sliderOrientation: 'horizontal' | 'vertical';
    aliasActive?: string;
    activeMarkIndex?: number | null;
    defaultIconColor?: string;
    'data-index': number;
    ownerState: {
        marks?: MarkData[];
    };
    // Additional MUI-specific props.
    style?: React.CSSProperties;
    className?: string;
}

/**
 * Renders a mark label with optional icon.
 *
 * @remarks
 * MUI passes mark metadata via `ownerState.marks` and the current index via
 * `data-index`. This component uses `innerHTML` to support markup in labels.
 */
const CollectionMark: FC<CollectionMarkProps> = ({
    marks,
    sliderOrientation,
    aliasActive,
    activeMarkIndex,
    defaultIconColor,
    ...props
}) => {
    const [ref, setRef] = useState<HTMLElement | null>(null);
    const { data } = useData('oid');
    const context = useContext(CollectionContext) as SliderCollectionContextProps;
    const { widget } = context;

    const index = props['data-index'];
    // Get the mark data from MUI's ownerState.marks (which contains our sliderMarks)
    const mark = props.ownerState?.marks?.[index];

    // Check if this is exactly the current selected mark using our index
    const isCurrentSelected = activeMarkIndex === index;

    const formatSize = useCallback(formatSizeRem, []);

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

                        // fontSize: Complete priority chain (all values as % relative to 1em)
                        // 1. valueSizeActive (Active group, when this mark is active)
                        // 2. mark.fontSize (precomputed in useData.ts, only for states)
                        //    - valueSize${i} (Value[1]-Value[n] group, individual for this state)
                        //    - markerTextSize (Slider group, only for marks that are states)
                        // 3. data.valueSize (General group, global fallback for all marks)
                        // 4. '1em' (final fallback, equals 100%)
                        //
                        // color: Complete priority chain (analogous to fontSize)
                        // 1. textColorActive (Active group, when this mark is active)
                        // 2. mark.textColor (precomputed in useData.ts, only for states)
                        //    - textColor${i} (Value[1]-Value[n] group, individual for this state)
                        //    - markerTextColor (Slider group, only for marks that are states)
                        // 3. data.textColor (General group, global fallback for all marks)
                        //
                        // IMPORTANT: These styles override the global MuiSlider-markLabel styles
                        // from SliderCollection.tsx (lines 415-426) through higher CSS specificity.
                        // Min/Max/Step marks (no states) have mark.fontSize=undefined and
                        // mark.textColor=undefined and use only data.valueSize/data.textColor or fallbacks.
                        fontSize:
                            (isCurrentSelected &&
                                typeof widget.data.valueSizeActive === 'number' &&
                                formatSize(widget.data.valueSizeActive)) ||
                            // `${widget.data.valueSizeActive}%`) ||
                            mark.fontSize ||
                            data.valueSize ||
                            '1rem',

                        color: (isCurrentSelected && widget.data.textColorActive) || mark.textColor || data.textColor,
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
                    {(() => {
                        // Determine icon source: If active → iconActive or iconSmallActive, otherwise mark.icon
                        const iconSource =
                            (isCurrentSelected && (widget.data.iconActive || widget.data.iconSmallActive)) ||
                            mark.icon ||
                            'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

                        // Determine icon color: Priority: iconColorActive → mark.iconColor → data.iconColor → defaultIconColor
                        const iconColor =
                            (isCurrentSelected && widget.data.iconColorActive && widget.data.iconColorActive !== ''
                                ? widget.data.iconColorActive
                                : null) ||
                            (mark.iconColor && mark.iconColor !== '' ? mark.iconColor : null) ||
                            (data.iconColor && data.iconColor !== '' ? data.iconColor : null) ||
                            defaultIconColor ||
                            undefined;

                        return (
                            <img
                                data-img="active"
                                src={iconSource}
                                alt=""
                                style={{
                                    position: 'relative',

                                    // Icon size: Use active size when active, otherwise value size
                                    width:
                                        isCurrentSelected && typeof widget.data.iconSizeActive === 'number'
                                            ? `${(24 * widget.data.iconSizeActive) / 100}px`
                                            : `${(24 * mark.iconWidth) / 100}px`,
                                    /* height:
                                        isCurrentSelected && typeof widget.data.iconSizeActive === 'number'
                                            ? `${(24 * widget.data.iconSizeActive) / 100}px`
                                            : `${(24 * mark.iconHeight) / 100}px`, */

                                    // Icon color: Consolidated logic via getIconColorStyles()
                                    ...getIconColorStyles(iconSource, iconColor),
                                }}
                            />
                        );
                    })()}
                </Box>
            </Box>
        </SliderMarkLabel>
    ) : null;
};

export default CollectionMark;
