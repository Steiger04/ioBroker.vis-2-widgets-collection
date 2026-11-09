# ECharts Widget – JSON Formats

This page describes the **JSON structures the data point** must deliver in the **JSON** data mode of the [ECharts widget](En-Echarts-Widget.md#data-modes-and-payload-families) — for both payload families (**Finished series** and **Table / columns**), with a short example for every format. The fields for it are on the widget page under [JSON mode](En-Echarts-Widget.md#json-mode).

## Context: data modes and payload families

The widget knows the data modes **History** (fetched through a history adapter, no JSON) and **JSON** (everything from one data point). In JSON mode the pinned selector **Payload family** chooses **how** the payload is read:

| Payload family      | Principle                                                                            | Who owns the series?                                         |
| ------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| **Finished series** | The payload carries finished series (names + points). Four shapes are auto-detected. | The **payload** — the configurator only styles/hides by name |
| **Table / columns** | The payload is a list of rows; rows path + X column + Y columns derive the series.   | The **user** (mapping) — the payload supplies the values     |

Both families read the **same data point** — switching the family resets the data path (series, Y axes, style and hiding of payload series, mapping, markings), the JSON data point stays.

## The JSON data point

| Property | Requirement                                                                              |
| -------- | ---------------------------------------------------------------------------------------- |
| Type     | `string` — the state value must be the JSON **text**                                     |
| Writing  | `setState(id, JSON.stringify(object))` — **never the object itself**                     |
| Updates  | Every value change redraws the chart (live subscription)                                 |
| Points   | No upper limit: **Max. points** applies to history only, the payload limits its own size |

> **Other value types:** the widget reads an unparsed object (instead of a string) as empty — the empty state remains, no error. Numbers and booleans are useless as payloads: they do parse, but yield the empty state with Finished series and the error surface with Table / columns. ioBroker data points of type `json` work as long as the value stays a string.

Example: create the data point and fill it from a script:

```js
// Create the data point once (type string):
createState('0_userdata.0.charts.daily_statistics', { type: 'string', role: 'json', def: '' });

// Fill it periodically — JSON.stringify produces the text:
const statistics = [
    { day: '2026-01-01', production: 18.4, consumption: 24.1 },
    { day: '2026-01-02', production: 12.7, consumption: 22.8 },
];
setState('0_userdata.0.charts.daily_statistics', JSON.stringify(statistics), true);
```

## Family "Finished series"

Four payload shapes are detected automatically — the choice happens through the JSON's shape alone (no switch in the configurator). The payload supplies names and points only, the widget does not read other keys of a series (`color`, `type`, `stack` …). With the chart type **Pie** every series becomes a slice, the slice aggregation condenses its points. The cards are described under [JSON: finished series](En-Echarts-Widget.md#json-finished-series-cartesian).

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

Every element becomes a series: `name` is the identity (legend, style, axis binding, hiding), `data` the points. If `name` is missing or not a string, the series is called `Series n`; without an array in `data` it stays empty. If `series` and `data` both occur, `series` applies.

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

The payload itself is the points list — one series (`Series 1`).

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

The first element other than `null` decides: an object with an array-valued `data` makes the array a series list, otherwise shape 3 applies. In substance it is shape 1 without the enclosing object.

### Point formats (all shapes)

| Form             | Example                                                                         | Timestamp                                                     |
| ---------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Pair array       | `[1767229200000, 420]`                                                          | The first element **must be a number**; else array index, gap |
| Object           | `{ "ts": 1767229200000, "val": 420 }`                                           | `ts`, else `time`, else `x`; non-numeric ⇒ array index        |
| Object (aliases) | `{ "time": 1767229200000, "value": 420 }` or `{ "x": 1767229200000, "y": 420 }` | Value keys: `val`, else `value`, else `y`                     |
| Other            | `420`, `"420"`                                                                  | No point: array index and gap                                 |

```json
[
    { "ts": 1767225600000, "val": 21.4 },
    { "time": 1767229200000, "value": 21.9 },
    { "x": 1767232800000, "y": 22.3 }
]
```

The keys may change from point to point — every point is read individually. Timestamps count as milliseconds unchanged: seconds epochs are not converted here, nothing is sorted. A string timestamp (`"ts": "2026-01-01"`) is not a number: the point slides onto its array index (0, 1, 2 …) and lands as a millisecond value at the start of the time axis (1970), not at its time.

### Naming rules

- `name` is the series' **identity**: style, axis binding and hiding attach to the name. The style of a vanished name stays stored and applies again once the name returns; a renamed name is a new series.
- Series with the **same name** share style, axis and hidden state — use unique names in the payload (the configurator warns about duplicates).
- The payload alone decides the series count and order; adding/removing is impossible in the configurator (hiding only, re-enableable).
- The open configurator reconciles the axes: a new name gets its own Y axis, a set binding survives payload changes. A vanished or hidden name loses its binding, an axis without a visible series falls. Without a binding the runtime draws on the first Y axis.

## Family "Table / columns"

The payload is (or contains) an **array of rows**; every object property of a row is a column. Three settings in the configurator (section **Data source**, tab **Mapping**, and section **Series**) connect payload and chart; the cards are described under [JSON: table / columns](En-Echarts-Widget.md#json-table--columns-cartesian):

| Setting                            | Location    | Meaning                                                                                                                                                                                                                                       |
| ---------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Rows path** (`jsonRowPath`)      | Data source | Dot-path to the rows array. Empty = the payload **itself** must be the array. The chips offer the arrays reachable through object keys, the runtime also reads array indices. If the path misses an array, the widget shows the error surface |
| **X column** (`jsonXPath`)         | Data source | Column of the X dimension; empty = row index                                                                                                                                                                                                  |
| **Y column** (`yPath`, per series) | Series      | One card per bound Y column; plus display name (empty = last path segment), style, value processing                                                                                                                                           |

### Category example: the payload itself is the array

```json
[
    { "room": "Living room", "temp": 21.7 },
    { "room": "Bedroom", "temp": 19.2 },
    { "room": "Kitchen", "temp": 22.9 }
]
```

- Rows path: **empty** (top level)
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

- X column: `day` — date **text** is detected ⇒ **time axis**; points become `[ms, value]`, sorted ascending. `2026-01-01` reads as local midnight — ISO strings with an offset (`2026-01-01T12:00:00Z`) keep their offset
- Y columns: `production` **and** `consumption` — two series (two cards in the Series section)

### Rows path example: nested payload

```json
{
    "query": "SELECT ts, temp FROM history WHERE ...",
    "rows": [
        { "ts": 1767225600000, "temp": 21.4 },
        { "ts": 1767229200000, "temp": 21.9 }
    ]
}
```

- Rows path: `rows` — metadata like `query` stays outside; the chip carries the **Suggested** badge, it is not set
- X column: `ts` (epoch number ⇒ time axis; seconds and milliseconds epochs are detected)
- Y column: `temp`

### Index example: no X column

```json
[{ "temp": 21.4 }, { "temp": 21.9 }, { "temp": 22.3 }]
```

Without an X column (or when the column has only `null` or no values at all) the widget numbers the rows: X labels `1`, `2`, `3` …; with the chart type Pie the slices read "Row 1", …

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
- Y columns: `sensors[0].value` (temperature) and `sensors[1].value` (humidity) — two series from one payload. Without their own names both read `value` (last path segment), the configurator warns

### Pie example: multiple rings

```json
[
    { "room": "Living room", "actual": 21.7, "target": 21.0 },
    { "room": "Bedroom", "actual": 19.2, "target": 19.5 },
    { "room": "Kitchen", "actual": 22.9, "target": 22.0 }
]
```

With the chart type **Pie**, every Y column becomes a ring (here `actual` and `target`). The X column names the slices and drives the color: **same name = same color across all rings**; rows of the same name stay separate slices and share one legend entry. With a date column the slices carry the payload text, sorted by time; rows without a readable date drop out. Without an X column the slices read "Row n".

### X derivation rules (table / columns)

The axis kind derives from the types of the non-`null` values in the X column. A single date value in an otherwise text column already makes it a date column; any other mix is a category:

| X column                     | X kind            | Behavior                                                                                                                                     |
| ---------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Date values (also with text) | **Time axis**     | Points `[ms, value]`; rows without a readable date **drop** (no position); sorted ascending, equal timestamps keep the payload order         |
| Any other values             | **Category axis** | Labels are the cell text (`String(value)`), payload order, **duplicates kept**; `null`, missing, object and array cells fall back to "Row n" |
| No X column / only `null`    | **Row index**     | Labels `1..n`; pie slices "Row n"                                                                                                            |

**Recognized date forms:** ISO 8601 **with** `Z` or an offset, `YYYY-MM-DD`, `DD.MM.YYYY` (optionally `HH:mm[:ss]`), `MM/DD/YYYY` (optionally time), two-digit day and month, and epoch numbers — milliseconds (≥ 10¹¹) and seconds (≥ 10⁹; smaller numbers are categories). Forms without an offset count as **local time**, day-only dates as local midnight. ISO text without an offset (`2026-01-01T12:00:00`) is **not** a date; epoch values written as text (`"1767225600000"`) are **not** numbers and do not read as dates.

## Value interpretation (both families)

Every Y value runs the same start of the [value chain](En-Echarts-Widget.md#per-series-value-processing-value-chain) — first the **value mapping**, then the **plottable value**, then the **null values**:

### 1. Value mapping (`valueMap`, optional per series)

- If `String(rawValue)` matches a key of the map **exactly**, the mapped number is adopted.
- A `null` target (in the GUI: an empty target) is a **deliberate gap** — no null-values stage ever fills it.
- Unmatched values pass into the plottable value unchanged.

### 2. Plottable value

| Raw value                                                     | Read as                               |
| ------------------------------------------------------------- | ------------------------------------- |
| `true` / `false` (boolean)                                    | `1` / `0`                             |
| `"true"` / `"false"` (text)                                   | `1` / `0`                             |
| number                                                        | unchanged                             |
| `"23,5"` (comma without dot)                                  | `23.5` — comma decimal                |
| `"1.234,5"` (comma and dot)                                   | `1.234` — thousands are not supported |
| `"23.5 °C"`, `"12 Watt"`                                      | prefix number: `23.5`, `12`           |
| anything else (`"unreadable"`, `""`, `null`, objects, arrays) | **gap** (null) — no error             |

### 3. Null values (`keep` / `forward` / `zero`)

The preset is the chart setting **Null values** (`ignoreNull`): it is in the panel in history mode only (tab **Data retrieval**), but applies here too. The field of the same name on the **Data** tab of the series card (`nullMode`) overrides it; the slice rows of a pie with Finished series do not have this tab. Deliberate (mapped) gaps stay immune in every mode.

| Mode                          | Meaning                                                                                                    |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Keep gaps (`keep`)            | gaps stay gaps (default)                                                                                   |
| Forward-fill gaps (`forward`) | the last value carries forward — on the time axis **after** the sort; before the first value the gap stays |
| Fill gaps with 0 (`zero`)     | gaps become `0`                                                                                            |

### Interpretation example

```json
[
    { "pump": true, "pressure": "2,4" },
    { "pump": false, "pressure": "2,1" },
    { "pump": true, "pressure": "unreadable" }
]
```

- `pump` (Y column): `1`, `0`, `1`
- `pressure` (Y column): `2.4`, `2.1`, **gap** (stays a gap in "keep" mode; "forward-fill" would carry 2.1 forward)

## Error and empty cases

| Situation                                                                   | Behavior                                                                                                                         |
| --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| No JSON data point selected                                                 | **Empty state** "Select a JSON OID"                                                                                              |
| Table: no Y column bound yet                                                | **Empty state** "Map the columns — pick the X and Y columns in the configurator"; takes precedence over the other empty states   |
| Data point empty / never written                                            | **Empty state** "The data point yields no plottable data — check its format; row-list payloads need the 'Table/columns' family." |
| Invalid JSON (`JSON.parse` fails)                                           | **Error surface** with the parser message                                                                                        |
| Table: rows path misses an array (`rows path "…" is not an array`)          | **Error surface**; the configurator marks the chip "No longer in the payload"                                                    |
| Table: rows path empty, payload no array (`payload is not a rows array`)    | **Error surface**, also before the first mapping; the Mapping tab shows only the suggestion                                      |
| Table: X column missing from the payload                                    | **Row index**, without a warning                                                                                                 |
| Table: Y column missing from the payload                                    | **Empty series** (no error); the configurator warns "Y column … is missing from the payload — the series renders empty."         |
| Table: Y column of type text                                                | the series plots only the cells interpretable as numbers, the rest gaps (hint in the configurator)                               |
| Finished series: object without `series`/`data` or JSON primitive           | **Empty state** as with an empty data point                                                                                      |
| No point with a value, e.g. a row list or bare numbers with Finished series | **Empty state** as with an empty data point; also applies when all series with Table / columns carry gaps only                   |
| Value mapping misses                                                        | the value passes through the plottable value (no error)                                                                          |

> **Configurator analysis:** with Table / columns the configurator analyzes the current payload live — rows path chips with array length, a column list with type badges (date/number/text/boolean/…) and sample values at the X column. Nothing is set automatically: with an object payload the **Suggested** badge marks the longest path, the user picks the X and Y columns. The analysis is limited to 10 nesting levels and says so, the runtime resolves any depth. With Finished series the configurator reads the series names only.

## Related pages

- [ECharts Widget](En-Echarts-Widget.md) — configurator reference (data source, series, axes, …)
- [JSON Table Widget](En-JsonTable-Widget.md) — tabular **display** of JSON data (without a chart)
