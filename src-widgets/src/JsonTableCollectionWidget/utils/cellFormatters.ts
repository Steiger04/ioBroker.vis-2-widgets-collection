/**
 * Cell-content formatting registry for JsonTableCollection.
 *
 * @module JsonTableCollectionWidget/utils/cellFormatters
 * @remarks
 * The deep module behind cell rendering. Each format type (number, date, boolean,
 * string, image) is a descriptor behind one interface; `buildCellContent` is a
 * registry lookup plus a conditional-style merge. Adding a format type means
 * adding one descriptor — `TableCellRenderer` and the dispatch no longer need
 * editing.
 *
 * The pure format primitives (`formatNumberValue`, `formatDateValue`, …) live in
 * `./formatters`; this module composes them into per-type descriptors and owns the
 * image-descriptor mapping shared with the column editor's live preview.
 */

import type { CellImageContent, ColumnConfigEntry, ColumnFormatConfig, ColumnFormatType } from '../types';
import {
    formatBooleanValue,
    formatDateValue,
    formatNumberValue,
    formatStringValue,
    normalizeToIsoDate,
} from './formatters';
import { evaluateLogic } from './jsonLogicEngine';
import { gradientColor } from '../../lib/helper/gradientColor';
import { isRenderableAsImage } from '../../lib/helper/isImageReference';
import { IMAGE_FORMAT_DEFAULTS } from './columnConfig';

// ── Result shapes ───────────────────────────────────────────────────

/** What a format-type descriptor produces for one raw cell value. */
export interface FormatResult {
    /** Display text for text-bearing format types. */
    displayValue?: string;
    /** Graphic descriptor; when set, the cell renders a graphic instead of text. */
    image?: CellImageContent;
    /** Format-type-static text styles (e.g. string bold/italic/size/colour). */
    textSx?: Record<string, unknown>;
}

/** Fully resolved cell content consumed by `TableCellRenderer`. */
export interface CellContent {
    displayValue: string;
    textSx: Record<string, unknown>;
    bgSx: Record<string, unknown>;
    /** True when an object/array value was stringified to a shortened form. */
    isTruncated?: boolean;
    /** When set, the cell renders a graphic instead of text. */
    image?: CellImageContent;
}

/** Context handed to each descriptor. */
interface FormatContext {
    fmt: ColumnFormatConfig;
    /** Default string conversion of the raw value (JSON for objects, else String). */
    defaultDisplay: string;
}

// ── Shared image-descriptor primitive ───────────────────────────────

/**
 * Map an image format config to a {@link CellImageContent} for a given source.
 *
 * Shared by the cell renderer (source = the raw cell value) and the column
 * editor's live preview (source = a sample SVG). Centralising this removes a
 * verbatim duplication of the `cfg.format → CellImageContent` mapping.
 */
export function buildImageContent(src: string, fmt: ColumnFormatConfig): CellImageContent {
    return {
        src,
        size: fmt.imageSize ?? IMAGE_FORMAT_DEFAULTS.size,
        objectFit: fmt.imageObjectFit ?? IMAGE_FORMAT_DEFAULTS.objectFit,
        variant: fmt.imageVariant ?? 'square',
        bgColor: fmt.imageBgColor || undefined,
        borderColor: fmt.imageBorderColor || undefined,
        borderWidth: fmt.imageBorderWidth,
        tint: fmt.imageTint || undefined,
        tooltip: fmt.imageTooltip !== false ? src : undefined,
        showBroken: fmt.imageShowBroken !== false,
    };
}

// ── String static visual style ──────────────────────────────────────

/**
 * Static text styles contributed by the string format config. These are the
 * base layer; conditional cell rules (see {@link applyConditionalStyle}) override
 * them where they apply.
 */
function staticStringStyle(fmt: ColumnFormatConfig): Record<string, unknown> {
    const textSx: Record<string, unknown> = {};
    if (fmt.stringFontWeight === 'bold') {
        textSx.fontWeight = 'bold';
    }
    if (fmt.stringFontStyle === 'italic') {
        textSx.fontStyle = 'italic';
    }
    if (fmt.stringFontSize) {
        textSx.fontSize = `${fmt.stringFontSize}px`;
    }
    if (fmt.stringTextColor) {
        textSx.color = fmt.stringTextColor;
    }
    return textSx;
}

// ── Formatter descriptor registry ───────────────────────────────────

/** One descriptor per format type. */
export interface FormatterDescriptor {
    /** Produce the format result for a raw cell value. */
    format(rawValue: unknown, ctx: FormatContext): FormatResult;
}

export const FORMATTERS: Record<ColumnFormatType, FormatterDescriptor> = {
    number: {
        format: (rawValue, ctx) => {
            if (typeof rawValue === 'number' || (typeof rawValue === 'string' && !isNaN(Number(rawValue)))) {
                return {
                    displayValue: formatNumberValue(Number(rawValue), {
                        decimals: ctx.fmt.numberDecimals,
                        prefix: ctx.fmt.numberPrefix,
                        suffix: ctx.fmt.numberSuffix,
                        thousands: ctx.fmt.numberThousandsSeparator,
                    }),
                };
            }
            return {}; // non-numeric keeps the default display value
        },
    },
    date: {
        format: (rawValue, ctx) => ({
            displayValue: formatDateValue(rawValue, ctx.fmt.dateFormat, ctx.fmt.dateInputFormat),
        }),
    },
    boolean: {
        format: (rawValue, ctx) => ({
            displayValue: formatBooleanValue(rawValue, ctx.fmt.booleanTrue, ctx.fmt.booleanFalse),
        }),
    },
    string: {
        format: (_rawValue, ctx) => ({
            displayValue: formatStringValue(ctx.defaultDisplay, ctx.fmt),
            textSx: staticStringStyle(ctx.fmt),
        }),
    },
    image: {
        format: (rawValue, ctx) => {
            if (rawValue != null && isRenderableAsImage(rawValue)) {
                // `rawValue` is narrowed to a non-empty string by isRenderableAsImage.
                return { image: buildImageContent(rawValue.trim(), ctx.fmt), displayValue: '' };
            }
            if (rawValue == null) {
                return { displayValue: '' };
            }
            return {}; // non-renderable non-null → text fallback (default display value)
        },
    },
};

// ── Conditional cell styling ────────────────────────────────────────

/**
 * Evaluate a column's conditional styling rules against a raw value.
 *
 * Returns the background and text styles produced by the matching rules. Rules
 * keep their intra-list priority (lower index wins per property); these styles
 * are merged OVER the format-type-static styles by {@link buildCellContent}, so a
 * conditional rule overrides a static string style on the same property —
 * preserving the previous "conditional beats static" behaviour.
 */
export function applyConditionalStyle(
    cfg: ColumnConfigEntry,
    rawValue: unknown,
): { bgSx: Record<string, unknown>; textSx: Record<string, unknown> } {
    const bgSx: Record<string, unknown> = {};
    const textSx: Record<string, unknown> = {};

    if (!cfg.cellStyle || cfg.cellStyle.length === 0) {
        return { bgSx, textSx };
    }

    const stopAfterFirst = !cfg.cellStyleMode || cfg.cellStyleMode === 'first-match';
    const evalValue = cfg.format?.type === 'date' ? normalizeToIsoDate(rawValue, cfg.format.dateInputFormat) : rawValue;

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

    return { bgSx, textSx };
}

// ── Cell content assembly ───────────────────────────────────────────

/**
 * Build the display value, graphic descriptor, and styles for a cell.
 *
 * Replaces the former inline switch in `TableCellRenderer`: it looks the format
 * type up in {@link FORMATTERS}, then merges static ← conditional styles. No
 * config → unstyled default display; config without a format → default display
 * plus conditional styling; config with a format → formatted result plus styling.
 */
export function buildCellContent(rawValue: unknown, cfg?: ColumnConfigEntry): CellContent {
    // Default display conversion; objects are stringified and flagged as truncated.
    let isTruncated = false;
    let defaultDisplay: string;
    if (rawValue == null) {
        defaultDisplay = '';
    } else if (typeof rawValue === 'object') {
        isTruncated = true;
        defaultDisplay = JSON.stringify(rawValue);
    } else {
        defaultDisplay = String(rawValue as string | number | boolean | bigint);
    }

    // No column config at all → unstyled default display (no chip, no graphic).
    if (!cfg) {
        return { displayValue: defaultDisplay, textSx: {}, bgSx: {} };
    }

    // Apply the format-type descriptor when a format is configured.
    let result: FormatResult = {};
    if (cfg.format) {
        try {
            result = FORMATTERS[cfg.format.type].format(rawValue, { fmt: cfg.format, defaultDisplay });
        } catch {
            // Formatting threw → fall back to the default display value, leaving styles empty.
        }
    }

    const displayValue = result.displayValue !== undefined ? result.displayValue : defaultDisplay;
    const staticTextSx = result.textSx ?? {};

    // Conditional rules override the format-type-static styles on conflict.
    const { bgSx, textSx: conditionalTextSx } = applyConditionalStyle(cfg, rawValue);

    return {
        displayValue,
        image: result.image,
        isTruncated,
        textSx: { ...staticTextSx, ...conditionalTextSx },
        bgSx,
    };
}
