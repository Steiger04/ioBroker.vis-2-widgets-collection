# Input Widget

![Input Widget](../img/collection-input.png)

## Beschreibung

Das Input Widget zeigt einen Text- oder Zahlenwert an, der an eine einzelne OID gebunden ist, und erlaubt die direkte Inline-Bearbeitung per Klick. Es akzeptiert die Datentypen string, number und mixed. Im Standardmodus wird jeder Tastenanschlag (verzögert) an die OID geschrieben; mit aktiviertem OK-Button wird die Eingabe gepuffert und beim Bestätigen geschrieben oder beim Verlassen des Felds, wenn sie geändert wurde.

## Einstellungshierarchie

Dieses Widget nutzt alle **vis-2 Einstellungen** und **Common Einstellungen**. Siehe [Home](De-Home.md) für Details.

Die Widget-spezifischen und Value-spezifischen Einstellungen überschreiben die allgemeineren Einstellungen.

## Widget-spezifische Einstellungen

### Objekt & Werte

| Feldname | Typ  | Standard | Beschreibung                                                                       | Bedingung                     |
| -------- | ---- | -------- | ---------------------------------------------------------------------------------- | ----------------------------- |
| oid      | id   | -        | Object ID; akzeptiert die Typen string, number und mixed                           | -                             |
| unit     | text | ''       | Einheit (wird aus dem Objekt übernommen, hier überschreibbar, Leeren entfernt sie) | Nur wenn eine OID gewählt ist |

### Eingabe

| Feldname     | Typ      | Standard   | Beschreibung                                                                                                                 | Bedingung |
| ------------ | -------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------- | --------- |
| showOkButton | checkbox | false      | OK-Button anzeigen: Eingabe bei OK/Enter schreiben oder beim Verlassen, wenn sie geändert wurde (sonst jeder Tastenanschlag) | -         |
| inputVariant | select   | 'standard' | Variante des Textfelds (standard, outlined, filled)                                                                          | -         |
| inputPadding | number   | 1          | Innenabstand des Eingabefelds                                                                                                | -         |

### Zahlenbereich

Nur sichtbar, wenn die gebundene OID den Typ **number** hat. Der Bereich führt den Spinner und begrenzt die Eingabe nicht, siehe [Spinner und Bereich](#spinner-und-bereich).

| Feldname | Typ    | Standard | Beschreibung                                                                         | Bedingung  |
| -------- | ------ | -------- | ------------------------------------------------------------------------------------ | ---------- |
| step     | number | 1        | Schrittweite des Spinners                                                            | Nur number |
| minValue | number | -        | Untere Grenze des Spinners (aus `common.min` übernommen); leer bedeutet keine Grenze | Nur number |
| maxValue | number | -        | Obere Grenze des Spinners (aus `common.max` übernommen); leer bedeutet keine Grenze  | Nur number |

### Anzeige

| Feldname    | Typ      | Standard | Beschreibung                           | Bedingung           |
| ----------- | -------- | -------- | -------------------------------------- | ------------------- |
| onlyDisplay | checkbox | false    | Nur Anzeige (keine Inline-Bearbeitung) | Nur wenn write=true |
| noIcon      | checkbox | false    | Kein Icon anzeigen                     | -                   |
| noValue     | checkbox | false    | Keinen Wert anzeigen                   | -                   |

**Hinweis:** Zusätzlich zu den oben genannten Einstellungen sind die **Wert schreiben**-Einstellungen (Verzögerung/Intervall) verfügbar. Diese steuern, wie Wertänderungen an die OID geschrieben werden. Siehe [Common Einstellungen - Wert schreiben](De-Home.md#wert-schreiben) für Details.

## Datentypen

Das Input Widget unterstützt folgende Datentypen:

### String

- Textwerte, beliebige Zeichenketten
- Typische Anwendung: Statusmeldungen, Modi, Namen

### Number

- Numerische Werte mit optionalem Spinner-Bereich (min/max/step)
- Typische Anwendung: Temperatur, Helligkeit, Prozentsätze

### Mixed

- Beliebige Werte (Text oder Zahl)
- Getippte Eingaben werden in dem Typ geschrieben, nach dem sie aussehen: `true`/`false` als Boolean, zahlenförmige Eingaben als Zahl (aus `007` wird `7`), alles andere als Text
- Typische Anwendung: Universelle Eingabe

## Funktionsweise

### Display-first Inline-Bearbeitung

Das Widget zeigt den Wert (und wahlweise ein Icon) zentriert an. Ein Klick in die Anzeige wechselt inline in ein Textfeld:

- Das Icon wird während der Bearbeitung ausgeblendet
- Bei einer **number**-OID wird ein numerisches Eingabefeld mit Spinner verwendet
- Die Einheit wird als Suffix rechts im Feld angezeigt
- **Enter**, **Escape** oder ein Klick außerhalb beendet die Bearbeitung

### Schreibmodus

**Ohne OK-Button** (Standard): Jeder Tastenanschlag wird verzögert an die OID geschrieben (siehe die **Wert schreiben**-Einstellungen). Enter, Escape und ein Klick außerhalb beenden nur die Bearbeitung; das Getippte bleibt geschrieben.

**Mit OK-Button** (`showOkButton`): Die Eingabe wird gepuffert, beim Tippen wird nichts geschrieben. Was danach geschieht, hängt davon ab, ob die Eingabe vom Wert beim Start der Bearbeitung abweicht. 41 tippen und zurück auf 40 gilt bei einem Startwert von 40 als unverändert.

| Aktion          | Eingabe geändert | Eingabe unverändert                                                                                 |
| --------------- | ---------------- | --------------------------------------------------------------------------------------------------- |
| Klick außerhalb | Wird geschrieben | Es wird nichts geschrieben                                                                          |
| Enter oder OK   | Wird geschrieben | Wird erneut gesendet, außer die Konvertierung würde den Wert ändern; dann endet nur die Bearbeitung |
| Escape          | Wird verworfen   | Es wird nichts geschrieben                                                                          |

Enter und OK können einen Wert also bewusst erneut senden, während Hineinklicken und Wegklicken nie einen Schreibvorgang auslöst. Ein gespeicherter Text `007` auf einer mixed-OID würde zur Zahl `7`, darum senden Enter und OK ihn unverändert nicht.

### Spinner und Bereich

Der Bereich führt den Spinner (die Pfeile des Zahlenfelds und die Pfeiltasten) und begrenzt die Eingabe nicht: Ein getippter Wert außerhalb des Bereichs wird geschrieben.

- **Wert außerhalb des Bereichs**: Die überschrittene Grenze gilt nicht mehr, der Spinner macht also einen Schritt, statt auf diese Grenze zu springen. Bei Maximum 100, Wert 500 und Schrittweite 1 ergibt Pfeil runter 499. Die andere Grenze wirkt weiter.
- **OID-Wahl**: Das Widget übernimmt nur den Bereich, den das Objekt wirklich angibt (`common.min`, `common.max`). Eine Grenze, die das Objekt nicht angibt, bleibt leer, eine frühere wird entfernt.
- **Leeres Min-/Max-Feld**: Bedeutet keine Grenze, nicht 0.
- **Früher konfigurierte Widgets**: Sie können einen gespeicherten Bereich von 0 bis 100 haben, den das Objekt nie angegeben hat. Er lässt sich nicht von einem echten Bereich unterscheiden und bleibt, bis die Felder geleert werden.

### Einheit

Die Einheit kommt aus dem gebundenen Objekt. Nach der OID-Wahl steht sie im Feld `unit` und ist dort überschreibbar; Leeren des Felds entfernt sie. Eine spätere OID-Wahl ersetzt sie, das Entfernen der OID leert das Feld.

Die Anzeige, die Fußzeile und das Suffix des Eingabefelds zeigen die Einheit, auch wenn der Wert zu keiner Zeile des Zustandseditors passt. Ein Alias in der passenden Zeile wird in der Anzeige stattdessen gezeigt.

Bei früher konfigurierten Widgets kann das Feld `unit` leer sein, obwohl die Einheit des Objekts angezeigt wird. Es füllt sich bei der nächsten OID-Wahl; bis dahin entfernt man die Einheit, indem man etwas in das Feld tippt und es wieder leert.

### Nur-Lese-Modus

Wenn `onlyDisplay` aktiv ist oder die OID nicht beschreibbar ist (`write=false`), wechselt das Widget nie in den Bearbeitungsmodus und zeigt den Wert rein an.

### Konflikt-Anzeige

Das Eingabefeld wird rot, wenn sich der Wert seit dem Klick ins Feld signifikant von anderer Seite geändert hat (z. B. durch einen Adapter oder ein Skript):

- Eine Änderung vor dem Klick zählt nicht, auch wenn sie gerade erst kam.
- Bei Zahlen färben Änderungen kleiner als 1 wie Sensorrauschen das Feld nicht und nehmen das Rot auch nicht weg. Bei Text zählt jede Änderung.
- Das Feld bleibt rot, bis die Bearbeitung endet. Ohne OK-Button beendet der eigene nächste Tastenanschlag die Markierung, weil dann der eigene Wert im Objekt steht. Die nächste Bearbeitung beginnt ohne Markierung.

Rot ist nur eine Warnung: Der fremde Wert ersetzt die Eingabe nicht. Eine geänderte Eingabe und ein bewusstes Enter oder OK werden trotzdem geschrieben und überschreiben den fremden Wert; ein Klick außerhalb ohne Änderung lässt ihn stehen.

## Value-spezifische Einstellungen

Für jeden Wert können individuelle Common-Einstellungen überschrieben werden (z. B. Icon, Hintergrundfarbe, Textfarbe). Das geschieht im Zustandseditor, der Gruppe **Werte** im Attribut-Panel: eine durchsuchbare Liste mit einer Zeile pro Wert und darunter die Felder der gewählten Zeile. Zeilen lassen sich hinzufügen, klonen, verschieben und löschen.

Bei der OID-Wahl werden die Zustände aus `common.states` als Zeilen ergänzt, vorhandene Zeilen bleiben erhalten. **Aus common.states neu anlegen** ersetzt alle Zeilen.

Die Zeile, deren Wert zum aktuellen Wert passt, wendet ihre Einstellungen an. Dies entspricht dem Verhalten des [State Widgets](De-State-Widget.md#value-spezifische-einstellungen) und erlaubt z. B. eine eigene Hintergrundfarbe pro Zustandswert. Die Zeilen schränken die Eingabe nicht ein: Jeder Wert lässt sich weiter eintippen.

## Anwendungsbeispiele

- **Temperatur-Eingabe**: number-OID mit min/max/step und °C-Einheit
- **Status-Text ändern**: string-OID für Statusmeldungen oder Szenen-Namen
- **Lautstärke-Direkteingabe**: Zahl statt Slider, mit OK-Button gegen zu häufiges Schreiben
- **Universeller Wert**: mixed-OID für flexible Eingaben
