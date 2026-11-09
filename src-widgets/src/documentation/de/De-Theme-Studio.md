# Theme-Studio

![Theme-Studio](../img/theme-studio.png)

## Beschreibung

Das Theme-Studio ist der collection-weite Theme-Editor der Widget Collection: Es gestaltet Farben, Schrift, Formen und Abstände **aller** Widgets dieser Sammlung (State, Switch, …, ECharts) gleichzeitig, live auf der offenen vis-2-Ansicht.

Es ist **kein Widget**: Man zieht es nicht auf die Canvas, sondern öffnet es im vis-2-Edit-Modus über den Button **Theme-Studio** in der Widget-Palette (Gruppe „Widget-Sammlung“). Es erscheint als schwebendes, verschieb- und größenänderbares Fenster. Das Fenster selbst folgt dem Hell/Dunkel-Modus des vis-2-Editors, nicht dem bearbeiteten Theme.

Das fertige Theme wird als JSON im Datenpunkt `vis-2-widgets-collection.0.theme` gespeichert (siehe [unten](#das-theme-im-datenpunkt)); jedes Collection-Widget liest ihn und legt ihn über das vis-2-Theme. Mitgelieferte Vorlagen liefern Startpunkte.

## Öffnen und Bedienung

- **Öffnen:** vis-2-Edit-Modus → Widget-Palette → Gruppe „Widget-Sammlung“ → **Theme-Studio**. Das Fenster öffnet sich sofort mit dem zuletzt bekannten Theme und liest den Datenpunkt im Hintergrund; das Gelesene ersetzt den Entwurf nur, solange er unberührt ist. Ist seit dem Laden der Seite noch kein Theme bekannt, erscheint bis zur Antwort eine Ladeanzeige. Jedes Öffnen beginnt neu: Alle Sektionen sind zugeklappt, der Verlauf für Rückgängig ist leer.
- **Unabhängig von der Palette:** Das Studio bleibt offen, wenn die Palette eingeklappt, gefiltert oder ausgeblendet wird, beim Wechsel der Ansicht und im Run-Modus (▶). Ein erneuter Klick auf den Button öffnet kein zweites Studio, sondern holt das offene nach vorn.
- **Live-Vorschau ist die Canvas:** Es gibt keine Komponenten-Vorschau im Fenster; jedes Collection-Widget der offenen Ansicht übernimmt die Änderungen live, höchstens alle 100 ms. Bis zum **Speichern** schreibt das Studio nichts in den Datenpunkt. Der Entwurf gilt nur in diesem Browser-Tab, andere Clients sehen das Theme erst nach dem Speichern. Bei **Abbrechen** schnappt alles auf das gespeicherte Theme zurück.
- **Titelleiste:** Ziehen zum Verschieben, ein Punkt neben dem Titel zeigt ungespeicherte Änderungen an. **Rückgängig/Wiederholen** (bis 50 Schritte; `Strg+Z` / `Strg+Umschalt+Z` / `Strg+Y`; aufeinanderfolgende Änderungen derselben Einstellung im Abstand unter 800 ms, z. B. ein Slider-Zug, ergeben einen Schritt) und **Schließen** (wie Abbrechen; auch `Esc`). Die Tastenkürzel wirken nur, solange der Fokus im Studio liegt; außerhalb bleiben `Esc` und Rückgängig dem vis-2-Editor. In einem Eingabefeld gilt für Rückgängig und Wiederholen das Verhalten des Felds.
- **Größe:** Acht Kanten- und Ecken-Griffe ändern die Größe wie ein Fenster des Betriebssystems (Kanten per Pfeiltasten ±16 px, mit `Umschalt` ±64 px, `Pos1`/`Ende` für Minimum/Maximum, Doppelklick = zurücksetzen; Ecken per Maus). Das Fenster startet oben rechts mit 380 px Breite; die Breite reicht von 320 px bis Fensterbreite − 48 px, die Höhe von 240 px bis Fensterhöhe − 48 px. Die Höhe folgt standardmäßig dem Inhalt (**Auto**, bis 80 % der Fensterhöhe); der erste Höhen-Griff fixiert sie, ein Doppelklick auf eine waagerechte Kante stellt Auto wieder her. Position und Größe bleiben je Browser über Sitzungen erhalten (localStorage).
- **Fußleiste:**
    - **Alles auf Standard** — leert **alle** Angaben, auch geladene Google-Schriften und CSS-Variablen (`{}` = alles erbt; ein Undo-Schritt, also umkehrbar). Inaktiv, solange der Entwurf leer ist
    - **„1 Problem“ / „%s Probleme“** — erscheint bei Validierungsfehlern; ein Klick klappt die betroffene Sektion auf und springt zum ersten Fehler
    - **Abbrechen** — verwirft die Änderungen (mit Rückfrage, solange ungespeicherte Änderungen offen sind) und schließt das Studio
    - **Speichern** — schreibt den Datenpunkt einmal und schließt das Studio; erst aktiv, wenn es etwas zu speichern gibt, und gesperrt, solange Validierungsfehler offen sind. Bei einem Verbindungsfehler erscheint eine Meldung und das Studio bleibt offen. Eine Änderung während des Schreibens ist nicht gespeichert; auch dann bleibt das Studio offen
- Solange ungespeicherte Änderungen offen sind, warnt der Browser beim Neuladen oder Schließen des Tabs. Rückgängig bis zum Ausgangsstand gilt als keine Änderung.

## Vorlagen

Einklappbare Sektion (beim Öffnen zu). Die Zusammenfassung zeigt die aktive Vorlage („Graphit · aktiv“), „eigene Farben“ oder „(Standard)“, solange keine Farbe gesetzt ist; ein gesetzter Farbmodus allein zählt nicht als Farbe.

Neun kuratierte Farb-Themes als Karten — **Graphit, Abendrot, Tageslicht, Salbei, Mono, Smaragd, Amethyst, Rubin, Bernstein** — mit Mini-Farbmustern (Grundfläche, Widget-Fläche, Primär, Sekundär) und Hell/Dunkel-Icon. Hell sind Tageslicht und Salbei, die übrigen dunkel. Als aktiv markiert ist die Karte, deren fünf Werte (Farbmodus, Primärfarbe, Sekundärfarbe, Grundfläche, Widget-Fläche) alle gelten; die Groß- und Kleinschreibung von Hex-Werten zählt dabei nicht.

**Nur die Farben:** Eine Vorlage setzt **nur diese fünf Werte**. Gesetzte Trennlinie, Status- und Textfarben sowie Schrift, Eckradien, Abstandseinheit und CSS-Variablen-Einstellungen bleiben erhalten. Eine Vorlage anwenden ist ein Undo-Schritt.

## Farbfelder

Alle Farbfelder der Sektionen **Farben** und **Status & Text** funktionieren gleich:

- Das Feld zeigt die **effektive Farbe** — gesetzt oder geerbt, so wie sie auf der Canvas wirkt. Bei gesetzten Werten erscheint der Papierkorb-Button **Auf Standard zurücksetzen**; er stellt das Feld wieder auf Erben.
- Ein Klick auf die Zeile öffnet den **Farbwähler**, nur mit Vollfarben; er bietet die aktuellen Theme-Farben als Musterreihe an.
- Daneben steht der **Farbwert** in Festbreitenschrift, direkt editier- und kopierbar: Hex in Kleinbuchstaben, andere Schreibweisen wie eingegeben. `Enter` oder Verlassen des Felds übernimmt, `Esc` stellt den alten Wert wieder her und schließt das Studio nicht, ein geleertes Feld setzt die Farbe auf Erben zurück. Eine ungültige Eingabe wird direkt am Feld gemeldet.
- Das **?** daneben erklärt, wo die Farbe wirkt (Wirkort).

Abgeleitete Werte sind im Label gekennzeichnet: Die Sekundärfarbe trägt „· aus Primär abgeleitet“, solange sie aus einer gesetzten Primärfarbe berechnet wird; Text (primär) trägt „· folgt Primär“, solange er erbt.

Farbverläufe sind ungültig: Grundfläche, Widget-Fläche, Trennlinie und die Textfarben melden „Muss eine Farbe sein (kein Farbverlauf)“, Primär, Sekundär und die Statusfarben „Falscher Werttyp“. Für Primär, Sekundär und die Statusfarben braucht es einen rechenbaren Wert (Hex, `rgb()`, `hsl()`); Farbnamen wie `red` und `transparent` meldet das Studio dort als Fehler. Den Wert behält der Farbwert-Text zum Korrigieren, der Swatch zeigt derweil die geerbte Farbe, die auch die Canvas malt.

## Sektion Farben

| Einstellung   | Theme-Pfad                   | Wirkort                                                                                                                                                                                                                                                                |
| ------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Farbmodus     | `palette.mode`               | **Automatisch** · Hell · Dunkel. Automatisch folgt vis-2 und speichert nichts; darunter steht der wirksame Modus („folgt vis-2: Dunkel“)                                                                                                                               |
| Primärfarbe   | `palette.primary.main`       | Hauptakzent: aktive Zustände, Icon-Standardfarbe, erste Reihenfarbe der Diagramm-Palette „Theme (auto)“                                                                                                                                                                |
| Sekundärfarbe | `palette.secondary.main`     | Zweiter Akzent: zweite Reihenfarbe der Diagramm-Palette „Theme (auto)“; andere Widgets verwenden sie nicht. Mit gesetzter Primärfarbe ohne eigene Wahl triadisch daraus berechnet (Farbton +120°, Sättigung mindestens 40 %), sonst die Sekundärfarbe des vis-2-Themes |
| Grundfläche   | `palette.background.default` | Hintergrund des Dialog-Widgets, wenn dort keine Rahmenfarbe gesetzt ist; dann auch Farbe seines Schließen-Buttons, solange der keine eigene hat                                                                                                                        |
| Widget-Fläche | `palette.background.paper`   | Rahmenfläche und Inhaltsfläche der Widgets (Standard von **Rahmenhintergrund** und **Hintergrund**, solange sie erben) — der wichtigste Hebel für dunkle Themes                                                                                                        |
| Trennlinie    | `palette.divider`            | Ränder und Trennlinien; Standard der Tabellenlinien im JSON-Table-Widget sowie von Diagrammrahmen, Achsen, Schwellenlinien und Legendenrahmen                                                                                                                          |

Gruppen: **Akzente** (Primär, Sekundär) und **Flächen** (Grundfläche, Widget-Fläche, Trennlinie). Die Zusammenfassung zeigt Modus, Primär- und Sekundärfarbe.

## Sektion Schrift & Form

| Einstellung                              | Theme-Pfad                                       | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Schriftfamilie                           | `typography.fontFamily`                          | **Standard (vis-2-Theme)** (erbt die Schrift von vis-2, speichert nichts) · **Mitgeliefert** (mit der Sammlung ausgeliefert, offline und überall gleich: Inter, JetBrains Mono, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Roboto, Roboto Slab) · **System** (auf dem Anzeigegerät installiert: Arial, Helvetica, Segoe UI, Verdana, Tahoma, Trebuchet MS, Calibri, Georgia, Times New Roman, Palatino, Garamond, Cambria, Courier New, Consolas, Lucida Console, System UI, Sans-serif, Serif, Monospace) · **Eigene Schrift…** (freier CSS-Schriftname im Textfeld darunter). Gespeichert wird der CSS-Stack samt Ersatzschriften, z. B. `'Inter', system-ui, sans-serif`. Jeder andere Wert erscheint als Eigene Schrift… und lädt keine mitgelieferte Schrift |
| Google Font                              | `googleFonts`, `typography.fontFamily`           | **Name bei Google Fonts** eintippen (z. B. Roboto, Lato, Open Sans; „Schriften durchsuchen“ öffnet fonts.google.com) und **Laden**. Das Studio lädt die Schrift einmalig von fonts.googleapis.com (Anfrage aus diesem Browser), bettet Regular und Bold des lateinischen Zeichensatzes in den Datenpunkt ein, soweit die Schrift sie hat, und stellt sie als Schriftfamilie `'Name', sans-serif` ein — ein Undo-Schritt. In der Auswahl steht sie danach als Eigene Schrift…. Danach offline verfügbar; der Datenpunkt wächst je Schrift um einige zehn KB. Scheitert das Laden, erscheint die Fehlermeldung am Feld und das Theme bleibt unverändert                                                                                                                                         |
| Geladene Google-Schrift                  | `googleFonts.Name`, `typography.fontFamily`      | Jede geladene Schrift erscheint als Chip: Klick stellt sie als Schriftfamilie ein, ✕ entfernt sie. Zeigt die Schriftfamilie auf die entfernte Schrift, wird sie mit zurückgesetzt                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Basis-Schriftgröße (px)                  | `typography.fontSize`                            | Slider und Zahlenfeld, 8–24 px in Schritten von 0,5, ohne Wert steht dort 14                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Eckradius (px)                           | `corners.topLeft` … `corners.bottomLeft`         | Standardmäßig **verknüpft**: ein Slider (0–96 px in Schritten von 0,5) für alle vier Ecken. Ohne Wert steht dort 4, und es gilt der Radius des vis-2-Themes. Das Ketten-Symbol trennt sie („Ecken einzeln einstellen“) — dann vier Zahlenfelder in Eck-Anordnung (oben links, oben rechts, unten links, unten rechts), eine fehlende Ecke zählt als 4. Ungleiche Ecken gelten nie als verknüpft. Erneutes Verknüpfen („Ecken verknüpfen“) setzt ungleiche Ecken auf den Wert oben links. Die vier Werte wirken auf Rahmen- und Inhaltsflächen der Widgets, andere Komponenten nutzen den Wert oben links                                                                                                                                                                                      |
| Feintuning: Light, Regular, Medium, Bold | `typography.fontWeightLight/Regular/Medium/Bold` | Selten gebraucht, zugeklappt: welche Schriftstärke (100–900, „—“ = ohne Wert) die Widgets für die Rollen Light, Regular, Medium und Bold verwenden. Hinweis: Mitgelieferte Schriften bringen nur echte 400er- und 700er-Schnitte mit; andere Stärken rechnet der Browser künstlich, das wirkt schnell unsauber                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Feintuning: Zeilenhöhe                   | `typography.allVariants.lineHeight`              | Slider und Zahlenfeld, 1–2 in Schritten von 0,05, ohne Wert steht dort 1,43                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

Einen einzelnen Slider-Wert (Schriftgröße, Eckradius, Zeilenhöhe) leert nur **Rückgängig** oder **Alles auf Standard**. Die Zusammenfassung zeigt Schrift, Größe und Eckradius (`r=12`, ungleiche Ecken als oben links/oben rechts/unten rechts/unten links).

## Sektion Status & Text

| Einstellung     | Theme-Pfad               | Wirkort                                                                                                                                            |
| --------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fehlerfarbe     | `palette.error.main`     | Reihenfarbe 6 der Diagramm-Palette „Theme (auto)“ und Fehleranzeigen, z. B. die Fehlermeldung im ECharts-Widget und die rote Linie des Input-Felds |
| Warnfarbe       | `palette.warning.main`   | Reihenfarbe 3 der Diagramm-Palette „Theme (auto)“ und Warnungen, z. B. die Tiefenwarnung im JSON-Table-Widget                                      |
| Infofarbe       | `palette.info.main`      | Reihenfarbe 5 der Diagramm-Palette „Theme (auto)“                                                                                                  |
| Erfolgsfarbe    | `palette.success.main`   | Reihenfarbe 4 der Diagramm-Palette „Theme (auto)“                                                                                                  |
| Text (primär)   | `palette.text.primary`   | Standard aller Textfarben. Folgt ohne eigene Wahl der Primärfarbe, auch der des vis-2-Themes                                                       |
| Text (sekundär) | `palette.text.secondary` | Nebentexte wie Einheiten, Beschriftungen und Hinweise; Standard der Achsentexte im Diagramm und des nicht gewählten Radio-Icons                    |

Gruppen: **Statusfarben** und **Text**. Die Zusammenfassung zählt die gesetzten Farben („x von 6 gesetzt“).

## Sektion Erweitert

| Einstellung              | Theme-Pfad                  | Beschreibung                                                                                                                                                                                                 |
| ------------------------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Abstandseinheit (px)     | `spacing`                   | Basiseinheit aller Innenabstände und Lücken in den Widgets (Slider und Zahlenfeld, 0–16 in Schritten von 0,5, ohne Wert steht dort 8). 2 Einheiten = 16 px bei Einheit 8                                     |
| CSS-Variablen aktivieren | `cssVariables`              | Stellt jeden Theme-Wert als CSS-Variable bereit (z. B. `--vis2c-palette-primary-main`) — für eigenes CSS in vis-2; ohne eigenes CSS nicht nötig. Speichert `true`, Ausschalten entfernt den Pfad samt Präfix |
| CSS-Variablen-Präfix     | `cssVariables.cssVarPrefix` | Nur bei aktivierten CSS-Variablen. Präfix der erzeugten Variablen; leer = `vis2c`. `mui` ist reserviert (der vis-2-Editor definiert `--mui-*` selbst) und wird abgelehnt                                     |

Gruppen: **Layout** und **CSS-Variablen**. Die Variablen liegen auf `:root` und tragen standardmäßig das Präfix `--vis2c`; eigenes CSS liest also `--vis2c-palette-…`. Das Collection-Theme setzt standardmäßig kein `color-scheme` auf `:root`, weil es das des vis-2-Editors überschriebe.

Einen einzelnen Slider-Wert leert auch hier nur **Rückgängig** oder **Alles auf Standard**. Die Zusammenfassung zeigt die Abstandseinheit und ob CSS-Variablen an sind. Einen Schalter für die Textrichtung (RTL) gibt es nicht; ein `direction` im Datenpunkt ist gültig, spiegelt die Widgets aber nicht.

## Das Theme im Datenpunkt

Das Studio speichert in den State **`vis-2-widgets-collection.0.theme`** (Typ `string`): das Theme als JSON-Text. Es ist ein **partielles MUI-`ThemeOptions`-Objekt** plus zwei eigene Erweiterungen (`corners`, `googleFonts`). Jedes Collection-Widget liest und validiert den State beim Start und bei jeder Änderung; ist er ungültig, gilt das Theme als Ganzes als `{}` und das Widget-Theme bleibt beim Host-Standard.

Kompaktes Beispiel (dunkel, eigene Akzente, Inter, Eckradius):

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
    "typography": { "fontFamily": "'Inter', system-ui, sans-serif", "fontSize": 14 },
    "corners": { "topLeft": 12, "topRight": 12, "bottomRight": 12, "bottomLeft": 12 },
    "spacing": 8
}
```

Regeln und Hinweise für Skript-Autoren:

- **Sparse:** Geleerte Felder entfallen komplett (das Studio entfernt leere Pfade). Fehlende Pfade erben; ein minimal gültiges Theme ist `{}`.
- **Validierung:** Farben müssen plain sein (keine Verläufe), Zahlen Zahlen, Werte im Bereich (z. B. Eckradien 0–96, `typography.fontSize` 1–100; das Studio meldet „außerhalb des Bereichs (0–96)“). Unbekannte Pfade erzeugen eine Warnung („unbekannte Einstellung — wird ignoriert“), aber keine Sperre. Warnungen und Fehler ohne eigenes Feld stehen mit ihrem Pfad unten im Fenster. Fehler sperren das Speichern aus dem Studio; einen per Skript geschriebenen ungültigen State öffnet das Studio als leeres Theme, und das nächste Speichern überschreibt ihn.
- **Studio strenger als die Widgets:** Einen nicht rechenbaren Wert bei Primär, Sekundär oder den Statusfarben (`red`) lassen die Widgets nur an diesem Feld erben, das Präfix `mui` ersetzen sie durch `vis2c`; der Rest des Themes gilt weiter. Das Studio zeigt beides als Fehler und speichert erst nach der Korrektur.
- **Direkt schreiben** geht: `setState('vis-2-widgets-collection.0.theme', JSON.stringify(theme), true)` — das Studio liest den State beim Öffnen und arbeitet damit weiter. Danach übernimmt es ihn nicht mehr: Solange es offen ist, gewinnt auf der Canvas der Entwurf, und Speichern überschreibt den geschriebenen Wert.
- **`googleFonts`** (Map aus Schriftname → Liste aus `weight` und `data`, der eingebetteten woff2-Data-URI) verwaltet das Studio allein beim Laden einer Google-Schrift; nicht von Hand editieren (große Base64-Blöcke).

## Verwandte Seiten

- [Home](De-Home.md) — Common-Einstellungen aller Widgets
- [ECharts Widget](De-Echarts-Widget.md) — dessen Sektion Farben nutzt dieses Theme als Palette-Quelle „Theme (auto)“
