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
import { useRef, useContext, useEffect, useMemo, useState, type JSX } from 'react';
import { CollectionContext } from '../components/CollectionProvider';
import useSignals from '../hooks/useSignals';
import useSize from '../hooks/useSize';
import useStyles from '../hooks/useStyles';
import { type StyleData } from '../hooks/useData/types';
import { type SxProps, type Theme } from '@mui/material/styles';
import { gradientColor } from '../lib/helper/gradientColor';
import { gradientTextSx } from '../lib/helper/gradientTextSx';
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
    /**
     * Whether the currently selected OID type is valid for the widget. When `false` the frame
     * renders the invalid-type notice and NO children — bodies therefore need no type guard of
     * their own (neither around their content nor in a control's `disabled`).
     */
    isValidType?: boolean;
    /** Whether active background styling should be applied. */
    bgActive?: boolean;
    /**
     * Keeps the frame header out of the frame, laid out exactly like `noHeader` — for a host
     * that shows the header text elsewhere (the Dialog's "header as title").
     */
    hideHeader?: boolean;
    /** Additional `sx` passed to the inner Paper. */
    sx?: SxProps<Theme>;
}

/**
 * Base frame for Collection widgets.
 *
 * @returns The widget frame.
 */
function CollectionBase({
    children,
    data,
    oidValue = null,
    isValidType = true,
    bgActive = true,
    hideHeader = false,
    sx = {},
}: CollectionBaseProps): JSX.Element {
    // Consolidated refs
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

    // The frame header is absent when the widget opts out or the host shows it elsewhere.
    const headerHidden = widget.data.noHeader || hideHeader;

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
            oidValue || oidValue === 0 || String(oidValue) === 'false' ? `${oidValue}${oidObject?.unit ?? ''}` : '';

        return data.footer || data.alias || data.value || valueWithUnit || '';
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

            ...backgroundStyles,

            background: wrappedContent ? data.frameBackground : data.frameBackground || 'transparent',

            backgroundColor: wrappedContent
                ? gradientColor(data.frameBackground)
                    ? undefined
                    : data.frameBackground
                : gradientColor(data.frameBackground)
                  ? 'transparent'
                  : data.frameBackground,

            borderColor: !wrappedContent ? data.frameBackground || borderStyles?.['border-color'] : '',
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

            background:
                bgActive && wrappedContent
                    ? data.background
                    : bgActive
                      ? data.background || 'transparent'
                      : wrappedContent
                        ? undefined
                        : 'transparent',

            borderColor: !wrappedContent ? data.background || borderStyles?.['border-color'] : '',

            borderRadius: widget.data.circle || widget.data.ellipse ? '50%' : undefined,

            ...sx,
        });
    }, [
        width,
        height,
        bgActive,
        wrappedContent,
        data.background,
        borderStyles,
        widget.data.circle,
        widget.data.ellipse,
        sx,
    ]);

    // Setup header effect
    useEffect(() => {
        if (headerHidden || !headerRef.current) {
            return;
        }
        headerRef.current.innerHTML = data.header!;
    }, [data.header, headerHidden]);

    // Setup footer effect
    useEffect(() => {
        if (widget.data.noFooter || !footerRef.current) {
            return;
        }
        footerRef.current.innerHTML = String(footerValue);
    }, [footerValue, widget.data.noFooter]);

    return (
        <Paper
            className="BASE-PAPER-0"
            square={widget.data.squaredCorner}
            variant={widget.data.outlinedFrame ? 'outlined' : 'elevation'}
            sx={paper0Sx}
        >
            {!!isValidType && (
                <>
                    <Box
                        className="BASE-HEADER"
                        sx={{
                            width: !headerHidden ? '100%' : '0%',
                            height: headerHidden ? '0%' : 'auto',
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
                                ...gradientTextSx(data.textColorCm),
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
                                ...gradientTextSx(data.textColorCm),
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
}

export default CollectionBase;
