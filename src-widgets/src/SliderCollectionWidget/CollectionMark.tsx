import { SliderMarkLabel, Box } from '@mui/material';
import React, { useState, useEffect, type FC } from 'react';

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

interface CollectionMarkProps {
    marks: boolean;
    sliderOrientation: 'horizontal' | 'vertical';
    aliasActive?: string;
    activeMarkIndex?: number | null;
    'data-index': number;
    ownerState: {
        marks?: MarkData[];
    };
    [key: string]: any;
}

const CollectionMark: FC<CollectionMarkProps> = ({
    marks,
    sliderOrientation,
    aliasActive,
    activeMarkIndex,
    ...props
}) => {
    const [ref, setRef] = useState<HTMLElement | null>(null);

    const index = props['data-index'];
    // Get the mark data from MUI's ownerState.marks (which contains our sliderMarks)
    const mark = props.ownerState?.marks?.[index];

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
        <SliderMarkLabel
            style={{
                color: 'red',
            }}
            {...props}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: sliderOrientation === 'vertical' ? 'row' : 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    data-font="active"
                    ref={setRef}
                    sx={{
                        flexGrow: 1,
                        pr: sliderOrientation === 'vertical' ? 1 : 0,
                        pb: sliderOrientation === 'vertical' ? 0 : 1,

                        // fontSize: typeof mark.fontSize === "number" && mark.fontSize}%`,
                        fontSize: mark.fontSize,

                        // Use styling based on isCurrentSelected for aliasActive
                        color: mark.textColor,
                        // For debugging: add a visual indication when aliasActive is applied
                        fontWeight: isCurrentSelected && aliasActive ? 'bold' : 'normal',
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
                    <img
                        data-img="active"
                        src={
                            mark.icon ||
                            'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                        }
                        alt=""
                        style={{
                            position: 'relative',
                            width: `${(24 * mark.iconWidth) / 100}px`,
                            height: `${(24 * mark.iconHeight) / 100}px`,

                            color: mark.iconColor || undefined,
                            filter: mark.iconColor ? 'drop-shadow(0px 10000px 0)' : undefined,
                            transform: mark.iconColor ? 'translateY(-10000px)' : undefined,
                        }}
                    />
                </Box>
            </Box>
        </SliderMarkLabel>
    ) : null;
};

export default CollectionMark;
