# ioBroker.vis-2 Widget Collection - User Guide

Welcome to the documentation for the Widget Collection for ioBroker.vis-2. This collection provides professional widgets for visualizing and controlling your smart home devices.

## Settings Principle

The settings follow a clear hierarchy from general to specific:

1. **vis-2 Settings** - Always available for all widgets
2. **Common Settings** - Shared settings for all widgets in this collection
3. **Widget-specific Settings** - Specific to the respective widget type
4. **Value-specific Settings** - Individual settings per value (if multiple values are defined)

**Important:** More specific settings always override more general settings.

## vis-2 Settings (always available)

These settings are available for all vis-2 widgets and can be configured via the property editor.

### General (CSS Common)

| Property  | Description                                                  |
| --------- | ------------------------------------------------------------ |
| Position  | Left, Top, Right, Bottom (absolute positioning)              |
| Size      | Width, Height                                                |
| Z-Index   | Stacking order of elements                                   |
| Overflow  | Behavior on content overflow (visible, hidden, scroll, auto) |
| Cursor    | Mouse cursor style                                           |
| Transform | CSS transformations (rotate, scale, translate, etc.)         |
| Opacity   | Transparency (0-1)                                           |

### Font & Text (CSS Font Text)

| Property       | Description                                   |
| -------------- | --------------------------------------------- |
| Font Family    | Font family                                   |
| Font Size      | Font size                                     |
| Font Style     | Font style (normal, italic, oblique)          |
| Font Weight    | Font weight (normal, bold, 100-900)           |
| Color          | Text color                                    |
| Text Align     | Text alignment (left, center, right, justify) |
| Line Height    | Line height                                   |
| Letter Spacing | Letter spacing                                |
| Text Shadow    | Text shadow                                   |

### Background (CSS Background)

| Property              | Description                                                            |
| --------------------- | ---------------------------------------------------------------------- |
| Background Color      | Background color                                                       |
| Background Image      | Background image (URL)                                                 |
| Background Position   | Position of background image                                           |
| Background Size       | Size of background image (auto, cover, contain, custom)                |
| Background Repeat     | Repetition of background image (repeat, no-repeat, repeat-x, repeat-y) |
| Background Attachment | Scroll behavior (scroll, fixed, local)                                 |

### Borders (CSS Border)

| Property      | Description                                                                      |
| ------------- | -------------------------------------------------------------------------------- |
| Border Width  | Border width (top, right, bottom, left)                                          |
| Border Style  | Border style (none, solid, dashed, dotted, double, groove, ridge, inset, outset) |
| Border Color  | Border color                                                                     |
| Border Radius | Corner radius (top-left, top-right, bottom-right, bottom-left)                   |

### Shadow & Padding (CSS Shadow Padding)

| Property   | Description                              |
| ---------- | ---------------------------------------- |
| Box Shadow | Shadow around the element                |
| Padding    | Inner spacing (top, right, bottom, left) |

### Show Last Change

| Property         | Description                                            |
| ---------------- | ------------------------------------------------------ |
| Object ID        | OID of the state whose last change should be displayed |
| Format           | Display format of last change                          |
| Interval         | Update interval                                        |
| Date/Time Format | Formatting of date and time                            |

### Signature Images

| Property  | Description                 |
| --------- | --------------------------- |
| Image OID | OID for signature image     |
| Size      | Size of signature image     |
| Position  | Position of signature image |

## Common Settings (all widgets)

These settings are available for all widgets in the collection.

### Icon

| Field Name  | Type           | Default | Description         |
| ----------- | -------------- | ------- | ------------------- |
| icon        | image          | -       | Large icon (image)  |
| iconSmall   | icon64         | -       | Small icon (SVG)    |
| iconSize    | slider (1-500) | -       | Icon size in pixels |
| iconColor   | color          | -       | Icon color          |
| iconXOffset | text           | 0px     | Horizontal offset   |
| iconYOffset | text           | 0px     | Vertical offset     |

### Header

| Field Name   | Type     | Default | Description               |
| ------------ | -------- | ------- | ------------------------- |
| noHeader     | checkbox | false   | Don't show header         |
| noHeaderIcon | checkbox | false   | Don't show icon in header |
| header       | text     | -       | Header text               |
| headerSize   | slider   | -       | Header font size          |

### Value

| Field Name | Type   | Default | Description         |
| ---------- | ------ | ------- | ------------------- |
| alias      | text   | -       | Alias for the value |
| value      | text   | -       | Value to display    |
| valueSize  | slider | -       | Value font size     |

### Footer

| Field Name | Type     | Default | Description       |
| ---------- | -------- | ------- | ----------------- |
| noFooter   | checkbox | false   | Don't show footer |
| footer     | text     | -       | Footer text       |
| footerSize | slider   | -       | Footer font size  |

### Characteristics

| Field Name    | Type          | Default | Description                          |
| ------------- | ------------- | ------- | ------------------------------------ |
| noCard        | checkbox      | false   | No card (no background)              |
| squaredCorner | checkbox      | false   | Squared corners (instead of rounded) |
| textColor     | color         | -       | Text color                           |
| outlined      | checkbox      | false   | Outline style                        |
| outlinedFrame | checkbox      | false   | Outline for frame                    |
| basePadding   | slider        | -       | Base padding                         |
| baseElevation | slider (0-24) | -       | Material-UI elevation                |

### Geometry

| Field Name | Type     | Default | Description      |
| ---------- | -------- | ------- | ---------------- |
| square     | checkbox | false   | Square shape     |
| ellipse    | checkbox | false   | Elliptical shape |
| circle     | checkbox | false   | Circular shape   |

### Background

| Field Name      | Type  | Default | Description                    |
| --------------- | ----- | ------- | ------------------------------ |
| background      | text  | -       | Background (gradient possible) |
| backgroundColor | color | -       | Background color               |

### Frame Background

| Field Name           | Type  | Default | Description                          |
| -------------------- | ----- | ------- | ------------------------------------ |
| frameBackground      | text  | -       | Frame background (gradient possible) |
| frameBackgroundColor | color | -       | Frame background color               |

## Widget Overview

The Widget Collection includes the following widgets:

- [State Widget](State-Widget.md) - Display and control of states (boolean, number, string, mixed)
- [Switch Widget](Switch-Widget.md) - Switch for boolean values
- [Checkbox Widget](Checkbox-Widget.md) - Checkbox for boolean values
- [Slider Widget](Slider-Widget.md) - Slider for numeric values
- [ButtonGroup Widget](ButtonGroup-Widget.md) - Button group for various data types
- [Select Widget](Select-Widget.md) - Dropdown selection for various data types
- [RadioGroup Widget](RadioGroup-Widget.md) - Radio group for various data types
- [Dialog Widget](Dialog-Widget.md) - Dialog for displaying views
- [Gauge Widget](Gauge-Widget.md) - Gauge for displaying numeric values (Linear/Radial)
- [Light Widget](Light-Widget.md) - Light control with color selection
