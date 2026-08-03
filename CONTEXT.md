# JSON Table Collection Widget

The widget renders a JSON-valued ioBroker state as a table. Columns are auto-discovered from the data and individually configurable; each column's raw cell values are rendered according to a chosen format type. This glossary pins down the cell-rendering language shared across the analysis engine, the renderer, and the column editor.

## Language

**Column**:
A field of the table — either user-configured (`columnConfig`) or auto-discovered from the JSON data.
_Avoid_: Field, attribute (those mean vis-2 property-editor fields, not table columns)

**Header**:
The column-header row. Serves a dual role: (a) a styled row labelling each Column, and (b) the host of per-column interaction affordances (sorting, filtering, column menu, resize). Hiding the header removes both, not just the labels — only the global quick filter is unaffected.
_Avoid_: Title row, top row

**Raw value**:
The unmodified cell value coming from the JSON data, before any formatting or rendering.
_Avoid_: Cell value (ambiguous — could mean the rendered output)

**Format type**:
HOW a column's raw value is rendered. One of `number`, `date`, `boolean`, `string`, `image`.
_Avoid_: Render mode, display type

**Image column**:
A column whose format type is `image`. Each raw value is read as a *visual reference* and drawn as a graphic instead of text.
_Avoid_: Icon column — "icon" vs "image" is a value-level distinction, not a column type

**Visual reference**:
A string that resolves to a renderable graphic: a URL or file path, a `data:image/…` URI, or a short UTF-8 character (e.g. an emoji). A cell value is **never** an icon *name* (`mdi-*`, `fa-*`) — there is no name resolution in cell values.
_Avoid_: Image src, icon name

**Icon vs Image**:
A *per-value, runtime* distinction — never a config or column type, and not a tint gate. An **icon** is a small monochrome glyph (SVG data-URI or UTF-8 character); an **image** is a raster photo (png/jpg/webp/…). A configured colour tint applies to either, via a CSS mask over the source's alpha channel.
_Avoid_: Treating "icon" and "image" as separate column types or separate format types; assuming tint is icons-only.

**Fallback**:
What happens when a raw value cannot be resolved to a graphic in an image column: the cell renders the raw value as plain text. An empty value renders an empty cell; a broken URL renders a placeholder icon.
_Avoid_: Error state, invalid cell

**Detected type**:
The type inferred from the data by the analysis engine (`string`, `number`, `boolean`, `date`, `image`, `null`, `array`, `object`, `mixed`). Drives the default format type and the type badge shown in the editor's analysis panel.
_Avoid_: Format type (the detected type is a hint; the format type is the user's rendering choice and may differ)

# ECharts Collection Widget

The widget renders ioBroker state data as Apache ECharts charts (line/bar/pie/gauge/radar). Its configurator modal is a sections-rail editor with a live real-data preview (ADR-0007/0008 seam, ADR-0010 layout). This glossary pins down the configurator's structural language.

## Language

**Preview stage**:
The right-hand area of the configurator modal — a flexing (~50% width) live preview fed by the user's real OID data. The configurator's centrepiece; layout decisions exist to serve it.
_Avoid_: Preview pane, right column, preview tab

**Rail**:
The fixed-width (~420px) left column of the configurator modal hosting the pinned selectors and the section stack.
_Avoid_: Sidebar, options column

**Pinned selectors**:
The chart-type picker and data-mode toggle sitting above the section stack — always visible, never collapsible.
_Avoid_: Header controls, first section

**Section**:
One collapsible, intent-named unit of the rail (`Series`, `Data source`, `Title & Legend`, `Tooltip`, `Axes & Zoom`, `Colours`, `Behaviour & JSON`, plus family options sections). The inventory is family-aware: `Axes & Zoom` is cartesian-only; gauge/pie/radar get their own options section in that slot.
_Avoid_: Tab (the v2 concept), panel, accordion (that's the mechanism, not the concept)

**Summary line**:
The single-line digest of effective values shown on a collapsed Section (`24h · avg · 500`, `tableau · auto`). A section that cannot say anything useful collapsed does not deserve to be a section.
_Avoid_: Subtitle, hint text

**Series card**:
A cartesian series item in the Series section — a quiet card whose header (swatch, name, OID, ↑↓ reorder, duplicate, delete) expands inline to the per-series knob grid.
_Avoid_: Accordion item (v2), row

**Slice row**:
A pie slice item — a light list row (name + colour + delete inline) with no expand, because a slice only carries two fields.
_Avoid_: Slice card, accordion

**Skeleton card**:
The one empty series card the editor auto-creates on first open (0 series): expanded, OID focused. The dirty snapshot is taken *after* its creation, so Apply stays disabled until the user actually edits.
_Avoid_: Default series, placeholder series

**Warning roll-up**:
The `⚠ n` chip in a section header aggregating that section's field-level validation issues. Advisory only — it never blocks Apply.
_Avoid_: Error badge, validation summary

**Family-switch warning**:
The non-blocking chip under the chart-type picker shown when the chosen chart family would drop bound items on Apply (e.g. cartesian→gauge keeps only the first OID).
_Avoid_: Confirm dialog, type guard

**Axis card**:
A cartesian Y-axis item in the (v4) Axes manager — core knobs (name/position/colour/min/max/log/format) always visible, advanced knobs (scale/splitLine/splitNumber/minInterval/offset/alignTicks/axisTick/nameRotate) collapsible. One per entry in the `yAxes` blob; a series binds to one via `yAxisIndex`.
_Avoid_: Axis row, axis settings

**Axis manager**:
The cartesian-only UI that adds/removes/reorders Axis cards and assigns series to axes (v4, ADR-0012). Replaces the chart-level Y-axis scalars (`yMin/yMax/yName/yLog/yFormat`).
_Avoid_: Axes tab, axis list

**Axis auto-bind**:
The cartesian default that each series gets its own Y-axis (ADR-0018): creating a series creates a matching axis (1:1), alternating left/right with an 80 px stagger (`even → left`, `odd → right`, `offset = ⌊i/2⌋ × 80`); deleting a series drops its axis iff no surviving series remains on it (orphan-check), re-indexing the survivors (and re-staggering in the dense 1:1 case). Applies only on explicit creation — existing widgets are not silently re-laid-out. Departing from 1:1 (a manual `yAxisIndex` rebind) keeps each axis' custom position/offset on delete. An axis without an explicit colour **or name** inherits its bound series' values (colour → line + label + name; name → axis title), at runtime for every chart — never a creation-time snapshot.
_Avoid_: auto-axis (too vague)

**Template snippet**:
A chart-wide, collision-safe Advanced-JSON preset (v4, ADR-0014; the series-riding examples moved to cards by ADR-0017) — injects GUI-uncovered *chart-level / component* option keys (e.g. `graphic` overlay text, `aria`, `axisPointer` link, `radar.splitArea`). With `series` now a managed key, a snippet never targets per-series presentation; that is the **Series template**'s job. The merge-preview shows whether each key takes effect (`✓`) or collides with a GUI-owned key (`✗`).
_Avoid_: Snippet, preset, series template (that is per-series)

**Series raw**:
The per-series echarts-JSON escape hatch (ADR-0015/0017) — a small raw object on a series card, deep-merged UNDER the GUI-authored series entry (the GUI wins collisions; the data points are force-set). Every series card carries one: cartesian per-card, gauge/radar as the single-series raw, and pie on two levels (a whole-pie series raw + a per-slice raw). It replaces the positional chart-level `U.series` array, now retired.
_Avoid_: Advanced JSON (that is the chart-level U), JSON override (too generic)

**Series template**:
A per-series, collision-safe preset (ADR-0017) — injects GUI-uncovered echarts keys relevant to the family/type into a card's Series raw (e.g. `sampling:'lttb'`, `markPoint` peaks, gauge `axisLine` coloured zones, radar `lineStyle`). Each entry is audited against the builder so it duplicates no GUI-owned key; the GUI wins any residual collision. Distinct from the chart-wide **Template snippet**.
_Avoid_: Snippet, preset, template snippet (that is chart-wide)
