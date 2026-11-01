# JSON Table Widget

![JSON Table Widget](../img/collection-json-table.png)

## Beschreibung

Das JSON Table Widget zeigt Tabellendaten aus einem JSON-Wert eines ioBroker-Zustands an. Es verwendet TanStack Table v8 (headless) für leistungsstarke Funktionen wie Sortierung, Filterung, Paginierung und Spaltenanpassung. Spalten werden automatisch aus der JSON-Struktur erkannt und können über den visuellen Spalten-Editor umfassend konfiguriert werden.

## Einstellungshierarchie

Dieses Widget verwendet alle **vis-2 Einstellungen** und **Allgemeinen Einstellungen**. Siehe [Home](De-Home.md) für Details.

Die widgetspezifischen Einstellungen überschreiben die allgemeineren Einstellungen.

## Datenquelle

| Feldname | Typ    | Standard | Beschreibung                                          | Bedingung |
| -------- | ------ | -------- | ----------------------------------------------------- | --------- |
| oid      | id     | -        | OID für JSON-Daten (Typ: string, mixed oder json)     | -         |

Die JSON-Daten können sein:
- **Array von Objekten**: Jedes Objekt repräsentiert eine Zeile
- **Einzelnes Objekt**: Wird als eine Zeile angezeigt
- **Verschachtelte Objekte**: Werden automatisch mit konfigurierbarer Tiefe flachgeklopft
- **JSON-String**: Wird automatisch geparst

Alles andere — eine einzelne Zahl, ein Text oder ein Wahrheitswert (auch als JSON), ungültiges JSON, ein leeres Array — zeigt *Keine Daten verfügbar*.

## Spaltenkonfiguration

### Spalten-Editor

| Feldname     | Typ    | Standard | Beschreibung                          | Bedingung |
| ------------ | ------ | -------- | ------------------------------------- | --------- |
| columnConfig | custom | -        | Visueller Spaltenkonfigurations-Editor | -        |

Der Spalten-Editor bietet:
- **Drag & Drop-Neuanordnung**: Spalten durch Ziehen neu anordnen
- **Sichtbarkeit umschalten**: Einzelspalten ein-/ausblenden
- **Spalteneinstellungen**: Beschriftung, Breite, Ausrichtung, Format konfigurieren
- **Bedingte Formatierung**: Stile basierend auf Zellenwerten anwenden
- **Datentyperkennung**: Automatische Erkennung des Datentyps (`string`, `number`, `boolean`, `date`, `image`, `array`, `object`, `null`, `mixed`). Der **erkannte Typ** (detected type) ist ein Hinweis und bestimmt die Voreinstellung des **Formattyps** — er kann aber frei davon abweichen.

> **Welche Spalten die Tabelle zeigt:** Die gespeicherte Spaltenkonfiguration und die in den Daten gefundenen Spalten werden nach einer Regel zusammengeführt, im Editor wie zur Laufzeit: Gespeicherte Spalten, die noch in den Daten sind, behalten Reihenfolge und Einstellungen; ein Feld, das die Daten neu bekommen, erscheint sofort als neue sichtbare Spalte am Ende (Standardeinstellungen) — ohne vorheriges Speichern im Editor; eine gespeicherte Spalte, die die Daten nicht mehr enthalten, wird ausgelassen. Ohne gespeicherte Konfiguration zeigt die Tabelle alle gefundenen Spalten. Der Editor öffnet mit genau dieser Liste; blendet man dort eine neue Spalte aus, wird das mit dem nächsten *Speichern* übernommen.

### Spalteneigenschaften

Jede Spalte kann konfiguriert werden mit:

| Eigenschaft  | Beschreibung                                         |
| ------------ | ---------------------------------------------------- |
| id           | Eindeutige Spaltenkennung (auto-generiert aus JSON)  |
| label        | Anzeigename in der Kopfzeile                         |
| width        | Spaltenbreite (px, % oder auto)                      |
| minWidth     | Minimale Spaltenbreite                               |
| maxWidth     | Maximale Spaltenbreite                               |
| align        | Textausrichtung (left, center, right)                |
| visible      | Spalte ein-/ausblenden                               |
| sortable     | Sortierung für diese Spalte — `true` / `false` / `'auto'` |
| filterable   | Filterung für diese Spalte — `true` / `false` / `'auto'` |
| enableHiding | Spalte über das Spaltenmenü ausblendbar — `true` / `false` / `'auto'` |

> **Smart-Defaults (`'auto'`):** Im Modus `'auto'` (Voreinstellung) folgen Sortier- und Filterbarkeit dem **Effektiven Typ** der Spalte — ihrem Formattyp, wenn einer gesetzt ist, sonst dem erkannten Typ: `string`/`number`/`date` → sortier- und filterbar, `boolean` → nur filterbar, `image`/`array`/`object` → weder noch. Ausblendbar ist per Voreinstellung jede Spalte (`enableHiding: 'auto'`). Eine Überschreibung erlaubt nie mehr als die Tabelle: Solange Sortieren, Spaltenfilter oder Ausblenden für die ganze Tabelle aus sind, bewirkt `true` nichts. Der Bereich *Erweitert* im Spalten-Editor zeigt das Ergebnis pro Spalte.

### Spaltenformatierung

Jede Spalte hat genau einen aktiven **Formattyp** (format type), der bestimmt, wie der Rohwert gerendert wird. Er wird aus dem erkannten Typ vorbelegt, lässt sich aber frei wählen.

| Formattyp | Beschreibung                                         | Wichtigste Optionen                                   |
| --------- | ---------------------------------------------------- | ---------------------------------------------------- |
| String    | Textanzeige, inkl. HTML-Rendering                    | case, prefix, suffix, trim, maxLength, regex, Schriftstil |
| Number    | Zahlenformatierung mit Tausendertrennung             | decimals, prefix, suffix, thousandsSeparator         |
| Boolean   | Boolean als Text                                     | trueText, falseText                                  |
| Date      | Datum/Zeit-Formatierung                              | Format-String (vordefiniert), erkanntes Eingabeformat |
| Image     | Rohwert als Bild/Icon-Grafik rendern                 | size, objectFit, variant, tint, padding, …           |

Details zu den formattypspezifischen Optionen finden sich in den folgenden Unterabschnitten.

### String-Formatierung

| Eigenschaft   | Beschreibung                                                       |
| ------------- | ------------------------------------------------------------------ |
| trim          | Leerzeichen am Anfang/Ende entfernen (vor allen anderen Schritten) |
| regex         | Regex-Teiltreffer extrahieren (zusätzliche Optionen: regexGroup, regexFlags) |
| regexGroup    | Zu verwendende Capture-Gruppe (0 = voller Treffer)                |
| case          | none / upper / lower / title                                       |
| maxLength     | auf N Zeichen kürzen (mit „…")                                     |
| prefix/suffix | Prä-/Suffix an dem Wert                                            |
| fontWeight/fontStyle/fontSize/textColor | Statische Schriftvorgabe (durch bedingte Regeln übersteuerbar) |

> **Hinweis – HTML-Rendering:** String-Zellen rendern HTML-Markup (z. B. `<b>`, `<br>`, `<span style="…">`). Die Werte stammen aus dem eigenen ioBroker-State und gelten als vertrauenswürdig. Bindest du fremde Daten ein, beachte das XSS-Risiko ungefilterten HTMLs.

### Datums-Spalten (Formattyp `date`)

Eine Datums-Spalte liest jeden Rohwert als Zeitpunkt und zeigt ihn im gewählten Ausgabeformat in der Ortszeit des Browsers.

- **Erkannte Datums-Spalten** (erkannter Typ `date`) lesen genau die Muster, die die Erkennung kennt: ISO-8601 mit Zone (`2024-12-01T10:00:00Z`, `…+02:00`), `YYYY-MM-DD`, `dd.MM.yyyy( HH:mm(:ss))`, `MM/dd/yyyy( HH:mm(:ss))` und Epoch-Zahlen (≥ 1e11 → Millisekunden, ≥ 1e9 → Sekunden).
- **Selbst auf `date` gestellte Spalten** lesen zusätzlich, als Ortszeit: ISO ohne Zone (`2024-12-01T10:00`, `…:00`, `…:00.000`), `YYYY-MM-DD HH:mm(:ss)` und Epoch-Strings (nur Ziffern, gleiche Schwellen).
- **Alles andere ist kein Datum** und erscheint als Rohtext — z. B. `1.12.2024`, `Dec 1, 2024`, `2024/12/01`. Der Browser rät nicht mit.

Sortierung, Datumsfilter, Schnellfilter und bedingte Regeln lesen Daten genauso und vergleichen den **lokalen Kalendertag**. Werte, die kein Datum sind, sortieren vor allen Daten. Das Ausgabeformat `ISO-8601 (UTC)` zeigt UTC und kann deshalb um Mitternacht einen anderen Tag zeigen.

### Bild-Spalte (Formattyp `image`)

Eine **Bild-Spalte** rendert jeden Rohwert als Grafik statt als Text. Der Rohwert wird dabei als **visuelle Referenz** gelesen — niemals als Icon-*Name* (`mdi-*`, `fa-*`); es gibt keine Namensauflösung. Unterstützt werden:

- **URL oder Dateipfad** (Bild oder SVG)
- **`data:image/…`-URI**
- **UTF-8-Zeichen** (z. B. ein Emoji)

**Icon vs. Bild** ist eine Unterscheidung auf Wert-Ebene zur Laufzeit, kein eigener Spaltentyp: Ein *Icon* ist ein kleiner monochromer Glyph (SVG-Data-URI oder UTF-8-Zeichen), ein *Bild* ein Rasterfoto (png/jpg/webp/…). Ein konfigurierter Farb-**Tint** wirkt auf beide über eine CSS-Maske (Alpha-Kanal der Quelle) — exakt für monochrome Icons.

| Eigenschaft              | Standard   | Beschreibung                                                |
| ------------------------ | ---------- | ----------------------------------------------------------- |
| size                     | 64         | Rendergröße in px (8–256)                                   |
| objectFit                | contain    | contain / cover / fill (CSS `object-fit`)                   |
| variant                  | square     | square / rounded / circular (Avatar-Form)                   |
| bgColor                  | –          | Avatar-Hintergrundfarbe                                     |
| borderColor / borderWidth | – / –     | Avatarrahmen (nur bei Farbe und Breite > 0)                 |
| tint                     | –          | Farbton via CSS-Maske                                       |
| tooltip                  | true       | Rohwert als Hover-Tooltip anzeigen                          |
| showBroken               | true       | Platzhalter-Icon bei fehlgeschlagener URL                   |
| padding (top/right/bottom/left) | 0 8 0 8 | Innenabstand pro Seite in px (0–64)                   |

**Automatische Erkennung:** Spalten mit URL-, Data-URI- oder Glyph-Werten werden als erkannter Typ `image` erkannt und sofort als Grafik gerendert — ohne manuelle Konfiguration.

**Fallback:** Lässt sich ein Wert nicht als Grafik auflösen, wird er als Text gerendert. Ein leerer Wert zeigt eine leere Zelle, eine defekte URL den Platzhalter. Die Grafik wird XSS-sicher gerendert (nie via `innerHTML`).

### Bedingte Formatierung

Dynamische Stile basierend auf Zellenwerten anwenden:
- **Bedingungen**: Vergleich mit festen Werten oder Schwellwerten (json-logic-Regeln). Der Regel-Editor folgt dem effektiven Typ der Spalte; bei einer Datums-Spalte — erkannt oder selbst gesetzt — vergleichen Regeln den lokalen Kalendertag des Werts als `YYYY-MM-DD`.
- **Stile**: Hintergrundfarbe, Textfarbe, Schriftstärke, Schriftstil
- **Auswertungsmodus** (`cellStyleMode`):

| Modus           | Beschreibung                                                                 |
| --------------- | ---------------------------------------------------------------------------- |
| `first-match` (Standard) | Stoppt bei der ersten treffenden Regel.                             |
| `all-match`     | Alle treffenden Regeln werden angewendet; bei Konflikten gewinnt die Regel mit höherer Priorität (niedrigerer Index). |

- **Visuelle Vorschau**: Effektives Ergebnis sofort sehen

## Funktionen

> **Persistenz:** Die aktuelle Tabellenansicht — Sortierung, aktive Filter, Suchbegriff, Seite und Zeilen pro Seite, Spaltenbreiten und Spaltensichtbarkeit — bleibt über Seiten-Reloads erhalten (pro Browser lokal gespeichert). Ein Teil, dessen Funktion ausgeschaltet ist, wird geparkt: weder angewendet noch gelöscht, er kehrt mit der Funktion zurück. Ebenso der Filter einer Spalte, die nicht filterbar ist (Überschreibung oder Typstandard aus). Eine gewählte Seitengröße oder eine gezogene Spaltenbreite gilt, bis der konfigurierte Wert (`tablePageSize` bzw. die Spaltenbreite im Editor) geändert wird oder die Seitengröße nicht mehr angeboten wird. Die Seite bleibt bei Live-Updates der Daten erhalten und springt nur bei Änderung von Sortierung, Filtern, Suchbegriff oder Seitengröße auf Seite 1 zurück.

> **Kopfzeile und Spaltenmenü:** Sortieren, Spaltenfilter, Ausblenden und das Spaltenmenü leben in der Kopfzeile. Ist die Kopfzeile ausgeblendet (`tableShowHeader`), sind sie alle aus; ist das Spaltenmenü aus, sind auch Spaltenfilter und Ausblenden aus (beide sind nur über das Menü erreichbar). Schnellfilter, Paginierung und Zeilenauswahl hängen nicht an der Kopfzeile.

### Sortierung

| Feldname        | Typ      | Standard | Beschreibung                          | Bedingung |
| --------------- | -------- | -------- | ------------------------------------- | --------- |
| tableSorting    | checkbox | true     | Spaltensortierung aktivieren          | Kopfzeile sichtbar |
| tableSortingMulti| checkbox| false    | Multi-Spaltensortierung aktivieren (Strg+Klick) | Sortierung aktiv |

Eine Spalte sortiert nach ihrem **effektiven Typ**:

- `date` chronologisch,
- `number` numerisch — auch als Text gespeicherte Zahlen, wenn der Formattyp der Spalte `number` ist (Werte, die keine Zahl sind, sortieren wie 0),
- `string` in natürlicher Textreihenfolge ohne Groß-/Kleinschreibung (`Raum 2` vor `Raum 10`) — auch Zahlenwerte, wenn der Formattyp der Spalte `string` ist,
- jeder andere Typ in der Standard-Reihenfolge.

### Filterung

| Feldname         | Typ      | Standard | Beschreibung                          | Bedingung |
| ---------------- | -------- | -------- | ------------------------------------- | --------- |
| tableFiltering   | checkbox | true     | Spaltenfilterung aktivieren           | Spaltenmenü aktiv |
| tableQuickFilter | checkbox | false    | Globales Suchfeld anzeigen            | -         |
| tableColumnMenu  | checkbox | true     | Spaltenmenü anzeigen (Filter/Sort/Ausblenden) | Kopfzeile sichtbar |
| tableHiding      | checkbox | true     | Spalten ausblenden über Menü erlauben | Spaltenmenü aktiv |

> **Spaltenfilter vergleichen nach dem Effektiven Typ der Spalte:** Textspalten als Text ohne Groß-/Kleinschreibung (`gleich „Raum 1"` trifft nicht `Raum 01`), Zahlenspalten nur numerisch (eine Zelle, die keine Zahl ist, trifft bei Wert-Operatoren nie), Datumsspalten nach lokalem Kalendertag, Boolean-Spalten nach `true`/`false`. Andere Typen (gemischt, Objekt, Array, Bild) vergleichen als Text, Objekte als JSON. Der Filter-Dialog bietet die Operatoren dieses Typs an; ein gespeicherter Filter, dessen Operator der Typ nicht mehr anbietet (z. B. nach Änderung des Formattyps), wird verworfen.

### Paginierung

| Feldname                | Typ      | Standard   | Beschreibung                          | Bedingung |
| ----------------------- | -------- | ---------- | ------------------------------------- | --------- |
| tablePagination         | checkbox | true       | Paginierung aktivieren                | -         |
| tablePageSize           | number   | 25         | Initiale Seitengröße                  | Paginierung aktiv |
| tablePageSizeOptions    | text     | '10,25,50,100' | Verfügbare Seitengrößen (komma-getrennt) | Paginierung aktiv |
| tableVirtualizeThreshold| number   | 50         | Zeilenanzahl-Schwellwert für Virtualisierung | - |

### Zeilenauswahl

| Feldname          | Typ      | Standard | Beschreibung                          | Bedingung |
| ----------------- | -------- | -------- | ------------------------------------- | --------- |
| tableRowSelection | checkbox | false    | Zeilenauswahl aktivieren (Checkboxen) | -         |

### Analyse-Optionen

| Feldname      | Typ    | Standard | Beschreibung                          | Bedingung |
| ------------- | ------ | -------- | ------------------------------------- | --------- |
| tableMaxDepth | number | 10       | Maximale Verschachtelungstiefe für JSON-Flattening | - |

## Layout

### Tabellen-Layout

| Feldname          | Typ      | Standard     | Beschreibung                          | Bedingung |
| ----------------- | -------- | ------------ | ------------------------------------- | --------- |
| tableDensity      | select   | 'standard'   | Zeilendichte (compact, standard, comfortable) | - |
| tableRowHeight    | number   | -            | Feste Zeilenhöhe (px)                 | -         |
| tableHeaderHeight | number   | -            | Kopfzeilenhöhe (px)                   | -         |
| tableAutoSize     | checkbox | false        | Spalten automatisch an Container anpassen | -    |
| tableHeaderElevation| slider  | 6            | Schatten der Kopfzeile (0-24)         | -         |
| jsonTablePadding  | number   | 1            | Innenabstand                          | -         |

### Tabellenrahmen

| Feldname      | Typ    | Standard | Beschreibung                          | Bedingung |
| ------------- | ------ | -------- | ------------------------------------- | --------- |
| borderWidth   | slider | 0        | Außenrahmen-Breite (0-20)             | -         |
| borderStyle   | select | 'solid'  | Rahmenstil (none, solid, dashed, etc.)| -         |
| borderColor   | color  | -        | Rahmenfarbe                           | -         |
| borderRadius  | text   | -        | Eckenradius (CSS-Wert)                | -         |

### Kopfzeilen-Stil

| Feldname               | Typ    | Standard | Beschreibung                          | Bedingung |
| ---------------------- | ------ | -------- | ------------------------------------- | --------- |
| tableHeaderBgColor     | color  | -        | Hintergrundfarbe der Kopfzeile        | -         |
| tableHeaderTextColor   | color  | -        | Textfarbe der Kopfzeile               | -         |
| tableHeaderFontSize    | number | -        | Schriftgröße der Kopfzeile (px)       | -         |
| headerBorderWidth      | slider | 0        | Rahmenbreite unten der Kopfzeile (0-10)| -        |
| headerBorderColor      | color  | -        | Rahmenfarbe der Kopfzeile             | -         |

### Zellrahmen

| Feldname                  | Typ      | Standard | Beschreibung                          | Bedingung                    |
| ------------------------- | -------- | -------- | ------------------------------------- | ---------------------------- |
| tableShowCellBorders      | checkbox | false    | Vertikale Zellrahmen anzeigen         | -                            |
| verticalCellBorderWidth   | slider   | 1        | Vertikale Rahmenbreite (0-10)         | Zellrahmen aktiv             |
| verticalCellBorderColor   | color    | -        | Vertikale Rahmenfarbe                 | Zellrahmen aktiv             |
| tableShowRowBorders       | checkbox | true     | Horizontale Zeilenrahmen anzeigen     | -                            |
| horizontalCellBorderWidth | slider   | 1        | Horizontale Rahmenbreite (0-10)       | Zeilenrahmen aktiv           |
| horizontalCellBorderColor | color    | -        | Horizontale Rahmenfarbe               | Zeilenrahmen aktiv           |

### Zellen-Stil

| Feldname          | Typ    | Standard | Beschreibung                          | Bedingung |
| ----------------- | ------ | -------- | ------------------------------------- | --------- |
| evenRowColor      | color  | -        | Hintergrundfarbe für gerade Zeilen    | -         |
| oddRowColor       | color  | -        | Hintergrundfarbe für ungerade Zeilen  | -         |

> Hinweis: Die pro-Spalte-Schriftgröße wird über den Formattyp **String** (`fontSize`) bzw. die bedingte Formatierung gesetzt; es gibt kein separates Tabellen-Feld für die Zellenschriftgröße.

## JSON-Datenformate

### Einfaches Array

```json
[
  {"name": "Max", "age": 30, "city": "Berlin"},
  {"name": "Anna", "age": 25, "city": "München"}
]
```

### Verschachtelte Objekte

```json
[
  {
    "user": {"name": "Max", "email": "max@example.com"},
    "stats": {"logins": 42, "lastLogin": "2024-01-15"}
  }
]
```

Verschachtelte Pfade werden zu `user.name`, `stats.logins` usw. flachgeklopft.

### Array-Werte

```json
[
  {"id": 1, "tags": ["dringend", "arbeit"]},
  {"id": 2, "tags": ["privat"]}
]
```

Arrays werden als komma-getrennte Werte angezeigt oder können erweitert werden.

### Bilder & Icons

Spalten mit Bild-Referenzen werden als erkannter Typ `image` automatisch als Grafik gerendert:

```json
[
  {"name": "Lampe",   "icon": "💡"},
  {"name": "Sensor",  "icon": "🌡️"},
  {"name": "Kamera",  "bild": "https://example.com/cam1.png"},
  {"name": "Logo",    "bild": "data:image/svg+xml,%3Csvg …%3E"}
]
```

URLs, `data:image/…`-URIs und UTF-8-Zeichen werden gleichermaßen erkannt (siehe [Bild-Spalte](#bild-spalte-formattyp-image)).

## Anwendungsfälle

### Geräteliste

```
oid: javascript.0.deviceList
tableSorting: true
tableFiltering: true
tableQuickFilter: true
tablePagination: true
tablePageSize: 25
```

JSON-Struktur:
```json
[
  {"device": "Wohnzimmer Licht", "type": "bulb", "state": "on", "battery": 100},
  {"device": "Küchen Sensor", "type": "motion", "state": "idle", "battery": 85}
]
```

### Log-Tabelle

```
oid: javascript.0.logs
tableSorting: true
tableSortingMulti: true
tableFiltering: true
tablePagination: true
tablePageSize: 50
tableDensity: compact
```

### Status-Dashboard

```
oid: javascript.0.statusData
tableAutoSize: true
tablePagination: false
tableShowRowBorders: true
evenRowColor: #f5f5f5
```

### Beispiel für bedingte Formatierung

Spalten so konfigurieren, dass:
- Grüner Hintergrund für Batterie > 80%
- Gelber Hintergrund für Batterie 50-80%
- Roter Hintergrund für Batterie < 50%

Dies erfolgt über die bedingte Formatierung im Spalten-Editor.

## Performance-Tipps

1. **Virtualisierung**: Automatisch aktiviert für Tabellen mit mehr als `tableVirtualizeThreshold` Zeilen
2. **Paginierung**: Bei großen Datensätzen verwenden, um die Render-Performance zu verbessern
3. **Max Depth**: Niedrigeren `tableMaxDepth` für tief verschachteltes JSON verwenden, um Verarbeitungszeit zu reduzieren
4. **Spaltensichtbarkeit**: Unnötige Spalten ausblenden, um DOM-Elemente zu reduzieren

## Integration mit ioBroker

### JSON-Daten erstellen

Ein JavaScript-Adapter-Skript verwenden, um JSON-Daten zu generieren:

```javascript
// Beispiel: Gerätedaten zu JSON aggregieren
const devices = $('channel[state.id=*.state]');
const tableData = devices.map(id => ({
  name: getObject(id).common.name,
  state: getState(id).val,
  lastUpdate: new Date(getState(id).ts).toISOString()
}));
setState('javascript.0.deviceTable', JSON.stringify(tableData), true);
```

### Auf Zeilenauswahl reagieren

`tableRowSelection` mit einem Zustand verbinden und ausgewählte Zeilen in der Logik verarbeiten.
