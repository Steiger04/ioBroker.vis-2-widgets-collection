# Select Widget

![Select Widget](../img/collection-select.png)

## Description

The Select Widget provides a dropdown selection for various data types. It is space-saving and clear, especially with many options.

## Settings Hierarchy

This widget uses all **vis-2 Settings** and **Common Settings**. See [Home](En-Home.md) for details.

The widget-specific settings override the more general settings.

## Widget-Specific Settings

| Field Name  | Type     | Default | Description                                | Condition            |
| ----------- | -------- | ------- | ------------------------------------------ | -------------------- |
| arrowColor  | color    | -       | Color of the dropdown arrow                | -                    |
| onlyDisplay | checkbox | false   | Display only (no write permissions on OID) | Only when write=true |

## Data Types

The Select Widget supports various data types:

### Boolean

- Dropdown with two options: true and false
- Compact alternative to Switch or Checkbox
- Typical application: On/Off selection in lists

### Number

- Dropdown with numeric values
- Example: Temperature levels (18, 20, 22, 24°C)
- Good for discrete values with clear meaning

### String

- Dropdown with text values
- Example: Operating modes (Auto, Manual, Eco, Comfort, Sport)
- Standard use case for selection menus

### Mixed

- Dropdown with any values
- Flexible application for different data types
- Example: Mixed lists with numbers and texts

## Functionality

### Closed State

- Shows the currently selected value
- Dropdown arrow in the configured color (`arrowColor`)
- Compact display

### Open State

- List of all available options
- Current value is highlighted
- Click outside closes the dropdown

## Value-Specific Settings

Individual settings can be made for each option in the dropdown:

- Icon (large and small)
- Text (header, footer)
- Colors (icon, text, background)
- All Common fields with suffix (e.g., icon1, header2, ...)

**Note:** Icons and additional texts are displayed in the dropdown list, not in the closed state.

## Use Cases

- **Thermostat Modes**: Auto, Heat, Cool, Eco, Comfort
- **Fan Speeds**: Off, 1, 2, 3, Auto
- **Light Scenes**: Off, Reading, Movie, Party, Relaxation
- **Alarm Mode**: Armed, Partially Armed, Disarmed, Vacation
- **Playlist Selection**: List of all available playlists

## Advantages

- **Space-saving**: Only one line in closed state
- **Clear**: All options in sorted list
- **Scalable**: Suitable for many options (>5)
- **Standard UI**: Familiar control element
