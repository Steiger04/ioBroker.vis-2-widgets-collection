import { Box } from '@mui/material';
import React, { useRef, useEffect } from 'react';

import { LinearGauge, RadialGauge } from 'canvas-gauges';

const TransparentImg = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

const Gauge = props => {
    const gaugeRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        if (gaugeRef.current === null || gaugeRef.current.options.gaugeType !== props.gaugeType) {
            const options = Object.assign({}, props, {
                renderTo: canvasRef.current,
            });

            switch (props.gaugeType) {
                case 'radial':
                    if (gaugeRef.current !== null) gaugeRef.current.destroy();
                    gaugeRef.current = new RadialGauge(options).draw();
                    break;

                case 'linear':
                    if (gaugeRef.current !== null) gaugeRef.current.destroy();
                    gaugeRef.current = new LinearGauge(options).draw();
                    break;

                default:
                    break;
            }
        }
    }, [props]);

    useEffect(() => {
        if (gaugeRef.current !== null && props.width && props.height) {
            if (props.width > 30 && props.height > 30) {
                gaugeRef.current.value = props.value;
                gaugeRef.current.update(props);
            }
        }
    }, [props]);

    const iconSize =
        Boolean(props.gaugeWidgetData.iconSize) || props.gaugeWidgetData.iconSize === 0
            ? `${props.gaugeWidgetData.iconSize}%`
            : null;

    const segment = props.gaugeSegment;
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <img
                alt=""
                src={segment?.state.icon || props.gaugeData.icon || TransparentImg}
                style={{
                    position: 'relative',

                    width: Number(segment?.state.iconSize) ? `${segment.state.iconSize}%` : iconSize || '50%',
                    height: Number(segment?.state.iconSize) ? `${segment.state.iconSize}%` : iconSize || '50%',

                    boxSizing: 'border-box',
                    objectFit: props.gaugeWidgetData.gaugeIconFit,
                    top:
                        (!!segment && `calc(0px - ${segment.state.iconYOffset})`) ||
                        (props.gaugeWidgetData.iconYOffset !== '0px' &&
                            `calc(0px - ${props.gaugeWidgetData.iconYOffset})`) ||
                        '0px',
                    left:
                        (!!segment && `calc(0px + ${segment.state.iconXOffset})`) ||
                        (props.gaugeWidgetData.iconXOffset !== '0px' &&
                            `calc(0px + ${props.gaugeWidgetData.iconXOffset})`) ||
                        '0px',

                    color: segment?.state.iconColor || props.gaugeData.iconColor,
                    filter: (segment?.state.iconColor || props.gaugeData.iconColor) && 'drop-shadow(0px 10000px 0)',
                    transform: (segment?.state.iconColor || props.gaugeData.iconColor) && 'translateY(-10000px)',
                }}
            />
            <canvas
                id="my-canvas"
                ref={canvasRef}
                style={{
                    position: 'absolute',
                }}
            />
        </Box>
    );
};

export default Gauge;
