import { SliderMarkLabel, Box } from '@mui/material';
import React, { useState, useEffect, type FC } from 'react';

interface MarkData {
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
    'data-index': number;
    ownerState: {
        marks: MarkData[];
    };
    [key: string]: any;
}

const CollectionMark: FC<CollectionMarkProps> = ({ marks, sliderOrientation, ...props }) => {
    const [ref, setRef] = useState<HTMLElement | null>(null);

    const index = props['data-index'];
    const mark = props.ownerState.marks[index];

    // console.log("props.ownerState.marks", props.ownerState.marks);

    useEffect(() => {
        if (ref && mark?.label) {
            ref.innerHTML = mark.label;
        }
    }, [mark?.label, ref]);

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

                        color: mark.textColor,
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
