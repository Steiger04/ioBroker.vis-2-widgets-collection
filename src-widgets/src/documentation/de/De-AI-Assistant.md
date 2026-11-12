# KI-Assistent mit der Collection

## Beschreibung

Seit der 2.20-Reihe hat vis-2 einen KI-Assistenten im Editor: Er legt Views an, setzt Widgets und ändert sie über Werkzeug-Aufrufe. Externe KI-Clients wie Claude Desktop erreichen ioBroker zusätzlich über einen MCP-Endpunkt von Admin. Beide Wege lassen sich mit den Widgets dieser Collection nutzen.

Die Collection bringt **keine eigene KI** mit: Sie ruft kein Sprachmodell auf und speichert keine API-Schlüssel. Sie macht ihre Widgets nur für die KI des Hosts lesbar und robust:

- **Kurzbeschreibung je Widget:** Jedes Widget beschreibt in wenigen Sätzen seinen Zweck, seine wichtigsten Felder und das Format seiner Konfigurator-Felder. Die KI liest diesen Text, wenn sie das Set auflistet; derselbe Text erscheint als Tooltip in der Widget-Palette.
- **Geformte Startwerte:** Konfigurator-Felder, die bisher leer starteten, tragen als Standardwert ein leeres, aber korrekt geformtes Gerüst. Daran erkennt die KI die erwartete Struktur. Am Verhalten des Widgets ändert das nichts.
- **Robust gegen KI-Daten:** Fügt die KI ein Widget ein, setzt der Host keine Standardwerte und prüft nichts; beim Ändern ersetzt er Feldwerte ungeprüft. Ein unbrauchbarer Wert (falscher Typ, kein gültiges JSON, falsche Form) gilt im Widget deshalb als ungesetzt: Das Widget rendert so, als fehle der Wert, ohne Fehlermeldung. Der gespeicherte Wert bleibt, bis du ihn im Konfigurator korrigierst.

## Zugangswege

| Weg                                       | Was du brauchst                                          | Was die KI sieht                                                         |
| ----------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------ |
| Assistent im vis-2-Editor                 | API-Schlüssel eines Anbieters oder ein lokales Modell    | Widget-Typen mit Beschreibung und Feldern, Views, Objekte und Zustände   |
| Externer MCP-Client, z. B. Claude Desktop | aktivierter MCP-Endpunkt, kein API-Schlüssel in ioBroker | Objekte und Zustände; Views nur roh als Projektdatei (über Admin nur lesend), keine Widget-Typen |

### Assistent im vis-2-Editor

- **Öffnen:** im vis-2-Editor über den runden Button **Assistent** unten rechts. Den Assistenten gibt es nur im Editor, nicht in der Laufzeit-Ansicht.
- **Anbieter:** OpenAI, Anthropic, Google Gemini, DeepSeek, OpenRouter oder ein beliebiger OpenAI-kompatibler Endpunkt („Custom“) mit eigener Base-URL, etwa ein lokales Ollama oder LM Studio. Für Custom ist der API-Schlüssel optional.
- **Einrichtung:** in den Instanzeinstellungen von vis-2 mit eigenen Schlüsseln, oder vis-2 übernimmt die systemweite KI-Einstellung aus Admin (Systemeinstellungen → KI; ab Admin 8.3.5 und vis-2 2.20.6). OpenRouter gibt es in vis-2 nur über diese Systemeinstellung.
- **Modell:** Der Assistent baut ausschließlich über Werkzeug-Aufrufe. Das Modell muss daher Tool-Calling (Function Calling) beherrschen.
- **Rechte:** Die Werkzeuge laufen mit der Verbindung des angemeldeten Nutzers und dürfen nur, was dieser darf. Der Assistent ändert Views und Widgets; Datenpunkte schreibt er nicht.
- **Rückgängig:** Alle Änderungen einer Antwort werden einmal gespeichert und bilden im Editor einen Undo-Schritt.

### Externer MCP-Client (z. B. Claude Desktop)

- **Endpunkt aktivieren:** Der KI-Assistent von Admin ist im Standard aus. Erst wenn er in den Einstellungen der Admin-Instanz aktiviert ist, startet Admin auf seinem Webserver einen MCP-Endpunkt unter `/mcp`. Alternativ stellt der Adapter `mcp` einen Endpunkt bereit, als Web-Erweiterung oder eigenständig.
- **Adresse finden:** Im Admin-Assistenten öffnet der Button **Ohne API-Schlüssel verwenden (externer MCP-Client)** (Kabel-Symbol im Kopf) einen Dialog. Er listet die Endpunkte deiner Installation mit Kopier-Button und zeigt den System-Prompt des eingebauten Assistenten zum Kopieren.
- **Client verbinden:** Trage die Endpunkt-URL (z. B. `http(s)://<host>:<port>/mcp`) im Client als MCP-Server ein. Das Sprachmodell läuft dann im Client mit dessen eigenem Konto; in ioBroker ist kein API-Schlüssel nötig.
- **Views nur roh:** Der MCP-Server hat kein Werkzeug für vis-2. Der Client kennt weder die Widget-Typen noch ihre Beschreibungen und sieht eine View nur als Projektdatei, etwa `vis-2.0/main/vis-views.json`. Der eingebettete Endpunkt von Admin kann diese Datei nur lesen: Er hat keine Option für Objekt- und Dateiänderungen. Zum Schreiben einer View braucht es den Adapter `mcp` mit erlaubten Objekt- und Dateiänderungen (im Standard aus); der Client schreibt die Projektdatei dann als rohes JSON, ohne die Widget-Beschreibungen, die der Assistent von vis-2 bekommt.
- **Arbeitsweise:** Ein Widget, das schon in der View steht, zeigt dem Client das Datenformat (siehe [Ein Widget als Vorlage](#ein-widget-als-vorlage)). Sichere die Projektdatei, bevor du den Client schreiben lässt: Solche Änderungen laufen am vis-2-Editor und seinem Rückgängig vorbei.

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

## Grenzen

- **Keine eigene KI:** Die Collection ruft kein Sprachmodell auf und verwaltet keine Schlüssel. Alles läuft über den Assistenten von vis-2 oder einen externen MCP-Client; es gelten Kosten und Bedingungen des gewählten Anbieters.
- **Keine Garantie für jede Modellantwort:** Wie gut das Ergebnis wird, hängt vom Modell ab. Die Collection sorgt dafür, dass ein Widget mit unbrauchbaren Daten nicht abstürzt, nicht dafür, dass die KI es richtig konfiguriert.
- **Was die KI vom Widget-Typ sieht:** je Feld nur Name, Typ, Label, die Werte einer Auswahl und den Standardwert, keine Tooltips, Gruppen oder Grenzen. Konfigurator-Felder erscheinen nur als Typ `custom`; ihr Format kennt die KI aus der Kurzbeschreibung, dem Standardwert oder einer Vorlage.
- **Absolute Views:** Auf einer absoluten View gibt der Host einem neu eingefügten Collection-Widget eine Breite von 200 px, wenn die KI keine eigene Breite angibt. Passe die Größe danach an.
- **Datenschutz:** Was der Assistent liest (Views, Objekte, Zustände), geht an den gewählten Anbieter. Bei einem lokalen Modell bleibt es in deinem Netz.
- **Neue Funktion im Host:** Die KI-Funktionen von vis-2 und Admin sind neu, ihr Verhalten kann sich mit Updates ändern. Diese Seite beschreibt vis-2 2.20.8 und Admin 8.3.11.

## Sicherheit beim MCP-Endpunkt

- Admin richtet den eingebetteten Endpunkt ohne eigene MCP-Anmeldung ein und übergibt ihm den Standardbenutzer der Admin-Instanz. Ob die Anmeldung von Admin den Pfad `/mcp` schützt, ist nicht geprüft. Geh davon aus, dass jeder, der den Admin-Port erreicht, den Endpunkt nutzen kann, solange du für deine Installation nichts anderes festgestellt hast.
- Über den Endpunkt kann ein Client je nach Einstellung Datenpunkte schreiben, also Geräte schalten, und bei erlaubten Objekt- und Dateiänderungen auch Objekte und Dateien ändern.
- Mach den Admin-Port nicht aus dem Internet erreichbar; nutze den Endpunkt nur im eigenen Netz oder über ein VPN.
- Brauchst du eine Anmeldung, nimm den Adapter `mcp`: Eigenständig bietet er optional OAuth2, HTTP Basic oder ein Bearer-Token; als Web-Erweiterung gilt die Anmeldung der `web`-Instanz.
- Brauchst du den Endpunkt nicht, lass den KI-Assistenten von Admin ausgeschaltet.
