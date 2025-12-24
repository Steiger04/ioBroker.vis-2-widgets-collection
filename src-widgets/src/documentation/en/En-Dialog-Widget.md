# Dialog Widget

![Dialog Widget](../img/collection-dialog.png)

## Description

The Dialog Widget opens an overlay window to display a selected view. It enables complex interactions in a modal dialog.

## Settings Hierarchy

This widget uses all **vis-2 Settings** and **Common Settings**. See [Home](En-Home.md) for details.

The widget-specific settings override the more general settings.

## Widget-Specific Settings

### View and Content

| Field Name          | Type     | Default | Description                        | Condition |
| ------------------- | -------- | ------- | ---------------------------------- | --------- |
| view                | select   | -       | View to be displayed in the dialog | -         |
| dialogHeaderAsTitle | checkbox | false   | Use header as dialog title         | -         |

### Size Settings

| Field Name    | Type     | Default | Description                       | Condition |
| ------------- | -------- | ------- | --------------------------------- | --------- |
| dialogWidth   | number   | 80      | Width of the dialog               | -         |
| dialogHeight  | number   | 80      | Height of the dialog              | -         |
| dialogInPixel | checkbox | false   | Size in pixels instead of percent | -         |

### Close Button

| Field Name              | Type     | Default | Description                         | Condition                        |
| ----------------------- | -------- | ------- | ----------------------------------- | -------------------------------- |
| dialogCloseButton       | checkbox | true    | Show close button                   | -                                |
| dialogCloseButtonTop    | text     | -       | Position from top (e.g., "10px")    | Only when dialogCloseButton=true |
| dialogCloseButtonBottom | text     | -       | Position from bottom (e.g., "10px") | Only when dialogCloseButton=true |
| dialogCloseButtonColor  | color    | -       | Color of the close button           | Only when dialogCloseButton=true |

### Auto-Close

| Field Name      | Type   | Default | Description                          | Condition |
| --------------- | ------ | ------- | ------------------------------------ | --------- |
| dialogAutoClose | number | -       | Automatic close after x milliseconds | -         |

### OID Control

| Field Name | Type | Default | Description                                        | Condition |
| ---------- | ---- | ------- | -------------------------------------------------- | --------- |
| cid        | text | -       | OID to control the dialog (true=open, false=close) | -         |

## View Selection

- Select any view from your vis-2 project
- The view is fully rendered in the dialog
- All widgets in the view are interactive
- Navigation within the view is possible

**Note:** Choose views optimized for dialog display (compact layouts).

## Size Settings

### Percent (Default)

- `dialogInPixel = false`
- Width and height as percentage of the screen
- Example: 80% = 80% of screen width/height
- Responsive: Adapts to different screen sizes

### Pixel

- `dialogInPixel = true`
- Width and height in absolute pixels
- Example: 800 = 800px width
- Fixed size: Independent of screen size

**Recommendation:** Use percent for responsive designs, pixels for fixed layouts.

## Close Button

### Position

- **Top**: Position from top (e.g., "10px", "5%")
- **Bottom**: Position from bottom (e.g., "10px", "5%")
- If both empty: Default position (top right)

### Color

- Adjustable via `dialogCloseButtonColor`
- Default: Theme color (usually black/white)

### Disable

- Set `dialogCloseButton = false` to hide the button
- User can then only close dialog via auto-close or OID

## Auto-Close

- Dialog closes automatically after configured milliseconds
- Example: 5000 = dialog closes after 5 seconds
- Useful for notifications or temporary displays
- Leave empty for manual closing

## OID Control

With the `cid` (Control ID), the dialog can be controlled via an OID:

### Open Dialog

- Set the OID to `true`
- Dialog opens automatically

### Close Dialog

- Set the OID to `false`
- Dialog closes automatically

**Use Case:** Open dialog on specific events (e.g., alarms, notifications)

**Example:**

```
cid = "javascript.0.showAlarmDialog"
```

Script sets `showAlarmDialog = true` on alarm → dialog opens

## Dialog Title

### With dialogHeaderAsTitle

- `dialogHeaderAsTitle = true`
- The widget's header is used as the dialog's title bar
- Professional display with dedicated title area

### Without dialogHeaderAsTitle

- `dialogHeaderAsTitle = false`
- No separate title, only view content
- Maximum flexibility for custom titles within the view

## Use Cases

- **Detail Views**: Click on widget opens detailed view
- **Settings**: Open settings dialog for complex configurations
- **Notifications**: Automatic opening on alarms (via OID)
- **Forms**: Input dialogs for user input
- **Media Player**: Detailed control in separate dialog
