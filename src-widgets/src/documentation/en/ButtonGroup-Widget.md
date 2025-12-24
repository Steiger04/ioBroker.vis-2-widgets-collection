# ButtonGroup Widget

![ButtonGroup Widget](img/collection-button-group.png)

## Description

The ButtonGroup Widget displays multiple values as a button group. It supports various data types and offers flexible styling options.

## Settings Hierarchy

This widget uses all **vis-2 Settings** and **Common Settings**. See [Home](Home.md) for details.

The widget-specific settings override the more general settings.

## Widget-Specific Settings

| Field Name             | Type   | Default      | Description                     | Condition |
| ---------------------- | ------ | ------------ | ------------------------------- | --------- |
| buttonGroupVariant     | select | 'contained'  | Display variant of the buttons  | -         |
| buttonGroupOrientation | select | 'horizontal' | Orientation of the button group | -         |
| buttonGroupColor       | select | 'primary'    | Color scheme of the buttons     | -         |

## Variants

### Contained (Default)

- Full-surface buttons with background color
- Clear visual separation between buttons
- Recommended for primary actions

### Outlined

- Buttons with border, transparent background
- Less visual weight than Contained
- Recommended for secondary actions

### Text

- Minimalist, text only without background or border
- Lowest visual priority
- Recommended for tertiary actions or dense layouts

## Orientation

### Horizontal (Default)

- Buttons are arranged side by side (left to right)
- Space-saving in height
- Default for most use cases

### Vertical

- Buttons are arranged one below the other (top to bottom)
- Space-saving in width
- Good for narrow layouts or many options

## Color Schemes

The color of the buttons can be controlled via `buttonGroupColor`:

- **Primary**: Primary color of the theme (default)
- **Secondary**: Secondary color of the theme
- **Success**: Green for successful/positive actions
- **Error**: Red for erroneous/negative actions
- **Warning**: Orange/Yellow for warnings
- **Info**: Blue for information

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
