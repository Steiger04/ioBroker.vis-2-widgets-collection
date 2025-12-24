# Dialog Widget

![Dialog Widget](../img/collection-dialog.png)

## Beschreibung

Das Dialog Widget öffnet ein Overlay-Fenster zur Anzeige einer ausgewählten View. Es ermöglicht komplexe Interaktionen in einem modalen Dialog.

## Einstellungshierarchie

Dieses Widget nutzt alle **vis-2 Einstellungen** und **Common Einstellungen**. Siehe [Home](De-Home.md) für Details.

Die Widget-spezifischen Einstellungen überschreiben die allgemeineren Einstellungen.

## Widget-spezifische Einstellungen

### View und Inhalt

| Feldname            | Typ      | Standard | Beschreibung                                     | Bedingung |
| ------------------- | -------- | -------- | ------------------------------------------------ | --------- |
| view                | select   | -        | Auszuwählende View, die im Dialog angezeigt wird | -         |
| dialogHeaderAsTitle | checkbox | false    | Header als Dialog-Titel verwenden                | -         |

### Größeneinstellungen

| Feldname      | Typ      | Standard | Beschreibung                 | Bedingung |
| ------------- | -------- | -------- | ---------------------------- | --------- |
| dialogWidth   | number   | 80       | Breite des Dialogs           | -         |
| dialogHeight  | number   | 80       | Höhe des Dialogs             | -         |
| dialogInPixel | checkbox | false    | Größe in Pixel statt Prozent | -         |

### Close-Button

| Feldname                | Typ      | Standard | Beschreibung                     | Bedingung                       |
| ----------------------- | -------- | -------- | -------------------------------- | ------------------------------- |
| dialogCloseButton       | checkbox | true     | Schließen-Button anzeigen        | -                               |
| dialogCloseButtonTop    | text     | -        | Position von oben (z.B. "10px")  | Nur wenn dialogCloseButton=true |
| dialogCloseButtonBottom | text     | -        | Position von unten (z.B. "10px") | Nur wenn dialogCloseButton=true |
| dialogCloseButtonColor  | color    | -        | Farbe des Schließen-Buttons      | Nur wenn dialogCloseButton=true |

### Auto-Close

| Feldname        | Typ    | Standard | Beschreibung                                 | Bedingung |
| --------------- | ------ | -------- | -------------------------------------------- | --------- |
| dialogAutoClose | number | -        | Automatisches Schließen nach x Millisekunden | -         |

### OID-Steuerung

| Feldname | Typ  | Standard | Beschreibung                                                 | Bedingung |
| -------- | ---- | -------- | ------------------------------------------------------------ | --------- |
| cid      | text | -        | OID zur Steuerung des Dialogs (true=öffnen, false=schließen) | -         |

## View-Auswahl

- Wähle eine beliebige View aus deinem vis-2 Projekt
- Die View wird vollständig im Dialog gerendert
- Alle Widgets in der View sind interaktiv
- Navigation innerhalb der View ist möglich

**Hinweis:** Wähle Views, die für die Dialog-Darstellung optimiert sind (kompakte Layouts).

## Größeneinstellungen

### Prozent (Standard)

- `dialogInPixel = false`
- Breite und Höhe als Prozentsatz des Bildschirms
- Beispiel: 80% = 80% der Bildschirmbreite/-höhe
- Responsiv: Passt sich an verschiedene Bildschirmgrößen an

### Pixel

- `dialogInPixel = true`
- Breite und Höhe in absoluten Pixeln
- Beispiel: 800 = 800px Breite
- Fixe Größe: Unabhängig von der Bildschirmgröße

**Empfehlung:** Nutze Prozent für responsive Designs, Pixel für fixe Layouts.

## Close-Button

### Position

- **Top**: Position von oben (z.B. "10px", "5%")
- **Bottom**: Position von unten (z.B. "10px", "5%")
- Wenn beide leer: Standard-Position (oben rechts)

### Farbe

- Über `dialogCloseButtonColor` einstellbar
- Standard: Theme-Farbe (meist schwarz/weiß)

### Deaktivieren

- Setze `dialogCloseButton = false` um den Button zu verstecken
- Nutzer kann Dialog dann nur über Auto-Close oder OID schließen

## Auto-Close

- Dialog schließt automatisch nach konfigurierten Millisekunden
- Beispiel: 5000 = Dialog schließt nach 5 Sekunden
- Nützlich für Benachrichtigungen oder temporäre Anzeigen
- Leer lassen für manuelles Schließen

## OID-Steuerung

Mit der `cid` (Control ID) kann der Dialog über eine OID gesteuert werden:

### Dialog öffnen

- Setze die OID auf `true`
- Dialog öffnet sich automatisch

### Dialog schließen

- Setze die OID auf `false`
- Dialog schließt sich automatisch

**Anwendungsfall:** Öffne Dialog bei bestimmten Ereignissen (z.B. Alarme, Benachrichtigungen)

**Beispiel:**

```
cid = "javascript.0.showAlarmDialog"
```

Skript setzt `showAlarmDialog = true` bei Alarm → Dialog öffnet sich

## Dialog-Titel

### Mit dialogHeaderAsTitle

- `dialogHeaderAsTitle = true`
- Der Header des Widgets wird als Titel-Leiste des Dialogs verwendet
- Professionelle Darstellung mit dediziertem Titel-Bereich

### Ohne dialogHeaderAsTitle

- `dialogHeaderAsTitle = false`
- Kein separater Titel, nur die View-Inhalte
- Maximale Flexibilität für eigene Titel innerhalb der View

## Anwendungsbeispiele

- **Detailansichten**: Click auf Widget öffnet detaillierte View
- **Einstellungen**: Öffne Einstellungs-Dialog für komplexe Konfigurationen
- **Benachrichtigungen**: Automatisches Öffnen bei Alarmen (via OID)
- **Formulare**: Eingabe-Dialoge für Benutzereingaben
- **Mediaplayer**: Detaillierte Steuerung in separatem Dialog
