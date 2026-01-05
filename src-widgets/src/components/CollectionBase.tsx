/**
 * Layout wrapper used by most Collection widgets.
 *
 * @module components/CollectionBase
 * @remarks
 * This component renders:
 * - optional header/footer Typography
 * - a framed Paper container
 * - an inner Paper for the actual widget content
 *
 * Header/footer text is applied via `innerHTML` to support rich text from vis.
 */

import { Box, Paper, Typography } from '@mui/material';
import { useRef, forwardRef, useImperativeHandle, useState, useContext, useEffect, type RefObject } from 'react';
import { CollectionContext } from '../components/CollectionProvider';
import useSignals from '../hooks/useSignals';
import useSize from '../hooks/useSize';
import useStyles from '../hooks/useStyles';
import { type StyleData } from '../hooks/useData';
import { type SxProps, type Theme } from '@mui/material/styles';

/**
 * Props for {@link module:components/CollectionBase.default}.
 */
interface CollectionBaseProps {
    /** Inner widget content. */
    children?: JSX.Element | JSX.Element[] | (JSX.Element | null)[] | null;
    /** Presentation data produced by {@link module:hooks/useData}. */
    data: StyleData;
    /** Current OID value (used for footer fallback). */
    oidValue?: ioBroker.StateValue;
    /** Whether the currently selected OID type is valid for the widget. */
    isValidType?: boolean;
    /** Whether active background styling should be applied. */
    bgActive?: boolean;
    /** Additional `sx` passed to the inner Paper. */
    sx?: SxProps<Theme>;
}

/**
 * Imperative handle for accessing key DOM nodes.
 */
export interface CollectionBaseHandle {
    paper0: HTMLDivElement | null;
    paper1: HTMLDivElement | null;
    header: HTMLSpanElement | null;
}

/**
 * Base frame for Collection widgets.
 *
 * @param props - Component props.
 * @param baseRef - Optional ref for imperative access.
 * @returns The widget frame.
 */
const CollectionBase = forwardRef<CollectionBaseHandle, CollectionBaseProps>(
    ({ children, data, oidValue = null, isValidType = true, bgActive = true, sx = {} }, baseRef) => {
        const paper0Ref = useRef<HTMLDivElement>(null);
        const paper1Ref = useRef<HTMLDivElement>(null);
        const [ref, setRef] = useState<RefObject<HTMLDivElement> | null>(null);
        const [headerRef, setHeaderRef] = useState<HTMLElement | null>(null);
        const headerRef1 = useRef<HTMLSpanElement | null>(null);
        const [footerRef, setFooterRef] = useState<HTMLElement | null>(null);
        const context = useContext(CollectionContext);
        if (!context) {
            throw new Error('CollectionBase must be used within CollectionProvider');
        }
        const { wrappedContent, widget } = context;

        const oidObject = widget.data.oidObject;
        const { backgroundStyles, borderStyles } = useStyles(widget.style);

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
                                mt: (widget.data.basePadding ?? 8) / 2,
                                mb: -(widget.data.basePadding ?? 8) / 2,
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
                                elevation={widget.data.outlined ? 0 : Number(widget.data.baseElevation) || 0}
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
                                mt: -(widget.data.basePadding ?? 8) / 2,
                                mb: (widget.data.basePadding ?? 8) / 2,
                            }}
                        >
                            <Typography
                                ref={setFooterRef}
                                noWrap
                                variant="body2"
                                sx={{
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
