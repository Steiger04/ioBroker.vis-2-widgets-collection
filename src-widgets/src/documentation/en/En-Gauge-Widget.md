# Gauge Widget

![Gauge Widget](../img/collection-gauge.png)

## Description

The Gauge Widget displays numeric values as linear or radial gauges. It offers extensive configuration options for a professional appearance.

## Settings Hierarchy

This widget uses all **vis-2 Settings** and **Common Settings**. See [Home](En-Home.md) for details.

The widget-specific settings override the more general settings.

## Basic Settings

| Field Name    | Type     | Default  | Description                    | Condition |
| ------------- | -------- | -------- | ------------------------------ | --------- |
| gaugeType     | select   | 'linear' | Type of gauge (linear, radial) | -         |
| gaugeMinValue | number   | 0        | Minimum value                  | -         |
| gaugeMaxValue | number   | 100      | Maximum value                  | -         |
| gaugePadding  | number   | 10       | Inner padding of the gauge     | -         |
| gaugeIconFit  | checkbox | false    | Fit icon to gauge size         | -         |

## Linear Gauge Settings

### Borders

| Field Name              | Type   | Default | Description           | Condition                    |
| ----------------------- | ------ | ------- | --------------------- | ---------------------------- |
| linearGaugeBorderShadow | text   | -       | Shadow for the border | Only with gaugeType='linear' |
| linearGaugeBorderWidth  | number | -       | Width of the border   | Only with gaugeType='linear' |
| linearGaugeBorderRadius | number | -       | Radius of corners     | Only with gaugeType='linear' |

### Progress Bar

| Field Name                         | Type   | Default | Description            | Condition                    |
| ---------------------------------- | ------ | ------- | ---------------------- | ---------------------------- |
| linearGaugeBarProgressTopPosition  | text   | -       | Position from top      | Only with gaugeType='linear' |
| linearGaugeBarProgressHeight       | text   | -       | Height of progress bar | Only with gaugeType='linear' |
| linearGaugeBarProgressBorderRadius | number | -       | Radius of corners      | Only with gaugeType='linear' |

### Coloring

| Field Name                       | Type  | Default | Description             | Condition                    |
| -------------------------------- | ----- | ------- | ----------------------- | ---------------------------- |
| linearGaugeBarProgressColorStart | color | -       | Start color of gradient | Only with gaugeType='linear' |
| linearGaugeBarProgressColorEnd   | color | -       | End color of gradient   | Only with gaugeType='linear' |
| linearGaugeBackgroundBarColor    | color | -       | Background color of bar | Only with gaugeType='linear' |

### Element Positioning

| Field Name                        | Type | Default | Description                 | Condition                    |
| --------------------------------- | ---- | ------- | --------------------------- | ---------------------------- |
| linearGaugeIconVerticalPosition   | text | -       | Vertical position of icon   | Only with gaugeType='linear' |
| linearGaugeIconHorizontalPosition | text | -       | Horizontal position of icon | Only with gaugeType='linear' |
| linearGaugeValueTop               | text | -       | Position of value from top  | Only with gaugeType='linear' |

### Ticks Bar

| Field Name             | Type   | Default | Description     | Condition                    |
| ---------------------- | ------ | ------- | --------------- | ---------------------------- |
| linearGaugeTicksCount  | number | -       | Number of ticks | Only with gaugeType='linear' |
| linearGaugeTicksHeight | text   | -       | Height of ticks | Only with gaugeType='linear' |
| linearGaugeTicksWidth  | text   | -       | Width of ticks  | Only with gaugeType='linear' |
| linearGaugeTicksColor  | color  | -       | Color of ticks  | Only with gaugeType='linear' |

## Radial Gauge Settings

### Ticks Bar

| Field Name                     | Type   | Default | Description           | Condition                    |
| ------------------------------ | ------ | ------- | --------------------- | ---------------------------- |
| radialGaugeStartAngle          | number | 135     | Start angle (degrees) | Only with gaugeType='radial' |
| radialGaugeTicksCount          | number | -       | Number of ticks       | Only with gaugeType='radial' |
| radialGaugeTicksLength         | text   | -       | Length of ticks       | Only with gaugeType='radial' |
| radialGaugeTicksWidth          | text   | -       | Width of ticks        | Only with gaugeType='radial' |
| radialGaugeTicksColor          | color  | -       | Color of ticks        | Only with gaugeType='radial' |
| radialGaugeTicksLabelsFontSize | text   | -       | Font size of labels   | Only with gaugeType='radial' |
| radialGaugeTicksLabelsColor    | color  | -       | Color of labels       | Only with gaugeType='radial' |

### Needle

| Field Name                   | Type     | Default | Description                  | Condition                    |
| ---------------------------- | -------- | ------- | ---------------------------- | ---------------------------- |
| radialGaugeNeedleType        | select   | 'arrow' | Type of needle (arrow, line) | Only with gaugeType='radial' |
| radialGaugeNeedleWidth       | text     | -       | Width of needle              | Only with gaugeType='radial' |
| radialGaugeNeedleStart       | number   | -       | Start point of needle (%)    | Only with gaugeType='radial' |
| radialGaugeNeedleEnd         | number   | -       | End point of needle (%)      | Only with gaugeType='radial' |
| radialGaugeNeedleCircleSize  | number   | -       | Size of needle circle        | Only with gaugeType='radial' |
| radialGaugeNeedleCircleOuter | checkbox | false   | Outer circle                 | Only with gaugeType='radial' |
| radialGaugeNeedleCircleInner | checkbox | false   | Inner circle                 | Only with gaugeType='radial' |

### Coloring

| Field Name                        | Type  | Default | Description             | Condition                    |
| --------------------------------- | ----- | ------- | ----------------------- | ---------------------------- |
| radialGaugeBarProgressColor       | color | -       | Color of progress bar   | Only with gaugeType='radial' |
| radialGaugeBackgroundBarColor     | color | -       | Background color of bar | Only with gaugeType='radial' |
| radialGaugeNeedleColor            | color | -       | Color of needle         | Only with gaugeType='radial' |
| radialGaugeNeedleCircleOuterColor | color | -       | Color of outer circle   | Only with gaugeType='radial' |
| radialGaugeNeedleCircleInnerColor | color | -       | Color of inner circle   | Only with gaugeType='radial' |

### Animation

| Field Name                   | Type     | Default  | Description                                      | Condition                                                 |
| ---------------------------- | -------- | -------- | ------------------------------------------------ | --------------------------------------------------------- |
| radialGaugeAnimated          | checkbox | true     | Enable animation                                 | Only with gaugeType='radial'                              |
| radialGaugeAnimationDuration | number   | 1000     | Duration of animation (ms)                       | Only with gaugeType='radial' and radialGaugeAnimated=true |
| radialGaugeAnimationRule     | select   | 'linear' | Animation easing (linear, easeIn, easeOut, etc.) | Only with gaugeType='radial' and radialGaugeAnimated=true |

## Common Settings

### Fonts

| Field Name         | Type  | Default | Description        | Condition |
| ------------------ | ----- | ------- | ------------------ | --------- |
| gaugeFontFamily    | text  | -       | Font family        | -         |
| gaugeValueFontSize | text  | -       | Font size of value | -         |
| gaugeValueColor    | color | -       | Color of value     | -         |

### Value Box

| Field Name                | Type   | Default | Description      | Condition |
| ------------------------- | ------ | ------- | ---------------- | --------- |
| gaugeValueBoxStroke       | text   | -       | Border width     | -         |
| gaugeValueBoxStrokeColor  | color  | -       | Border color     | -         |
| gaugeValueBoxBackground   | color  | -       | Background color | -         |
| gaugeValueBoxBorderRadius | number | -       | Corner radius    | -         |
| gaugeValueBoxWidth        | text   | -       | Width            | -         |
| gaugeValueBoxPadding      | text   | -       | Inner padding    | -         |

## Gauge Types

### Linear Gauge

- Horizontal progress bar
- Progress bar shows current value
- Ticks (marks) optional
- Icon and value freely positionable
- Gradient colors for progress bar
- Modern, flat design

### Radial Gauge

- Circular instrument (speedometer style)
- Needle points to current value
- Configurable angles (default: 135° to 135° = 270° arc)
- Ticks with labels
- Animated needle movement
- Classic instrument display

## Styling Options

### Colors

- **Gradient**: Linear gauge supports color gradients (start → end)
- **Solid Color**: Radial gauge with single-color progress bar
- **Background**: Separate color for unfilled area
- **Ticks**: Own color for marks and labels

### Fonts

- Global font via `gaugeFontFamily`
- Value font size via `gaugeValueFontSize`
- Tick labels (radial only) separately configurable

### Animations

- Only available for radial gauge
- Various easing functions (linear, easeIn, easeOut, bounce, etc.)
- Configurable duration

## Use Cases

### Linear Gauge

- **Battery Level**: 0-100%, gradient green→yellow→red
- **Volume**: 0-100%, icon left, value right
- **Download Progress**: 0-100%, ticks at 25/50/75
- **Fill Level**: 0-100%, vertical orientation possible via CSS

### Radial Gauge

- **Temperature**: -20°C to 40°C, animated needle
- **Speed**: 0-200 km/h, speedometer style
- **Power**: 0-3000W, ticks every 500W
- **Humidity**: 0-100%, needle with circle base
