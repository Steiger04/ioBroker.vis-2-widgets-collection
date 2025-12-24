# Checkbox Widget

![Checkbox Widget](../img/collection-checkbox.png)

## Beschreibung

Das Checkbox Widget bietet eine Checkbox-Darstellung für boolesche Werte mit konfigurierbarer Label-Platzierung.

## Einstellungshierarchie

Dieses Widget nutzt alle **vis-2 Einstellungen** und **Common Einstellungen**. Siehe [Home](De-Home.md) für Details.

Die Widget-spezifischen Einstellungen überschreiben die allgemeineren Einstellungen.

## Widget-spezifische Einstellungen

| Feldname               | Typ      | Standard | Beschreibung                              | Bedingung           |
| ---------------------- | -------- | -------- | ----------------------------------------- | ------------------- |
| checkboxLabelPlacement | select   | 'end'    | Position des Labels relativ zur Checkbox  | -                   |
| withoutLabel           | checkbox | false    | Checkbox ohne Label anzeigen              | -                   |
| onlyDisplay            | checkbox | false    | Nur Anzeige (keine Schreibrechte auf OID) | Nur wenn write=true |

## Label-Platzierung

Die Position des Labels kann über `checkboxLabelPlacement` gesteuert werden:

### Top

- Label wird oberhalb der Checkbox angezeigt
- Vertikale Anordnung

### Bottom

- Label wird unterhalb der Checkbox angezeigt
- Vertikale Anordnung

### Start

- Label wird links von der Checkbox angezeigt (bei LTR-Layout)
- Horizontale Anordnung
- Standardmäßig linksbündig

### End (Standard)

- Label wird rechts von der Checkbox angezeigt (bei LTR-Layout)
- Horizontale Anordnung
- Standardmäßig rechtsbündig

### Ohne Label

- Aktiviere `withoutLabel` um nur die Checkbox ohne Beschriftung anzuzeigen
- Nützlich für kompakte Darstellungen oder wenn das Label durch andere Elemente (Header/Footer) ersetzt wird

## Anwendungsbeispiele

- **Einstellungen**: Aktivieren/Deaktivieren von Optionen
- **Checklisten**: Aufgaben abhaken
- **Filter**: Auswahl von Filterkriterien
- **Zustimmungen**: Bestätigungen/Einverständniserklärungen
- **Benachrichtigungen**: Enable/Disable-Schalter mit Beschriftung
