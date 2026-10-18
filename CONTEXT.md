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

**Flattening-Tiefe**:
The `tableMaxDepth` setting (default 10): how deep the analysis engine flattens nested JSON into dot-path columns. Render-relevant — the table renders FROM the flattened rows, so the depth caps which cells exist, bounds processing time on deep payloads, and a warning fires when the payload outgrows it. Contrast **Spalten-Sichtweite** (the ECharts editor's discovery-only cap, no render effect).
_Avoid_: Verschachtelungstiefe without qualifier (name which of the two), Spalten-Sichtweite (that is the ECharts editor's sight, no render effect), depth (unsaid which of the two depths)

# ECharts Collection Widget

The widget renders ioBroker state data as Apache ECharts charts (line/bar/scatter/pie — gauge/radar removed by ADR-0071). Its configurator modal is a sections-rail editor with a live real-data preview (ADR-0007/0008 seam, ADR-0010 layout). This glossary pins down the configurator's structural language.

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
The pinned-selector choice (cartesian/pie only) of how a chart's series acquire their values. The demarcation line is *what the data needs*, not whether it moves — Verlauf updates too. Two values: **Verlauf** (an aggregated fixed window fetched from a History adapter — backfilled on load, so it needs the adapter) and **JSON** (a single state delivers complete series data — which **Payload-Familie** decides how series are derived from that one document). Switching modes is lossless for AUTHORED config — it coexists in the editor state and is merely shown/hidden — EXCEPT at the JSON boundary (ADR-0067 reverses ADR-0033's lossless coexistence there): crossing into or out of JSON resets the **Data path**. The retired Live rolling-buffer mode and the family-forced Aktuellwert reading died with ADR-0071 — do not reintroduce the terms.
_Avoid_: source type (that is the mechanism), data provider, feed mode — and "static vs. live" framing (Verlauf is not static)

**Payload-Familie**:
How a JSON document is read into series — a property OF the JSON data mode, never a third mode (acquisition is untouched: always one state, always realtime subscription). **Serien-förmig**: the document carries finished series; the payload owns count, names and data, the user only styles/hides by name (ADR-0011). **Tabellarisch**: the document is a rows list; the user derives series via the **Zuordnung** and thereby owns the structure while the payload owns the values (ADR-0075). Switching families resets the **Data path** but keeps the JSON data point — the same state, read the other way.
_Avoid_: JSON-Variante, zweiter JSON-Modus, Untermodus (it is not a data mode)

**Zuordnung**:
The tabellarische data-path share: the **Zeilenpfad** (which array of the document supplies the points), the **X-Spalte** (a date column → the time axis; anything else → the **Kategorieachse**; none → the row index) and the Y columns of the series. Picked from the analysed payload via field pickers with type badges — never as path syntax. When the schema drifts, the paths degrade individually by weight: rows path gone is a hard error, an X column gone silently falls back to the row index, a Y column gone renders an empty series with a warning.
_Avoid_: Mapping (does not say there are three roles), Feldauswahl (that is the picker mechanism, not the authored config), Spalten-Mapping

**Spalten-Sichtweite**:
The depth reach of the tabellarische Zuordnung's discovery — 10 nesting levels (the shared engine's flattener default; deliberately a constant, not a field): which arrays become Zeilenpfad chips and which dot-paths become picker options. NOT render-relevant — the runtime resolves authored paths at ANY depth (no flattening outside the editor), so there is nothing for a user to regulate; when a payload is deeper, a hint in the Zuordnung says the pickers are missing paths instead of truncating silently. Contrast **Flattening-Tiefe** (the JSON-Table widget's render-relevant depth).
_Avoid_: Verschachtelungstiefe without qualifier (ambiguous — name which of the two), maxDepth (that is the engine option name)

**Data path**:
The per-mode acquisition config a structural reset deletes: series (OIDs), Y-axes, the JSON overlay + jsonHidden, jsonOid, the **Zuordnung** (payload family + rows/X column), markings. Delimited against the presentation config (title, legend, tooltip, colours/palette, toolbox, raws, X-Karte, zoom), which survives every reset. Resets fire on structure boundaries only — the JSON mode boundary (into or out of JSON), the chart-family boundary and, since ADR-0075, the payload-family boundary (serien-förmig↔tabellarisch — same scope, but the JSON data point survives) — never on load, never line↔bar↔scatter (ADR-0067).
_Avoid_: data config, source config (that is the Data mode)

**Chart pipeline**:
The data-mode decision tree from acquisition to option — ONE implementation (`useChartPipeline`) behind an adapter seam, used by the Preview stage AND the live body (two adapters = a real seam, ADR-0046). The adapter supplies stabilised sources: values normalised to plain OIDs (`useValues(oids)`), the history fetch, and the theme bundle (palette/themeTokens/themeBase/themeDark — the anti-churn keying stays adapter-side, because ref churn is a property of the value source). The pipeline owns entries, the per-Data-mode subscriptions, useHistory, JSON parse + jsonHidden filter, the family dispatch (cartesian/pie), the presentation call, merge + title + bgColor, and the return `{ option, loading, hasData, error }` (error unifies JSON/Verlauf/series errors). Input: the data-shaped record plus already-decoded companions (chartConfig/yAxes/markLines/jsonSeriesStyle/jsonHidden/series — decoding stays caller-side: the body decodes blobs, the editor holds state). Options: `maxPoints` (hard point ceiling — preview 200, body/default 5000; count fallback 500; bounds EVERY resolution path since the K3 fix: the count clamp, the default plan's sanitized step, the bar plan's capped bucket count) and `earlyRefresh` (default off, body on); `refreshMs` rides the record. `useHistory` fetches through a **fetch plan** (`planFetch` — the default is plain window options; bar bucketing injects `makeBarPlan` from barBuckets so the hook stays free of bar knowledge; the plan's `extras` carry the category grid from the same fetch, ADR-0065 addendum). `hasData` reads the merged `option.series`.
_Avoid_: preview pipeline (there is only one), data source (that is the Data mode), renderer (that is EChart)

**Section**:
One collapsible, intent-named unit of the rail — top to bottom: `Data source`, `Behaviour`, `Title`, `Series`, `Axes & Zoom` (or the family options section in that slot), `Legend`, `Tooltip`, `Colours`, `Toolbox` (ADR-0045; the chart-level Advanced JSON section is retired). Rendered as the shared **SectionCard** — the bordered 12px-radius accordion card both configurators use (ADR-0038; the echarts flat-divider shell and the studio's StudioSection merged into one). The inventory is family-aware: `Axes & Zoom` is cartesian-only; pie gets its own options section in that slot. `Title` and `Legend` were one section through ADR-0010; ADR-0021 split them and expanded both (title colour/size/weight + 6-position; legend 9-position + text/symbol/frame styling). Since ADR-0073 every section body bundles its fields into **Sektions-Tabs**; the Series body (a card list) is the one tab-less body.
_Avoid_: page, panel, SectionCard (that's the shell component, not the concept), Tab without prefix (the v2 top-level Tab is dead — say Sektions-Tab or Karten-Tab)

**Sektions-Tab**:
One tab of a section body's tab row (ADR-0073) — the uniform bundling level inside every Section (`Zeitfenster`/`Datenabruf` in Data source, `Achsen`/`Markierungen`/`Zoom` in Axes & Zoom …). Strict rule: every section carries tabs; the only exception is the mode-empty body (JSON Data source, one field) that carries no tab chrome at all. Tab state is view-only — never persisted, first tab on open; a ⚠ dot marks the affected tab beside the section rollup.
_Avoid_: Unterseite, Tab-Panel, drawer

**Karten-Tab**:
One tab inside a Series, Y-axis or X card body (ADR-0073) — Rail → Section → Card → Tab is the deliberate fourth navigation level (revising ADR-0019's "no fourth expand level", which banned nested disclosure, not tabs). The Series card's `Daten` tab hosts the per-series acquisition knobs (the Erben-Override of the Data source Voreinstellung); JSON cards drop the `Daten` tab (no fetch).
_Avoid_: nested accordion, vierter Accordion-Level, Sub-group (that's the fine grouping INSIDE a tab)

**Zeitfenster**:
A Verlauf chart's read span (parity Build A, ADR-0063), authored in the Data source section as **relativ** (one of 18 grouped ranges — minutes/hours/days as ms, months/years CALENDAR-wise — plus a relativeEnd that rounds the window's END up to one of 17 grid/calendar boundaries instead of „now") or **statisch** (a fixed DateTimePicker pair; disables refresh — a fixed span has nothing to follow). The pure `resolveTimeWindow` (timeWindow.ts) turns the authored spec into {start, end} per fetch; legacy `24h`/`30d` range keys migrate to `1d`/`1m`.
_Avoid_: time range (that is the range KEY inside it), period, interval (that is ticket 12's aggregation step)

**Kategorie-Bucket**:
One bar of an interval-bucketed bar chart (parity Build A, ADR-0065): the window gridded onto CALENDAR boundaries (day = local midnight, `30d` = 1st-to-1st months) by the pure `barBuckets.ts` machinery; points fall into `[cat[i], cat[i+1])` and reduce per the chart aggregate (client-side, like the adapter). The fetch widens left onto the grid (one EXTRA bucket under the Differenz — the diff's first bucket has no predecessor and is dropped). With `barCategories` riding the presentation, the x axis becomes a CATEGORY axis (timestamps as data, the X-Karte's time format labels them) and bar series data is plain bucket arrays. `auto`/unset = the time-axis path, unchanged.
_Avoid_: bar bin, bucket interval (that is the Bar-Intervall knob), histogram (implies counts)

**Kategorieachse**:
The X axis without time semantics — string categories in payload order, labelled by the column values themselves. Introduced with the tabellarische payload family (ADR-0075) as the third X path beside the fixed time axis (all data modes normalise points to `[ts, val]`) and the Kategorie-Bucket grid (TIMESTAMP categories still labelled by the Time format). The X-Karte's Time format does not apply here (the field hides); the tooltip shows the category name. Duplicate categories keep their multiple values; nothing is de-duplicated or re-sorted.
_Avoid_: Textachse, String-Achse (mechanism, not the concept), Buckets (that is the Kategorie-Bucket grid), category axis (say the German term or Kategorie-X)

**Summary line**:
The single-line digest of effective values shown on a collapsed Section (`24h · avg · 500`, `tableau · auto`). A section that cannot say anything useful collapsed does not deserve to be a section.
_Avoid_: Subtitle, hint text

**Erben-Override**:
The inheritance pattern of the per-series data settings (ADR-0072, adapter `line.aggregate || config.aggregate`): the Data source section holds the chart-level **Voreinstellung**, every series field starts at „erben (→ effective value)" and diverges explicitly — deletable back to inherit at any time. Boolean-shaped settings become tristates (Diff: erben | differenzieren | roh). Covers aggregation with its params, Diff and NULL handling; the Zeitfenster, Schrittweite/count, refresh and bar grid stay chart-level (one shared X axis, one poll loop).
_Avoid_: global setting (that is the Voreinstellung's role), per-series setting without inherit (the rejected full-move model), fallback (mechanism, not concept)

**Series card**:
A cartesian series item in the Series section — a quiet card whose header (swatch, name, OID, ↑↓ reorder, duplicate, delete) expands inline to the per-series knobs, bundled into **Karten-Tabs** (Basis | Daten | Darstellung | Werte | Erweitert, ADR-0072/0073; JSON cards drop Daten). The Basis tab leads with the OID, name, colour, type, axis binding and the per-series **history instance** (ADR-0039: each OID can store its history in a different adapter; Auto = the datapoint's own config decides, else the server). The Daten tab carries the acquisition knobs as Erben-Overrides: aggregation with its params, Diff (tristate), X offset (seconds or the ±1m…±2y calendar keys) beside the transforms (formula, Y offset, NULL handling, Keine Zukunft); Darstellung keeps the Linie/Balken/Fläche Sub-groups plus „Nur in Legende".
_Avoid_: Accordion item (v2), row

**Slice row**:
A pie slice item — a light list row (name + colour + delete inline) with no expand, because a slice only carries two fields.
_Avoid_: Slice card, accordion

**Empty-state CTA**:
The first-open onboarding of an empty configuration (ADR-0013, reversing the ADR-0010 skeleton): no card is injected, the empty Series section lands on a call-to-action, and Apply stays disabled until a real series is added.
_Avoid_: Skeleton card (the retired injected default series), default series, placeholder series

**Warning roll-up**:
The `⚠ n` chip in a section header aggregating that section's field-level validation issues. Advisory only — it never blocks Apply.
_Avoid_: Error badge, validation summary

**Family-switch warning**:
The non-blocking chip under the chart-type picker warning BEFORE a family crossing (ADR-0067): a cartesian↔pie switch deletes the whole **Data path** — the chip shows the falling counts („N series, M axes"). line↔bar↔scatter crosses nothing. Beside it (unchanged, ADR-0042) the snippet-loss advice can still name family-invalid ACTIVE template activations — though since the reset deletes every series on crossing, its post-switch case is vacuous.
_Avoid_: Confirm dialog, type guard

**Axis card**:
A cartesian Y-axis item in the (v4) Axes manager — a collapsible card whose body groups all axis knobs into Sub-groups (basis, value range, scale & ticks, presentation); the header carries the **Achsen-Platz** stepper (▲▼) and delete. One per entry in the `yAxes` blob; a series binds to one via `yAxisIndex`.
_Avoid_: Axis row, axis settings

**Axis fine-tuning**:
The sparse appearance leaves beneath the axis **one-colour idiom** — label size (`axisLabel.fontSize`), tick colour (`axisTick.lineStyle.color`, separate from the labels; ticks follow the axis LINE by default), and grid colour (`splitLine.lineStyle.color`, offered only while that axis' splitlines switch is on; the value persists). Parity Build D (ADR-0055); additive: a set axis colour keeps painting line + label + name, these fields only steer their own leaf. Since the ADR-0055 addendum the two grid DEFAULTS are stamped, not inherited: the Y grid colour is always emitted (divider — one grid grey in both directions) and the X axis line always carries the light former-grid grey (ticks follow). The X-Karte's grid colour and every Y card's grid colour stay separately authorable and win over the defaults.
_Avoid_: axis styling (vague — the one-colour field is part of it), tick format (that is the value-range format field)

**Axis manager**:
The cartesian-only UI that adds/removes Axis cards and assigns series to axes (v4, ADR-0012); ordering an axis means setting its **Achsen-Platz**, never moving its card — the card list itself does not reorder. Replaces the chart-level Y-axis scalars (`yMin/yMax/yName/yLog/yFormat`). Its first card is the X-Karte; the manageable list below is Y-only.
_Avoid_: Axes tab, axis list

**Achsen-Platz (axis place)**:
The depth rank of a Y-axis within its side: Platz 1 is drawn closest to the plot, Platz n farthest. Not a stored setting — the place is the rank of the axis' Versatz within its side's depth order (place and pixel Versatz are two views of one truth). Reordering inserts-with-shift: the moved axis takes the target place, everything beyond shifts outward, the vacated place closes up; each axis keeps its personal Versatz deviation while travelling. A side change carries the place along, clamped to the target side's end. Like Seite and Versatz, a chosen place is fine-tuning — the next structural event re-arranges.
_Avoid_: Reihenfolge alone (the card list never reorders — only places move), axis index (that is the binding `yAxisIndex`), Position (that is the Seite)

**Markierung**:
A reference marking on a cartesian chart (the reworked threshold, ADR-0061/0062) — a card in the Axes & Zoom section, anchored to a **Y-axis** (our model; the adapter anchors on a series). Carries one or two **bounds** (`upper`/`lower`, each a number OR an OID that resolves live via socket subscription) and a style cluster (colour/width/shadow/solid-dashed-dotted). Each bound owns its full **Kanten-Label-Cluster** (edge label cluster, ADR-0081): text, 12 echarts-native places, X offset, size and colour — authored per edge (`labelUpper*`/`labelLower*`), superseding the one-text-rides-the-upper-edge model of ADR-0076. Both bounds resolved ⇒ a `markArea` band (0–1 fill) PLUS its two styled edge `markLine`s — every style and label field works for bands too; width defaults to 2 (the card slider's fallback, not echarts' 1). Exactly one bound ⇒ a lone `markLine` at that bound carrying its own bound's cluster. An edge without label TEXT shows its resolved bound VALUE as a fully styled label (**Wert-Fallback**): raw number, explicit colour through the ADR-0080 resolver (`labelXColor ?? marking colour ?? axis-text token`) — never echarts' bg-contrast auto halo. The emit stays series-level (echarts `markLine`/`markArea` hang on series): the builder attaches to the first series of the target axis, reading bounds the PIPELINE resolved against the current values (the builder never subscribes).
_Avoid_: Threshold (the retired pre-0061 name), mark line (that is the echarts key), limit line

**X-Karte**:
The single, non-deletable card atop the Axis manager configuring the shared time axis — label time format (the **Time format**), name, colour (theme-token inherit), ticks, split lines, pixel offset (ADR-0035), bottom/top position and the **Axis fine-tuning** leaves (ADR-0055). Flat presentation config in every data mode: never a list, never bound to a series; neither min/max nor the axis type is configurable — the data mode owns the time window, and `time` is fixed.
_Avoid_: X axis settings, X axis card list (there is exactly one)

**Time format**:
The moment.js token string authoring the time axis' labels AND the tooltip's time header — one format, two surfaces (modelled on ioBroker.echarts; ADR-0052). Authored on the X-Karte as a freeSolo combobox whose dropdown offers the curated presets grouped by intent; the locale follows the host language, so weekday/month tokens render localised. `Auto` (unset) is the adaptive labelling: seconds (span < 30 min) and the date prefix are derived from the data span, the date appearing at day changes and chart start; spans ≥ 7 days degrade to date-only two-line labels. A `<br />` token inside the format marks a two-line label (exchanged for a real line break after formatting — moment swallows `\n` in patterns; in the HTML tooltip it already IS the break). The formatter is always emitted as a moment function, keeping the raw JSON function-free. A tooltip template overrides the default header; its `{b}` token renders the same time in the same format — resolved by the widget itself, because echarts' own string-template path renders an EMPTY `{b}` on a time axis (no name dimension; only category axes have one).
_Avoid_: label template (the retired echarts `{HH}` dialect — deliberately not migrated, old values render as literal text until re-authored), date format (that is the JSON table's cell concept)

**Legend values**:
The Legend switch rendering each series' CURRENT value beside its name — `Name [value]`, the ioBroker.echarts `legActual` parity (ADR-0054). The toggle lives in the Legend section (cartesian/pie only); the values are resolved by the chart pipeline per data mode (Verlauf/JSON = the last point) and ride the presentation config name-keyed — never a persisted field. A series without a usable value renders its bare name. The same builder seam owns `legend.selected` (pre-deselected names), laid for the per-series "only in legend" option (parity Build B, ticket 08) and emitted only when a name is actually hidden.
_Avoid_: live legend (the values follow the data mode; "live" collides with the live preview), legend formatter (that is the mechanism, not the concept)

**Value format**:
The numeric display rules every rendered value passes through — the ONE Wert-Formatter (`valueFormat.ts`, ADR-0057/0058): per-series facts („Einheit" + „Nachkommastellen" on the series card's „Werte" Sub-group) with the chart-level decimals clamp + comma-as-decimal-separator switch (adapter `useComma`, ADR-0054) as the per-fact fallback, resolved explicit-beats-inherited; plus the text facts („Text bei wahr/falsch" on a boolean OID, the **State names** mapping on an enum OID — prefilled from `common.states` on OID selection). Texts render EXACTLY on tooltip/legend/labels (a miss stays empty — no half states) and round to the nearest state on axis ticks (shared axis inheritance: every bound series must carry identical texts); a text hit suppresses unit and decimals. It feeds the tooltip value rows, the Legend values, the series/bar label values and the DEFAULT Y-axis labels; a Y-axis inherits the unit when EVERY bound series shares it, and an explicitly authored axis format wins verbatim. The comma is a plain `.`→`,` replacement on the formatted number (adapter parity) — no thousands separators; the unit joins with a space (our Build-E idiom, not the adapter's bare concatenation). Without authored texts nothing maps — numbers render as before.
_Avoid_: number format (ambiguous — the JSON table and moment have their own), locale (the comma is an explicit switch, not a locale inference)

**Series transform**:
The per-series DATA transforms applied in the chart pipeline's pure core (ADR-0059/0060, parity Build B) — the „Transformation" Sub-group on the series card: the conversion FORMULA over the `val` symbol (expr-eval math syntax, deliberately no JS execution; an invalid formula is flagged red and the chart keeps the raw values), the **Y offset** feeding it (`f(val + yOffset)`, alone without a formula — the adapter's `processOneValue` order), the **X offset** in seconds (shifts that series' Verlauf request window so time-shifted recordings overlap; JSON has no request), the per-series **NULL handling** (keep/forward-fill/zero, overriding the chart-level setting) and **„Keine Zukunft"** (points after now are cut, every mode). Beside it: **„Nur in Legende"** — the series stays emitted with its legend entry pre-deselected (`legend.selected`), re-enableable by legend click. One application seam in `assemblePipelineResult` covers every data mode — Verlauf and JSON both transform against their meta. Since ADR-0077 these stages sit inside the **Wert-Kette**, which adds the value mapping (before the numeric intake), the series-context formula symbols, the smoothing window and the running total (after bucketing).
_Avoid_: convert (that is the formula field's adapter name, not the concept), data filter (nothing is filtered), axis offset (that is the pixel offset of an axis, ADR-0012), line shadow (that is line styling, not a data transform — it lives on the Line Sub-group)

**Plottbarer Wert**:
The ONE intake rule that turns every raw series value into a number or a gap BEFORE anything else — booleans and „true"/„false" → 1/0, finite numbers unchanged, strings read as prefix numbers („23.5 °C" → 23.5; a comma without a dot counts as the decimal separator). The unreadable becomes a gap, never a 0 (the deliberate deviation from the adapter's `getFloat`). Since ADR-0077 one shared seam serves Verlauf, the series-shaped JSON intake, the table yPath and bound mark lines alike.
_Avoid_: Coercion, Typumwandlung (mechanisms, not the concept), String-Parser (that is the rule's parsing branch)

**Wert-Kette**:
The binding order of stages a series value passes through, each optional and independently authored, the sequence fixed (ADR-0077): Rohwert → Wert-Mapping (exact `String(rohwert)` match; a hit is a number or an author-declared gap immune to NULL handling; a miss passes through) → Plottbarer Wert → NULL-Behandlung → Y-Offset → Formel (with `smin`/`smax`/`savg`/`sfirst`/`slast` over the series' raw values) → Bucketing → Glättung (centered point window) → kumulative Summe.
_Avoid_: Transform-Pipeline (the chart pipeline is the whole fetch-to-option machinery), Verarbeitung

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
The series an axis displays — its inherited name and colour come from the OWNER, not from „the first series in list order" (ADR-0068): the incumbent keeps the identity, so a series rebinding onto an occupied axis NEVER steals it however early it sits in the list; when the owner leaves, the first remaining binder takes over. Kept current on every structural event; the inheritance stays live (renaming the owner renames the axis immediately). In the serien-förmig JSON family the owner is the payload NAME (the overlay's key); in Verlauf and Tabellarisch it is the series' stable id — the tabellarisch family is positional (its series bind a yPath column, ADR-0075), and an unnamed tabellarisch series titles its axis with the column's last segment. The Namensgeber is a *who*, never a frozen *value* — every axis that exists is bound (ADR-0069), so the owner always resolves.
_Avoid_: first binder (the superseded reading), owner series (redundant), axis name source

**Axis–series coupling**:
The cartesian lifecycle invariant (ADR-0025 History/Live, ADR-0026 JSON; reworked by ADR-0069): a Y-axis is a DERIVED citizen — it exists exactly while at least one visible series binds it via `yAxisIndex`. Born only through binding (the series-add **Axis auto-bind**, the reconcile append for a new payload name, or the per-series Y-axis dropdown's „Neue Achse" entry — append + bind in one step), it DIES with its last binder: a series-delete, a rebind onto another axis, a serien-förmig JSON hide (the payload series-card trash), a serien-förmig JSON axis-delete (which hides ALL its bound payload names — 1:n means several binders, one leftover would keep the axis rendered), or a payload name vanishing from the serien-förmig JSON data (the reconcile). Every death is immediate and rides the triggering undo step: config gone, markings anchored to the axis remapped (onto the rebind target when the binder moved there — like the explicit axis-delete — else onto the stack predecessor), survivors re-indexed, the bound set re-arranged (ADR-0067). The explicit axis-delete NEVER deletes its bound series: in Verlauf and Tabellarisch they rebind to a surviving axis of the same `format` (else axis 0, with an advisory unit-mismatch toast — Tabellarisch is positional like Verlauf, ADR-0075); in the serien-förmig JSON family the delete hides its binders and they return with the next payload. A death by side effect is reported by an undo snackbar (rebind, series-delete, JSON-hide; payload-vanish info-only — undo is futile, the next reconcile re-kills; the explicit delete and the load stay silent). In the serien-förmig JSON family the name-keyed overlay owns each payload series' `yAxisIndex`, reconciled sticky (`reconcileJsonAxes`): a fresh payload lands 1:1, a manual rebind survives payload changes (Tabellarisch stores the index on its positional series instead). The load path silently enforces the invariant — an axis no series binds cannot exist — and the **Data path** structural reset (ADR-0067) remains the one bulk exception. The builder still emits bound axes only — defense for hand-edited JSON, not a state; the one builder-only addition on top, the synthesized **Grenzachse** (ADR-0070), was removed again by addendum 6 — the plot edges close via echarts' native extent gridlines under **Achsen-Vorrang**, so the builder emits no synthetic axes at all.
_Avoid_: 1:1 binding (that is only the creation default), series-axis cascade (there is none), unbound axis / resting axis / orphan axis (the retired states — pre-0069 disposal and ADR-0066's resting alike; no axis exists unbound anymore), free axis, reserved axis

**Achsenlinie (axis line)**:
The line an axis draws at its own position + offset — part of the axis' one-colour presentation (line + label + name), NOT part of a grid: echarts places it at the grid rect's edge ± offset, and it moves with every flip, offset edit or axis death. At offset 0 it coincides with the plot edge; at any other offset it floats outside the plot. Under **Achsen-Vorrang** it also wins that edge: where it sits exactly on a gridline position, the gridline yields.
_Avoid_: Gitterlinie (an axis line is not a grid element), Plotkante (that is the contract, not the element)

**Achsen-Vorrang (axis precedence)**:
The display rule that an axis' **Achsenlinie** replaces any gridline it sits exactly on (ADR-0070 addendum 6): the gridline at that position is suppressed (never overpainted), the axis draws in its own style. Vertical edges: a visible offset-0 axis owns its side's extent gridline. Horizontal edges: the X axis line always sits at a rect edge (echarts disables onZero for time/category axes), so 'bottom' (the default) owns the bottom edge and 'top' the top edge.
_Avoid_: twin overlay (the retired Grenzachse overpainted; Vorrang suppresses instead), axis priority (vague)

**Plot edge**:
A boundary line of the cartesian plot area (ADR-0070, native since addendum 6): WHILE the X gridlines are on, the open edges close with echarts' own extent gridlines (`showMinLine`/`showMaxLine`) in the FULL effective splitLine style — GUI colour/width/type and whatever the raw JSON layers on. Under **Achsen-Vorrang** an edge whose axis line sits on it belongs to the axis instead. The grid insets by half the effective stroke width so a canvas-flush edge keeps its full line. With the grid off the edges stay open (grid elements follow their switch, addendum 4) — an axis line is not one and never vanishes with the grid.
_Avoid_: Gitterlinie, Rahmen (that is the Chart frame — CSS around the widget area), grid border (echarts' `grid.show` box, deliberately unused), Grenzachse (retired concept — addendum 6 removed the synthesized border axes; native extent gridlines close the edges)

**Legenden-Folge (legend follow)**:
The display-time rule that a Y-axis renders exactly while at least one bound series' legend entry is ACTIVE — the config pre-deselection („Nur in Legende") counts like a click (ADR-0074). A fully deselected axis vanishes completely (line, labels, name AND its reserved space) and its side's edge opens to the native extent gridline under **Achsen-Vorrang**, exactly like an axis death; the surviving axes re-slot into the standard interleaving over the VISIBLE sequence — display-only, config geometry renders verbatim while everything is visible. The selection itself is widget state riding the option (never rxData; reload resets to config), and **Markierungen** re-anchor to the first active binder. Pie unaffected (no axes).
_Avoid_: Achsen-Ausblendung (that is the effect, not the rule), Legenden-Kopplung (vague), hide-axis (no such config field)

**Tick alignment**:
The cartesian per-axis opt-in (ADR-0034) where a Y-axis re-ticks itself to match the **first** value axis — the implicit **reference axis** (axis 0). It is OFF by default and never a smart default: alignment is a cross-axis coordination, so auto-enabling it hid the ripple (an edit on axis 0 re-ticked every follower) and the silent conflict (a fixed min/max/splitNumber/minInterval makes echarts ignore it). In the configurator the switch appears only on follower axes; a non-blocking warning flags a follower whose tick override defeats its alignment.
_Avoid_: alignTicks (that is the echarts property), auto-align (there is none), shared grid (that is the deferred chart-level concept, ADR-0034 out-of-scope, not this one)

**Colour inheritance**:
The configurator's colour model — how a colour field resolves when no explicit value is set. The "theme" source of the palette is the COLLECTION theme (the merged theme the canvas renders under), resolved in the editor via `useEditorPalette` and in the live body via `CollectionContext` — never the vis-2 host theme (ADR-0027). Every colour field clears to a real inherited value: a series → its palette slot, an axis → its bound series' effective colour (ADR-0018), a title/legend/mark-line → a semantic **theme token**. An explicit override always wins. The palette source's presets include the 17 ioBroker.echarts theme palettes (ADR-0053) — adopted verbatim as COLOUR ARRAYS (no echarts theme is registered), flowing through the same `resolvePalette` seam as the six hand-curated presets.
_Avoid_: default colour (that is the resolved value, not a stored one), fallback (that is the mechanism, not the concept)

**Theme token**:
A semantic theme colour (`primary`/`success`/`warning`/`error`/`divider`/`textPrimary`/`textSecondary`…) resolved once and stamped onto `PresentationConfig.themeTokens`, dark-mode-aware. Consumed BY NAME by the family builders for the theme-derived defaults — the visualMap value ramp, the markLine and legend-border defaults — so these visible surfaces track the theme instead of being fixed hexes (ADR-0027).
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
The chart-wide Advanced-JSON preset concept (v4, ADR-0014) — wound down in stages: ADR-0044 left it the toolbox scaffold + radar presets (title/legend/tooltip/xAxis had moved to their sections), and ADR-0045 retired the chart-level U entirely — the toolbox is GUI-configured in its own section, and the radar presets became the radar family's Section-raw catalog (itself removed with the radar family, ADR-0071). The per-level template concept lives on as Series/Axis/Section templates.
_Avoid_: Snippet, preset, series template (that is per-series)

**Section raw**:
The per-section echarts-JSON escape hatch family (ADR-0037 axis raw → ADR-0037 addendum X-Karte → ADR-0044 title/legend/tooltip): a raw object on the section that owns the component, deep-merged UNDER that component's builder output — the GUI wins every collision, every builder-uncovered key merges through. One anatomy for all hosts (menu + plain chips + validity); the activation follows the text (ADR-0042 addendum). The STATE side of every raw level (load/save heal, prune, blob encode — scalar levels first, per-item lift to follow) is the **Raw-Level-Registry** (`editor/rawLevels.ts`, ADR-0047) — a level is a registry entry owning placement only, plus its catalog bundle via `defineCatalog` (`editor/catalog.ts`).
_Avoid_: Advanced JSON (that is the chart-level U), component JSON (too generic)

**Series raw**:
The per-series echarts-JSON escape hatch (ADR-0015/0017) — a small raw object on a series card, deep-merged UNDER the GUI-authored series entry (the GUI wins collisions; the data points are force-set). Every series card carries one: cartesian per-card, and pie on two levels (a whole-pie series raw + a per-slice raw). Since the ADR-0037 axis parity it is labelled "Erweitertes JSON"/"Advanced JSON" like the Axis raw and injects templates via DEEP merge. It replaces the positional chart-level `U.series` array, now retired.
_Avoid_: Advanced JSON (that is the chart-level U), JSON override (too generic)

**Series template**:
A per-series, collision-safe preset (ADR-0017) — injects GUI-uncovered echarts keys relevant to the family/type into a card's Series raw (e.g. `sampling:'lttb'`, `markPoint` peaks). Since ADR-0043 the catalog's categories are the echarts Option groups of the series slot, its entries Group scaffolds (with power variants: gradient, decal, rich text, edge labels) and scalar Solos; the atomic part-snippet form is retired. Each entry is audited against the builder so it duplicates no GUI-owned key; the GUI wins any residual collision. Distinct from the chart-wide **Template snippet**. Since ADR-0042 activated via the template multi-select (**Aktive Vorlage**), not one-shot injection.
_Avoid_: Snippet, preset, template snippet (that is chart-wide)

**Axis raw**:
The per-axis echarts-JSON escape hatch (ADR-0037) — a raw object on an Axis card, deep-merged UNDER the GUI-authored axis entry (the card wins collisions). Present on every Y-axis card in all cartesian data modes AND, since the ADR-0037 addendum, on the X-Karte (riding the `xAxis` blob); a JSON-derived axis keeps it through reconcile, while freshly created axes start without one. Its UI section is labelled "Erweitertes JSON"/"Advanced JSON" (the user's chosen name) — the label notwithstanding, it is NOT the chart-level Advanced JSON.
_Avoid_: Advanced JSON (that is the chart-level U), axis JSON (too generic)

**Axis template**:
A per-axis, collision-safe preset (ADR-0037) — injected deep-merged into an Axis card's Axis raw. Since ADR-0043 the six semantic category headers give way to the echarts Option groups (`name`/`axisLine`/`axisTick`/`minorTick`/`axisLabel`/`splitLine`/`minorSplitLine`/`splitArea`/`axisPointer` plus a scale-Solos category), entries being Group scaffolds and scalar Solos — the X-Karte's catalog (ADR-0037 addendum) shares the categories and absorbed the former chart-level xAxis snippets. Each entry is audited against its axis builder so it duplicates no GUI-emitted key; payloads are theme-neutral. Distinct from the chart-wide **Template snippet** and the per-series **Series template**. Since ADR-0042 activated via the template multi-select (**Aktive Vorlage**), not one-shot injection.
_Avoid_: Snippet, preset, series template (that is per-series)

**Aktive Vorlage**:
A catalog entry switched ON at one of the raw levels (series / axis / title / legend / tooltip) via the template multi-select (ADR-0042); renders as a plain chip carrying its label and a deactivate-X. The ordered activation list is persisted per level and deep-merged in selection order (last activation wins a shared leaf) into the level's raw JSON; deactivating removes exactly its still-pristine leaves, so its effect is gone. Since the ADR-0042 addendum the activation tracks the raw text: it lasts while ANY of its keys stands in the JSON, and arises from the text only when its complete, value-identical key set stands there (editor undo restores it; a coincidental key never lights one). Family-invalid activations are pruned on Apply with the family-switch warning.
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
A named cluster of knobs headed by a small overline label (e.g. range / scale & ticks / presentation on an Axis card). Structure without disclosure — everything in an open **Karten-Tab** stays visible; sub-groups never nest or collapse. Since ADR-0019 the cluster lived directly in the card body; since ADR-0073 the tab is the outermost bundling level of a body and sub-groups are the fine grouping WITHIN a tab (Linie/Balken/Fläche inside the Darstellung tab).
_Avoid_: Advanced section (v2), nested accordion, Karten-Tab (a sibling level, not a sub-group)

**Position grid**:
The position selector of the Title and Legend sections (ADR-0021) — a 3-column `ToggleButtonGroup` of small frame-with-dot glyphs (the glyph marks the chosen corner/edge/centre; words ride only as the aria-label). Title uses a 3×2 grid (6 positions), Legend a 3×3 grid (9). It mirrors the `ChartTypePicker` glyph-grid idiom so it reads as the same editor, not a new aesthetic; it replaced the long dropdowns the old 3-/4-value position selects would have become.
_Avoid_: Position dropdown, alignment matrix, radio grid

# Theme Studio

The collection-wide theme editor (ADR-0020): edits the user theme (stored in the `vis-2-widgets-collection.0.theme` state) while every collection widget on the canvas re-themes live. Opened from the widget palette, not dropped onto the canvas.

## Language

**Studio panel**:
The floating, draggable, resizable panel hosting the theme editor. Its live preview IS the canvas — there is deliberately no in-panel component preview. Its chrome renders in the vis-2 editor's theme family (modernDark/modernLight, mirrored locally via the chrome theme since gui-components peers MUI 9; ADR-0038/0078) — never in the theme being edited. It resizes like an OS window via Resize grips; the full Geometry (position, width, height-or-Auto) persists across sessions.
_Avoid_: Wizard dialog (the deleted modal), theme dialog

**Preset card**:
A curated theme preset rendered as mini colour swatches (background / paper / primary / secondary) plus a mode icon. The card matching the current palette is marked active.
_Avoid_: Preset chip (the old blind dot)

**Palette-only merge**:
The preset-apply semantics (ADR-0020): applying a Preset card replaces only the draft's `palette` (including mode) — typography, corner radii, spacing and CSS variables survive, because presets are colour themes and define nothing else.
_Avoid_: Full replace (the old silent wipe), theme reset

**Host-Theme-Grenze**:
What the vis-2 host theme may contribute to the collection theme: inheritable DNA only (palette, typography base, shape, shadows, transitions, zIndex, breakpoints, direction) — never its CSS-variables machinery (`vars`/`colorSchemes` would pin every MUI surface to host colors) nor its component skin. Enforced by `sanitizeHostTheme` (ADR-0078).
_Avoid_: „full host merge“, host skin, cssVars mirror

**Feintuning**:
The in-section disclosure at the end of Schrift & Form holding the font-weight selects and the line-height slider — rare, expert knobs (bundled fonts ship real 400/700 faces only; other weights synthesise).
_Avoid_: Advanced typography, more options

**Control kit**:
The shared configurator primitives (`SectionCard`, `FieldLabel`, Field grid, Switch list, Slider field, Sub-group — the field idioms defined under ECharts, ADR-0019; SectionCard per ADR-0038) living in `src/components/`, used by both the echarts configurator and the Studio panel. One configurator language across the collection — and every configurator's chrome renders in the vis-2 editor's theme family (the echarts modal receives the VisTheme object; the studio rebuilds the modern family from the host mode, ADR-0038/0078).
_Avoid_: Editor controls, per-editor widgets

**Erbt (frame background)**:
The `frameBackground` field's inherit semantics (terminal `paper`, ADR-0004/0078): unset ⇒ the card/frame surface and its picker swatch show the effective theme's `palette.background.paper`. The inner `background` field stays transparent on inherit — the card colour shows through.
_Avoid_: „erbt = transparent“ (only true for the inner background field)

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
The editor-only identity every keyed card-list item carries (series, Y-axes, threshold mark-lines; ADR-0050) so React reconciles cards by identity, not array index — `key={i}` unmounts the WRONG card when a middle item is deleted. One generator module (`editor/stableId.ts`) serves all lists: `crypto.randomUUID` when available, else a monotonic counter whose prefix (`sr-` series, `ax-` axes, `id-` the small lists) is fallback decoration only. `withStableIds` backfills ids on load (decoded blobs) and in the lifecycle's self-heal (dev-HMR), preserving id-bearing items by reference. Never emitted to echarts — every option builder reads its item type field-by-field. Not to be confused with `isUsableOid` (a bound-OID predicate in the chart pipeline).
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
