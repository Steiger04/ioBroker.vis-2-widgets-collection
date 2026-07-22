/**
 * Shared type definitions for JsonTableCollectionWidget column configuration.
 *
 * @module JsonTableCollectionWidget/types
 * @remarks
 * These types define the enhanced column configuration that supports
 * formatting (number, date, boolean), conditional cell styling,
 * and per-column sorting/filtering overrides.
 *
 * Backward compatible: legacy configs without format/cellStyle
 * properties are automatically supported (all new fields are optional).
 */

import type { DateFormatId } from '../hooks/useJsonTableAnalysis/types';
import type { JsonLogicRule } from './utils/jsonLogicEngine';

// ── Column Format Configuration ─────────────────────────────────

/** Supported format types for cell value rendering. */
export type ColumnFormatType = 'number' | 'date' | 'boolean' | 'string' | 'image';

/** How an image fills its render box (CSS `object-fit`). */
export type ImageObjectFit = 'contain' | 'cover' | 'fill';

/** Shape of the rendered avatar (MUI `Avatar` variant). */
export type ImageVariant = 'circular' | 'rounded' | 'square';

/** Per-side padding (px) around the avatar within the cell. */
export interface ImagePadding {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}

/**
 * Descriptor for rendering a cell value as a graphic (format type 'image').
 *
 * Produced by `buildImageContent` (shared by the cell renderer and the column
 * editor's preview) and rendered by `ImageGraphic`.
 */
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
 * Formatting configuration for a single column.
 *
 * Only one format type is active per column. Sub-properties
 * are conditionally relevant based on `type`.
 */
export interface ColumnFormatConfig {
    /** Active format type */
    type: ColumnFormatType;

    // ── Number formatting ───────────────────────────────────────
    /** Decimal places (0-10). @default 2 */
    numberDecimals?: number;
    /** Prefix prepended to the value, e.g. "$", "€" */
    numberPrefix?: string;
    /** Suffix appended to the value, e.g. "%", " kg" */
    numberSuffix?: string;
    /** Insert thousands separator (comma). @default false */
    numberThousandsSeparator?: boolean;

    // ── Date formatting ─────────────────────────────────────────
    /** Output format string (date-fns compatible), e.g. "yyyy-MM-dd" */
    dateFormat?: string;
    /** Detected input format from analysis (informational, read-only) */
    dateInputFormat?: DateFormatId;

    // ── Boolean formatting ──────────────────────────────────────
    /** Display label for true values. @default "true" */
    booleanTrue?: string;
    /** Display label for false values. @default "false" */
    booleanFalse?: string;

    // ── String formatting ───────────────────────────────────────
    /** Case transformation applied to the string value. */
    stringCase?: 'none' | 'upper' | 'lower' | 'title';
    /** Prefix prepended to the displayed value. */
    stringPrefix?: string;
    /** Suffix appended to the displayed value. */
    stringSuffix?: string;
    /** Trim leading/trailing whitespace before other transformations. */
    stringTrim?: boolean;
    /** Truncate display value to this many characters (appends "…"). */
    stringMaxLength?: number;
    /** Regex pattern applied to extract a substring for display. */
    stringRegex?: string;
    /** Capture group index to use from regex match (0 = full match). @default 0 */
    stringRegexGroup?: number;
    /** Regex flags, e.g. "i" for case-insensitive. */
    stringRegexFlags?: string;
    /** Static font weight for the column. Overrideable by conditional cell rules. */
    stringFontWeight?: 'normal' | 'bold';
    /** Static font style for the column. Overrideable by conditional cell rules. */
    stringFontStyle?: 'normal' | 'italic';
    /** Static font size in px for the column. Overrideable by conditional cell rules. */
    stringFontSize?: number;
    /** Static text color (CSS color string) for the column. Overrideable by conditional cell rules. */
    stringTextColor?: string;

    // ── Image / icon formatting ────────────────────────────────────
    // When type === 'image', the cell value is the visual reference (URL,
    // data:image/… URI, or UTF-8 glyph) and is rendered as a graphic.
    /** Target render size in pixels (height; width follows aspect ratio via object-fit). @default 64 */
    imageSize?: number;
    /** How the graphic fills its size box. @default 'contain' */
    imageObjectFit?: ImageObjectFit;
    /** Shape of the rendered avatar. @default 'square' */
    imageVariant?: ImageVariant;
    /** Avatar background colour (CSS colour string). Transparent when unset. */
    imageBgColor?: string;
    /** Avatar border colour (CSS colour string). Border renders only with a width > 0. */
    imageBorderColor?: string;
    /** Avatar border width in pixels. Renders only when a border colour is set. */
    imageBorderWidth?: number;
    /**
     * Colour tint applied to the graphic via a CSS mask (source alpha). Works for any
     * image (SVG or raster) as well as UTF-8 glyphs; exact for monochrome icons. CSS
     * colour string.
     */
    imageTint?: string;
    /** Show the raw value as a hover tooltip (title attribute) on the graphic. @default true */
    imageTooltip?: boolean;
    /** Show a broken-image placeholder when a URL fails to load. @default true */
    imageShowBroken?: boolean;
    /**
     * Per-side padding (px) around the avatar within the cell. When unset the legacy
     * default (`0 8 0 8`) is used; once any side is set, all four sides apply (unset = 0).
     */
    imagePadding?: ImagePadding;
}

// ── Conditional Cell Styling ────────────────────────────────────

/**
 * A single conditional styling rule applied to cell values.
 *
 * The `logic` field is a json-logic-engine rule object evaluated against
 * the cell's raw value via `{ value: rawValue }` context. First matching rule wins.
 *
 * @example
 * ```ts
 * { logic: { ">": [{"var":"value"}, 100] }, backgroundColor: '#ffebee', textColor: '#c62828', fontWeight: 'bold' }
 * ```
 */
export interface ColumnStyleRule {
    /** Stable identifier for React keying; generated on rule creation */
    id?: string;
    /** json-logic-engine rule evaluated with `{ value: rawValue }` context */
    logic?: JsonLogicRule;
    /** Cell background color (CSS color string) */
    backgroundColor?: string;
    /** Cell text color (CSS color string) */
    textColor?: string;
    /** Font weight override */
    fontWeight?: 'normal' | 'bold';
    /** Font style override */
    fontStyle?: 'normal' | 'italic';
}

// ── Enhanced Column Configuration ───────────────────────────────

/**
 * Per-column configuration persisted in widget data as JSON string.
 *
 * Extends the original ColumnConfigEntry with formatting, conditional
 * styling, and per-column feature overrides. Fully backward compatible:
 * legacy configs without new properties work unchanged.
 */
export interface ColumnConfigEntry {
    /** Dot-path column identifier, e.g. "order.items[0].sku" */
    path: string;
    /** Whether the column is visible in the DataGrid */
    visible: boolean;
    /** Display label for the column header */
    headerName: string;
    /** Fixed column width in pixels (flex layout if undefined) */
    width?: number;
    /** Text alignment within the column */
    align?: 'left' | 'center' | 'right';

    // ── New: Formatting ─────────────────────────────────────────
    /** Cell value formatting configuration */
    format?: ColumnFormatConfig;

    // ── New: Conditional Styling ────────────────────────────────
    /** Ordered list of conditional styling rules */
    cellStyle?: ColumnStyleRule[];
    /**
     * Evaluation mode for conditional styling rules.
     * 'first-match' (default): stops at first matching rule.
     * 'all-match': applies all matching rules; for conflicting properties
     *              the higher-priority rule (lower index) wins.
     */
    cellStyleMode?: 'first-match' | 'all-match';

    // ── New: Per-column overrides ───────────────────────────────
    /**
     * Override global sorting setting for this column.
     * - `true`: Always sortable
     * - `false`: Never sortable
     * - `'auto'`: Use type-based smart defaults (default behavior)
     */
    sortable?: boolean | 'auto';
    /**
     * Override global filtering setting for this column.
     * - `true`: Always filterable
     * - `false`: Never filterable
     * - `'auto'`: Use type-based smart defaults (default behavior)
     */
    filterable?: boolean | 'auto';
    /**
     * Override global hiding setting for this column.
     * - `true`: Can be hidden via column menu
     * - `false`: Cannot be hidden
     * - `'auto'`: Use global tableHiding setting (default behavior)
     */
    enableHiding?: boolean | 'auto';
}
