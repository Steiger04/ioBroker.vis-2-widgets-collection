# State Widget

![State Widget](../img/collection-state.png)

## Beschreibung

Das State Widget dient zur Anzeige und Steuerung von Zuständen verschiedener Datentypen (boolean, number, string, mixed). Es bietet flexible Anzeigeoptionen, einen Änderungsdialog und unterstützt Push-Button-Funktionalität.

## Einstellungshierarchie

Dieses Widget nutzt alle **vis-2 Einstellungen** und **Common Einstellungen**. Siehe [Home](De-Home.md) für Details.

Die Widget-spezifischen und Value-spezifischen Einstellungen überschreiben die allgemeineren Einstellungen.

## Widget-spezifische Einstellungen

| Feldname        | Typ      | Standard | Beschreibung                                                                                                                        | Bedingung                                           |
| --------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| onlyStates      | checkbox | false    | Nur Zustände anzeigen (Werte aus values_count)                                                                                      | Nur sichtbar wenn values_count > 0                  |
| statePushButton | checkbox | false    | Taster-Modus: Wert[1] beim Drücken, Wert[2] am Ende der Betätigung, siehe [Push-Button-Funktionalität](#push-button-funktionalität) | Nur bei onlyStates=true und genau 2 Zeilen mit Wert |
| onlyDisplay     | checkbox | false    | Nur Anzeige (keine Schreibrechte auf OID)                                                                                           | Nur wenn write=true                                 |
| noIcon          | checkbox | false    | Kein Icon anzeigen                                                                                                                  | -                                                   |
| noValue         | checkbox | false    | Keinen Wert anzeigen                                                                                                                | -                                                   |

**Hinweis:** Zusätzlich zu den oben genannten Einstellungen sind die **Wert schreiben**-Einstellungen (Verzögerung/Intervall) verfügbar. Diese steuern, wie Wertänderungen an die OID geschrieben werden. Siehe [Common Einstellungen - Wert schreiben](De-Home.md#wert-schreiben) für Details. Im aktiven Taster-Modus sind sie ausgeblendet, siehe [Sofort schreiben](#sofort-schreiben). Wird das Widget entfernt, etwa durch einen Ansichtswechsel, sendet es einen noch wartenden Wert sofort.

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

## Verhalten beim Klick

Was ein Klick auf den Button tut, hängt von **onlyStates** und der Zahl der Zeilen mit Wert ab. Zeilen ohne Wert oder nur mit Leerzeichen zählen nicht.

| Konfiguration             | Klick                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------ |
| onlyStates aus            | Öffnet den [Änderungsdialog](#änderungsdialog)                                       |
| onlyStates an, 1 Zeile    | Schreibt den Wert dieser Zeile                                                       |
| onlyStates an, 2 Zeilen   | Schaltet um: Ist die erste Zeile aktiv, wird die zweite geschrieben, sonst die erste |
| onlyStates an, mehr als 2 | Öffnet den [Änderungsdialog](#änderungsdialog)                                       |
| Taster-Modus              | Schreibt nichts, siehe [Push-Button-Funktionalität](#push-button-funktionalität)     |

Hätte der Dialog weder eine Liste noch einen Slider, öffnet er sich nicht, und der Klick tut nichts. Ein gesperrtes Widget (onlyDisplay oder eine OID mit `write: false`) reagiert nicht auf den Klick.

## Push-Button-Funktionalität

Der Taster-Modus ist aktiv, wenn **onlyStates** und **statePushButton** eingeschaltet sind und das Widget genau **2 Zeilen mit Wert** hat. Wert[1] und Wert[2] sind diese beiden Zeilen in ihrer Reihenfolge.

Dies ermöglicht z.B. Rollladensteuerung (Drücken = Auf, Loslassen = Stop) oder Fernbedienungsfunktionen.

**Hinweis:** statePushButton wird nur angezeigt, wenn onlyStates aktiviert ist und genau 2 Zeilen einen Wert haben. Zwei Zeilen, von denen eine leer ist, ergeben keinen Taster. Eine Zeile mit Binding zählt im Editor als Zeile mit Wert, auch wenn das Binding zur Laufzeit leer auflöst.

### Eine Betätigung

- **Drücken** mit der Haupttaste, per Touch oder mit dem Stift: Wert[1] wird an die OID gesendet.
- **Loslassen**: Wert[2] wird an die OID gesendet.
- **Verlassen des ganzen Buttons beim Halten**: Wirkt wie Loslassen. Ein Wechsel zwischen Icon und Text innerhalb des Buttons zählt nicht. Bei Touch ist auf echten Geräten noch nicht geprüft, wann ein vom Button gleitender Finger als Verlassen zählt.
- **Abbruch** eines Touches durch den Browser: Wirkt wie Loslassen.
- **Kurzer Tipp**: Sendet beide Werte kurz hintereinander, zuerst Wert[1], dann Wert[2]. Es gibt keine Mindestdauer.

Wert[2] kommt nur aus einer laufenden Betätigung und je Betätigung genau einmal. Nichts gesendet wird daher in diesen Fällen:

- **Überfahren** mit der Maus, ohne zu drücken.
- **Gedrückt zurückkommen**, nachdem der Zeiger den Button verlassen hat. Erst ein neuer Druck sendet wieder Wert[1].
- **Rechte und mittlere Maustaste**.
- **Weiterer Finger**, solange eine Betätigung läuft. Nur der erste Zeiger zählt.
- **Enter und Leertaste**. Der Taster-Modus reagiert nicht auf die Tastatur.

### Ende von außen

- **Ansichtswechsel**: Wird das Widget beim Halten entfernt, sendet es Wert[2].
- **Einsetzende Sperre**: Wird das Widget beim Halten mit onlyDisplay gesperrt, endet die Betätigung und Wert[2] wird gesendet. Ein späteres Loslassen sendet nichts mehr, auch wenn die Sperre dann wieder aufgehoben ist.
- **OID mit `write: false`**: Eine solche OID nimmt keinen Wert an, auch nicht Wert[2].

Ein gesperrtes Widget startet keine Betätigung.

### Sofort schreiben

Beide Werte gehen sofort an die OID, ein kurzer Tipp verliert so seinen Wert[1] nicht. Ein noch wartender Wert aus Verzögerung oder Intervall wird dabei verworfen. Darum sind **sampleInterval**, **sampleIntervalValue** und **delay** samt ihrer Überschrift „Wert schreiben" im aktiven Taster-Modus ausgeblendet. Die gespeicherten Werte bleiben erhalten und wirken wieder, sobald der Taster-Modus aus ist.

### Touch und Kontextmenü

Im Taster-Modus scrollt die Fläche des Buttons nicht (`touch-action: none`), und das Kontextmenü des Browsers bleibt aus. Außerhalb des Taster-Modus bleibt der Button unverändert.

## Änderungsdialog

Der Klick öffnet den Dialog, wenn onlyStates aus ist oder mehr als 2 Zeilen einen Wert haben, siehe [Verhalten beim Klick](#verhalten-beim-klick). Er zeigt oben den Slider und darunter die Liste, je nachdem, was vorhanden ist. Er schließt über das Kreuz oder einen Klick neben den Dialog, nicht durch eine Wahl.

- **Titel**: Der Header-Text des Widgets, sonst der Name der OID, sonst „Wert ändern".
- **Farben**: Hintergrund und Textfarbe des Widgets gelten für Fläche, Titel und Liste. Bei einem Verlauf als Textfarbe zeigt der Titel den Verlauf, die Liste eine Vollfarbe daraus. Ohne Hintergrund bleibt die Fläche des Themes.
- **Schreiben**: Liste und Slider schreiben über die Einstellungen [Wert schreiben](De-Home.md#wert-schreiben), nur der Taster geht daran vorbei.
- **Einsetzende Sperre**: Sperrt sich das Widget bei offenem Dialog, schreiben Liste und Slider nichts mehr und zeigen weiter den Wert. Der Dialog bleibt offen und lässt sich schließen.

### Liste

- **Einträge**: Je Zeile mit Wert ein Eintrag, in der Reihenfolge der Zeilen. Zeilen mit gleichem Wert bleiben eigene Einträge.
- **Text**: Der Alias der Zeile. Ist er leer oder besteht nur aus Leerzeichen, steht dort der Wert mit Einheit.
- **Markierung**: Markiert sind alle Einträge, die dem aktuellen Wert der OID entsprechen, auch Zeilen mit gleichem Wert. Die Markierung folgt auch Änderungen von außen.
- **Wahl**: Ein Klick schreibt den Wert des Eintrags, der Dialog bleibt offen.

### Slider

Der Slider erscheint nur bei einer OID vom Typ **number**, mit onlyStates aus und wenn das Minimum unter dem Maximum liegt. Bei Minimum ≥ Maximum gibt es keinen Slider.

- **Bereich**: Bei der OID-Wahl legt das Widget eine Kopie der Objektdaten an und übernimmt dorthin `common.min` und `common.max`. Eine Grenze, die das Objekt nicht angibt, wird dort mit 0 beziehungsweise 100 vorbelegt. Eine Zahl-OID ohne Bereich zeigt deshalb einen Slider von 0 bis 100. Der Bereich lässt sich im Widget nicht einstellen und begrenzt nur den Slider, nicht die Listeneinträge.
- **Schritt**: `common.step` des Objekts, ebenfalls aus der Kopie. Ohne Angabe oder bei einem Wert von 0 oder kleiner ist der Schritt 1.
- **Spätere Änderungen am Objekt**: Die Kopie entsteht nur bei der OID-Wahl. Ein geänderter Bereich oder Schritt gilt erst nach der nächsten OID-Wahl. Das gilt auch für früher konfigurierte Widgets, deren Kopie noch keinen Schritt enthält.
- **Position**: Beim Öffnen steht der Slider auf dem aktuellen Wert, ein numerischer String zählt als Zahl. Bei einem anderen Wert steht er auf 0. Ändert sich der Wert von außen, folgt der Slider, solange der Dialog offen ist. Die Wahl eines Listeneintrags mit Zahl setzt ihn auf diese Zahl. Das Echo eines eigenen Werts bewegt ihn nicht.

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
