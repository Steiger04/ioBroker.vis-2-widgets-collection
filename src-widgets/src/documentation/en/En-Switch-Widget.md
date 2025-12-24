# Switch Widget

![Switch Widget](../img/collection-switch.png)

## Description

The Switch Widget is a specialized switch for boolean values. It provides a modern Material-UI Switch representation with configurable colors and sizes.

## Settings Hierarchy

This widget uses all **vis-2 Settings** and **Common Settings**. See [Home](En-Home.md) for details.

The widget-specific settings override the more general settings.

## Widget-Specific Settings

| Field Name      | Type           | Default | Description                                | Condition            |
| --------------- | -------------- | ------- | ------------------------------------------ | -------------------- |
| thumbSize       | slider (1-100) | -       | Size of the switch thumb in pixels         | -                    |
| thumbColorTrue  | color          | -       | Color of the thumb in "true" state         | -                    |
| thumbColorFalse | color          | -       | Color of the thumb in "false" state        | -                    |
| trackSize       | slider (1-100) | -       | Size of the switch track in pixels         | -                    |
| trackColor      | color          | -       | Color of the track                         | -                    |
| onlyDisplay     | checkbox       | false   | Display only (no write permissions on OID) | Only when write=true |

## Boolean Options

The Switch Widget works with two boolean values:

### True State

- Switch is "on"
- Thumb is displayed in `thumbColorTrue` color
- Typically positioned on the right

### False State

- Switch is "off"
- Thumb is displayed in `thumbColorFalse` color
- Typically positioned on the left

## Visual Representation

The widget consists of two main components:

### Thumb

- Movable part of the switch
- Size adjustable via `thumbSize`
- Color depends on state (thumbColorTrue/thumbColorFalse)

### Track

- Background rail on which the thumb moves
- Size adjustable via `trackSize`
- Color adjustable via `trackColor`

## Use Cases

- **Light Control**: On/Off switch for lamps
- **Device Control**: Enable/Disable devices
- **Mode Switching**: Automatic/Manual, Day/Night, etc.
- **Notifications**: Enable/Disable toggle
