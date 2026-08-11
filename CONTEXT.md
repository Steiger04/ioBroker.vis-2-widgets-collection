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
The right-hand area of the configurator modal — a live preview fed by the user's real OID data, taking whatever width the Rail leaves it. The configurator's centrepiece; layout decisions exist to serve it.
_Avoid_: Preview pane, right column, preview tab

**Rail**:
The left column of the configurator modal hosting the pinned selectors and the section stack. Resizable via the Splitter (320–720 px, default 440 px, persisted across sessions).
_Avoid_: Sidebar, options column

**Splitter**:
The draggable divider between Rail and Preview stage (ADR-0019): pointer-drag within the Rail's width clamps, double-click resets to the default width, keyboard-operable (`role="separator"`, arrow keys). It is a bare 1 px hairline — grey at rest, primary on hover/focus/drag (the hover-reveal pill grip was removed on user feedback); the colouring line itself is the interaction signature. Below the md breakpoint the modal stacks vertically and the Splitter is absent.
_Avoid_: Resizer, divider (that's the visual line, not the control), sash, Resize grip (that's the Studio panel's window-edge affordance)

**Pinned selectors**:
The chart-type picker and data-mode toggle sitting above the section stack — always visible, never collapsible.
_Avoid_: Header controls, first section

**Section**:
One collapsible, intent-named unit of the rail (`Series`, `Data source`, `Title`, `Legend`, `Tooltip`, `Axes & Zoom`, `Colours`, `Behaviour & JSON`, plus family options sections). The inventory is family-aware: `Axes & Zoom` is cartesian-only; gauge/pie/radar get their own options section in that slot. `Title` and `Legend` were one section through ADR-0010; ADR-0021 split them and expanded both (title colour/size/weight + 6-position; legend 9-position + text/symbol/frame styling).
_Avoid_: Tab (the v2 concept), panel, accordion (that's the mechanism, not the concept)

**Summary line**:
The single-line digest of effective values shown on a collapsed Section (`24h · avg · 500`, `tableau · auto`). A section that cannot say anything useful collapsed does not deserve to be a section.
_Avoid_: Subtitle, hint text

**Series card**:
A cartesian series item in the Series section — a quiet card whose header (swatch, name, OID, ↑↓ reorder, duplicate, delete) expands inline to the per-series knobs, grouped into Sub-groups (basis, line/bar, area).
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
A cartesian Y-axis item in the (v4) Axes manager — a collapsible card whose body groups all axis knobs into Sub-groups (basis, value range, scale & ticks, presentation). One per entry in the `yAxes` blob; a series binds to one via `yAxisIndex`.
_Avoid_: Axis row, axis settings

**Axis manager**:
The cartesian-only UI that adds/removes/reorders Axis cards and assigns series to axes (v4, ADR-0012). Replaces the chart-level Y-axis scalars (`yMin/yMax/yName/yLog/yFormat`).
_Avoid_: Axes tab, axis list

**Axis auto-bind**:
The cartesian *creation* default that each new series gets its own Y-axis (ADR-0018): creating a series creates a matching axis (1:1), alternating left/right with an 80 px stagger (`even → left`, `odd → right`, `offset = ⌊i/2⌋ × 80`). Applies only on explicit creation — existing widgets are not silently re-laid-out, and 1:n (several series on one axis) is reached by rebind, not by this default. A structural change to the side layout — flipping an axis left↔right, or deleting one — re-staggers both sides densely to the 80 px raster by array order, so no two axes overlap (ADR-0028); the per-axis offset is a fine-justure that survives only until the next such change. An axis without an explicit colour **or name** inherits its bound series' values (colour → line + label + name; name → axis title), at runtime for every chart — never a creation-time snapshot. In the editor the Axis-card swatch resolves that inherited colour by the bound series' **display position** (palette slot) — matching the Series card, not the axis index, which drifts in JSON after a rebind or a payload-name reorder. The axis lifecycle after creation (delete/rebind) is governed by **Axis–series coupling**.
_Avoid_: auto-axis (too vague)

**Axis–series coupling**:
The cartesian lifecycle invariant (ADR-0025 History/Live, ADR-0026 JSON): a Y-axis is an independent citizen a series references via `yAxisIndex` — not a child of a series. Deleting an axis NEVER deletes its bound series; they rebind to a surviving axis of the same `format` (else axis 0, with an advisory unit-mismatch toast) and survivors re-index/re-stagger. A series leaving its axis — by deletion OR by rebind — drops the axis iff no series remains on it (orphan-check), so no empty phantom axis lingers; this makes the 1:n case (several series on one axis) first-class. The asymmetry is principled: axis-delete spares data, series-leave cleans up presentation. In JSON mode the name-keyed overlay owns each payload series' `yAxisIndex`, reconciled sticky (`reconcileJsonAxes`): a fresh payload lands 1:1, a manual rebind survives payload changes, freed axes cleaned.
_Avoid_: 1:1 binding (that is only the creation default), series-axis cascade (there is none)

**Colour inheritance**:
The configurator's colour model — how a colour field resolves when no explicit value is set. The "theme" source of the palette is the COLLECTION theme (the merged theme the canvas renders under), resolved in the editor via `useEditorPalette` and in the live body via `CollectionContext` — never the vis-2 host theme (ADR-0027). Every colour field clears to a real inherited value: a series → its palette slot, an axis → its bound series' effective colour (ADR-0018), a title/legend/mark-line → a semantic **theme token**. An explicit override always wins.
_Avoid_: default colour (that is the resolved value, not a stored one), fallback (that is the mechanism, not the concept)

**Theme token**:
A semantic theme colour (`primary`/`success`/`warning`/`error`/`divider`/`textPrimary`/`textSecondary`…) resolved once and stamped onto `PresentationConfig.themeTokens`, dark-mode-aware. Consumed BY NAME by the family builders for the theme-derived defaults — gauge target zones (`success`/`warning`), the visualMap value ramp, the markLine and legend-border defaults — so these visible surfaces track the theme instead of being fixed hexes (ADR-0027).
_Avoid_: theme colour (too generic), palette colour (the palette is the positional series assignment; tokens are semantic)

**Inherit swatch**:
The colour box in a `ColorField` that shows the field's **effective** colour — the value the canvas will actually render — when no explicit override is set. Backed by the picker's `fallback` (ADR-0004): palette slot, bound-series colour, or theme token. An inherit swatch that reads empty is a bug — it must preview the real inherited value.
_Avoid_: colour preview, default swatch

**Template snippet**:
A chart-wide, collision-safe Advanced-JSON preset (v4, ADR-0014; the series-riding examples moved to cards by ADR-0017) — injects GUI-uncovered *chart-level / component* option keys (e.g. `graphic` overlay text, `aria`, `axisPointer` link, `radar.splitArea`). With `series` now a managed key, a snippet never targets per-series presentation; that is the **Series template**'s job. The merge-preview shows whether each key takes effect (`✓`) or collides with a GUI-owned key (`✗`).
_Avoid_: Snippet, preset, series template (that is per-series)

**Series raw**:
The per-series echarts-JSON escape hatch (ADR-0015/0017) — a small raw object on a series card, deep-merged UNDER the GUI-authored series entry (the GUI wins collisions; the data points are force-set). Every series card carries one: cartesian per-card, gauge/radar as the single-series raw, and pie on two levels (a whole-pie series raw + a per-slice raw). It replaces the positional chart-level `U.series` array, now retired.
_Avoid_: Advanced JSON (that is the chart-level U), JSON override (too generic)

**Series template**:
A per-series, collision-safe preset (ADR-0017) — injects GUI-uncovered echarts keys relevant to the family/type into a card's Series raw (e.g. `sampling:'lttb'`, `markPoint` peaks, gauge `axisLine` coloured zones, radar `lineStyle`). Each entry is audited against the builder so it duplicates no GUI-owned key; the GUI wins any residual collision. Distinct from the chart-wide **Template snippet**.
_Avoid_: Snippet, preset, template snippet (that is chart-wide)

**Field grid**:
The section-body layout primitive (ADR-0019): a CSS `repeat(auto-fill, minmax(150px, 1fr))` grid whose cells reflow 1→4 columns purely with Rail width — no JS width measurement, so a Splitter drag never re-renders the form tree. Composite fields (OID picker, colour) live in flex rows with a flex basis; a wide field may span `1 / -1`. Hardcoded pixel widths are banned from section bodies.
_Avoid_: Column layout, breakpoint layout

**Switch list**:
The boolean-control idiom (ADR-0019): one row per option — label left, switch right, ~32 px tall — several rows grouped in a quiet hairline box. Replaces the stacked label-over-switch cell that made six booleans a wall.
_Avoid_: Checkbox grid, toggle cell

**Slider field**:
The bounded-numeric idiom (ADR-0019): a slider with a synced small number input beside it (either edits the value; the working copy updates live). For bounded ranges (opacity, width, radius, duration, rotation); unbounded numerics (min/max, offsets) stay plain number fields.
_Avoid_: Stepper, spinner

**Sub-group**:
A named cluster of knobs inside a card body (ADR-0019), headed by a small overline label (e.g. range / scale & ticks / presentation on an Axis card). Structure without disclosure — everything in an open card stays visible; no fourth expand level.
_Avoid_: Advanced section (v2), nested accordion, tab

**Position grid**:
The position selector of the Title and Legend sections (ADR-0021) — a 3-column `ToggleButtonGroup` of small frame-with-dot glyphs (the glyph marks the chosen corner/edge/centre; words ride only as the aria-label). Title uses a 3×2 grid (6 positions), Legend a 3×3 grid (9). It mirrors the `ChartTypePicker` glyph-grid idiom so it reads as the same editor, not a new aesthetic; it replaced the long dropdowns the old 3-/4-value position selects would have become.
_Avoid_: Position dropdown, alignment matrix, radio grid

# Theme Studio

The collection-wide theme editor (ADR-0020): edits the user theme (stored in the `vis-2-widgets-collection.0.theme` state) while every collection widget on the canvas re-themes live. Opened from the widget palette, not dropped onto the canvas.

## Language

**Studio panel**:
The floating, draggable, resizable panel hosting the theme editor. Its live preview IS the canvas — there is deliberately no in-panel component preview. It resizes like an OS window via Resize grips; the full Geometry (position, width, height-or-Auto) persists across sessions.
_Avoid_: Wizard dialog (the deleted modal), theme dialog

**Preset card**:
A curated theme preset rendered as mini colour swatches (background / paper / primary / secondary) plus a mode icon. The card matching the current palette is marked active.
_Avoid_: Preset chip (the old blind dot)

**Palette-only merge**:
The preset-apply semantics (ADR-0020): applying a Preset card replaces only the draft's `palette` (including mode) — typography, corner radii, spacing and CSS variables survive, because presets are colour themes and define nothing else.
_Avoid_: Full replace (the old silent wipe), theme reset

**Feintuning**:
The in-section disclosure at the end of Schrift & Form holding the font-weight selects and the line-height slider — rare, expert knobs (bundled fonts ship real 400/700 faces only; other weights synthesise).
_Avoid_: Advanced typography, more options

**Control kit**:
The shared configurator primitives (`FieldLabel`, Field grid, Switch list, Slider field, Sub-group — defined under ECharts, ADR-0019) living in `src/components/controls/`, used by both the echarts configurator and the Studio panel. One configurator language across the collection.
_Avoid_: Editor controls, per-editor widgets

**Resize grip**:
One of the 8 window-style resize affordances on the Studio panel's edges and corners (ADR-0020 addendum). Edge grips are keyboard-operable separators (arrows ±16/±64, Home/End, double-click reset) in the bare-hairline idiom; corner grips are pointer-only, invisible hit zones revealed by the resize cursor. Distinct from the echarts configurator's Splitter — that is an in-layout divider between two panes, not a window edge.
_Avoid_: Splitter (the echarts rail divider), resizer, sash

**Auto height**:
The Studio panel's untouched height default: the panel follows its content up to 80vh. The first drag on a horizontal edge or any corner fixes the height; a double-click on a horizontal edge restores Auto. Persisted as `h: null` in the Geometry.
_Avoid_: Fit-to-content, dynamic height

**Geometry**:
The Studio panel's persisted window rectangle — position, width, and height-or-Auto in a single localStorage entry. Stored as the user's intent; the applied rectangle is clamped to the viewport (width 320…viewport−48, height 240…viewport−48) live during drags and on browser-window resize, so a shrunken window never strands the panel and a re-grown window restores the intended size.
_Avoid_: Position+width (the retired two-key form), size
