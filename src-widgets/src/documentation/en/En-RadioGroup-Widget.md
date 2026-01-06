# RadioGroup Widget

![RadioGroup Widget](../img/collection-radio-group.png)

## Description

The RadioGroup Widget displays multiple values as radio buttons. All options are simultaneously visible, making selection easier.

## Settings Hierarchy

This widget uses all **vis-2 Settings** and **Common Settings**. See [Home](En-Home.md) for details.

The widget-specific settings override the more general settings.

## Widget-Specific Settings

| Field Name                   | Type     | Default      | Description                                    | Condition                  |
| ---------------------------- | -------- | ------------ | ---------------------------------------------- | -------------------------- |
| radioOrientation             | select   | 'horizontal' | Orientation of the radio group                 | -                          |
| radioGroupUncheckedIconColor | color    | -            | Color of unselected radio buttons              | -                          |
| onlyDisplay                  | checkbox | false        | Display only (no write permissions on OID)     | Only when write=true       |
| hideLabels                   | checkbox | false        | Hide labels (show icons only)                  | -                          |
| labelPlacement               | select   | 'end'        | Position of the label relative to radio button | Only when hideLabels=false |

**Note:** In addition to the settings above, the **Write Value** settings (delay/interval) are available. These control how value changes are written to the OID. See [Common Settings - Write Value](En-Home.md#write-value) for details.

## Orientation

### Horizontal (Default)

- Radio buttons are arranged side by side (left to right)
- Space-saving in height
- Good for 2-4 options
- Compact display

### Vertical

- Radio buttons are arranged one below the other (top to bottom)
- Space-saving in width
- Good for more than 4 options or long labels
- Clear display

## Label Settings

### Hide Labels

- Enable `hideLabels` to show only the radio buttons without text
- Useful for compact displays or when icons are self-explanatory
- Radio buttons are centered

### Label Placement

The position of the label can be controlled via `labelPlacement` (only visible when `hideLabels` is disabled):

#### Start

- Label is displayed to the left of the radio button (in LTR layout)
- Horizontal arrangement
- Default left-aligned

#### End (Default)

- Label is displayed to the right of the radio button (in LTR layout)
- Horizontal arrangement
- Default right-aligned

## Icon Colors

### Selected Radio Button

- Displayed in the primary color or a custom color
- Controlled via Common settings or value-specific settings

### Unselected Radio Buttons

- Color adjustable via `radioGroupUncheckedIconColor`
- Default: Gray/disabled color of the theme
- Helps with visual distinction

## Data Types

The RadioGroup Widget supports various data types:

### Boolean

- Two radio buttons: true and false
- Alternative to Switch/Checkbox with explicit labeling
- Typical application: Yes/No questions

### Number

- Multiple radio buttons for numeric values
- Example: Fan speeds (0, 1, 2, 3)
- Good for discrete values with clear meaning

### String

- Multiple radio buttons for text values
- Example: Operating modes (Auto, Manual, Eco, Comfort)
- Standard use case

### Mixed

- Multiple radio buttons for any values
- Flexible application for different data types

## Value-Specific Settings

Individual settings can be made for each radio button (value):

- Icon (large and small)
- Text (header, footer as label)
- Colors (icon, text)
- All Common fields with suffix (e.g., icon1, header2, ...)

**Note:** The header is typically used as the label for the radio button.

## Use Cases

- **Heating Mode**: Auto, Heat, Cool, Eco (vertical)
- **Light Scenes**: Reading, Movie, Party, Relaxation (horizontal)
- **Priority**: Low, Medium, High (horizontal)
- **Weekday Selection**: Mon, Tue, Wed, Thu, Fri, Sat, Sun (horizontal)
- **Payment Method**: Credit Card, PayPal, Invoice, Prepayment (vertical)

## Advantages over Select

- **All options visible**: No interaction needed to see options
- **Faster selection**: One click is enough
- **Better overview**: Especially with 2-5 options
- **Icons possible**: Visual support for each option

## Disadvantages over Select

- **More space**: All options require space
- **Not for many options**: Becomes cluttered with >7 options
