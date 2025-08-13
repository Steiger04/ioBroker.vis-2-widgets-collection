import { Box, Paper, Typography } from '@mui/material';
import { useRef, forwardRef, useImperativeHandle, useState, useContext, useEffect, type RefObject } from 'react';
import { CollectionContext } from '../components/CollectionProvider';
import useSignals from '../hooks/useSignals';
import useSize from '../hooks/useSize';
import useStyles from '../hooks/useStyles';

interface CollectionBaseProps {
    children?: JSX.Element | JSX.Element[] | null;
    data: Record<string, any>;
    oidValue?: any;
    isValidType?: boolean;
    bgActive?: boolean;
    sx?: Record<string, any>;
}

const CollectionBase = forwardRef<any, CollectionBaseProps>(
    ({ children, data, oidValue = null, isValidType = true, bgActive = true, sx = {} }, baseRef) => {
        const paper0Ref = useRef<HTMLDivElement>(null);
        const paper1Ref = useRef<HTMLDivElement>(null);
        const [ref, setRef] = useState<RefObject<HTMLDivElement> | null>(null);
        const [headerRef, setHeaderRef] = useState<HTMLElement | null>(null);
        const headerRef1 = useRef<HTMLSpanElement | null>(null);
        const [footerRef, setFooterRef] = useState<HTMLElement | null>(null);
        const { wrappedContent, widget } = useContext(CollectionContext);

        // Sicherer Zugriff auf oidObject - könnte nicht existieren bei einigen Widgets
        const oidObject = (widget.data as any).oidObject;
        const { backgroundStyles, borderStyles, textStyles, fontStyles } = useStyles(widget.style);

        // Fallback-Ref für useSize falls ref noch null ist
        const fallbackRef = useRef<HTMLDivElement>(null);
        const { width, height } = useSize(ref || fallbackRef);

        const oidValueUnit =
            (oidValue || oidValue === 0 || oidValue === false) &&
            `${oidValue}${oidObject?.unit === undefined ? '' : oidObject?.unit}`;

        useSignals();

        const oid = oidObject?._id;

        const footerValue = data.footer || data.alias || data.value || oidValueUnit || '';

        useEffect(() => {
            if (widget.data.noFooter) {
                return;
            }
            if (footerRef) {
                footerRef.innerHTML = footerValue;
            }
        }, [footerValue, widget.data.noFooter, footerRef]);

        useEffect(() => {
            if (widget.data.noHeader) {
                return;
            }
            if (headerRef) {
                headerRef.innerHTML = data.header;
            }
        }, [data.header, widget.data.noHeader, headerRef]);

        useImperativeHandle(baseRef, () => ({
            get paper0() {
                return paper0Ref?.current;
            },
            get paper1() {
                return paper1Ref?.current;
            },

            get header() {
                return headerRef1?.current;
            },
        }));

        return (
            <Paper
                ref={paper0Ref}
                className="BASE-PAPER-0"
                square={widget.data.squaredCorner}
                variant={widget.data.outlinedFrame ? 'outlined' : 'elevation'}
                sx={{
                    overflow: 'hidden',

                    width: '100%',
                    height: '100%',

                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',

                    ...backgroundStyles,
                    // ...borderStyles,
                    border: !wrappedContent ? null : borderStyles.border,
                    borderWidth: !wrappedContent ? null : borderStyles.borderWidth,
                    borderStyle: !wrappedContent ? null : borderStyles.borderStyle,
                    borderRadius: !wrappedContent ? null : borderStyles.borderRadius,
                    borderColor: !wrappedContent
                        ? data.frameBackgroundColorActive || data.frameBackgroundColor || borderStyles.borderColor
                        : borderStyles.borderColor,
                    background: wrappedContent
                        ? widget.data.frameBackgroundColorActive ||
                          data.frameBackgroundColorActive ||
                          data.frameBackgroundColor ||
                          widget.data.frameBackgroundActive ||
                          data.frameBackgroundActive ||
                          data.frameBackground
                        : 'transparent',
                }}
            >
                {!!isValidType && (
                    <>
                        <Box
                            sx={{
                                width: !widget.data.noHeader ? '100%' : '0%',
                                height: widget.data.noHeader ? '0%' : 'auto',
                                mt: widget.data.basePadding / 2,
                                mb: -widget.data.basePadding / 2,
                            }}
                        >
                            <Typography
                                // ref={setHeaderRef}
                                ref={ref => {
                                    setHeaderRef(ref);
                                    headerRef1.current = ref;
                                }}
                                noWrap
                                variant="body2"
                                sx={{
                                    ...fontStyles,
                                    ...textStyles,
                                    fontSize: data.headerSize,
                                    color: widget.data.textColor || data.textColorActive || data.textColor,
                                }}
                            />
                        </Box>

                        <Box
                            className="BASE-BOX-1"
                            ref={setRef}
                            sx={{
                                overflow: 'hidden',

                                p: widget.data.basePadding,

                                width: '100%',
                                height: '100%',

                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Paper
                                ref={paper1Ref}
                                className="BASE-PAPER-1"
                                elevation={Number(widget.data.baseElevation) || 0}
                                square={!widget.data.basePadding || widget.data.squaredCorner}
                                variant={widget.data.outlined ? 'outlined' : 'elevation'}
                                sx={{
                                    overflow: 'hidden',

                                    width: width,
                                    height: height,

                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                    borderColor: !wrappedContent
                                        ? data.backgroundColorActive || data.backgroundColor || borderStyles.borderColor
                                        : borderStyles.borderColor,
                                    background: wrappedContent
                                        ? widget.data.backgroundColorActive ||
                                          (bgActive && data.backgroundColorActive) ||
                                          data.backgroundColor ||
                                          widget.data.backgroundActive ||
                                          (bgActive && data.backgroundActive) ||
                                          data.background
                                        : 'transparent',
                                    borderRadius: widget.data.circle || widget.data.ellipse ? '50%' : null,
                                    ...sx,
                                }}
                            >
                                {children}
                            </Paper>
                        </Box>

                        <Box
                            sx={{
                                width: !widget.data.noFooter ? '100%' : '0%',
                                height: widget.data.noFooter ? '0%' : 'auto',
                                mt: -widget.data.basePadding / 2,
                                mb: widget.data.basePadding / 2,
                            }}
                        >
                            <Typography
                                ref={setFooterRef}
                                noWrap
                                variant="body2"
                                sx={{
                                    ...fontStyles,
                                    ...textStyles,
                                    fontSize: data.footerSize,
                                    color: widget.data.textColor || data.textColorActive || data.textColor,
                                }}
                            />
                        </Box>
                    </>
                )}
                {!isValidType && (
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',

                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            color="primary.main"
                            variant="body2"
                            sx={{
                                p: 1,
                                width: '100%',
                                textAlign: 'center',
                            }}
                        >
                            {oid ? `${oid} has an invalid type!` : 'Please select a valid object ID'}
                        </Typography>
                    </Box>
                )}
            </Paper>
        );
    },
);

CollectionBase.displayName = 'CollectionBase';
export default CollectionBase;
