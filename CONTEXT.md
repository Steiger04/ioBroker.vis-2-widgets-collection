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

**Data mode**:
The pinned-selector choice (cartesian/pie only) of how a chart's series acquire their values. The demarcation line is *what the data needs*, not whether it moves — Verlauf updates too. Four values: **Verlauf** (an aggregated fixed window fetched from a History adapter — backfilled on load, so it needs the adapter), **Live** (a rolling buffer of subscribed values — needs no adapter, therefore starts empty on every load and fills only as values arrive; no backfill), **JSON** (a single state delivers complete series data — the payload owns the series, so the user only styles/hides them by name), and **Aktuellwert** (gauge/radar read the live value directly — family-forced, not selectable). Switching modes is lossless for AUTHORED config — it coexists in the editor state and is merely shown/hidden — EXCEPT at the JSON boundary (ADR-0067 reverses ADR-0033's lossless coexistence there): crossing into or out of JSON resets the **Data path**; Verlauf↔Live is no reset (identical series structure).
_Avoid_: source type (that is the mechanism), data provider, feed mode — and "static vs. live" framing (Verlauf is not static)

**Data path**:
The per-mode acquisition config a structural reset deletes: series (OIDs), Y-axes, the JSON overlay + jsonHidden, jsonOid, markings, radar indicators. Delimited against the presentation config (title, legend, tooltip, colours/palette, toolbox, raws, X-Karte, zoom), which survives every reset. Resets fire on structure boundaries only — the JSON mode boundary (into or out of JSON) and the chart-family boundary — never on load, never Verlauf↔Live, never line↔bar↔scatter (ADR-0067).
_Avoid_: data config, source config (that is the Data mode)

**Chart pipeline**:
The data-mode decision tree from acquisition to option — ONE implementation (`useChartPipeline`) behind an adapter seam, used by the Preview stage AND the live body (two adapters = a real seam, ADR-0046). The adapter supplies stabilised sources: values normalised to plain OIDs (`useValues(oids)`), the history fetch, and the theme bundle (palette/themeTokens/themeBase/themeDark — the anti-churn keying stays adapter-side, because ref churn is a property of the value source). The pipeline owns entries, the per-Data-mode subscriptions, useHistory/useLiveBuffer, JSON parse + jsonHidden filter, family dispatch, the presentation call, merge + title + bgColor, and the return `{ option, loading, hasData, error }` (error unifies JSON/Verlauf/series errors). Input: the data-shaped record plus already-decoded companions (chartConfig/yAxes/markLines/jsonSeriesStyle/jsonHidden/series — decoding stays caller-side: the body decodes blobs, the editor holds state). Options: `maxPoints` (hard point ceiling — preview 200, body/default 5000; count fallback 500) and `earlyRefresh` (default off, body on); `refreshMs` rides the record. `hasData` reads the merged `option.series` for cartesian/pie (the scalar/indicator values for gauge/radar).
_Avoid_: preview pipeline (there is only one), data source (that is the Data mode), renderer (that is EChart)

**Section**:
One collapsible, intent-named unit of the rail — top to bottom: `Data source`, `Behaviour`, `Title`, `Series`, `Axes & Zoom` (or the family options section in that slot), `Legend`, `Tooltip`, `Colours`, `Toolbox` (ADR-0045; the chart-level Advanced JSON section is retired). Rendered as the shared **SectionCard** — the bordered 12px-radius accordion card both configurators use (ADR-0038; the echarts flat-divider shell and the studio's StudioSection merged into one). The inventory is family-aware: `Axes & Zoom` is cartesian-only; gauge/pie/radar get their own options section in that slot. `Title` and `Legend` were one section through ADR-0010; ADR-0021 split them and expanded both (title colour/size/weight + 6-position; legend 9-position + text/symbol/frame styling).
_Avoid_: Tab (the v2 concept), panel, SectionCard (that's the shell component, not the concept)

**Zeitfenster**:
A Verlauf chart's read span (parity Build A, ADR-0063), authored in the Data source section as **relativ** (one of 18 grouped ranges — minutes/hours/days as ms, months/years CALENDAR-wise — plus a relativeEnd that rounds the window's END up to one of 17 grid/calendar boundaries instead of „now") or **statisch** (a fixed DateTimePicker pair; disables Live/refresh — a fixed span has nothing to follow). The pure `resolveTimeWindow` (timeWindow.ts) turns the authored spec into {start, end} per fetch; legacy `24h`/`30d` range keys migrate to `1d`/`1m`. NOT the Live buffer's implicit „now" (that mode has no window).
_Avoid_: time range (that is the range KEY inside it), period, interval (that is ticket 12's aggregation step)

**Kategorie-Bucket**:
One bar of an interval-bucketed bar chart (parity Build A, ADR-0065): the window gridded onto CALENDAR boundaries (day = local midnight, `30d` = 1st-to-1st months) by the pure `barBuckets.ts` machinery; points fall into `[cat[i], cat[i+1])` and reduce per the chart aggregate (client-side, like the adapter). The fetch widens left onto the grid (one EXTRA bucket under the Differenz — the diff's first bucket has no predecessor and is dropped). With `barCategories` riding the presentation, the x axis becomes a CATEGORY axis (timestamps as data, the X-Karte's time format labels them) and bar series data is plain bucket arrays. `auto`/unset = the time-axis path, unchanged.
_Avoid_: bar bin, bucket interval (that is the Bar-Intervall knob), histogram (implies counts)

**Summary line**:
The single-line digest of effective values shown on a collapsed Section (`24h · avg · 500`, `tableau · auto`). A section that cannot say anything useful collapsed does not deserve to be a section.
_Avoid_: Subtitle, hint text

**Series card**:
A cartesian series item in the Series section — a quiet card whose header (swatch, name, OID, ↑↓ reorder, duplicate, delete) expands inline to the per-series knobs, grouped into Sub-groups (basis, line/bar, area). The basis group leads with the OID and — in Verlauf — the per-series **history instance** (ADR-0039: each OID can store its history in a different adapter; Auto = the datapoint's own config decides, else the server).
_Avoid_: Accordion item (v2), row

**Slice row**:
A pie slice item — a light list row (name + colour + delete inline) with no expand, because a slice only carries two fields.
_Avoid_: Slice card, accordion

**Empty-state CTA**:
The first-open onboarding of an empty configuration (ADR-0013, reversing the ADR-0010 skeleton): no card is injected, the empty Series section lands on a call-to-action, and Apply stays disabled until a real series/indicator is added.
_Avoid_: Skeleton card (the retired injected default series), default series, placeholder series

**Warning roll-up**:
The `⚠ n` chip in a section header aggregating that section's field-level validation issues. Advisory only — it never blocks Apply.
_Avoid_: Error badge, validation summary

**Family-switch warning**:
The non-blocking chip under the chart-type picker warning BEFORE a family crossing (ADR-0067): a cartesian↔pie↔gauge↔radar switch deletes the whole **Data path** — the chip shows the falling counts („N series, M axes"; radar counts its indicators). line↔bar↔scatter crosses nothing. Beside it (unchanged, ADR-0042) the snippet-loss advice can still name family-invalid ACTIVE template activations — though since the reset deletes every series on crossing, its post-switch case is vacuous.
_Avoid_: Confirm dialog, type guard

**Axis card**:
A cartesian Y-axis item in the (v4) Axes manager — a collapsible card whose body groups all axis knobs into Sub-groups (basis, value range, scale & ticks, presentation). One per entry in the `yAxes` blob; a series binds to one via `yAxisIndex`.
_Avoid_: Axis row, axis settings

**Axis fine-tuning**:
The sparse appearance leaves beneath the axis **one-colour idiom** — label size (`axisLabel.fontSize`), tick colour (`axisTick.lineStyle.color`, separate from the labels; ticks follow the axis LINE by default), and grid colour (`splitLine.lineStyle.color`, offered only while that axis' splitlines switch is on; the value persists). Parity Build D (ADR-0055); additive: a set axis colour keeps painting line + label + name, these fields only steer their own leaf, unset = no emit.
_Avoid_: axis styling (vague — the one-colour field is part of it), tick format (that is the value-range format field)

**Axis manager**:
The cartesian-only UI that adds/removes/reorders Axis cards and assigns series to axes (v4, ADR-0012). Replaces the chart-level Y-axis scalars (`yMin/yMax/yName/yLog/yFormat`). Its first card is the X-Karte; the manageable list below is Y-only.
_Avoid_: Axes tab, axis list

**Markierung**:
A reference marking on a cartesian chart (the reworked threshold, ADR-0061/0062) — a card in the Axes & Zoom section, anchored to a **Y-axis** (our model; the adapter anchors on a series). Carries one or two **bounds** (`upper`/`lower`, each a number OR an OID that resolves live via socket subscription — both resolved ⇒ a `markArea` band with a 0–1 fill, exactly one ⇒ a `markLine`), a style cluster (colour/width/shadow/solid-dashed-dotted) and a label cluster (text, 12 echarts-native places, X offset, size, colour). The emit stays series-level (echarts `markLine`/`markArea` hang on series): the builder attaches to the first series of the target axis, reading bounds the PIPELINE resolved against the current values (the builder never subscribes). No label text → no `label` key, so echarts shows the value itself at the line end.
_Avoid_: Threshold (the retired pre-0061 name), mark line (that is the echarts key), limit line

**X-Karte**:
The single, non-deletable card atop the Axis manager configuring the shared time axis — label time format (the **Time format**), name, colour (theme-token inherit), ticks, split lines, pixel offset (ADR-0035), bottom/top position and the **Axis fine-tuning** leaves (ADR-0055). Flat presentation config in every data mode: never a list, never bound to a series; neither min/max nor the axis type is configurable — the data mode owns the time window, and `time` is fixed.
_Avoid_: X axis settings, X axis card list (there is exactly one)

**Time format**:
The moment.js token string authoring the time axis' labels AND the tooltip's time header — one format, two surfaces (modelled on ioBroker.echarts; ADR-0052). Authored on the X-Karte as a freeSolo combobox whose dropdown offers the curated presets grouped by intent; the locale follows the host language, so weekday/month tokens render localised. `Auto` (unset) is the adaptive labelling: seconds (span < 30 min) and the date prefix are derived from the data span, the date appearing at day changes and chart start; spans ≥ 7 days degrade to date-only two-line labels. A `<br />` token inside the format marks a two-line label (exchanged for a real line break after formatting — moment swallows `\n` in patterns; in the HTML tooltip it already IS the break). The formatter is always emitted as a moment function, keeping the raw JSON function-free. A tooltip template overrides the default header; its `{b}` token renders the same time in the same format — resolved by the widget itself, because echarts' own string-template path renders an EMPTY `{b}` on a time axis (no name dimension; only category axes have one).
_Avoid_: label template (the retired echarts `{HH}` dialect — deliberately not migrated, old values render as literal text until re-authored), date format (that is the JSON table's cell concept)

**Legend values**:
The Legend switch rendering each series' CURRENT value beside its name — `Name [value]`, the ioBroker.echarts `legActual` parity (ADR-0054). The toggle lives in the Legend section (cartesian/pie only; a radar legend names the single polygon, a gauge has no legend); the values are resolved by the chart pipeline per data mode (Live = the subscribed value, Verlauf/JSON = the last point) and ride the presentation config name-keyed — never a persisted field. A series without a usable value renders its bare name. The same builder seam owns `legend.selected` (pre-deselected names), laid for the per-series "only in legend" option (parity Build B, ticket 08) and emitted only when a name is actually hidden.
_Avoid_: live legend (the values follow the data mode, not only Live), legend formatter (that is the mechanism, not the concept)

**Value format**:
The numeric display rules every rendered value passes through — the ONE Wert-Formatter (`valueFormat.ts`, ADR-0057/0058): per-series facts („Einheit" + „Nachkommastellen" on the series card's „Werte" Sub-group) with the chart-level decimals clamp + comma-as-decimal-separator switch (adapter `useComma`, ADR-0054) as the per-fact fallback, resolved explicit-beats-inherited; plus the text facts („Text bei wahr/falsch" on a boolean OID, the **State names** mapping on an enum OID — prefilled from `common.states` on OID selection). Texts render EXACTLY on tooltip/legend/labels (a miss stays empty — no half states) and round to the nearest state on axis ticks (shared axis inheritance: every bound series must carry identical texts); a text hit suppresses unit and decimals. It feeds the tooltip value rows, the Legend values, the series/bar label values and the DEFAULT Y-axis labels; a Y-axis inherits the unit when EVERY bound series shares it, and an explicitly authored axis format wins verbatim. The comma is a plain `.`→`,` replacement on the formatted number (adapter parity) — no thousands separators; the unit joins with a space (our Build-E idiom, not the adapter's bare concatenation). Without authored texts nothing maps — numbers render as before.
_Avoid_: number format (ambiguous — the JSON table and moment have their own), locale (the comma is an explicit switch, not a locale inference)

**Series transform**:
The per-series DATA transforms applied in the chart pipeline's pure core (ADR-0059/0060, parity Build B) — the „Transformation" Sub-group on the series card: the conversion FORMULA over the `val` symbol (expr-eval math syntax, deliberately no JS execution; an invalid formula is flagged red and the chart keeps the raw values), the **Y offset** feeding it (`f(val + yOffset)`, alone without a formula — the adapter's `processOneValue` order), the **X offset** in seconds (shifts that series' Verlauf request window so time-shifted recordings overlap; Live/JSON have no request), the per-series **NULL handling** (keep/forward-fill/zero, overriding the chart-level setting), **„Keine Zukunft"** (points after now are cut, every mode) and **„Gültige Zeit"** (Live only: a fresh last value is held to now, a stale one expires to a gap). Beside it: **„Nur in Legende"** — the series stays emitted with its legend entry pre-deselected (`legend.selected`), re-enableable by legend click. One application seam in `assemblePipelineResult` covers every data mode — Verlauf, Live and JSON all transform against their meta.
_Avoid_: convert (that is the formula field's adapter name, not the concept), data filter (nothing is filtered), axis offset (that is the pixel offset of an axis, ADR-0012), line shadow (that is line styling, not a data transform — it lives on the Line Sub-group)

**Chart frame**:
The optional CSS border around the chart AREA — the „Rahmen" Sub-group in the Colours section (every family; parity Build D, ADR-0056). Pure container styling on the widget-body wrapper (`border` + `padding` + `boxSizing:'border-box'`), never an echarts option — that is what keeps the adapter's 8 `border-style` values (incl. groove/ridge/inset/outset). An/aus + width (0 while enabled also renders nothing), colour (inherit = the host theme's divider token), padding (the adapter's „Randabstand"). One resolver (`frameStyle.ts`) feeds the live body AND the Preview stage, so the frame previews live.
_Avoid_: chart border (echarts' own tooltip/legend frame options are different concepts), widget border (that is vis-2 style, outside the configurator)

**Chart padding**:
The per-side inset between the widget EDGE and everything the diagram renders — four sliders (top/bottom/left/right, MUI spacing units) in the „Diagramm" attribute group of the vis-2 panel; the Schieberegler effect: the whole chart surface incl. axes, title and legend shifts inward while the widget bounds hold. Pure container layout OUTSIDE the **Chart frame** (widget edge → chart padding → frame → frame padding → chart), additive beneath the collection-wide uniform base padding; never an echarts option. Every side defaults to 0 — no padding renders until authored.
_Avoid_: grid padding (that is echarts' plot-area inset — chart configuration), frame padding (that is the gap inside the frame), base padding (that is the collection's uniform Paper padding)

**Bar label**:
The value label ON a bar series — the Bar Sub-group's cluster beside the „Werte-Labels" switch: position (the adapter's five options mapped onto what they emit: `top`/`insideTop`/`insideBottom`/`inside`; „ohne" turns the switch off, a position turns it on — the controls cannot disagree), font size and colour (inherit = the collection theme's text-primary). The label VALUES ride the **Value format** per series. Sits next to the absolute **bar width** — plain digits = px, trailing `%` = percent of category, unset/unparseable = echarts' auto width (no emit). A LINE label stays the bare switch plus the same **Value format** on its values.
_Avoid_: data label (chart-lib vocabulary; our label switch is „Werte-Labels"), series label (that is the on/off switch concept)

**Axis auto-bind**:
The cartesian *creation* default that each new series gets its own Y-axis (ADR-0018): creating a series creates a matching axis (1:1), alternating left/right with an 80 px stagger (`even → left`, `odd → right`, `offset = ⌊i/2⌋ × 80`); 1:n (several series on one axis) is reached by rebind, not by this default. A fresh or reset configuration starts with ZERO axes (ADR-0067 — the former default „Achse 1" is gone); axes exist only through binding and die with their last binder (**Axis–series coupling**, ADR-0069) — beside the series-add default, the per-series Y-axis dropdown's „Neue Achse" entry is the only other birth path (append + bind in one step). On EVERY structural event (series/axis add/delete/rebind, JSON hide/show, a **Data path** reset) the **axis auto-balance** (`balanceAxes`) re-arranges the bound axes to the standard interleaving — array order alternating left/right, densely on the 80 px raster — computed over the bound axes (ADR-0067 widening ADR-0028). A manual position or offset is fine-justure that survives only until the next structural event; the load path never re-arranges. An axis without an explicit colour **or name** inherits its **Namensgeber**'s values (colour → line + label + name; name → axis title), at runtime for every chart — never a creation-time snapshot. In the editor the Axis-card swatch resolves that inherited colour by the **Namensgeber**'s **display position** (palette slot) — matching the Series card, not the axis index, which drifts in JSON after a rebind or a payload-name reorder.
_Avoid_: auto-axis (too vague)

**Namensgeber (name owner)**:
The series an axis displays — its inherited name and colour come from the OWNER, not from „the first series in list order" (ADR-0068): the incumbent keeps the identity, so a series rebinding onto an occupied axis NEVER steals it however early it sits in the list; when the owner leaves, the first remaining binder takes over. Kept current on every structural event; the inheritance stays live (renaming the owner renames the axis immediately). In JSON mode the owner is the payload NAME (the overlay's key); in Verlauf/Live it is the series' stable id. The Namensgeber is a *who*, never a frozen *value* — every axis that exists is bound (ADR-0069), so the owner always resolves.
_Avoid_: first binder (the superseded reading), owner series (redundant), axis name source

**Axis–series coupling**:
The cartesian lifecycle invariant (ADR-0025 History/Live, ADR-0026 JSON; reworked by ADR-0069): a Y-axis is a DERIVED citizen — it exists exactly while at least one visible series binds it via `yAxisIndex`. Born only through binding (the series-add **Axis auto-bind**, the reconcile append for a new payload name, or the per-series Y-axis dropdown's „Neue Achse" entry — append + bind in one step), it DIES with its last binder: a series-delete, a rebind onto another axis, a JSON hide (the series-card trash), a JSON axis-delete (which hides ALL its bound payload names — 1:n means several binders, one leftover would keep the axis rendered), or a payload name vanishing from the JSON data (the reconcile). Every death is immediate and rides the triggering undo step: config gone, markings anchored to the axis remapped (onto the rebind target when the binder moved there — like the explicit axis-delete — else onto the stack predecessor), survivors re-indexed, the bound set re-arranged (ADR-0067). The explicit axis-delete NEVER deletes its bound series: History/Live they rebind to a surviving axis of the same `format` (else axis 0, with an advisory unit-mismatch toast); in JSON the delete hides its binders and they return with the next payload. A death by side effect is reported by an undo snackbar (rebind, series-delete, JSON-hide; payload-vanish info-only — undo is futile, the next reconcile re-kills; the explicit delete and the load stay silent). In JSON mode the name-keyed overlay owns each payload series' `yAxisIndex`, reconciled sticky (`reconcileJsonAxes`): a fresh payload lands 1:1, a manual rebind survives payload changes. The load path silently enforces the invariant — an axis no series binds cannot exist — and the **Data path** structural reset (ADR-0067) remains the one bulk exception. The builder still emits bound axes only: defense for hand-edited JSON, not a state.
_Avoid_: 1:1 binding (that is only the creation default), series-axis cascade (there is none), unbound axis / resting axis / orphan axis (the retired states — pre-0069 disposal and ADR-0066's resting alike; no axis exists unbound anymore), free axis, reserved axis

**Tick alignment**:
The cartesian per-axis opt-in (ADR-0034) where a Y-axis re-ticks itself to match the **first** value axis — the implicit **reference axis** (axis 0). It is OFF by default and never a smart default: alignment is a cross-axis coordination, so auto-enabling it hid the ripple (an edit on axis 0 re-ticked every follower) and the silent conflict (a fixed min/max/splitNumber/minInterval makes echarts ignore it). In the configurator the switch appears only on follower axes; a non-blocking warning flags a follower whose tick override defeats its alignment.
_Avoid_: alignTicks (that is the echarts property), auto-align (there is none), shared grid (that is the deferred chart-level concept, ADR-0034 out-of-scope, not this one)

**Colour inheritance**:
The configurator's colour model — how a colour field resolves when no explicit value is set. The "theme" source of the palette is the COLLECTION theme (the merged theme the canvas renders under), resolved in the editor via `useEditorPalette` and in the live body via `CollectionContext` — never the vis-2 host theme (ADR-0027). Every colour field clears to a real inherited value: a series → its palette slot, an axis → its bound series' effective colour (ADR-0018), a title/legend/mark-line → a semantic **theme token**. An explicit override always wins. The palette source's presets include the 17 ioBroker.echarts theme palettes (ADR-0053) — adopted verbatim as COLOUR ARRAYS (no echarts theme is registered), flowing through the same `resolvePalette` seam as the six hand-curated presets.
_Avoid_: default colour (that is the resolved value, not a stored one), fallback (that is the mechanism, not the concept)

**Theme token**:
A semantic theme colour (`primary`/`success`/`warning`/`error`/`divider`/`textPrimary`/`textSecondary`…) resolved once and stamped onto `PresentationConfig.themeTokens`, dark-mode-aware. Consumed BY NAME by the family builders for the theme-derived defaults — gauge target zones (`success`/`warning`), the visualMap value ramp, the markLine and legend-border defaults — so these visible surfaces track the theme instead of being fixed hexes (ADR-0027).
_Avoid_: theme colour (too generic), palette colour (the palette is the positional series assignment; tokens are semantic)

**Inherit swatch**:
The colour box in a `ColorField` that shows the field's **effective** colour — the value the canvas will actually render — when no explicit override is set. Backed by the picker's `fallback` (ADR-0004): palette slot, bound-series colour, or theme token. An inherit swatch that reads empty is a bug — it must preview the real inherited value.
_Avoid_: colour preview, default swatch

**Option group**:
An echarts configuration group — on a series `lineStyle`/`areaStyle`/`itemStyle`/`symbol`/`label`/`labelLayout`/states/markers, on an axis `axisLine`/`axisTick`/`axisLabel`/`splitLine`/…, at chart level the component (`title`, `tooltip`, …). Since ADR-0043 it is the category unit of the three template catalogs: the menu teaches the option space of its level instead of hiding it behind semantic umbrella headers.
_Avoid_: Category (that is its menu role), theme group (the retired semantic headers)

**Group scaffold**:
A template that brings ONE Option group COMPLETELY as an editable starting point — every documented, non-GUI-owned key of the group pre-filled with its echarts-doc value; the user deletes what they do not need (ADR-0043; form inherited from the complete scaffolds of the ADR-0030 era). GUI-owned leaves are deliberately omitted: the merge eats them anyway, and the ✓/◐/✗ analysis would otherwise read ◐/✗ forever. Power variants (gradient, decal, rich text, edge labels) are additional scaffolds inside the same Option group.
_Avoid_: Complete scaffold (old name), preset, look (those bundle MULTIPLE groups — a different, rejected form)

**Solo**:
A scalar template for ONE key that has no object group (`sampling`, `clip`, `startAngle`, `logBase`, `universalTransition`…). Object part-snippets of the old atomic style (e.g. `label · value`) no longer exist since ADR-0043 — their group carries a Group scaffold instead.
_Avoid_: Atomic snippet (the superseded form), single-key template


**Template snippet** (retired):
The chart-wide Advanced-JSON preset concept (v4, ADR-0014) — wound down in stages: ADR-0044 left it the toolbox scaffold + radar presets (title/legend/tooltip/xAxis had moved to their sections), and ADR-0045 retired the chart-level U entirely — the toolbox is GUI-configured in its own section, and the radar presets became the radar family's Section-raw catalog. The per-level template concept lives on as Series/Axis/Section templates.
_Avoid_: Snippet, preset, series template (that is per-series)

**Section raw**:
The per-section echarts-JSON escape hatch family (ADR-0037 axis raw → ADR-0037 addendum X-Karte → ADR-0044 title/legend/tooltip → ADR-0045 radar): a raw object on the section that owns the component, deep-merged UNDER that component's builder output — the GUI wins every collision, every builder-uncovered key merges through. One anatomy for all hosts (menu + plain chips + validity); the activation follows the text (ADR-0042 addendum). The STATE side of every raw level (load/save heal, prune, blob encode — scalar levels first, per-item lift to follow) is the **Raw-Level-Registry** (`editor/rawLevels.ts`, ADR-0047) — a level is a registry entry owning placement only, plus its catalog bundle via `defineCatalog` (`editor/catalog.ts`).
_Avoid_: Advanced JSON (that is the chart-level U), component JSON (too generic)

**Series raw**:
The per-series echarts-JSON escape hatch (ADR-0015/0017) — a small raw object on a series card, deep-merged UNDER the GUI-authored series entry (the GUI wins collisions; the data points are force-set). Every series card carries one: cartesian per-card, gauge/radar as the single-series raw, and pie on two levels (a whole-pie series raw + a per-slice raw). Since the ADR-0037 axis parity it is labelled "Erweitertes JSON"/"Advanced JSON" like the Axis raw and injects templates via DEEP merge. It replaces the positional chart-level `U.series` array, now retired.
_Avoid_: Advanced JSON (that is the chart-level U), JSON override (too generic)

**Series template**:
A per-series, collision-safe preset (ADR-0017) — injects GUI-uncovered echarts keys relevant to the family/type into a card's Series raw (e.g. `sampling:'lttb'`, `markPoint` peaks, gauge `axisLine` coloured zones, radar `lineStyle`). Since ADR-0043 the catalog's categories are the echarts Option groups of the series slot, its entries Group scaffolds (with power variants: gradient, decal, rich text, edge labels) and scalar Solos; the atomic part-snippet form is retired. Each entry is audited against the builder so it duplicates no GUI-owned key; the GUI wins any residual collision. Distinct from the chart-wide **Template snippet**. Since ADR-0042 activated via the template multi-select (**Aktive Vorlage**), not one-shot injection.
_Avoid_: Snippet, preset, template snippet (that is chart-wide)

**Axis raw**:
The per-axis echarts-JSON escape hatch (ADR-0037) — a raw object on an Axis card, deep-merged UNDER the GUI-authored axis entry (the card wins collisions). Present on every Y-axis card in all cartesian data modes AND, since the ADR-0037 addendum, on the X-Karte (riding the `xAxis` blob); a JSON-derived axis keeps it through reconcile, while freshly created axes start without one. Its UI section is labelled "Erweitertes JSON"/"Advanced JSON" (the user's chosen name) — the label notwithstanding, it is NOT the chart-level Advanced JSON.
_Avoid_: Advanced JSON (that is the chart-level U), axis JSON (too generic)

**Axis template**:
A per-axis, collision-safe preset (ADR-0037) — injected deep-merged into an Axis card's Axis raw. Since ADR-0043 the six semantic category headers give way to the echarts Option groups (`name`/`axisLine`/`axisTick`/`minorTick`/`axisLabel`/`splitLine`/`minorSplitLine`/`splitArea`/`axisPointer` plus a scale-Solos category), entries being Group scaffolds and scalar Solos — the X-Karte's catalog (ADR-0037 addendum) shares the categories and absorbed the former chart-level xAxis snippets. Each entry is audited against its axis builder so it duplicates no GUI-emitted key; payloads are theme-neutral. Distinct from the chart-wide **Template snippet** and the per-series **Series template**. Since ADR-0042 activated via the template multi-select (**Aktive Vorlage**), not one-shot injection.
_Avoid_: Snippet, preset, series template (that is per-series)

**Aktive Vorlage**:
A catalog entry switched ON at one of the raw levels (series / axis / title / legend / tooltip / radar) via the template multi-select (ADR-0042); renders as a plain chip carrying its label and a deactivate-X. The ordered activation list is persisted per level and deep-merged in selection order (last activation wins a shared leaf) into the level's raw JSON; deactivating removes exactly its still-pristine leaves, so its effect is gone. Since the ADR-0042 addendum the activation tracks the raw text: it lasts while ANY of its keys stands in the JSON, and arises from the text only when its complete, value-identical key set stands there (editor undo restores it; a coincidental key never lights one). Family-invalid activations are pruned on Apply with the family-switch warning.
_Avoid_: selected template, inserted template (the one-shot insert is retired), checked snippet

**Eigenanteil**:
The leaves of a level's raw JSON that no active template accounts for — hand-written keys plus template leaves whose value the user changed. Determined by leaf-diff against the composed templates, never persisted itself; it survives every re-composition.
_Avoid_: custom JSON, free JSON, user layer, delta

**Tombstone**:
The marker that a leaf an active template would re-supply was deleted by hand. Derived from the raw text at every recomposition (a composed path absent from the text IS the tombstone — nothing is stored), so it survives recomposition and reload; deactivating the last template supplying the leaf clears it.
_Avoid_: Deletion flag, blocked key, persisted deletion list

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
The floating, draggable, resizable panel hosting the theme editor. Its live preview IS the canvas — there is deliberately no in-panel component preview. Its chrome renders in the vis-2 editor's theme family, rebuilt from the host mode via the ioBroker theme factory (ADR-0038) — never in the theme being edited. It resizes like an OS window via Resize grips; the full Geometry (position, width, height-or-Auto) persists across sessions.
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
The shared configurator primitives (`SectionCard`, `FieldLabel`, Field grid, Switch list, Slider field, Sub-group — the field idioms defined under ECharts, ADR-0019; SectionCard per ADR-0038) living in `src/components/`, used by both the echarts configurator and the Studio panel. One configurator language across the collection — and every configurator's chrome renders in the vis-2 editor's theme family (the echarts modal receives the VisTheme object; the studio rebuilds from the host mode via the ioBroker theme factory, ADR-0038).
_Avoid_: Editor controls, per-editor widgets

**Editor history**:
The bounded undo/redo stack over a configurator working copy (ADR-0038, generalised from the studio's ADR-0020 draft history): 50 snapshots, continuous same-key edits coalesce into one step (the studio keys by theme path, the echarts editor by the patch's key set), driven by header buttons and Ctrl+Z / Ctrl+Shift+Z / Ctrl+Y — the field's native undo wins while typing in an input. One implementation (`useEditorHistory`) backs both working copies.
_Avoid_: Snapshot list, timeline, draft history (that's the studio's working copy, not the mechanism)

**Editor lifecycle**:
The echarts configurator's state machine over its working copy (ADR-0048): the load/rebase pass with the dirty-snapshot baseline (including, since ADR-0069, `loadEditorState`'s silent axis-invariant heal — an axis no series binds cannot exist), the guard effects (stable-id self-heal, JSON axis reconcile), apply/reset, and the hasChanges comparison — all owned by `useEchartsEditorLifecycle`, with the firing conditions and idempotence guards as pure steps in `lifecycleGuards.ts` (a no-op step returns null and never touches the history). The modal keeps only chrome. Distinguished from the editor history (the undo stack beneath it) and from the chart pipeline (runtime data, not editor state).
_Avoid_: Editor state machine, modal logic (that's the chrome half), controller

**Section slice**:
The declared field-ownership interface of a rendering surface over the working copy (ADR-0049): every section, series card and pinned rail selector declares a flat `Pick<EditorState, …>` (`XxxSlice`) plus `SetEditor<XxxSlice>` instead of the full EditorState, so foreign reads and writes do not compile. Purely type-level — the rail hands the same object and the same setter to every slice (structural/contravariant assignability); the one working-copy blob and the patch-key coalescing stay untouched. Cross-cutting full readers (validation, summaries, lifecycle guards, raw-level registry, preview) deliberately keep `EditorState`. Each slice's ownership is pinned in `editor/slices.test.ts`. The dispatcher slice of the Series section additionally carries the union its sub-views consume, because it hands them its state object.
_Avoid_: View model, props subset — and not a pie slice (a Series-section row item, a different concept)

**Stable id**:
The editor-only identity every keyed card-list item carries (series, Y-axes, threshold mark-lines, radar indicators; ADR-0050) so React reconciles cards by identity, not array index — `key={i}` unmounts the WRONG card when a middle item is deleted. One generator module (`editor/stableId.ts`) serves all lists: `crypto.randomUUID` when available, else a monotonic counter whose prefix (`sr-` series, `ax-` axes, `id-` the small lists) is fallback decoration only. `withStableIds` backfills ids on load (decoded blobs) and in the lifecycle's self-heal (dev-HMR), preserving id-bearing items by reference. Never emitted to echarts — every option builder reads its item type field-by-field. Not to be confused with `isUsableOid` (a bound-OID predicate in the chart pipeline).
_Avoid_: row key (that is the React prop), GUID (only the crypto branch is one), object id / OID (ioBroker datapoints)

**Resize grip**:
One of the 8 window-style resize affordances on the Studio panel's edges and corners (ADR-0020 addendum). Edge grips are keyboard-operable separators (arrows ±16/±64, Home/End, double-click reset) in the bare-hairline idiom; corner grips are pointer-only, invisible hit zones revealed by the resize cursor. Distinct from the echarts configurator's Splitter — that is an in-layout divider between two panes, not a window edge.
_Avoid_: Splitter (the echarts rail divider), resizer, sash

**Auto height**:
The Studio panel's untouched height default: the panel follows its content up to 80vh. The first drag on a horizontal edge or any corner fixes the height; a double-click on a horizontal edge restores Auto. Persisted as `h: null` in the Geometry.
_Avoid_: Fit-to-content, dynamic height

**Geometry**:
The Studio panel's persisted window rectangle — position, width, and height-or-Auto in a single localStorage entry. Stored as the user's intent; the applied rectangle is clamped to the viewport (width 320…viewport−48, height 240…viewport−48) live during drags and on browser-window resize, so a shrunken window never strands the panel and a re-grown window restores the intended size.
_Avoid_: Position+width (the retired two-key form), size
