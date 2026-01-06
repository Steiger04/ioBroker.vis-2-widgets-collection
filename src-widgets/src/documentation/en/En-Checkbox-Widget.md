# Checkbox Widget

![Checkbox Widget](../img/collection-checkbox.png)

## Description

The Checkbox Widget provides a checkbox representation for boolean values with configurable label placement.

## Settings Hierarchy

This widget uses all **vis-2 Settings** and **Common Settings**. See [Home](En-Home.md) for details.

The widget-specific settings override the more general settings.

## Widget-Specific Settings

| Field Name             | Type     | Default | Description                                    | Condition            |
| ---------------------- | -------- | ------- | ---------------------------------------------- | -------------------- |
| checkboxLabelPlacement | select   | 'end'   | Position of the label relative to the checkbox | -                    |
| withoutLabel           | checkbox | false   | Show checkbox without label                    | -                    |
| onlyDisplay            | checkbox | false   | Display only (no write permissions on OID)     | Only when write=true |

**Note:** In addition to the settings above, the **Write Value** settings (delay/interval) are available. These control how value changes are written to the OID. See [Common Settings - Write Value](En-Home.md#write-value) for details.

## Label Placement

The position of the label can be controlled via `checkboxLabelPlacement`:

### Top

- Label is displayed above the checkbox
- Vertical arrangement

### Bottom

- Label is displayed below the checkbox
- Vertical arrangement

### Start

- Label is displayed to the left of the checkbox (in LTR layout)
- Horizontal arrangement
- Default left-aligned

### End (Default)

- Label is displayed to the right of the checkbox (in LTR layout)
- Horizontal arrangement
- Default right-aligned

### Without Label

- Enable `withoutLabel` to show only the checkbox without text
- Useful for compact displays or when the label is replaced by other elements (header/footer)

## Use Cases

- **Settings**: Enable/Disable options
- **Checklists**: Check off tasks
- **Filters**: Selection of filter criteria
- **Consents**: Confirmations/agreements
- **Notifications**: Enable/Disable toggle with label
