# ioBroker.vis-2 Widget Collection - User Guide

Documentation of the Widget Collection for ioBroker.vis-2. This page describes the settings all widgets share, the widget pages what comes on top.

## Settings Principle

The settings follow a clear hierarchy from general to specific:

1. **vis-2 Settings** - Provided by vis-2 for every widget
2. **Common Settings** - Shared settings of the widgets in this collection
3. **Widget-specific Settings** - Specific to the respective widget type
4. **Value-specific Settings** - Individual settings per row of the state editor

**Important:** A more specific value that is set overrides the more general one, an empty value passes on to the next level. The exceptions are listed under [Value-specific Settings](#value-specific-settings).

The tables name the label from the attribute panel first, behind it the key in the widget data. Default and option values appear as stored raw values. "-" means: no fixed default, the description says what applies then.

## vis-2 Settings (always available)

vis-2 itself provides these settings for every widget. In the attribute panel, **General** and **Visibility** come before the groups of the widget, the others after them. If a field has no label of its own, the panel shows the key; it then stands alone in the table.

### General

| Property                    | Type         | Default | Description                                                                                                |
| --------------------------- | ------------ | ------- | ---------------------------------------------------------------------------------------------------------- |
| Name `name`                 | text         | -       | Name of the widget                                                                                         |
| Comment `comment`           | text         | -       | Free comment                                                                                               |
| CSS Class `class`           | class        | -       | Additional CSS classes on the widget element                                                               |
| Filter key `filterkey`      | filters      | -       | While a filter is active in the view, the widget stays visible at runtime only if one of its words matches |
| Show in Views `multi-views` | select-views | -       | Also shows the widget in the selected views                                                                |
| Locked `locked`             | checkbox     | -       | The widget can no longer be clicked or moved on the editor canvas                                          |

### Visibility

A hidden widget stays visible in the editor, hiding applies at runtime.

| Property                                          | Type                                                                                      | Default | Description                                                                                                |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| Object ID `visibility-oid`                        | id                                                                                        | -       | State whose value the condition checks. Without an ID the condition hides nothing, except with `not exist` |
| Condition `visibility-cond`                       | select (`==`, `!=`, `<=`, `>=`, `<`, `>`, `consist`, `not consist`, `exist`, `not exist`) | `==`    | Comparison of the state value. `exist` and `not exist` only ask whether the state has a value              |
| Value for condition `visibility-val`              | text                                                                                      | 1       | Value to compare with. `==` and `!=` treat `1` like `true` and `0` like `false`                            |
| Only for groups `visibility-groups`               | groups                                                                                    | -       | User groups the widget applies to                                                                          |
| If user not in group `visibility-groups-action`   | select (`hide`, `disabled`)                                                               | `hide`  | Hides the widget for other users or disables it                                                            |
| Only from view width (px) `visibility-min-width`  | number (from 0)                                                                           | -       | Shows the widget only if the view is at least this wide. `0` or empty: no limit                            |
| Only up to view width (px) `visibility-max-width` | number (from 0)                                                                           | -       | Shows the widget only if the view is at most this wide. `0` or empty: no limit                             |

### CSS Common

The widgets of this collection set the default values on creation. Like all CSS fields, they live in the style data of the widget.

| Property     | Type                                                                         | Default    | Description                                                |
| ------------ | ---------------------------------------------------------------------------- | ---------- | ---------------------------------------------------------- |
| `position`   | nselect (empty, `relative`, `sticky`)                                        | `relative` | Empty: absolute positioning                                |
| `display`    | nselect (empty, `inline-block`)                                              | -          | Display type                                               |
| `left`       | dimension                                                                    | -          | Left offset. Hidden with `position` `relative` or `sticky` |
| `top`        | dimension                                                                    | -          | Top offset. Hidden with `position` `relative` or `sticky`  |
| `width`      | dimension                                                                    | `100%`     | Width                                                      |
| `height`     | dimension                                                                    | per widget | Height                                                     |
| `z-index`    | number (-200 to 200)                                                         | -          | Stacking order of elements                                 |
| `overflow-x` | nselect (empty, `visible`, `hidden`, `scroll`, `auto`, `initial`, `inherit`) | -          | Behavior on horizontal content overflow                    |
| `overflow-y` | nselect (like `overflow-x`)                                                  | -          | Behavior on vertical content overflow                      |
| `opacity`    | text                                                                         | -          | Transparency (0-1)                                         |
| `cursor`     | auto (CSS cursor values)                                                     | -          | Mouse cursor style                                         |
| `transform`  | text                                                                         | -          | CSS transformations (rotate, scale, translate, etc.)       |

### CSS Font & Text

| Property         | Type                                                                                 | Default | Description                                                                  |
| ---------------- | ------------------------------------------------------------------------------------ | ------- | ---------------------------------------------------------------------------- |
| `color`          | color                                                                                | -       | Text color. Applies while [Text color](#characteristics) is empty            |
| `text-align`     | nselect (empty, `left`, `right`, `center`, `justify`, `initial`, `inherit`)          | -       | Text alignment                                                               |
| `text-shadow`    | text                                                                                 | -       | Text shadow                                                                  |
| `font-family`    | auto (available fonts)                                                               | -       | Font family                                                                  |
| `font-style`     | nselect (empty, `normal`, `italic`, `oblique`, `initial`, `inherit`)                 | -       | Font style                                                                   |
| `font-variant`   | nselect (empty, `normal`, `small-caps`, `initial`, `inherit`)                        | -       | Font variant                                                                 |
| `font-weight`    | auto (`normal`, `bold`, `bolder`, `lighter`, `initial`, `inherit`)                   | -       | Font weight, can also be typed as a number (100-900)                         |
| `font-size`      | auto (`medium`, `xx-small` to `xx-large`, `smaller`, `larger`, `initial`, `inherit`) | -       | Font size. Applies while `headerSize`, `valueSize` or `footerSize` are empty |
| `line-height`    | text                                                                                 | -       | Line height                                                                  |
| `letter-spacing` | text                                                                                 | -       | Letter spacing                                                               |
| `word-spacing`   | text                                                                                 | -       | Word spacing                                                                 |

### CSS Background

| Property                | Type                                                                                 | Default | Description                                             |
| ----------------------- | ------------------------------------------------------------------------------------ | ------- | ------------------------------------------------------- |
| `background`            | text                                                                                 | -       | Background as CSS shorthand                             |
| `background-color`      | color                                                                                | -       | Background color                                        |
| `background-image`      | text                                                                                 | -       | Background image (URL)                                  |
| `background-repeat`     | nselect (empty, `repeat`, `repeat-x`, `repeat-y`, `no-repeat`, `initial`, `inherit`) | -       | Repetition of background image                          |
| `background-attachment` | nselect (empty, `scroll`, `fixed`, `local`, `initial`, `inherit`)                    | -       | Scroll behavior                                         |
| `background-position`   | text                                                                                 | -       | Position of background image                            |
| `background-size`       | text                                                                                 | -       | Size of background image (auto, cover, contain, custom) |
| `background-clip`       | nselect (empty, `border-box`, `padding-box`, `content-box`, `initial`, `inherit`)    | -       | Painting area of the background                         |
| `background-origin`     | nselect (empty, `padding-box`, `border-box`, `content-box`, `initial`, `inherit`)    | -       | Reference area of the background image                  |

### CSS Border

| Property        | Type                                                                                                   | Default | Description                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------ | ------- | -------------------------------------------------------------- |
| `border-width`  | text                                                                                                   | -       | Border width (top, right, bottom, left)                        |
| `border-style`  | nselect (empty, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset`, `outset`, `hidden`) | -       | Border style                                                   |
| `border-color`  | color                                                                                                  | -       | Border color                                                   |
| `border-radius` | text                                                                                                   | -       | Corner radius (top-left, top-right, bottom-right, bottom-left) |

### CSS Padding & Shadow

| Property         | Type | Default | Description                              |
| ---------------- | ---- | ------- | ---------------------------------------- |
| `padding`        | text | -       | Inner spacing (top, right, bottom, left) |
| `padding-left`   | text | -       | Inner spacing left                       |
| `padding-top`    | text | -       | Inner spacing top                        |
| `padding-right`  | text | -       | Inner spacing right                      |
| `padding-bottom` | text | -       | Inner spacing bottom                     |
| `box-shadow`     | text | -       | Shadow around the element                |
| `margin-left`    | text | -       | Outer spacing left                       |
| `margin-top`     | text | -       | Outer spacing top                        |
| `margin-right`   | text | -       | Outer spacing right                      |
| `margin-bottom`  | text | -       | Outer spacing bottom                     |

### Show Last Change

The display appears only with an ID in `lc-oid`. vis-2 places it absolutely to the left or right of the widget.

| Property                         | Type                                | Default       | Description                                                             |
| -------------------------------- | ----------------------------------- | ------------- | ----------------------------------------------------------------------- |
| Object ID `lc-oid`               | id                                  | -             | OID of the state whose last change should be displayed                  |
| Type `lc-type`                   | select (`last-change`, `timestamp`) | `last-change` | Shows `lc` or `ts` of the state                                         |
| Interval `lc-is-interval`        | checkbox                            | true          | Shows the elapsed time instead of the date                              |
| Use Moment.js `lc-is-moment`     | checkbox                            | false         | Words the elapsed time with Moment.js. Only works with `lc-is-interval` |
| Time format `lc-format`          | auto (date formats)                 | -             | Formatting of date and time. Empty: date format of the system           |
| Position vert `lc-position-vert` | select (`top`, `middle`, `bottom`)  | `top`         | Vertical position                                                       |
| Position horz `lc-position-horz` | select (`left`, `right`)            | `right`       | Side next to the widget                                                 |
| Offset Y `lc-offset-vert`        | slider (-120 to 120)                | 0             | Vertical offset in px                                                   |
| Offset X `lc-offset-horz`        | slider (-120 to 120)                | 0             | Horizontal offset in px                                                 |
| font-size `lc-font-size`         | auto (CSS font sizes)               | `12px`        | Font size                                                               |
| font-family `lc-font-family`     | auto (available fonts)              | -             | Font family. Empty: Tahoma                                              |
| font-style `lc-font-style`       | auto (CSS font styles)              | -             | Font style                                                              |
| background `lc-bkg-color`        | color                               | -             | Background color. Empty: semi-transparent gray                          |
| color `lc-color`                 | color                               | -             | Text color                                                              |
| border-width `lc-border-width`   | text                                | 0             | Border width                                                            |
| border-style `lc-border-style`   | auto (CSS border styles)            | -             | Border style                                                            |
| border-color `lc-border-color`   | color                               | -             | Border color                                                            |
| border-radius `lc-border-radius` | slider (0 to 20)                    | 10            | Radius of the corners on the side facing away from the widget           |
| padding `lc-padding`             | slider (0 to 20)                    | 3             | Inner spacing in px                                                     |
| zindex `lc-zindex`               | slider (-10 to 20)                  | 0             | Stacking order                                                          |

### Notification Icons

A widget shows up to six signals. `{i}` stands for the signal number 0 to 5; from signal 3 on, the panel shows the key instead of the label for the fields with "[i]". A signal appears only with an ID in `signals-oid-{i}`. At runtime it appears when its condition is met, in the editor always, unless `signals-hide-edit-{i}` is active.

| Property                                    | Type                            | Default | Description                                                                                   |
| ------------------------------------------- | ------------------------------- | ------- | --------------------------------------------------------------------------------------------- |
| Number of signals `signals-count`           | select (`0` to `6`)             | `0`     | Shows the fields of the signals                                                               |
| Object ID [i] `signals-oid-{i}`             | id                              | -       | State whose value the condition checks                                                        |
| Condition [i] `signals-cond-{i}`            | select (like `visibility-cond`) | `==`    | Comparison of the state value                                                                 |
| Value for condition [i] `signals-val-{i}`   | text                            | `true`  | Value to compare with                                                                         |
| Icon path [i] `signals-icon-{i}`            | image                           | -       | Signal image. Hidden while `signals-smallIcon-{i}` is set                                     |
| Small icon `signals-smallIcon-{i}`          | icon64                          | -       | Signal icon. Hidden while `signals-icon-{i}` is set                                           |
| Color `signals-color-{i}`                   | color                           | -       | Color of small icon and text. Only visible with `signals-smallIcon-{i}` or `signals-text-{i}` |
| Icon size in px[i] `signals-icon-size-{i}`  | slider (1 to 120)               | 0       | Width of the image in px. `0`: 32 px                                                          |
| CSS icon style [i] `signals-icon-style-{i}` | text                            | -       | CSS text for image and text of the signal                                                     |
| Text or template `signals-text-{i}`         | text                            | -       | Text below the image. `%s` inserts the current state value                                    |
| CSS text style [i] `signals-text-style-{i}` | text                            | -       | CSS text for the text                                                                         |
| Classes [i] `signals-text-class-{i}`        | text                            | -       | CSS classes. The React widget does not read the field                                         |
| Blinking [i] `signals-blink-{i}`            | checkbox                        | false   | Makes the signal blink                                                                        |
| Horizontal[i] `signals-horz-{i}`            | slider (-20 to 120)             | 0       | Left offset in percent of the widget                                                          |
| Vertical [i] `signals-vert-{i}`             | slider (-20 to 120)             | 0       | Top offset in percent of the widget                                                           |
| Hide by edit [i] `signals-hide-edit-{i}`    | checkbox                        | false   | Hides the signal in the editor                                                                |

## Common Settings (all widgets)

These settings are in the **Common** group of every widget in the collection. The Theme Studio does not have them. The ECharts widget hides `icon`, `iconSmall`, `iconSize`, `enableIconColorMask`, `iconColor`, `iconXOffset`, `iconYOffset`, `noHeaderIcon` and `valueSize` because they have no effect there; stored values stay.

### Icon

These fields concern the corner icon at the top right of the frame's content area. It shows the icon of the active state, otherwise the base icon. The Gauge widget replaces it with the icon of the active highlight zone. The ECharts widget and the view frame of the Dialog widget have none.

| Field Name                              | Type           | Default | Description                                                                                                                                                                                                           |
| --------------------------------------- | -------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Icon `icon`                             | image          | -       | Image file, takes precedence over `iconSmall`. Picking the main OID overwrites the field with `common.icon` of the object or its nearest parent object, without a match with `null`. Emptying the main OID removes it |
| Small icon `iconSmall`                  | icon64         | -       | SVG from the icon picker, stored as a Base64 value. Applies while `icon` is empty                                                                                                                                     |
| Icon size `iconSize`                    | slider (1-500) | -       | Height in percent of 24 px, without a value 24 px. Hidden with `noIcon` (State, Input)                                                                                                                                |
| Enable color mask `enableIconColorMask` | checkbox       | false   | Also colors a URL icon with `iconColor`                                                                                                                                                                               |
| Icon color `iconColor`                  | color          | -       | Solid colors only. Without a value the primary color of the theme. Always colors Base64 icons, URL icons only with `enableIconColorMask`                                                                              |
| Icon X offset `iconXOffset`             | text           | 0px     | Horizontal offset as a CSS length, positive to the right. Hidden with `noIcon` (State, Input)                                                                                                                         |
| Icon Y offset `iconYOffset`             | text           | 0px     | Vertical offset as a CSS length, positive upward. Hidden with `noIcon` (State, Input)                                                                                                                                 |

### Header

Frame header and footer appear only while the main OID has a valid type, otherwise the frame shows a hint instead. Both always take the base text color `textColor`, no color from a row.

| Field Name                    | Type           | Default | Description                                                                                                                                          |
| ----------------------------- | -------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| No header `noHeader`          | checkbox       | false   | Hides the frame header. The corner icon stays                                                                                                        |
| No header icon `noHeaderIcon` | checkbox       | false   | Hides the corner icon. Hidden with `noHeader`, a stored value keeps working                                                                          |
| Header text `header`          | html           | -       | Text of the frame header, HTML allowed, line breaks are dropped. Without text the name of the object. Hidden with `noHeader`                         |
| Header size `headerSize`      | slider (0-500) | -       | `100` equals 0.875 rem. Without a value `font-size` from [CSS Font & Text](#css-font--text), otherwise the font of the theme. Hidden with `noHeader` |

### Value

The displayed text is the alias of the active row, otherwise its value, otherwise the current value of the OID with its unit. Alias and value exist per row only, see [Value-specific Settings](#value-specific-settings).

| Field Name             | Type           | Default | Description                                                                                                                  |
| ---------------------- | -------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Value size `valueSize` | slider (0-500) | -       | `100` equals 0.875 rem. Without a value `font-size` from [CSS Font & Text](#css-font--text), otherwise the font of the theme |

### Footer

| Field Name               | Type           | Default | Description                                                                                                                                          |
| ------------------------ | -------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| No footer `noFooter`     | checkbox       | false   | Hides the frame footer                                                                                                                               |
| Footer text `footer`     | html           | -       | Text of the frame footer, HTML allowed, line breaks are dropped. Without text the displayed text from [Value](#value). Hidden with `noFooter`        |
| Footer size `footerSize` | slider (0-500) | -       | `100` equals 0.875 rem. Without a value `font-size` from [CSS Font & Text](#css-font--text), otherwise the font of the theme. Hidden with `noFooter` |

### Characteristics

The widget consists of the frame area and the content area inside it.

| Field Name                     | Type                    | Default | Description                                                                                                                                                                                                                      |
| ------------------------------ | ----------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Without border `noCard`        | checkbox                | false   | The frame area fills the widget without the surrounding gap of 4 px, the content area is transparent without `background`. The frame area keeps painting `frameBackground`. A widget embedded in another widget behaves the same |
| Squared corner `squaredCorner` | checkbox                | false   | Square instead of rounded corners on both areas                                                                                                                                                                                  |
| Text color `textColor`         | color                   | -       | Text color (gradient possible). Without a value `color` from [CSS Font & Text](#css-font--text), otherwise the text color of the theme                                                                                           |
| Outlined `outlined`            | checkbox                | false   | Content area with a line instead of a shadow, `baseElevation` then has no effect                                                                                                                                                 |
| Outlined frame `outlinedFrame` | checkbox                | false   | Frame area with a line instead of a shadow                                                                                                                                                                                       |
| Padding `basePadding`          | slider (0-10, step 0.1) | 1       | Gap between frame and content area in MUI spacing units. At `0` the content area has square corners                                                                                                                              |
| Elevation `baseElevation`      | slider (0-24)           | 4       | MUI elevation of the content area                                                                                                                                                                                                |

### Geometry

The panel offers one shape at a time: while one is active, it hides the other two. The shapes concern the content area.

| Field Name        | Type     | Default | Description                                                        |
| ----------------- | -------- | ------- | ------------------------------------------------------------------ |
| Square `square`   | checkbox | false   | Square, the edge length is the shorter side of the available space |
| Ellipse `ellipse` | checkbox | false   | Full size with `border-radius: 50%`                                |
| Circle `circle`   | checkbox | -       | Square like `square`, with `border-radius: 50%`                    |

### Background

| Field Name              | Type  | Default | Description                                                                                                            |
| ----------------------- | ----- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| Background `background` | color | -       | Color of the content area (gradient possible). Without a value the paper color of the theme, with `noCard` transparent |

### Frame Background

| Field Name                         | Type  | Default | Description                                                                               |
| ---------------------------------- | ----- | ------- | ----------------------------------------------------------------------------------------- |
| Frame background `frameBackground` | color | -       | Color of the frame area (gradient possible). Without a value the paper color of the theme |

### Write Value

These settings control how value changes are written to the OID. They are in the widget group of the widgets that write values (State, Switch, Slider, Input, Select, RadioGroup, Checkbox, ButtonGroup, Light). In active push-button mode of the State widget they are hidden.

| Field Name                           | Type             | Default | Description                                                         |
| ------------------------------------ | ---------------- | ------- | ------------------------------------------------------------------- |
| Interval `sampleInterval`            | checkbox         | false   | Interval mode instead of delay                                      |
| Interval value `sampleIntervalValue` | number (0-10000) | 200     | Interval in milliseconds. Only visible with active `sampleInterval` |
| Delay `delay`                        | number (0-10000) | 300     | Delay in milliseconds. Only visible with inactive `sampleInterval`  |

- **Delay**: Waits the specified time after the last change, then the widget writes the last value. Each new change resets the timer. A moved slider, for example, writes only once it rests.
- **Interval (sampleInterval)**: The first change starts the interval, at its end the widget writes the last value. This repeats as long as changes arrive. Useful for feedback during operation, for example when moving a slider.
- **Values**: `0` writes without waiting. An empty or non-numeric field counts as its default.
- **Display**: The widget shows the new value at once, before writing it.
- **No write**: An OID with `write: false` receives no value, nor does a value that cannot be converted to the type of the OID.
- **Echo**: After a change in the widget, a change of the OID does not count as a change from outside for `delay` + 1500 ms. `delay` counts here in interval mode too; `0` counts as 300.
- **Widget removed**: When the widget is removed, for example by a view change, it sends a value still waiting at once. A changed OID or wait time drops it.

**Recommendation:** For most use cases, delay is sufficient, it writes less often. Interval is only worthwhile when updates during operation are required.

### Value-specific Settings

In the state editor, the **Values** group, each row overrides Common fields with its field number as suffix `{n}`. The widgets with rows name their particulars on their own page.

| Field Name                                                                                                                         | Type            | Default | Description                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------ |
| Alias `alias{n}`                                                                                                                   | html            | -       | Displayed text of the row, HTML allowed. Empty or only spaces: the value                                                 |
| Value `value{n}`                                                                                                                   | text            | -       | Value of the state. A row without a value does not count at runtime. Hidden with a main OID of type boolean              |
| Icon fields `icon{n}`, `iconSmall{n}`, `iconSize{n}`, `enableIconColorMask{n}`, `iconColor{n}`, `iconXOffset{n}`, `iconYOffset{n}` | like base field | -       | Icon of the row. `enableIconColorMask{n}` is only usable with an icon color set, an active base color mask or a URL icon |
| Text fields `header{n}`, `headerSize{n}`, `valueSize{n}`, `footer{n}`, `footerSize{n}`                                             | like base field | -       | Texts and sizes of the row. Fields of frame header and footer: hidden with `noHeader` and `noFooter` respectively        |
| Color fields `textColor{n}`, `background{n}`, `frameBackground{n}`                                                                 | like base field | -       | Colors of the row (gradient possible). Without a value the color field shows the color inherited from the base field     |

Slider and ButtonGroup additionally have the **Active** group with the same fields and the suffix `Active`; ButtonGroup without `aliasActive`, both without `valueActive`. A row is active when its value matches the current value of the OID. The frame also takes the fields of the **Active** group while no row is active.

**Order:** `xActive`, then `x{n}` of the active state, then the base field `x`, then vis-2 CSS or the theme, as far as the field names them. The Slider puts the marker fields before the base field for its marks.

**Exceptions:**

- **Corner icon**: It takes size, offset and color mask from the base fields only. Conversely, the icons in the content do not fall back on the base field for `iconXOffset{n}`, `iconYOffset{n}` and `enableIconColorMask{n}`, so that a setting of the corner does not move the content. The same goes for `iconSize{n}`, unless the widget page says otherwise.
- **Frame header and footer**: Their text color comes from `textColor` only, not from `textColor{n}` or `textColorActive`.
- **Alias and value**: They have no base field.
- **Switches**: `noHeader`, `noHeaderIcon`, `noFooter`, `noCard`, `squaredCorner`, `outlined`, `outlinedFrame`, `basePadding`, `baseElevation`, `square`, `ellipse` and `circle` do not exist per row.

### Gradient Syntax

Fields marked with "(gradient possible)" support CSS gradients in addition to simple colors.

#### Linear Gradients

Syntax: `linear-gradient(direction, color1, color2, ...)`

**Examples:**

```css
/* Horizontal from left to right */
linear-gradient(90deg, #ff0000, #0000ff)

/* Vertical from top to bottom */
linear-gradient(180deg, #00ff00, #ffff00)

/* Diagonal */
linear-gradient(45deg, #ff00ff, #00ffff)

/* Multiple color stops */
linear-gradient(90deg, #ff0000 0%, #00ff00 50%, #0000ff 100%)
```

#### Radial Gradients

Syntax: `radial-gradient(circle, color1, color2, ...)`

**Note:** The color picker creates circular radial gradients only and always writes `radial-gradient(circle, ...)` on a change. `ellipse` or a position (`at ...`) can only be typed as text and are lost on the next change in the color picker.

**Examples:**

```css
/* Circular */
radial-gradient(circle, #ff0000, #0000ff)

/* With position */
radial-gradient(circle at center, #ff00ff, #00ffff)
```

#### Applicable Fields

The following fields support gradients:

- **Common Settings**: `background`, `frameBackground`, `textColor`, also with the suffix `{n}` or `Active`; `iconColor` takes solid colors only
- **Slider Widget**: `sliderColor`, `thumbColor`, `thumbBorderColor`, `trackBackgroundColor`, `trackBorderColor`, `railBackgroundColor`, `railBorderColor`, `markBackgroundColor`, `markerTextColor`

**Note:** These fields open the color picker with the Solid/Gradient switch. In the text field, any CSS color the browser accepts applies, as well as `linear-gradient(...)` and `radial-gradient(...)`. `conic-gradient(...)` and `repeating-...-gradient(...)` count as invalid; invalid input is marked and not stored. An emptied field inherits again. Where only a solid color can be drawn, such as lines and shadows, the color at the middle of the gradient applies.

## Widget Overview

The Widget Collection includes the following widgets:

- [State Widget](En-State-Widget.md) - Display and control of states (boolean, number, string, mixed)
- [Switch Widget](En-Switch-Widget.md) - Switch for boolean values
- [Checkbox Widget](En-Checkbox-Widget.md) - Checkbox for boolean values
- [Slider Widget](En-Slider-Widget.md) - Slider for numeric values
- [Input Widget](En-Input-Widget.md) - Text/number input for string, number, and mixed
- [ButtonGroup Widget](En-ButtonGroup-Widget.md) - Button group for various data types
- [Select Widget](En-Select-Widget.md) - Dropdown selection for various data types
- [RadioGroup Widget](En-RadioGroup-Widget.md) - Radio group for various data types
- [Dialog Widget](En-Dialog-Widget.md) - Dialog for displaying views
- [Gauge Widget](En-Gauge-Widget.md) - Gauge for displaying numeric values (Linear/Radial)
- [Light Widget](En-Light-Widget.md) - Light control with color selection
- [JSON Table Widget](En-JsonTable-Widget.md) - Table widget for JSON data with sorting, filtering, and pagination
- [ECharts Widget](En-Echarts-Widget.md) - Charts (line, bar, scatter, pie) with a full configurator — history adapter or JSON datapoint
- [ECharts JSON Formats](En-Echarts-JSON-Formats.md) - The JSON payload formats of the ECharts widget, with examples
- [Theme Studio](En-Theme-Studio.md) - Collection-wide theme editor (colors, typography, shape) for all widgets of the collection
