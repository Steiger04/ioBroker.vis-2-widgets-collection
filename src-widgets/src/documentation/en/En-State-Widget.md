# State Widget

![State Widget](../img/collection-state.png)

## Description

The State Widget is used to display and control states of various data types (boolean, number, string, mixed). It offers flexible display options and supports push-button functionality.

## Settings Hierarchy

This widget uses all **vis-2 Settings** and **Common Settings**. See [Home](En-Home.md) for details.

The widget-specific and value-specific settings override the more general settings.

## Widget-Specific Settings

| Field Name      | Type     | Default | Description                                              | Condition                                      |
| --------------- | -------- | ------- | -------------------------------------------------------- | ---------------------------------------------- |
| onlyStates      | checkbox | false   | Show only states (values from values_count)              | Only visible when values_count > 0             |
| statePushButton | checkbox | false   | Push-button mode: Value[1] on press, Value[2] on release | Only with onlyStates=true and exactly 2 values |
| onlyDisplay     | checkbox | false   | Display only (no write permissions on OID)               | Only when write=true                           |
| noIcon          | checkbox | false   | Don't show icon                                          | -                                              |
| noValue         | checkbox | false   | Don't show value                                         | -                                              |

## Data Types

The State Widget supports the following data types:

### Boolean

- Two values: true (Value[1]) and false (Value[2])
- Typical application: On/Off switch, status display

### Number

- Numeric values
- Supports units and formatting
- Typical application: Temperature, brightness, percentages

### String

- Text values
- Any character strings
- Typical application: Status messages, modes

### Mixed

- Any values
- Flexible display of different data types
- Typical application: Universal status display

## Push-Button Functionality

With **onlyStates** enabled and exactly **2 defined values**, push-button mode can be used:

- **On press**: Value[1] is sent to the OID
- **On release**: Value[2] is sent to the OID

This enables e.g. shutter control (press = Up, release = Stop) or remote control functions.

**Note:** statePushButton is only displayed when onlyStates is enabled and exactly 2 values are defined.

## Value-Specific Settings

When **values_count > 0**, individual settings can be made for each value that override the Common settings:

| Field Name (Suffix)                     | Description                                     |
| --------------------------------------- | ----------------------------------------------- |
| icon1, icon2, ...                       | Individual large icon for value 1, 2, ...       |
| iconSmall1, iconSmall2, ...             | Individual small icon (SVG) for value 1, 2, ... |
| iconSize1, iconSize2, ...               | Individual icon size for value 1, 2, ...        |
| iconColor1, iconColor2, ...             | Individual icon color for value 1, 2, ...       |
| header1, header2, ...                   | Individual header text for value 1, 2, ...      |
| footer1, footer2, ...                   | Individual footer text for value 1, 2, ...      |
| textColor1, textColor2, ...             | Individual text color for value 1, 2, ...       |
| backgroundColor1, backgroundColor2, ... | Individual background color for value 1, 2, ... |
| ...                                     | All Common fields with suffix                   |

**Example:** For a boolean state with 2 values (true/false):

- `icon1` = Light bulb on (for true)
- `icon2` = Light bulb off (for false)
- `backgroundColor1` = Yellow (for true)
- `backgroundColor2` = Gray (for false)

This gives each state value an individual visual representation.
