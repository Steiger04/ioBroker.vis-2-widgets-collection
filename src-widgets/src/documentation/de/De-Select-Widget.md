# Select Widget

![Select Widget](../img/collection-select.png)

## Beschreibung

Das Select Widget bietet eine Dropdown-Auswahl über die Zustandszeilen einer OID und schreibt den Wert des gewählten Eintrags, wahlweise an eine eigene Steuer ID. Es akzeptiert die Datentypen boolean, number, string und mixed. Es ist platzsparend und übersichtlich, besonders bei vielen Optionen.

## Einstellungshierarchie

Dieses Widget nutzt alle **vis-2 Einstellungen** und **Common Einstellungen**. Siehe [Home](De-Home.md) für Details.

Die Widget-spezifischen und Value-spezifischen Einstellungen überschreiben die allgemeineren Einstellungen.

## Widget-spezifische Einstellungen

Die Felder stehen in der Gruppe **Auswahl**.

| Feldname                  | Typ      | Standard | Beschreibung                                                                                                                                                                                                                     | Bedingung                                            |
| ------------------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Objekt-ID `oid`           | id       | -        | OID, deren Wert die Anzeige bestimmt (Status); akzeptiert die Typen boolean, number, string und mixed                                                                                                                            | -                                                    |
| Einheit `unit`            | text     | ''       | Einheit (wird aus dem Objekt übernommen, hier überschreibbar, Leeren entfernt sie); erscheint an Beschriftungen ohne Alias                                                                                                       | Nur wenn eine OID gewählt ist                        |
| Nur Anzeige `onlyDisplay` | checkbox | false    | Nur Anzeige (Auswahl gesperrt, es wird nichts geschrieben). Jede Wahl von OID oder Steuer ID setzt das Feld neu: true, wenn das Schreibziel `write=false` hat, sonst false                                                       | Ausgeblendet, wenn das Schreibziel `write=false` hat |
| Steuer ID `cid`           | id       | -        | Optionale zweite OID, an die die Auswahl geschrieben wird (Typen boolean, number, string, mixed)                                                                                                                                 | -                                                    |
| Pfeilfarbe `arrowColor`   | color    | -        | Nur Vollfarbe. Farbe des Dropdown-Pfeils. Ohne Wert die Textfarbe des ausgewählten Werts, bei einem Gradient dessen Farbe in der Mitte. Das Farbfeld zeigt dann die Farbe aus den Basisfeldern, nicht die des ausgewählten Werts | -                                                    |

**Hinweis:** Zusätzlich zu den oben genannten Einstellungen sind die **Wert schreiben**-Einstellungen (Verzögerung/Intervall) verfügbar. Diese steuern, wie Wertänderungen an das Schreibziel geschrieben werden. Siehe [Common Einstellungen - Wert schreiben](De-Home.md#wert-schreiben) für Details.

### Steuer ID (Status und Befehl getrennt)

Viele Geräte trennen den Status (z. B. `…mode`) vom Befehl (z. B. `…setMode`). Dafür hat das Select Widget die **Steuer ID**:

- **Anzeige**: Das Select zeigt immer den Wert der OID (Status). Mit Steuer ID wechselt die Anzeige nach einer Auswahl daher erst, wenn der Status den neuen Wert meldet; ohne Steuer ID sofort.
- **Schreiben**: Ist eine Steuer ID gesetzt, geht jede Auswahl ausschließlich an die Steuer ID, die OID wird nicht beschrieben. Ohne Steuer ID wird die OID beschrieben.
- **Schreibziel**: Die OID, an die geschrieben wird, heißt Schreibziel: die Steuer ID, wenn ihr Objekt aufgelöst ist, sonst die OID. Eine Steuer ID, die sich nicht auflösen lässt oder einen anderen Typ als boolean, number, string oder mixed hat, zählt nicht; dann wird die OID beschrieben.
- **Sperre**: Die Auswahl ist gesperrt, wenn **Nur Anzeige** aktiv ist oder das Schreibziel `write=false` hat. Eine schreibgeschützte Status-OID sperrt das Select also nicht, solange eine beschreibbare Steuer ID gesetzt ist. Hat das Schreibziel `write=false`, wird **Nur Anzeige** ausgeblendet, weil die Auswahl ohnehin gesperrt ist.
- **Werte**: Die Optionen werden nur einmal definiert, die Wahl der Steuer ID legt keine Zeilen an. Die gewählte Option schreibt ihren Wert an die Steuer ID, gewandelt in deren Typ. Sie muss also dieselben Werte verstehen, die der Status meldet.

## Datentypen

Die Einträge kommen aus den Zustandszeilen. Eine Zeile passt zum Wert der OID, wenn beide als Text gleich sind; `1` und `'1'` sind also derselbe Zustand. Beim Schreiben gilt je Typ des Schreibziels:

### Boolean

- Dropdown mit zwei festen Zeilen `true` und `false`: `value{n}` ist ausgeblendet, Zeilen lassen sich nicht hinzufügen, klonen oder löschen. Der Alias kommt aus `common.states`, sonst `TRUE` und `FALSE`
- Kompakte Alternative zu Switch oder Checkbox
- Typische Anwendung: Ein/Aus-Auswahl in Listen

### Number

- Dropdown mit numerischen Werten, geschrieben als Zahl. Eine nicht numerische Zeile wird nie aktiv und schreibt nichts
- Beispiel: Temperaturstufen (18, 20, 22, 24°C), die Einheit kommt ohne Alias aus dem Objekt
- Gut für diskrete Werte mit klarer Bedeutung

### String

- Dropdown mit Textwerten, geschrieben als Text
- Beispiel: Betriebsmodi (Auto, Manuell, Eco, Comfort, Sport)
- Standard-Anwendungsfall für Auswahlmenüs

### Mixed

- Dropdown mit beliebigen Werten: `true` und `false` (ohne Rücksicht auf Groß-/Kleinschreibung) werden als Boolean geschrieben, zahlenförmige Werte als Zahl (aus `007` wird `7`), alles andere als Text
- Eine Zeile, deren Text sich dabei ändert (`007`, `TRUE`), passt danach nicht zum Wert der OID und wird nicht aktiv
- Beispiel: Gemischte Listen mit Zahlen und Texten

## Funktionsweise

### Geschlossener Zustand

- Zeigt Icon und Beschriftung der ersten Zeile, deren Wert zum Wert der OID passt; ohne passende Zeile bleibt das Feld leer
- Dropdown-Pfeil in der konfigurierten Farbe (`arrowColor`), sonst in der Textfarbe des ausgewählten Werts
- Kompakte Darstellung: Das Feld bleibt um 10 % schmaler als der gemessene Platz im Rahmen

### Geöffneter Zustand

- Liste aller Zeilen mit Wert in ihrer Reihenfolge; Zeilen mit gleichem Wert bleiben eigene Einträge
- Aktueller Wert ist hervorgehoben; ein Hintergrund aus `background{n}` oder `background` gilt auch für den gewählten Eintrag und ersetzt die Hervorhebung
- Beim Überfahren zeigt ein Eintrag seinen Hintergrund mit 50 % Alpha, bei einem Gradient dessen Farbe in der Mitte. Eine Farbangabe, die sich nicht auswerten lässt (etwa ein Farbname oder eine CSS-Variable), bleibt unverändert
- Die Fläche der Liste nimmt `frameBackground` des ausgewählten Werts, ihren Rahmen die vis-2 Felder aus [CSS Ränder](De-Home.md#css-ränder). `noCard` nimmt ihr den Schatten, aber nicht die Fläche; ein eingebettetes Select behält den Schatten
- Die Liste ist höchstens so breit wie der gemessene Platz im Rahmen; eine lange Liste scrollt
- Click außerhalb schließt das Dropdown

### Schreiben

- Eine Auswahl schreibt den Wert des Eintrags mit den **Wert schreiben**-Einstellungen an das Schreibziel
- Die Wahl des gerade angezeigten Eintrags schreibt nichts
- Die Wahl eines anderen Eintrags mit gleichem Wert schreibt erneut; angezeigt bleibt die erste passende Zeile

## Value-spezifische Einstellungen

Jede Option ist eine Zeile im Zustandseditor, der Gruppe **Werte** (Felder siehe [Value-spezifische Einstellungen](De-Home.md#value-spezifische-einstellungen)). Bei der OID-Wahl werden die Zustände aus `common.states` als Zeilen ergänzt, vorhandene Zeilen bleiben erhalten. **Aus common.states neu anlegen** ersetzt alle Zeilen. Ohne Zeile mit Wert bleibt die Liste leer. Im Widget wirken die Felder so:

- **Beschriftung**: `alias{n}`, sonst der Wert mit Einheit. HTML ist erlaubt, Größe aus `valueSize{n}`, Farbe aus `textColor{n}` (Gradient möglich)
- **Icon**: `icon{n}` oder `iconSmall{n}`, sonst das Basis-Icon. Die OID-Wahl setzt `icon` aus dem Objekt; es erscheint dann bei jeder Option ohne eigenes Icon
- **Icongröße**: Höhe aus `iconSize{n}`, sonst aus dem Basisfeld `iconSize`, jeweils in Prozent von 24 px; ohne Wert 24 px
- **Hintergrund**: `background{n}` färbt den Eintrag in der Liste und, solange die Zeile aktiv ist, die Inhaltsfläche
- **Rahmen**: `header{n}`, `headerSize{n}`, `footer{n}`, `footerSize{n}` und `frameBackground{n}` gelten, solange die Zeile aktiv ist; bei mehreren aktiven Zeilen die erste

**Hinweis:** Icon und Beschriftung erscheinen in der Dropdown-Liste und im geschlossenen Zustand. Header und Footer einer Zeile erscheinen nur im Rahmen, nicht in der Liste.

## Anwendungsbeispiele

- **Thermostat-Modi**: string-OID mit den Werten Auto, Heizen, Kühlen, Eco, Comfort
- **Lüfterstufen**: mixed-OID mit den Werten Aus, 1, 2, 3, Auto; die Zahlen werden als Zahl geschrieben, Aus und Auto als Text
- **Lichtszenen**: number-OID mit `common.states` Aus, Lesen, Film, Party, Entspannung als Alias
- **Alarmmodus**: Status als OID, Befehl als Steuer ID, Werte für Scharf, Teilscharf, Unscharf, Urlaub
- **Playlist-Auswahl**: string-OID mit einer Zeile je verfügbarer Playlist

## Vorteile

- **Platzsparend**: Nur eine Zeile im geschlossenen Zustand
- **Übersichtlich**: Alle Optionen in einer Liste, in der Reihenfolge der Zeilen
- **Skalierbar**: Geeignet für viele Optionen (>5)
- **Standard-UI**: Vertrautes Bedienelement
