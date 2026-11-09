# Select Widget

![Select Widget](../img/collection-select.png)

## Description

The Select Widget provides a dropdown selection over the rows of an OID and writes the value of the chosen entry, optionally to a separate Control ID. It accepts the data types boolean, number, string and mixed. It is space-saving and clear, especially with many options.

## Settings Hierarchy

This widget uses all **vis-2 Settings** and **Common Settings**. See [Home](En-Home.md) for details.

The widget-specific and value-specific settings override the more general settings.

## Widget-Specific Settings

The fields are in the **Select** group.

| Field Name                 | Type     | Default | Description                                                                                                                                                                                                                              | Condition                                      |
| -------------------------- | -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Object ID `oid`            | id       | -       | OID whose value decides the display (status); accepts the types boolean, number, string and mixed                                                                                                                                        | -                                              |
| Unit `unit`                | text     | ''      | Unit (taken from the object, can be overridden here, clearing removes it); appears on labels without an alias                                                                                                                            | Only when an OID is selected                   |
| Only display `onlyDisplay` | checkbox | false   | Display only (selection locked, nothing is written). Every pick of OID or Control ID sets the field anew: true when the write target has `write=false`, otherwise false                                                                  | Hidden when the write target has `write=false` |
| Control ID `cid`           | id       | -       | Optional second OID the selection is written to (types boolean, number, string, mixed)                                                                                                                                                   | -                                              |
| Arrow color `arrowColor`   | color    | -       | Solid colors only. Color of the dropdown arrow. Without a value the text color of the selected value, with a gradient its color in the middle. The color field then shows the color from the base fields, not that of the selected value | -                                              |

**Note:** In addition to the settings above, the **Write Value** settings (delay/interval) are available. These control how value changes are written to the write target. See [Common Settings - Write Value](En-Home.md#write-value) for details.

### Control ID (separate status and command)

Many devices separate the status (e.g. `…mode`) from the command (e.g. `…setMode`). For this, the Select Widget has the **Control ID**:

- **Display**: The Select always shows the value of the OID (status). With a Control ID the display therefore changes after a selection only when the status reports the new value; without one at once.
- **Writing**: When a Control ID is set, every selection is written to the Control ID only, the OID is not written. Without a Control ID, the OID is written.
- **Write target**: The OID that is written to is called the write target: the Control ID when its object is resolved, otherwise the OID. A Control ID that cannot be resolved or has a type other than boolean, number, string or mixed does not count; the OID is written then.
- **Lock**: The selection is locked when **Only display** is active or the write target has `write=false`. A read-only status OID therefore does not lock the Select as long as a writable Control ID is set. When the write target has `write=false`, **Only display** is hidden, because the selection is locked anyway.
- **Values**: The options are defined only once, picking the Control ID creates no rows. The selected option writes its value to the Control ID, converted to its type. So it must understand the same values the status reports.

## Data Types

The entries come from the rows. A row matches the value of the OID when both are equal as text; `1` and `'1'` are therefore the same state. When writing, per type of the write target:

### Boolean

- Dropdown with two fixed rows `true` and `false`: `value{n}` is hidden, rows cannot be added, cloned or deleted. The alias comes from `common.states`, otherwise `TRUE` and `FALSE`
- Compact alternative to Switch or Checkbox
- Typical application: On/Off selection in lists

### Number

- Dropdown with numeric values, written as a number. A non-numeric row never becomes active and writes nothing
- Example: Temperature levels (18, 20, 22, 24°C), without an alias the unit comes from the object
- Good for discrete values with clear meaning

### String

- Dropdown with text values, written as text
- Example: Operating modes (Auto, Manual, Eco, Comfort, Sport)
- Standard use case for selection menus

### Mixed

- Dropdown with any values: `true` and `false` (regardless of case) are written as boolean, number-like values as a number (`007` becomes `7`), everything else as text
- A row whose text changes in the process (`007`, `TRUE`) no longer matches the value of the OID afterwards and does not become active
- Example: Mixed lists with numbers and texts

## Functionality

### Closed State

- Shows icon and label of the first row whose value matches the value of the OID; without a matching row the field stays empty
- Dropdown arrow in the configured color (`arrowColor`), otherwise in the text color of the selected value
- Compact display: The field stays 10 % narrower than the measured space in the frame

### Open State

- List of all rows with a value in their order; rows with the same value remain separate entries
- Current value is highlighted; a background from `background{n}` or `background` also applies to the chosen entry and replaces the highlight
- On hover an entry shows its background with 50 % alpha, with a gradient its color in the middle. A color value that cannot be evaluated (such as a color name or a CSS variable) stays unchanged
- The surface of the list takes `frameBackground` of the selected value, its border the vis-2 fields from [CSS Border](En-Home.md#css-border). `noCard` takes away its shadow, but not the surface; an embedded Select keeps the shadow
- The list is at most as wide as the measured space in the frame; a long list scrolls
- Click outside closes the dropdown

### Writing

- A selection writes the value of the entry with the **Write Value** settings to the write target
- Choosing the entry currently displayed writes nothing
- Choosing another entry with the same value writes again; the first matching row stays displayed

## Value-Specific Settings

Each option is a row in the state editor, the **Values** group (fields see [Value-specific Settings](En-Home.md#value-specific-settings)). On an OID pick the states from `common.states` are added as rows, existing rows stay. **Recreate from common.states** replaces all rows. Without a row with a value the list stays empty. In this widget the fields work as follows:

- **Label**: `alias{n}`, otherwise the value with unit. HTML is allowed, size from `valueSize{n}`, color from `textColor{n}` (gradient possible)
- **Icon**: `icon{n}` or `iconSmall{n}`, otherwise the base icon. The OID pick sets `icon` from the object; it then appears on every option without an icon of its own
- **Icon size**: Height from `iconSize{n}`, otherwise from the base field `iconSize`, in each case in percent of 24 px; without a value 24 px
- **Background**: `background{n}` colors the entry in the list and, while the row is active, the content area
- **Frame**: `header{n}`, `headerSize{n}`, `footer{n}`, `footerSize{n}` and `frameBackground{n}` apply while the row is active; with several active rows the first one

**Note:** Icon and label appear in the dropdown list and in the closed state. The header and footer of a row appear in the frame only, not in the list.

## Use Cases

- **Thermostat Modes**: string OID with the values Auto, Heat, Cool, Eco, Comfort
- **Fan Speeds**: mixed OID with the values Off, 1, 2, 3, Auto; the numbers are written as a number, Off and Auto as text
- **Light Scenes**: number OID with `common.states` Off, Reading, Movie, Party, Relaxation as alias
- **Alarm Mode**: Status as OID, command as Control ID, values for Armed, Partially Armed, Disarmed, Vacation
- **Playlist Selection**: string OID with one row per available playlist

## Advantages

- **Space-saving**: Only one line in closed state
- **Clear**: All options in one list, in the order of the rows
- **Scalable**: Suitable for many options (>5)
- **Standard UI**: Familiar control element
