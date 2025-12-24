# ButtonGroup Widget

![ButtonGroup Widget](../img/collection-button-group.png)

## Beschreibung

Das ButtonGroup Widget stellt mehrere Werte als Button-Gruppe dar. Es unterstützt verschiedene Datentypen und bietet flexible Styling-Optionen.

## Einstellungshierarchie

Dieses Widget nutzt alle **vis-2 Einstellungen** und **Common Einstellungen**. Siehe [Home](De-Home.md) für Details.

Die Widget-spezifischen Einstellungen überschreiben die allgemeineren Einstellungen.

## Widget-spezifische Einstellungen

| Feldname               | Typ    | Standard     | Beschreibung                     | Bedingung |
| ---------------------- | ------ | ------------ | -------------------------------- | --------- |
| buttonGroupVariant     | select | 'contained'  | Darstellungsvariante der Buttons | -         |
| buttonGroupOrientation | select | 'horizontal' | Ausrichtung der Button-Gruppe    | -         |
| buttonGroupColor       | select | 'primary'    | Farbschema der Buttons           | -         |

## Varianten

### Contained (Standard)

- Vollflächige Buttons mit Hintergrundfarbe
- Klare visuelle Trennung zwischen Buttons
- Empfohlen für primäre Aktionen

### Outlined

- Buttons mit Rahmen, transparentem Hintergrund
- Weniger visuelles Gewicht als Contained
- Empfohlen für sekundäre Aktionen

### Text

- Minimalistisch, nur Text ohne Hintergrund oder Rahmen
- Geringste visuelle Priorität
- Empfohlen für tertiäre Aktionen oder dichte Layouts

## Orientierung

### Horizontal (Standard)

- Buttons werden nebeneinander angeordnet (von links nach rechts)
- Platzsparend in der Höhe
- Standard für die meisten Anwendungsfälle

### Vertikal

- Buttons werden untereinander angeordnet (von oben nach unten)
- Platzsparend in der Breite
- Gut für schmale Layouts oder viele Optionen

## Farbschemata

Die Farbe der Buttons kann über `buttonGroupColor` gesteuert werden:

- **Primary**: Primärfarbe des Themes (Standard)
- **Secondary**: Sekundärfarbe des Themes
- **Success**: Grün für erfolgreiche/positive Aktionen
- **Error**: Rot für fehlerhafte/negative Aktionen
- **Warning**: Orange/Gelb für Warnungen
- **Info**: Blau für Informationen

## Datentypen

Das ButtonGroup Widget unterstützt verschiedene Datentypen:

### Boolean

- Zwei Buttons: true und false
- Typische Anwendung: Ein/Aus, Ja/Nein

### Number

- Mehrere Buttons für numerische Werte
- Beispiel: Lüfterstufen (0, 1, 2, 3)

### String

- Mehrere Buttons für Textwerte
- Beispiel: Modi (Auto, Manuell, Eco, Comfort)

### Mixed

- Beliebige Werte
- Flexible Anwendung für verschiedene Datentypen

## Value-spezifische Einstellungen

Für jeden Button (Wert) können individuelle Einstellungen vorgenommen werden:

- Icon (groß und klein)
- Farben (Icon, Text, Hintergrund)
- Header/Footer
- Alle Common-Felder mit Suffix (z.B. icon1, backgroundColor2, ...)

## Anwendungsbeispiele

- **Lüfterstufen**: 0, 1, 2, 3 (horizontal, contained)
- **Betriebsmodi**: Auto, Manuell, Eco, Comfort (horizontal, outlined)
- **Favoriten**: Auswahl aus vordefinierten Szenen (vertikal, text)
- **Lichtszenen**: Lesen, Film, Entspannung, Party (horizontal, contained)
