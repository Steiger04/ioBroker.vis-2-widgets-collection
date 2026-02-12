/**
 * Common field definitions for vis-2 Collection widgets.
 *
 * @remarks
 * This interface defines all common UI properties used across Collection widgets.
 * Properties use Template Literal Types with `${number}` for strict type-safety.
 * Static base properties (without index) are defined in BaseFieldsRxData.
 * @see {@link BaseFieldsRxData}
 * @example
 * ```typescript
 * import type { CommonFieldsRxData } from 'vis-2-widgets-collection/types';
 *
 * interface MyWidgetData extends CommonFieldsRxData {
 *     customProp: string;
 * }
 *
 * const data: MyWidgetData = {
 *     alias1: 'Temperature Sensor',
 *     icon1: 'mdi-thermometer',
 *     iconSize1: 24,
 *     header1: 'Living Room',
 *     value1: '22.5°C',
 *     backgroundColor1: '#FF5722'
 * };
 * ```
 */
export interface CommonFieldsRxData {
    /**
     * Alias name for a specific value/state.
     * Used for user-friendly display names.
     *
     * @example
     * ```typescript
     * alias1: 'Living Room Temperature'
     * alias2: 'Bedroom Humidity'
     * ```
     */
    [key: `alias${number}`]: string | undefined;

    /**
     * Small icon identifier for compact display.
     * Supports Material Design Icons (mdi-*) or custom paths.
     *
     * @example
     * ```typescript
     * iconSmall1: 'mdi-thermometer-low'
     * iconSmall2: '/icons/humidity.svg'
     * ```
     */
    [key: `iconSmall${number}`]: string | undefined;

    /**
     * Main icon identifier for standard display.
     * Supports Material Design Icons, custom paths, or numeric icon codes.
     *
     * @example
     * ```typescript
     * icon1: 'mdi-home'
     * icon2: '/icons/custom-icon.svg'
     * ```
     */
    [key: `icon${number}`]: string | undefined;

    /**
     * Icon size in pixels.
     *
     * @default 24
     * @example
     * ```typescript
     * iconSize1: 32
     * iconSize2: 48
     * ```
     */
    [key: `iconSize${number}`]: number | undefined;

    /**
     * Icon color as CSS color value.
     * Supports hex, rgb, rgba, named colors.
     *
     * @example
     * ```typescript
     * iconColor1: '#FF5722'
     * iconColor2: 'rgb(255, 87, 34)'
     * iconColor3: 'red'
     * ```
     */
    [key: `iconColor${number}`]: string | undefined;

    /**
     * Icon identifier for hover state.
     * Changes icon appearance on mouse hover.
     *
     * @example
     * ```typescript
     * iconHover1: 'mdi-home-outline' // filled icon on hover
     * ```
     */
    [key: `iconHover${number}`]: string | number | undefined;

    /**
     * Horizontal offset for icon positioning.
     * Supports CSS units (px, %, em, rem).
     *
     * @default '0px'
     * @example
     * ```typescript
     * iconXOffset1: '10px'  // move 10px right
     * iconXOffset2: '-5%'   // move 5% left
     * ```
     */
    [key: `iconXOffset${number}`]: string | undefined;

    /**
     * Vertical offset for icon positioning.
     * Supports CSS units (px, %, em, rem).
     *
     * @default '0px'
     * @example
     * ```typescript
     * iconYOffset1: '-10px' // move 10px up
     * iconYOffset2: '5rem'  // move 5rem down
     * ```
     */
    [key: `iconYOffset${number}`]: string | undefined;

    /**
     * Enable color mask for icon coloring (forces coloring for URL-based icons).
     *
     * @remarks
     * By default, the CSS filter technique for icon coloring only applies to Base64-encoded icons.
     * When this option is enabled, the color mask is also applied to URL-based icons (e.g., '/local/icon.png').
     * This forces the CSS filter technique (drop-shadow + translateY) to work with external image resources.
     *
     * @default false
     * @example
     * ```typescript
     * enableIconColorMask1: true  // enable color mask for first icon
     * enableIconColorMask2: false // disable color mask for second icon
     * enableIconColorMask3: true  // enable color mask for third icon
     * ```
     */
    [key: `enableIconColorMask${number}`]: boolean | undefined;

    /**
     * Hide header section for this value.
     *
     * @default false
     * @example
     * ```typescript
     * noHeader1: true // hide header
     * noHeader2: false // show header
     * ```
     */
    [key: `noHeader${number}`]: boolean | undefined;

    /**
     * Hide header icon.
     *
     * @default false
     * @example
     * ```typescript
     * noHeaderIcon1: true // hide header icon
     * ```
     */
    [key: `noHeaderIcon${number}`]: boolean | undefined;

    /**
     * Header text content.
     *
     * @example
     * ```typescript
     * header1: 'Living Room'
     * header2: 'Temperature'
     * ```
     */
    [key: `header${number}`]: string | undefined;

    /**
     * Header font size in pixels.
     *
     * @default 16
     * @example
     * ```typescript
     * headerSize1: 18
     * headerSize2: 20
     * ```
     */
    [key: `headerSize${number}`]: number | undefined;

    /**
     * Value font size in pixels.
     *
     * @default 24
     * @example
     * ```typescript
     * valueSize1: 32
     * valueSize2: 28
     * ```
     */
    [key: `valueSize${number}`]: number | undefined;

    /**
     * Display value (can be formatted string or raw value).
     *
     * @example
     * ```typescript
     * value1: '22.5°C'
     * value2: 45.3
     * value3: true
     * ```
     */
    [key: `value${number}`]: ioBroker.StateValue | undefined;

    /**
     * Hide footer section for this value.
     *
     * @default false
     * @example
     * ```typescript
     * noFooter1: true // hide footer
     * ```
     */
    [key: `noFooter${number}`]: boolean | undefined;

    /**
     * Footer text content.
     *
     * @example
     * ```typescript
     * footer1: 'Last updated: 10:30'
     * footer2: 'Battery: 85%'
     * ```
     */
    [key: `footer${number}`]: string | undefined;

    /**
     * Footer font size in pixels.
     *
     * @default 12
     * @example
     * ```typescript
     * footerSize1: 14
     * footerSize2: 10
     * ```
     */
    [key: `footerSize${number}`]: number | undefined;

    /**
     * Hide card container (removes background/border).
     *
     * @default false
     * @example
     * ```typescript
     * noCard1: true // transparent, no border
     * ```
     */
    [key: `noCard${number}`]: boolean | undefined;

    /**
     * Use squared corners instead of rounded.
     *
     * @default false
     * @example
     * ```typescript
     * squaredCorner1: true // square corners
     * ```
     */
    [key: `squaredCorner${number}`]: boolean | undefined;

    /**
     * Text color as CSS color value.
     *
     * @example
     * ```typescript
     * textColor1: '#FFFFFF'
     * textColor2: 'rgba(0, 0, 0, 0.87)'
     * ```
     */
    [key: `textColor${number}`]: string | undefined;

    /**
     * Use outlined card style (border without fill).
     *
     * @default false
     * @example
     * ```typescript
     * outlined1: true // outlined card
     * ```
     */
    [key: `outlined${number}`]: boolean | undefined;

    /**
     * Use outlined frame style.
     *
     * @default false
     * @example
     * ```typescript
     * outlinedFrame1: true // outlined frame
     * ```
     */
    [key: `outlinedFrame${number}`]: boolean | undefined;

    /**
     * Padding inside the base container in pixels.
     *
     * @default 8
     * @example
     * ```typescript
     * basePadding1: 16
     * basePadding2: 12
     * ```
     */
    [key: `basePadding${number}`]: number | undefined;

    /**
     * Material-UI elevation level (box-shadow depth).
     * Range: 0-24
     *
     * @default 2
     * @example
     * ```typescript
     * baseElevation1: 4  // higher shadow
     * baseElevation2: 0  // no shadow
     * ```
     */
    [key: `baseElevation${number}`]: number | undefined;

    /**
     * Use square shape (equal width and height).
     *
     * @default false
     * @example
     * ```typescript
     * square1: true // force square shape
     * ```
     */
    [key: `square${number}`]: boolean | undefined;

    /**
     * Use ellipse shape (rounded but not circular).
     *
     * @default false
     * @example
     * ```typescript
     * ellipse1: true // ellipse shape
     * ```
     */
    [key: `ellipse${number}`]: boolean | undefined;

    /**
     * Use circular shape (perfect circle).
     *
     * @default false
     * @example
     * ```typescript
     * circle1: true // circular shape
     * ```
     */
    [key: `circle${number}`]: boolean | undefined;

    /**
     * Background image URL or path.
     *
     * @example
     * ```typescript
     * background1: '/images/texture.png'
     * background2: 'url(https://example.com/bg.jpg)'
     * ```
     */
    [key: `background${number}`]: string | undefined;

    /**
     * Background color as CSS color value.
     *
     * @example
     * ```typescript
     * backgroundColor1: '#2196F3'
     * backgroundColor2: 'linear-gradient(to right, #FF5722, #FFC107)'
     * ```
     */
    [key: `backgroundColor${number}`]: string | undefined;

    /**
     * Frame background image URL or path.
     *
     * @example
     * ```typescript
     * frameBackground1: '/images/frame.png'
     * ```
     */
    [key: `frameBackground${number}`]: string | undefined;

    /**
     * Frame background color as CSS color value.
     *
     * @example
     * ```typescript
     * frameBackgroundColor1: '#E0E0E0'
     * ```
     */
    [key: `frameBackgroundColor${number}`]: string | undefined;

    /**
     * Label text content.
     *
     * @example
     * ```typescript
     * label1: 'Temperature'
     * label2: 'Humidity'
     * ```
     */
    [key: `label${number}`]: string | undefined;

    /**
     * Font size for labels.
     * Supports CSS units (px, em, rem, %) or numeric pixel values.
     *
     * @default '14px'
     * @example
     * ```typescript
     * fontSize1: '16px'
     * fontSize2: '1.2rem'
     * fontSize3: 12  // interpreted as 12px
     * ```
     */
    [key: `fontSize${number}`]: string | number | undefined;

    /**
     * Total number of signal indicators to display.
     * Used for status LEDs or notification badges.
     *
     * @example
     * ```typescript
     * 'signals-count': 3 // show 3 signal indicators
     * ```
     */
    'signals-count'?: number;

    /**
     * Color for signal indicators.
     * Indexed by signal number.
     *
     * @example
     * ```typescript
     * 'signals-color-1': '#4CAF50' // green
     * 'signals-color-2': '#FFC107' // amber
     * 'signals-color-3': '#F44336' // red
     * ```
     */
    [key: `signals-color-${number}`]: string | undefined;

    // NOTE: Active-State Properties are defined in ActiveStateFieldsRxData
    // and are included here through interface extension, as they are generated by
    // commonFields({ groupName: 'Active', allFields: false })
    // and must be available in all widgets via CollectionBase.
    // @see {@link ActiveStateFieldsRxData}

    /**
     * Alias name override for active state.
     *
     * @see {@link ActiveStateFieldsRxData.aliasActive}
     */
    aliasActive?: string;

    /**
     * Value font size override for active state.
     *
     * @see {@link ActiveStateFieldsRxData.valueSizeActive}
     */
    valueSizeActive?: string | number;

    /**
     * Font size override for active state.
     *
     * @see {@link ActiveStateFieldsRxData.fontSizeActive}
     */
    fontSizeActive?: string | number;

    /**
     * Text color override for active state.
     *
     * @see {@link ActiveStateFieldsRxData.textColorActive}
     */
    textColorActive?: string;

    /**
     * Main icon identifier for active state.
     *
     * @see {@link ActiveStateFieldsRxData.iconActive}
     */
    iconActive?: string;

    /**
     * Small icon identifier for active state.
     *
     * @see {@link ActiveStateFieldsRxData.iconSmallActive}
     */
    iconSmallActive?: string;

    /**
     * Icon size override for active state.
     *
     * @see {@link ActiveStateFieldsRxData.iconSizeActive}
     */
    iconSizeActive?: string | number;

    /**
     * Icon color override for active state.
     *
     * @see {@link ActiveStateFieldsRxData.iconColorActive}
     */
    iconColorActive?: string;

    /**
     * Icon hover brightness override for active state.
     *
     * @see {@link ActiveStateFieldsRxData.iconHoverActive}
     */
    iconHoverActive?: number;

    /**
     * Horizontal icon offset override for active state.
     *
     * @see {@link ActiveStateFieldsRxData.iconXOffsetActive}
     */
    iconXOffsetActive?: string;

    /**
     * Vertical icon offset override for active state.
     *
     * @see {@link ActiveStateFieldsRxData.iconYOffsetActive}
     */
    iconYOffsetActive?: string;

    /**
     * Enable color mask for active state icon.
     *
     * @default false
     * @see {@link ActiveStateFieldsRxData.enableIconColorMaskActive}
     */
    enableIconColorMaskActive?: boolean;

    /**
     * Header text override for active state.
     *
     * @see {@link ActiveStateFieldsRxData.headerActive}
     */
    headerActive?: string | number;

    /**
     * Header font size override for active state.
     *
     * @see {@link ActiveStateFieldsRxData.headerSizeActive}
     */
    headerSizeActive?: number | string;

    /**
     * Footer text override for active state.
     *
     * @see {@link ActiveStateFieldsRxData.footerActive}
     */
    footerActive?: string | number;

    /**
     * Footer font size override for active state.
     *
     * @see {@link ActiveStateFieldsRxData.footerSizeActive}
     */
    footerSizeActive?: number | string;

    /**
     * Background gradient override for active state.
     *
     * @see {@link ActiveStateFieldsRxData.backgroundActive}
     */
    backgroundActive?: string;

    /**
     * Background color override for active state.
     *
     * @see {@link ActiveStateFieldsRxData.backgroundColorActive}
     */
    backgroundColorActive?: string;

    /**
     * Frame background gradient override for active state.
     *
     * @see {@link ActiveStateFieldsRxData.frameBackgroundActive}
     */
    frameBackgroundActive?: string;

    /**
     * Frame background color override for active state.
     *
     * @see {@link ActiveStateFieldsRxData.frameBackgroundColorActive}
     */
    frameBackgroundColorActive?: string;
}
