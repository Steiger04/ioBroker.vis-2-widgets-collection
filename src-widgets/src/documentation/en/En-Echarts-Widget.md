# ECharts Widget

![ECharts Widget](../img/collection-echarts.png)

## Description

The ECharts widget ("Chart (ECharts)") renders Apache ECharts charts directly inside vis-2: line charts, bar charts, scatter plots and pie/donut charts. All chart-specific settings are maintained in a dedicated configurator dialog, opened from the vis-2 attributes panel via **Edit chart configuration**.

The widget supports two data source modes:

- **History** — fetches aggregated history through a history adapter (history, SQL, InfluxDB …). Time window, aggregation, interval and refresh are configured per chart and per series.
- **JSON** — a single datapoint supplies the finished data as a JSON payload. The JSON structures the datapoint must deliver are described on the dedicated page [ECharts JSON Formats](En-Echarts-JSON-Formats.md).

## Settings hierarchy

This widget uses all **vis-2 settings** and **common settings**. See [Home](En-Home.md) for details.

The widget-specific settings override the more general ones.

> **Configurator, not panel:** Almost every ECharts setting lives in the configurator dialog, not in the vis-2 attributes panel. The panel itself only shows the open trigger and the four padding sliders (see [below](#vis-2-panel-settings)).

## Concepts

### Chart families

The **chart type** (pinned at the top of the configurator) picks the family at the same time:

| Type    | Family    | Description                                                                               |
| ------- | --------- | ----------------------------------------------------------------------------------------- |
| Line    | Cartesian | Time series as a line; the area fill is a series property ("area"), not a type of its own |
| Bar     | Cartesian | Time series as bars; optional calendar bucketing via the bar interval                     |
| Scatter | Cartesian | Time series as scattered points                                                           |
| Pie     | Pie       | One series/column = one ring; the values collapse into slices                             |

Within the cartesian family every series may override the type individually (line/bar/scatter) — the chart type is the default each series inherits.

### Data modes and payload families

The **data mode** (second pinned selector) applies to the whole chart:

- **History** — every series binds its own datapoint (OID); data is fetched via `getHistory` with time window, aggregation and maximum point count. Requires a history adapter configured on the datapoint.
- **JSON** — exactly one JSON datapoint supplies all series. Under this mode a third pinned selector appears, the **payload family**:
    - **Series document** — the payload carries finished series (`{ series: […] }`, arrays …). Count and values are owned by the payload alone; in the configurator you style, axis-bind and hide them by name.
    - **Table/columns** — the payload is a list of rows; row path, X column and Y columns (in the Series section) derive the series from it. Here the user owns the structure, the payload the values.

> **Boundary crossings delete:** Family switches (e.g. line → pie), data-mode switches (history ↔ JSON) and payload-family switches (series document ↔ table/columns) reset the data path — series, axes and markings fall. The configurator warns with a chip at the respective selector before the crossing. **Undo** restores an accidental switch in a single step. The JSON datapoint itself survives a payload-family switch (same state, read the other way).

The JSON payload formats with examples: [ECharts JSON Formats](En-Echarts-JSON-Formats.md).

### Per-series value processing (value chain)

Every value passes through a fixed chain on its way into the chart. The stages are series properties (**Data** or **Transformation** tab of the series card):

1. **Value map** (`valueMap`) — if the raw value as text matches a key exactly, the mapped number is adopted; an empty target is a **deliberate gap** that is never filled.
2. **Interpretation** — booleans become 1/0, numeric texts are read (including `"true"`/`"false"`, comma decimals `23.5`, prefix parsing `23.5 °C`); anything uninterpretable becomes a gap.
3. **NULL handling** — keep gaps / fill with last value / fill with 0. Deliberate (mapped) gaps stay immune.
4. **Y offset** — adds a fixed offset to the value.
5. **Formula** — calculation over the symbol `val` (expr-eval syntax, e.g. `val / 1000 + 3`); context symbols `smin`, `smax`, `savg`, `sfirst`, `slast` provide the series' min/max/average/first/last value. An invalid formula falls back to the raw values.
6. **Smoothing** — centered moving window over N points (history/JSON time data only).
7. **Cumulative** — running total over the non-null values (runs after smoothing).

In history mode the fetch (aggregation, point limit) precedes the chain and bar mode adds bucketing; afterwards optionally "hide future values".

### Axis model (cartesian)

- **Series follow axes:** a fresh configuration has no axis — the first series creates the first axis (left, offset 0, gridlines on). Further axes appear via **New axis** or by rebinding and stack offset outward on their side.
- **Y-axis binding:** every series binds to exactly one Y-axis (**Basis** tab of the series card). When the last series leaves an axis, the axis and its configuration fall.
- **Name giver:** when several series share an axis, the axis shows the name and color of the series that bound it first. When that one moves on, the next remaining series takes over.
- **Place memory:** each side (left/right) remembers the pixel places of its axes. An axis that disappears leaves its placement to the next arrival.
- **Align ticks** works across axes: an axis aligns itself to the first displayed axis; a dedicated value range or tick setting overrides the alignment for that axis.

The pie has no axes; the "Axes & Zoom" section does not exist there.

## The configurator

![ECharts configurator](../img/collection-echarts-editor.png)

Open it via: vis-2 attributes panel → group **Chart** → **Edit chart configuration**.

- **Left:** section rail. Pinned on top: **chart type**, **data mode** and (in JSON mode) **payload family**. Below, the collapsible sections — in this order:
    1. Data source
    2. Behavior
    3. Title
    4. Series
    5. _family-dependent:_ Axes & Zoom (cartesian) **or** Pie options (pie)
    6. Legend
    7. Tooltip
    8. Colors
    9. Toolbox
- Every section starts collapsed with a summary line; a ⚠ counter in the header reports validation problems (e.g. min ≥ max, missing OID, lost Y column) — a click jumps to the affected spot.
- **Right:** live preview. The splitter between configuration and preview is draggable (double-click resets); **Maximize** enlarges the dialog.
- **Footer:** **Undo** (multi-step), **Apply** writes the rxData patch, **Cancel** discards (with a prompt while changes are open). Nothing becomes effective in the widget before **Apply**.

### Pinned selectors

| Selector       | Values                          | Description                                                                     |
| -------------- | ------------------------------- | ------------------------------------------------------------------------------- |
| Chart type     | Line · Bar · Scatter · Pie      | Family and type in one (see [concepts](#chart-families))                        |
| Data mode      | History · JSON                  | Chart-global, not per series (see [concepts](#data-modes-and-payload-families)) |
| Payload family | Series document · Table/columns | Only visible in JSON mode                                                       |

## Data source section

Applies chart-global as the **preset for all series**; every series can override the fetch parameters on its card (inherit overrides).

### History mode

Tabs: **Time window** | **Data fetch**.

**Tab Time window**

| Setting     | Values / type                                         | Default  | Description                                                                                       |
| ----------- | ----------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------- |
| Time window | Relative · Static                                     | Relative | Relative = moving window; Static = fixed start/end datetimes (DateTimePicker)                     |
| Time range  | 10 m … 14 d (minute-based) · 1–6 M / 1–2 Y (calendar) | 1 day    | `10m`–`14d` count minutes/hours/days; `1m`–`6m` are calendar months, `1y`/`2y` calendar years     |
| End         | now · minute/hour/day/week/month/year boundaries      | now      | Rounds the window end to the boundary instead of "now" (17 options, adapter `relativeEndOptions`) |
| Start / End | date/time                                             | –        | Static only: ISO date pickers. Incomplete or start ≥ end ⇒ the default window applies until fixed |

**Tab Data fetch**

| Setting                                | Values / type                                                                                    | Default       | Description                                                                                                     |
| -------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------- | --------------------------------------------------------------------------------------------------------------- |
| Aggregation                            | Average · Min–Max · Minimum · Maximum · Total · Count · On change · None · Percentile · Integral | Average       | `getHistory` aggregation; percentile/integral bring their own parameters (below)                                |
| Percentile (%)                         | 0–100                                                                                            | 50 (server)   | Only visible under aggregation Percentile                                                                       |
| Unit (seconds)                         | number                                                                                           | 60 (server)   | Only under Integral: integration interval                                                                       |
| Interpolation                          | none · linear                                                                                    | none (server) | Only under Integral                                                                                             |
| Time step (seconds, instead of points) | number                                                                                           | –             | Replaces the point count with a fixed grid in seconds                                                           |
| Max. points                            | number                                                                                           | 500           | Upper bound per series (widget hard limit: 5000)                                                                |
| Bar interval                           | auto (time axis) · 15 minutes · 1 hour · 1 day · 30 days                                         | auto          | Bar charts only: enforces calendar buckets (`30d` = calendar months, 1st-to-1st). "auto" draws on the time axis |
| Difference to previous bar             | boolean                                                                                          | off           | Bar + interval only: difference against the previous bucket (first bar drops)                                   |
| Stacking                               | None · Stacked · 100 % stacked                                                                   | None          | Chart-global bar stack mode. Acts on bars without their own stack group                                         |
| Sum over stack                         | on/off                                                                                           | off           | Only under "Stacked": an additional total series on top of the stack group                                      |
| Null gaps                              | Keep gaps · Fill gaps (last value) · Fill gaps with 0                                            | Keep gaps     | NULL handling preset; every series can override                                                                 |
| Refresh interval (ms)                  | number                                                                                           | 60000         | Periodic re-fetch; 0 = never. The widget also refreshes on value changes                                        |

> **Bar stack on the time axis:** stacking without a bar interval aligns bars by data position — diverging timestamps draw misaligned stacks. The configurator reports this with a hint and the one-click fix "Set bar interval".

> **Server aggregation first:** aggregation and point count run server-side — large histories spare the client. "None"/"On change" load raw points; for very large ranges prefer an explicit step or point limit.

### JSON mode

Without a bound payload the section shows only the datapoint. With payload family **Table/columns** the tabs **Datapoint** | **Mapping** appear:

| Setting              | Values / type | Default     | Description                                                                                                                          |
| -------------------- | ------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| JSON datapoint (OID) | id            | –           | The datapoint whose **string value** carries the JSON payload                                                                        |
| Row path             | path          | (top level) | Dot-path to the rows array; empty = the document itself must be the array. Array indices allowed (`plant.strings`, `rows[0].values`) |
| X column             | path          | (row index) | Column for the X dimension. A date column ⇒ time axis, anything else category; empty ⇒ row index                                     |

The configurator analyzes the current payload live: columns appear with a type badge (date/number/text/boolean/…), sample values and a suggestion badge for the most likely X column. The search is limited to 10 nesting levels. Paths no longer present in the document are marked "no longer in the document".

The Y columns are bound as cards in the Series section (see below). Formats and rules: [ECharts JSON Formats](En-Echarts-JSON-Formats.md).

## Behavior section

Tabs: **Motion** | **Renderer**.

| Setting                 | Values / type                                         | Default | Description                                                                              |
| ----------------------- | ----------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------- |
| Animation               | boolean                                               | on      | Animation while drawing                                                                  |
| Animation duration (ms) | 0–2000 (slider, 50 steps)                             | 600     | Only effective with animation on                                                         |
| Easing                  | Default · Linear · Cubic out · Cubic in-out · Elastic | Default | ECharts easing curve                                                                     |
| Renderer                | Canvas · SVG                                          | Canvas  | Canvas = faster for live data and large datasets; SVG = crisp for print, export, scaling |

## Title section

Tabs: **Text** | **Position** | **Style** | **Templates**.

| Setting         | Values / type                              | Default    | Description                            |
| --------------- | ------------------------------------------ | ---------- | -------------------------------------- |
| Chart title     | text                                       | –          | May contain vis-2 bindings `{oid.val}` |
| Title position  | top/bottom × left/center/right (3×2)       | Top center |                                        |
| X offset        | px                                         | 0          | Left/right anchors only                |
| Y offset        | px                                         | 0          | Every anchor                           |
| Title color     | color                                      | inherited  | Empty = theme text color               |
| Title font size | number                                     | inherited  |                                        |
| Font weight     | Normal · Bold · Bolder · Lighter · 100–900 | Normal     |                                        |
| Font style      | Normal · Italic · Oblique                  | Normal     |                                        |

The **Templates** tab carries the title's [advanced JSON](#templates--advanced-json).

## Series section

The layout of this section depends on data mode, payload family and chart type:

| Context                              | View                                                                                                                                                       |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| History (all types)                  | Series cards with tabs **Basis \| Data \| Presentation \| Values \| Advanced**                                                                             |
| JSON, series document (cartesian)    | One card per payload series, tabs **Basis \| Transformation \| Presentation \| Values \| Advanced** — the payload owns count/names; style, axis-bind, hide |
| JSON, table/columns (cartesian)      | One card per bound Y column: name, Y column (path), presentation, values                                                                                   |
| Pie (history & JSON series document) | Slice rows: display name, color, (history: one OID per slice)                                                                                              |
| Pie, table/columns                   | One row per Y column = ring; the X column names the slices                                                                                                 |

Card header: color swatch, name, (OID/column), sort ▲▼, duplicate, delete. **Add series** (history) opens the OID picker — the first series creates the first Y-axis.

### Series card in history mode

**Tab Basis**

| Setting          | Description                                                                   |
| ---------------- | ----------------------------------------------------------------------------- |
| Name             | Display name (legend, tooltip)                                                |
| OID              | The series' datapoint; in history mode restricted to history-capable OIDs     |
| Type             | inherit (→ chart type) · Line · Bar · Scatter — visible from two series       |
| Y-axis           | Binding to an axis (default: first axis)                                      |
| History instance | Auto (from the datapoint's configuration) or a pinned instance (e.g. `sql.0`) |

**Tab Data** — fetch overrides (inherit the data-source preset; the entry names its inheritance target) **plus** the value-chain transformation stages:

| Setting            | Description                                                                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Aggregation        | inherit (→ chart aggregation) or own value; percentile/integral parameters appear alongside                                                            |
| Difference         | inherit · differentiate · raw — effective bar mode only                                                                                                |
| X offset           | off · seconds (number) · ±1–6 months / ±1–2 years (calendar; positive = into the past) — shifts the request window, e.g. to overlay last year's values |
| Formula            | calculation over `val` (and `smin`/`smax`/`savg`/`sfirst`/`slast`), e.g. `val / 1000 + 3`. An invalid formula keeps the raw values (with a hint)       |
| Y offset           | numeric offset before the formula: `f(val + yOffset)`                                                                                                  |
| NULL handling      | inherit (→ chart setting) · keep · fill · zero                                                                                                         |
| Smoothing (points) | centered moving window; edges clipped, gaps stay gaps, never interpolated                                                                              |
| Cumulative sum     | running total; after smoothing, no reset                                                                                                               |
| Hide future values | cuts points after "now"                                                                                                                                |

**Tab Presentation** — grouped by type (Line · Bar · Area) plus legend behavior:

| Setting                    | Description                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------ |
| Series color               | color field; empty = palette slot                                                                      |
| Line style / line width    | solid · dashed · dotted / px                                                                           |
| Smooth                     | smooth (spline) curve                                                                                  |
| Step                       | None · Step (start) · Step (middle) · Step (end)                                                       |
| Show symbols / symbol size | point symbols on the line / px                                                                         |
| Connect gaps               | draw the line across null gaps (independent of NULL handling)                                          |
| Line shadow                | blur in series color (px)                                                                              |
| Area fill                  | Off · Flat · Gradient (CSS `linear-gradient`), plus area opacity                                       |
| Stack group                | inherit (→ chart stacking) · No stack · Group A/B/C — own groups stack independently of the chart mode |
| Bar width (px/%)           | e.g. `20` or `30 %`; empty = auto                                                                      |
| Bar gap / category gap     | 0–1 (ECharts `barGap`/`barCategoryGap`)                                                                |
| Bar corner radius          | px                                                                                                     |
| Value labels               | on/off; bars: label position (Above the bar · Inside top/middle/bottom), label size, label color       |
| Legend only                | hide the series, keep the legend entry (toggleable)                                                    |

**Tab Values** — value presentation:

| Setting             | Description                                                                                                                                          |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unit                | suffix in tooltip, legend value and labels; an axis inherits it when every bound series carries the same unit                                        |
| Decimals            | clamps the series' values; 0 is a fact, not "unset"                                                                                                  |
| Value map           | raw value → number table; exact string matching; an empty target is a deliberate gap                                                                 |
| Text for true/false | boolean OIDs: texts for 1/0 (authoring one defaults the other to the adapter standard)                                                               |
| State names         | enumeration (enum): value → text (prefilled from `common.states` on OID selection); exact hit for tooltip/legend/label, nearest state for axis ticks |

**Tab Advanced** — the series' [advanced JSON](#templates--advanced-json): deep-merged **under** the GUI entries (the GUI wins every collision); data points are force-set. Escape hatch for ECharts keys the GUI does not expose (`markPoint`, `emphasis`, `label.formatter` …).

### JSON: series document (cartesian)

The payload owns the series — adding/removing is impossible here; only **styling** (tabs as in history, but **Transformation** instead of **Data**: no X offset; formula/Y offset/NULL/smoothing/cumulative stay) and **hiding** (hidden series remain re-enableable). Series sharing a name share style, axis binding and hidden state — use unique names in the payload (the configurator warns).

### JSON: table/columns (cartesian)

One card per bound Y column: name (free), Y column (path picker from the detected column list), axis binding, presentation, values, advanced. Row path and X column live in the Data source section. A Y column missing from the document renders an empty series (hint, no error); a text column plots only the values interpretable as numbers.

### Pie: slice rows

- **History:** one row per slice — display name, color, OID. The values collapse via the **slice aggregation** (Pie options section).
- **JSON series document:** rows per payload series — name (from payload), color, per-slice advanced JSON.
- **JSON table/columns:** one row per Y column (ring). The X column names the slices and drives the color — same name = same color across all rings; without an X column the slices read "Row n".

## Axes & Zoom section (cartesian)

Tabs: **Axes** | **Markings** | **Zoom**.

### X card

Tabs: **Basis** | **Labels** | **Ticks & grid** | **Advanced**.

| Setting                                           | Default                 | Description                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Axis name                                         | –                       | label below the axis                                                                                                                                                                                                                                                                                            |
| Position                                          | bottom                  | top mirrors the axis above the chart                                                                                                                                                                                                                                                                            |
| Offset (px)                                       | 0                       | moves the axis away from the chart (fine-tuning)                                                                                                                                                                                                                                                                |
| Time format                                       | Automatic               | [moment.js](https://momentjs.com/docs/#/displaying/format/) tokens (e.g. `HH:mm`, `ddd`, `HH:mm <br /> DD.MM.`) driving the axis labels **and** the tooltip header. Auto = adaptive (seconds below 30 min span, date on day change). Hidden for JSON tables with a category X (the labels are the payload text) |
| Axis color                                        | theme                   | line, labels and name                                                                                                                                                                                                                                                                                           |
| Rotate labels                                     | 0°                      | angled time labels on narrow widgets                                                                                                                                                                                                                                                                            |
| Label font size (px)                              | 12                      |                                                                                                                                                                                                                                                                                                                 |
| Show ticks / tick color                           | on / inherited          |                                                                                                                                                                                                                                                                                                                 |
| Gridlines / grid color / grid width / stroke type | off / theme / 1 / solid | vertical gridlines                                                                                                                                                                                                                                                                                              |
| Tick segments                                     | 6                       | target tick count                                                                                                                                                                                                                                                                                               |
| Min. interval                                     | –                       | milliseconds (e.g. 3600000 = 1 h)                                                                                                                                                                                                                                                                               |
| Name rotation (°)                                 | 0                       | fine-tuning                                                                                                                                                                                                                                                                                                     |

### Y-axis cards

Tabs: **Basis** | **Values** | **Scale & ticks** | **Presentation** | **Advanced**. Card: axis name (default: the name-giver series), side, place `side · place/total`, "closer to the chart"/"further away", delete.

| Setting                                           | Default                       | Description                             |
| ------------------------------------------------- | ----------------------------- | --------------------------------------- |
| Axis name                                         | –                             | shows the name giver by default         |
| Side                                              | Left (axis 0) / Right         |                                         |
| Offset (px)                                       | 0                             | stacking on the same side               |
| Y min / Y max                                     | auto                          | fixed value range                       |
| Y label format                                    | –                             | string template `{value} kW`            |
| Don't force zero                                  | off                           | `scale`: the axis need not contain 0    |
| Logarithmic Y-axis                                | off                           | `type: 'log'`                           |
| Align ticks                                       | on (from 2 axes)              | see [axis model](#axis-model-cartesian) |
| Tick segments / min. interval                     | auto                          | tick density, e.g. 1 for integer axes   |
| Gridlines / grid color / grid width / stroke type | axis 0: on · others off       | horizontal grid in the full style       |
| Label font size (px)                              | 12                            |                                         |
| Axis color                                        | the name giver's series color |                                         |
| Name position / name gap (px) / name rotation (°) | Middle · 18 · 0               |                                         |
| Advanced JSON                                     | –                             | deep-merge under the GUI (GUI wins)     |

> **Phantom axes:** an axis no series binds anymore does not exist — it drops silently on open. In the JSON series document the editor heals over the overlay names; removed payload series take their axis along (Undo helps).

### Markings

Reference lines and bands with style and labels, anchored to a Y-axis. Per marking:

| Setting                                  | Description                                                                                                                                                                                                                                              |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Upper/lower bound (value or OID)         | number **or** datapoint (resolves live via subscription). Both bounds ⇒ a band (area) plus two styled edge lines; exactly one ⇒ a line                                                                                                                   |
| Axis                                     | the Y-axis the marking belongs to                                                                                                                                                                                                                        |
| Band fill                                | opacity 0–1 (default 0.2)                                                                                                                                                                                                                                |
| Color / line style / line width / shadow | the edge(s) style; width default 2                                                                                                                                                                                                                       |
| Label upper/lower bound                  | one group per edge: text (empty = value fallback: the resolved bound as a fully styled label), position (12 ECharts places: start/middle/end plus the inside\* variants), X offset, font size, text color (empty = marking color or the axis text token) |

### Zoom

| Setting               | Description                                                                    |
| --------------------- | ------------------------------------------------------------------------------ |
| Zoom slider           | dataZoom slider below the chart                                                |
| Mouse/touch zoom      | scroll/pinch zoom without a visible element                                    |
| Reset zoom after idle | off · 10 s … 30 min — resets the zoom to the full window after the idle period |

## Pie options section (pie)

Tabs: **Shape** | **Values** | **Advanced**.

| Setting                  | Values / type                              | Default               | Description                                                                                                                                              |
| ------------------------ | ------------------------------------------ | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Donut inner radius (0–1) | 0–1                                        | 0                     | 0 = full pie; 0.5 ≈ ring                                                                                                                                 |
| Rose mode                | None · Radius · Area                       | None                  | radius/area proportional rose                                                                                                                            |
| Slice aggregation        | Latest · Sum · Average · Minimum · Maximum | Latest                | History/JSON time data only: collapses the fetched points per series into one slice value. (Table/columns: every row **is** the value — the field rests) |
| Slice label              | None · Name · Percent · Name + percent     | Name + percent        |                                                                                                                                                          |
| Label color              | color                                      | Inherits (text color) | always emitted explicitly — prevents the ECharts auto-contrast halo on a transparent canvas                                                              |
| Advanced JSON            | –                                          | –                     | whole-pie raw (deep-merge under the GUI; the target for `labelLine`, `emphasis`, `startAngle`, `selectedMode` …). Per slice: raw on the slice row        |

## Legend section

Tabs: **Display** | **Style** | **Templates**.

**Display**

| Setting               | Default    | Description                               |
| --------------------- | ---------- | ----------------------------------------- |
| Show legend           | on         |                                           |
| Legend position       | Top center | 3×3 grid                                  |
| Show values in legend | off        | `name [value]` — live value or last point |

**Style** — groups **Text** · **Symbol** · **Frame / panel**:

| Setting                                                            | Default                | Description                                                                |
| ------------------------------------------------------------------ | ---------------------- | -------------------------------------------------------------------------- |
| Text color / font size / font weight / font style                  | inherited              | legend `textStyle`                                                         |
| Orientation                                                        | Auto                   | Auto follows the edge (top/bottom = row, left/right = column); overridable |
| Symbol shape                                                       | Inherited              | circle, rect, roundRect, triangle, diamond, pin, arrow, none               |
| Symbol width / symbol height / item gap                            | 25 · 14 · 10 (ECharts) |                                                                            |
| Inactive item color                                                | #ccc                   | deselected series                                                          |
| Background / border color / border width / corner radius / padding | – / #ccc / 0 / 0 / 5   | the legend as a panel                                                      |
| X offset / Y offset                                                | 0                      | nudge from the edge; the center column/row ignores it                      |

The legend selection drives the visible series; axes follow the selection (an axis without a visible series disappears).

## Tooltip section

Tabs: **Behavior** | **Values** | **Templates**.

| Setting                     | Default                       | Description                                                                                                                                           |
| --------------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tooltip trigger             | Axis (cartesian) / Item (pie) | Axis = all series at the point in time; None = off                                                                                                    |
| Tooltip template            | –                             | ECharts string template `{a}` series name · `{b}` category/time · `{c}` value · `{d}` share (pie); may contain vis-2 bindings. Live example beside it |
| Decimals                    | 0                             | clamps the tooltip values                                                                                                                             |
| Unit suffix                 | –                             | e.g. ` kW`                                                                                                                                            |
| Tooltip background color    | theme                         |                                                                                                                                                       |
| No interpolation in tooltip | off                           | cartesian only: drops rows whose value at the hovered timestamp is interpolated                                                                       |
| Hide null values in tooltip | off                           | cartesian only                                                                                                                                        |
| Comma as decimal separator  | off                           | applies to all chart values (tooltip, legend, default Y labels); an explicit axis format stays                                                        |

## Colors section

Tabs: **Palette** | **Surface** | **Frame** | **Color scale** (cartesian only).

| Setting                                                                        | Default                             | Description                                                                                                                                      |
| ------------------------------------------------------------------------------ | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Palette source                                                                 | Theme (auto)                        | Theme follows the vis-2/MUI theme; Preset (pick, default Tableau) or Custom colors (`;`-separated list)                                          |
| Dark mode                                                                      | Auto (follow theme)                 | force light/dark                                                                                                                                 |
| Background                                                                     | transparent                         | CSS color of the chart surface                                                                                                                   |
| Show frame / frame width (px) / frame color / frame style / frame padding (px) | off · 1 · divider token · solid · 0 | container CSS frame **around** the chart surface (not an ECharts object). Frame style: the 8 CSS values (double, groove, ridge, inset, outset …) |
| Value→color scale                                                              | off · 0–100 · theme ramp            | continuous value→color mapping (overrides series colors); color stops `;`-separated, empty = theme ramp (blue→green→orange→red)                  |

## Toolbox section

Off (no toolbox block) or on — then tabs **General** | **Features**.

**General:** position (3×3), orientation (horizontal/vertical), icon size, icon gap, title on hover, icon color, hover color, frame (width/color/corner radius/padding), background.

**Features** (the five ECharts features):

| Feature           | Options                                                                 |
| ----------------- | ----------------------------------------------------------------------- |
| Save as image     | format (png/jpeg/svg), file name (empty = chart title), pixel ratio     |
| Restore           | undo the user's zoom and type switches                                  |
| Data view         | raw data table; read-only defaults **on** (vis is a display)            |
| Data zoom         | icons for range zoom (drives existing dataZoom components); filter mode |
| Chart type switch | cartesian only: types (line/bar/stack/tiled)                            |

## Templates & advanced JSON

Title, legend, tooltip, series, axes and the X card each carry an **advanced JSON** (Templates or Advanced tab): free JSON for ECharts options of **that component**. Rules:

- **Deep-merge under the GUI** — the GUI wins every collision; only keys the GUI does not manage take effect.
- **Template menu:** curated building blocks (grouped by category, searchable). Active templates appear as chips and merge with your own text.
- **Chips follow the text:** deleting a template's keys inside the editor removes its chip; invalid JSON locks the menu and leaves the activations untouched.
- On a family switch, activations the new family does not know are removed on Apply (warning beforehand).

## vis-2 panel settings

In the vis-2 attributes panel (outside the configurator) the widget carries:

| Field                                                   | Type                    | Default | Description                                                                                                                                           |
| ------------------------------------------------------- | ----------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| chartConfig                                             | custom                  | –       | The **Edit chart configuration** button — opens the configurator                                                                                      |
| paddingTop / paddingBottom / paddingLeft / paddingRight | slider (0–10, step 0.1) | 0       | Chart padding in MUI units (1 = 8 px), outside the frame, **additive** beneath the common `basePadding`. 0 = pixel-identical to the previous behavior |

All other settings (modes, series, axes, …) are hidden rxData fields written by the configurator alone — including the base64 configuration blobs (`seriesConfig`, `chartConfig`, `toolboxConfig`, `markLines`, `yAxes`, `xAxis`, `jsonSeriesStyle`, `jsonHidden`). These blobs are the editor's storage format, not a documented contract — editing them by hand is unsupported.

## Related pages

- [ECharts JSON Formats](En-Echarts-JSON-Formats.md) — datapoint payloads with examples
- [Home](En-Home.md) — common settings of all widgets
