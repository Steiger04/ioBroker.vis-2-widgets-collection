# ECharts Widget – JSON Formats

This page describes the **JSON structures the datapoint** must deliver in the **JSON** data mode of the [ECharts widget](En-Echarts-Widget.md) — for both payload families (**series document** and **table/columns**), with a short example for every format.

## Context: data modes and payload families

The widget knows the data modes **History** (history adapter fetch, no JSON) and **JSON** (everything from one datapoint). In JSON mode the pinned selector **payload family** chooses **how** the document is read:

| Payload family      | Principle                                                                             | Who owns the series?                                         |
| ------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| **Series document** | The document carries finished series (names + points). Four shapes are auto-detected. | The **payload** — the configurator only styles/hides by name |
| **Table/columns**   | The document is a list of rows; row path + X column + Y columns derive the series.    | The **user** (mapping) — the payload supplies the values     |

Both families read the **same datapoint** — switching the family only deletes the derived configuration (series/axes), never the OID.

## The JSON datapoint

| Property | Requirement                                                          |
| -------- | -------------------------------------------------------------------- |
| Type     | `string` — the state value must be the JSON **text**                 |
| Writing  | `setState(id, JSON.stringify(object))` — **never the object itself** |
| Updates  | Every value change redraws the chart (live subscription)             |

> **Objects read as empty:** if a script passes an unparsed object (instead of a string), the widget reads the value as empty — the empty state remains, no error. Number/boolean values are useless as payloads. ioBroker datapoints of type `json` work as long as the content stays a string.

Example: create the datapoint and fill it from a script:

```js
// Create the datapoint once (type string):
createState('0_userdata.0.charts.daily_statistics', { type: 'string', role: 'json', def: '' });

// Fill it periodically — JSON.stringify produces the text:
const statistics = [
    { day: '2026-01-01', production: 18.4, consumption: 24.1 },
    { day: '2026-01-02', production: 12.7, consumption: 22.8 },
];
setState('0_userdata.0.charts.daily_statistics', JSON.stringify(statistics), true);
```

## Family "Series document"

Four document shapes are detected automatically — the choice happens through the JSON's shape alone (no switch in the configurator).

### Shape 1: object with `series` (multiple series)

```json
{
    "series": [
        {
            "name": "Production",
            "data": [
                [1767225600000, 0],
                [1767229200000, 420],
                [1767232800000, 1850]
            ]
        },
        {
            "name": "Consumption",
            "data": [
                [1767225600000, 610],
                [1767229200000, 720],
                [1767232800000, 680]
            ]
        }
    ]
}
```

Every element becomes a series: `name` is the identity (legend, style, axis binding, hiding), `data` the points. A missing `name` yields `Series n`.

### Shape 2: object with `data` (one series)

```json
{
    "data": [
        [1767225600000, 21.4],
        [1767229200000, 21.9],
        [1767232800000, 22.3]
    ]
}
```

Produces exactly one series named `Series 1`.

### Shape 3: bare points array (one series)

```json
[
    [1767225600000, 21.4],
    [1767229200000, 21.9],
    [1767232800000, 22.3]
]
```

The document itself is the points list — one series (`Series 1`).

### Shape 4: array of series objects (multiple series)

```json
[
    {
        "name": "Production",
        "data": [
            [1767225600000, 0],
            [1767229200000, 420]
        ]
    },
    {
        "name": "Consumption",
        "data": [
            [1767225600000, 610],
            [1767229200000, 720]
        ]
    }
]
```

Detected via the first element with an array-valued `data`; the shape of shape 1 without the enclosing object.

### Point formats (all shapes)

| Form             | Example                                                                         | Timestamp                                         |
| ---------------- | ------------------------------------------------------------------------------- | ------------------------------------------------- |
| Pair array       | `[1767229200000, 420]`                                                          | The first element **must be a number** (epoch ms) |
| Object           | `{ "ts": 1767229200000, "val": 420 }`                                           | `ts`/`time`/`x`; non-numeric ⇒ row index          |
| Object (aliases) | `{ "time": 1767229200000, "value": 420 }` or `{ "x": 1767229200000, "y": 420 }` | Value keys: `val`/`value`/`y`                     |

```json
[
    { "ts": 1767225600000, "val": 21.4 },
    { "time": 1767229200000, "value": 21.9 },
    { "x": 1767232800000, "y": 22.3 }
]
```

The keys may change from point to point — every point is read individually. A string timestamp (`"ts": "2026-01-01"`) is not a number: the point slides onto its row index (0, 1, 2 …) and plots as a flat X position, not as time.

### Naming rules

- `name` is the series' **identity**: style, axis binding and hiding attach to the name (via the overlay) and survive payload changes.
- Series with the **same name** share style, axis and hidden state — use unique names in the payload (the configurator warns about duplicates).
- The payload alone decides the series count and order; adding/removing is impossible in the configurator (hiding only, re-enableable).

## Family "Table/columns"

The document is (or contains) an **array of rows**; every object property of a row is a column. Three settings in the configurator (section **Data source → Mapping** + **Series**) connect payload and chart:

| Setting                                 | Location    | Meaning                                                                                                                                                             |
| --------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Row path** (`rowPath`)                | Data source | Dot-path to the rows array. Empty = the document **itself** must be the array. Array indices allowed. A path that misses the array is this family's only hard error |
| **X column** (`xPath`)                  | Data source | Column of the X dimension; empty = row index                                                                                                                        |
| **Y columns** (`yPath`, one per series) | Series      | One card per bound Y column; plus display name, style, value processing                                                                                             |

### Category example: the document itself is the array

```json
[
    { "room": "Living room", "temp": 21.7 },
    { "room": "Bedroom", "temp": 19.2 },
    { "room": "Kitchen", "temp": 22.9 }
]
```

- Row path: **empty** (top level)
- X column: `room` — text ⇒ **category axis** with the labels "Living room", "Bedroom", "Kitchen" (payload order, duplicates kept)
- Y column: `temp` — one series with 21.7 / 19.2 / 22.9

### Time axis example: date column

```json
[
    { "day": "2026-01-01", "production": 18.4, "consumption": 24.1 },
    { "day": "2026-01-02", "production": 12.7, "consumption": 22.8 },
    { "day": "2026-01-03", "production": 21.3, "consumption": 25.6 }
]
```

- X column: `day` — date **text** is detected ⇒ **time axis**; points become `[ms, value]`, sorted ascending. `2026-01-01` reads as local midnight — full ISO strings (`2026-01-01T12:00:00Z`) keep their offset
- Y columns: `production` **and** `consumption` — two series (two cards in the Series section)

### Row path example: nested document

```json
{
    "query": "SELECT ts, temp FROM history WHERE ...",
    "rows": [
        { "ts": 1767225600000, "temp": 21.4 },
        { "ts": 1767229200000, "temp": 21.9 }
    ]
}
```

- Row path: `rows` — metadata like `query` stays outside
- X column: `ts` (epoch number ⇒ time axis; seconds and milliseconds epochs are detected)
- Y column: `temp`

### Index example: no X column

```json
[{ "temp": 21.4 }, { "temp": 21.9 }, { "temp": 22.3 }]
```

Without an X column (or when the column has no usable values) the widget numbers the rows: X labels `1`, `2`, `3` …; in a pie chart the slices read "Row 1", …

### Example: paths with array indices

```json
[
    {
        "room": "Living room",
        "sensors": [{ "value": 21.7 }, { "value": 48 }]
    },
    {
        "room": "Bedroom",
        "sensors": [{ "value": 19.2 }, { "value": 52 }]
    }
]
```

- X column: `room`
- Y columns: `sensors[0].value` (temperature) and `sensors[1].value` (humidity) — two series from one document

### Pie example: multiple rings

```json
[
    { "room": "Living room", "actual": 21.7, "target": 21.0 },
    { "room": "Bedroom", "actual": 19.2, "target": 19.5 },
    { "room": "Kitchen", "actual": 22.9, "target": 22.0 }
]
```

With the chart type **Pie**, every Y column becomes a ring (here `actual` and `target`). The X column names the slices and drives the color: **same name = same color across all rings**. Without an X column the slices read "Row n".

### X derivation rules (table/columns)

The axis kind derives from the **dominant type** of the X column:

| X column                        | X kind            | Behavior                                                                                                                           |
| ------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Date values                     | **Time axis**     | Points `[ms, value]`; rows with an unparseable X **drop** (no position); sorted ascending, equal timestamps keep the payload order |
| Any other values                | **Category axis** | Labels are the cell text (`String(value)`), payload order, **duplicates kept**; object/array cells fall back to "Row n"            |
| No X column / only empty values | **Row index**     | Labels `1..n`; pie slices "Row n"                                                                                                  |

**Recognized date forms:** ISO 8601 (incl. time/offset), `YYYY-MM-DD`, `DD.MM.YYYY` (optionally `HH:mm[:ss]`), `MM/DD/YYYY` (optionally time) and epoch numbers — milliseconds (≥ 10¹¹) and seconds (≥ 10⁹). Day-only dates count as **local midnight**; full ISO strings with `Z`/offset follow ISO rules. Epoch values written as text (`"1767225600000"`) are **not** numbers and do not read as dates.

## Value interpretation (both families)

Every Y value runs the same chain — first the **value map**, then the **numeric interpretation**, then the **NULL handling**:

### 1. Value map (`valueMap`, optional per series)

- If `String(rawValue)` matches a key of the map **exactly**, the mapped number is adopted.
- A `null` target (in the GUI: an empty target) is a **deliberate gap** — no NULL handling ever fills it.
- Unmatched values pass into the interpretation unchanged.

### 2. Numeric interpretation

| Raw value                                  | Read as                     |
| ------------------------------------------ | --------------------------- |
| `true` / `false` (boolean)                 | `1` / `0`                   |
| `"true"` / `"false"` (text)                | `1` / `0`                   |
| number                                     | unchanged                   |
| `"23,5"` (comma without dot)               | `23.5` — comma decimal      |
| `"23.5 °C"`, `"12 Watt"`                   | prefix number: `23.5`, `12` |
| anything else (`"unreadable"`, objects, …) | **gap** (null) — no error   |

### 3. NULL handling (`keep` / `forward` / `zero`)

Chart-level preset (data source) with a per-series override (series card). Deliberate (mapped) gaps stay immune in every mode.

| Mode                      | Meaning                                                              |
| ------------------------- | -------------------------------------------------------------------- |
| Keep gaps (`keep`)        | gaps stay gaps (default)                                             |
| Fill gaps (`forward`)     | the last value carries forward — on the time axis **after** the sort |
| Fill gaps with 0 (`zero`) | gaps become `0`                                                      |

### Interpretation example

```json
[
    { "pump": true, "pressure": "2,4" },
    { "pump": false, "pressure": "2,1" },
    { "pump": true, "pressure": "unreadable" }
]
```

- `pump` (Y column): `1`, `0`, `1`
- `pressure` (Y column): `2.4`, `2.1`, **gap** (stays a gap in "keep" mode; "fill" would carry 2.1 forward)

## Error and empty cases

| Situation                                                               | Behavior                                                                                           |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Datapoint empty / never written                                         | **Empty state** — placeholder with a configuration hint, no error                                  |
| Invalid JSON (`JSON.parse` fails)                                       | **Error surface** with the parser message                                                          |
| Table: row path misses an array (`rows path "…" is not an array`)       | **Error surface** — the table family's only hard error                                             |
| Table: Y column missing from the document / drifted                     | **Empty series** (no error); the configurator marks the column "no longer in the document"         |
| Table: Y column of type text                                            | the series plots only the cells interpretable as numbers, the rest gaps (hint in the configurator) |
| Series document: shape is neither object-with-`series`/`data` nor array | **Empty state** ("The datapoint delivers no plottable data — check the format")                    |
| Value map misses                                                        | the value passes through the normal interpretation (no error)                                      |

> **Configurator analysis:** in JSON mode the configurator analyzes the current payload live — a column list with type badges (date/number/text/boolean/…), sample values and an X suggestion. Table/columns documents with sensible column names usually only need the mapping confirmed. The analysis is limited to 10 nesting levels.

## Related pages

- [ECharts Widget](En-Echarts-Widget.md) — configurator reference (data source, series, axes, …)
- [JSON Table Widget](En-JsonTable-Widget.md) — tabular **display** of JSON data (without a chart)
