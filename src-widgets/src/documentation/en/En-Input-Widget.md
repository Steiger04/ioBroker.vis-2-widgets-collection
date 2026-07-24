# Input Widget

![Input Widget](../img/collection-input.png)

## Description

The Input Widget displays a text or number value bound to a single OID and allows direct inline editing on click. It accepts the data types string, number, and mixed. In the default mode every keystroke is written (debounced) to the OID; with the OK button enabled the value is only committed on confirmation.

## Settings Hierarchy

This widget uses all **vis-2 Settings** and **Common Settings**. See [Home](En-Home.md) for details.

The widget-specific and value-specific settings override the more general settings.

## Widget-Specific Settings

### Object & Values

| Field Name         | Type     | Default | Description                                                                  | Condition                                              |
| ------------------ | -------- | ------- | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| oid                | id       | -       | Object ID; accepts the types string, number, and mixed                       | -                                                      |
| unit               | text     | ''      | Unit (taken from the object, overridable)                                    | Only when an OID is selected                           |
| ignoreCommonStates | checkbox | true    | Ignore common states (hide value groups derived from `common.states`)        | Only when an OID is selected                           |
| values_count       | number   | 0       | Number of value-specific value groups                                        | Only when type ≠ boolean and ignoreCommonStates = false |

### Input

| Field Name   | Type     | Default    | Description                                                                             | Condition |
| ------------ | -------- | ---------- | --------------------------------------------------------------------------------------- | --------- |
| showOkButton | checkbox | false      | Show OK button: commit value only on OK/Enter/blur (otherwise every keystroke)          | -         |
| inputVariant | select   | 'standard' | Text field variant (standard, outlined, filled)                                         | -         |
| inputPadding | number   | 1          | Inner padding of the input field                                                        | -         |

### Number Range

Only visible when the bound OID is of type **number**.

| Field Name | Type   | Default | Description                                       | Condition  |
| ---------- | ------ | ------- | ------------------------------------------------- | ---------- |
| step       | number | 1       | Step size                                         | Only number |
| minValue   | number | -       | Minimum value (pre-filled from `common.min`)      | Only number |
| maxValue   | number | -       | Maximum value (pre-filled from `common.max`)      | Only number |

### Display

| Field Name  | Type     | Default | Description                          | Condition           |
| ----------- | -------- | ------- | ------------------------------------ | ------------------- |
| onlyDisplay | checkbox | false   | Display only (no inline editing)     | Only when write=true |
| noIcon      | checkbox | false   | Do not show an icon                  | -                   |
| noValue     | checkbox | false   | Do not show a value                  | -                   |

**Note:** In addition to the settings above, the **Write Value** settings (delay/interval) are available. These control how value changes are written to the OID. See [Common Settings - Write Value](En-Home.md#write-value) for details.

## Data Types

The Input Widget supports the following data types:

### String

- Text values, arbitrary strings
- Typical use: status messages, modes, names

### Number

- Numeric values with an optional number range (min/max/step)
- Unit is shown as a suffix in the field
- Typical use: temperature, brightness, percentages

### Mixed

- Arbitrary values (text or number)
- Typical use: universal input

## How It Works

### Display-first Inline Editing

The widget shows the value (and optionally an icon) centered. A click on the display switches inline to a text field:

- The icon is hidden while editing
- For a **number** OID a numeric input field with step/min/max is used
- The OID unit is shown as a suffix on the right of the field
- **Enter** or a click outside ends editing

### Write Mode

- **Without OK button** (default): Every keystroke is forwarded to `useValueState` and written to the OID with a delay (`delay`).
- **With OK button** (`showOkButton`): A local draft is kept; the value is only committed on clicking **OK**, pressing **Enter**, or leaving the field.

### Read-only Mode

When `onlyDisplay` is active or the OID is not writable (`write=false`), the widget never enters edit mode and displays the value purely.

### Conflict Indicator

When the backend value changes while the user is editing (`hasBackendChange`), the input field is highlighted in red (error state).

## Value-specific Settings

When **values_count > 0**, individual Common settings can be overridden per value (e.g. `icon1`, `backgroundColor1`, `textColor1` …). This matches the behavior of the [State Widget](En-State-Widget.md#value-specific-settings) and allows, for example, a distinct background color per state value.

## Use Cases

- **Temperature input**: number OID with min/max/step and °C unit
- **Edit status text**: string OID for status messages or scene names
- **Direct volume entry**: number instead of slider, with OK button to avoid writing too often
- **Universal value**: mixed OID for flexible input
