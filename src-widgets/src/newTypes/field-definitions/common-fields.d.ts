/**
 * Common field definitions for vis-2 Collection widgets.
 *
 * @remarks
 * This interface defines all common UI properties used across Collection widgets.
 * Properties use Template Literal Types with `${number}` for strict type-safety.
 *
 * @example
 * ```typescript
 * import type { CommonFieldsRxData } from 'vis-2-widgets-collection/newTypes';
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
    // ========================================
    // Icon Properties
    // ========================================

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
    [key: `iconSmall${number}`]: string | number | undefined;

    /**
     * Main icon identifier for standard display.
     * Supports Material Design Icons, custom paths, or numeric icon codes.
     *
     * @example
     * ```typescript
     * icon1: 'mdi-home'
     * icon2: '/icons/custom-icon.svg'
     * icon3: 12345 // numeric icon ID
     * ```
     */
    [key: `icon${number}`]: string | number | undefined;

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

    // ========================================
    // Header Properties
    // ========================================

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

    // ========================================
    // Value Properties
    // ========================================

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

    // ========================================
    // Footer Properties
    // ========================================

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

    // ========================================
    // Card Properties
    // ========================================

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

    // ========================================
    // Base Properties
    // ========================================

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

    // ========================================
    // Geometry Properties
    // ========================================

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

    // ========================================
    // Background Properties
    // ========================================

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

    // ========================================
    // Label Properties
    // ========================================

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

    // ========================================
    // Static Properties
    // ========================================

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

    // ========================================
    // Active-State Overrides
    // ========================================

    /**
     * Alias name override for active state.
     * Generated by commonFields({ groupName: 'Active', allFields: false }).
     * Used in ButtonGroupCollectionWidget for displaying alternative labels in active state.
     *
     * @default undefined
     * @example
     * ```typescript
     * aliasActive: 'Active Label'
     * aliasActive: 'Currently Selected'
     * ```
     * @remarks groupName: 'Active' → Suffix
     */
    aliasActive?: string;

    /**
     * Value font size override for active state.
     * Generated by commonFields({ groupName: 'Active', allFields: false }).
     * Used in visAttrs "active" group (SliderCollectionWidget, ButtonGroupCollectionWidget).
     *
     * @default undefined
     * @example
     * ```typescript
     * valueSizeActive: '120%'
     * valueSizeActive: 150 // interpreted as 150%
     * ```
     * @remarks groupName: 'Active' → Suffix
     */
    valueSizeActive?: string | number;

    /**
     * Font size override for active state.
     * Generated by commonFields({ groupName: 'Active', allFields: false }).
     *
     * @default undefined
     * @example
     * ```typescript
     * fontSizeActive: '1.5rem'
     * fontSizeActive: 18 // interpreted as 18px
     * ```
     * @remarks groupName: 'Active' → Suffix
     */
    fontSizeActive?: string | number;

    /**
     * Text color override for active state.
     * Generated by commonFields({ groupName: 'Active', allFields: false }).
     * Used in ButtonGroupCollectionWidget for active button text color.
     *
     * @default undefined
     * @example
     * ```typescript
     * textColorActive: '#FF5722'
     * textColorActive: 'rgb(255, 87, 34)'
     * ```
     * @remarks groupName: 'Active' → Suffix
     */
    textColorActive?: string;

    /**
     * Main icon identifier for active state.
     * Generated by commonFields({ groupName: 'Active', allFields: false }).
     * Used in ButtonGroupCollectionWidget for active button icon display.
     *
     * @default undefined
     * @example
     * ```typescript
     * iconActive: 'active-icon.svg'
     * iconActive: '/icons/active.png'
     * ```
     * @remarks groupName: 'Active' → Suffix
     */
    iconActive?: string;

    /**
     * Small icon identifier for active state.
     * Generated by commonFields({ groupName: 'Active', allFields: false }).
     * Used in ButtonGroupCollectionWidget for compact active icon display.
     *
     * @default undefined
     * @example
     * ```typescript
     * iconSmallActive: 'small-active.svg'
     * iconSmallActive: 'mdi-check-circle'
     * ```
     * @remarks groupName: 'Active' → Suffix
     */
    iconSmallActive?: string;

    /**
     * Icon size override for active state.
     * Generated by commonFields({ groupName: 'Active', allFields: false }).
     * Frequently used in SliderCollectionWidget and ButtonGroupCollectionWidget.
     *
     * @default undefined
     * @example
     * ```typescript
     * iconSizeActive: 150 // 150% of base size
     * iconSizeActive: '32px'
     * ```
     * @remarks groupName: 'Active' → Suffix
     */
    iconSizeActive?: string | number;

    /**
     * Icon color override for active state.
     * Generated by commonFields({ groupName: 'Active', allFields: false }).
     * Most frequently used Active property across Collection widgets.
     *
     * @default undefined
     * @example
     * ```typescript
     * iconColorActive: '#00ff00'
     * iconColorActive: 'rgba(0, 255, 0, 0.8)'
     * ```
     * @remarks groupName: 'Active' → Suffix
     */
    iconColorActive?: string;

    /**
     * Icon hover brightness override for active state.
     * Generated by commonFields({ groupName: 'Active', allFields: false }).
     * Used in ButtonGroupCollectionWidget for hover effect brightness in active state.
     *
     * @default undefined
     * @example
     * ```typescript
     * iconHoverActive: 150 // 150% brightness on hover
     * iconHoverActive: 200 // 200% brightness on hover
     * ```
     * @remarks groupName: 'Active' → Suffix
     */
    iconHoverActive?: number;

    /**
     * Horizontal icon offset override for active state.
     * Generated by commonFields({ groupName: 'Active', allFields: false }).
     * Used in SliderCollectionWidget for precise icon positioning. Supports CSS units (px, %, em, rem).
     *
     * @default undefined
     * @example
     * ```typescript
     * iconXOffsetActive: '10px'  // move 10px right when active
     * iconXOffsetActive: '-5%'   // move 5% left when active
     * ```
     * @remarks groupName: 'Active' → Suffix
     */
    iconXOffsetActive?: string;

    /**
     * Vertical icon offset override for active state.
     * Generated by commonFields({ groupName: 'Active', allFields: false }).
     * Used in SliderCollectionWidget for precise icon positioning. Supports CSS units (px, %, em, rem).
     *
     * @default undefined
     * @example
     * ```typescript
     * iconYOffsetActive: '-10px' // move 10px up when active
     * iconYOffsetActive: '5rem'  // move 5rem down when active
     * ```
     * @remarks groupName: 'Active' → Suffix
     */
    iconYOffsetActive?: string;

    /**
     * Header text override for active state.
     * Generated by commonFields({ groupName: 'Active', allFields: false }).
     * Used in CollectionBase for displaying alternative header text in active state.
     *
     * @default undefined
     * @example
     * ```typescript
     * headerActive: 'Active Header'
     * headerActive: 'Currently Selected'
     * ```
     * @remarks groupName: 'Active' → Suffix
     */
    headerActive?: string | number;

    /**
     * Header font size override for active state.
     * Generated by commonFields({ groupName: 'Active', allFields: false }).
     * Used in CollectionBase for header size in active state.
     *
     * @default undefined
     * @example
     * ```typescript
     * headerSizeActive: 20
     * headerSizeActive: '1.5rem'
     * ```
     * @remarks groupName: 'Active' → Suffix
     */
    headerSizeActive?: number | string;

    /**
     * Footer text override for active state.
     * Generated by commonFields({ groupName: 'Active', allFields: false }).
     * Used in CollectionBase for displaying alternative footer text in active state.
     *
     * @default undefined
     * @example
     * ```typescript
     * footerActive: 'Active Footer'
     * footerActive: 'Selected'
     * ```
     * @remarks groupName: 'Active' → Suffix
     */
    footerActive?: string | number;

    /**
     * Footer font size override for active state.
     * Generated by commonFields({ groupName: 'Active', allFields: false }).
     * Used in CollectionBase for footer size in active state.
     *
     * @default undefined
     * @example
     * ```typescript
     * footerSizeActive: 14
     * footerSizeActive: '0.9rem'
     * ```
     * @remarks groupName: 'Active' → Suffix
     */
    footerSizeActive?: number | string;

    /**
     * Background gradient override for active state.
     * Generated by commonFields({ groupName: 'Active', allFields: false }).
     * Used in CollectionBase for background gradient in active state.
     *
     * @default undefined
     * @example
     * ```typescript
     * backgroundActive: 'linear-gradient(to right, #ff0000, #00ff00)'
     * backgroundActive: 'radial-gradient(circle, #333, #000)'
     * ```
     * @remarks groupName: 'Active' → Suffix
     */
    backgroundActive?: string;

    /**
     * Background color override for active state.
     * Generated by commonFields({ groupName: 'Active', allFields: false }).
     * Used in CollectionBase for solid background color in active state.
     *
     * @default undefined
     * @example
     * ```typescript
     * backgroundColorActive: '#FF5722'
     * backgroundColorActive: 'rgb(255, 87, 34)'
     * ```
     * @remarks groupName: 'Active' → Suffix
     */
    backgroundColorActive?: string;

    /**
     * Frame background gradient override for active state.
     * Generated by commonFields({ groupName: 'Active', allFields: false }).
     * Used in CollectionBase for frame background gradient in active state.
     *
     * @default undefined
     * @example
     * ```typescript
     * frameBackgroundActive: 'linear-gradient(to bottom, #000, #333)'
     * frameBackgroundActive: 'radial-gradient(ellipse, #fff, #ccc)'
     * ```
     * @remarks groupName: 'Active' → Suffix
     */
    frameBackgroundActive?: string;

    /**
     * Frame background color override for active state.
     * Generated by commonFields({ groupName: 'Active', allFields: false }).
     * Used in CollectionBase for frame solid background color in active state.
     *
     * @default undefined
     * @example
     * ```typescript
     * frameBackgroundColorActive: '#0288D1'
     * frameBackgroundColorActive: 'rgba(2, 136, 209, 0.8)'
     * ```
     * @remarks groupName: 'Active' → Suffix
     */
    frameBackgroundColorActive?: string;
}
