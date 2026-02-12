/**
 * Base field definitions for vis-2 Collection widgets.
 *
 * @remarks
 * Defines all static base properties that Collection base components consume. Unlike
 * the indexed properties in CommonFieldsRxData these fields are non-indexed and act
 * as global configuration for a widget instance.
 * @example
 * ```typescript
 * import type { BaseFieldsRxData } from 'vis-2-widgets-collection/types';
 *
 * const baseConfig: BaseFieldsRxData = {
 *     noHeader: true,
 *     basePadding: 16,
 *     backgroundColor: '#2196F3'
 * };
 * ```
 */
export interface BaseFieldsRxData {
    /**
     * Hide header section (base property without index).
     * Used in CollectionBase and other base components for global header visibility control.
     *
     * @default false
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     noHeader: true  // Hide header globally
     * };
     * ```
     * @remarks
     * Base property without index. For per-value header control, use `noHeader${number}` from CommonFieldsRxData.
     * @see {@link CommonFieldsRxData.noHeader}
     */
    noHeader?: boolean;

    /**
     * Hide header icon (base property without index).
     * Used in CollectionBase for global header icon visibility control.
     *
     * @default false
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     noHeaderIcon: true  // Hide header icon globally
     * };
     * ```
     * @remarks
     * Base property without index. For per-value control, use `noHeaderIcon${number}` from CommonFieldsRxData.
     * @see {@link CommonFieldsRxData.noHeaderIcon}
     */
    noHeaderIcon?: boolean;

    /**
     * Hide footer section (base property without index).
     * Used in CollectionBase for global footer visibility control.
     *
     * @default false
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     noFooter: true  // Hide footer globally
     * };
     * ```
     * @remarks
     * Base property without index. For per-value control, use `noFooter${number}` from CommonFieldsRxData.
     * @see {@link CommonFieldsRxData.noFooter}
     */
    noFooter?: boolean;

    /**
     * Header text (base property without index).
     * Global header text displayed at the top of the widget.
     *
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     header: 'Widget Title'
     * };
     * ```
     * @remarks
     * Base property without index. For per-value headers, use `header${number}` from CommonFieldsRxData.
     * @see {@link CommonFieldsRxData.header}
     */
    header?: string | number;

    /**
     * Header font size (base property without index).
     * Sets the global header text size.
     *
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     headerSize: 18  // or '1.2rem'
     * };
     * ```
     * @remarks
     * Base property without index. Accepts number (pixels) or string (CSS units).
     * @see {@link CommonFieldsRxData.headerSize}
     */
    headerSize?: number | string;

    /**
     * Footer text (base property without index).
     * Global footer text displayed at the bottom of the widget.
     *
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     footer: 'Last updated: 2025-12-17'
     * };
     * ```
     * @remarks
     * Base property without index. For per-value footers, use `footer${number}` from CommonFieldsRxData.
     * @see {@link CommonFieldsRxData.footer}
     */
    footer?: string | number;

    /**
     * Footer font size (base property without index).
     * Sets the global footer text size.
     *
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     footerSize: 12  // or '0.8rem'
     * };
     * ```
     * @remarks
     * Base property without index. Accepts number (pixels) or string (CSS units).
     * @see {@link CommonFieldsRxData.footerSize}
     */
    footerSize?: number | string;

    /**
     * Hide card container (base property without index).
     * Removes the Material-UI Card wrapper for a flat appearance.
     *
     * @default false
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     noCard: true  // Remove card styling
     * };
     * ```
     * @remarks
     * Base property without index. Used in CollectionBase to control card wrapper visibility.
     * @see {@link CommonFieldsRxData.noCard}
     */
    noCard?: boolean;

    /**
     * Use squared corners (base property without index).
     * Removes border radius from card container.
     *
     * @default false
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     squaredCorner: true
     * };
     * ```
     * @remarks
     * Base property without index. Only applies when card is visible (noCard=false).
     * @see {@link CommonFieldsRxData.squaredCorner}
     */
    squaredCorner?: boolean;

    /**
     * Text color (base property without index).
     * Global text color for all text elements.
     *
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     textColor: '#FFFFFF'
     * };
     * ```
     * @remarks
     * Base property without index. Accepts any CSS color value.
     * @see {@link CommonFieldsRxData.textColor}
     */
    textColor?: string;

    /**
     * Use outlined card style (base property without index).
     * Applies outlined variant to Material-UI Card.
     *
     * @default false
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     outlined: true
     * };
     * ```
     * @remarks
     * Base property without index. Only applies when card is visible (noCard=false).
     * @see {@link CommonFieldsRxData.outlined}
     */
    outlined?: boolean;

    /**
     * Use outlined frame style (base property without index).
     * Applies border to frame elements within the widget.
     *
     * @default false
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     outlinedFrame: true
     * };
     * ```
     * @remarks
     * Base property without index. Used for internal frame styling.
     * @see {@link CommonFieldsRxData.outlinedFrame}
     */
    outlinedFrame?: boolean;

    /**
     * Padding inside base container in pixels (base property without index).
     * Global padding applied to the widget's main container.
     *
     * @default 8
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     basePadding: 16
     * };
     * ```
     * @remarks
     * Base property without index. Used in CollectionBase for container spacing.
     * @see {@link CommonFieldsRxData.basePadding}
     */
    basePadding?: number;

    /**
     * Material-UI elevation level (base property without index).
     * Controls shadow depth of the card container.
     *
     * @default 2
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     baseElevation: 4  // Range: 0-24
     * };
     * ```
     * @remarks
     * Base property without index. Range: 0-24. Only applies when card is visible (noCard=false).
     * @see {@link CommonFieldsRxData.baseElevation}
     */
    baseElevation?: number;

    /**
     * Use square shape (base property without index).
     * Forces equal width and height for the widget.
     *
     * @default false
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     square: true
     * };
     * ```
     * @remarks
     * Base property without index. Mutually exclusive with ellipse and circle.
     * @see {@link CommonFieldsRxData.square}
     */
    square?: boolean;

    /**
     * Use ellipse shape (base property without index).
     * Applies elliptical border radius to the widget.
     *
     * @default false
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     ellipse: true
     * };
     * ```
     * @remarks
     * Base property without index. Mutually exclusive with square and circle.
     * @see {@link CommonFieldsRxData.ellipse}
     */
    ellipse?: boolean;

    /**
     * Use circular shape (base property without index).
     * Applies circular border radius to the widget (requires equal dimensions).
     *
     * @default false
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     circle: true
     * };
     * ```
     * @remarks
     * Base property without index. Mutually exclusive with square and ellipse.
     * @see {@link CommonFieldsRxData.circle}
     */
    circle?: boolean;

    /**
     * Background image URL or path (base property without index).
     * Global background image for the widget.
     *
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     background: '/vis.0/myImage.png'
     * };
     * ```
     * @remarks
     * Base property without index. For per-value backgrounds, use `background${number}` from CommonFieldsRxData.
     * @see {@link CommonFieldsRxData.background}
     */
    background?: string;

    /**
     * Background color (base property without index).
     * Global background color for the widget.
     *
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     backgroundColor: '#2196F3'
     * };
     * ```
     * @remarks
     * Base property without index. Accepts any CSS color value.
     * @see {@link CommonFieldsRxData.backgroundColor}
     */
    backgroundColor?: string;

    /**
     * Frame background image URL or path (base property without index).
     * Global background image for frame elements within the widget.
     *
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     frameBackground: '/vis.0/frameImage.png'
     * };
     * ```
     * @remarks
     * Base property without index. Used for internal frame styling.
     * @see {@link CommonFieldsRxData.frameBackground}
     */
    frameBackground?: string;

    /**
     * Frame background color (base property without index).
     * Global background color for frame elements within the widget.
     *
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     frameBackgroundColor: '#E0E0E0'
     * };
     * ```
     * @remarks
     * Base property without index. Accepts any CSS color value.
     * @see {@link CommonFieldsRxData.frameBackgroundColor}
     */
    frameBackgroundColor?: string;

    /**
     * Value font size (base property without index).
     * Sets the global value text size.
     *
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     valueSize: 24  // or '1.5rem'
     * };
     * ```
     * @remarks
     * Base property without index. Accepts number (pixels) or string (CSS units).
     * @see {@link CommonFieldsRxData.valueSize}
     */
    valueSize?: number | string;

    /**
     * Value text (base property without index).
     * Global value text displayed in the widget.
     *
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     value: '22.5°C'
     * };
     * ```
     * @remarks
     * Base property without index. For per-value text, use `value${number}` from CommonFieldsRxData.
     * @see {@link CommonFieldsRxData.value}
     */
    value?: string | number;

    /**
     * Icon identifier (base property without index).
     * Global icon displayed in the widget (Material-UI icon name or custom path).
     *
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     icon: 'mdi-thermometer'
     * };
     * ```
     * @remarks
     * Base property without index. For per-value icons, use `icon${number}` from CommonFieldsRxData.
     * @see {@link CommonFieldsRxData.icon}
     */
    icon?: string;

    /**
     * Small icon identifier (base property without index).
     * Global small icon displayed in the widget (typically used as secondary icon).
     *
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     iconSmall: 'mdi-information'
     * };
     * ```
     * @remarks
     * Base property without index. For per-value small icons, use `iconSmall${number}` from CommonFieldsRxData.
     * @see {@link CommonFieldsRxData.iconSmall}
     */
    iconSmall?: string;

    /**
     * Icon size in pixels (base property without index).
     * Sets the global icon size.
     *
     * @default 24
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     iconSize: 32
     * };
     * ```
     * @remarks
     * Base property without index. For per-value icon sizes, use `iconSize${number}` from CommonFieldsRxData.
     * @see {@link CommonFieldsRxData.iconSize}
     */
    iconSize?: number;

    /**
     * Enable color mask for active state icon.
     *
     * @default false
     * @see {@link StateFieldsRxData.enableIconColorMask}
     */
    enableIconColorMask?: boolean;

    /**
     * Icon color (base property without index).
     * Global icon color.
     *
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     iconColor: '#2196F3'
     * };
     * ```
     * @remarks
     * Base property without index. Accepts any CSS color value.
     * @see {@link CommonFieldsRxData.iconColor}
     */
    iconColor?: string;

    /**
     * Icon hover effect in % (base property without index).
     * Global icon hover scale effect percentage.
     *
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     iconHover: 110  // 110% = 10% larger on hover
     * };
     * ```
     * @remarks
     * Base property without index. Value represents percentage (100 = no change).
     * @see {@link CommonFieldsRxData.iconHover}
     */
    iconHover?: number;

    /**
     * Horizontal icon offset (base property without index).
     * Global horizontal positioning offset for icons.
     *
     * @default '0px'
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     iconXOffset: '10px'
     * };
     * ```
     * @remarks
     * Base property without index. Accepts CSS length values.
     * @see {@link CommonFieldsRxData.iconXOffset}
     */
    iconXOffset?: string;

    /**
     * Vertical icon offset (base property without index).
     * Global vertical positioning offset for icons.
     *
     * @default '0px'
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     iconYOffset: '-5px'
     * };
     * ```
     * @remarks
     * Base property without index. Accepts CSS length values.
     * @see {@link CommonFieldsRxData.iconYOffset}
     */
    iconYOffset?: string;

    /**
     * Hide icon (base property without index).
     * Global icon visibility control.
     *
     * @default false
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     noIcon: true
     * };
     * ```
     * @remarks
     * Base property without index. For per-value icon control, use `noIcon${number}` from CommonFieldsRxData.
     * @see {@link CommonFieldsRxData.noIcon}
     */
    noIcon?: boolean;

    /**
     * Hide value display (base property without index).
     * Global value visibility control.
     *
     * @default false
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     noValue: true
     * };
     * ```
     * @remarks
     * Base property without index. For per-value control, use `noValue${number}` from CommonFieldsRxData.
     * @see {@link CommonFieldsRxData.noValue}
     */
    noValue?: boolean;

    /**
     * Display only (no interaction, base property without index).
     * Disables all user interactions globally.
     *
     * @default false
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     onlyDisplay: true
     * };
     * ```
     * @remarks
     * Base property without index. Used for read-only widgets.
     * @see {@link CommonFieldsRxData.onlyDisplay}
     */
    onlyDisplay?: boolean;

    /**
     * Alias name (base property without index).
     * Global alias/label for the widget.
     *
     * @example
     * ```typescript
     * const config: BaseFieldsRxData = {
     *     alias: 'Living Room Temperature'
     * };
     * ```
     * @remarks
     * Base property without index. For per-value aliases, use `alias${number}` from CommonFieldsRxData.
     * @see {@link CommonFieldsRxData.alias}
     */
    alias?: string;
}
