# Input Widget

![Input Widget](../img/collection-input.png)

## Description

The Input Widget displays a text or number value bound to a single OID and allows direct inline editing on click. It accepts the data types string, number, and mixed. In the default mode every keystroke goes to the OID with a delay; with the OK button enabled the input is buffered and written on confirmation, or on leaving the field if it was changed.

## Settings Hierarchy

This widget uses all **vis-2 Settings** and **Common Settings**. See [Home](En-Home.md) for details.

The widget-specific and value-specific settings override the more general settings. The exceptions are under [Common Settings - Value-specific Settings](En-Home.md#value-specific-settings).

## Widget-Specific Settings

These fields are in the **Input** group.

### Object & Values

| Field Name      | Type | Default | Description                                                                                                                                                                                                                                                             | Condition                    |
| --------------- | ---- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| Object ID `oid` | id   | -       | Accepts string, number, and mixed. Picking it supplements the rows from `common.states`, replaces `unit`, `minValue`, and `maxValue`, and sets `onlyDisplay`. Emptying removes all rows and `unit`. With any other type the frame shows a notice instead of the display | -                            |
| Unit `unit`     | text | ''      | Taken from the object and can be overwritten here, emptying removes it, see [Unit](#unit)                                                                                                                                                                               | Only when an OID is selected |

### Input

| Field Name                    | Type                      | Default    | Description                                                                                                                         | Condition |
| ----------------------------- | ------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Show OK button `showOkButton` | checkbox                  | false      | Buffers the input: write on OK and Enter, on leaving only after a change (otherwise every keystroke), see [Write Mode](#write-mode) | -         |
| Input variant `inputVariant`  | select                    | 'standard' | Text field variant (standard, outlined, filled)                                                                                     | -         |
| Input padding `inputPadding`  | number (from 0, step 0.5) | 1          | Horizontal padding around the input field and the OK button while editing, in MUI spacing units                                     | -         |

### Number Range

Only visible when the bound OID is of type **number**. The range guides the spinner and does not limit the input, see [Spinner and Range](#spinner-and-range).

| Field Name           | Type            | Default | Description                                                                | Condition   |
| -------------------- | --------------- | ------- | -------------------------------------------------------------------------- | ----------- |
| Step `step`          | number (from 0) | 1       | Step size of the spinner                                                   | Only number |
| Min value `minValue` | number          | -       | Lower limit of the spinner (taken from `common.min`); empty means no limit | Only number |
| Max value `maxValue` | number          | -       | Upper limit of the spinner (taken from `common.max`); empty means no limit | Only number |

### Display

| Field Name                 | Type     | Default | Description                                                                                                              | Condition                  |
| -------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| Only display `onlyDisplay` | checkbox | false   | Locks editing, see [Lock](#lock). The OID selection sets the field: `true` with `common.write: false`, otherwise `false` | Hidden with `write: false` |
| No icon `noIcon`           | checkbox | -       | No icon in the display and no corner icon                                                                                | -                          |
| No value `noValue`         | checkbox | -       | No text in the display. The footer and the input field keep showing it                                                   | -                          |

**Note:** In addition to the settings above, the **Write Value** settings (**Delay**/**Interval**) are available. In both write modes these control how value changes are written to the OID. See [Common Settings - Write Value](En-Home.md#write-value) for details.

## Data Types

The Input Widget supports the following data types:

### String

- Text field. The text is written unchanged, an emptied field as empty text
- Typical use: status messages, modes, names

### Number

- Number field with an optional spinner range (`minValue`, `maxValue`, `step`). An input that is not a number is not written
- Typical use: temperature, brightness, percentages

### Mixed

- Text field without a spinner, also for numbers
- Typed input is written in the type it looks like: `true`/`false` in any case as a boolean, numeric input as a number (`007` becomes `7`), everything else as text, an emptied field as empty text
- Typical use: universal input

## How It Works

### Display-first Inline Editing

The widget shows the value (and optionally an icon) centered. A click on the display switches inline to a text field that takes the focus:

- The field starts with the current value of the OID, not with the alias, and takes no value from outside after that
- The icon in the display is hidden while editing; the corner icon, header, and footer stay
- For a **number** OID a number field with a spinner is used, for string and mixed a text field
- The unit is shown as a suffix on the right of the field
- The field takes `valueSize` and `textColor`. A gradient appears as its representative solid color, the color at its midpoint; a value without a representative solid color (color name, `transparent`, CSS variable) gives the theme's text color. The suffix takes only the size
- **Enter**, **Escape**, or a click outside ends editing
- In the vis-2 editor an overlay lies over the widget, so a click starts no editing there

### Write Mode

**Without OK button** (default): Every keystroke goes to the OID through the **Write Value** settings; with **Delay** that means only the last of a quick sequence. Enter, Escape, and a click outside only end editing and write nothing new: what was typed stays written, a value still waiting goes out anyway, and without a keystroke nothing is written.

**With OK button** (`showOkButton`): The input is buffered and nothing is written while typing. What happens next depends on whether the input differs from the value at the start of editing. Typing 41 and going back to 40 on a start value of 40 counts as unchanged. The write of this mode also goes through the **Write Value** settings.

| Action        | Input changed | Input unchanged                                                                         |
| ------------- | ------------- | --------------------------------------------------------------------------------------- |
| Click outside | Written       | Nothing is written                                                                      |
| Enter or OK   | Written       | Sent again, unless the conversion would alter or drop the value; then editing just ends |
| Escape        | Discarded     | Nothing is written                                                                      |

Enter and OK can therefore re-send a value on purpose, while clicking into the field and away again never triggers a write. A stored text `007` on a mixed OID would become the number `7`, a `null` on a string OID would become empty text, so Enter and OK send neither unchanged.

In both modes, an input that is not a number (such as an emptied field) is never written to a **number** OID: the object keeps its value, even where this section says "written".

### Spinner and Range

The range guides the spinner (the arrows of the number field and the arrow keys) and does not limit the input: A typed value outside the range is written. Without OK button every spinner step writes like a keystroke.

- **Value outside the range**: The limit the value has crossed no longer applies, so the spinner moves by one step instead of jumping to that limit. With a maximum of 100, a value of 500, and a step of 1, arrow down gives 499. The other limit keeps applying, and once the input is back in range the crossed one applies again.
- **Selecting an OID**: The widget takes only the range the object really declares (`common.min`, `common.max`). A limit the object does not declare stays empty, and a previous one is removed. Emptying the OID leaves the range in place.
- **Empty Min value or Max value field**: Means no limit, not 0.
- **Stored range**: It applies even if the object never declared it, such as 0 to 100. It cannot be told apart from a real range and stays until the fields are emptied or the next OID selection replaces it.

### Unit

The unit comes from the bound object. After an OID is selected it appears in the **Unit** field, where it can be overwritten; emptying the field removes it. A later OID selection replaces it, and removing the OID empties the field.

The display and the footer show the unit behind the value without a space, the input field as a suffix, also when the value matches no row of the state editor. An empty value shows no unit. An alias set in the matching row is shown in the display and the footer instead.

The **Unit** field may be empty although the object's unit is shown, because the display reads the unit stored on selection. It fills on the next OID selection; until then, type something into the field and empty it again to remove the unit.

### Lock

When **Only display** is active or the OID is not writable (`write: false`), a click starts no editing, and the display keeps following the value. The widget checks this at the start only: if **Only display** becomes active during running editing, editing goes on and keeps writing.

### Conflict Indicator

The line of the input field turns red on a session conflict: the value has changed significantly from outside (e.g. by an adapter or script) since the click into the field. The text color stays.

- A change before the click does not count, however recent it is.
- For numbers and text that reads as a number, changes smaller than 1 such as sensor noise neither turn the field red nor clear the red. The comparison is with the last observed value, so small steps do not add up. For any other text, every change counts.
- A value from outside does not turn the field red if it equals the last typed value, before the first keystroke and with OK button the value at the start.
- Right after your own write, the widget ignores changes from outside for `delay` + 1500 ms, see [Write Value](En-Home.md#write-value); such a change in that time does not turn the field red. On a very slow connection, the late confirmation of an older keystroke can turn it red.
- The field stays red until editing ends. Without OK button your own next keystroke clears it, because your value is then in the object; an input that is not written, such as an emptied number field, does not. The next editing session starts without the marking, at the value current by then.

Red is only a warning: The value from outside does not replace your input. With OK button, a changed input and a deliberate Enter or OK are still written and overwrite the value from outside, an unchanged Enter or OK with the value at the start; a click outside without a change and Escape leave it alone. Without OK button, your next keystroke overwrites it, while Enter, Escape, and a click outside leave it alone.

## Value-specific Settings

Individual Common settings can be overridden per value (e.g. icon, background color, text color). They are edited in the state editor, the **Values** group: a searchable list with one row per value and, below it, the fields of the selected row. Rows can be added, cloned, moved, cleared, and deleted. Type, default and precedence of the fields are under [Common Settings - Value-specific Settings](En-Home.md#value-specific-settings).

When an OID is selected, the states from its `common.states` are added as rows and existing rows are kept. **Recreate from common.states** replaces all rows.

The row whose value matches the current value applies its settings; the text form is compared, and if several match, the first one applies. This matches the behavior of the [State Widget](En-State-Widget.md#value-specific-settings) and allows, for example, a distinct background color per state value. The rows do not restrict the input: Any value can still be typed.

- **Display**: `alias{n}` replaces the value including the unit, without an alias `value{n}` with the unit applies. The input field always shows the value of the OID.
- **Input field**: `valueSize{n}` and `textColor{n}` also apply in the field. Without OK button the active row follows every value that is written at once.
- **Icon**: In the display the size is a percentage of the space there, without a value 100 %. If no row is active, size, offset, and color mask of this icon take the base fields.

## Use Cases

- **Temperature input**: number OID with `minValue`, `maxValue`, `step`, and °C unit
- **Edit status text**: string OID for status messages or scene names, with OK button so that no half-typed text goes out
- **Direct volume entry**: number instead of slider, with OK button to avoid writing too often
- **Universal value**: mixed OID for flexible input: `true` writes a boolean, `21.5` a number, `an` a text
