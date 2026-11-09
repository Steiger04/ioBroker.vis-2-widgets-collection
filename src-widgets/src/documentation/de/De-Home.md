# ioBroker.vis-2 Widget Collection - Benutzerhandbuch

Dokumentation der Widget Collection für ioBroker.vis-2. Diese Seite beschreibt die Einstellungen, die alle Widgets teilen, die Widget-Seiten das, was dazukommt.

## Prinzip der Einstellungen

Die Einstellungen folgen einer klaren Hierarchie vom Allgemeinen zum Spezifischen:

1. **vis-2 Einstellungen** - Stellt vis-2 für jedes Widget bereit
2. **Common Einstellungen** - Gemeinsame Einstellungen der Widgets dieser Sammlung
3. **Widget-spezifische Einstellungen** - Spezifisch für den jeweiligen Widget-Typ
4. **Value-spezifische Einstellungen** - Individuelle Einstellungen je Zustandszeile

**Wichtig:** Ein gesetzter spezifischerer Wert überschreibt den allgemeineren, ein leerer Wert reicht an die nächste Stufe weiter. Die Ausnahmen stehen unter [Value-spezifische Einstellungen](#value-spezifische-einstellungen).

Die Tabellen nennen zuerst das Label aus dem Attribut-Panel, dahinter den Schlüssel in den Widget-Daten. Standard- und Optionswerte stehen als gespeicherte Rohwerte da. „-“ heißt: kein fester Standard, was dann gilt, steht in der Beschreibung.

## vis-2 Einstellungen (immer verfügbar)

Diese Einstellungen stellt vis-2 selbst für jedes Widget bereit. Im Attribut-Panel stehen **Generell** und **Sichtbarkeit** vor den Gruppen des Widgets, die übrigen dahinter. Hat ein Feld kein eigenes Label, zeigt das Panel den Schlüssel; er steht dann allein in der Tabelle.

### Generell

| Eigenschaft                  | Typ          | Standard | Beschreibung                                                                                                  |
| ---------------------------- | ------------ | -------- | ------------------------------------------------------------------------------------------------------------- |
| Name `name`                  | text         | -        | Name des Widgets                                                                                              |
| Kommentar `comment`          | text         | -        | Freier Kommentar                                                                                              |
| CSS Klasse `class`           | class        | -        | Zusätzliche CSS-Klassen am Widget-Element                                                                     |
| Filterwort `filterkey`       | filters      | -        | Ist in der View ein Filter aktiv, bleibt das Widget zur Laufzeit nur sichtbar, wenn eines seiner Wörter passt |
| Zeige in Views `multi-views` | select-views | -        | Zeigt das Widget zusätzlich in den gewählten Views                                                            |
| Inaktiv(locked) `locked`     | checkbox     | -        | Das Widget lässt sich im Editor auf der Fläche nicht mehr anklicken oder verschieben                          |

### Sichtbarkeit

Ein ausgeblendetes Widget bleibt im Editor sichtbar, die Ausblendung gilt zur Laufzeit.

| Eigenschaft                                                   | Typ                                                                                       | Standard | Beschreibung                                                                                            |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------- |
| Object ID `visibility-oid`                                    | id                                                                                        | -        | State, dessen Wert die Bedingung prüft. Ohne ID blendet die Bedingung nichts aus, außer bei `not exist` |
| Bedingung `visibility-cond`                                   | select (`==`, `!=`, `<=`, `>=`, `<`, `>`, `consist`, `not consist`, `exist`, `not exist`) | `==`     | Vergleich des State-Werts. `exist` und `not exist` fragen nur, ob der State einen Wert hat              |
| Wert für die Bedingung `visibility-val`                       | text                                                                                      | 1        | Vergleichswert. `==` und `!=` behandeln `1` wie `true` und `0` wie `false`                              |
| Nur für Gruppen `visibility-groups`                           | groups                                                                                    | -        | Benutzergruppen, für die das Widget gilt                                                                |
| Falls Anwender nicht in der Gruppe `visibility-groups-action` | select (`hide`, `disabled`)                                                               | `hide`   | Blendet das Widget für andere Benutzer aus oder deaktiviert es                                          |
| Erst ab Seitenbreite (px) `visibility-min-width`              | number (ab 0)                                                                             | -        | Zeigt das Widget nur, wenn die View mindestens so breit ist. `0` oder leer: keine Grenze                |
| Nur bis Seitenbreite (px) `visibility-max-width`              | number (ab 0)                                                                             | -        | Zeigt das Widget nur, wenn die View höchstens so breit ist. `0` oder leer: keine Grenze                 |

### CSS Allgemein

Die Standardwerte setzen die Widgets dieser Sammlung beim Anlegen. Sie liegen wie alle CSS-Felder in den Style-Daten des Widgets.

| Eigenschaft  | Typ                                                                         | Standard   | Beschreibung                                                         |
| ------------ | --------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------- |
| `position`   | nselect (leer, `relative`, `sticky`)                                        | `relative` | Leer: absolute Positionierung                                        |
| `display`    | nselect (leer, `inline-block`)                                              | -          | Anzeigeart                                                           |
| `left`       | dimension                                                                   | -          | Linker Abstand. Ausgeblendet bei `position` `relative` oder `sticky` |
| `top`        | dimension                                                                   | -          | Oberer Abstand. Ausgeblendet bei `position` `relative` oder `sticky` |
| `width`      | dimension                                                                   | `100%`     | Breite                                                               |
| `height`     | dimension                                                                   | je Widget  | Höhe                                                                 |
| `z-index`    | number (-200 bis 200)                                                       | -          | Stapelreihenfolge der Elemente                                       |
| `overflow-x` | nselect (leer, `visible`, `hidden`, `scroll`, `auto`, `initial`, `inherit`) | -          | Verhalten bei horizontalem Inhaltsüberlauf                           |
| `overflow-y` | nselect (wie `overflow-x`)                                                  | -          | Verhalten bei vertikalem Inhaltsüberlauf                             |
| `opacity`    | text                                                                        | -          | Transparenz (0-1)                                                    |
| `cursor`     | auto (CSS-Cursorwerte)                                                      | -          | Mauszeiger-Stil                                                      |
| `transform`  | text                                                                        | -          | CSS-Transformationen (rotate, scale, translate, etc.)                |

### CSS Font & Text

| Eigenschaft      | Typ                                                                                   | Standard | Beschreibung                                                                   |
| ---------------- | ------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------ |
| `color`          | color                                                                                 | -        | Textfarbe. Gilt, wenn [Textfarbe](#ausprägungen) leer ist                      |
| `text-align`     | nselect (leer, `left`, `right`, `center`, `justify`, `initial`, `inherit`)            | -        | Textausrichtung                                                                |
| `text-shadow`    | text                                                                                  | -        | Textschatten                                                                   |
| `font-family`    | auto (verfügbare Schriften)                                                           | -        | Schriftart                                                                     |
| `font-style`     | nselect (leer, `normal`, `italic`, `oblique`, `initial`, `inherit`)                   | -        | Schriftstil                                                                    |
| `font-variant`   | nselect (leer, `normal`, `small-caps`, `initial`, `inherit`)                          | -        | Schriftvariante                                                                |
| `font-weight`    | auto (`normal`, `bold`, `bolder`, `lighter`, `initial`, `inherit`)                    | -        | Schriftstärke, auch als Zahl (100-900) eingebbar                               |
| `font-size`      | auto (`medium`, `xx-small` bis `xx-large`, `smaller`, `larger`, `initial`, `inherit`) | -        | Schriftgröße. Gilt, wenn `headerSize`, `valueSize` oder `footerSize` leer sind |
| `line-height`    | text                                                                                  | -        | Zeilenhöhe                                                                     |
| `letter-spacing` | text                                                                                  | -        | Buchstabenabstand                                                              |
| `word-spacing`   | text                                                                                  | -        | Wortabstand                                                                    |

### CSS Hintergrund

| Eigenschaft             | Typ                                                                                 | Standard | Beschreibung                                              |
| ----------------------- | ----------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- |
| `background`            | text                                                                                | -        | Hintergrund als CSS-Kurzform                              |
| `background-color`      | color                                                                               | -        | Hintergrundfarbe                                          |
| `background-image`      | text                                                                                | -        | Hintergrundbild (URL)                                     |
| `background-repeat`     | nselect (leer, `repeat`, `repeat-x`, `repeat-y`, `no-repeat`, `initial`, `inherit`) | -        | Wiederholung des Hintergrundbilds                         |
| `background-attachment` | nselect (leer, `scroll`, `fixed`, `local`, `initial`, `inherit`)                    | -        | Scroll-Verhalten                                          |
| `background-position`   | text                                                                                | -        | Position des Hintergrundbilds                             |
| `background-size`       | text                                                                                | -        | Größe des Hintergrundbilds (auto, cover, contain, custom) |
| `background-clip`       | nselect (leer, `border-box`, `padding-box`, `content-box`, `initial`, `inherit`)    | -        | Malbereich des Hintergrunds                               |
| `background-origin`     | nselect (leer, `padding-box`, `border-box`, `content-box`, `initial`, `inherit`)    | -        | Bezugsbereich des Hintergrundbilds                        |

### CSS Ränder

| Eigenschaft     | Typ                                                                                                   | Standard | Beschreibung                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------ |
| `border-width`  | text                                                                                                  | -        | Rahmenbreite (top, right, bottom, left)                      |
| `border-style`  | nselect (leer, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset`, `outset`, `hidden`) | -        | Rahmenstil                                                   |
| `border-color`  | color                                                                                                 | -        | Rahmenfarbe                                                  |
| `border-radius` | text                                                                                                  | -        | Eckenradius (top-left, top-right, bottom-right, bottom-left) |

### CSS Schatten und Abstand

| Eigenschaft      | Typ  | Standard | Beschreibung                            |
| ---------------- | ---- | -------- | --------------------------------------- |
| `padding`        | text | -        | Innenabstand (top, right, bottom, left) |
| `padding-left`   | text | -        | Innenabstand links                      |
| `padding-top`    | text | -        | Innenabstand oben                       |
| `padding-right`  | text | -        | Innenabstand rechts                     |
| `padding-bottom` | text | -        | Innenabstand unten                      |
| `box-shadow`     | text | -        | Schatten um das Element                 |
| `margin-left`    | text | -        | Außenabstand links                      |
| `margin-top`     | text | -        | Außenabstand oben                       |
| `margin-right`   | text | -        | Außenabstand rechts                     |
| `margin-bottom`  | text | -        | Außenabstand unten                      |

### Zeige letzte Änderung

Die Anzeige erscheint nur mit einer ID in `lc-oid`. vis-2 setzt sie absolut links oder rechts neben das Widget.

| Eigenschaft                      | Typ                                 | Standard      | Beschreibung                                                                 |
| -------------------------------- | ----------------------------------- | ------------- | ---------------------------------------------------------------------------- |
| Objekt ID `lc-oid`               | id                                  | -             | OID des Zustands, dessen letzte Änderung angezeigt werden soll               |
| Typ `lc-type`                    | select (`last-change`, `timestamp`) | `last-change` | Zeigt `lc` oder `ts` des Zustands                                            |
| Intervall `lc-is-interval`       | checkbox                            | true          | Zeigt die vergangene Zeit statt des Datums                                   |
| Benutze Moment.js `lc-is-moment` | checkbox                            | false         | Formuliert die vergangene Zeit mit Moment.js. Wirkt nur mit `lc-is-interval` |
| Zeitformat `lc-format`           | auto (Datumsformate)                | -             | Formatierung von Datum und Uhrzeit. Leer: Datumsformat des Systems           |
| Position vert `lc-position-vert` | select (`top`, `middle`, `bottom`)  | `top`         | Vertikale Position                                                           |
| Position horz `lc-position-horz` | select (`left`, `right`)            | `right`       | Seite neben dem Widget                                                       |
| Offset y `lc-offset-vert`        | slider (-120 bis 120)               | 0             | Vertikaler Versatz in px                                                     |
| Offset x `lc-offset-horz`        | slider (-120 bis 120)               | 0             | Horizontaler Versatz in px                                                   |
| font-size `lc-font-size`         | auto (CSS-Schriftgrößen)            | `12px`        | Schriftgröße                                                                 |
| font-family `lc-font-family`     | auto (verfügbare Schriften)         | -             | Schriftart. Leer: Tahoma                                                     |
| font-style `lc-font-style`       | auto (CSS-Schriftstile)             | -             | Schriftstil                                                                  |
| background `lc-bkg-color`        | color                               | -             | Hintergrundfarbe. Leer: halbtransparentes Grau                               |
| color `lc-color`                 | color                               | -             | Textfarbe                                                                    |
| border-width `lc-border-width`   | text                                | 0             | Rahmenbreite                                                                 |
| border-style `lc-border-style`   | auto (CSS-Rahmenstile)              | -             | Rahmenstil                                                                   |
| border-color `lc-border-color`   | color                               | -             | Rahmenfarbe                                                                  |
| border-radius `lc-border-radius` | slider (0 bis 20)                   | 10            | Radius der Ecken an der vom Widget abgewandten Seite                         |
| padding `lc-padding`             | slider (0 bis 20)                   | 3             | Innenabstand in px                                                           |
| zindex `lc-zindex`               | slider (-10 bis 20)                 | 0             | Stapelreihenfolge                                                            |

### Signalbilder

Ein Widget zeigt bis zu sechs Signale. `{i}` steht für die Signalnummer 0 bis 5; ab Signal 3 zeigt das Panel bei den Feldern mit „[i]“ den Schlüssel statt des Labels. Ein Signal erscheint nur mit einer ID in `signals-oid-{i}`. Zur Laufzeit erscheint es, wenn seine Bedingung zutrifft, im Editor immer, außer `signals-hide-edit-{i}` ist aktiv.

| Eigenschaft                                           | Typ                            | Standard | Beschreibung                                                                                        |
| ----------------------------------------------------- | ------------------------------ | -------- | --------------------------------------------------------------------------------------------------- |
| Anzahl der Signale `signals-count`                    | select (`0` bis `6`)           | `0`      | Blendet die Felder der Signale ein                                                                  |
| Objekt ID [i] `signals-oid-{i}`                       | id                             | -        | State, dessen Wert die Bedingung prüft                                                              |
| Bedingung [i] `signals-cond-{i}`                      | select (wie `visibility-cond`) | `==`     | Vergleich des State-Werts                                                                           |
| Wert für die Bedingung [i] `signals-val-{i}`          | text                           | `true`   | Vergleichswert                                                                                      |
| Bild [i] `signals-icon-{i}`                           | image                          | -        | Signalbild. Ausgeblendet, wenn `signals-smallIcon-{i}` gesetzt ist                                  |
| Kleines Symbol `signals-smallIcon-{i}`                | icon64                         | -        | Signal-Icon. Ausgeblendet, wenn `signals-icon-{i}` gesetzt ist                                      |
| Farbe `signals-color-{i}`                             | color                          | -        | Farbe von kleinem Symbol und Text. Nur sichtbar mit `signals-smallIcon-{i}` oder `signals-text-{i}` |
| Bildgröße in px [i] `signals-icon-size-{i}`           | slider (1 bis 120)             | 0        | Breite des Bilds in px. `0`: 32 px                                                                  |
| CSS Bildstil [i] `signals-icon-style-{i}`             | text                           | -        | CSS-Text für Bild und Text des Signals                                                              |
| Text oder Vorlage `signals-text-{i}`                  | text                           | -        | Text unter dem Bild. `%s` setzt den aktuellen State-Wert ein                                        |
| CSS Textstil [i] `signals-text-style-{i}`             | text                           | -        | CSS-Text für den Text                                                                               |
| Klassen [i] `signals-text-class-{i}`                  | text                           | -        | CSS-Klassen. Das React-Widget wertet das Feld nicht aus                                             |
| Blinken [i] `signals-blink-{i}`                       | checkbox                       | false    | Lässt das Signal blinken                                                                            |
| Horizontale [i] `signals-horz-{i}`                    | slider (-20 bis 120)           | 0        | Linker Abstand in Prozent des Widgets                                                               |
| Vertikale [i] `signals-vert-{i}`                      | slider (-20 bis 120)           | 0        | Oberer Abstand in Prozent des Widgets                                                               |
| Nicht bei Editieren zeigen[i] `signals-hide-edit-{i}` | checkbox                       | false    | Blendet das Signal im Editor aus                                                                    |

## Common Einstellungen (alle Widgets)

Diese Einstellungen stehen in der Gruppe **Allgemein** jedes Widgets der Sammlung. Das Theme-Studio hat sie nicht. Das ECharts-Widget blendet `icon`, `iconSmall`, `iconSize`, `enableIconColorMask`, `iconColor`, `iconXOffset`, `iconYOffset`, `noHeaderIcon` und `valueSize` aus, weil sie dort nicht wirken; gespeicherte Werte bleiben erhalten.

### Icon

Diese Felder betreffen das Eck-Icon oben rechts in der Inhaltsfläche des Rahmens. Es zeigt das Icon des aktiven Zustands, sonst das Basis-Icon. Das Gauge-Widget ersetzt es durch das Icon der aktiven Highlight-Zone. Das ECharts-Widget und der Ansichtsrahmen des Dialog-Widgets haben keines.

| Feldname                                   | Typ            | Standard | Beschreibung                                                                                                                                                                                                         |
| ------------------------------------------ | -------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Icon `icon`                                | image          | -        | Bilddatei, hat Vorrang vor `iconSmall`. Die Wahl der Haupt-OID überschreibt das Feld mit `common.icon` des Objekts oder seines nächsten Elternobjekts, ohne Treffer mit `null`. Das Leeren der Haupt-OID entfernt es |
| Kleines Icon `iconSmall`                   | icon64         | -        | SVG aus dem Icon-Wähler, als Base64-Wert gespeichert. Gilt, wenn `icon` leer ist                                                                                                                                     |
| Icongröße `iconSize`                       | slider (1-500) | -        | Höhe in Prozent von 24 px, ohne Wert 24 px. Ausgeblendet bei `noIcon` (State, Input)                                                                                                                                 |
| Farbmaske aktivieren `enableIconColorMask` | checkbox       | false    | Färbt auch ein URL-Icon mit `iconColor`                                                                                                                                                                              |
| Iconfarbe `iconColor`                      | color          | -        | Nur Vollfarbe. Ohne Wert die Primärfarbe des Themes. Färbt Base64-Icons immer, URL-Icons nur mit `enableIconColorMask`                                                                                               |
| Icon X Offset `iconXOffset`                | text           | 0px      | Horizontaler Versatz als CSS-Länge, positiv nach rechts. Ausgeblendet bei `noIcon` (State, Input)                                                                                                                    |
| Icon Y Offset `iconYOffset`                | text           | 0px      | Vertikaler Versatz als CSS-Länge, positiv nach oben. Ausgeblendet bei `noIcon` (State, Input)                                                                                                                        |

### Header

Kopf- und Fußzeile erscheinen nur, solange die Haupt-OID einen gültigen Typ hat, sonst zeigt der Rahmen stattdessen einen Hinweis. Beide nehmen immer die Basis-Textfarbe `textColor`, keine Farbe aus einer Zustandszeile.

| Feldname                       | Typ            | Standard | Beschreibung                                                                                                                                        |
| ------------------------------ | -------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kein Header `noHeader`         | checkbox       | false    | Blendet die Kopfzeile aus. Das Eck-Icon bleibt                                                                                                      |
| Kein Headericon `noHeaderIcon` | checkbox       | false    | Blendet das Eck-Icon aus. Ausgeblendet bei `noHeader`, ein gespeicherter Wert wirkt weiter                                                          |
| Headertext `header`            | html           | -        | Text der Kopfzeile, HTML erlaubt, Zeilenumbrüche entfallen. Ohne Text der Name des Objekts. Ausgeblendet bei `noHeader`                             |
| Headertextgröße `headerSize`   | slider (0-500) | -        | `100` entspricht 0,875 rem. Ohne Wert `font-size` aus [CSS Font & Text](#css-font--text), sonst die Schrift des Themes. Ausgeblendet bei `noHeader` |

### Wert

Der angezeigte Text ist der Alias der aktiven Zustandszeile, sonst ihr Wert, sonst der aktuelle Wert der OID mit Einheit. Alias und Wert gibt es nur je Zustandszeile, siehe [Value-spezifische Einstellungen](#value-spezifische-einstellungen).

| Feldname                  | Typ            | Standard | Beschreibung                                                                                                           |
| ------------------------- | -------------- | -------- | ---------------------------------------------------------------------------------------------------------------------- |
| Werttextgröße `valueSize` | slider (0-500) | -        | `100` entspricht 0,875 rem. Ohne Wert `font-size` aus [CSS Font & Text](#css-font--text), sonst die Schrift des Themes |

### Footer

| Feldname                     | Typ            | Standard | Beschreibung                                                                                                                                        |
| ---------------------------- | -------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kein Footer `noFooter`       | checkbox       | false    | Blendet die Fußzeile aus                                                                                                                            |
| Footertext `footer`          | html           | -        | Text der Fußzeile, HTML erlaubt, Zeilenumbrüche entfallen. Ohne Text der angezeigte Text aus [Wert](#wert). Ausgeblendet bei `noFooter`             |
| Footertextgröße `footerSize` | slider (0-500) | -        | `100` entspricht 0,875 rem. Ohne Wert `font-size` aus [CSS Font & Text](#css-font--text), sonst die Schrift des Themes. Ausgeblendet bei `noFooter` |

### Ausprägungen

Das Widget besteht aus der Rahmenfläche und der Inhaltsfläche darin.

| Feldname                        | Typ                        | Standard | Beschreibung                                                                                                                                                                                                                                         |
| ------------------------------- | -------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ohne Rand `noCard`              | checkbox                   | false    | Die Rahmenfläche füllt das Widget ohne den umlaufenden Abstand von 4 px, die Inhaltsfläche ist ohne `background` transparent. Die Rahmenfläche zeichnet weiter `frameBackground`. Ein in ein anderes Widget eingebettetes Widget verhält sich ebenso |
| Ecken `squaredCorner`           | checkbox                   | false    | Eckige Ecken statt abgerundeter für beide Flächen                                                                                                                                                                                                    |
| Textfarbe `textColor`           | color                      | -        | Textfarbe (Gradient möglich). Ohne Wert `color` aus [CSS Font & Text](#css-font--text), sonst die Textfarbe des Themes                                                                                                                               |
| Outlined `outlined`             | checkbox                   | false    | Inhaltsfläche mit Linie statt Schatten, `baseElevation` wirkt dann nicht                                                                                                                                                                             |
| Outlined Rahmen `outlinedFrame` | checkbox                   | false    | Rahmenfläche mit Linie statt Schatten                                                                                                                                                                                                                |
| Padding `basePadding`           | slider (0-10, Schritt 0.1) | 1        | Abstand zwischen Rahmen- und Inhaltsfläche in MUI-Spacing-Einheiten. Bei `0` ist die Inhaltsfläche eckig                                                                                                                                             |
| Elevation `baseElevation`       | slider (0-24)              | 4        | MUI-Elevation der Inhaltsfläche                                                                                                                                                                                                                      |

### Geometrie

Das Panel bietet immer nur eine Form an: Ist eine aktiv, blendet es die beiden anderen aus. Die Formen betreffen die Inhaltsfläche.

| Feldname          | Typ      | Standard | Beschreibung                                                           |
| ----------------- | -------- | -------- | ---------------------------------------------------------------------- |
| Quadrat `square`  | checkbox | false    | Quadratisch, Kantenlänge ist die kürzere Seite des verfügbaren Platzes |
| Ellipse `ellipse` | checkbox | false    | Volle Größe mit `border-radius: 50%`                                   |
| Kreis `circle`    | checkbox | -        | Quadratisch wie `square`, mit `border-radius: 50%`                     |

### Hintergrund

| Feldname                 | Typ   | Standard | Beschreibung                                                                                               |
| ------------------------ | ----- | -------- | ---------------------------------------------------------------------------------------------------------- |
| Hintergrund `background` | color | -        | Farbe der Inhaltsfläche (Gradient möglich). Ohne Wert die Papierfarbe des Themes, bei `noCard` transparent |

### Rahmenhintergrund

| Feldname                            | Typ   | Standard | Beschreibung                                                                    |
| ----------------------------------- | ----- | -------- | ------------------------------------------------------------------------------- |
| Rahmenhintergrund `frameBackground` | color | -        | Farbe der Rahmenfläche (Gradient möglich). Ohne Wert die Papierfarbe des Themes |

### Wert schreiben

Diese Einstellungen steuern, wie Wertänderungen an die OID geschrieben werden. Sie stehen in der Widget-Gruppe der Widgets, die Werte schreiben (State, Switch, Slider, Input, Select, RadioGroup, Checkbox, ButtonGroup, Light). Im aktiven Taster-Modus des State-Widgets sind sie ausgeblendet.

| Feldname                            | Typ              | Standard | Beschreibung                                                              |
| ----------------------------------- | ---------------- | -------- | ------------------------------------------------------------------------- |
| Intervall `sampleInterval`          | checkbox         | false    | Intervall-Modus statt Verzögerung                                         |
| Intervallwert `sampleIntervalValue` | number (0-10000) | 200      | Intervall in Millisekunden. Nur sichtbar bei aktivem `sampleInterval`     |
| Verzögerung `delay`                 | number (0-10000) | 300      | Verzögerung in Millisekunden. Nur sichtbar bei inaktivem `sampleInterval` |

- **Verzögerung (delay)**: Wartet nach der letzten Änderung die angegebene Zeit, dann schreibt das Widget den letzten Wert. Jede neue Änderung setzt den Timer zurück. So schreibt etwa ein bewegter Slider erst, wenn er ruht.
- **Intervall (sampleInterval)**: Die erste Änderung startet das Intervall, an seinem Ende schreibt das Widget den letzten Wert. Das wiederholt sich, solange Änderungen eintreffen. Nützlich für Rückmeldung während der Bedienung, etwa beim Bewegen eines Sliders.
- **Werte**: `0` schreibt ohne Wartezeit. Ein leeres oder nicht numerisches Feld gilt als sein Standard.
- **Anzeige**: Das Widget zeigt den neuen Wert sofort, schon vor dem Schreiben.
- **Kein Schreiben**: Eine OID mit `write: false` bekommt keinen Wert, ebenso wenig ein Wert, der sich nicht in den Typ der OID wandeln lässt.
- **Echo**: Nach einer Änderung im Widget zählt eine Änderung der OID für `delay` + 1500 ms nicht als Änderung von außen. `delay` zählt hier auch im Intervall-Modus; `0` zählt als 300.
- **Widget entfernt**: Wird das Widget entfernt, etwa durch einen Ansichtswechsel, sendet es einen noch wartenden Wert sofort. Eine geänderte OID oder Wartezeit verwirft ihn.

**Empfehlung:** Für die meisten Anwendungsfälle reicht die Verzögerung, sie schreibt seltener. Das Intervall lohnt sich nur, wenn Aktualisierungen während der Bedienung nötig sind.

### Value-spezifische Einstellungen

Im Zustandseditor, der Gruppe **Werte**, überschreibt jede Zustandszeile Common-Felder mit ihrer Feldnummer als Suffix `{n}`. Die Widgets mit Zustandszeilen nennen ihre Besonderheiten auf der eigenen Seite.

| Feldname                                                                                                                           | Typ           | Standard | Beschreibung                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| Alias `alias{n}`                                                                                                                   | html          | -        | Angezeigter Text der Zeile, HTML erlaubt. Leer oder nur Leerzeichen: der Wert                                           |
| Wert `value{n}`                                                                                                                    | text          | -        | Wert des Zustands. Eine Zeile ohne Wert zählt zur Laufzeit nicht. Ausgeblendet bei einer Haupt-OID vom Typ boolean      |
| Icon-Felder `icon{n}`, `iconSmall{n}`, `iconSize{n}`, `enableIconColorMask{n}`, `iconColor{n}`, `iconXOffset{n}`, `iconYOffset{n}` | wie Basisfeld | -        | Icon der Zeile. `enableIconColorMask{n}` ist nur nutzbar mit gesetzter Iconfarbe, aktiver Basis-Farbmaske oder URL-Icon |
| Text-Felder `header{n}`, `headerSize{n}`, `valueSize{n}`, `footer{n}`, `footerSize{n}`                                             | wie Basisfeld | -        | Texte und Größen der Zeile. Felder zu Kopf- und Fußzeile: ausgeblendet bei `noHeader` beziehungsweise `noFooter`        |
| Farb-Felder `textColor{n}`, `background{n}`, `frameBackground{n}`                                                                  | wie Basisfeld | -        | Farben der Zeile (Gradient möglich). Ohne Wert zeigt das Farbfeld die geerbte Farbe des Basisfelds                      |

Slider und ButtonGroup haben zusätzlich die Gruppe **Aktiv** mit denselben Feldern und dem Suffix `Active`; ButtonGroup ohne `aliasActive`, beide ohne `valueActive`. Eine Zustandszeile ist aktiv, wenn ihr Wert dem aktuellen Wert der OID entspricht. Der Rahmen nimmt die Felder der Gruppe **Aktiv** auch, solange keine Zeile aktiv ist.

**Reihenfolge:** `xActive`, dann `x{n}` des aktiven Zustands, dann das Basisfeld `x`, dann vis-2 CSS oder Theme, soweit das Feld es nennt. Der Slider setzt bei seinen Marken die Marker-Felder vor das Basisfeld.

**Ausnahmen:**

- **Eck-Icon**: Größe, Versatz und Farbmaske nimmt es nur aus den Basisfeldern. Umgekehrt fallen die Icons im Inhalt für `iconXOffset{n}`, `iconYOffset{n}` und `enableIconColorMask{n}` nicht auf das Basisfeld zurück, damit eine Einstellung der Ecke den Inhalt nicht verschiebt. Für `iconSize{n}` gilt das ebenso, außer die Widget-Seite nennt es anders.
- **Kopf- und Fußzeile**: Ihre Textfarbe kommt nur aus `textColor`, nicht aus `textColor{n}` oder `textColorActive`.
- **Alias und Wert**: Sie haben kein Basisfeld.
- **Schalter**: `noHeader`, `noHeaderIcon`, `noFooter`, `noCard`, `squaredCorner`, `outlined`, `outlinedFrame`, `basePadding`, `baseElevation`, `square`, `ellipse` und `circle` gibt es nicht je Zeile.

### Gradient-Syntax

Felder mit der Kennzeichnung "(Gradient möglich)" unterstützen CSS-Gradienten zusätzlich zu einfachen Farben.

#### Linear-Gradienten

Syntax: `linear-gradient(Richtung, Farbe1, Farbe2, ...)`

**Beispiele:**

```css
/* Horizontal von links nach rechts */
linear-gradient(90deg, #ff0000, #0000ff)

/* Vertikal von oben nach unten */
linear-gradient(180deg, #00ff00, #ffff00)

/* Diagonal */
linear-gradient(45deg, #ff00ff, #00ffff)

/* Mehrere Farbstopps */
linear-gradient(90deg, #ff0000 0%, #00ff00 50%, #0000ff 100%)
```

#### Radial-Gradienten

Syntax: `radial-gradient(circle, Farbe1, Farbe2, ...)`

**Hinweis:** Der Farbwähler erzeugt nur kreisförmige Radial-Gradienten und schreibt beim Ändern immer `radial-gradient(circle, ...)`. `ellipse` oder eine Position (`at ...`) lassen sich nur als Text eingeben und gehen beim nächsten Ändern im Farbwähler verloren.

**Beispiele:**

```css
/* Kreisförmig */
radial-gradient(circle, #ff0000, #0000ff)

/* Mit Position */
radial-gradient(circle at center, #ff00ff, #00ffff)
```

#### Anwendbare Felder

Folgende Felder unterstützen Gradienten:

- **Common Einstellungen**: `background`, `frameBackground`, `textColor`, auch mit Suffix `{n}` oder `Active`; `iconColor` nimmt nur Vollfarben
- **Slider Widget**: `sliderColor`, `thumbColor`, `thumbBorderColor`, `trackBackgroundColor`, `trackBorderColor`, `railBackgroundColor`, `railBorderColor`, `markBackgroundColor`, `markerTextColor`

**Hinweis:** Diese Felder öffnen den Farbwähler mit der Umschaltung Solid/Gradient. Im Textfeld gilt jede CSS-Farbe, die der Browser annimmt, sowie `linear-gradient(...)` und `radial-gradient(...)`. `conic-gradient(...)` und `repeating-...-gradient(...)` gelten als ungültig; eine ungültige Eingabe wird markiert und nicht gespeichert. Ein geleertes Feld erbt wieder. Wo sich nur eine Vollfarbe zeichnen lässt, etwa bei Linien und Schatten, gilt die Farbe in der Mitte des Gradienten.

## Widget-Übersicht

Die Widget Collection umfasst folgende Widgets:

- [State Widget](De-State-Widget.md) - Anzeige und Steuerung von Zuständen (boolean, number, string, mixed)
- [Switch Widget](De-Switch-Widget.md) - Schalter für boolesche Werte
- [Checkbox Widget](De-Checkbox-Widget.md) - Checkbox für boolesche Werte
- [Slider Widget](De-Slider-Widget.md) - Schieberegler für numerische Werte
- [Input Widget](De-Input-Widget.md) - Text-/Zahl-Eingabe für string, number und mixed
- [ButtonGroup Widget](De-ButtonGroup-Widget.md) - Button-Gruppe für verschiedene Datentypen
- [Select Widget](De-Select-Widget.md) - Dropdown-Auswahl für verschiedene Datentypen
- [RadioGroup Widget](De-RadioGroup-Widget.md) - Radio-Gruppe für verschiedene Datentypen
- [Dialog Widget](De-Dialog-Widget.md) - Dialog zur Anzeige von Views
- [Gauge Widget](De-Gauge-Widget.md) - Gauge zur Anzeige numerischer Werte (Linear/Radial)
- [Light Widget](De-Light-Widget.md) - Lichtsteuerung mit Farbauswahl
- [JSON Table Widget](De-JsonTable-Widget.md) - Tabellen-Widget für JSON-Daten mit Sortierung, Filterung und Paginierung
- [ECharts Widget](De-Echarts-Widget.md) - Diagramme (Linie, Balken, Punktwolke, Torte) mit vollem Konfigurator — History-Adapter oder JSON-Datenpunkt
- [ECharts JSON-Formate](De-Echarts-JSON-Formate.md) - Die JSON-Payload-Formate des ECharts-Widgets mit Beispielen
- [Theme-Studio](De-Theme-Studio.md) - Collection-weiter Theme-Editor (Farben, Schrift, Form) für alle Widgets der Sammlung
