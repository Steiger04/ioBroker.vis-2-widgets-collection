# Slider Widget

![Slider Widget](../img/collection-slider.png)

## Description

The Slider Widget is a slider for numeric values with extensive configuration options for orientation, marks, and icons.

## Settings Hierarchy

This widget uses all **vis-2 Settings** and **Common Settings**. See [Home](En-Home.md) for details.

The widget-specific settings override the more general settings.

## Widget-Specific Settings

### Basic Settings

| Field Name        | Type   | Default      | Description                            | Condition |
| ----------------- | ------ | ------------ | -------------------------------------- | --------- |
| sliderSize        | slider | -            | Thickness of the slider in pixels      | -         |
| sliderOrientation | select | 'horizontal' | Orientation of the slider              | -         |
| valueLabelDisplay | select | 'auto'       | Display of value label (auto, on, off) | -         |
| labelPosition     | select | 'top'        | Position of the label                  | -         |
| sliderColor       | color  | -            | Color of the slider                    | -         |

### Value Range

| Field Name | Type   | Default | Description   | Condition |
| ---------- | ------ | ------- | ------------- | --------- |
| minValue   | number | 0       | Minimum value | -         |
| maxValue   | number | 100     | Maximum value | -         |
| step       | number | 1       | Step size     | -         |

### Marks

| Field Name      | Type     | Default  | Description                           | Condition            |
| --------------- | -------- | -------- | ------------------------------------- | -------------------- |
| marks           | checkbox | false    | Show marks                            | -                    |
| markPosition    | select   | 'bottom' | Position of marks (top, bottom, both) | Only when marks=true |
| markStep        | number   | -        | Step size of marks                    | Only when marks=true |
| markerTextColor | color    | -        | Text color of marks                   | Only when marks=true |
| markerTextSize  | slider   | -        | Text size of marks                    | Only when marks=true |
| markerIconColor | color    | -        | Icon color of marks                   | Only when marks=true |
| markerIconSize  | slider   | -        | Icon size of marks                    | Only when marks=true |

### Start Icon (Min)

| Field Name     | Type   | Default | Description                 | Condition |
| -------------- | ------ | ------- | --------------------------- | --------- |
| iconSmallMin   | icon64 | -       | Small icon (SVG) at start   | -         |
| iconMin        | image  | -       | Large icon (image) at start | -         |
| iconSizeStart  | slider | -       | Size of start icon          | -         |
| startIconColor | color  | -       | Color of start icon         | -         |

### End Icon (Max)

| Field Name   | Type   | Default | Description               | Condition |
| ------------ | ------ | ------- | ------------------------- | --------- |
| iconSmallMax | icon64 | -       | Small icon (SVG) at end   | -         |
| iconMax      | image  | -       | Large icon (image) at end | -         |
| iconSizeEnd  | slider | -       | Size of end icon          | -         |
| endIconColor | color  | -       | Color of end icon         | -         |

**Note:** In addition to the settings above, the **Write Value** settings (delay/interval) are available. These control how value changes are written to the OID. See [Common Settings - Write Value](En-Home.md#write-value) for details.

## Orientation

### Horizontal

- Slider from left to right
- Default orientation
- Value increases to the right

### Vertical

- Slider from bottom to top
- Space-saving for narrow layouts
- Value increases upward

## Marks

Marks help with orientation on the slider:

### Step Size

- `markStep` defines the distance between marks
- Example: With minValue=0, maxValue=100, markStep=10, marks are displayed at 0, 10, 20, ... 100

### Position

- **Top**: Marks above the slider
- **Bottom**: Marks below the slider
- **Both**: Marks on both sides

### Styling

- Text and icons at marks can be styled separately
- Color and size independently adjustable

## Min/Max Icons

Icons at the ends of the slider visualize the value range:

### Start Icon (Minimum)

- Displayed at the start of the slider (left for horizontal, bottom for vertical)
- Example: Speaker icon for volume minimum

### End Icon (Maximum)

- Displayed at the end of the slider (right for horizontal, top for vertical)
- Example: Speaker icon with sound waves for volume maximum

## Use Cases

- **Volume Control**: Min-Icon = quiet speaker, Max-Icon = loud speaker
- **Brightness Control**: Min-Icon = moon, Max-Icon = sun
- **Temperature**: Min-Icon = snowflake, Max-Icon = flame
- **Blinds**: Vertical, Min = closed, Max = open
