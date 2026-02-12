# ButtonGroup Widget

![ButtonGroup Widget](../img/collection-button-group.png)

## Beschreibung

Das ButtonGroup Widget stellt mehrere Werte als Button-Gruppe dar. Es unterstützt verschiedene Datentypen und bietet flexible Styling-Optionen.

## Einstellungshierarchie

Dieses Widget nutzt alle **vis-2 Einstellungen** und **Common Einstellungen**. Siehe [Home](De-Home.md) für Details.

Die Widget-spezifischen Einstellungen überschreiben die allgemeineren Einstellungen.

## Widget-spezifische Einstellungen

| Feldname               | Typ      | Standard      | Beschreibung                          | Bedingung          |
| ---------------------- | -------- | ------------- | ------------------------------------- | --------- |
| onlyIcon               | checkbox | false         | Nur Icons anzeigen (kein Text)        | Nur wenn onlyText=false |
| onlyText               | checkbox | false         | Nur Text anzeigen (keine Icons)       | Nur wenn onlyIcon=false |
| buttonGroupVariant     | select   | 'text'        | Darstellungsvariante (text, outlined) | -         |
| buttonGroupOrientation | select   | 'horizontal'  | Ausrichtung der Button-Gruppe         | -         |
| buttonGroupColor       | color    | -             | Farbschema der Buttons                | -         |

**Hinweis:** Zusätzlich zu den oben genannten Einstellungen sind die **Wert schreiben**-Einstellungen (Verzögerung/Intervall) verfügbar. Diese steuern, wie Wertänderungen an die OID geschrieben werden. Siehe [Common Einstellungen - Wert schreiben](De-Home.md#wert-schreiben) für Details.

## Varianten

### Text (Standard)

- Minimalistisch, nur Text ohne Hintergrund oder Rahmen
- Niedrigste visuelle Priorität
- Empfohlen für tertiäre Aktionen oder dichte Layouts

### Outlined

- Buttons mit Rahmen, transparentem Hintergrund
- Weniger visuelles Gewicht als gefüllte Buttons
- Empfohlen für sekundäre Aktionen

## Anzeigeoptionen

### Nur Icon

- Aktivieren Sie `onlyIcon`, um nur Icons ohne Text anzuzeigen
- Nützlich für kompakte Anzeigen
- Icons sollten selbsterklärend sein

### Nur Text

- Aktivieren Sie `onlyText`, um nur Text ohne Icons anzuzeigen
- Nützlich, wenn visueller Platz begrenzt ist
- Empfohlen für Barrierefreiheit

## Orientierung

### Horizontal (Standard)

- Buttons werden nebeneinander angeordnet (von links nach rechts)
- Platzsparend in der Höhe
- Standard für die meisten Anwendungsfälle

### Vertikal

- Buttons werden untereinander angeordnet (von oben nach unten)
- Platzsparend in der Breite
- Gut für schmale Layouts oder viele Optionen

## Styling

### Button-Gruppen-Farbe

Das Feld `buttonGroupColor` ermöglicht es, eine benutzerdefinierte Farbe für die Button-Gruppe mithilfe einer Farbauswahl zu definieren. Diese Farbe wirkt sich auf das visuelle Erscheinungsbild der Buttons aus, wenn sie sich in einem ausgewählten oder aktiven Zustand befinden.

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

- **Lüfterstufen**: 0, 1, 2, 3 (horizontal, text)
- **Betriebsmodi**: Auto, Manuell, Eco, Comfort (horizontal, outlined)
- **Favoriten**: Auswahl aus vordefinierten Szenen (vertikal, text)
- **Lichtszenen**: Lesen, Film, Entspannung, Party (horizontal, text)
