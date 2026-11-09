# State Widget

![State Widget](../img/collection-state.png)

## Description

The State Widget shows a state of the data types boolean, number, string or mixed as a button and writes it by click, as a push button or through a change dialog. Icon and value can be hidden separately.

## Settings Hierarchy

This widget uses all **vis-2 Settings** and **Common Settings**. See [Home](En-Home.md) for details.

The widget-specific and value-specific settings override the more general settings. The exceptions are under [Common Settings - Value-specific Settings](En-Home.md#value-specific-settings).

## Widget-Specific Settings

These fields are in the **State** group.

| Field Name                    | Type     | Default | Description                                                                                                                                                                                                                           | Condition                                              |
| ----------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| Object ID `oid`               | id       | -       | Accepts boolean, number, string and mixed. Picking it supplements the rows from `common.states`, replaces `unit` and sets `onlyDisplay`. Emptying it removes all rows. With another type the frame shows a hint instead of the button | -                                                      |
| Unit `unit`                   | text     | ''      | Taken from the object and can be overwritten here, emptying removes it. A later OID selection replaces it                                                                                                                             | Only when an OID is selected                           |
| Only states `onlyStates`      | checkbox | false   | Operation through the rows only, see [Click Behavior](#click-behavior). The dialog shows no slider                                                                                                                                    | Only visible with at least one row, blank rows count   |
| Push button `statePushButton` | checkbox | false   | Push-button mode: Value[1] on press, Value[2] when the press ends, see [Push-Button Functionality](#push-button-functionality)                                                                                                        | Only with `onlyStates` and exactly 2 rows with a value |
| Only display `onlyDisplay`    | checkbox | false   | Locks the widget, the display keeps following the value. The OID selection sets the field: `true` with `common.write: false`, otherwise `false`                                                                                       | Hidden with `write: false`                             |
| No icon `noIcon`              | checkbox | -       | No icon in the button and no corner icon                                                                                                                                                                                              | -                                                      |
| No value `noValue`            | checkbox | -       | No text in the button. The footer keeps showing it                                                                                                                                                                                    | -                                                      |

**Note:** In addition to the settings above, the **Write Value** settings (**Delay**/**Interval**) are available. These control how value changes are written to the OID. See [Common Settings - Write Value](En-Home.md#write-value) for details. They are hidden in active push-button mode, see [Immediate Writes](#immediate-writes). When the widget is removed, for example by a view change, it sends a value still waiting at once.

## Data Types

The State Widget supports the following data types. A row is active when the text form of its value equals the text form of the OID value: `1` and `"1"` are the same state.

### Boolean

- Two fixed rows: true (Value[1]) and false (Value[2]), in the order of `common.states` when it names both. The alias comes from `common.states`, otherwise `TRUE` and `FALSE`
- **Add row**, **Clone row** and **Delete row** do not exist, `value{n}` is hidden
- Typical application: On/Off switch, status display

### Number

- Numeric values with their unit, without further formatting
- Only this type gets the [slider](#slider) in the dialog. A row value that is no number never becomes active and writes nothing
- Typical application: Temperature, brightness, percentages

### String

- Text values, the row value is written as text
- Without rows a click does nothing
- Typical application: Status messages, modes

### Mixed

- Written in the type the row value looks like: `true`/`false` as a boolean, number-like values as a number, everything else as text. `007` becomes `7`, and the row does not become active afterwards, because `007` and `7` differ as text
- Without rows a click does nothing
- Typical application: Universal status display

## Click Behavior

What a click on the button does depends on **Only states** and the number of rows with a value. Rows without a value or with nothing but spaces do not count, `false` and `0` are values.

| Configuration               | Click                                                                           |
| --------------------------- | ------------------------------------------------------------------------------- |
| Only states off             | Opens the [change dialog](#change-dialog)                                       |
| Only states on, 1 row       | Writes the value of this row, even if the OID already has it                    |
| Only states on, 2 rows      | Toggles: If the first row is active, the second is written, otherwise the first |
| Only states on, more than 2 | Opens the [change dialog](#change-dialog)                                       |
| Push-button mode            | Writes nothing, see [Push-Button Functionality](#push-button-functionality)     |

If the dialog would have neither a list nor a slider, it does not open and the click does nothing. This also hits a number OID without rows when **Only states** is stored: The field is hidden then and keeps its effect. A locked widget (**Only display** or an OID with `write: false`) does not react to the click.

A click writes through the [Write Value](En-Home.md#write-value) settings. Several clicks within the waiting time send only the last value.

## Push-Button Functionality

Push-button mode is active when **Only states** and **Push button** are enabled and the widget has exactly **2 rows with a value**. Value[1] and Value[2] are these two rows in their order.

This enables e.g. shutter control (press = Up, release = Stop) or remote control functions.

**Note:** **Push button** is only displayed when **Only states** is enabled and exactly 2 rows have a value. Two rows, one of them blank, make no push button. A row with a binding counts as a row with a value in the editor, even if the binding resolves to nothing at runtime.

### One Press

- **Pressing** with the main button, by touch or with a pen: Value[1] is sent to the OID.
- **Releasing**: Value[2] is sent to the OID.
- **Leaving the whole button while holding**: Acts as a release. Moving between the icon and the text inside the button does not count. A finger sliding off the button counts as leaving too; this is checked in the touch emulation of Chromium, not yet on real devices.
- **A touch canceled by the browser**: Acts as a release.
- **A short tap**: Sends both values shortly after each other, Value[1] first, then Value[2]. There is no minimum duration.

Value[2] comes only out of a running press, and exactly once per press. So nothing is sent in these cases:

- **Passing over** with the mouse without pressing.
- **Coming back still pressed** after the pointer left the button. Only a new press sends Value[1] again.
- **Right and middle mouse button**.
- **A further finger** while a press is running. Only the first pointer counts.
- **Enter and Space**. Push-button mode does not react to the keyboard.

### Ending from Outside

- **View change**: If the widget is removed while holding, it sends Value[2].
- **Lock taking hold**: If **Only display** locks the widget while holding, the press ends and Value[2] is sent. A later release sends nothing more, even if the lock has been lifted by then.
- **OID with `write: false`**: Such an OID takes no value, Value[2] included.
- **End of push-button mode**: If the widget is no push button anymore while holding, for example because a row loses its value through a binding, the release sends nothing. The OID stays on Value[1].

A locked widget starts no press.

### Immediate Writes

Both values go to the OID at once, so a short tap does not lose its Value[1]. A value still waiting in the delay or interval is dropped. That is why **Interval**, **Interval value** and **Delay**, together with their heading "Write value", are hidden in active push-button mode. The stored values stay and apply again once push-button mode is off.

### Touch and Context Menu

In push-button mode the button's surface does not scroll (`touch-action: none`), and the browser's context menu stays away, under the lock too. Outside push-button mode the button stays as it is.

## Change Dialog

The click opens the dialog when **Only states** is off or more than 2 rows have a value, see [Click Behavior](#click-behavior). It shows the slider at the top and the list below, whichever of them exists. It closes through the cross, Escape or a click beside the dialog, not through a choice.

- **Title**: The header text of the active row, otherwise that of the widget, otherwise the name of the OID, otherwise "Change value". HTML is rendered. **No header** has no effect here.
- **Colors**: The surface takes `background-color` from [CSS Background](En-Home.md#css-background), otherwise `background{n}` of the active row, otherwise `background`. Without a value, the surface of the theme stays. The title and the list take the text color of the button. With a gradient as text color, the title shows the gradient and the list a solid color taken from it.
- **Writing**: The list and the slider write through the [Write Value](En-Home.md#write-value) settings, only the push button passes them by. Closing the dialog does not drop a waiting value.
- **Lock taking hold**: If the widget locks while the dialog is open, the list and the slider write nothing more and keep showing the value. The dialog stays open and can be closed.

### List

- **Entries**: One entry per row with a value, in the order of the rows. Rows with the same value stay separate entries.
- **Text**: The alias of the row, HTML is rendered. If it is empty or consists only of spaces, the value with its unit is shown.
- **Marking**: All entries matching the current value of the OID are marked, including rows with the same value. The marking also follows changes from outside.
- **Choice**: A click writes the value of the entry, and the dialog stays open.

### Slider

The slider appears only for an OID of type **number**, with **Only states** off and when the minimum is below the maximum. With minimum ≥ maximum there is no slider.

- **Range**: When an OID is selected, the widget makes a copy of the object data and takes `common.min` and `common.max` into it. A limit the object does not declare is pre-filled there with 0 or 100. A number OID without a range therefore shows a slider from 0 to 100. The range cannot be set in the widget and limits only the slider, not the list entries. Both limits are labeled at the slider.
- **Step**: `common.step` of the object, also from the copy. Without one, or with a value of 0 or below, the step is 1.
- **Later changes to the object**: The copy is made only when an OID is selected. A changed range or step applies after the next OID selection. A copy without a step stays at step 1 until then.
- **Dragging**: The slider writes while it is dragged, not only on release. The display follows at once, the values go to the OID according to the [Write Value](En-Home.md#write-value) settings.
- **Position**: On opening, the slider stands at the current value, a numeric string counting as a number. With any other value it stands at 0 and stays there until a number comes. If the value changes from outside, the slider follows while the dialog is open, also with changes smaller than 1. Choosing a list entry with a number sets it to that number. The echo of an own value does not move it, nor does a change inside the echo window from [Write Value](En-Home.md#write-value).

## Value-Specific Settings

Common settings can be overridden for each value. This happens in the state editor, the **Values** group: a searchable list with one row per value and below it the fields of the selected row. Rows can be added, cloned, moved, cleared and deleted. Type, default and precedence of the fields are under [Common Settings - Value-specific Settings](En-Home.md#value-specific-settings).

When an OID is selected, the states from `common.states` are added as rows, existing rows stay. **Recreate from common.states** replaces all rows.

The row whose value matches the current value applies its settings. If several match, the first one applies to the button, the frame and the dialog title. The fields work like this in the State Widget:

| Field Name (Suffix)                                            | Description                                                                                                               |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Rows `values_count`                                            | Number of rows, default 0                                                                                                 |
| Icon `icon{n}`                                                 | Large icon in the button and as the corner icon                                                                           |
| Small icon `iconSmall{n}`                                      | Small icon (SVG) in the button and as the corner icon, applies with an empty `icon{n}`                                    |
| Icon size `iconSize{n}`                                        | Size of the icon in the button in percent of the room there, without a value 100 %. The corner icon takes `iconSize` only |
| Enable color mask `enableIconColorMask{n}`                     | Also colors a URL icon in the button. The corner icon takes `enableIconColorMask` only                                    |
| Icon color `iconColor{n}`                                      | Color of the icon in the button and of the corner icon                                                                    |
| Icon X offset `iconXOffset{n}`, Icon Y offset `iconYOffset{n}` | Offset of the icon in the button. The corner icon takes `iconXOffset` and `iconYOffset` only                              |
| Header text `header{n}`                                        | Text of the header and the dialog title                                                                                   |
| Header size `headerSize{n}`                                    | Font size of the header                                                                                                   |
| Alias `alias{n}`                                               | Text in the button and in the list of the dialog                                                                          |
| Value `value{n}`                                               | Value the row writes and by which it is recognized as active                                                              |
| Value size `valueSize{n}`                                      | Font size in the button                                                                                                   |
| Footer text `footer{n}`                                        | Text of the footer                                                                                                        |
| Footer size `footerSize{n}`                                    | Font size of the footer                                                                                                   |
| Text color `textColor{n}`                                      | Text in the button and in the dialog, not in the header and footer                                                        |
| Background `background{n}`                                     | Content area and surface of the dialog                                                                                    |
| Frame background `frameBackground{n}`                          | Frame area                                                                                                                |

If no row is active, size, offset and color mask of the icon in the button take the base fields.

**Example:** For a boolean state with 2 values (true/false):

- `icon1` = Light bulb on (for true)
- `icon2` = Light bulb off (for false)
- `background1` = `#ffc107` (for true)
- `background2` = `#9e9e9e` (for false)

This gives each state value an individual visual representation.
