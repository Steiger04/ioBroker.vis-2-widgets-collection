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
A column whose format type is `image`. Each raw value is read as a _visual reference_ and drawn as a graphic instead of text.
_Avoid_: Icon column — "icon" vs "image" is a value-level distinction, not a column type

**Visual reference**:
A string that resolves to a renderable graphic: a URL or file path, a `data:image/…` URI, or a short UTF-8 character (e.g. an emoji). A cell value is **never** an icon _name_ (`mdi-*`, `fa-*`) — there is no name resolution in cell values.
_Avoid_: Image src, icon name

**Icon vs Image**:
A _per-value, runtime_ distinction — never a config or column type, and not a tint gate. An **icon** is a small monochrome glyph (SVG data-URI or UTF-8 character); an **image** is a raster photo (png/jpg/webp/…). A configured colour tint applies to either, via a CSS mask over the source's alpha channel.
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

**Effektiver Typ**:
The type a Column is treated as: its Format type when one is set, otherwise its Detected type. It decides the filter operators, how Spaltenfilter and conditional styles compare, the sort order, and the type defaults for a column's sortability and filterability.
_Avoid_: Format type or Detected type alone (each is only one input), column type without qualifier

**Tabellen-Fähigkeiten**:
The effective feature set of one table — sorting, multi-sort, column filtering, quick filter, column hiding, column menu, pagination, row selection — resolved once from the widget settings, couplings included: a hidden Header switches off every header-hosted capability (sorting, column filtering, hiding, column menu), a switched-off column menu takes column filtering and hiding with it, and a missing `tableFiltering` counts as off. Per Column it also yields whether that column is sortable, filterable and hideable: the column override, else the type default of its Effektiver Typ — never more than the table-wide capability allows. Runtime and editor read the same resolution.
_Avoid_: Feature flags (those are the raw settings, not the resolved set), Optionen, Features

**Ansichtszustand**:
The end user's own view of a table as it survives reloads — sorting, Spaltenfilter, quick-filter term, page and page size, column widths, column visibility — kept per widget in the browser. A part whose Tabellen-Fähigkeit is off is parked: neither applied nor deleted, it returns with the capability — so is the Spaltenfilter of a Column that is not filterable, and the sorting and Spaltenfilter of a Column the table does not show (hidden or gone from the data). The user's page size or column width wins until the editor changes the configured value; the page survives data updates and resets only when sorting, filters or page size change; a stored Spaltenfilter its Column's Effektiver Typ does not offer is discarded.
_Avoid_: Table state (TanStack's term is wider and not persisted), Einstellungen (those are the widget's configuration), View settings

**Spaltenfilter**:
A filter on one Column — an operator plus a value, set through the Header's column menu — compared by the Column's Effektiver Typ: as text without case for strings, numerically for numbers, by local calendar day for dates; no type is ever guessed from the value. Distinct from the quick filter, the table-wide substring search that also works with a hidden Header.
_Avoid_: Advanced filter (the former code name), Suche (that is the quick filter)

**Spalten-Merge**:
The one rule that turns the saved column configuration plus the Columns found in the data into the table's Column list, for runtime and editor alike: saved Columns still present keep their saved order and settings, newly found paths are appended visible with type defaults, saved Columns absent from the data are left out. The table without configuration is this rule applied to an empty configuration.
_Avoid_: Auto mode vs. configured mode (both are this rule), Spalten-Erkennung (that is the analysis engine's discovery)

**Datums-Leser**:
The single reading of a Raw value as an instant and its local calendar day, in two stages. Columns detected as dates are read strictly by the analysis engine's own date patterns — the same that made them dates; Columns the user formatted as dates without detection also accept a fixed set of tolerant patterns (ISO without zone, `YYYY-MM-DD HH:mm(:ss)`, epoch strings). Anything else is no date and shows its Raw value as text; there is no browser-heuristic date parsing.
_Avoid_: Datums-Parser (there used to be five), date normalisation, Datumserkennung (that is the Detected type)

**Tabellen-Chrome**:
The presentation shell of the table — outer frame, header bar (elevation, background, bottom line, text style), row and cell borders, even/odd row backgrounds, density-derived heights — resolved in exactly one widget-local place (`JsonTableCollectionWidget/chrome.ts`) from raw widget data plus the theme. The colours of frame, lines and header are colour contracts (ADR-0004, the Slider's **Chrome-Farbvertrag** pattern): the fields declare `jsonTableColorContracts` (`lib/jsonTableColorContracts.ts`) — terminal `divider` for the four lines (outer frame, header bottom line, cell and row borders), `paper` for the header bar, `text` (+ vis-2 CSS colour) for the header text, no fallback fields — and the chrome resolves the same contracts: the lines as a solid colour (`resolveEffectiveSolidColor`: a gradient draws its Repräsentative Vollfarbe, a value without one counts as unset), the header bar paints its explicit value raw, as stored (gradients allowed). Three documented divergences from the swatch: under `noCard` the header bar stays transparent and flat instead of the terminal `paper`; a legacy stored header value that is no colour at all keeps painting raw as before the contract, while the swatch shows the terminal (every colour the **Regeln für Farbeingaben** accept — names, `var(…)`, `transparent`, `hsl()` — the swatch shows as stored); and the header text inherits at runtime when unset (its contract only drives the swatch). The header bar follows the RAW `noCard`, not `wrappedContent` (`noCard || usedInWidget`): inside another widget (Widget-im-Widget) the sticky bar keeps its paper and shadow, so it stays opaque and the rows never scroll visibly underneath it. Everything else — heights, the row stripes, elevation — stays frozen legacy presentation, pinned by tests; cell content (Format type rendering, conditional styles) is not chrome.
_Avoid_: Tabellen-Styles (unsaid which), mixing chrome rules with cell formatting, deriving the header bar from `wrappedContent`, a local `divider`/`paper` fallback beside the contract

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
The pinned-selector choice (cartesian/pie only) of how a chart's series acquire their values. The demarcation line is _what the data needs_, not whether it moves — Verlauf updates too. Two values: **Verlauf** (an aggregated fixed window fetched from a History adapter — backfilled on load, so it needs the adapter) and **JSON** (a single state delivers complete series data — which **Payload-Familie** decides how series are derived from that one document). Switching modes is lossless for AUTHORED config — it coexists in the editor state and is merely shown/hidden — EXCEPT at the JSON boundary (ADR-0067 reverses ADR-0033's lossless coexistence there): crossing into or out of JSON resets the **Data path**. The retired Live rolling-buffer mode and the family-forced Aktuellwert reading died with ADR-0071 — do not reintroduce the terms.
_Avoid_: source type (that is the mechanism), data provider, feed mode — and "static vs. live" framing (Verlauf is not static)

**Payload-Familie**:
How a JSON document is read into series — a property OF the JSON data mode, never a third mode (acquisition is untouched: always one state, always realtime subscription). **Serien-förmig**: the document carries finished series; the payload owns count, names and data, the user only styles/hides by name (ADR-0011). **Tabellarisch**: the document is a rows list; the user derives series via the **Zuordnung** and thereby owns the structure while the payload owns the values (ADR-0075). Switching families resets the **Data path** but keeps the JSON data point — the same state, read the other way.
_Avoid_: JSON-Variante, zweiter JSON-Modus, Untermodus (it is not a data mode). In UI texts the **Datenpunkt** is the state (OID) and the **Payload** its JSON content — never „Dokument".

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
The data-mode decision tree from acquisition to option — ONE implementation (`useChartPipeline`) behind an adapter seam, used by the Preview stage AND the live body (two adapters = a real seam, ADR-0046). The adapter supplies stabilised sources: values normalised to plain OIDs (`useValues(oids)`), the history fetch, and the theme bundle (palette/themeTokens/themeBase/themeDark — the anti-churn keying stays adapter-side, because ref churn is a property of the value source). The pipeline owns entries, the per-Data-mode subscriptions, useHistory, JSON parse + jsonHidden filter, the family dispatch (cartesian/pie), the presentation call, merge + title + bgColor (the merge seam's component rule, ADR-0007 addendum: the theme base floors component keys — xAxis/yAxis — ONLY when G emits them, so a floor can never materialize a component; the pie grows no phantom axes), and the return `{ option, loading, hasData, error }` (error unifies JSON/Verlauf/series errors). Input: the data-shaped record plus already-decoded companions (chartConfig/yAxes/markLines/jsonSeriesStyle/jsonHidden/series — decoding stays caller-side: the body decodes blobs, the editor holds state). Options: `maxPoints` (hard point ceiling — preview 200, body/default 5000; count fallback 500; bounds EVERY resolution path since the K3 fix: the count clamp, the default plan's sanitized step, the bar plan's capped bucket count) and `earlyRefresh` (default off, body on); `refreshMs` rides the record. `useHistory` fetches through a **fetch plan** (`planFetch` — the default is plain window options; bar bucketing injects `makeBarPlan` from barBuckets so the hook stays free of bar knowledge; the plan's `extras` carry the category grid from the same fetch, ADR-0065 addendum). `hasData` reads the merged `option.series`. The value chain's final stage is its own module (`valueChain.ts`, `finishValueChain`, ADR-0103 K1): the pure core picks series and metas per Data mode, runs the **Wert-Kette** there and merges its presentation patch (categories, percent absolutes, legend values) — the core itself keeps only dispatch, merge, title, background and hasData.
_Avoid_: preview pipeline (there is only one), data source (that is the Data mode), renderer (that is EChart)

**Section**:
One collapsible, intent-named unit of the rail — top to bottom: `Data source`, `Behaviour`, `Title`, `Series`, the family's Rail-Slot (from the Familien-Profil, ADR-0083: cartesian hosts `Axes & Zoom`, pie the Torten-Optionen), `Legend`, `Tooltip`, `Colours`, `Toolbox` (ADR-0045; the chart-level Advanced JSON section is retired). Rendered as the shared **SectionCard** — the bordered 12px-radius accordion card both configurators use (ADR-0038; the echarts flat-divider shell and the studio's StudioSection merged into one). `Title` and `Legend` were one section through ADR-0010; ADR-0021 split them and expanded both (title colour/size/weight + 6-position; legend 9-position + text/symbol/frame styling). Since ADR-0073 every section body bundles its fields into **Sektions-Tabs**; the Series body (a card list) is the one tab-less body.
_Avoid_: page, panel, SectionCard (that's the shell component, not the concept), Tab without prefix (the v2 top-level Tab is dead — say Sektions-Tab or Karten-Tab)

**Sektions-Tab**:
One tab of a section body's tab row (ADR-0073) — the uniform bundling level inside every Section (`Zeitfenster`/`Datenabruf` in Data source, `Achsen`/`Markierungen`/`Zoom` in Axes & Zoom …). Strict rule: every section carries tabs; the only exception is the mode-empty body (JSON Data source, one field) that carries no tab chrome at all. Tab state is view-only — never persisted, first tab on open; a ⚠ dot marks the affected tab beside the section rollup.
_Avoid_: Unterseite, Tab-Panel, drawer

**Karten-Tab**:
One tab inside a Series, Y-axis or X card body (ADR-0073) — Rail → Section → Card → Tab is the deliberate fourth navigation level (revising ADR-0019's "no fourth expand level", which banned nested disclosure, not tabs). The Series card's `Daten` tab is present for every Kartenquelle: Verlauf hosts the per-series acquisition knobs there (the Erben-Override of the Data source Voreinstellung) beside the transforms; JSON and Tabellarisch have no fetch, so their `Daten` tab carries only the transforms (ADR-0100 — replaces the former separate „Transformation" tab of ADR-0073).
_Avoid_: nested accordion, vierter Accordion-Level, Sub-group (that's the fine grouping INSIDE a tab)

**Zeitfenster**:
A Verlauf chart's read span (parity Build A, ADR-0063), authored in the Data source section as **relativ** (one of 18 grouped ranges — minutes/hours/days as ms, months/years CALENDAR-wise — plus a relativeEnd that rounds the window's END up to one of 17 grid/calendar boundaries instead of „now") or **statisch** (a fixed DateTimePicker pair; disables refresh — a fixed span has nothing to follow). The pure `resolveTimeWindow` (timeWindow.ts) turns the authored spec into {start, end} per fetch; legacy `24h`/`30d` range keys migrate to `1d`/`1m`.
_Avoid_: time range (that is the range KEY inside it), period, interval (that is ticket 12's aggregation step)

**Kategorie-Bucket**:
One bar of an interval-bucketed bar chart (parity Build A, ADR-0065): the window gridded onto CALENDAR boundaries (day = local midnight, `30d` = 1st-to-1st months) by the pure `barBuckets.ts` machinery; points fall into `[cat[i], cat[i+1])` and reduce per the chart aggregate (client-side, like the adapter). The fetch widens left onto the grid (one EXTRA bucket under the Differenz — the diff's first bucket has no predecessor and is dropped). With `barCategories` riding the presentation, the x axis becomes a CATEGORY axis (timestamps as data, the X-Karte's time format labels them) and bar series data is plain bucket arrays. `auto`/unset = the time-axis path, unchanged.
_Avoid_: bar bin, bucket interval (that is the Bar-Intervall knob), histogram (implies counts)

**Stapelmodus**:
The chart-level bar stacking mode (ADR-0084), authored in the head of the Series section, directly above the cards that inherit from it (bar charts in every cartesian data mode — ADR-0084 addendum 3): **Keine** (default — bars stay side by side; hand-set Stapelgruppen keep working), **Gestapelt** (inheriting bars stack absolutely, the adapter's total-per-axis pattern) and **100 % gestapelt** (stacks as shares — normalized per Stapelgruppe and category, the Y axis reads 0–100 %, unit inheritance rests; absolute series on the same axis read the share scale too). A bar Darstellungsmodus, NEVER a diagram type — the chart-type picker stays the Familien-Dispatch (ADR-0083). Only BAR series follow the mode; lines keep hand-set groups, scatter never stacks. Mode-agnostic in the blob AND in effect: Verlauf, serien-förmig JSON and Tabellarisch stack and normalize alike (per data index — Verlauf buckets, payload points, table rows); the time-axis advisory with its Bar-Intervall fix stays Verlauf-only (only Verlauf has the interval).
_Avoid_: Stapel-Typ, stacked bar as a diagram type, Achsen-Stack (ADR-0018's pixel arrangement of offset axes — the English "stack" there means Versatz, not stacking)

**Stapelgruppe**:
The per-series stacking group on the bar card's Stil tab, three-valued since ADR-0084 (the Erben-Override idiom): **erben** (default — follows the Stapelmodus, and the select NAMES what it resolves to), **Kein Stapel** (opted out of every stack) and **Gruppe A/B/C** (own stack, mode-independent — „3 stapeln, 1 separat" stays reachable). The effective stack name couples the axis in passing (builder-internal, never persisted): a stack never spans foreign scales, not even with explicit groups. Lines carry hand-set groups WITHOUT inherit and without coupling; the legacy `''` sentinel healed away on load.
_Avoid_: Stack-Name (builder internal, not authored), Serie-Gruppierung, Versatz-Stack (ADR-0018 again — axes, not bars)

**Summen-Anker**:
The transparent, silent bar series stacked obenauf each stack with ≥ 2 VISIBLE members (ADR-0084, adapter `getSumSeries` parity): its data are all 0 (nothing to see — the segment only anchors the label), the label carries the per-category sum in the axis' own format, and a category nothing contributes to stays labelless. Authored by the „Summe über Stapel" switch under the Stapelmodus select (Series section head), only under Gestapelt — at 100 % gestapelt the sum is a constant 100 % and the anchor is verdeckt. Never listed in legend or tooltip; deselected series leave the stack (the anchor labels the visible truth).
_Avoid_: Summen-Serie (that is the echarts mechanism), Total-Serie, Label-Serie

**Kategorieachse**:
The X axis without time semantics — string categories in payload order, labelled by the column values themselves. Introduced with the tabellarische payload family (ADR-0075) as the third X path beside the fixed time axis (all data modes normalise points to `[ts, val]`) and the Kategorie-Bucket grid (TIMESTAMP categories still labelled by the Time format). The X-Karte's Time format does not apply here (the field hides); the tooltip shows the category name. Duplicate categories keep their multiple values; nothing is de-duplicated or re-sorted.
_Avoid_: Textachse, String-Achse (mechanism, not the concept), Buckets (that is the Kategorie-Bucket grid), category axis (say the German term or Kategorie-X)

**Kategorie-Stabilität**:
The tabellarische pie's colour law — the same category name wears the same colour in every ring (first occurrence fixes the slot), so equal categories read as one radial band across rings. The legend shows the categories (de-duplicated); one click toggles that category everywhere. The price: rings carry no colour authoring of their own.
_Avoid_: Ring-Palette (mechanism, not the law), Farbsync

**Ring-Karte**:
The tabellarische pie's series card — structurally the Series card (Karten-Tabs Basis · Daten · JSON, move, duplicate, delete), but pie-honest: no colour, type, Stil or Format authoring (Kategorie-Stabilität owns the colours; a ring is always a pie), a ring icon instead of the swatch, and the per-series Raw teaching the pie-ring catalog (ADR-0082).
_Avoid_: Donut-Karte, Ring-Serie (the echarts series is the mechanism)

**Summary line**:
The single-line digest of effective values shown on a collapsed Section (`24h · avg · 500`, `tableau · auto`). A section that cannot say anything useful collapsed does not deserve to be a section.
_Avoid_: Subtitle, hint text

**Erben-Override**:
The inheritance pattern of the per-series data settings (ADR-0072, adapter `line.aggregate || config.aggregate`): the Data source section holds the chart-level **Voreinstellung**, every series field starts at „erben (→ effective value)" and diverges explicitly — deletable back to inherit at any time. Boolean-shaped settings become tristates (Diff: erben | differenzieren | roh). Covers aggregation with its params, Diff and NULL handling; the Zeitfenster, Schrittweite/count, refresh and bar grid stay chart-level (one shared X axis, one poll loop). Where a half-width field cannot fit the full wording (the Farbskala Min/Max), the empty field shows the short form „→ Daten: 6,54" and carries the full „Erben (→ …)" as tooltip.
_Avoid_: global setting (that is the Voreinstellung's role), per-series setting without inherit (the rejected full-move model), fallback (mechanism, not concept)

**Series card**:
A series item in the Series section — ONE card anatomy (`SeriesCard`, ADR-0100) for every **Kartenquelle**: a quiet card whose header (swatch, name, source subtitle, actions) expands inline to the per-series knobs, bundled into **Karten-Tabs** **Basis · Daten · Stil · Format · JSON** (en: Basics · Data · Style · Format · JSON; formerly Basis | Daten | Darstellung | Werte | Erweitert, ADR-0072/0073). The header actions follow the source: Verlauf and Tabellarisch ↑↓ reorder, duplicate, delete; serien-förmig JSON only the restorable hide (eye, „Serie ausblenden") — the payload owns its series. The type select appears from two (visible) series on. The Basis tab leads with the OID, name, colour, type, axis binding and the per-series **history instance** (ADR-0039: each OID can store its history in a different adapter; Auto = the datapoint's own config decides, else the server). The Daten tab carries the acquisition knobs as Erben-Overrides: aggregation with its params, Diff (tristate), X offset (seconds or the ±1m…±2y calendar keys) beside the transforms (formula, Y offset, NULL handling, Keine Zukunft); Stil keeps the Linie/Balken/Fläche Sub-groups plus „Nur in Legende"; Format the value display (Werte).
_Avoid_: Accordion item (v2), row

**Kartenquelle (card source)**:
The data path a **Series card** belongs to — Verlauf (an OID), serien-förmig JSON (a payload name) or Tabellarisch (a Y column). It decides the card's identity, header subtitle and actions, its source row and whether the Daten tab fetches or only transforms; the family profile decides the rest (rings: no type, no colour, three tabs). One card anatomy, three sources (ADR-0100).
_Avoid_: card variant, card type, mode card

**Slice row**:
A pie slice item — a light list row (name, data point, colour, per-slice Raw, delete inline) with no expand; the thinnest series-authoring surface. In the serien-förmig JSON family the name belongs to the payload (display-only).
_Avoid_: Slice card, accordion

**Empty-state CTA**:
The first-open onboarding of an empty configuration (ADR-0013, reversing the ADR-0010 skeleton): no card is injected, the empty Series section lands on a call-to-action, and Apply stays disabled until a real series is added.
_Avoid_: Skeleton card (the retired injected default series), default series, placeholder series

**Warning roll-up**:
The `⚠ n` chip in a section header aggregating that section's field-level validation issues. Advisory only — it never blocks Apply.
_Avoid_: Error badge, validation summary

**Grenzwechsel-Hinweis**:
The undo snackbar AFTER a boundary crossing (ADR-0067 addendum 2026-11-03) — family (cartesian↔pie), data mode (into/out of JSON) or payload family: the crossing deletes the whole **Data path**, and the snackbar names what actually fell, derived from the crossing's own reset patch („3 Serien, 3 Achsen, JSON-Datenpunkt gelöscht · Rückgängig"; series · axes · markings · data point · active templates, zero segments omitted, nothing lost = no notice). line↔bar↔scatter crosses nothing. It runs through the configurator's ONE notice host at modal level, which serves every **Struktur-Ereignis** advisory (axis death, unit mismatch, data-path loss); a new notice replaces the previous one.
_Avoid_: Family-switch warning (the retired standing chip before the switch), Confirm dialog, type guard

**Axis card**:
A cartesian Y-axis item in the (v4) Axes manager — a collapsible card whose body groups all axis knobs into Sub-groups (basis, value range, scale & ticks, presentation); the header carries the **Achsen-Platz** stepper (▲▼) and delete. One per entry in the `yAxes` blob; a series binds to one via `yAxisIndex`.
_Avoid_: Axis row, axis settings

**Axis fine-tuning**:
The sparse appearance leaves beneath the axis **one-colour idiom** — label size (`axisLabel.fontSize`), tick colour (`axisTick.lineStyle.color`, separate from the labels; ticks follow the axis LINE by default), and grid colour (`splitLine.lineStyle.color`, offered only while that axis' splitlines switch is on; the value persists). Parity Build D (ADR-0055); additive: a set axis colour keeps painting line + label + name, these fields only steer their own leaf. Since the ADR-0055 addendum the two grid DEFAULTS are stamped, not inherited: the Y grid colour is always emitted (divider — one grid grey in both directions) and the X axis line+ticks+labels always carry the theme's PRIMARY token — the head of the colour chain, one accent from the default on (the light grid grey `#dbdee4` and, after a day's scrutiny, the text-secondary token both retired; addenda 2–3, 2026-10-19). The X-Karte's grid colour and every Y card's grid colour stay separately authorable and win over the defaults.
_Avoid_: axis styling (vague — the one-colour field is part of it), tick format (that is the value-range format field)

**Axis manager**:
The cartesian-only UI that adds/removes Axis cards and assigns series to axes (v4, ADR-0012); ordering an axis means setting its **Achsen-Platz** — the card list then re-sorts itself into the chart's draw order (left side complete, place 1 first, then right; ADR-0079 addendum 3) while every binding keeps its identity. Replaces the chart-level Y-axis scalars (`yMin/yMax/yName/yLog/yFormat`). Its first card is the X-Karte; the manageable list below is Y-only.
_Avoid_: Axes tab, axis list

**Achsen-Platz (axis place)**:
The depth rank of a Y-axis within its side: Platz 1 is drawn closest to the plot, Platz n farthest. Not a stored setting — the place is the rank of the axis' Versatz within its side's depth order (place and pixel Versatz are two views of one truth). Reordering inserts-with-shift: the moved axis takes the target place, everything beyond shifts outward, the vacated place closes up; the VERSATZ HANGS ON THE PLACE (ADR-0079 addendum) — every place keeps its pixel value, only the occupants exchange, the side's geometry never moves. Each side also REMEMBERS its places' values while they sit vacant (the Platz-Gedächtnis, ADR-0079 addendum 2): an arriving axis — a side change, a fresh axis, a structural re-arrangement — takes the remembered value of its place, a never-seen place the raster default; occupied places update the memory, vacated ones keep their last. Like Seite and Versatz, a chosen place is fine-tuning — the next structural event re-arranges the occupancy (its VALUES still come from the memory).
_Avoid_: Reihenfolge alone (a card moves only because its PLACE moved — never by physical reordering), axis index (that is the binding `yAxisIndex`), Position (that is the Seite)

**Markierung**:
A reference marking on a cartesian chart (the reworked threshold, ADR-0061/0062) — a card in the Axes & Zoom section, anchored to a **Y-axis** (our model; the adapter anchors on a series). Carries one or two **bounds** (`upper`/`lower`, each a number OR an OID that resolves live via socket subscription) and a style cluster (colour/width/shadow/solid-dashed-dotted). Each bound owns its full **Kanten-Label-Cluster** (edge label cluster, ADR-0081): text, 12 echarts-native places, X offset, size and colour — authored per edge (`labelUpper*`/`labelLower*`), superseding the one-text-rides-the-upper-edge model of ADR-0076. Both bounds resolved ⇒ a `markArea` band (0–1 fill) PLUS its two styled edge `markLine`s — every style and label field works for bands too; width defaults to 2 (the card slider's fallback, not echarts' 1). Exactly one bound ⇒ a lone `markLine` at that bound carrying its own bound's cluster. An edge without label TEXT shows its resolved bound VALUE as a fully styled label (**Wert-Fallback**): raw number, explicit colour through the ADR-0080 resolver (`labelXColor ?? marking colour ?? axis-text token`) — never echarts' bg-contrast auto halo. The emit stays series-level (echarts `markLine`/`markArea` hang on series): the builder attaches to the first series of the target axis, reading bounds the PIPELINE resolved against the current values (the builder never subscribes).
_Avoid_: Threshold (the retired pre-0061 name), mark line (that is the echarts key), limit line

**X-Karte**:
The single, non-deletable card atop the Axis manager configuring the shared time axis — label time format (the **Time format**), name, colour (primary-token inherit — line+ticks+labels wear the theme accent, the head of the colour chain; the field is labelled „Achsfarbe", never „Serienfarbe", for the axis inherits no series value), ticks, split lines, pixel offset (ADR-0035), bottom/top position and the **Axis fine-tuning** leaves (ADR-0055). Flat presentation config in every data mode: never a list, never bound to a series; neither min/max nor the axis type is configurable — the data mode owns the time window, and `time` is fixed.
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
The binding order of stages a series value passes through, each optional and independently authored, the sequence fixed (ADR-0077): Rohwert → Wert-Mapping (exact `String(rohwert)` match; a hit is a number or an author-declared gap immune to NULL handling; a miss passes through) → Plottbarer Wert → NULL-Behandlung → Y-Offset → Formel (with `smin`/`smax`/`savg`/`sfirst`/`slast` over the series' raw values) → Bucketing → Glättung (centered point window) → kumulative Summe. The stages from the Y-Offset on live in one module (`valueChain.ts`, ADR-0103 K1): the transform stage, then the final stage `finishValueChain` (bucketing with diff, Glättung and kumulative Summe, table categories, 100 % shares, pie rings), which also computes the legend values — once, at the end, over the final series.
_Avoid_: Transform-Pipeline (the chart pipeline is the whole fetch-to-option machinery), Verarbeitung

**Chart frame**:
The optional CSS border around the chart AREA — the „Rahmen" Sub-group in the Colours section (every family; parity Build D, ADR-0056). Pure container styling on the widget-body wrapper (`border` + `padding` + `boxSizing:'border-box'`), never an echarts option — that is what keeps the adapter's 8 `border-style` values (incl. groove/ridge/inset/outset). An/aus + width (0 while enabled also renders nothing), colour (inherit = the host theme's divider token), padding (the adapter's „Randabstand"). One resolver (`frameStyle.ts`) feeds the live body AND the Preview stage, so the frame previews live.
_Avoid_: chart border (echarts' own tooltip/legend frame options are different concepts), widget border (that is vis-2 style, outside the configurator)

**Chart padding**:
The per-side inset between the widget EDGE and everything the diagram renders — four sliders (top/bottom/left/right, MUI spacing units) in the „Diagramm" attribute group of the vis-2 panel; the Schieberegler effect: the whole chart surface incl. axes, title and legend shifts inward while the widget bounds hold. Pure container layout OUTSIDE the **Chart frame** (widget edge → chart padding → frame → frame padding → chart), additive beneath the collection-wide uniform base padding; never an echarts option. Every side defaults to 0 — no padding renders until authored.
_Avoid_: grid padding (that is echarts' plot-area inset — chart configuration), frame padding (that is the gap inside the frame), base padding (that is the collection's uniform Paper padding)

**Bar label**:
The value label ON a bar series — the Bar Sub-group's cluster beside the „Werte-Labels" switch: position (the adapter's five options mapped onto what they emit: `top`/`insideTop`/`insideBottom`/`inside`; „ohne" turns the switch off, a position turns it on — the controls cannot disagree), font size and colour (inherit = echarts' auto contrast, ADR-0080: an inside label — also an unset position, echarts' default — by the bar's fill luminance, a `top` label by zrender's canvas dark mode; a transparent canvas is never dark). The label VALUES ride the **Value format** per series. Sits next to the absolute **bar width** — plain digits = px, trailing `%` = percent of category, unset/unparseable = echarts' auto width (no emit). A LINE label stays the bare switch plus the same **Value format** on its values.
_Avoid_: data label (chart-lib vocabulary; our label switch is „Werte-Labels"), series label (that is the on/off switch concept)

**Axis auto-bind**:
The cartesian _creation_ default that each new series gets its own Y-axis (ADR-0018): creating a series creates a matching axis (1:1), alternating left/right with an 80 px stagger (`even → left`, `odd → right`, `offset = ⌊i/2⌋ × 80`); 1:n (several series on one axis) is reached by rebind, not by this default. A fresh or reset configuration starts with ZERO axes (ADR-0067 — the former default „Achse 1" is gone); axes exist only through binding and die with their last binder (**Axis–series coupling**, ADR-0069) — beside the series-add default, the per-series Y-axis dropdown's „Neue Achse" entry is the only other birth path (append + bind in one step). On EVERY structural event (series/axis add/delete/rebind, JSON hide/show, a **Data path** reset) the **axis auto-balance** — part of every **Struktur-Ereignis** follow-up (`editor/structureEvents`, ADR-0099) — re-arranges the bound axes to the standard interleaving — array order alternating left/right, densely on the 80 px raster — computed over the bound axes (ADR-0067 widening ADR-0028). A manual position or offset is fine-justure that survives only until the next structural event; the load path never re-arranges. An axis without an explicit colour **or name** inherits its **Namensgeber**'s values (colour → line + label + name; name → axis title), at runtime for every chart — never a creation-time snapshot. In the editor the Axis-card swatch resolves that inherited colour by the **Namensgeber**'s **display position** (palette slot) — matching the Series card, not the axis index, which drifts in JSON after a rebind or a payload-name reorder.
_Avoid_: auto-axis (too vague)

**Namensgeber (name owner)**:
The series an axis displays — its inherited name and colour come from the OWNER, not from „the first series in list order" (ADR-0068): the incumbent keeps the identity, so a series rebinding onto an occupied axis NEVER steals it however early it sits in the list; when the owner leaves, the first remaining binder takes over. Kept current on every structural event; the inheritance stays live (renaming the owner renames the axis immediately). In the serien-förmig JSON family the owner is the payload NAME (the overlay's key); in Verlauf and Tabellarisch it is the series' stable id — the tabellarisch family is positional (its series bind a yPath column, ADR-0075), and an unnamed tabellarisch series titles its axis with the column's last segment. The Namensgeber is a _who_, never a frozen _value_ — every axis that exists is bound (ADR-0069), so the owner always resolves.
_Avoid_: first binder (the superseded reading), owner series (redundant), axis name source

**Axis–series coupling**:
The cartesian lifecycle invariant (ADR-0025 History/Live, ADR-0026 JSON; reworked by ADR-0069): a Y-axis is a DERIVED citizen — it exists exactly while at least one visible series binds it via `yAxisIndex`. Born only through binding (the series-add **Axis auto-bind**, the reconcile append for a new payload name, or the per-series Y-axis dropdown's „Neue Achse" entry — append + bind in one step), it DIES with its last binder: a series-delete, a rebind onto another axis, a serien-förmig JSON hide (the payload series-card trash), a serien-förmig JSON axis-delete (which hides ALL its bound payload names — 1:n means several binders, one leftover would keep the axis rendered), or a payload name vanishing from the serien-förmig JSON data (the reconcile). Every death is immediate and rides the triggering undo step: config gone, markings anchored to the axis remapped (onto the rebind target when the binder moved there — like the explicit axis-delete — else onto the stack predecessor), survivors re-indexed, the bound set re-arranged (ADR-0067). The explicit axis-delete NEVER deletes its bound series: in Verlauf and Tabellarisch they rebind to a surviving axis of the same `format` (else axis 0, with an advisory unit-mismatch notice — Tabellarisch is positional like Verlauf, ADR-0075); in the serien-förmig JSON family the delete hides its binders and they return with the next payload. A death by side effect is reported by an undo snackbar (rebind, series-delete, JSON-hide; payload-vanish info-only — undo is futile, the next reconcile re-kills; the explicit delete and the load stay silent). In the serien-förmig JSON family the name-keyed overlay owns each payload series' `yAxisIndex`, reconciled sticky by the `payloadChanged` **Struktur-Ereignis**: a fresh payload lands 1:1, a manual rebind survives payload changes (Tabellarisch stores the index on its positional series instead). The load path silently enforces the invariant — an axis no series binds cannot exist — and the **Data path** structural reset (ADR-0067) remains the one bulk exception. The builder still emits bound axes only — defense for hand-edited JSON, not a state; the one builder-only addition on top, the synthesized **Grenzachse** (ADR-0070), was removed again by addendum 6 — the plot edges close via echarts' native extent gridlines under **Achsen-Vorrang**, so the builder emits no synthetic axes at all.
_Avoid_: 1:1 binding (that is only the creation default), series-axis cascade (there is none), unbound axis / resting axis / orphan axis (the retired states — pre-0069 disposal and ADR-0066's resting alike; no axis exists unbound anymore), free axis, reserved axis

**Struktur-Ereignis (structure event)**:
A user or payload change that alters the chart's structure rather than a single value — adding, duplicating, removing or rebinding a series, hiding or showing a payload series, deleting, flipping or moving an axis, a payload name set changing, and the three boundary crossings (chart family, JSON mode, Payload-Familie). Every structure event yields the complete follow-up in one undo step: the **Axis–series coupling** and **Data path** consequences plus an optional notice (axis death, unit mismatch, data-path loss) — ADR-0099. Plain field edits (a name, a colour, min/max) are not structure events.
_Avoid_: structural change, action, command (mechanism words), event (unqualified — collides with DOM/echarts events)

**Achsenlinie (axis line)**:
The line an axis draws at its own position + offset — part of the axis' one-colour presentation (line + label + name), NOT part of a grid: echarts places it at the grid rect's edge ± offset, and it moves with every flip, offset edit or axis death. At offset 0 it coincides with the plot edge; at any other offset it floats outside the plot. Under **Achsen-Vorrang** it also wins that edge: where it sits exactly on a gridline position, the gridline yields.
_Avoid_: Gitterlinie (an axis line is not a grid element), Plotkante (that is the contract, not the element)

**Achsen-Vorrang (axis precedence)**:
The display rule that an axis' **Achsenlinie** replaces any gridline it sits exactly on (ADR-0070 addendum 6): the gridline at that position is suppressed (never overpainted), the axis draws in its own style. Vertical edges: a visible offset-0 axis owns its side's extent gridline. Horizontal edges: the X axis line owns its position's edge only while it carries NO **Versatz** — an offset lifts it off both edges and both extent gridlines draw (the symmetric rule to a versetzte Y axis).
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
A semantic theme colour (`primary`/`success`/`warning`/`error`/`divider`/`textPrimary`/`textSecondary`/`paper`…) resolved once and stamped onto `PresentationConfig.themeTokens`, dark-mode-aware. Consumed BY NAME by the family builders for the theme-derived defaults — the markLine and legend-border defaults, the pie slice-label colour (`labelColor ?? textPrimary`, always emitted — ADR-0080 addendum) — and by the chart's theme floor — the tooltip surface (`paper`) and its text (`textSecondary`) — so these visible surfaces track the theme instead of being fixed hexes (ADR-0027). `paper` is the surface the widget card shows (the theme's paper colour, or under a forced mode the same fixed light/dark canvas colour the chart paints).
_Avoid_: theme colour (too generic), palette colour (the palette is the positional series assignment; tokens are semantic)

**Inherit swatch**:
The colour box in a `ColorField` that shows the field's **effective** colour — the value the canvas will actually render — when no explicit override is set. Backed by the picker's `fallback` (ADR-0004): palette slot, bound-series colour, or theme token. An inherit swatch that reads empty is a bug — it must preview the real inherited value.
_Avoid_: colour preview, default swatch

**Farbskala (value colour scale)**:
A per-series mapping from the series' VALUES to colours between a min and a max of that series' own unit — the same value always gets the same colour, wherever it sits in the plot. Belongs to one series (line, bar or scatter), never to the whole chart: series on different axes need different ranges. A line is coloured along its values, a bar or point gets the one colour of its value. With no colours chosen it inherits a scale derived from the series' effective colour (light → series colour → dark, low to high); with no range entered each bound inherits the bound axis' fixed bound, else the series' own data range over everything loaded (zooming never recolours). The positions of the chosen colour stops are honoured within the range. On a percent-stacked bar the range is read in displayed percent (0–100), like its axis.
_Avoid_: visualMap (that is the echarts component), Farbverlauf (that is the **Flächen-Verlauf**), chart colour scale (there is no chart-level one)

**Flächen-Verlauf (area gradient)**:
The gradient filling the area under a line series, anchored to the SHAPE of that area (its top edge gets the first colour, its bottom the last) — not to values. With no gradient chosen it inherits a three-stop vertical gradient of the series' effective colour fading from full (top) over half to transparent (bottom); it is never a flat fill in disguise. Where the series also has a **Farbskala**, the area keeps its Flächen-Verlauf and the line follows the scale.
_Avoid_: Farbskala (value-anchored, see above), Flächenfüllung (that is the umbrella choice off / flat / gradient)

**Option group**:
An echarts configuration group — on a series `lineStyle`/`areaStyle`/`itemStyle`/`symbol`/`label`/`labelLayout`/states/markers, on an axis `axisLine`/`axisTick`/`axisLabel`/`splitLine`/…, at chart level the component (`title`, `tooltip`, …). Since ADR-0043 it is the category unit of the three template catalogs: the menu teaches the option space of its level instead of hiding it behind semantic umbrella headers. A category may also bundle SIBLING groups that only make sense together (markers, and since the 2026-10-19 completeness audit the v6 axis break under `break`: `breaks`+`breakArea`+`breakLabelLayout`).
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
A per-axis, collision-safe preset (ADR-0037) — injected deep-merged into an Axis card's Axis raw. Since ADR-0043 the six semantic category headers give way to the echarts Option groups (`name`/`axisLine`/`axisTick`/`minorTick`/`axisLabel`/`splitLine`/`minorSplitLine`/`splitArea`/`axisPointer`/`break` plus a scale-Solos category), entries being Group scaffolds and scalar Solos — the X-Karte's catalog (ADR-0037 addendum) shares the categories and absorbed the former chart-level xAxis snippets. Each entry is audited against its axis builder so it duplicates no GUI-emitted key; payloads are theme-neutral (the sole documented exception: the `breaks` scaffold's breakArea itemStyle carries visible teaching colours). Distinct from the chart-wide **Template snippet** and the per-series **Series template**. Since ADR-0042 activated via the template multi-select (**Aktive Vorlage**), not one-shot injection.
_Avoid_: Snippet, preset, series template (that is per-series)

**Aktive Vorlage**:
A catalog entry switched ON at one of the raw levels (series / axis / title / legend / tooltip) via the template multi-select (ADR-0042); renders as a plain chip carrying its label and a deactivate-X. The ordered activation list is persisted per level and deep-merged in selection order (last activation wins a shared leaf) into the level's raw JSON; deactivating removes exactly its still-pristine leaves, so its effect is gone. Since the ADR-0042 addendum the activation tracks the raw text: it lasts while ANY of its keys stands in the JSON, and arises from the text only when its complete, value-identical key set stands there (editor undo restores it; a coincidental key never lights one). Family-invalid activations are pruned on Apply; a boundary crossing counts the activations it deletes in the **Grenzwechsel-Hinweis**.
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

**Familien-Profil**:
The complete set of everything family-specific (cartesian | pie) behind the family registry (ADR-0083): one directory per family under `families/`, split into a runtime **core** (the **Data-path-Anteil**, later the option build, the **Presentation-Fragment** and the echarts registration — no editor imports) and an editorial half (Rail-Slots, picker entries, validation, heal — ticket 02). A new family is one profile directory plus one entry in each record plus i18n; adjusting one family touches its profile alone. Both records are typed over the full family union — a half-delivered family does not compile.
_Avoid_: family switch (the retired scattered if/switch pattern), family config

**Membership-Kernel**:
The ONE chartType → family table (`families/kernel.ts`): `FAMILY_CHART_TYPES` plus `familyOf`, which tolerates the legacy stored values (`'cartesian'`/`'area'`/`'gauge'`/`'radar'` → cartesian) without migration. Every family-aware consumer asks the kernel; `familyOf` is re-exported at the option builder so existing import sites stay stable.
_Avoid_: family check (a copied `=== 'cartesian'` comparison — exactly the pattern the kernel replaces)

**Rail-Slot**:
One family-owned section slot of the Rail directly after the Series section (ADR-0083; n per profile — cartesian hosts Achsen & Zoom, pie the Torten-Optionen). Key, i18n title, renderer and Summary line come from the Familien-Profil's editorial record; slot keys are pure runtime addressing (open state, focus requests, issue grouping), never persisted. The pie slot's addressing key is `pieOptions` (renamed from `family` with ADR-0083 — "family" belongs to the profile concept).
_Avoid_: family section (the pre-registry wording of the slot), family tab

**Data-path-Anteil**:
The family-varied share of the boundary machinery a profile carries (`dataPath`): the marks count via `marksOf` (read by the crossing's loss derivation, ADR-0099 — the **Grenzwechsel-Hinweis** numbers come from the reset patch itself) and the structural reset patch — both families share the identical full-wipe default (the ADR-0067/0075 semantics moved INTO the profiles; behaviour unchanged).
_Avoid_: reset scope, boundary config

**Presentation-Fragment**:
The per-family slice of the presentation configuration (ADR-0083 ticket 03): `PresentationConfig` splits into a chart-wide base (assembled in the body, including the blob decode) and a discriminated fragment per family (cartesian: cartesianType, Y-axes, X-Karte, zoom, markings, color scale · pie: the pie knobs) assembled by the profile. The optional `pie?` field on the flat configuration dies; each option-builder arm carries base & fragment typed, so the cartesian builder can never see pie fields (and vice versa).
_Avoid_: pie field (the retired flat optional), family branch (the dispatch the fragment replaces)

**UI-Sprache (register & terminology)**:
The rules every configurator text follows — pinned by the 2026-10-22 text audit (commits c6d788b/afcf87b/3815961) and binding collection-wide, not just ECharts: impersonal register (no du/Sie addressing; full sentences live in InfoBoxes only), established technical terms stay untranslated (Serie, Achse, Legende, Tooltip, Versatz, Bucket, Easing), the English source is American spelling (color/behavior/center — ioBroker convention). Pie slices are **Segment** (never „Scheibe“); font weight is **Schriftstärke** (never „Schriftschnitt“ — that umbrella covers style, width AND weight); the colours section's plot-surface tab is **Zeichenfläche**. When a text and the code disagree, the text is corrected to tell the behaviour and the conflict is reported as a suspected bug — wording never promises what the code does not do.
_Avoid_: du-addressed hints, machine-translation artifacts („kollabiert“, „das Total“, „numerischer Intake“), BrE spellings

**relend-Rasterfamilie (adapter parity)**:
The relative-end grid labels („Ende von 10 Minuten“, „Stundenende“, „Minutenende“) mirror ioBroker.echarts' German verbatim — parity beats elegance, do not polish them. The calendar anchors deviate deliberately: the window ENDS at the boundary (`roundEnd` rolls to the 1st of the next period), so they read „Monatsende“/„Jahresende“/„Ende der Woche (So)/(Sa)“ — the adapter itself writes „Wochenssende“ there, a typo this collection does not inherit.
_Avoid_: renaming the grid labels, „dieser Monat“ (an end-anchor phrased as a range)

# Theme Studio

The collection-wide theme editor (ADR-0020): edits the user theme (stored in the `vis-2-widgets-collection.0.theme` state) while every collection widget on the canvas re-themes live. Opened from the widget palette, not dropped onto the canvas.

## Language

**Studio panel**:
The floating, draggable, resizable panel hosting the theme editor. Its live preview IS the canvas — there is deliberately no in-panel component preview. Its chrome renders in the vis-2 editor's theme family (modernDark/modernLight, mirrored locally via the chrome theme since gui-components peers MUI 9; ADR-0038/0078) — never in the theme being edited. It resizes like an OS window via Resize grips; the full Geometry (position, width, height-or-Auto) persists across sessions.
_Avoid_: Wizard dialog (the deleted modal), theme dialog

**Studio session**:
One editing run of the Theme Studio, from opening to Save or discard: it owns the draft (seeded from the last known theme, rebased onto the stored theme while untouched), mirrors it to the canvas, knows whether it is dirty, and saves or discards it. Invariant: when the session ends — however it ends — the draft leaves the canvas. It lives independently of the widget palette: collapsing, filtering or hiding the palette, switching views or toggling Run does not end it. Distinguished from the Editor history (the undo stack beneath the draft) and from the per-widget save handoff (each widget retires the draft once the stored theme echoes it).
_Avoid_: Studio-Sitzung, studio lifecycle, wizard state

**Studio host**:
The studio's own React root under `document.body` (ADR-0020 addendum 2026-11-02), created when the palette button opens the studio and unmounted when it closes — so every open starts a fresh Studio session, and the panel survives the palette collapsing, filtering, view switches and Run. The palette button only says "open" and passes the latest `socket` and host mode on; a second open brings the existing studio to the front. Because the panel stays open over the vis-2 editor, its shortcuts (Escape, undo/redo) act only on events inside the panel.
_Avoid_: Portal (hangs on the button and unmounts with the palette), studio dialog

**Collection CSS-variable prefix**:
The prefix of the CSS variables a user theme with `cssVariables` emits on `:root`: `vis2c` (`--vis2c-palette-primary-main`), also for `cssVariables: true` and an empty prefix. `mui` belongs to the vis-2 editor's own `--mui-*` variables: the resolution replaces it, the studio validation rejects it at the prefix field. The collection theme sets no `color-scheme` on `:root` (it would override the editor's).
_Avoid_: MUI prefix, `--mui-*` (the editor's namespace)

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
The `frameBackground` field's inherit semantics (terminal `paper`, ADR-0004/0078): unset ⇒ the card/frame surface and its picker swatch show the effective theme's `palette.background.paper`. The inner `background` field inherits `paper` too (**Erbt (content background)**), so an inner surface does not let a coloured frame background show through.
_Avoid_: „erbt = transparent“ (only true without the card, see **Erbt (content background)**)

**Erbt (content background)**:
The `background` field's inherit semantics (terminal `paper`, ADR-0004, ticket 12) — one definition in `commonFields` for `background`, the per-state `background{n}` and `backgroundActive`: unset ⇒ in the card the inner paper (BASE-PAPER-1) keeps MUI's Paper default `palette.background.paper`, and the swatch shows that. Documented divergence (pattern table header `noCard`): under `noCard` or embedded (`wrappedContent` false) the inner surface paints `transparent` while the swatch shows `paper`. MUI's dark-mode overlay at `baseElevation > 0` is presentation. In the Button-Group the field paints the toggle buttons, unset with no background of their own — the paper behind them is what shows, so the same contract holds. The runtime resolver builds its own chain and yields `''`; only the swatch reads the contract.
_Avoid_: „erbt transparent“ for `background` (true only without the card)

**Editor history**:
The bounded undo/redo stack over a configurator working copy (ADR-0038, generalised from the studio's ADR-0020 draft history): 50 snapshots, continuous same-key edits coalesce into one step (the studio keys by theme path, the echarts editor by the patch's key set), driven by header buttons and Ctrl+Z / Ctrl+Shift+Z / Ctrl+Y — the field's native undo wins while typing in an input; a non-modal editor (the Studio panel) scopes the keys to its own element. One implementation (`useEditorHistory`) backs both working copies.
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

# Farb- & Theme-Auflösung

How a color attribute resolves to the color a user actually sees — shared between the vis-2 attribute editor and the rendered widget, across every Collection widget. Pinned down by ADR-0004 (resolution contract on the field). The widget-specific consumers (e.g. the Slider's **Chrome-Farbvertrag**) build on this language.

## Language

**Auflösungskaskade** (allgemein → speziell):
The fixed order in which a color attribute's effective color is determined — layered from the most general default up to the most specific override; the resolution checks from the most specific end, so the most specific **set** value wins. The order of these stages is the same for every color field; a runtime consumer may still lay its own tiers in front of it — the state resolvers (`hooks/useData/propertyResolvers`) add active, per-state and the **Marker-Ebene** and share only the terminal mapping — or paint the explicit value raw, as some chrome slots do (see **Chrome-Farbvertrag**). The per-state and Active colour fields (`x{n}`, `xActive` of `iconColor`, `textColor`, `background`, `frameBackground`) mirror those tiers in their own field contract: each declares its base field `x` as fallback field (`commonFields` `perState` / `groupName`; the slider's per-state `iconColor{n}` / `textColor{n}` put the Marker-Ebene field before it), so an empty variant's swatch names the base colour its row paints. Only the live tier of an Active field — the `{n}` of the state currently active — stays runtime-only: a documented divergence, pattern Select arrow (ADR-0004, ticket 11).
_Avoid_: Fallback (vague — often means just one level); Vererbung (reserved for the „Erben" state).

**Effektive Farbe**:
The color an attribute actually takes on — the result of the Auflösungskaskade. What the editor swatch displays and the widget renders. Need not match the stored value.
_Avoid_: Anzeigefarbe, Renderfarbe.

**Erben**:
The state of a color attribute that has no value of its own. Its effective color emerges solely from the Auflösungskaskade (terminal default / vis-2 style / fallback fields). A deliberate, first-class state — not „not yet initialized". Every editor shows the inherited Effektive Farbe — in the vis-2 attribute panel, the ECharts configurator and the JSON-Table editors alike; there is no inheriting color field whose inherited color stays unnamed (an inherited `transparent` is shown as transparent, not as an empty swatch). Not the ECharts **Erben-Override** (per-series data settings against the chart-level Voreinstellung).
_Avoid_: Leer (misleading — sounds like „no color"); Default.

**Expliziter Override**:
A color value the user chose consciously. Wins in the Auflösungskaskade; it is the only thing persisted as the attribute's value.
_Avoid_: Set value, Benutzerfarbe.

**Terminaler Default**:
The most general end of the Auflösungskaskade — the color that applies when neither an override, nor a fallback, nor a vis-2 style is present. Fixed per attribute (e.g. text color → theme text color, icon color → theme primary). Named after general theme colors (primary, text, paper, divider, secondary text, the contrast color on the background, transparent); a widget-specific terminal exists only where the widget's own component draws a default that no general theme color names (the Switch's off-thumb). It names the color, not a fixed presentation the widget lays over it (a fixed alpha stays presentation — the Switch track, the Button-Group separator, the Slider rail and active mark).
_Avoid_: Basisfarbe (reserved for the theme configurator's base color).

**Basisfarbe**:
The primary color set in the theme configurator. Icon-color default and (derived) the text color follow it.
_Avoid_: Primary, Accent (implementation jargon).

**Repräsentative Vollfarbe**:
The one solid color a color value stands for: a solid color stands for itself, a gradient for its color at the midpoint, a value no color calculation can read (a color name, `transparent`, a CSS variable) for none. Where only a solid can be drawn or tinted — borders, separators, shadows, hover tints — a value without one counts as Erben and the Auflösungskaskade continues.
_Avoid_: Extrahierte Farbe, Gradient-Farbe (both name the mechanism, not the concept).

**Field-Vertrag** (resolution contract):
The declaration, attached to a color field, that fully describes its Auflösungskaskade (fallback fields, whether the vis-2 style participates, and the terminaler Default). The single source consumed by both the editor and the widget.
_Avoid_: Feld-Definition (broader — covers non-color fields too).

**Schlichtes Farbfeld**:
A color field without a Field-Vertrag: no Auflösungskaskade, so its swatch shows exactly the stored value and an empty field means the widget's own built-in default (the schema default where it has one), not Erben — the text field shows no "erbt", the swatch and the Farbwähler show that default, nothing is stored until the user chooses. Always solid only; color names, `transparent` and every other CSS color can be typed. Edited with the same Farbwähler as every other color field (ADR-0102), declared through its own factory (`createPlainColorField`), so the terminal parity test, which covers contract color fields only, never sees it. Name, label, default and visibility rule are those of the former vis-2 color input; stored values and bindings carry over. Examples: the Gauge's 25 canvas colors, the Dialog close-button color, the Light2 border color, the Slider marker-icon color.
_Avoid_: Host-Farbfeld, `type: 'color'`-Feld (both name the former vis-2 rendering, not the concept); Vertragsloses Feld

**Vertrags-Adapter**:
The adapter that renders a color field with a Field-Vertrag in the vis-2 attribute panel (`components/ContractColorField`, rendered by `createColorField`, ADR-0102) — the one place in the editor that resolves the Auflösungskaskade (Collection theme, vis-2 widget style) and hands the stored value plus that Effektive Farbe to the **Textfeld-Zeile** with the "erbt" placeholder. Writes every change as a one-field patch; `null` removes the override (Erben).
_Avoid_: Farbfeld-Komponente (unsaid which kind of field), Picker (that is the Farbwähler it opens)

**Schlichtes-Farbfeld-Adapter**:
The adapter that renders a **Schlichtes Farbfeld** (`components/PlainColorField`, rendered by `createPlainColorField`): stored value, else the schema default, as swatch colour, no "erbt", solid only — the Textfeld-Zeile without a cascade. Reads no Collection theme on mount (only its open Farbwähler does, for the presets). Shares the field binding (value, title, one-field patch) with the Vertrags-Adapter.
_Avoid_: Plain-Picker, Host-Farbfeld (the former vis-2 rendering)

**Regeln für Farbeingaben**:
What a color field stores for a text, decided in one pure place (`lib/helper/colorInputRules`, ADR-0102) from the text, where it came from (typed or picked in the Farbwähler) and whether the field allows gradients: empty → Erben (stored as null); a gradient → unchanged where allowed, otherwise invalid — never reduced to its midpoint (every CSS gradient counts here, `conic-` and `repeating-…` too; where gradients are allowed only linear and radial ones are taken); otherwise valid when the browser accepts it as a CSS color (color names, `transparent`, `hsl()`, `var(--…)` included). Typed values are stored as typed; picked solids become `#rrggbb`, with alpha < 1 `#rrggbbaa`. Invalid input is marked and not stored. The Auflösungskaskade reads stored values by the same rules (as typed, gradients allowed), so every stored valid value is an Expliziter Override — in the swatch and in the widgets that resolve through it; only a value that is no color at all (legacy free text) counts as Erben. Where only a solid can be drawn, the **Repräsentative Vollfarbe** still decides.
_Avoid_: Farbvalidierung (names only the check, not the decision what is stored)

# Slider Collection Widget

The dimmer/value slider of the collection (thumb, track, rail, marks, min/max icons). This glossary pins down its color-model language.

## Language

**Chrome-Farbvertrag**:
The pattern by which a widget's chrome colour slots carry ONE colour cascade (ADR-0004): a widget-local contract module DECLARES it (`fallbackFields` + terminal, optionally `inheritTextStyle`), the colour field spreads that contract so the editor swatch resolves it, and the widget RESOLVES the same contract at runtime — swatch and widget read one declaration. The reference case is the slider's chrome parts (thumb, track, rail, marks: `sliderColorContracts` in `lib/sliderColorContract.ts`, which `sliderFields` spreads, terminal `primary`, e.g. `thumbBorderColor → thumbColor → sliderColor → primary`, resolved in the **Slider-Chrome** (`buildSliderChrome`) through `resolveEffectiveColor` / `resolveEffectiveSolidColor`); the same module declares the slider's marker text and Endsymbol contracts. Like every contract module it imports no components, so the runtime never loads editor code. The slider lays fixed presentation layers over two of those colours, with and without an explicit value — frozen presentation, not contract, so the swatch shows the colour without them: the rail carries MUI's rail opacity 0.38 (`Slider.js`, MUI 6.5.0; the collection does not override it), so it looks paler than its swatch; the active mark carries the collection's `filter: brightness(2.5)` (`SliderCollectionWidget/chrome.ts`, `& .MuiSlider-markActive`) plus MUI's `markActive` opacity 0.8, so it looks lighter. A MUI upgrade has to re-check the rail and `markActive` opacities against the new release. Further examples of the pattern: the Button-Group separator (`lib/buttonGroupColorContract.ts` → `buildGroupChrome`), the table's frame, lines and header (`lib/jsonTableColorContracts.ts` → `buildTableChrome`) and the Select's arrow (`lib/selectColorContract.ts` → `buildSelectChrome`). Not every consumer walks the cascade through those helpers: the chrome slots that paint their stored value raw — the Switch's thumbs and tracks (`resolveSwitchColors` in `lib/switchColorContract.ts`) and the Radio's unchecked icon (`resolveRadioColors` in `lib/radioColorContract.ts`) — resolve through the cascade module's third helper `resolveStoredChromeColor`: the field, then its `fallbackFields`, raw, as stored (not validated), else the Sperre default the contract module passes for the locked state (the Switch's MUI disabled thumb colours, the Radio's `action.active`), else the terminal; it has no vis-2 style stage. The table's header bar builds its own chain and paints its explicit value raw over the terminal via `terminalColor`. Background slots keep their raw resolved value (gradients allowed); border, separator, line and shadow slots go solid via `resolveEffectiveSolidColor`: a stage without a **Repräsentative Vollfarbe** counts as Erben and the cascade continues. Each consumer's divergences from the swatch (e.g. a legacy stored explicit value that is no colour at all — the cascade reads every colour the **Regeln für Farbeingaben** accept — that keeps painting raw, as before the contract) live in its contract module and, where the widget has one, its glossary entry. The parity test `lib/colorFieldTerminals.parity.test.ts` requires a terminal on every contract colour field of every widget, without an exception list: a new contract colour field without a **Terminaler Default** fails it, so no empty swatch can return. The Switch's thumb and track colours declare theirs in `lib/switchColorContract.ts`, and the Dialog background declares `transparent` — unset, it paints nothing and the view shows through the MUI backdrop. Deliberately distinct from the State-/Text-Vertrag: label chains (valueLabel, markLabel) resolve through the state-resolver system (`useData`/StyleData per state), NOT through the chrome contracts — different responsibility, different engine. The markLabel chain carries the **Marker-Ebene**, the valueLabel chain does not.
_Avoid_: Slider-Farbregeln, Farbkaskade (unsaid WHICH contract), mixing chrome slots with label/state colors

**Slider-Chrome**:
The complete presentation of the MUI Slider, resolved in exactly one widget-local place (`SliderCollectionWidget/chrome.ts`, pure `buildSliderChrome`, pattern **Schalter-Chrome**, ADR-0106): the colours of thumb, track, rail and marks (the slider's **Chrome-Farbvertrag**), their geometry per orientation with the frozen fallbacks (thumb 20 × 20 px, track and rail 4 px across, marks 2 × 2 px horizontal and 16 × 3 px vertical), the thumb border (only for a positive width) and its hover/active halo, the active mark's frozen `brightness(2.5)`, the mark-label space together with the end symbols' rail offset, and the positions of the value and mark labels. Built from the raw slider fields, the resolved active style for the label containers (value size, text colour) and the theme, and handed to the MUI Slider as `sx` (no styled wrapper, so no guard against props leaking into the DOM), plus the transform that puts both end symbols (**Endsymbol**) onto the rail axis and the one orientation every rule reads — the body, the end symbols and MUI included: only a stored `vertical` is vertical, anything else (an unset field from legacy data, an import or a script) horizontal, as MUI renders it. Mark-label space and rail offset are one layout decision: the margin reserved for the mark labels (20 px below a horizontal, 44 px right of a vertical slider) shifts the rail by half of it, and the end symbols follow through the chrome's internal seam `railOffset`. MUI's rail opacity 0.38 and active-mark opacity 0.8 stay MUI's own. The content of each **Marke** (label, icon) is not chrome; CollectionMark paints it.
_Avoid_: Slider-Styles (unsaid WHICH shell), styled wrapper, measuring the end-symbol offset from the DOM

**Skala**:
What the slider spans and where it stops: minimum, maximum, grid, the **Marken** and the index of the **ausgewählte Marke** — one pure module, `buildScale` in `SliderCollectionWidget/scale.ts` (ADR-0106). It reads the slider fields of the widget data, useData's states and State-Spanne (`minValue`/`maxValue` of the numeric states), the mark base style `markBaseStyle`, the unit and the backend value; the body wires its result into the MUI Slider and decides nothing itself. Range rule: with Nur Zustände (`onlyStates`) the State-Spanne, otherwise the field (`minValue`/`maxValue`), unset → the State-Spanne. Grid rule (ADR-0002): with Nur Zustände `null` — the thumb snaps to the marks only — otherwise the field `step`, unset → MUI's default. The marks come from the pure mark function `buildSliderMarks`, a seam of its own behind the Skala; the selected index is decided there too — the first mark carrying the Aktiver-Zustand flag, `null` without a match or without a backend value — and the Skala passes it through.
_Avoid_: Bereich/Raster as separate body rules, Wertebereich for the State-Spanne (that is only the fallback), re-deriving the selected index beside the flag

**Marke**:
A mark on the slider's rail, with its label and icon — either a Zustandsmarke (one per numeric state row, from useData's `states`) or an erzeugte Zwischenmarke (the min/max bounds and `markStep` divisions `buildSliderMarks` adds around the states). Both render alike; a Zwischenmarke simply has no state row of its own. Every mark carries the **Aktiver Zustand** flag `active`: a Zustandsmarke keeps useData's, a Zwischenmarke gets it in `buildSliderMarks` by `sameStateValue`. The **ausgewählte Marke** is the FIRST active mark (like `activePosition`; active duplicates keep their own presentation), and `buildSliderMarks` writes its final presentation onto it (ADR-0106): the label `aliasActive` (only where the mark has a label), the `0px` rule and, for a Zwischenmarke, icon size, mask, icon colour (only with `iconColorActive` set), text colour and text size from the active base mark style `markBaseStyle.active` — the resolved label style, so a gradient `textColorActive` paints on it as on a Zustandsmarke; a Zustandsmarke keeps its per-state resolution from useData. No rule of the slider body reaches the mark. CollectionMark paints the mark's data only; its `data-font`/`data-position`/`data-img` attributes are test hooks. The `0px` rule is frozen presentation, read from the RAW `iconXOffsetActive`/`iconYOffsetActive` (only they tell `''` from unset): a value other than `0px` wins, `''` keeps the mark's own offset, anything else — unset (the fields have no default, so every existing slider lands here), `'0px'` — yields `0px`, unlike the shared resolver, which falls back to the base offset.
_Avoid_: Tick, mark without saying which kind where the difference matters, aktive Marke for the selected one (every duplicate of the value is active, one is selected)

**Marker-Ebene**:
The widget-level style every **Marke** takes where its state sets none of its own — the `marker*` fields (`markerTextColor`, `markerTextSize`, `markerIconColor`, `markerIconSize`), passed by the slider to useData (`useData('oid', { markerLayer })`). It sits uniformly between the per-state value and the base value, in all eight chains carrying it (text colour, active text colour, font/value size, icon size/width/height, icon colour) and in the base resolution of a Zwischenmarke too: per-state → marker → base. useData applies it to `states` and to the marks' base style (`markBaseStyle`) only. Everything else resolves without it — the active style `data`, hence the **Eck-Icon**, the value label and the header/footer. The slider's per-state colour fields declare it in their contract (`iconColor{n}` → `markerIconColor` → `iconColor`, `textColor{n}` → `markerTextColor` → `textColor`); the Active fields do not.
_Avoid_: Slider-Resolver (the retired mechanism that found it by type detection), Marker-Default (it is a tier between two others, not a default)

**Endsymbol**:
The icon at either end of the rail (`iconMin`/`iconSmallMin`, `iconMax`/`iconSmallMax`), coloured by `startIconColor` / `endIconColor`. The colour follows the SOURCE icon (start = min, end = max), not its rendered position, which swaps with the orientation. The colour is applied through a forced mask, so every icon with an explicit value is coloured — an image icon (URL, path) as a silhouette too. Unset, only a Base64 icon falls back to the theme primary; an image icon stays uncoloured and keeps its own colours. This is a documented state rule (pattern Select arrow, ADR-0004): "uncoloured" is no colour a swatch can name, so the field's swatch (terminal `primary`) shows the colour a Base64 icon gets. Implemented by `resolveEndSymbols` in `SliderCollectionWidget/endSymbols.ts`, pinned by `endSymbols.test.ts` and `SliderCollection.test.tsx`.
_Avoid_: Eck-Icon (the frame's corner icon), Start-/End-Icon without saying min/max where orientation matters

# Gauge Collection Widget

The canvas-gauge of the collection (linear or radial instrument on a canvas, driven by a numeric OID). This glossary pins down the seam language introduced with the Options-Builder.

## Language

**Options-Builder**:
`buildGaugeOptions(fields, rxData, ctx)` in `GaugeCollectionWidget/gaugeOptions.ts` — the ONE seam between the field definitions (`lib/gaugeFields.tsx`) and the canvas-gauges instance. Maps fields by the `gaugeX → x` prefix convention, coerces unset/''/NaN to the SCHEMA DEFAULT (never `Number('') === 0`, never a hidden library default), computes the specials (min/max with object fallback, major tick array, dimensions minus padding, value/unit, the **Canvas-Titel**, the arcs of the **Highlight-Zonen** from useData's states) and resolves contract colors (ADR-0004, introspected by `terminal`), every colour it hands over passing the **Canvas-Farbe** rule. The fields are INJECTED — that is what keeps the builder testable in the node env; the parity invariant (`gaugeFields.parity.test.ts`) pins that every field maps or is a known special. Its second entry, `resolveGaugeZone(fields, rxData, states, value) → { active, iconFit }`, serves the body (ADR-0107): the active zone's style and the icon fit (schema default), from the same private range and value rules — range, value coercion and zones are decided only here, never in the body. Two entries, because the zone style is needed OUTSIDE the frame (CollectionBase `data`) and the canvas size exists only INSIDE it (Content-Box).
_Avoid_: Prop-Mapping, GaugeProps (retired — the option surface existed in four hand-synchronised copies), option list, re-deriving range or value in the body

**Canvas-Adapter**:
`Gauge.tsx` — the pure adapter at the canvas-gauges seam: mounts the class selected by `gaugeType` (which travels INSIDE the option object so `update()` keeps it stable), applies option changes only when their CONTENT changed — it compares the options it last applied itself (the options are plain data, no functions), so a caller's renewed references (vis-2 renews `rxData`, theme and widget style on a mere editor move) never redraw the canvas (ADR-0107) — recreates on a class switch, destroys on unmount. Owns no widget logic; its interface is a single `options` prop.
_Avoid_: Gauge-Wrapper, Gauge-Komponente (when the adapter role is meant)

**Highlight-Zone**:
A range segment derived from the widget's value rows (`states[i].value … states[i+1].value`, last zone stretched to the effective max): two separate results: the canvas arcs (range + the state's text colour, nothing else) and the style of the active zone (frame background, content background, icon with its colour, mask, size and offsets). Half-open intervals, closed only at the absolute max; a boundary of exactly 0 is a real limit (`??`, not `||`). Owns its pure module (`gaugeSegments.ts`, one function over useData's states — `resolveZones(states, maxValue, value) → { arcs, active }`, ADR-0107; the arc colour stays raw there, the Options-Builder applies the **Canvas-Farbe**), which reads only what useData puts on a state — the legacy per-row colours `frameBackgroundColor{n}`/`backgroundColor{n}` are not among them and stay unread (no runtime path has read them since 2026-02-09; the Zustandseditor only carries them along). The active zone's styling flows DECLARATIVELY: GaugeCollection pre-composes it into the `data` CollectionBase renders (`baseData`); the retired path wrote inline styles through the imperative `paper0`/`paper1` handle (getters removed). Without an active zone the base data passes through unchanged — the gauge renders exactly like every other Collection widget (gradient frames included). The zone is the gauge's own, RANGE-based notion of "active", deliberately beside the **Aktiver Zustand** (exact match, useData): frame colour, zone icon and arc follow the zone; the Rahmen-Kopf-/Fußzeile and the text style follow the Aktiver Zustand — so a row's footer alias shows only while the value sits exactly on its boundary.
_Avoid_: Highlight-Bereich, Farbsegment (unsaid that it is range- AND style-bearing), paper0/paper1-Übergriff (retired), aktiver Zustand for the zone (that is the exact match)

**Klassenwahl**:
`gaugeType` — 'linear' | 'radial'. Not a display option but the choice of the canvas-gauges class; carried in the option object so class switches are detected on the adapter seam and the editor hides type-specific fields (`hiddenUnless('gaugeType', …)`).
_Avoid_: Gauge-Typ (when the class-switch semantics are meant)

**Farb-Klassen A/B/C**:
The gauge's color fields split by contract (ADR-0004): A = text-bearing on the theme's surface (title, units, numbers, ticks) → terminal `text` + `inheritTextStyle`; B = accent (needle, needle end, bar progress) → terminal `primary`; C = surfaces/shading (plate, borders, value box, shadows, needle circles, bar strokes) and what stands on a C surface (the value text on the value box, `#444`) → plain schema-default hex fields (**Schlichte Farbfelder**), deliberately WITHOUT terminal (works on both themes; a terminal can be added per field without touching the builder). The value text is C on purpose (ADR-0107): with the theme text it would turn near-white on the light value box of a dark theme.
_Avoid_: Theme-Farben (unsaid which class), mixing C fields into the contract without deciding their terminal

**Canvas-Farbe**:
The one rule for every colour the gauge hands to the canvas — option fields and zone arcs alike, applied in the Options-Builder (ADR-0107): a gradient paints its **Repräsentative Vollfarbe**; anything else is resolved in the widget (so view variables apply and `var(…)` becomes a colour the canvas paints) — a colour that depends on the widget context (`var(…)`, CSS-wide and system keywords, `currentColor`, colour functions beyond `rgb()`/`hsl()`) at a probe inside the widget, every other one (hex, names, `rgb()`/`hsl()`) by the browser's colour parser, passing as written (no style recalculation); a value that does not resolve counts as unset — the cascade (A/B), the schema default (C) or, for an arc, `transparent` applies. Before the probe is mounted a `var(…)` counts as unset and everything else passes as stored.
_Avoid_: Canvas-Auflösung (unsaid that it covers arcs too), extractColorFromValue (the legacy reader the arcs used — hex and rgb only)

**Canvas-Titel**:
The title canvas-gauges paints inside the instrument: the resolved header text (the same text as the **Rahmen-Kopfzeile**, falling back to the OID name) as plain text — tags removed, the basic entities decoded, whitespace normalised, nothing left → no title (ADR-0107). Independent of `noHeader`, which switches off only the frame's line; both show by default.
_Avoid_: Kopfzeile, Header (those are the frame's line), Titel without saying canvas or frame

# Collection-Kern (geteilte Bausteine)

## Language

**Wert-Anzeige**:
The shared icon + value display cluster (`components/CollectionValueDisplay.tsx`) every display-first Collection widget renders inside its own interaction wrapper — State cycles/clicks around it, Input switches it to the inline-edit TextField. Pure rendering over the ALREADY-RESOLVED presentation data (`StyleData` from useData): icon Box (Avatar, square, objectFit contain, iconSizeOnly + calc-offsets) and the **Wert-Text** typography, each gated by its `noIcon`/`noValue` flag. Colour RESOLUTION stays at the field/resolver (ADR-0004) — the cluster draws what it is handed; it owns no context, no socket, no interaction.
_Avoid_: Anzeige-Cluster (that described the two copies before K3), Icon-Wert-Gruppe (that is the DOM shape, not the module), Wert-Rendering (that is any value on screen, incl. headers/footers — those belong to CollectionBase)

**Wert-Text**:
The shared formatted-value typography (`components/CollectionValueText.tsx`) — gradient-text clip, break/hyphen rules, HTML passthrough via the left-aligned inline-block wrapper — that the Wert-Anzeige cluster renders centered and the Checkbox renders as its LABEL. Two frozen wrapper variants: the cluster's shrink-to-fit one and the label's full-width one (`wrapperFullWidth` — alias HTML with block elements/images lays out differently in a shrinking inline-block; the checkbox label has always been full-width). The label's flex-start alignment and wider right padding ride in through `sx`, layered last over the frozen base, and the Checkbox keeps its legacy falsy collapse at the call site (a raw `false` renders an empty label), unlike State/Input's null-only normalization. Consumed as a FormControlLabel label it MUST be passed with `disableTypography`: MUI wraps non-Typography label elements in an extra body1 span (`label.type !== Typography` check) that carries no flexGrow and squeezes the label out of the root's flex row — an element-type contract no sx analysis sees.
_Avoid_: Label-Typografie (that is the Checkbox's consumption of it), Wert-Anzeige (that is the whole icon+value cluster)

**Fremdänderung**:
An observed backend change of the bound state that did not originate from this widget — neither its own optimistic write, nor that write's echo, nor the first observation. Decided by the same pure rule as the Signifikante Backend-Änderung (`decideBackendChange`, ADR-0087): own optimistic writes (`.lc` = the `VALUE_NOT_CHANGED_TIMESTAMP` sentinel) never count, changes inside the ignore window (effective delay `Number(delay) || 300` — a configured `0` still yields 300 — plus 1500 ms) are absorbed as the own write's echo, the first observation initialises, otherwise every `lc` change counts, however small the value change. Consumed by controls that SHOW the state's position and must follow it exactly — the Slider's thumb.
_Avoid_: Backend-Änderung (includes the own write's echo), externe Änderung (unsaid: other adapter, client or widget), Echo (that is the absorbed own write)

**Signifikante Backend-Änderung**:
A **Fremdänderung** that also passes the significance filter — the rule for controls that only FLAG a foreign change: Input (red field while editing) and Light2 (picker re-init gates); `hasBackendChange` from `useValueState` (ADR-0087). Significance is TYPE-AWARE: while both sides coerce to finite numbers the jitter filter applies (delta ≥ 1), so sensor noise neither flashes a field nor re-initialises a picker; once one side does not coerce (pure strings like `#ff0000`), ANY change counts. A control that synchronises its position (the Slider) does not use it — the jitter filter would swallow sub-unit steps such as a 0.5 setpoint step or a 0–1 range.
_Avoid_: Echo (that is the absorbed own write, not the foreign change), Wert-Änderung (that is any change, significant or not), Signifikanz-Heuristik (that is the numeric branch of the rule)

**Schreibkette**:
The optimistic write path every interactive Collection widget shares: keystroke/control → `updateValue` (guards: no OID, `write === false`, failed type conversion; then optimistic `values[oid.val]` + `.lc` sentinel via `setState`) → `useDebounce` (debounce or throttle, per `sampleInterval`; a missing or non-numeric interval takes the field default — 300 ms debounce, 200 ms throttle — while an explicit `0` writes at once) → `context.setValue` → socket; the backend echo returns through `values` and is absorbed by the ignore window — it is no **Fremdänderung**. Type conversion (`convertToOidType`) is part of the chain: string/number/boolean/mixed each with their own acceptance rules (`"true"`-only booleans, mixed tries boolean → number → string).
_Avoid_: Write-Pipeline (that suggests fetch/transform machinery), Setter (that is one function in it)

**Sperre**:
The state in which a Collection widget offers its bound OID for display only — the control is disabled. Locked iff the user marked the widget display-only (`onlyDisplay`) or the bound OID's object is not writable (`write === false`); one rule (`isOidReadOnly`), decided by the OID binding (`useValueState` → `locked`) against the object actually bound, never re-derived per widget. Deliberately WIDER than the **Schreibkette**'s guard, which refuses only non-writable objects: a leaked `onlyDisplay` on Light2's Hilfs-OIDs (ADR-0096, no heal) must not stop their writes. The Select applies the same rule to its **Schreibziel**.
_Avoid_: Read-only (unsaid whether lock or guard), Schreibschutz (that is the object's `write === false` alone), disabled (that is the control's attribute, not the rule)

**Eck-Icon**:
The icon the Collection frame shows in its top-right corner — the active state's icon in its resolved colour. Size, offset, colour mask and the `noHeaderIcon` switch are widget-level settings, not per state. The frame owns the Eck-Icon: every widget that declares the common icon fields gets it; a widget only substitutes the icon data (Gauge: the active **Highlight-Zone**'s icon) or switches it off (frames that show something else: the Dialog's view frame, ECharts).
_Avoid_: Header-Icon (the editor's label for its switch — the icon sits in the corner, with or without a header), Kopf-Icon, Wert-Icon (that is the **Wert-Anzeige**'s icon)

**Rahmen-Kopfzeile**:
The single text line above a Collection widget's content, owned by the frame — the active state's header text, HTML allowed, switched off by `noHeader`. Shown only while the bound OID has a valid type; until then the frame shows its OID hint instead of both lines.
_Avoid_: Header (that is the JSON Table's column-header row), Titel, Überschrift

**Rahmen-Fußzeile**:
The single text line below a Collection widget's content, owned by the frame, HTML allowed, switched off by `noFooter`. Shows the first non-empty of: the active state's footer text → its alias → its value → the OID's current value with unit. Like the Rahmen-Kopfzeile it exists only while the bound OID has a valid type, and it always reflects the current value from the moment it appears — not only after the next value change.
_Avoid_: Footer without saying which frame, Statuszeile, Wert-Anzeige (that is the content's icon + value cluster)

**Zustandsmenge**:
The ONE pure rule for how many discrete states a widget effectively has (`lib/effectiveStateCount.ts`): `ignoreCommonStates === false` → the authored rows (`values_count`) govern; otherwise the OID's `commonStates` count, falling back to `values_count` when absent (e.g. boolean OIDs without commonStates). Consumed by BOTH the editor's field visibility (stateFields' hidden closures) and the runtime state resolution (useData) — visibility never promises behaviour the runtime does not deliver. The OID pick (oidChangeHandlerAsync) and the Zustandseditor (Zustandszeilen-Operationen) are the PRODUCERS of `values_count`, deliberately outside this seam; both always write `ignoreCommonStates: false` with it. `ignoreCommonStates` has no editor switch any more (ADR-0104): it survives only as the legacy marker of widgets saved with the old switch on, which keep the `commonStates` count until their first edit.
_Avoid_: Werte-Anzahl (that is the raw `values_count` field), state count formula (mechanism, not the seam), effektive Anzahl without the one-rule meaning

**Feldnummer**:
The 1-based suffix of a state's field row (`value{i}`, `alias{i}`, `textColor{i}` …) — the key of the per-state style resolution (`resolveStyleData(i)`). useData carries it on every resolved state (`fieldNumber`) and resolves the active state by it (`activeFieldNumber` and the active style data `data`). It is NOT the state's position in the resolved state list: blank value rows are skipped, so after a gap the two diverge (blank `value2` → the state of `value3` sits at list position 1). Consumers that index the list for ONE entry — the Select's entry — take the 0-based `activePosition` instead.
_Avoid_: Index without saying whether Feldnummer or list position, `index + 1` as a Feldnummer (holds only without gaps), activeIndex (the former name of the 1-based number)

**Aktiver Zustand**:
A resolved state whose value matches the bound OID's current value by `sameStateValue` — the decision useData already takes per state to resolve its style with the Active tier, published on the state as `active` (ADR-0105). Every duplicate of the matching value is active: the Radio Group checks them all, the Button-Group selects, Active-styles and dims them all. Renderers read the flag instead of comparing values again. Distinct from `activePosition`, which names ONE entry — the first active state's 0-based list position, for consumers that need a single entry (the Select's value) — and from the **Feldnummer**, which keys a state's field rows (`activeFieldNumber` and the active style data `data` follow the first active state too).
_Avoid_: aktiv = `activePosition === index` (first match only, drops the duplicates), re-deriving a match with `sameStateValue` in a renderer (the Slider reads the flag on its marks too and takes the first active mark as its **ausgewählte Marke**, like `activePosition`), truthiness as the active rule

**Zustandszeile**:
One discrete state of a widget together with everything configured for it — its value, alias and per-state styling — all sharing one **Feldnummer**. The ordered set of a widget's Zustandszeilen is what the **Zustandsmenge** counts.
_Avoid_: Wertegruppe (that is vis-2's indexed attribute group that used to edit them), Wert (that is only the row's `value`), state row / value row

**Zustandseditor**:
The editor in the vis-2 attribute panel in which a widget's Zustandszeilen are listed, edited and reordered; labelled „Werte" in the UI. Master-detail: a toolbar and a searchable, sortable list of all Zustandszeilen, below it the fields of the **Gewählte Zeile** only, each in a **Detail-Hülle** (ADR-0104).
_Avoid_: Werte-Konfigurator, Werteliste (that is what it shows, not the editor)

**Zustandszeilen-Operationen**:
The ONE pure module (`lib/stateRows.ts`) that turns every Zustandseditor action — Verschieben, Hinzufügen, Klonen, Löschen, Zeile leeren, aus common.states neu anlegen, aus common.states ergänzen — into one vis-2 patch (`null` deletes a key) carrying `values_count`, `ignoreCommonStates: false` and the row's `data.bindings` entries renamed with it. It also answers which actions the selected widgets allow: fixed rows (boolean OID, Checkbox, Switch, Template, Light2) refuse add/clone/delete, and under multi-selection the structural actions need identical Zustandszeilen. The OID picks run „ergänzen" through it as well.
_Avoid_: Zeilen-Logik, row helpers (it is the seam, not a utility bag)

**Gewählte Zeile**:
The Zustandszeile whose fields the Zustandseditor's detail shows — chosen in the list, or paged with ‹ › in the attribute row of the same label above the detail (‹ n / Anzahl ›, „Wert · Alias"). Choosing writes no project data, so vis-2 does not recalculate; it is remembered per view + selected widgets until the page reloads.
_Avoid_: Kopfzeile (that is the **Rahmen-Kopfzeile** of a widget), aktive Zeile (that is the runtime's active state, `activeFieldNumber`)

**Detail-Hülle**:
The custom field of the „Werte" group that stands for one per-state field definition (`stateEditor:<name>`): it keeps the definition's label and widget-level `hidden` rule and renders the definition under the indexed name of the **Gewählte Zeile** through vis-2's `Editor` — so the field is a native attribute row — together with its own binding switch and „unterschiedlich" mark. A per-state rule that reads the Feldnummer locks it instead of hiding it. Called wrapper in code.
_Avoid_: hull, Proxy-Feld

**OID-Rolle**:
What an id field of a widget is to that widget — exactly one of **Haupt-OID**, Steuer ID (the Select's **Schreibziel**) or **Hilfs-OID** — decided once from the field, never guessed per call site. The role decides which widget data an OID pick may set: only the Haupt-OID owns the root fields (icon, writability, range, state rows).
_Avoid_: OID-Typ (that is the state's value type), Feldname-Vergleich (that is the retired mechanism)

**Haupt-OID**:
The widget's primary state (`oid`) — the one whose pick seeds the root fields and the state rows.
_Avoid_: Status-OID (that is its role beside a Steuer ID only), main ID without saying which widget

**Hilfs-OID**:
Every id field that is neither Haupt-OID nor Steuer ID — e.g. the Dialog's **Sitzungs-OID** or the Light2 channel states. A Hilfs-OID owns only its own object metadata; picking it never touches the root fields.
_Avoid_: Neben-OID (sounds equal-ranking), Zusatz-OID (Light2 channels are not optional), auxiliary ID without the ownership rule

**Content-Box**:
The area a Collection widget's contents live in — the frame's inner paper, measured by CollectionBase and published to its children as `{ width, height }` (`useContentBox()`, ADR-0098), so square/circle sizing, the outlined border and padding are already reflected. Consumers read it instead of measuring themselves: the Select's width bound, the Gauge canvas, the Radio item size, the Switch's height budget. They read it in a component rendered INSIDE the frame — the body that renders CollectionBase sits outside the box. `undefined` until the first measurement and outside CollectionBase. Elements with a box of their own still measure locally (the Switch's track row, Light2's picker box with its `colorLightPadding`).
_Avoid_: Container-Größe (unsaid which container), Widget-Größe (that is the vis-2 widget frame)

**Farbwähler**:
The one color-picking popover every Collection editor opens from a color field — vis-2 attribute panel, ECharts configurator, Theme Studio and the JSON-Table editors alike (`CollectionColorPicker`, ADR-0102). It edits the value; which colour a field resolves to when empty stays the field's business (Field-Vertrag or Schlichtes Farbfeld). Each surface keeps its own field row around it.
_Avoid_: Color Picker, Farbpicker; Swatch (that is only the preview box in the field row); Light2-Farbsteuerung (the end-user lamp control inside the Light2 widget is not an editor)

**Textfeld-Zeile**:
The field row of a color in the vis-2 attribute panel and the ECharts configurator (`components/ColorTextFieldRow`, ADR-0102): text field · trash · swatch, opening the **Farbwähler** from the swatch. It knows no field definition and no cascade — it gets the stored value, the colour its swatch shows (the Effektive Farbe, from the Vertrags-Adapter, the Schlichtes-Farbfeld-Adapter or the configurator's fallback) and whether an empty field shows "erbt". The swatch lies on a checkerboard, so a translucent color reads the same in a light and a dark editor and a transparent one shows the checkerboard alone. Typed text runs through the **Regeln für Farbeingaben**; the trash removes the value. Its sibling for Theme Studio and the JSON-Table editors is the label row (`ColorPickerField`: label, optional hex text, swatch; the whole row opens the Farbwähler).
_Avoid_: Farbfeld (that is the field, not its row), Picker-Feld

# Input Collection Widget

## Language

**Inline-Edit-Sitzung**:
The display-first edit session of the Input widget (`useInlineEdit`, widget-local over the **Schreibkette**'s `useValueState` binding): a click switches to a TextField, the icon hides while editing, the autofocus effect stays in the component. Two modes — live (default): every keystroke writes through the optimistic binding; OK-button mode: the draft buffers and commits exactly once on blur/Enter/OK click. Draft sync adopts the backend value only while NOT editing — a foreign change DURING the session surfaces as `hasBackendChange` (red field, the **Signifikante Backend-Änderung**) instead of clobbering the draft. Keys: Enter runs the blur path; **Escape beendet die Bearbeitung ohne Commit** — in OK mode the buffered draft is DISCARDED (nothing was written), in live mode it equals blur because already-written keystrokes are on their way through the debounce (a "discard" there would be a lie).
_Avoid_: Draft-Modus (that is only the buffering half of OK mode), Cancel (that is the Escape action, not the session), Editier-Modus (that is just the editing flag)

# Switch Collection Widget

The collection's toggle switch over one boolean OID. This glossary pins down its chrome language.

## Language

**Schalter-Chrome**:
The complete presentation of the MUI Switch, resolved in exactly one widget-local place (`SwitchCollectionWidget/chrome.ts`, pure `buildSwitchChrome`, pattern **Button-Group-Chrome**): the thumb travel with its sign (off positive, on negative) and the anchor of the switch base (0 % off, 100 % on), position and width of the invisible input over the measured track row, the thumb size capped by the height budget (the frame's Content-Box, ADR-0098 — unmeasured, the thumb stays uncapped), the thumb and track colours, the icon overlay on the thumb (the same on and off, in the state's resolved icon colour) and the ripple colour. Built from raw widget data (thumb size and the fields of the switch colour contracts), the state's icon values from useData, the measured track-row width, the height budget, the Sperre and the theme — never from the whole widget — and handed to the MUI Switch as `sx` (no styled wrapper, so no guard against props leaking into the DOM). The thumb and track colours are the switch's **Chrome-Farbvertrag** (`lib/switchColorContract.ts`, ADR-0004): the stored value raw through the cascade's raw stage, else MUI's Switch default as terminal; locked, an unset thumb draws MUI's disabled grey. Frozen presentation, pinned by tests and not contract: the track alpha (MUI 6.5.0: off 0.38 light / 0.3 dark, on 0.5; locked 0.12 / 0.2 in both states) and the travel inset (4 px, derivation no longer verifiable). The track row itself (its height from `trackSize`) and both measurements stay in the renderer.
_Avoid_: Switch-Styles (unsaid WHICH shell), Geometrie-Modul (retired — the travel and input-offset formulas are internal helpers of the chrome), treating the track alpha or the travel inset as configurable knobs (they are frozen)

# Button-Group Collection Widget

## Language

**Button-Group-Chrome**:
The presentation shell of the toggle group — everything the renderer draws AROUND the per-state content: the variant chrome (outlined borders vs borderless text mode with inset box-shadow separators), the orientation layout (horizontal row vs vertical stack with equal-height caps), the rounded/squared group ends, and the per-button hover/selected treatment (solid colours lighten; gradients dim via opacity instead). Resolved in exactly one widget-local place (`ButtonGroupCollectionWidget/chrome.ts`) from raw widget data plus the theme. The separator/border colour is a colour contract (ADR-0004, the Slider's **Chrome-Farbvertrag** pattern): the `buttonGroupColor` field declares `buttonGroupColorContract` (`lib/buttonGroupColorContract.ts`) — `buttonGroupColor`, else the theme text colour; no `textColor` fallback, no vis-2 CSS colour — and the chrome resolves the same contract as a solid colour (`resolveEffectiveSolidColor`: a gradient draws its Repräsentative Vollfarbe, a value without one counts as unset) — after the explicit value as stored wherever a colour calculation reads it, as before the contract. Since the cascade reads stored values by the **Regeln für Farbeingaben**, an explicit `hsl()` or 4-digit hex is an Expliziter Override there too; the explicit-first read is a leftover of the former regex cascade and changes nothing. Everything else — the separator alpha (0.6), the hover/selected tints (only for a background `extractColorFromValue` reads: hex, rgb(a)) — stays frozen legacy presentation, pinned by tests. The icon/text content boxes are not chrome; they stay in the renderer.
_Avoid_: Button-Styles (unsaid WHICH shell), mixing chrome rules with the value/label content layout, treating the separator alpha as a configurable knob (it is frozen), a `textColor` fallback for the separator (the field once declared it; the runtime never drew it)

# State Collection Widget

The collection's state display/toggle button (icon + Wert-Anzeige cluster, click/toggle/push-button, change dialog beyond two states). This glossary pins down its trigger language.

## Language

**Zustands-Auslöser**:
The State widget's ONE trigger decision (`StateCollectionWidget/stateTrigger.ts`, pure): what a press / release / click does — write (single state), toggle between two states (via the `sameStateValue` contract), open the change dialog (more than two states, or `onlyStates` off), or nothing. The push-button click write is SUPPRESSED, not outrun: press/release write synchronously, so the former `setTimeout(0)` race is gone, and a keyboard click in push-button mode is an honest no-op instead of latching the press value. The React body is wiring — three unconditional `fire()` adapters over the RESOLVED `states[]` from useData (never raw `value1`/`value2`); the change dialog is an internal implementation behind it: props-driven, no context of its own, writing through the body's one **Schreibkette**.
_Avoid_: Klick-Logik (that is the wiring), Trigger-Handler (that is the adapter side), Taster-Trick/Timer-Rennen (retired with the race)

# Radio Group Collection Widget

## Language

**Radio-Chrome**:
The presentation shell of the radio group — everything the renderer draws AROUND the per-state content, resolved in exactly one widget-local place (`RadioGroupCollectionWidget/chrome.ts`, pure, the **Button-Group-Chrome** pattern of one function for the group and one per entry). The group: direction, width and alignment of the stack (only an explicit `horizontal` lays out a row; anything else stacks). The entry: the label area (the gap on the label's side by placement, none while labels are hidden; stacked an equal flex share, side by side the full height), the button base (side by side square, capped at the Content-Box height; stacked fixed at the px share `Content-Box height / count`), the radio root with its cap and the ripple in the state's icon colour, and the lock colours (checked keeps the state's icon colour, unchecked draws the stored `radioGroupUncheckedIconColor` raw, else the radio colour contract's Sperre default `action.active` — only while locked). The radio colours come from the radio colour contract (`lib/radioColorContract.ts`, ADR-0004), which the entry function resolves itself. The renderer still reads the Content-Box (ADR-0098) and hands its height in. The px share is frozen legacy presentation; whether the Button-Group's CSS share (`calc(100% / count)`) would suffice is an open question in the module comment, not an alignment. The icon over the dot and the label (2-line clamp, HTML) are per-state content, not chrome; they stay in the renderer (ADR-0091).
_Avoid_: Radio-Styles (unsaid WHICH shell), mixing chrome rules with the icon/label content, treating the px share as a CSS share (it is measured and frozen)

# Select Collection Widget

The collection's dropdown selection over the resolved states of one OID, with an optional control ID as separate command target. This glossary pins down its write and chrome language.

## Language

**Schreibziel**:
The ONE rule for which OID a selection writes and whose writability locks the control (`lib/writeTarget.ts`, pure, ADR-0090): the control ID (`cid`, "Steuer ID") when set, otherwise the main OID. Only the write target is written to the backend — the display follows the main OID's status alone, so after a selection with a control ID the Select snaps over when the status echo arrives (no optimistic main-OID patch). The control is read-only iff `onlyDisplay` is set or the write target's object carries `write === false`. Consumed by BOTH the editor (`oidChangeHandlerAsync` derives the `onlyDisplay` suggestion from the write target, regardless of picking order; clearing the control ID re-derives it from the main OID) and the runtime (Select) — the Zustandsmenge pattern. The control-ID handler owns only `cidObject` and `onlyDisplay`; root `icon`/`write`/`minValue`/`maxValue` belong to the main OID.
_Avoid_: Doppel-Write (the retired write to both OIDs), Ziel-OID (unsaid which rule), Status-OID as write target when a control ID is set

**Select-Chrome**:
The presentation shell of the Select — everything the renderer draws AROUND the per-state content (`SelectCollectionWidget/chrome.ts`): the menu paper (follows the EXPLICIT `noCard` only, not `wrappedContent` — the menu is portaled to the body, so an embedded Select keeps its own surface; `noCard` makes it shadowless but not transparent — an unset `frameBackground` resolves to the theme paper (terminal `paper`), so the popup stays opaque in it; transparent only for an empty resolved value, a defensive branch), the per-entry hover/selected treatment (hover turns into the 50 %-alpha of the state background — for gradients of its extracted colour; a background MUI cannot parse, e.g. a named colour or a CSS variable, gets no hover tint instead of crashing the menu), the arrow colour and the root width bound from the measured content box. Like **Button-Group-Chrome** NOT a colour contract except for one slot — here the arrow: it resolves the ONE arrow contract the `arrowColor` field declares too (`lib/selectColorContract.ts`, ADR-0004) — `arrowColor`, else `textColor`, else the vis-2 CSS colour, else the theme text colour; an invalid colour counts as unset. The two resolve it over different data, deliberately: the editor swatch over the BASE fields (the widget's `textColor`), the runtime over the ACTIVE state's resolved text colour — a state with its own text colour draws its arrow in it. The icon/label content of a state is not chrome; it stays in the renderer (ADR-0091).
_Avoid_: Menü-Styles (unsaid WHICH shell), mixing chrome with the per-state content layout, deriving the menu surface from `wrappedContent`

# Dialog Collection Widget

The collection's button that opens a vis view in a modal dialog, optionally mirrored to a boolean state. This glossary pins down its open-state language.

## Language

**Dialog-Sitzung**:
The open state of one Dialog widget and the ONE rule for how it changes: a click opens; closing (X, backdrop, Escape) and the auto-close timer close — the timer runs for every opened session, whoever opened it. The **Sitzungs-OID** opens on `true` and closes on `false`, including the value already present at view load. Only the widget's own actions write to the Sitzungs-OID; an observed backend value never writes back.
_Avoid_: Dialog-Status (unsaid whether local or backend), Öffnungslogik (that is the wiring), Popup-State

**Sitzungs-OID**:
The optional boolean state (`dialogId`) that mirrors a **Dialog-Sitzung** in both directions — read to open/close, written on the widget's own open/close (never when its object is read-only). Only real booleans count; any other value is ignored. A **Hilfs-OID**, not a **Schreibziel**: it is read AND written, and no status OID stands beside it.
_Avoid_: Steuer-OID, Steuer ID (that is the Select's `cid`), Dialog-OID, control OID
