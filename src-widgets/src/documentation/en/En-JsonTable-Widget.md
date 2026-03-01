# JSON Table Widget

![JSON Table Widget](../img/collection-json-table.png)

## Description

The JSON Table Widget displays tabular data from a JSON-valued ioBroker state object. It uses TanStack Table v8 (headless) for powerful features like sorting, filtering, pagination, and column customization. Columns are auto-discovered from the JSON structure and can be extensively configured through the visual column editor.

## Settings Hierarchy

This widget uses all **vis-2 Settings** and **Common Settings**. See [Home](En-Home.md) for details.

The widget-specific settings override the more general settings.

## Data Source

| Field Name | Type   | Default | Description                                          | Condition |
| ---------- | ------ | ------- | ---------------------------------------------------- | --------- |
| oid        | id     | -       | OID for JSON data (type: string, mixed, or json)     | -         |

The JSON data can be:
- **Array of objects**: Each object represents a row
- **Nested objects**: Flattened automatically with configurable depth
- **JSON string**: Parsed automatically

## Column Configuration

### Column Editor

| Field Name   | Type   | Default | Description                            | Condition |
| ------------ | ------ | ------- | -------------------------------------- | --------- |
| columnConfig | custom | -       | Visual column configuration editor     | -         |

The column editor provides:
- **Drag & drop reordering**: Rearrange columns by dragging
- **Visibility toggle**: Show/hide individual columns
- **Column settings**: Configure label, width, alignment, format
- **Conditional styling**: Apply styles based on cell values
- **Data type detection**: Automatic type recognition (string, number, boolean, date)

### Column Properties

Each column can be configured with:

| Property     | Description                                          |
| ------------ | ---------------------------------------------------- |
| id           | Unique column identifier (auto-generated from JSON)  |
| label        | Display name in header                               |
| width        | Column width (px, %, or auto)                        |
| minWidth     | Minimum column width                                 |
| maxWidth     | Maximum column width                                 |
| align        | Text alignment (left, center, right)                 |
| visible      | Show/hide column                                     |
| sortable     | Enable sorting for this column                       |
| filterable   | Enable filtering for this column                     |

### Column Formatting

| Format Type  | Description                                          | Options                                              |
| ------------ | ---------------------------------------------------- | ---------------------------------------------------- |
| String       | Text display with optional truncation                | maxLength, ellipsis                                  |
| Number       | Numeric formatting with locale support               | decimals, prefix, suffix, locale                     |
| Boolean      | Boolean as icons, text, or custom values             | trueText/falseText, trueIcon/falseIcon               |
| Date         | Date/time formatting with locale support             | format string, locale                                |

### Conditional Styling

Apply dynamic styles based on cell values:
- **Conditions**: Compare against fixed values or thresholds
- **Styles**: Background color, text color, font weight, icon
- **Multiple rules**: Priority-based rule application
- **Visual preview**: See effective result immediately

## Features

### Sorting

| Field Name       | Type     | Default | Description                           | Condition |
| ---------------- | -------- | ------- | ------------------------------------- | --------- |
| tableSorting     | checkbox | true    | Enable column sorting                 | -         |
| tableSortingMulti| checkbox | false   | Enable multi-column sorting (Ctrl+Click) | -      |

### Filtering

| Field Name      | Type     | Default | Description                           | Condition |
| --------------- | -------- | ------- | ------------------------------------- | --------- |
| tableFiltering  | checkbox | true    | Enable column filtering               | -         |
| tableQuickFilter| checkbox | false   | Show global search field              | -         |
| tableColumnMenu | checkbox | true    | Show column menu (filter/sort/hide)   | -         |
| tableHiding     | checkbox | true    | Allow hiding columns via menu         | -         |

### Pagination

| Field Name              | Type     | Default   | Description                           | Condition |
| ----------------------- | -------- | --------- | ------------------------------------- | --------- |
| tablePagination         | checkbox | true      | Enable pagination                     | -         |
| tablePageSize           | number   | 25        | Initial page size                     | Pagination enabled |
| tablePageSizeOptions    | text     | '10,25,50,100' | Available page sizes (comma-separated) | Pagination enabled |
| tableVirtualizeThreshold| number   | 50        | Row count threshold for virtualization | -         |

### Row Selection

| Field Name         | Type     | Default | Description                           | Condition |
| ------------------ | -------- | ------- | ------------------------------------- | --------- |
| tableRowSelection  | checkbox | false   | Enable row selection (checkboxes)      | -         |

### Analysis Options

| Field Name     | Type   | Default | Description                           | Condition |
| -------------- | ------ | ------- | ------------------------------------- | --------- |
| tableMaxDepth  | number | 10      | Maximum nesting depth for JSON flattening | -    |

## Layout

### Table Layout

| Field Name         | Type     | Default     | Description                           | Condition |
| ------------------ | -------- | ----------- | ------------------------------------- | --------- |
| tableDensity       | select   | 'standard'  | Row density (compact, standard, comfortable) | -   |
| tableRowHeight     | number   | -           | Fixed row height (px)                 | -         |
| tableHeaderHeight  | number   | -           | Header height (px)                    | -         |
| tableAutoSize      | checkbox | false       | Auto-size columns to fit container    | -         |
| tableHeaderElevation| slider  | 6           | Header shadow elevation (0-24)        | -         |
| jsonTablePadding   | number   | 1           | Inner padding                         | -         |

### Table Border

| Field Name   | Type   | Default | Description                           | Condition |
| ------------ | ------ | ------- | ------------------------------------- | --------- |
| borderWidth  | slider | 0       | Outer border width (0-20)             | -         |
| borderStyle  | select | 'solid' | Border style (none, solid, dashed, etc.) | -      |
| borderColor  | color  | -       | Border color                          | -         |
| borderRadius | text   | -       | Border radius (CSS value)             | -         |

### Header Styling

| Field Name            | Type   | Default | Description                           | Condition |
| --------------------- | ------ | ------- | ------------------------------------- | --------- |
| tableHeaderBgColor    | color  | -       | Header background color               | -         |
| tableHeaderTextColor  | color  | -       | Header text color                     | -         |
| tableHeaderFontSize   | number | -       | Header font size (px)                 | -         |
| headerBorderWidth     | slider | 0       | Header bottom border width (0-10)     | -         |
| headerBorderColor     | color  | -       | Header border color                   | -         |

### Cell Borders

| Field Name                | Type     | Default | Description                           | Condition                    |
| ------------------------- | -------- | ------- | ------------------------------------- | ---------------------------- |
| tableShowCellBorders      | checkbox | false   | Show vertical cell borders            | -                            |
| verticalCellBorderWidth   | slider   | 1       | Vertical border width (0-10)          | Cell borders enabled         |
| verticalCellBorderColor   | color    | -       | Vertical border color                 | Cell borders enabled         |
| tableShowRowBorders       | checkbox | true    | Show horizontal row borders           | -                            |
| horizontalCellBorderWidth | slider   | 1       | Horizontal border width (0-10)        | Row borders enabled          |
| horizontalCellBorderColor | color    | -       | Horizontal border color               | Row borders enabled          |

### Cell Styling

| Field Name         | Type   | Default | Description                           | Condition |
| ------------------ | ------ | ------- | ------------------------------------- | --------- |
| evenRowColor       | color  | -       | Background color for even rows        | -         |
| oddRowColor        | color  | -       | Background color for odd rows         | -         |
| tableCellFontSize  | number | -       | Cell font size (px)                   | -         |

## JSON Data Formats

### Simple Array

```json
[
  {"name": "John", "age": 30, "city": "New York"},
  {"name": "Jane", "age": 25, "city": "London"}
]
```

### Nested Objects

```json
[
  {
    "user": {"name": "John", "email": "john@example.com"},
    "stats": {"logins": 42, "lastLogin": "2024-01-15"}
  }
]
```

Nested paths are flattened to `user.name`, `stats.logins`, etc.

### Array Values

```json
[
  {"id": 1, "tags": ["urgent", "work"]},
  {"id": 2, "tags": ["personal"]}
]
```

Arrays are displayed as comma-separated values or can be expanded.

## Use Cases

### Device List

```
oid: javascript.0.deviceList
tableSorting: true
tableFiltering: true
tableQuickFilter: true
tablePagination: true
tablePageSize: 25
```

JSON structure:
```json
[
  {"device": "Living Room Light", "type": "bulb", "state": "on", "battery": 100},
  {"device": "Kitchen Sensor", "type": "motion", "state": "idle", "battery": 85}
]
```

### Log Table

```
oid: javascript.0.logs
tableSorting: true
tableSortingMulti: true
tableFiltering: true
tablePagination: true
tablePageSize: 50
tableDensity: compact
```

### Status Dashboard

```
oid: javascript.0.statusData
tableAutoSize: true
tablePagination: false
tableShowRowBorders: true
evenRowColor: #f5f5f5
```

### Conditional Formatting Example

Configure columns to show:
- Green background for battery > 80%
- Yellow background for battery 50-80%
- Red background for battery < 50%

This is done through the column editor's conditional styling feature.

## Performance Tips

1. **Virtualization**: Automatically enabled for tables with more than `tableVirtualizeThreshold` rows
2. **Pagination**: Use for large datasets to improve render performance
3. **Max Depth**: Lower `tableMaxDepth` for deeply nested JSON to reduce processing time
4. **Column Visibility**: Hide unnecessary columns to reduce DOM elements

## Integration with ioBroker

### Creating JSON Data

Use a JavaScript adapter script to generate JSON data:

```javascript
// Example: Aggregate device data into JSON
const devices = $('channel[state.id=*.state]');
const tableData = devices.map(id => ({
  name: getObject(id).common.name,
  state: getState(id).val,
  lastUpdate: new Date(getState(id).ts).toISOString()
}));
setState('javascript.0.deviceTable', JSON.stringify(tableData), true);
```

### Reacting to Row Selection

Bind `tableRowSelection` to a state and process selected rows in your logic.
