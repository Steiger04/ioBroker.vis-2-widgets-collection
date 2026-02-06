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
import { useRef, forwardRef, useImperativeHandle, useContext, useEffect, useMemo, useState } from 'react';
import { CollectionContext } from '../components/CollectionProvider';
import useSignals from '../hooks/useSignals';
import useSize from '../hooks/useSize';
import useStyles from '../hooks/useStyles';
import { type StyleData } from '../hooks/useDataNew/types';
import { type SxProps, type Theme } from '@mui/material/styles';
import { gradientColor } from '../lib/helper/gradientColor';
import { cleanSx } from '../lib/helper/sxUtils';

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
        // Consolidated refs
        const paper0Ref = useRef<HTMLDivElement>(null);
        const paper1Ref = useRef<HTMLDivElement>(null);
        // const containerRef = useRef<HTMLDivElement>(null);
        const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);
        const headerRef = useRef<HTMLSpanElement>(null);
        const footerRef = useRef<HTMLDivElement>(null);

        // Get context
        const context = useContext(CollectionContext);
        if (!context) {
            throw new Error('CollectionBase must be used within CollectionProvider');
        }

        const { wrappedContent, widget } = context;

        // Get styles
        const { backgroundStyles, borderStyles } = useStyles(widget.style);

        // Calculate dimensions
        const { width, height } = useSize(containerRef);

        // Use signals for reactive updates
        useSignals();

        // Extract data
        const oidObject = widget.data.oidObject;
        const oid = oidObject?._id;

        // Calculate footer value with proper fallback using nullish coalescing
        const footerValue = useMemo(() => {
            if (widget.data.noFooter) {
                return '';
            }

            const valueWithUnit =
                oidValue || oidValue === 0 || oidValue === false ? `${oidValue}${oidObject?.unit ?? ''}` : '';

            return data.footer || data.alias || String(data.value) || valueWithUnit || '';
        }, [data.footer, data.alias, data.value, oidValue, oidObject?.unit, widget.data.noFooter]);

        // Build memoized sx object for outer Paper
        const paper0Sx = useMemo((): SxProps<Theme> | undefined => {
            return cleanSx({
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',

                // Spread background styles
                ...backgroundStyles,

                // Background color
                background: wrappedContent ? data.frameBackground : 'transparent',
                borderColor: !wrappedContent ? data.frameBackground || borderStyles?.['border-color'] : '',

                // Conditional border properties
                /* ...{
                    'border-width': borderStyles?.['border-width'],
                    'border-style': borderStyles?.['border-style'],
                    'border-radius': borderStyles?.['border-radius'],
                }, */
            });
        }, [backgroundStyles, borderStyles, data.frameBackground, wrappedContent]);

        // Build memoized sx object for inner Paper
        const paper1Sx = useMemo((): SxProps<Theme> | undefined => {
            return cleanSx({
                overflow: 'hidden',
                width,
                height,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                background: wrappedContent ? bgActive && data.background : 'transparent',
                borderColor: !wrappedContent ? data.background || borderStyles?.['border-color'] : '',

                borderRadius: widget.data.circle || widget.data.ellipse ? '50%' : undefined,

                // Conditional border properties
                /* ...{
                    'border-width': borderStyles?.['border-width'],
                    'border-style': borderStyles?.['border-style'],
                }, */
                ...sx,
            });
        }, [
            width,
            height,
            wrappedContent,
            data.background,
            borderStyles,
            bgActive,
            widget.data.circle,
            widget.data.ellipse,
            sx,
        ]);

        // Setup header effect
        useEffect(() => {
            if (widget.data.noHeader || !headerRef.current) {
                return;
            }
            headerRef.current.innerHTML = data.header!;
        }, [data.header, widget.data.noHeader]);

        // Setup footer effect
        useEffect(() => {
            if (widget.data.noFooter || !footerRef.current) {
                return;
            }
            footerRef.current.innerHTML = footerValue;
        }, [footerValue, widget.data.noFooter]);

        useImperativeHandle(baseRef, () => ({
            get paper0() {
                return paper0Ref?.current ?? null;
            },
            get paper1() {
                return paper1Ref?.current ?? null;
            },
            get header() {
                return headerRef?.current ?? null;
            },
        }));

        return (
            <Paper
                ref={paper0Ref}
                className="BASE-PAPER-0"
                square={widget.data.squaredCorner}
                variant={widget.data.outlinedFrame ? 'outlined' : 'elevation'}
                sx={paper0Sx}
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
                                ref={headerRef}
                                noWrap
                                variant="body2"
                                sx={{
                                    fontSize: data.headerSize,
                                    background: gradientColor(data.textColorCm),
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    color: gradientColor(data.textColorCm) ? 'transparent' : data.textColorCm,
                                }}
                            />
                        </Box>

                        <Box
                            className="BASE-BOX-1"
                            ref={setContainerRef}
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
                                sx={paper1Sx}
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
                                ref={footerRef}
                                noWrap
                                variant="body2"
                                sx={{
                                    fontSize: data.footerSize,
                                    background: gradientColor(data.textColorCm),
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    color: gradientColor(data.textColorCm) ? 'transparent' : data.textColorCm,
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
