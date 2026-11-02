# Theme Studio

![Theme Studio](../img/theme-studio.png)

## Description

The Theme Studio is the widget collection's collection-wide theme editor: it styles colors, typography, shapes and spacing of **every** widget in this collection (State, Switch, …, ECharts) at once — live on the open vis-2 view.

It is deliberately **not a widget**: you do not drop it onto the canvas. In the vis-2 edit mode you open it via the **Theme Studio** button in the widget palette (the collection group's "Theme Studio" entry). It appears as a floating, draggable and resizable window.

The finished theme is stored as JSON in the ioBroker state `vis-2-widgets-collection.0.theme` (see [below](#the-theme-in-the-datapoint)); every collection widget reads it and layers it over the vis-2 theme. Included presets provide starting points.

## Opening and operating

- **Open:** vis-2 edit mode → widget palette → collection group → **Theme Studio**. The window opens instantly with the last known theme; all sections start collapsed.
- **Independent of the palette:** the studio stays open when the palette is collapsed, filtered or hidden, when you switch views and in run mode (▶). Clicking the button again does not open a second studio but brings the open one to the front.
- **The live preview IS the canvas:** there is deliberately no in-window component preview — every collection widget on the open view picks up the changes live. On **Cancel** everything snaps back to the saved theme.
- **Title bar:** drag to move; a dot next to the title marks unsaved changes. **Undo/Redo** (up to 50 steps; `Ctrl+Z` / `Ctrl+Shift+Z` / `Ctrl+Y`; continuous edits — e.g. one slider drag — coalesce into a single step) and **Close** (same as Cancel).
- **Size:** eight edge and corner grips resize it like an operating-system window (edges keyboard-operable: arrows ±16/±64 px, `Home`/`End`, double-click resets; corners pointer-only). By default the height follows the content (**Auto**, up to 80 % of the window height) — the first vertical grip fixes it, a double-click on a horizontal edge restores Auto. Position and size persist across sessions.
- **Footer:**
    - **Reset all to default** — empties **every** value (`{}` = everything inherits; one undo step, so it is reversible)
    - **"1 problem" / "%s problems"** — appears on validation errors; a click expands the affected section and scrolls to the first error
    - **Cancel** — discards the changes (with a confirmation while unsaved changes are open) and closes the studio
    - **Save** — writes the datapoint and closes the studio; enabled only when there is something to save and blocked while validation errors are open. A connection failure shows a message and keeps the studio open
- While unsaved changes are open, the browser warns before reloading or closing the tab.

## Presets

A collapsible section (closed on open). Its summary names the active preset ("Graphite · active"), "custom colours", or "(Default)" while no color is set.

Nine curated color themes as cards — **Graphite, Sunset, Daylight, Sage, Mono, Emerald, Amethyst, Ruby, Amber** — with mini color swatches (base surface, widget surface, primary, secondary) and a light/dark icon. The card whose colors currently apply is marked active.

**Colors only:** applying a preset replaces **only the colors** (including the color mode) — typography, corner radii, spacing unit and the CSS-variables settings survive. Applying a preset is one undo step.

## Color fields

All color fields of the **Colors** and **Status & text** sections work the same way:

- The field shows the **effective color** — set or inherited, exactly as it appears on the canvas. A set value shows a **Reset to default** button that returns the field to inheriting.
- The **swatch** opens the color picker; it offers the current theme colors as a swatch row.
- Next to it the **hex value** is shown in a monospace font — directly editable and copyable. `Enter` or leaving the field applies it, `Esc` restores the previous value, an emptied field resets the color to inheriting. An invalid entry is reported right at the field.
- The **?** next to it explains where the color takes effect.

Derived values are marked in the label: the secondary color reads "· derived from primary" while it is computed from a set primary color; Text (primary) reads "· follows primary" while it inherits.

Gradients are invalid ("must be a color"). Primary, secondary and the status colors need a computable value (hex, `rgb()`, `hsl()`) — the studio reports color names such as `red` and `transparent` there as an error.

## Colors section

| Setting         | Theme path                   | Where it takes effect                                                                                          |
| --------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Color mode      | `palette.mode`               | **Auto** · Light · Dark. Auto follows vis-2; the active mode is shown beneath ("follows vis-2: Dark")          |
| Primary color   | `palette.primary.main`       | Main accent: active states, default icon colour, first series colour of the chart palette "Theme (auto)"       |
| Secondary color | `palette.secondary.main`     | Second accent and second chart series colour. Computed as a triadic partner of the primary until set           |
| Base surface    | `palette.background.default` | Background of the dialog widget when it has no frame colour                                                    |
| Widget surface  | `palette.background.paper`   | Surface of widget cards and frames (default of every inheriting frame colour) — the main lever for dark themes |
| Divider         | `palette.divider`            | Borders, separators and chart frames; default of every line colour attribute                                   |

Groups: **Accents** (primary, secondary) and **Surfaces** (base surface, widget surface, divider). The summary shows the mode and the primary and secondary colors.

## Typography & shape section

| Setting             | Theme path                                                                            | Description                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Font family         | `typography.fontFamily`                                                               | **Default (vis-2 theme)** (inherits the vis-2 font) · **Included** (shipped with the collection, offline and identical everywhere: Inter, JetBrains Mono, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Roboto, Roboto Slab) · **System** (installed on the viewing device) · **Custom font…** (any CSS font name in the text field below)              |
| Google Font         | `googleFonts`, `typography.fontFamily`                                                | Type the **Name on Google Fonts** (e.g. Roboto, Lato, Open Sans; "Browse fonts" opens fonts.google.com) and click **Load**. The studio fetches the font once from fonts.googleapis.com (request from this browser), embeds Regular and Bold in the datapoint and selects it as the font family — one undo step. Offline afterwards; the state grows by a few tens of KB per font |
| Loaded Google fonts | —                                                                                     | Every loaded font appears as a chip: a click selects it as the font family, ✕ removes it. If the font family points to the removed font, it is reset as well                                                                                                                                                                                                                     |
| Base font size (px) | `typography.fontSize`                                                                 | 8–24 px, default 14                                                                                                                                                                                                                                                                                                                                                              |
| Border radius (px)  | `corners.topLeft` … `corners.bottomLeft`                                              | **Linked** by default: one slider (0–96 px, default 4) for all four corners. The chain icon unlinks them ("Set corners individually") — then four number fields in corner arrangement (top left, top right, bottom left, bottom right). Linking again ("Link corners") sets unequal corners to the top-left value. Applies to the widgets' card and frame surfaces               |
| Fine-tuning ↓       | `typography.fontWeightLight/Regular/Medium/Bold`, `typography.allVariants.lineHeight` | Rarely needed, collapsed: which font weight the widgets use for the roles Light, Regular, Medium and Bold, and the line height (1–2). Note: included fonts ship real 400 and 700 faces only — other weights are synthesised by the browser and can look muddy                                                                                                                    |

The summary shows font, size and corner radius.

## Status & text section

| Setting          | Theme path               | Where it takes effect                                                                                     |
| ---------------- | ------------------------ | --------------------------------------------------------------------------------------------------------- |
| Error color      | `palette.error.main`     | Series colour 6 of the chart palette "Theme (auto)" and status indicators of controls (e.g. input errors) |
| Warning color    | `palette.warning.main`   | Series colour 3 of the chart palette "Theme (auto)" and status indicators of controls                     |
| Info color       | `palette.info.main`      | Series colour 5 of the chart palette "Theme (auto)" and status indicators of controls                     |
| Success color    | `palette.success.main`   | Series colour 4 of the chart palette "Theme (auto)" and status indicators of controls                     |
| Text (primary)   | `palette.text.primary`   | Default of all text colours. Follows the primary colour until set                                         |
| Text (secondary) | `palette.text.secondary` | Secondary text such as units, captions and hints                                                          |

Groups: **Status colors** and **Text**. The summary counts the set colors ("x of 6 set").

## Advanced section

| Setting              | Theme path                  | Description                                                                                                                                  |
| -------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Spacing unit (px)    | `spacing`                   | Base unit for all padding and gaps inside the widgets (default 8 px). 2 units = 16 px                                                        |
| Enable CSS variables | `cssVariables`              | Exposes every theme value as a CSS variable (e.g. `--vis2c-palette-primary-main`) — for your own CSS in vis-2; not needed without custom CSS |
| CSS variable prefix  | `cssVariables.cssVarPrefix` | Prefix of the generated variables; empty = `vis2c`. `mui` is reserved (the vis-2 editor defines `--mui-*` itself) and rejected               |

The variables live on `:root` and carry the prefix `--vis2c` by default. Earlier versions generated `--mui-*` and thereby overwrote the vis-2 editor's variables of the same name — switch custom CSS that reads `--mui-palette-…` from the collection theme to `--vis2c-palette-…`. The collection theme no longer sets `color-scheme` on `:root`.

The summary shows the spacing unit and whether CSS variables are on. There is no text-direction (RTL) toggle any more; an existing `direction` in the datapoint stays valid.

## The theme in the datapoint

The studio saves into the state **`vis-2-widgets-collection.0.theme`** (type `string`): the theme as JSON text. It is a **partial MUI `ThemeOptions` object** plus two custom extensions (`corners`, `googleFonts`). Every collection widget reads and validates the state on start and on every change; if it is invalid the widget theme falls back to the host default (fallback `{}`).

Compact example (dark, own accents, Inter, corner radius — this is roughly what the state looks like):

```json
{
    "palette": {
        "mode": "dark",
        "primary": { "main": "#90caf9" },
        "secondary": { "main": "#ce93d8" },
        "background": { "default": "#121212", "paper": "#1e1e1e" },
        "text": { "primary": "#ede7f6", "secondary": "#9e9e9e" },
        "success": { "main": "#81c784" }
    },
    "typography": { "fontFamily": "Inter", "fontSize": 14 },
    "corners": { "topLeft": 12, "topRight": 12, "bottomRight": 12, "bottomLeft": 12 },
    "spacing": 8
}
```

Rules and notes for script authors:

- **Sparse:** cleared fields disappear completely on save (the studio prunes empty paths). Missing paths inherit — a minimal valid theme is `{}`.
- **Validation:** colors must be plain (no gradients), numbers numbers, values in range (e.g. corner radii 0–96; the studio reports "out of range (0–96)"); unknown paths produce a warning ("unknown setting — ignored") but no block. Errors block saving from the studio; a state written invalidly via script falls back to the host default in the widgets.
- **Writing directly** works: `setState('vis-2-widgets-collection.0.theme', JSON.stringify(theme), true)` — the studio reads the state on open and continues from it.
- **`googleFonts`** (a map of font name → weight + embedded woff2 data URIs) is managed by the studio alone when loading a Google font — do not edit by hand (large base64 blobs).

## Related pages

- [Home](En-Home.md) — common settings of all widgets
- [ECharts Widget](En-Echarts-Widget.md) — its Colors section uses this theme as the palette source "Theme (auto)"
