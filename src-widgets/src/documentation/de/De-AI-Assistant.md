# KI-Assistent mit der Collection

## Beschreibung

Seit der 2.20-Reihe hat vis-2 einen KI-Assistenten im Editor: Er legt Views an, setzt Widgets und ändert sie über Werkzeug-Aufrufe. Externe KI-Clients wie Claude Desktop erreichen ioBroker zusätzlich über einen MCP-Endpunkt von Admin. Beide Wege lassen sich mit den Widgets dieser Collection nutzen.

Die Collection bringt **keine eigene KI** mit: Sie ruft kein Sprachmodell auf und speichert keine API-Schlüssel. Sie macht ihre Widgets nur für die KI des Hosts lesbar und robust:

- **Kurzbeschreibung je Widget:** Jedes Widget nennt in einem kurzen Satz seinen Zweck. Der Satz erscheint als Tooltip in der Widget-Palette; die KI liest ihn, wenn sie das Set auflistet.
- **Anleitung für die KI:** Jedes Widget bringt außerdem eine Anleitung zu seinen Feldern und zum Format seiner Konfigurator-Felder mit. Die KI liest sie in der Typbeschreibung des Widgets; für Menschen ist sie nicht sichtbar.
- **Geformte Startwerte:** Konfigurator-Felder, die bisher leer starteten, tragen als Standardwert ein leeres, aber korrekt geformtes Gerüst. Daran erkennt die KI die erwartete Struktur. Am Verhalten des Widgets ändert das nichts.
- **Robust gegen KI-Daten:** Fügt die KI ein Widget ein, setzt der Host keine Standardwerte und prüft nichts; beim Ändern ersetzt er Feldwerte ungeprüft. Ein unbrauchbarer Wert (falscher Typ, kein gültiges JSON, falsche Form) gilt im Widget deshalb als ungesetzt: Das Widget rendert so, als fehle der Wert, ohne Fehlermeldung. Der gespeicherte Wert bleibt, bis du ihn im Konfigurator korrigierst.
- **Theme per KI:** Der Assistent kann auch das Theme der Collection ändern, also Farben, Schrift und Form aller Collection-Widgets (siehe [Theme per KI](#theme-per-ki)).

## Zugangswege

| Weg                                       | Was du brauchst                                          | Was die KI sieht                                                                                 |
| ----------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Assistent im vis-2-Editor                 | API-Schlüssel eines Anbieters oder ein lokales Modell    | Widget-Typen mit Kurzbeschreibung, Anleitung und Feldern, Views, Objekte und Zustände            |
| Externer MCP-Client, z. B. Claude Desktop | aktivierter MCP-Endpunkt, kein API-Schlüssel in ioBroker | Objekte und Zustände; Views nur roh als Projektdatei (über Admin nur lesend), keine Widget-Typen |

### Assistent im vis-2-Editor

- **Öffnen:** im vis-2-Editor über den runden Button **Assistent** unten rechts. Den Assistenten gibt es nur im Editor, nicht in der Laufzeit-Ansicht.
- **Anbieter:** OpenAI, Anthropic, Google Gemini, DeepSeek, OpenRouter oder ein beliebiger OpenAI-kompatibler Endpunkt („Custom“) mit eigener Base-URL, etwa ein lokales Ollama oder LM Studio. Für Custom ist der API-Schlüssel optional.
- **Einrichtung:** in den Instanzeinstellungen von vis-2 mit eigenen Schlüsseln, oder vis-2 übernimmt die systemweite KI-Einstellung aus Admin (Systemeinstellungen → KI; ab Admin 8.3.5 und vis-2 2.20.6). OpenRouter gibt es in vis-2 nur über diese Systemeinstellung.
- **Modell:** Der Assistent baut ausschließlich über Werkzeug-Aufrufe. Das Modell muss daher Tool-Calling (Function Calling) beherrschen.
- **Rechte:** Die Werkzeuge laufen mit der Verbindung des angemeldeten Nutzers und dürfen nur, was dieser darf. Der Assistent ändert Views und Widgets; Datenpunkte schreibt er nicht. Beim [Theme per KI](#theme-per-ki) schreibt die Collection den Theme-Datenpunkt, sobald der Assistent die Änderung auf die View gesetzt hat.
- **Rückgängig:** Alle Änderungen einer Antwort werden einmal gespeichert und bilden im Editor einen Undo-Schritt. Eine Theme-Änderung nimmt er nicht zurück (siehe [Eine Theme-Änderung zurücknehmen](#eine-theme-änderung-zurücknehmen)).

### Externer MCP-Client (z. B. Claude Desktop)

- **Endpunkt aktivieren:** Der KI-Assistent von Admin ist im Standard aus. Erst wenn er in den Einstellungen der Admin-Instanz aktiviert ist, startet Admin auf seinem Webserver einen MCP-Endpunkt unter `/mcp`. Alternativ stellt der Adapter `mcp` einen Endpunkt bereit, als Web-Erweiterung oder eigenständig.
- **Adresse finden:** Im Admin-Assistenten öffnet der Button **Ohne API-Schlüssel verwenden (externer MCP-Client)** (Kabel-Symbol im Kopf) einen Dialog. Er listet die Endpunkte deiner Installation mit Kopier-Button und zeigt den System-Prompt des eingebauten Assistenten zum Kopieren.
- **Client verbinden:** Trage die Endpunkt-URL (z. B. `http(s)://<host>:<port>/mcp`) im Client als MCP-Server ein. Das Sprachmodell läuft dann im Client mit dessen eigenem Konto; in ioBroker ist kein API-Schlüssel nötig.
- **Views nur roh:** Der MCP-Server hat kein Werkzeug für vis-2. Der Client kennt weder die Widget-Typen noch ihre Kurzbeschreibungen und Anleitungen und sieht eine View nur als Projektdatei, etwa `vis-2.0/main/vis-views.json`. Der eingebettete Endpunkt von Admin kann diese Datei nur lesen: Er hat keine Option für Objekt- und Dateiänderungen. Zum Schreiben einer View braucht es den Adapter `mcp` mit erlaubten Objekt- und Dateiänderungen (im Standard aus); der Client schreibt die Projektdatei dann als rohes JSON, ohne die Anleitungen, die der Assistent von vis-2 bekommt.
- **Arbeitsweise:** Ein Widget, das schon in der View steht, zeigt dem Client das Datenformat (siehe [Ein Widget als Vorlage](#ein-widget-als-vorlage)). Sichere die Projektdatei, bevor du den Client schreiben lässt: Solche Änderungen laufen am vis-2-Editor und seinem Rückgängig vorbei.
- **Theme:** Das Theme der Collection ändert der Client über dessen Datenpunkt (siehe [Theme über einen externen MCP-Client](#theme-über-einen-externen-mcp-client)).

## Das Set nennen

Der System-Prompt des vis-2-Assistenten empfiehlt der KI die Haus-Sets `relative` und `absolute`. Collection-Widgets verwendet sie deshalb nur, wenn du das Set ausdrücklich nennst. Sein technischer Name lautet `vis-2-widgets-collection`; in der Widget-Palette heißt die Gruppe „Widget-Sammlung“.

Nenne das Set in jeder Anfrage, oder gib am Anfang des Gesprächs vor, dass alle folgenden Widgets aus diesem Set kommen sollen.

## Beispiel-Prompts

- „Welche Widgets bietet das Set `vis-2-widgets-collection`? Beschreibe kurz, wofür jedes da ist.“
- „Lege eine View ‚Wohnzimmer‘ an und setze einen Schalter aus dem Set `vis-2-widgets-collection` für den Datenpunkt der Stehlampe darauf.“
- „Zeige die Außentemperatur `0_userdata.0.aussentemperatur` mit einem Gauge aus dem Set `vis-2-widgets-collection` an, Bereich −20 bis 40 °C.“
- „Ersetze in der View ‚Flur‘ den Schalter durch einen Schalter aus dem Set `vis-2-widgets-collection` mit demselben Datenpunkt.“
- „Lies die View ‚Vorlagen‘ und lege in der View ‚Energie‘ ein Widget wie das ECharts-Diagramm dort an, aber für den Datenpunkt der Wärmepumpe.“

Datenpunkte kannst du mit ihrer Objekt-ID oder mit einer Beschreibung nennen: Der Assistent kann Objekte suchen und Zustände lesen. Prüfe jede gebaute View und bessere im Konfigurator nach.

## Ein Widget als Vorlage

Liest der Assistent eine View, gibt der Host die gesetzten Daten jedes Widgets vollständig aus. Ein Widget, das du einmal im Konfigurator eingerichtet hast, zeigt der KI damit das genaue Datenformat, auch für Felder, die sie in der Typbeschreibung nicht sieht. Die Datenreihen des ECharts-Widgets etwa sind dort nicht sichtbar. Der Weg lohnt sich vor allem bei aufwendigen Widgets wie ECharts, JSON Table oder Gauge.

1. Richte ein Widget im Konfigurator ein, z. B. ein ECharts-Diagramm in einer View ‚Vorlagen‘.
2. Bitte den Assistenten, diese View zu lesen und das Widget als Muster zu nehmen.
3. Nenne, was sich ändern soll: Datenpunkt, Titel, Farben oder Ziel-View.

## Theme per KI

Der Assistent von vis-2 kann das Theme der Collection ändern: Farben, Schrift und Form aller Collection-Widgets, ohne dass du das [Theme-Studio](De-Theme-Studio.md) öffnest. Er bearbeitet dasselbe Theme wie das Studio. Das Theme gilt **für die ganze Installation**, nicht je Projekt oder View: Eine Änderung wirkt in jedem Projekt.

### Was du ändern lassen kannst

- **Vorlage (Preset):** eine der neun [Vorlagen](De-Theme-Studio.md#vorlagen) des Theme-Studios, etwa Graphit. Wie im Studio setzt sie nur Farbmodus, Primärfarbe, Sekundärfarbe, Grundfläche und Widget-Fläche.
- **Farbmodus:** hell oder dunkel.
- **Einzelne Farben:** Primärfarbe, Sekundärfarbe, Fehler-, Warn-, Info- und Erfolgsfarbe, Text (primär), Text (sekundär), Grundfläche, Widget-Fläche und Trennlinie. Eine genannte Farbe liegt über einer Vorlage aus derselben Anfrage.
- **Schrift:** eine Schriftfamilie aus der Auswahl des Theme-Studios (mitgeliefert oder System, siehe [Sektion Schrift & Form](De-Theme-Studio.md#sektion-schrift--form)) und die Basis-Schriftgröße (8–24 px).
- **Form:** der Eckradius für alle vier Ecken (0–96 px) und die Abstandseinheit (0–16 px).
- **Zurücksetzen:** das ganze Theme auf den Standard. Das leert alle Angaben, auch geladene Google-Schriften und CSS-Variablen. Zusammen mit neuen Werten beginnt das Theme beim Standard und bekommt dann diese Werte.

Es ändert sich nur, was du nennst; alles andere bleibt, wie es war. Ein Wert, den das Theme nicht annimmt, wird übersprungen, der Rest gilt. Nicht einstellen kann der Assistent Google-Schriften, je Ecke verschiedene Radien, Schriftstärken, Zeilenhöhe und CSS-Variablen. Ohne Zurücksetzen bleiben diese Angaben erhalten; ein neuer Eckradius ersetzt alle vier Ecken. Einen einzelnen Wert leeren, etwa den Farbmodus zurück auf „Automatisch“ stellen, kann er nicht; das geht im Theme-Studio.

### Beispiel-Prompts für das Theme

- „Stelle das Theme der Widget-Sammlung auf das Preset Graphit. Den Eintrag dafür findest du im Set `vis-2-widgets-collection`.“
- „Mach die Primärfarbe orange und die Ecken runder, der Rest bleibt. Den Eintrag dafür findest du im Set `vis-2-widgets-collection`.“
- „Setze das Theme auf den Standard zurück. Den Eintrag dafür findest du im Set `vis-2-widgets-collection`.“
- „Stell das vorherige Theme wieder her.“ (im selben Gespräch nach einer Änderung; den Eintrag kennt der Assistent dann schon)

Nenne das Set in der Anfrage, wie unter [Das Set nennen](#das-set-nennen) beschrieben: Der Eintrag für das Theme steht im Set `vis-2-widgets-collection`, und der Assistent sucht ihn dort meist nur, wenn du es sagst. Ohne den zweiten Satz blieb das Theme in der Prüfung mit Claude Haiku und Claude Sonnet in fünf von sechs Anfragen unverändert; der Assistent antwortete meist, er habe dafür kein Werkzeug. Mit dem Satz setzte er den Auftrag in jeder geprüften Sitzung richtig. Vorlagen nennst du mit ihrem Namen aus dem Theme-Studio (geprüft mit Graphit und Rubin).

### Was dabei geschieht

Der Assistent setzt dafür einen **Theme-Auftrag** auf die View: einen Eintrag vom Typ „Theme-Studio“, der das Theme einmal ändert und sich danach selbst entfernt. Im Chat steht dazu die Zeile „Theme-Studio auf ‚‹View›‘ gesetzt“; fehlt sie, hat der Assistent nichts geändert.

- **Nach der Antwort:** Der Auftrag wirkt, sobald die Antwort des Assistenten zu Ende ist. Das Theme ändert sich dann auf allen Collection-Widgets, ohne Neuladen.
- **Meldung des Assistenten:** Der Assistent meldet die Änderung, bevor sie gewirkt hat. Liest er in derselben Antwort nach, sieht er noch den alten Wert und kann einen Fehlschlag melden, obwohl die Änderung danach ankommt (in der Prüfung einmal beobachtet). Es gilt, was die Widgets zeigen.
- **Nichts bleibt zurück:** Nach der Änderung steht kein zusätzliches Widget auf der View.
- **Nur im Editor, nur auf einer gezeigten View:** Der Auftrag wirkt, sobald seine View im Editor gezeigt wird. Hat der Assistent ihn auf eine andere View gesetzt, ändert sich das Theme erst, wenn du diese View im Editor öffnest. In der Laufzeit-Ansicht tut und zeigt er nichts.
- **Mehrere Aufträge:** Aufträge aus einer Antwort wirken nacheinander, jeder auf dem Ergebnis des vorigen.
- **Langsames System:** Braucht der Server länger, steht der Auftrag so lange als leeres, durchsichtiges Element auf der View. Lass ihn stehen: Er verschwindet, sobald die Änderung bestätigt ist.
- **Offenes Theme-Studio:** Ein offenes Studio ohne ungespeicherte Änderungen zeigt den neuen Stand. Eines mit ungespeicherten Änderungen behält seinen Entwurf, auch auf der Canvas: **Speichern** überschreibt die Änderung des Assistenten, **Abbrechen** mit Verwerfen zeigt sie.

### Eine Theme-Änderung zurücknehmen

Das Rückgängig des Editors nimmt eine Theme-Änderung nicht zurück: Es stellt die View wieder her, das Theme bleibt. So kommst du zurück:

- **Den Assistenten bitten**, das vorherige Theme wiederherzustellen, im selben Gespräch. In der Prüfung las er das Theme vor jeder Änderung, wie seine Anleitung es verlangt; die alten Werte standen damit im Gespräch, und er stellte sie wieder her. Setzt er dabei alle Werte neu, steht eine Schriftfamilie danach in der Schreibweise der Studio-Auswahl (`'Georgia', serif` statt `Georgia, serif`). Wiederherstellen kann er nur, was er auch einstellen kann: Geladene Google-Schriften und CSS-Variablen bringt er nach einem Zurücksetzen nicht zurück. Das Wiederherstellen nach einem Zurücksetzen ist nicht geprüft.
- **Das [Theme-Studio](De-Theme-Studio.md) öffnen** und die Werte dort korrigieren.

Willst du sicher zurückkönnen, kopiere vor der Änderung den Wert des Datenpunkts `vis-2-widgets-collection.0.theme` (siehe [Das Theme im Datenpunkt](De-Theme-Studio.md#das-theme-im-datenpunkt)). Zurückgeschrieben stellt er das Theme vollständig wieder her.

Hast du das Theme mehrmals ändern lassen, kann Rückgängig eine frühere Änderung erneut auslösen: Es bringt den Stand der früheren Antwort samt ihrem Theme-Auftrag zurück, und dieser wirkt noch einmal. Wiederholen brachte in der Prüfung mit vis-2 2.20.9 keinen Theme-Auftrag zurück: Der Schritt scheiterte an einem Fehler des Editors und änderte weder View noch Theme. Prüfe das Theme, wenn du nach einer Theme-Änderung Rückgängig benutzt.

### Wenn die Änderung nicht bestätigt wird

Antwortet der Server zehn Sekunden lang nicht oder scheitert das Lesen oder Schreiben des Themes, bleibt der Auftrag auf der View stehen und zeigt im Editor den Hinweis „Die Theme-Änderung wurde nicht bestätigt. Dieses Widget löschen und erneut versuchen.“

- **Späte Antwort:** Kommt die Antwort doch noch, gilt sie: Die Änderung wird abgeschlossen, Auftrag und Hinweis verschwinden.
- **Löschen und wiederholen:** Sonst wähle den Auftrag an, lösche ihn und bitte den Assistenten erneut. War das Schreiben schon unterwegs, kann die Änderung trotzdem ankommen; prüfe das Theme.
- **Wartende Aufträge:** Weitere Aufträge warten hinter einem Auftrag ohne Antwort und zeigen dann denselben Hinweis.

### Theme über einen externen MCP-Client

Ein externer MCP-Client hat kein Werkzeug für vis-2 und setzt keinen Theme-Auftrag. Er ändert das Theme über den Datenpunkt `vis-2-widgets-collection.0.theme`: lesen, ändern, als JSON-Text zurückschreiben. Datenpunkte schreiben (`set_state`) kann er am eingebetteten Endpunkt von Admin im Standard. Beispiel: „Ändere im Theme der Widget-Sammlung die Primärfarbe auf Orange.“

- **Wirkung:** auf allen Collection-Widgets und für die ganze Installation. Ein offenes Theme-Studio verhält sich wie unter [Was dabei geschieht](#was-dabei-geschieht).
- **Ganzes Theme schreiben:** Anders als der Assistent ersetzt der Client den ganzen Wert. Was er beim Schreiben weglässt, ist verloren, auch geladene Google-Schriften. Er liest also das Theme, ändert nur das Gewünschte und schreibt alles zurück.
- **Ungültige Werte:** Ein einzelner ungültiger Wert fällt weg, der Rest des Themes gilt.
- **Rückweg:** Lass dir den alten Wert nennen, bevor der Client schreibt. Zurückgeschrieben stellt er das Theme vollständig wieder her; das Rückgängig des Editors erfasst das Theme nicht.
- **Form am Datenpunkt:** Bei einer neu angelegten Instanz steht die Form des Themes als englische Beschreibung am Objekt des Datenpunkts. Der Client liest sie nur, wenn er das Objekt abruft (`get_object` für `vis-2-widgets-collection.0.theme`); die Objektsuche (`search_objects`) findet den Datenpunkt, zeigt die Beschreibung aber nicht. Eine Instanz, die es schon vor dieser Funktion gab, hat die Beschreibung nicht: Ein Adapter-Update ändert das bestehende Objekt nicht. In der Prüfung reichte dem Client bei einem bestehenden Theme der gelesene Wert; bei einem leeren Theme rief er das Objekt ab und nutzte die Beschreibung.

Fehlt die Beschreibung oder ruft der Client das Objekt nicht ab, nenne ihm den Datenpunkt und gib ihm diesen Text mit. Er ist englisch und wortgleich mit der Beschreibung am Datenpunkt:

```text
Theme of the Collection widgets, one for the whole installation.
The value is JSON text: one object, a partial MUI theme.
Every key is optional; missing colors, font and radius follow the vis-2 theme.
To change the theme, read this state, change only what is asked for and write the whole theme back: whatever you leave out is lost, so keep every other key as it is (also googleFonts, components and cssVariables).
A single invalid value is ignored, the rest still applies.
An empty object {} restores the default look.
palette.mode: "light" or "dark"; leave it out to follow vis-2.
Colors: hex like #1976d2, rgb() or hsl(); no color names, no gradients.
If palette.primary.main is set and palette.secondary.main is not, the secondary color is derived from the primary.
Without palette.text.primary the text takes the primary color.
typography.fontFamily: a CSS font stack.
Bundled fonts work on every device, use the value exactly as written: "'Inter', system-ui, sans-serif", "'Open Sans', system-ui, sans-serif", "'Montserrat', system-ui, sans-serif", "'Merriweather', Georgia, serif", "'Playfair Display', Georgia, serif", "'Roboto Slab', Georgia, serif", "'JetBrains Mono', ui-monospace, monospace", "'Oswald', system-ui, sans-serif", "'Nunito', system-ui, sans-serif", "'Roboto', system-ui, sans-serif".
Any other stack needs the font on the device.
typography.fontSize: number from 8 to 24 (px).
corners.topLeft, corners.topRight, corners.bottomRight and corners.bottomLeft: each a number from 0 to 96 (px); set all four.
spacing: number from 0 to 16 (px).
Example: {"palette":{"mode":"dark","primary":{"main":"#38bdf8"},"secondary":{"main":"#818cf8"},"error":{"main":"#f44336"},"warning":{"main":"#ffa726"},"info":{"main":"#29b6f6"},"success":{"main":"#66bb6a"},"text":{"primary":"#e6edf3","secondary":"#9aa7b4"},"background":{"default":"#0f1216","paper":"#181c23"},"divider":"#2a313c"},"typography":{"fontFamily":"'Inter', system-ui, sans-serif","fontSize":14},"corners":{"topLeft":8,"topRight":8,"bottomRight":8,"bottomLeft":8},"spacing":8}
```

Die Bereiche für Schriftgröße, Eckradius und Abstand sind die der Regler im Theme-Studio. Den Aufbau des Themes erklärt [Das Theme im Datenpunkt](De-Theme-Studio.md#das-theme-im-datenpunkt).

## Grenzen

- **Keine eigene KI:** Die Collection ruft kein Sprachmodell auf und verwaltet keine Schlüssel. Alles läuft über den Assistenten von vis-2 oder einen externen MCP-Client; es gelten Kosten und Bedingungen des gewählten Anbieters.
- **Keine Garantie für jede Modellantwort:** Wie gut das Ergebnis wird, hängt vom Modell ab. Die Collection sorgt dafür, dass ein Widget mit unbrauchbaren Daten nicht abstürzt, nicht dafür, dass die KI es richtig konfiguriert.
- **Was die KI vom Widget-Typ sieht:** die Anleitung des Widgets und je Feld nur Name, Typ, Label, die Werte einer Auswahl und den Standardwert, keine Tooltips, Gruppen oder Grenzen. Konfigurator-Felder erscheinen nur als Typ `custom`; ihr Format kennt die KI aus der Anleitung, dem Standardwert oder einer Vorlage.
- **Absolute Views:** Auf einer absoluten View gibt der Host einem neu eingefügten Collection-Widget eine Breite von 200 px, wenn die KI keine eigene Breite angibt. Passe die Größe danach an.
- **Datenschutz:** Was der Assistent liest (Views, Objekte, Zustände), geht an den gewählten Anbieter. Bei einem lokalen Modell bleibt es in deinem Netz.
- **Neue Funktion im Host:** Die KI-Funktionen von vis-2 und Admin sind neu, ihr Verhalten kann sich mit Updates ändern. Diese Seite beschreibt vis-2 2.20.8 und Admin 8.3.11; der Abschnitt [Theme per KI](#theme-per-ki) ist mit vis-2 2.20.9, Admin 8.3.12 und js-controller 7.2.5 geprüft.

## Sicherheit beim MCP-Endpunkt

- Admin richtet den eingebetteten Endpunkt ohne eigene MCP-Anmeldung ein und übergibt ihm den Standardbenutzer der Admin-Instanz. Ob die Anmeldung von Admin den Pfad `/mcp` schützt, ist nicht geprüft. Geh davon aus, dass jeder, der den Admin-Port erreicht, den Endpunkt nutzen kann, solange du für deine Installation nichts anderes festgestellt hast.
- Über den Endpunkt kann ein Client je nach Einstellung Datenpunkte schreiben, also Geräte schalten, und bei erlaubten Objekt- und Dateiänderungen auch Objekte und Dateien ändern.
- Mach den Admin-Port nicht aus dem Internet erreichbar; nutze den Endpunkt nur im eigenen Netz oder über ein VPN.
- Brauchst du eine Anmeldung, nimm den Adapter `mcp`: Eigenständig bietet er optional OAuth2, HTTP Basic oder ein Bearer-Token; als Web-Erweiterung gilt die Anmeldung der `web`-Instanz.
- Brauchst du den Endpunkt nicht, lass den KI-Assistenten von Admin ausgeschaltet.
