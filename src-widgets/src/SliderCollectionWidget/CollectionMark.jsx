import { SliderMarkLabel } from '@mui/material';
import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';

const CollectionMark = ({ marks, sliderOrientation, ...props }) => {
    const [ref, setRef] = useState(null);

    const index = props['data-index'];
    const mark = props.ownerState.marks[index];

    // console.log("props.ownerState.marks", props.ownerState.marks);

    useEffect(() => {
        if (ref) {
            ref.innerHTML = mark.label;
        }
    }, [mark.label, ref]);

    return marks ? (
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

                            color: mark.iconColor || null,
                            filter: mark.iconColor ? 'drop-shadow(0px 10000px 0)' : null,
                            transform: mark.iconColor ? 'translateY(-10000px)' : null,
                        }}
                    />
                </Box>
            </Box>
        </SliderMarkLabel>
    ) : null;
};

export default CollectionMark;
