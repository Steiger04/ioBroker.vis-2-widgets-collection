/**
 * Table cell renderer component for JsonTableCollection.
 *
 * @module JsonTableCollectionWidget/components/TableCellRenderer
 * @remarks
 * Renders a table cell with formatting and conditional styling, by its Column (after the
 * Spalten-Merge, `../columns`).
 */

import { Avatar, Box, Chip, Typography } from '@mui/material';
import { BrokenImage as BrokenImageIcon } from '@mui/icons-material';
import { useMemo, useState } from 'react';

import type { CellImageContent, ColumnConfigEntry } from '../types';
import { buildCellContent, type CellColumn } from '../utils/cellFormatters';
import { paintedCellColor } from '../utils/cellColors';
import { isUrlIcon } from '../../lib/helper/isUrlIcon';

// ── Types ───────────────────────────────────────────────────────────

/**
 * How a cell's Column renders: the configuration its cells render with (`cellConfig`) and
 * how it is read (Effektiver Typ, Datums-Leser) — an `EffectiveColumn` is one.
 */
export type RenderedColumn = CellColumn & Readonly<{ cellConfig: ColumnConfigEntry }>;

/**
 * Props for TableCellRenderer component.
 */
export interface TableCellRendererProps {
    /** Raw cell value from the data source */
    value: unknown;
    /** The cell's Column */
    column: RenderedColumn;
    /** Optional font size for the cell text (e.g., "12px", "1rem") */
    valueSize?: string | null;
}

// ── Component ───────────────────────────────────────────────────────

/**
 * Renders a table cell with formatting and conditional styling.
 *
 * @param props - Component props
 * @param props.value - Raw cell value
 * @param props.column - The cell's Column
 * @param props.valueSize - Optional font size for the cell text
 * @returns JSX element with formatted and styled cell content
 * @example
 * ```tsx
 * <TableCellRenderer value={123.45} column={effectiveColumn} />
 * ```
 */
export function TableCellRenderer({ value, column, valueSize }: TableCellRendererProps): React.JSX.Element {
    const config = column.cellConfig;
    // FIX-P3: Extract isTruncated flag from buildCellContent
    const { displayValue, textSx, bgSx, isTruncated, image } = useMemo(
        () => buildCellContent(value, column.cellConfig, column),
        [value, column],
    );

    // Image columns render a graphic instead of text. The cell box still honours
    // conditional background colours (bgSx); font styles only apply on text fallback.
    if (image) {
        const align = config.align;
        // Image cells default to center alignment unless the column's `align` overrides.
        const justifyContent = align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center';
        // Per-side avatar padding; legacy default `0 8px` when no padding configured.
        const pad = config.format?.imagePadding;
        const padding = pad ? `${pad.top ?? 0}px ${pad.right ?? 0}px ${pad.bottom ?? 0}px ${pad.left ?? 0}px` : '0 8px';
        return (
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent,
                    padding,
                    ...bgSx,
                }}
            >
                <ImageGraphic descriptor={image} />
            </Box>
        );
    }

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                padding: '0 8px', // Padding here ensures background color covers the full cell area
                ...bgSx,
            }}
        >
            <Typography
                variant="body2"
                component={Box}
                title={displayValue}
                sx={{
                    flex: 1,
                    minWidth: 0,
                    lineHeight: 'inherit',
                    ...(valueSize && { fontSize: valueSize }),
                    ...textSx,
                }}
                dangerouslySetInnerHTML={{
                    __html: displayValue ?? '',
                }}
            />
            {/* FIX-P3: Show truncated badge for object/array values */}
            {isTruncated && (
                <Chip
                    label="JSON"
                    size="small"
                    sx={{
                        height: 18,
                        fontSize: '0.65rem',
                        flexShrink: 0,
                        opacity: 0.7,
                    }}
                />
            )}
        </Box>
    );
}

// ── Image graphic renderer ────────────────────────────────────────────

/**
 * Renders a cell graphic described by a {@link CellImageContent} descriptor, using MUI
 * `Avatar` so the shape (`variant`: square / rounded / circular) is configurable.
 *
 * The Avatar root always carries the background colour and the optional border (which
 * follows the `variant` radius — a ring on circular, an edge on square). Three render
 * paths for the content (XSS-safe — never injected via innerHTML):
 * - UTF-8 glyph → `Avatar` with the glyph as content (tint via CSS `color`; untinted it
 *   inherits the cell's text colour).
 * - Any image (SVG or raster) with a tint → two layers: the root (bg + border) plus an
 *   inner masked overlay (`mask-image` + tint background, `mask-mode: alpha`). The tint
 *   colours the shape, the background shows around it; both clipped to the variant.
 * - Everything else (URL / data-URI without tint) → `Avatar` with `src`; `object-fit`
 *   via the `.MuiAvatar-img` class; load errors fall back to a placeholder when
 *   `showBroken` is set.
 *
 * All paths clamp to the cell via `maxWidth/maxHeight: 100%`.
 */
export function ImageGraphic({ descriptor }: { descriptor: CellImageContent }): React.JSX.Element | null {
    const { src, size, objectFit, variant, bgColor, borderColor, borderWidth, tint, tooltip, showBroken } = descriptor;
    const [broken, setBroken] = useState(false);

    if (broken) {
        if (!showBroken) {
            return null;
        }
        return (
            <BrokenImageIcon
                sx={{
                    fontSize: size,
                    maxWidth: '100%',
                    maxHeight: '100%',
                    color: 'text.disabled',
                    opacity: 0.5,
                }}
            />
        );
    }

    // Height-driven square: when the cell/preview height is smaller than `size`, the
    // avatar shrinks proportionally (via aspectRatio) instead of distorting into a rectangle.
    const sizeSx = {
        height: size,
        width: 'auto',
        aspectRatio: '1 / 1',
        maxWidth: '100%',
        maxHeight: '100%',
        flexShrink: 0,
    };
    // Explicit radius per variant: 'rounded' would otherwise resolve to theme.shape.borderRadius
    // (default 4px), which reads as square. 25% is an unambiguously rounded square.
    const borderRadius = variant === 'circular' ? '50%' : variant === 'rounded' ? '25%' : 0;
    // Border renders only with both a colour and a width > 0; it follows the variant radius.
    const border = borderColor && borderWidth ? `${borderWidth}px solid ${borderColor}` : undefined;
    const rootSx = {
        ...sizeSx,
        bgcolor: paintedCellColor(bgColor),
        borderRadius,
        ...(border ? { border } : {}),
    } as const;

    // A glyph is a renderable value that is neither a data URI nor a URL/path.
    const isGlyph = !src.startsWith('data:') && !isUrlIcon(src);
    if (isGlyph) {
        return (
            <Avatar
                variant={variant}
                title={tooltip}
                sx={{
                    ...rootSx,
                    fontSize: size,
                    lineHeight: 1,
                    // Untinted → the cell's text colour; otherwise MUI's image-less avatar
                    // paints the glyph in its placeholder colour (palette.background.default).
                    // `||` like the image path below: an empty tint means no tint.
                    color: tint || 'inherit',
                }}
            >
                {src}
            </Avatar>
        );
    }

    // Image with a tint → two layers: root (bg + border) + inner masked overlay (tint).
    // The variant clips both; cross-origin URLs the browser refuses to mask render empty.
    if (tint) {
        const maskUrl = `url("${src}")`;
        const maskSize = objectFit === 'fill' ? '100% 100%' : objectFit;
        return (
            <Avatar
                variant={variant}
                title={tooltip}
                sx={rootSx}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: tint,
                        WebkitMaskMode: 'alpha',
                        maskMode: 'alpha',
                        WebkitMaskImage: maskUrl,
                        maskImage: maskUrl,
                        WebkitMaskSize: maskSize,
                        maskSize: maskSize,
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskPosition: 'center',
                    }}
                />
            </Avatar>
        );
    }

    // Default → plain image avatar. object-fit applied to the internal img; onError
    // swaps to the broken placeholder.
    return (
        <Avatar
            variant={variant}
            src={src}
            alt={tooltip ?? ''}
            title={tooltip}
            sx={{
                ...rootSx,
                '& .MuiAvatar-img': { objectFit },
            }}
            slotProps={{ img: { onError: () => setBroken(true) } }}
        />
    );
}
