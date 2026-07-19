/**
 * Table cell renderer component for JsonTableCollection.
 *
 * @module JsonTableCollectionWidget/components/TableCellRenderer
 * @remarks
 * Renders a table cell with optional formatting and conditional styling.
 * Used for both configured columns (with ColumnConfigEntry) and auto-detected columns.
 */

import { Avatar, Box, Chip, Typography } from '@mui/material';
import { BrokenImage as BrokenImageIcon } from '@mui/icons-material';
import { useMemo, useState } from 'react';

import type { ColumnConfigEntry, ImageObjectFit, ImageVariant } from '../types';
import {
    formatBooleanValue,
    formatDateValue,
    formatNumberValue,
    formatStringValue,
    normalizeToIsoDate,
} from '../utils/formatters';
import { evaluateLogic } from '../utils/jsonLogicEngine';
import { gradientColor } from '../../lib/helper/gradientColor';
import { isRenderableAsImage } from '../../lib/helper/isImageReference';
import { isUrlIcon } from '../../lib/helper/isUrlIcon';
import { IMAGE_FORMAT_DEFAULTS } from '../utils/columnConfig';

// ── Types ───────────────────────────────────────────────────────────

/** Descriptor for rendering a cell value as a graphic (format type 'image'). */
export interface CellImageContent {
    /** The visual reference: URL, `data:image/…` URI, or UTF-8 glyph. */
    src: string;
    /** Target render size in pixels (clamped to the cell by maxWidth/maxHeight). */
    size: number;
    /** How the graphic fills its size box. */
    objectFit: ImageObjectFit;
    /** Shape of the rendered avatar (MUI Avatar variant). */
    variant: ImageVariant;
    /** Avatar background colour; undefined → transparent. */
    bgColor?: string;
    /** Avatar border colour; renders only with a width > 0. */
    borderColor?: string;
    /** Avatar border width in px; renders only with a colour set. */
    borderWidth?: number;
    /** Tint colour; applied via a CSS mask over the source's alpha channel. */
    tint?: string;
    /** Hover tooltip (raw value); undefined disables it. */
    tooltip?: string;
    /** Whether to show a placeholder when the graphic fails to load. */
    showBroken: boolean;
}

/**
 * Result of buildCellContent containing display value and styles.
 */
interface CellContent {
    displayValue: string;
    textSx: Record<string, unknown>;
    bgSx: Record<string, unknown>;
    /** FIX-P3: Flag indicating if the value was truncated (e.g., object/array shortened) */
    isTruncated?: boolean;
    /** When set, the cell renders a graphic instead of text. */
    image?: CellImageContent;
}

/**
 * Props for TableCellRenderer component.
 */
export interface TableCellRendererProps {
    /** Raw cell value from the data source */
    value: unknown;
    /** Optional column configuration for formatting and styling */
    config?: ColumnConfigEntry;
    /** Optional font size for the cell text (e.g., "12px", "1rem") */
    valueSize?: string | null;
}

// ── Helper: Build cell content with formatting and styling ───────────

/**
 * Builds display value and styles for a cell based on its configuration.
 *
 * @param rawValue - The raw cell value
 * @param cfg - Column configuration entry (optional)
 * @returns CellContent with displayValue, textSx, and bgSx
 */
export function buildCellContent(rawValue: unknown, cfg?: ColumnConfigEntry): CellContent {
    // FIX-P3: Track if value was truncated (object/array converted to string)
    let isTruncated = false;
    // Image descriptor; set only when format type is 'image' and the value is renderable.
    let image: CellImageContent | undefined;

    // Default display value conversion
    let displayValue =
        rawValue != null
            ? typeof rawValue === 'object'
                ? (() => {
                      isTruncated = true;
                      return JSON.stringify(rawValue);
                  })()
                : String(rawValue as string | number | boolean | bigint)
            : '';

    // Apply formatting if config is present - wrapped in try-catch for resilience
    if (cfg?.format) {
        try {
            switch (cfg.format.type) {
                case 'number':
                    if (typeof rawValue === 'number' || (typeof rawValue === 'string' && !isNaN(Number(rawValue)))) {
                        displayValue = formatNumberValue(Number(rawValue), {
                            decimals: cfg.format.numberDecimals,
                            prefix: cfg.format.numberPrefix,
                            suffix: cfg.format.numberSuffix,
                            thousands: cfg.format.numberThousandsSeparator,
                        });
                    }
                    break;
                case 'date':
                    displayValue = formatDateValue(rawValue, cfg.format.dateFormat, cfg.format.dateInputFormat);
                    break;
                case 'boolean':
                    displayValue = formatBooleanValue(rawValue, cfg.format.booleanTrue, cfg.format.booleanFalse);
                    break;
                // FIX-P2-2: Ensure string type for formatStringValue to prevent runtime errors
                case 'string':
                    displayValue = formatStringValue(String(displayValue), cfg.format);
                    break;
                case 'image': {
                    if (rawValue != null && isRenderableAsImage(rawValue)) {
                        const fmt = cfg.format;
                        const src = rawValue.trim();
                        // Tint is applied to the graphic via a CSS mask (see ImageGraphic);
                        // it works for any image source that is same-origin / a data URI.
                        const tint = fmt.imageTint || undefined;
                        image = {
                            src,
                            size: fmt.imageSize ?? IMAGE_FORMAT_DEFAULTS.size,
                            objectFit: fmt.imageObjectFit ?? IMAGE_FORMAT_DEFAULTS.objectFit,
                            variant: fmt.imageVariant ?? 'square',
                            bgColor: fmt.imageBgColor || undefined,
                            borderColor: fmt.imageBorderColor || undefined,
                            borderWidth: fmt.imageBorderWidth,
                            tint,
                            tooltip: fmt.imageTooltip !== false ? src : undefined,
                            showBroken: fmt.imageShowBroken !== false,
                        };
                        displayValue = ''; // graphic replaces text
                    } else if (rawValue == null) {
                        displayValue = '';
                    }
                    // Non-renderable non-null values keep the default displayValue → text fallback.
                    break;
                }
            }
        } catch {
            // If formatting fails, fall back to default display value
            // This ensures the table doesn't crash due to formatting errors
        }
    }

    // If no config, return simple display value without styling
    if (!cfg) {
        return { displayValue, textSx: {}, bgSx: {} };
    }

    // Apply conditional styling rules
    const stopAfterFirst = !cfg.cellStyleMode || cfg.cellStyleMode === 'first-match';
    const evalValue = cfg.format?.type === 'date' ? normalizeToIsoDate(rawValue, cfg.format.dateInputFormat) : rawValue;
    const bgSx: Record<string, unknown> = {};
    const textSx: Record<string, unknown> = {};

    if (cfg.cellStyle && cfg.cellStyle.length > 0) {
        for (const rule of cfg.cellStyle) {
            if (rule.logic && evaluateLogic(rule.logic, evalValue)) {
                if (rule.backgroundColor && !('background' in bgSx) && !('backgroundColor' in bgSx)) {
                    const bgGradient = gradientColor(rule.backgroundColor);
                    if (bgGradient) {
                        bgSx.background = bgGradient;
                    } else {
                        bgSx.backgroundColor = rule.backgroundColor;
                    }
                }
                if (rule.textColor && !('color' in textSx) && !('background' in textSx)) {
                    const textGradient = gradientColor(rule.textColor);
                    if (textGradient) {
                        textSx.background = textGradient;
                        textSx.backgroundClip = 'text';
                        textSx.WebkitBackgroundClip = 'text';
                        textSx.color = 'transparent';
                    } else {
                        textSx.color = rule.textColor;
                    }
                }
                if (rule.fontWeight && !textSx.fontWeight) {
                    textSx.fontWeight = rule.fontWeight;
                }
                if (rule.fontStyle && !textSx.fontStyle) {
                    textSx.fontStyle = rule.fontStyle;
                }
                if (stopAfterFirst) {
                    break;
                }
            }
        }
    }

    // Apply static string format visual styles as fallback (conditional rules take priority)
    if (cfg.format?.type === 'string') {
        if (cfg.format.stringFontWeight === 'bold' && !textSx.fontWeight) {
            textSx.fontWeight = 'bold';
        }
        if (cfg.format.stringFontStyle === 'italic' && !textSx.fontStyle) {
            textSx.fontStyle = 'italic';
        }
        if (cfg.format.stringFontSize && !textSx.fontSize) {
            textSx.fontSize = `${cfg.format.stringFontSize}px`;
        }
        if (cfg.format.stringTextColor && !('color' in textSx) && !('background' in textSx)) {
            textSx.color = cfg.format.stringTextColor;
        }
    }

    // FIX-P3: Include isTruncated flag in return value
    // `image` is undefined unless the format type is 'image' with a renderable value.
    return { displayValue, textSx, bgSx, isTruncated, image };
}

// ── Component ───────────────────────────────────────────────────────

/**
 * Renders a table cell with optional formatting and conditional styling.
 *
 * @param props - Component props
 * @param props.value - Raw cell value
 * @param props.config - Optional column configuration
 * @param props.valueSize - Optional font size for the cell text
 * @returns JSX element with formatted and styled cell content
 * @example
 * ```tsx
 * // With column config
 * <TableCellRenderer value={123.45} config={columnConfig} />
 *
 * // Without config (auto-detected column)
 * <TableCellRenderer value="simple text" />
 * ```
 */
export function TableCellRenderer({ value, config, valueSize }: TableCellRendererProps): React.JSX.Element {
    // FIX-P3: Extract isTruncated flag from buildCellContent
    const { displayValue, textSx, bgSx, isTruncated, image } = useMemo(
        () => buildCellContent(value, config),
        [value, config],
    );

    // Image columns render a graphic instead of text. The cell box still honours
    // conditional background colours (bgSx); font styles only apply on text fallback.
    if (image) {
        const align = config?.align;
        // Image cells default to center alignment unless the column's `align` overrides.
        const justifyContent = align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center';
        // Per-side avatar padding; legacy default `0 8px` when no padding configured.
        const pad = config?.format?.imagePadding;
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
 * - UTF-8 glyph → `Avatar` with the glyph as content (tint via CSS `color`).
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
        bgcolor: bgColor || 'transparent',
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
                    ...(tint ? { color: tint } : {}),
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
