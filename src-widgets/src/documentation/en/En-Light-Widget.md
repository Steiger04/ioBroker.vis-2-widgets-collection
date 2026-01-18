# Light Widget

![Light Widget](../img/collection-light.png)

## Description

The Light Widget is a comprehensive light control with color selection, brightness control, and color temperature control. It supports RGB, HSV, and CCT (Color Temperature) lights.

## Settings Hierarchy

This widget uses all **vis-2 Settings** and **Common Settings**. See [Home](En-Home.md) for details.

The widget-specific settings override the more general settings.

## Color Light Configuration

### UI Component Selection

| Field Name           | Type     | Default | Description                                      | Condition                                    |
| -------------------- | -------- | ------- | ------------------------------------------------ | -------------------------------------------- |
| colorLightUIComponent| select   | 'wheel' | Color picker UI (wheel, box, slider)             | Only when colorLightType is not 'none' or 'cct'|
| colorWheelLightness  | checkbox | false   | Show lightness control in color wheel            | Only when colorLightUIComponent='wheel'      |

### Color Type Configuration

| Field Name           | Type   | Default | Description                                      | Condition |
| -------------------- | ------ | ------- | ------------------------------------------------ | --------- |
| colorLightType       | select | 'none'  | Color control type (none, cct, rgb, rgbcct, r/g/b, r/g/b/cct, h/s/v, h/s/v/cct) | - |

### Color Temperature (CCT)

| Field Name              | Type   | Default | Description                           | Condition                                    |
| ----------------------- | ------ | ------- | ------------------------------------- | -------------------------------------------- |
| colorLightTemperatureOid| id     | -       | OID for color temperature control     | Only when colorLightType includes 'cct'      |
| colorLightCtMin         | number | 2000    | Minimum color temperature (500-10000K)| Only when colorLightTemperatureOid is set   |
| colorLightCtMax         | number | 6500    | Maximum color temperature (500-10000K)| Only when colorLightTemperatureOid is set   |

### RGB Configuration

| Field Name           | Type   | Default | Description                           | Condition                                    |
| -------------------- | ------ | ------- | ------------------------------------- | -------------------------------------------- |
| colorLightRgbHexOid  | id     | -       | OID for RGB hex value (#RRGGBB)       | Only when colorLightType is 'rgb' or 'rgbcct'|
| colorLightRedOid     | id     | -       | OID for red channel (0-255)           | Only when colorLightType is 'r/g/b' or 'r/g/b/cct'|
| colorLightGreenOid   | id     | -       | OID for green channel (0-255)         | Only when colorLightType is 'r/g/b' or 'r/g/b/cct'|
| colorLightBlueOid    | id     | -       | OID for blue channel (0-255)          | Only when colorLightType is 'r/g/b' or 'r/g/b/cct'|

### HSV Configuration

| Field Name              | Type   | Default | Description                           | Condition                                    |
| ----------------------- | ------ | ------- | ------------------------------------- | -------------------------------------------- |
| colorLightHueOid        | id     | -       | OID for hue (0-360)                   | Only when colorLightType is 'h/s/v' or 'h/s/v/cct'|
| colorLightSaturationOid | id     | -       | OID for saturation (0-100)            | Only when colorLightType is 'h/s/v' or 'h/s/v/cct'|
| colorLightBrightnessOid | id     | -       | OID for brightness/value (0-100)      | Only when colorLightType is 'cct', 'h/s/v', or 'h/s/v/cct'|

### Button Mode

| Field Name                 | Type     | Default | Description                                      | Condition                    |
| -------------------------- | -------- | ------- | ------------------------------------------------ | ---------------------------- |
| colorLightButton           | checkbox | false   | Enable button mode (long press opens color picker)| -                           |
| colorLightDelayLongPress   | number   | 500     | Long press delay in milliseconds (0-10000)       | Only when colorLightButton=true|
| colorLightModalWidth       | number   | -       | Width of color picker modal (0-5000px)           | Only when colorLightButton=true|
| colorLightModalHeight      | number   | 300     | Height of color picker modal (0-5000px)          | Only when colorLightButton=true|

### Styling

| Field Name              | Type   | Default | Description                           | Condition |
| ----------------------- | ------ | ------- | ------------------------------------- | --------- |
| colorLightSliderWidth   | slider | 1       | Width of color sliders (0-10)         | -         |
| colorLightBorderWidth   | slider | 3       | Border width (0-100)                  | -         |
| colorLightBorderColor   | color  | -       | Border color                          | -         |
| colorLightPadding       | number | 1       | Inner padding (min: 0, step: 0.5)     | -         |

### Switch OID

| Field Name           | Type | Default | Description                           | Condition |
| -------------------- | ---- | ------- | ------------------------------------- | --------- |
| colorLightSwitchOid  | id   | -       | OID for on/off switch (boolean)       | -         |

### Color Space

| Field Name      | Type   | Default | Description                                       | Condition |
| --------------- | ------ | ------- | ------------------------------------------------- | --------- |
| colorLightGamut | select | -       | Color space (default, A, B, C for Philips Hue)    | -         |

### Auto-Detection

The Light widget can automatically detect related color control states when you select a switch OID. If the selected object is part of a device channel, the widget will scan for related states (RGB, CCT, brightness, etc.) based on ioBroker state roles and pre-fill the corresponding OID fields.

## Light Types

### RGB

- **RGB Hex**: Complete color value as hex string (e.g., #FF0000 for red)
- **Separate Channels**: Red, green, blue each 0-255
- **Usage**: Standard for most RGB lights
- **Advantage**: Direct control of all colors

### CCT (Color Temperature)

- **Color Temperature**: Warm white (2700K) to cool white (6500K)
- **White Tones Only**: No color control
- **Usage**: White LED strips, ceiling lights
- **Advantage**: Natural white tones for work/living spaces

### HSV (Hue, Saturation, Value)

- **Hue**: 0-360° (color wheel)
- **Saturation**: 0-100% (gray to full color)
- **Value (Brightness)**: 0-100%
- **Usage**: Philips Hue, some smart lights
- **Advantage**: Intuitive color selection via color wheel

## UI Components

### Wheel (Color Wheel)

- Circular color selection
- Intuitive color choice by click/touch
- Optional with brightness ring (`colorWheelLightness`)
- Best for RGB/HSV
- Compact display

### Box (Color Field)

- Rectangular color selection
- Brightness and saturation in one field
- Hue via slider
- Precise color selection
- Larger display

### Slider

- Separate sliders for each component
- RGB: 3 sliders (red, green, blue)
- HSV: 3 sliders (hue, saturation, value)
- CCT: 1 slider (temperature)
- Precise control
- Compact with few values

## OID Detection

The widget can automatically detect OIDs of a light:

### Automatic Detection

1. Select a switch OID (`colorLightSwitchOid`)
2. Widget analyzes the device
3. Automatically finds RGB/HSV/CCT OIDs
4. Configures type accordingly

### Manual Configuration

- All OIDs can be set manually
- Useful for unusual devices
- Allows individual assignment

## Color Control

### RGB Control

**Option 1: RGB Hex**

- Set only `colorLightRgbHexOid`
- Widget writes hex value (e.g., #FF0000)
- Simplest configuration

**Option 2: Separate Channels**

- Set `colorLightRedOid`, `colorLightGreenOid`, `colorLightBlueOid`
- Widget writes separate values (0-255)
- More control, but more complex

### HSV Control

**Option 1: HSV Combined**

- Set `colorLightHsvOid`
- Widget writes combined HSV string
- Format depends on device

**Option 2: Separate Values**

- Set `colorLightHueOid`, `colorLightSaturationOid`, `colorLightBrightnessOid`
- Widget writes separate values
- More flexible, but more OIDs

### Color Temperature (CCT)

- Set `colorLightTemperatureOid`
- Define min/max in Kelvin
- Slider shows warm white → cool white
- Widget writes Kelvin value

## Brightness Control

- Separate OID: `colorLightBrightnessOid`
- Value: 0-100%
- Slider in widget
- Can be combined with all light types

## Button Mode

With `colorLightButton = true`:

- Widget opens modal on click
- No direct writing to OID
- Long-press delay configurable
- Useful for complex controls without direct OID

## Modal Dialog

On widget click (except button mode):

- Opens color selection dialog
- Size adjustable via `colorLightModalWidth/Height`
- Complete color control
- Closes after selection or click outside

## Color Space (Gamut)

Optional color space for precise color reproduction:

- **sRGB**: Standard (Internet, monitors)
- **DCI-P3**: Extended color space (Apple displays)
- **Adobe RGB**: Professional photography
- **Rec. 2020**: HDR, future-proof

**Note:** Only set if your light supports a specific color space.

## Use Cases

### RGB LED Strip

```
colorLightType: rgb
colorLightUiComponent: wheel
colorLightSwitchOid: hue.0.strip.on
colorLightRgbHexOid: hue.0.strip.rgb
colorLightBrightnessOid: hue.0.strip.level
```

### Philips Hue (HSV)

```
colorLightType: hsv
colorLightUiComponent: wheel
colorLightSwitchOid: hue.0.lamp.on
colorLightHueOid: hue.0.lamp.hue
colorLightSaturationOid: hue.0.lamp.sat
colorLightBrightnessOid: hue.0.lamp.bri
```

### CCT Ceiling Light

```
colorLightType: cct
colorLightUiComponent: slider
colorLightSwitchOid: zigbee.0.lamp.state
colorLightTemperatureOid: zigbee.0.lamp.color_temp
colorLightBrightnessOid: zigbee.0.lamp.brightness
colorLightCtMin: 2700
colorLightCtMax: 6500
```

### RGB Button (without OID)

```
colorLightButton: true
colorLightDelayLongPress: 1000
colorLightUiComponent: box
```

Use JavaScript script to react to widget events.
