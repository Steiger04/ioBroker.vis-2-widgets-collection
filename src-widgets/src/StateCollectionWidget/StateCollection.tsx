import { Avatar, Box, Button, Typography } from '@mui/material';
import React, { useCallback, useState, useContext } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import CollectionChangeDialog from '../components/CollectionChangeDialog';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useHtmlValue from '../hooks/useHtmlValue';
import useStyles from '../hooks/useStyles';
import useValueState from '../hooks/useValueState';

function StateCollection(): React.ReactElement {
    // const contentRef = useRef<HTMLDivElement>(null);
    // const [setContentRef] = useState<HTMLSpanElement | null>(null);
    const {
        widget,
        widget: {
            data: { oidObject },
        },
    } = useContext(CollectionContext);
    const { textStyles, fontStyles } = useStyles(widget.style);
    const { data, widgetStates } = useData('oid');
    const { value: oidValue, setValueState: setOidValueState } = useValueState('oid');
    const [open, setOpen] = useState(false);

    const oidType = oidObject?.type;
    // const oidType = widget.data.oidType;

    const onlyStates = widget.data.onlyStates;

    const htmlValue = useHtmlValue(oidValue, widget, data);
    const contentValue = htmlValue !== undefined && htmlValue !== null ? String(htmlValue) : '';

    const downHandler = (): void => {
        if (onlyStates && Number(widget.data.values_count) === 2 && widget.data.statePushButton) {
            setTimeout(() => setOidValueState(widget.data.value1), 0);
        }
    };

    const upHandler = (): void => {
        if (onlyStates && Number(widget.data.values_count) === 2 && widget.data.statePushButton) {
            setTimeout(() => setOidValueState(widget.data.value2), 0);
        }
    };

    const clickHandler = useCallback(() => {
        if (!onlyStates) {
            setOpen(true);
            return;
        }

        switch (Number(widget.data.values_count)) {
            case 1:
                setOidValueState(widget.data.value1);
                break;
            case 2:
                !widget.data.statePushButton && String(oidValue) === String(widget.data.value1)
                    ? setOidValueState(widget.data.value2)
                    : setOidValueState(widget.data.value1);
                break;
            default:
                setOpen(true);
                break;
        }
    }, [
        oidValue,
        onlyStates,
        widget.data.values_count,
        widget.data.statePushButton,
        widget.data.value1,
        widget.data.value2,
        setOidValueState,
    ]);

    const StateButton = (
        <Button
            disabled={widget.data.onlyDisplay}
            onClick={clickHandler}
            onMouseDown={downHandler}
            onMouseUp={upHandler}
            onMouseOut={upHandler}
            onTouchStart={downHandler}
            onTouchEnd={upHandler}
            sx={{
                width: '100%',
                height: '100%',

                color: data.iconColorActive || data.iconColor || data.textColorActive || data.textColor,
                '&:hover': {
                    bgcolor: 'transparent',
                    filter:
                        (data.iconHoverActive && `brightness(${data.iconHoverActive})`) ||
                        (data.iconHover && `brightness(${data.iconHover})`),
                },
            }}
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
                {!widget.data.noIcon && (data.iconActive || data.icon) && (
                    <Box
                        sx={{
                            // overflow: "hidden",

                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexGrow: 1,

                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <Avatar
                            variant="square"
                            src={data.iconActive || data.icon || undefined}
                            imgProps={{
                                style: {
                                    objectFit: 'contain',
                                },
                            }}
                            sx={{
                                overflow: 'hidden',

                                width:
                                    (typeof data.iconSizeOnly === 'number' &&
                                        `calc(100% * ${data.iconSizeOnly} / 100)`) ||
                                    '100%',
                                height:
                                    (typeof data.iconSizeOnly === 'number' &&
                                        `calc(100% * ${data.iconSizeOnly} / 100)`) ||
                                    '100%',

                                left: `calc(0px + ${data.iconXOffset})`,
                                top: `calc(0px - ${data.iconYOffset})`,

                                bgcolor: 'transparent',
                                color: data.iconColorActive || data.iconColor,
                                filter:
                                    (data.iconActive || data.icon) && (data.iconColorActive || data.iconColor)
                                        ? 'drop-shadow(0px 10000px 0)'
                                        : undefined,
                                transform:
                                    (data.iconActive || data.icon) && (data.iconColorActive || data.iconColor)
                                        ? 'translateY(-10000px)'
                                        : undefined,
                            }}
                        />
                    </Box>
                )}

                {!widget.data.noValue && (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexGrow: 1,

                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <Typography
                            // ref={contentRef}
                            // ref={ref => setContentRef(ref)}
                            variant="body2"
                            sx={{
                                ...fontStyles,
                                ...textStyles,
                                fontSize: data.valueSizeActive || data.valueSize,
                                bgcolor: 'transparent',
                                color: data.textColorActive || data.textColor,
                                textTransform: 'none',
                            }}
                            dangerouslySetInnerHTML={{
                                __html: contentValue,
                            }}
                        />
                    </Box>
                )}
            </Box>
        </Button>
    );

    const isValidType = oidType === 'boolean' || oidType === 'number' || oidType === 'string' || oidType === 'mixed';

    return (
        <>
            {open && (
                <CollectionChangeDialog
                    data={{ sampleInterval: null, sampleIntervalValue: null, delay: 100 }}
                    widgetStates={widgetStates}
                    open={open}
                    closeHandler={() => setOpen(false)}
                />
            )}
            <CollectionBase
                isValidType={isValidType}
                data={data}
                oidValue={oidValue}
            >
                <CollectionBaseImage
                    data={data}
                    widget={widget}
                />
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {StateButton}
                </Box>
            </CollectionBase>
        </>
    );
}

export default StateCollection;
