# State Widget

![State Widget](img/collection-state.png)

## Beschreibung

Das State Widget dient zur Anzeige und Steuerung von Zuständen verschiedener Datentypen (boolean, number, string, mixed). Es bietet flexible Anzeigeoptionen und unterstützt Push-Button-Funktionalität.

## Einstellungshierarchie

Dieses Widget nutzt alle **vis-2 Einstellungen** und **Common Einstellungen**. Siehe [Home](Home.md) für Details.

Die Widget-spezifischen und Value-spezifischen Einstellungen überschreiben die allgemeineren Einstellungen.

## Widget-spezifische Einstellungen

| Feldname        | Typ      | Standard | Beschreibung                                               | Bedingung                                  |
| --------------- | -------- | -------- | ---------------------------------------------------------- | ------------------------------------------ |
| onlyStates      | checkbox | false    | Nur Zustände anzeigen (Werte aus values_count)             | Nur sichtbar wenn values_count > 0         |
| statePushButton | checkbox | false    | Taster-Modus: Wert[1] beim Drücken, Wert[2] beim Loslassen | Nur bei onlyStates=true und genau 2 Werten |
| onlyDisplay     | checkbox | false    | Nur Anzeige (keine Schreibrechte auf OID)                  | Nur wenn write=true                        |
| noIcon          | checkbox | false    | Kein Icon anzeigen                                         | -                                          |
| noValue         | checkbox | false    | Keinen Wert anzeigen                                       | -                                          |

## Datentypen

Das State Widget unterstützt folgende Datentypen:

### Boolean

- Zwei Werte: true (Wert[1]) und false (Wert[2])
- Typische Anwendung: Ein/Aus-Schalter, Statusanzeige

### Number

- Numerische Werte
- Unterstützt Einheiten und Formatierung
- Typische Anwendung: Temperatur, Helligkeit, Prozentsätze

### String

- Textwerte
- Beliebige Zeichenketten
- Typische Anwendung: Statusmeldungen, Modi

### Mixed

- Beliebige Werte
- Flexible Anzeige verschiedener Datentypen
- Typische Anwendung: Universelle Statusanzeige

## Push-Button-Funktionalität

Bei aktiviertem **onlyStates** und genau **2 definierten Werten** kann der Taster-Modus verwendet werden:

- **Beim Drücken**: Wert[1] wird an die OID gesendet
- **Beim Loslassen**: Wert[2] wird an die OID gesendet

Dies ermöglicht z.B. Rollladensteuerung (Drücken = Auf, Loslassen = Stop) oder Fernbedienungsfunktionen.

**Hinweis:** statePushButton wird nur angezeigt, wenn onlyStates aktiviert ist und genau 2 Werte definiert sind.

## Value-spezifische Einstellungen

Wenn **values_count > 0** ist, können für jeden Wert individuelle Einstellungen vorgenommen werden, die die Common-Einstellungen überschreiben:

| Feldname (Suffix)                       | Beschreibung                                        |
| --------------------------------------- | --------------------------------------------------- |
| icon1, icon2, ...                       | Individuelles großes Icon für Wert 1, 2, ...        |
| iconSmall1, iconSmall2, ...             | Individuelles kleines Icon (SVG) für Wert 1, 2, ... |
| iconSize1, iconSize2, ...               | Individuelle Icon-Größe für Wert 1, 2, ...          |
| iconColor1, iconColor2, ...             | Individuelle Icon-Farbe für Wert 1, 2, ...          |
| header1, header2, ...                   | Individueller Header-Text für Wert 1, 2, ...        |
| footer1, footer2, ...                   | Individueller Footer-Text für Wert 1, 2, ...        |
| textColor1, textColor2, ...             | Individuelle Textfarbe für Wert 1, 2, ...           |
| backgroundColor1, backgroundColor2, ... | Individuelle Hintergrundfarbe für Wert 1, 2, ...    |
| ...                                     | Alle Common-Felder mit Suffix                       |

**Beispiel:** Für einen Boolean-Zustand mit 2 Werten (true/false):

- `icon1` = Glühbirne leuchtend (für true)
- `icon2` = Glühbirne aus (für false)
- `backgroundColor1` = Gelb (für true)
- `backgroundColor2` = Grau (für false)

So erhält jeder Zustandswert eine individuelle visuelle Darstellung.
