# RadioGroup Widget

![RadioGroup Widget](img/collection-radio-group.png)

## Beschreibung

Das RadioGroup Widget stellt mehrere Werte als Radio-Buttons dar. Alle Optionen sind gleichzeitig sichtbar, was die Auswahl erleichtert.

## Einstellungshierarchie

Dieses Widget nutzt alle **vis-2 Einstellungen** und **Common Einstellungen**. Siehe [Home](Home.md) für Details.

Die Widget-spezifischen Einstellungen überschreiben die allgemeineren Einstellungen.

## Widget-spezifische Einstellungen

| Feldname                     | Typ      | Standard     | Beschreibung                               | Bedingung           |
| ---------------------------- | -------- | ------------ | ------------------------------------------ | ------------------- |
| radioOrientation             | select   | 'horizontal' | Ausrichtung der Radio-Gruppe               | -                   |
| radioGroupUncheckedIconColor | color    | -            | Farbe der nicht ausgewählten Radio-Buttons | -                   |
| onlyDisplay                  | checkbox | false        | Nur Anzeige (keine Schreibrechte auf OID)  | Nur wenn write=true |

## Orientierung

### Horizontal (Standard)

- Radio-Buttons werden nebeneinander angeordnet (von links nach rechts)
- Platzsparend in der Höhe
- Gut für 2-4 Optionen
- Kompakte Darstellung

### Vertikal

- Radio-Buttons werden untereinander angeordnet (von oben nach unten)
- Platzsparend in der Breite
- Gut für mehr als 4 Optionen oder lange Beschriftungen
- Übersichtliche Darstellung

## Icon-Farben

### Ausgewählter Radio-Button

- Wird in der Primärfarbe oder einer benutzerdefinierten Farbe angezeigt
- Gesteuert über Common-Einstellungen oder value-spezifische Einstellungen

### Nicht ausgewählte Radio-Buttons

- Farbe über `radioGroupUncheckedIconColor` einstellbar
- Standard: Grau/Deaktiviert-Farbe des Themes
- Hilft bei der visuellen Unterscheidung

## Datentypen

Das RadioGroup Widget unterstützt verschiedene Datentypen:

### Boolean

- Zwei Radio-Buttons: true und false
- Alternative zu Switch/Checkbox mit expliziter Beschriftung
- Typische Anwendung: Ja/Nein-Fragen

### Number

- Mehrere Radio-Buttons für numerische Werte
- Beispiel: Lüfterstufen (0, 1, 2, 3)
- Gut für diskrete Werte mit klarer Bedeutung

### String

- Mehrere Radio-Buttons für Textwerte
- Beispiel: Betriebsmodi (Auto, Manuell, Eco, Comfort)
- Standard-Anwendungsfall

### Mixed

- Mehrere Radio-Buttons für beliebige Werte
- Flexible Anwendung für verschiedene Datentypen

## Value-spezifische Einstellungen

Für jeden Radio-Button (Wert) können individuelle Einstellungen vorgenommen werden:

- Icon (groß und klein)
- Text (Header, Footer als Label)
- Farben (Icon, Text)
- Alle Common-Felder mit Suffix (z.B. icon1, header2, ...)

**Hinweis:** Der Header wird typischerweise als Label für den Radio-Button verwendet.

## Anwendungsbeispiele

- **Heizmodus**: Auto, Heizen, Kühlen, Eco (vertikal)
- **Lichtszenen**: Lesen, Film, Party, Entspannung (horizontal)
- **Priorität**: Niedrig, Mittel, Hoch (horizontal)
- **Wochentag-Auswahl**: Mo, Di, Mi, Do, Fr, Sa, So (horizontal)
- **Zahlungsart**: Kreditkarte, PayPal, Rechnung, Vorkasse (vertikal)

## Vorteile gegenüber Select

- **Alle Optionen sichtbar**: Keine Interaktion nötig, um Optionen zu sehen
- **Schnellere Auswahl**: Ein Klick genügt
- **Bessere Übersicht**: Besonders bei 2-5 Optionen
- **Icons möglich**: Visuelle Unterstützung bei jeder Option

## Nachteile gegenüber Select

- **Mehr Platz**: Alle Optionen benötigen Raum
- **Nicht für viele Optionen**: Wird unübersichtlich bei >7 Optionen
