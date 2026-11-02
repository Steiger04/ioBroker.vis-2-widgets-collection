# Theme Studio

![Theme Studio](../img/theme-studio.png)

## Beschreibung

Das Theme Studio ist der collection-weite Theme-Editor der Widget Collection: Es gestaltet Farben, Schrift, Formen und Layout-Details **aller** Widgets dieser Sammlung (State, Switch, …, ECharts) gleichzeitig — live auf der offenen vis-2-Ansicht.

Es ist bewusst **kein Widget**: Man zieht es nicht auf die Canvas, sondern öffnet es im vis-2-Edit-Modus über den Button **Theme konfigurieren** in der Widget-Palette (Eintrag „Theme-Konfiguration" der Sammlungs-Gruppe). Es erscheint als schwebendes, verschieb- und größenänderbares Panel.

Das fertige Theme wird als JSON im ioBroker-Datenpunkt `vis-2-widgets-collection.0.theme` gespeichert (siehe [unten](#das-theme-im-datenpunkt)); jedes Collection-Widget liest ihn und wendet ihn über das vis-2-Host-Theme gelegt an. Gelieferte Presets („Vorlagen") liefern Startpunkte.

## Öffnen und Bedienung

- **Öffnen:** vis-2 Edit-Modus → Widget-Palette → Sammlungs-Gruppe → **Theme konfigurieren**. Das Panel öffnet sich sofort mit dem zuletzt bekannten Theme.
- **Live-Vorschau ist die Canvas:** Es gibt absichtlich keine Komponenten-Vorschau im Panel — jedes Collection-Widget der offenen Ansicht re-themet live mit, während editiert wird. Bei **Abbrechen**/Verwerfen schnappt alles auf das gespeicherte Theme zurück.
- **Panel-Fenster:** Titelleiste zum Verschieben (Drag-Handle), **Rückgängig/Wiederholen** (bis 50 Schritte; `Strg+Z` / `Strg+Umschalt+Z` / `Strg+Y`; zusammenhängende Edits — z. B. ein Slider-Drag — verschmelzen zu einem Schritt), Maximieren, Schließen. Acht Kanten-/Ecken-Griffe ändern die Größe wie ein OS-Fenster (Kanten per Pfeiltasten ±16/±64 px, `Pos1`/`Ende`, Doppelklick = Zurücksetzen; Ecken per Maus). Die Höhe folgt standardmäßig dem Inhalt (**Auto** bis 80 % der Fensterhöhe) — der erste Höhen-Griff fixiert sie, ein Doppelklick auf eine waagerechte Kante stellt Auto wieder her. Position und Größe bleiben über Sitzungen erhalten.
- **Fußleiste:**
    - **Zurücksetzen** — leert **alle** Angaben (`{}` = alles erbt; einer Undo-Schritt, also reversibel)
    - **Abbrechen** — verwirft die Änderungen (Rückfrage, solange ungespeicherte Änderungen offen sind) und schließt das Panel
    - **Speichern** — validiert und schreibt den Datenpunkt; bei Verbindungsfehler erscheint eine Meldung. Validierungsfeehler blockieren das Speichern („%s Probleme", die betroffene Sektion klappt auf und springt zum Feld)
- Während ungespeicherte Änderungen offen sind, zeigt das Panel „Ungespeicherte Änderungen" an.

## Vorlagen (Preset-Karten)

Neun kuratierte Farb-Themes als Karten — **Graphit, Sunset, Tageslicht, Salbei, Mono, Smaragd, Amethyst, Rubin, Bernstein** — mit Mini-Farbmustern (Hintergrund/Paper/Primär/Sekundär) und Hell/Dunkel-Icon. Die Karte, deren Palette die aktuelle ist, ist als aktiv markiert.

**Palette-only merge:** Eine Preset-Karte ersetzt **nur die Farben** (inkl. Farbmodus) — Schrift, Eckradien, Abstandsfaktor und CSS-Variablen-Einstellungen überleben die Anwendung. Ein Preset ist ein Undo-Schritt.

## Sektion Farben

Der Farbmodus und die „Hero"-Farben. Jedes Feld zeigt den **effektiven** Wert (Erbe aufgelöst) und markiert explizite Overrides; der Color-Picker bietet die aktuellen Theme-Farben als Swatch-Reihe.

| Einstellung            | Theme-Pfad                   | Beschreibung                                                                                                         |
| ---------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Farbmodus              | `palette.mode`               | Hell · Dunkel · **Automatisch** (folgt dem vis-2-Host; der effektiv wirksame Modus steht darunter)                   |
| Primärfarbe            | `palette.primary.main`       | Hauptakzent (Buttons, aktive Zustände); Standard = MUI-Wert des Farbmodus                                            |
| Sekundärfarbe          | `palette.secondary.main`     | Zweiter Akzent; bis zur ersten eigenen Wahl **abgeleitet** (triadisch aus Primär, als „· abgeleitet" gekennzeichnet) |
| Hintergrund (Standard) | `palette.background.default` | Canvas-Flächen                                                                                                       |
| Hintergrund (Paper)    | `palette.background.paper`   | Karten/Panel-Flächen — der Hebel für dunkle Themes                                                                   |
| Trennlinie             | `palette.divider`            | Ränder und Trennlinien                                                                                               |

Nicht-plain Farben (Verläufe) sind hier ungültig — die Validierung meldet „muss eine Farbe sein".

## Sektion Schrift & Form

| Einstellung    | Theme-Pfad                                                                            | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Schriftfamilie | `typography.fontFamily`                                                               | Quellen: **Gebündelt** (mit der Sammlung ausgeliefert, offline und überall gleich: Inter, JetBrains Mono, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Roboto, Roboto Slab) · **System** (auf dem Anzeigegerät installiert) · **Google** (per Katalog einmal geladen und als woff2 eingebettet — dauerhaft, geräteübergreifend, offline-fähig nach dem ersten Laden) · **Eigen** (freier CSS-Schriftname) |
| Schriftgröße   | `typography.fontSize`                                                                 | Basis-Größe in px (Standard 14, zeigt „Standard (MUI)" bis gesetzt)                                                                                                                                                                                                                                                                                                                                                                 |
| Eckradius (px) | `corners.topLeft` … `corners.bottomLeft`                                              | Vier Ecken einzeln; **Ecken verknüpfen** hängt sie zusammen. Wirkt auf Karten-/Panel-Flächen der Widgets                                                                                                                                                                                                                                                                                                                            |
| Feintuning ↓   | `typography.fontWeightLight/Regular/Medium/Bold`, `typography.allVariants.lineHeight` | Seltene Experten-Knöpfe: die vier Schriftstärken-Selects und der Zeilenhöhen-Slider. Hinweis: gebündelte Fonts liefern nur echte 400er/700er-Schnitte — andere Stärken rechnet der Browser künstlich (wirkt schnell unsauber)                                                                                                                                                                                                       |

## Sektion Status & Text

| Einstellung     | Theme-Pfad               | Beschreibung |
| --------------- | ------------------------ | ------------ |
| Erfolgsfarbe    | `palette.success.main`   | Semantikgrün |
| Fehlerfarbe     | `palette.error.main`     | Semantikrot  |
| Infofarbe       | `palette.info.main`      |              |
| Warnung         | `palette.warning.main`   |              |
| Text (primär)   | `palette.text.primary`   |              |
| Text (sekundär) | `palette.text.secondary` |              |

Die Zusammenfassungszeile zählt die expliziten Overrides („x von 6 gesetzt").

## Sektion Erweitert

| Einstellung              | Theme-Pfad                  | Beschreibung                                                                                                                                                                                  |
| ------------------------ | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Abstandsfaktor           | `spacing`                   | MUIs Abstandsfaktor (Standard 8) — steuert alle Innenabstände, Lücken und Ränder der Komponenten; höher = großzügiger                                                                         |
| CSS-Variablen aktivieren | `cssVariables`              | Erzeugt für jeden Theme-Wert eine CSS-Variable (z. B. `--mui-palette-primary-main`) plus echtes Hell/Dunkel über `color-scheme` — nur nötig, wenn eigenes CSS Theme-Farben referenzieren soll |
| CSS-Variablen-Präfix     | `cssVariables.cssVarPrefix` | Präfix der erzeugten Variablen                                                                                                                                                                |

## Das Theme im Datenpunkt

Das Studio speichert in den State **`vis-2-widgets-collection.0.theme`** (Typ `string`): das Theme als JSON-Text. Es ist ein **partielles MUI-`ThemeOptions`-Objekt** plus zwei eigene Erweiterungen (`corners`, `googleFonts`). Jedes Collection-Widget liest und validiert den State beim Start und bei jeder Änderung; ist er ungültig, bleibt der Widget-Theme beim Host-Standard (Fallback `{}`).

Kompaktes Beispiel (dark, eigene Akzente, Inter, Eckradius — so sieht der State in etwa aus):

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

Regeln und Hinweise für Skript-Autoren:

- **Sparse:** Geleerte Felder entfallen beim Speichern komplett (das Studio purgt leere Pfade). Fehlende Pfade erben — ein minimal gültiges Theme ist `{}`.
- **Validierung:** Farben müssen plain sein (keine Verläufe), Zahlen Zahlen, Werte in Reichweite; unbekannte Pfade erzeugen eine Warnung („wird von MUI evtl. ignoriert") aber kein Block. Fehler blockieren das Speichern aus dem Studio; ein per Skript geschriebener ungültiger State fällt im Widget auf den Host-Standard zurück.
- **Direkt schreiben** geht: `setState('vis-2-widgets-collection.0.theme', JSON.stringify(theme), true)` — das Studio liest den State beim Öffnen und arbeitet damit weiter.
- **`googleFonts`** (Map aus Schriftname → Gewicht + eingebettete woff2-Data-URIs) verwaltet das Studio allein beim Laden eines Google-Fonts — nicht von Hand editieren (große Base64-Blöcke).

## Verwandte Seiten

- [Home](De-Home.md) — Common-Einstellungen aller Widgets
- [ECharts Widget](De-Echarts-Widget.md) — dessen Sektion Farben nutzt dieses Theme als Palette-Quelle „Theme (auto)"
