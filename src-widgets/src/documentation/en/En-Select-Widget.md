# Select Widget

![Select Widget](../img/collection-select.png)

## Description

The Select Widget provides a dropdown selection for various data types. It is space-saving and clear, especially with many options.

## Settings Hierarchy

This widget uses all **vis-2 Settings** and **Common Settings**. See [Home](En-Home.md) for details.

The widget-specific settings override the more general settings.

## Widget-Specific Settings

| Field Name  | Type     | Default                          | Description                                                                                        | Condition                                    |
| ----------- | -------- | -------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| onlyDisplay | checkbox | false                            | Display only (selection locked, nothing is written)                                                | Hidden when the write target has write=false |
| cid         | id       | -                                | Control ID: optional second OID the selection is written to (types boolean, number, string, mixed) | -                                            |
| arrowColor  | color    | Text color of the selected value | Color of the dropdown arrow                                                                        | -                                            |

**Note:** In addition to the settings above, the **Write Value** settings (delay/interval) are available. These control how value changes are written to the write target. See [Common Settings - Write Value](En-Home.md#write-value) for details.

### Control ID (separate status and command)

Many devices separate the status (e.g. `…mode`) from the command (e.g. `…setMode`). For this, the Select Widget has the **Control ID**:

- **Display**: The Select always shows the value of the OID (status).
- **Writing**: When a Control ID is set, every selection is written to the Control ID only — the OID is not written. Without a Control ID, the OID is written as usual.
- **Write target**: The OID that is written to is called the write target — the Control ID when set, otherwise the OID.
- **Lock**: The selection is locked when **Only display** is active or the write target has `write=false`. A read-only status OID therefore does not lock the Select as long as a writable Control ID is set. When the write target has `write=false`, **Only display** is hidden, because the selection is locked anyway.
- **Values**: The options are defined only once. The selected option writes its value unchanged to the Control ID — so it must understand the same values the status reports.

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
- Dropdown arrow in the configured color (`arrowColor`), otherwise in the text color of the selected value
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
