# ButtonGroup Widget

![ButtonGroup Widget](../img/collection-button-group.png)

## Description

The ButtonGroup Widget displays multiple values as a button group. It supports various data types and offers flexible styling options.

## Settings Hierarchy

This widget uses all **vis-2 Settings** and **Common Settings**. See [Home](En-Home.md) for details.

The widget-specific settings override the more general settings.

## Widget-Specific Settings

| Field Name             | Type     | Default       | Description                     | Condition         |
| ---------------------- | -------- | ------------- | ------------------------------- | --------- |
| onlyIcon               | checkbox | false         | Show icons only (no text)       | Only when onlyText=false |
| onlyText               | checkbox | false         | Show text only (no icons)       | Only when onlyIcon=false |
| buttonGroupVariant     | select   | 'text'        | Display variant (text, outlined)| -         |
| buttonGroupOrientation | select   | 'horizontal'  | Orientation of the button group | -         |
| buttonGroupColor       | color    | -             | Color scheme of the buttons     | -         |

**Note:** In addition to the settings above, the **Write Value** settings (delay/interval) are available. These control how value changes are written to the OID. See [Common Settings - Write Value](En-Home.md#write-value) for details.

## Variants

### Text (Default)

- Minimalist, text only without background or border
- Lowest visual priority
- Recommended for tertiary actions or dense layouts

### Outlined

- Buttons with border, transparent background
- Less visual weight than filled buttons
- Recommended for secondary actions

## Display Options

### Only Icon

- Enable `onlyIcon` to show only the icons without text
- Useful for compact displays
- Icons should be self-explanatory

### Only Text

- Enable `onlyText` to show only the text without icons
- Useful when visual space is limited
- Recommended for accessibility

## Orientation

### Horizontal (Default)

- Buttons are arranged side by side (left to right)
- Space-saving in height
- Default for most use cases

### Vertical

- Buttons are arranged one below the other (top to bottom)
- Space-saving in width
- Good for narrow layouts or many options

## Styling

### Button Group Color

The `buttonGroupColor` field allows you to set a custom color for the button group using a color picker. This color affects the visual appearance of the buttons when they are in a selected or active state.

## Data Types

The ButtonGroup Widget supports various data types:

### Boolean

- Two buttons: true and false
- Typical application: On/Off, Yes/No

### Number

- Multiple buttons for numeric values
- Example: Fan speeds (0, 1, 2, 3)

### String

- Multiple buttons for text values
- Example: Modes (Auto, Manual, Eco, Comfort)

### Mixed

- Any values
- Flexible application for different data types

## Value-Specific Settings

Individual settings can be made for each button (value):

- Icon (large and small)
- Colors (icon, text, background)
- Header/Footer
- All Common fields with suffix (e.g., icon1, backgroundColor2, ...)

## Use Cases

- **Fan Speeds**: 0, 1, 2, 3 (horizontal, contained)
- **Operating Modes**: Auto, Manual, Eco, Comfort (horizontal, outlined)
- **Favorites**: Selection from predefined scenes (vertical, text)
- **Light Scenes**: Reading, Movie, Relaxation, Party (horizontal, contained)
