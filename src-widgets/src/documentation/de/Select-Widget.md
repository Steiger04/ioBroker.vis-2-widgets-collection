# Select Widget

![Select Widget](img/collection-select.png)

## Beschreibung

Das Select Widget bietet eine Dropdown-Auswahl für verschiedene Datentypen. Es ist platzsparend und übersichtlich, besonders bei vielen Optionen.

## Einstellungshierarchie

Dieses Widget nutzt alle **vis-2 Einstellungen** und **Common Einstellungen**. Siehe [Home](Home.md) für Details.

Die Widget-spezifischen Einstellungen überschreiben die allgemeineren Einstellungen.

## Widget-spezifische Einstellungen

| Feldname    | Typ      | Standard | Beschreibung                              | Bedingung           |
| ----------- | -------- | -------- | ----------------------------------------- | ------------------- |
| arrowColor  | color    | -        | Farbe des Dropdown-Pfeils                 | -                   |
| onlyDisplay | checkbox | false    | Nur Anzeige (keine Schreibrechte auf OID) | Nur wenn write=true |

## Datentypen

Das Select Widget unterstützt verschiedene Datentypen:

### Boolean

- Dropdown mit zwei Optionen: true und false
- Kompakte Alternative zu Switch oder Checkbox
- Typische Anwendung: Ein/Aus-Auswahl in Listen

### Number

- Dropdown mit numerischen Werten
- Beispiel: Temperaturstufen (18, 20, 22, 24°C)
- Gut für diskrete Werte mit klarer Bedeutung

### String

- Dropdown mit Textwerten
- Beispiel: Betriebsmodi (Auto, Manuell, Eco, Comfort, Sport)
- Standard-Anwendungsfall für Auswahlmenüs

### Mixed

- Dropdown mit beliebigen Werten
- Flexible Anwendung für verschiedene Datentypen
- Beispiel: Gemischte Listen mit Zahlen und Texten

## Funktionsweise

### Geschlossener Zustand

- Zeigt den aktuell ausgewählten Wert an
- Dropdown-Pfeil in der konfigurierten Farbe (`arrowColor`)
- Kompakte Darstellung

### Geöffneter Zustand

- Liste aller verfügbaren Optionen
- Aktueller Wert ist hervorgehoben
- Click außerhalb schließt das Dropdown

## Value-spezifische Einstellungen

Für jede Option im Dropdown können individuelle Einstellungen vorgenommen werden:

- Icon (groß und klein)
- Text (Header, Footer)
- Farben (Icon, Text, Hintergrund)
- Alle Common-Felder mit Suffix (z.B. icon1, header2, ...)

**Hinweis:** Icons und zusätzliche Texte werden in der Dropdown-Liste angezeigt, nicht im geschlossenen Zustand.

## Anwendungsbeispiele

- **Thermostat-Modi**: Auto, Heizen, Kühlen, Eco, Comfort
- **Lüfterstufen**: Aus, 1, 2, 3, Auto
- **Lichtszenen**: Aus, Lesen, Film, Party, Entspannung
- **Alarmmodus**: Scharf, Teilscharf, Unscharf, Urlaub
- **Playlist-Auswahl**: Liste aller verfügbaren Playlists

## Vorteile

- **Platzsparend**: Nur eine Zeile im geschlossenen Zustand
- **Übersichtlich**: Alle Optionen in sortierter Liste
- **Skalierbar**: Geeignet für viele Optionen (>5)
- **Standard-UI**: Vertrautes Bedienelement
