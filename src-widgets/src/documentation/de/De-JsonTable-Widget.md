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
- **Verschachtelte Objekte**: Werden automatisch mit konfigurierbarer Tiefe flachgeklopft
- **JSON-String**: Wird automatisch geparst

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
- **Datentyperkennung**: Automatische Typerkennung (String, Zahl, Boolean, Datum)

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
| sortable     | Sortierung für diese Spalte aktivieren               |
| filterable   | Filterung für diese Spalte aktivieren                |

### Spaltenformatierung

| Formattyp    | Beschreibung                                         | Optionen                                             |
| ------------ | ---------------------------------------------------- | ---------------------------------------------------- |
| String       | Textanzeige mit optionaler Kürzung                   | maxLength, ellipsis                                  |
| Number       | Zahlenformatierung mit Locale-Unterstützung          | decimals, prefix, suffix, locale                     |
| Boolean      | Boolean als Icons, Text oder eigene Werte            | trueText/falseText, trueIcon/falseIcon               |
| Date         | Datum/Zeit-Formatierung mit Locale-Unterstützung     | Format-String, Locale                                |

### Bedingte Formatierung

Dynamische Stile basierend auf Zellenwerten anwenden:
- **Bedingungen**: Vergleich mit festen Werten oder Schwellwerten
- **Stile**: Hintergrundfarbe, Textfarbe, Schriftstärke, Icon
- **Mehrere Regeln**: Prioritätsbasierte Regelanwendung
- **Visuelle Vorschau**: Effektives Ergebnis sofort sehen

## Funktionen

### Sortierung

| Feldname        | Typ      | Standard | Beschreibung                          | Bedingung |
| --------------- | -------- | -------- | ------------------------------------- | --------- |
| tableSorting    | checkbox | true     | Spaltensortierung aktivieren          | -         |
| tableSortingMulti| checkbox| false    | Multi-Spaltensortierung aktivieren (Strg+Klick) | -   |

### Filterung

| Feldname         | Typ      | Standard | Beschreibung                          | Bedingung |
| ---------------- | -------- | -------- | ------------------------------------- | --------- |
| tableFiltering   | checkbox | true     | Spaltenfilterung aktivieren           | -         |
| tableQuickFilter | checkbox | false    | Globales Suchfeld anzeigen            | -         |
| tableColumnMenu  | checkbox | true     | Spaltenmenü anzeigen (Filter/Sort/Ausblenden) | - |
| tableHiding      | checkbox | true     | Spalten ausblenden über Menü erlauben | -         |

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
| tableCellFontSize | number | -        | Zellenschriftgröße (px)               | -         |

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
