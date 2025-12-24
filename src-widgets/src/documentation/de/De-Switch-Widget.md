# Switch Widget

![Switch Widget](../img/collection-switch.png)

## Beschreibung

Das Switch Widget ist ein spezialisierter Schalter für boolesche Werte. Es bietet eine moderne Material-UI Switch-Darstellung mit konfigurierbaren Farben und Größen.

## Einstellungshierarchie

Dieses Widget nutzt alle **vis-2 Einstellungen** und **Common Einstellungen**. Siehe [Home](De-Home.md) für Details.

Die Widget-spezifischen Einstellungen überschreiben die allgemeineren Einstellungen.

## Widget-spezifische Einstellungen

| Feldname        | Typ            | Standard | Beschreibung                                | Bedingung           |
| --------------- | -------------- | -------- | ------------------------------------------- | ------------------- |
| thumbSize       | slider (1-100) | -        | Größe des Schalter-Knopfs (Thumb) in Pixel  | -                   |
| thumbColorTrue  | color          | -        | Farbe des Knopfs im Zustand "true"          | -                   |
| thumbColorFalse | color          | -        | Farbe des Knopfs im Zustand "false"         | -                   |
| trackSize       | slider (1-100) | -        | Größe der Schalter-Schiene (Track) in Pixel | -                   |
| trackColor      | color          | -        | Farbe der Schiene                           | -                   |
| onlyDisplay     | checkbox       | false    | Nur Anzeige (keine Schreibrechte auf OID)   | Nur wenn write=true |

## Boolean-Optionen

Das Switch Widget arbeitet mit zwei Boolean-Werten:

### True-Zustand

- Schalter ist "eingeschaltet"
- Knopf wird in der Farbe `thumbColorTrue` angezeigt
- Typischerweise rechts positioniert

### False-Zustand

- Schalter ist "ausgeschaltet"
- Knopf wird in der Farbe `thumbColorFalse` angezeigt
- Typischerweise links positioniert

## Visuelle Darstellung

Das Widget besteht aus zwei Hauptkomponenten:

### Thumb (Knopf)

- Beweglicher Teil des Schalters
- Größe einstellbar über `thumbSize`
- Farbe abhängig vom Zustand (thumbColorTrue/thumbColorFalse)

### Track (Schiene)

- Hintergrund-Schiene, auf der sich der Knopf bewegt
- Größe einstellbar über `trackSize`
- Farbe einstellbar über `trackColor`

## Anwendungsbeispiele

- **Lichtsteuerung**: Ein/Aus-Schalter für Lampen
- **Gerätesteuerung**: Aktivieren/Deaktivieren von Geräten
- **Modus-Umschaltung**: Automatik/Manuell, Tag/Nacht, etc.
- **Benachrichtigungen**: Enable/Disable-Schalter
