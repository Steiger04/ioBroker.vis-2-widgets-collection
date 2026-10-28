# ECharts Widget

![ECharts Widget](../img/collection-echarts.png)

## Beschreibung

Das ECharts Widget („Diagramm (ECharts)") rendert Apache-ECharts-Diagramme direkt in vis-2: Liniendiagramme, Balkendiagramme, Punktwolken und Torten-/Ringdiagramme. Alle chart-spezifischen Einstellungen werden in einem eigenen Konfigurator-Dialog gepflegt, der aus dem vis-2-Attributspanel über **Diagramm-Konfiguration bearbeiten** geöffnet wird.

Das Widget kennt zwei Datenquellen-Modi:

- **Verlauf** — ruft aggregierte Historie über einen History-Adapter ab (history, SQL, InfluxDB …). Zeitfenster, Aggregation, Intervall und Aktualisierung werden pro Diagramm und pro Serie konfiguriert.
- **JSON** — ein einziger Datenpunkt liefert die fertigen Daten als JSON-Payload. Welche JSON-Strukturen der Datenpunkt liefern muss, beschreibt die eigene Seite [ECharts JSON-Formate](De-Echarts-JSON-Formate.md).

## Einstellungshierarchie

Dieses Widget verwendet alle **vis-2 Einstellungen** und **Allgemeinen Einstellungen**. Siehe [Home](De-Home.md) für Details.

Die widgetspezifischen Einstellungen überschreiben die allgemeineren Einstellungen.

> **Konfigurator statt Panel:** Fast alle ECharts-Einstellungen leben im Konfigurator-Dialog, nicht im vis-2-Attributspanel. Das Panel selbst zeigt nur den Öffnen-Trigger und die vier Padding-Slider (siehe [unten](#vis-2-paneleeinstellungen)).

## Konzepte

### Diagramm-Familien

Der **Diagrammtyp** (oben im Konfigurator gepinnt) wählt gleichzeitig die Familie:

| Typ        | Familie    | Beschreibung                                                                                 |
| ---------- | ---------- | -------------------------------------------------------------------------------------------- |
| Linie      | Kartesisch | Zeitreihe als Linie; Flächenfüllung ist eine Serien-Eigenschaft („Fläche"), kein eigener Typ |
| Balken     | Kartesisch | Zeitreihe als Balken; optional Kalender-Bucketing über das Balken-Intervall                  |
| Punktwolke | Kartesisch | Zeitreihe als Streupunkte                                                                    |
| Torte      | Torte      | Eine Serie/Spalte = ein Ring; die Werte verdichten sich zu Segmenten                         |

Innerhalb der kartesischen Familie kann jede Serie den Typ individuell übersteuern (Linie/Balken/Punktwolke) — der Diagrammtyp ist die Voreinstellung, die Serie erbt ihn.

### Datenmodi und Payload-Familien

Der **Datenmodus** (zweite gepinnte Auswahl) gilt für das ganze Diagramm:

- **Verlauf** — jede Serie bindet ihren eigenen Datenpunkt (OID); abgerufen wird über `getHistory` mit Zeitfenster, Aggregation und maximaler Punktzahl. Voraussetzung: ein konfigurierter History-Adapter pro Datenpunkt.
- **JSON** — genau ein JSON-Datenpunkt liefert alle Serien. Unter dem Modus erscheint die dritte gepinnte Auswahl, die **Payload-Familie**:
    - **Serien-Dokument** — der Payload trägt fertige Serien (`{ series: […] }`, Arrays …). Anzahl und Werte der Serien bestimmt allein der Payload; im Konfigurator lassen sie sich nach Namen gestalten, an Achsen binden und ausblenden.
    - **Tabelle/Spalten** — der Payload ist eine Zeilenliste; Zeilenpfad, X-Spalte und Y-Spalten (in der Sektion Serien) leiten die Serien daraus ab. Hier bestimmt der Nutzer die Struktur, der Payload die Werte.

> **Grenz-Wechsel löschen:** Familien-Wechsel (z. B. Linie → Torte), Datenmodus-Wechsel (Verlauf ↔ JSON) und Payload-Familien-Wechsel (Serien-Dokument ↔ Tabelle/Spalten) setzen den Datenpfad zurück — Serien, Achsen und Markierungen fallen. Der Konfigurator warnt vor dem Wechsel mit einem Chip an der jeweiligen Auswahl. **Rückgängig** stellt einen versehentlichen Wechsel in einem Schritt wieder her. Der JSON-Datenpunkt selbst bleibt beim Payload-Familien-Wechsel erhalten (derselbe Zustand, anders gelesen).

Die JSON-Payload-Formate mit Beispielen: [ECharts JSON-Formate](De-Echarts-JSON-Formate.md).

### Werte-Verarbeitung je Serie (Wert-Kette)

Jeder Wert durchläuft auf dem Weg in das Diagramm eine feste Kette. Die Stufen sind Serien-Eigenschaften (Tab **Daten** bzw. **Transformation** auf der Serienkarte):

1. **Wert-Zuordnung** (`valueMap`) — trifft der Rohwert als Text exakt, übernimmt die zugeordnete Zahl; ein leeres Ziel ist eine **bewusste Lücke**, die nie aufgefüllt wird.
2. **Interpretation** — Booleans werden 1/0, numerische Texte gelesen (inkl. `"true"`/`"false"`, Komma-Dezimal `23,5`, Präfix-Parse `23.5 °C`); nicht Interpretierbares wird zur Lücke.
3. **NULL-Behandlung** — Lücken belassen / mit letztem Wert auffüllen / mit 0 füllen. Bewusste (gemappte) Lücken bleiben immun.
4. **Y-Versatz** — addiert einen festen Offset auf den Wert.
5. **Formel** — Rechenformel über das Symbol `val` (expr-eval-Syntax, z. B. `val / 1000 + 3`); Kontext-Symbole `smin`, `smax`, `savg`, `sfirst`, `slast` liefern Min/Max/Durchschnitt/erster/letzter Wert der Serie. Ungültige Formel ⇒ Rohwerte.
6. **Glättung** — zentriertes gleitendes Fenster über N Punkte (nur Verlauf/JSON-Zeitdaten).
7. **Kumulativ** — laufende Summe über die nicht-null Werte (läuft nach der Glättung).

Im Verlauf-Modus kommt davor noch der Abruf (Aggregation, Punkte-Limit) und im Balken-Modus das Bucketing; danach optional „Zukünftige Werte ausblenden".

### Achsen-Modell (kartesisch)

- **Serien folgen Achsen:** Eine frische Konfiguration hat keine Achse — die erste Serie erzeugt die erste Achse (links, Versatz 0, Gitterlinien an). Weitere Achsen entstehen über **Neue Achse** oder durch Umbinden und rücken auf ihrer Seite versetzt nach außen.
- **Y-Achse wählen:** Jede Serie bindet an genau eine Y-Achse (Tab **Basis** der Serienkarte). Verlässt die letzte Serie einer Achse diese, fällt die Achse mitsamt Konfiguration.
- **Namensgeber:** Zeigen mehrere Serien auf einer Achse, zeigt die Achse Name und Farbe der Serie, die sie zuerst gebunden hat (der „Namensgeber"). Zieht diese weiter, übernimmt die nächste verbleibende Serie.
- **Platz-Gedächtnis:** Jede Seite (links/rechts) merkt sich die Pixel-Plätze der Achsen. Achsen, die wegfallen, hinterlassen ihre Platzierung der nächsten Ankunft.
- **Ticks ausrichten** ist achsenübergreifend: eine Achse richtet sich an der zuerst angezeigten Achse aus; ein eigener Wertebereich oder Tick-Einstellungen heben die Ausrichtung für diese Achse auf.

Die Torte hat keine Achsen; die Sektion „Achsen & Zoom" existiert dort nicht.

## Der Konfigurator

![ECharts Konfigurator](../img/collection-echarts-editor.png)

Öffnen: vis-2-Attributspanel → Gruppe **Diagramm** → **Diagramm-Konfiguration bearbeiten**.

- **Links:** Sektionen-Schiene. Oben gepinnt: **Diagrammtyp**, **Datenmodus** und (im JSON-Modus) **Payload-Familie**. Darunter die aufklappbaren Sektionen — in dieser Reihenfolge:
    1. Datenquelle
    2. Verhalten
    3. Titel
    4. Serien
    5. _familienabhängig:_ Achsen & Zoom (kartesisch) **oder** Torten-Optionen (Torte)
    6. Legende
    7. Tooltip
    8. Farben
    9. Toolbox
- Jede Sektion startet eingeklappt mit einer Zusammenfassungszeile; ein ⚠-Zähler im Titel meldet Validierungsprobleme (z. B. Min ≥ Max, fehlende OID, verlorene Y-Spalte) — ein Klick springt zur betroffenen Stelle.
- **Rechts:** Live-Vorschau. Der Splitter zwischen Konfiguration und Vorschau ist ziehbar (Doppelklick = zurücksetzen); **Maximieren** vergrößert den Dialog.
- **Fußzeile:** **Rückgängig** (mehrstufig), **Anwenden** schreibt den rxData-Patch, **Abbrechen** verwirft (mit Rückfrage, solange Änderungen offen sind). Alles wird erst mit **Anwenden** im Widget wirksam.

### Gepinnte Auswahl

| Auswahl         | Werte                               | Beschreibung                                                                      |
| --------------- | ----------------------------------- | --------------------------------------------------------------------------------- |
| Diagrammtyp     | Linie · Balken · Punktwolke · Torte | Familen- und Typwahl in einem (siehe [Konzepte](#diagramm-familien))              |
| Datenmodus      | Verlauf · JSON                      | Chart-global, nicht pro Serie (siehe [Konzepte](#datenmodi-und-payload-familien)) |
| Payload-Familie | Serien-Dokument · Tabelle/Spalten   | Nur sichtbar im JSON-Modus                                                        |

## Sektion Datenquelle

Gilt chart-global als **Voreinstellung für alle Serien**; jede Serie kann die Abruf-Parameter auf ihrer Karte überschreiben (Erben-Overrides).

### Modus Verlauf

Tabs: **Zeitfenster** | **Datenabruf**.

**Tab Zeitfenster**

| Einstellung  | Werte / Typ                                                 | Standard | Beschreibung                                                                                                  |
| ------------ | ----------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| Zeitfenster  | Relativ · Statisch                                          | Relativ  | Relativ = bewegtes Fenster; Statisch = feste Start-/Endezeiten (DateTimePicker)                               |
| Zeitraum     | 10 m … 14 d (minutenbasiert) · 1–6 M / 1–2 J (Kalender)     | 1 Tag    | `10m`–`14d` zählen Minuten/Stunden/Tage; `1m`–`6m` sind Kalendermonate, `1y`/`2y` Kalenderjahre               |
| Ende         | jetzt · Minuten-/Stunden-/Tages-/Wochen-/Monats-/Jahresende | jetzt    | Rundet das Fenster-Ende auf die Grenze statt „jetzt" (17 Optionen, Adapter-`relativeEndOptions`)              |
| Start / Ende | Datum/Zeit                                                  | –        | Nur bei Statisch: ISO-Datumswahl. Unvollständig oder Start ≥ Ende ⇒ es gilt vorübergehend das Standardfenster |

**Tab Datenabruf**

| Einstellung                                | Werte / Typ                                                                                               | Standard        | Beschreibung                                                                                             |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------- | --------------- | -------------------------------------------------------------------------------------------------------- |
| Aggregation                                | Durchschnitt · Min–Max · Minimum · Maximum · Summe · Anzahl · Bei Änderung · Keine · Perzentil · Integral | Durchschnitt    | `getHistory`-Aggregation; Perzentil/Integral bringen eigene Parameter (unten)                            |
| Perzentil (%)                              | 0–100                                                                                                     | 50 (Server)     | Nur sichtbar unter Aggregation Perzentil                                                                 |
| Einheit (Sekunden)                         | Zahl                                                                                                      | 60 (Server)     | Nur unter Integral: Integrations-Intervall                                                               |
| Interpolation                              | keine · linear                                                                                            | keine (Server)  | Nur unter Integral                                                                                       |
| Zeitschrittweite (Sekunden, statt Punkten) | Zahl                                                                                                      | –               | Ersetzt die Punktanzahl durch ein festes Raster in Sekunden                                              |
| Max. Punkte                                | Zahl                                                                                                      | 500             | Obergrenze pro Serie (Hartlimit des Widgets: 5000)                                                       |
| Balken-Intervall                           | auto (Zeitachse) · 15 Minuten · 1 Stunde · 1 Tag · 30 Tage                                                | auto            | Nur Balken: erzwingt Kalender-Buckets (`30d` = Kalendermonate, 1.–1.). „auto" zeichnet auf der Zeitachse |
| Differenz zum vorherigen Balken            | Boolean                                                                                                   | aus             | Nur Balken mit Intervall: bildet die Differenz zum vorherigen Bucket (erster Balken entfällt)            |
| Stapelung                                  | Keine · Gestapelt · 100 % gestapelt                                                                       | Keine           | Chart-globaler Balken-Stapelmodus (ADR-0084). Wirkt auf Balken ohne eigene Stapel-Gruppe                 |
| Summe über Stapel                          | an/aus                                                                                                    | aus             | Nur bei „Gestapelt": zusätzliche Summen-Serie über der Stapelgruppe                                      |
| Null-Lücken                                | Lücken belassen · Lücken auffüllen (letzter Wert) · Lücken mit 0 füllen                                   | Lücken belassen | NULL-Behandlung als Voreinstellung; jede Serie kann überschreiben                                        |
| Aktualisierungsintervall (ms)              | Zahl                                                                                                      | 60000           | Periodischer Neuabruf; 0 = nie. Zusätzlich aktualisiert das Widget bei Wertänderung                      |

> **Balken-Stapel-Zeitachse:** Stapelung ohne Balken-Intervall richtet Balken nach der Datenposition aus — auseinanderliegende Zeitstempel zeichnen falsch ausgerichtete Stapel. Der Konfigurator meldet das mit einem Hinweis samt Ein-Klick-Fix „Balken-Intervall setzen".

> **Server-Aggregation zuerst:** Aggregation und Punktanzahl werden serverseitig ausgeführt — große Historien schonen den Client. „Keine"/„Bei Änderung" laden rohe Punkte; bei sehr großen Zeiträumen empfiehlt sich eine explizite Schrittweite oder Punktgrenze.

### Modus JSON

Ohne Payload-Bindung zeigt die Sektion nur den Datenpunkt. Mit Familie **Tabelle/Spalten** erscheinen Tabs **Datenpunkt** | **Zuordnung**:

| Einstellung           | Werte / Typ | Standard        | Beschreibung                                                                                                                         |
| --------------------- | ----------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| JSON-Datenpunkt (OID) | id          | –               | Der Datenpunkt, dessen **String-Wert** den JSON-Payload liefert                                                                      |
| Zeilenpfad            | Pfad        | (oberste Ebene) | Dot-Pfad zum Zeilen-Array; leer = das Dokument selbst muss das Array sein. Array-Indizes erlaubt (`anlage.strings`, `rows[0].werte`) |
| X-Spalte              | Pfad        | (Zeilenindex)   | Spalte für die X-Dimension. Datumsspalte ⇒ Zeitachse, sonst Kategorie; leer ⇒ Zeilenindex                                            |

Der Konfigurator analysiert den aktuellen Payload: Spalten erscheinen mit Typ-Badge (Datum/Zahl/Text/Boolean/…), Beispielwerten („z. B. …") und einem Vorschlag-Badge für die wahrscheinlichste X-Spalte. Die Suche ist auf 10 Verschachtelungsebenen begrenzt. Nicht mehr im Dokument enthaltene Pfade markiert er als „Nicht mehr im Dokument".

Die Y-Spalten werden in der Sektion Serien als eigene Karten gebunden (siehe unten). Formate und Regeln: [ECharts JSON-Formate](De-Echarts-JSON-Formate.md).

## Sektion Verhalten

Tabs: **Bewegung** | **Renderer**.

| Einstellung          | Werte / Typ                                              | Standard | Beschreibung                                                                                         |
| -------------------- | -------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------- |
| Animation            | Boolean                                                  | an       | Animation beim Zeichnen                                                                              |
| Animationsdauer (ms) | 0–2000 (Slider, 50er-Schritte)                           | 600      | Nur wirksam bei eingeschalteter Animation                                                            |
| Easing               | Standard · Linear · Cubic out · Cubic in-out · Elastisch | Standard | ECharts-Easing-Kurve                                                                                 |
| Renderer             | Canvas · SVG                                             | Canvas   | Canvas = schneller bei Live-Daten und großen Datenmengen; SVG = scharf bei Druck, Export, Skalierung |

## Sektion Titel

Tabs: **Text** | **Position** | **Stil** | **Vorlagen**.

| Einstellung        | Werte / Typ                               | Standard    | Beschreibung                               |
| ------------------ | ----------------------------------------- | ----------- | ------------------------------------------ |
| Diagrammtitel      | Text                                      | –           | Darf vis-2-Bindungen `{oid.val}` enthalten |
| Titel-Position     | Oben/Unten × links/mittig/rechts (3×2)    | Oben mittig |                                            |
| X-Versatz          | px                                        | 0           | Nur an linken/rechten Ankern               |
| Y-Versatz          | px                                        | 0           | An jedem Anker                             |
| Titelfarbe         | Farbe                                     | geerbt      | Leer = Theme-Textfarbe                     |
| Titel-Schriftgröße | Zahl                                      | geerbt      |                                            |
| Schriftstärke      | Normal · Fett · Fetter · Dünner · 100–900 | Normal      |                                            |
| Schriftstil        | Normal · Kursiv · Schief                  | Normal      |                                            |

Der Tab **Vorlagen** trägt das [Erweiterte JSON](#vorlagen--erweitertes-json) des Titels.

## Sektion Serien

Der Aufbau der Sektion hängt von Datenmodus, Payload-Familie und Diagrammtyp ab:

| Kontext                                | Ansicht                                                                                                                                                                 |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Verlauf (alle Typen)                   | Serien-Karten mit Tabs **Basis \| Daten \| Darstellung \| Werte \| Erweitert**                                                                                          |
| JSON, Serien-Dokument (kartesisch)     | Karten pro Payload-Serie, Tabs **Basis \| Transformation \| Darstellung \| Werte \| Erweitert** —Payload bestimmt Anzahl/Namen; gestalten, an Achsen binden, ausblenden |
| JSON, Tabelle/Spalten (kartesisch)     | Karten pro gebundener Y-Spalte: Name, Y-Spalte (Pfad), Darstellung, Werte                                                                                               |
| Torte (Verlauf & JSON Serien-Dokument) | Segment-Zeilen: Anzeigename, Farbe, (Verlauf: OID je Segment)                                                                                                           |
| Torte, Tabelle/Spalten                 | Zeilen je Y-Spalte = Ring; X-Spalte benennt die Segmente                                                                                                                |

Karten-Kopf: Farbmuster, Name, (OID/Spalte), Sortieren ▲▼, Duplizieren, Entfernen. **Serie hinzufügen** (Verlauf) öffnet die OID-Auswahl — die erste Serie erzeugt die erste Y-Achse.

### Serien-Karte im Verlauf

**Tab Basis**

| Einstellung     | Beschreibung                                                                       |
| --------------- | ---------------------------------------------------------------------------------- |
| Name            | Anzeigename (Legende, Tooltip)                                                     |
| OID             | Datenpunkt der Serie; im Verlauf auf History-fähige OIDs beschränkt                |
| Typ             | erben (→ Diagrammtyp) · Linie · Balken · Punktwolke — ab zwei Serien sichtbar      |
| Y-Achse         | Bindung an eine Achse (Standard: erste Achse)                                      |
| History-Instanz | Auto (aus der Datenpunkt-Konfiguration) oder fest gewählte Instanz (z. B. `sql.0`) |

**Tab Daten** — Abruf-Overrides (erben die Datenquelle-Voreinstellung, Eintrag nennt das Erbe-Ziel) **und** die Transformationsstufen der Wert-Kette:

| Einstellung                 | Beschreibung                                                                                                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Aggregation                 | erben (→ Chart-Aggregation) oder eigener Wert; Perzentil/Integral-Parameter erscheinen mit                                                                               |
| Differenz                   | erben · differenzieren · roh — nur effektiver Balken-Modus                                                                                                               |
| X-Versatz                   | Aus/kein · Sekunden (Zahl) · ±1–6 Monate / ±1–2 Jahre (Kalender; positiv = in die Vergangenheit) — verschiebt das Anfrage-Fenster, um z. B. Vorjahreswerte zu überlagern |
| Formel                      | Rechenformel über `val` (und `smin`/`smax`/`savg`/`sfirst`/`slast`), z. B. `val / 1000 + 3`. Ungültige Formel ⇒ Rohwerte (mit Hinweis)                                   |
| Y-Versatz                   | Zahlen-Offset vor der Formel: `f(val + yVersatz)`                                                                                                                        |
| NULL-Behandlung             | erben (→ Chart-Einstellung) · belassen · auffüllen · 0                                                                                                                   |
| Glättung (Punkte)           | zentriertes gleitendes Fenster; Ränder abgeschnitten, Lücken bleiben, nie interpoliert                                                                                   |
| Kumulativ summieren         | laufende Summe; nach der Glättung, kein Reset                                                                                                                            |
| Zukünftige Werte ausblenden | schneidet Punkte nach „jetzt" ab                                                                                                                                         |

**Tab Darstellung** — gruppiert nach Typ (Linie · Balken · Fläche) plus Legende-Verhalten:

| Einstellung                        | Beschreibung                                                                                               |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Serienfarbe                        | Farb-Feld; leer = Palettenplatz                                                                            |
| Linienstil / Linienbreite          | durchgezogen · gestrichelt · gepunktet / px                                                                |
| Glättung                           | geschmeidige Kurve (spline)                                                                                |
| Stufe                              | Keine · Stufe (Start) · Stufe (Mitte) · Stufe (Ende) — Treppendarstellung                                  |
| Symbole anzeigen / Symbolgröße     | Punktsymbole auf der Linie / px                                                                            |
| Lücken verbinden                   | Linie über Null-Lücken hinwegzeichnen (unabhängig von der NULL-Behandlung)                                 |
| Linienschatten                     | Weichzeichnen in Serienfarbe (px)                                                                          |
| Flächenfüllung                     | Aus · Flächig · Verlauf (CSS-`linear-gradient`), dazu Flächen-Deckkraft                                    |
| Stapel-Gruppe                      | erben (→ Chart-Stapelung) · Kein Stapel · Gruppe A/B/C — eigene Gruppen stapeln unabhängig vom Chart-Modus |
| Balkenbreite (px/%)                | z. B. `20` oder `30 %`; leer = auto                                                                        |
| Balken-Abstand / Kategorie-Abstand | 0–1 (ECharts `barGap`/`barCategoryGap`)                                                                    |
| Balken-Eckradius                   | px                                                                                                         |
| Werte-Labels                       | an/aus; Balken: Label-Position (Über dem Balken · Im Balken oben/mitte/unten), Label-Größe, Label-Farbe    |
| Nur in Legende                     | Serie ausblenden, Legenden-Eintrag bleibt (abwählbar)                                                      |

**Tab Werte** — Wert-Präsentation:

| Einstellung          | Beschreibung                                                                                                                                         |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Einheit              | Suffix im Tooltip, Legendenwert und Label; eine Achse erbt sie, wenn alle gebundenen Serien dieselbe Einheit tragen                                  |
| Nachkommastellen     | Klemmt die Serien-Werte; 0 ist eine Angabe, nicht „unset"                                                                                            |
| Wert-Zuordnung       | Rohwert → Zahl-Tabelle; exaktes String-Matching; leeres Ziel = bewusste Lücke                                                                        |
| Text bei wahr/falsch | Boolean-OIDs: Texte für 1/0 (ein Eintrag ergibt den anderen aus dem Adapter-Standard)                                                                |
| Zustandsnamen        | Aufzählung (enum): Wert → Text (bei OID-Auswahl aus `common.states` vorbelegt); trifft Tooltip/Legende/Label exakt, Achsen-Ticks den nächstliegenden |

**Tab Erweitert** — [Erweitertes JSON](#vorlagen--erweitertes-json) der Serie: Deep-Merge **unter** die GUI-Einträge (GUI gewinnt jede Kollision); Datenpunkte sind force-set. Escape-Hatch für ECharts-Schlüssel, die die GUI nicht freilegt (`markPoint`, `emphasis`, `label.formatter` …).

### JSON: Serien-Dokument (kartesisch)

Der Payload legt die Serien fest — hinzu-/löschen ist hier nicht möglich, nur **gestalten** (Tabs wie Verlauf, statt **Daten** aber **Transformation**: X-Versatz entfällt, Formel/Y-Versatz/NULL/Glättung/Kumulativ bleiben) und **ausblenden** („Ausgeblendete Serien" sind reaktivierbar). Serie mit gleichem Namen teilen sich Stil, Achsen-Bindung und Ausblenden — im Payload eindeutige Namen vergeben (der Konfigurator warnt).

### JSON: Tabelle/Spalten (kartesisch)

Eine Karte pro gebundener Y-Spalte: Name (frei), Y-Spalte (Pfad-Auswahl aus der erkannten Spaltenliste), Achsen-Bindung, Darstellung, Werte, Erweitert. Zeilenpfad und X-Spalte liegen in der Sektion Datenquelle. Eine im Dokument fehlende Y-Spalte rendert eine leere Serie (Hinweis, kein Fehler); eine Text-Spalte zeichnet nur die als Zahl interpretierbaren Werte.

### Torte: Segment-Zeilen

- **Verlauf:** eine Zeile pro Segment — Anzeigename, Farbe, OID. Die Werte verdichtet die **Segment-Aggregation** (Sektion Torten-Optionen).
- **JSON Serien-Dokument:** Zeilen pro Payload-Serie — Name (aus Payload), Farbe, per-Segment-Erweitertes-JSON.
- **JSON Tabelle/Spalten:** eine Zeile je Y-Spalte (Ring). Die X-Spalte benennt die Segmente und bestimmt die Farbe — gleicher Name = gleiche Farbe in allen Ringen; ohne X-Spalte heißen Segmente „Zeile n".

## Sektion Achsen & Zoom (kartesisch)

Tabs: **Achsen** | **Markierungen** | **Zoom**.

### X-Karte

Tabs: **Basis** | **Beschriftung** | **Ticks & Gitter** | **Erweitert**.

| Einstellung                                           | Standard                       | Beschreibung                                                                                                                                                                                                                                                                                  |
| ----------------------------------------------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Achsname                                              | –                              | Beschriftung unter der Achse                                                                                                                                                                                                                                                                  |
| Position                                              | unten                          | oben spiegelt die Achse über das Diagramm                                                                                                                                                                                                                                                     |
| Versatz (px)                                          | 0                              | bewegt die Achse von Diagramm weg (Feinjustur)                                                                                                                                                                                                                                                |
| Zeitformat                                            | Automatisch                    | [moment.js](https://momentjs.com/docs/#/displaying/format/)-Token (z. B. `HH:mm`, `ddd`, `HH:mm <br /> DD.MM.`) für Achse **und** Tooltip-Kopf. Auto = adaptiv (Sekunden < 30 min Spanne, Datum bei Tageswechsel). Bei JSON-Tabellen mit Kategorie-X versteckt (Labels sind der Payload-Text) |
| Achsenfarbe                                           | Theme                          | Linie, Labels und Name                                                                                                                                                                                                                                                                        |
| Beschriftung drehen                                   | 0°                             | schräge Zeit-Labels für schmale Widgets                                                                                                                                                                                                                                                       |
| Beschriftungsgröße (px)                               | 12                             |                                                                                                                                                                                                                                                                                               |
| Ticks anzeigen / Strichfarbe                          | an / geerbt                    |                                                                                                                                                                                                                                                                                               |
| Gitterlinien / Gitterfarbe / Gitterbreite / Strichart | aus / Theme / 1 / durchgezogen | vertikale Gitter                                                                                                                                                                                                                                                                              |
| Tick-Segmente                                         | 6                              | Ziel-Tick-Anzahl                                                                                                                                                                                                                                                                              |
| Min. Intervall                                        | –                              | Millisekunden (z. B. 3600000 = 1 h)                                                                                                                                                                                                                                                           |
| Namensdrehung (°)                                     | 0                              | Feinjustur                                                                                                                                                                                                                                                                                    |

### Y-Achsen-Karten

Tabs: **Basis** | **Werte** | **Skala & Ticks** | **Darstellung** | **Erweitert**. Karte: Achsname (Standard: Namensgeber-Serie), Seite, Platz `Seite · Platz/Gesamt`, „näher ans Diagramm"/„weiter weg", Entfernen.

| Einstellung                                             | Standard                     | Beschreibung                                     |
| ------------------------------------------------------- | ---------------------------- | ------------------------------------------------ |
| Achsname                                                | –                            | zeigt per Default den Namensgeber                |
| Seite                                                   | Links (Achse 0) / Rechts     |                                                  |
| Versatz (px)                                            | 0                            | Stapelung auf derselben Seite                    |
| Y min / Y max                                           | auto                         | fester Wertebereich                              |
| Y-Beschriftungsformat                                   | –                            | String-Template `{value} kW`                     |
| Null nicht erzwingen                                    | aus                          | `scale`: Achse muss 0 nicht enthalten            |
| Logarithmische Y-Achse                                  | aus                          | `type: 'log'`                                    |
| Ticks ausrichten                                        | an (ab 2 Achsen)             | siehe [Achsen-Modell](#achsen-modell-kartesisch) |
| Tick-Segmente / Min. Intervall                          | auto                         | Tick-Dichte bzw. z. B. 1 für Ganzzahl-Achsen     |
| Gitterlinien / Gitterfarbe / Gitterbreite / Strichart   | Achse 0: an · sonst aus      | horizontale Gitter im vollen Stil                |
| Beschriftungsgröße (px)                                 | 12                           |                                                  |
| Achsenfarbe                                             | Serienfarbe des Namensgebers |                                                  |
| Namensposition / Namensabstand (px) / Namensdrehung (°) | Mittig · 18 · 0              |                                                  |
| Erweitertes JSON                                        | –                            | Deep-Merge unter die GUI (GUI gewinnt)           |

> **Phantom-Achsen:** Achsen, die keine Serie mehr bindet, existieren nicht — sie fallen beim Öffnen still. Im JSON Serien-Dokument heilt der Editor über die Overlay-Namen; entfernte Payload-Serien nehmen ihre Achse mit (Undo hilft).

### Markierungen

Bezugslinien und Bänder mit Stil und Beschriftung, an einer Y-Achse verankert. Pro Markierung:

| Einstellung                                  | Beschreibung                                                                                                                                                                                                                               |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Obere/Untere Grenze (Wert oder OID)          | Zahl **oder** Datenpunkt (löst live per Abonnement). Beide Grenzen ⇒ Band (Fläche) plus zwei gestaltete Kantenlinien; genau eine ⇒ Linie                                                                                                   |
| Achse                                        | Y-Achse, an der die Markierung hängt                                                                                                                                                                                                       |
| Bandfüllung                                  | Deckkraft 0–1 (Standard 0.2)                                                                                                                                                                                                               |
| Farbe / Linienstil / Linienbreite / Schatten | Stil der Kante(n); Breite-Standard 2                                                                                                                                                                                                       |
| Beschriftung obere/untere Grenze             | je eigene Gruppe: Text (leer = Wert-Fallback: die aufgelöste Grenze als Label), Position (12 ECharts-Plätze: Links/Mitte/Rechts + Innen-\*-Varianten), X-Versatz, Schriftgröße, Textfarbe (leer = Markierungsfarbe bzw. Achsen-Text-Token) |

### Zoom

| Einstellung                     | Beschreibung                                                                  |
| ------------------------------- | ----------------------------------------------------------------------------- |
| Zoom-Schieber                   | dataZoom-Slider unter dem Diagramm                                            |
| Maus/Touch-Zoom                 | Scroll/Pinch-Zoom ohne sichtbares Element                                     |
| Zoom nach Leerlauf zurücksetzen | aus · 10 s … 30 min — setzt den Zoom nach Ruhefrist aufs volle Fenster zurück |

## Sektion Torten-Optionen (Torte)

Tabs: **Form** | **Werte** | **Erweitert**.

| Einstellung             | Werte / Typ                                             | Standard         | Beschreibung                                                                                                                                                |
| ----------------------- | ------------------------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Donut-Innenradius (0–1) | 0–1                                                     | 0                | 0 = volle Torte; 0.5 ≈ Ring                                                                                                                                 |
| Rose-Modus              | Keine · Radius · Fläche                                 | Keine            | Radius-/Flächen-proportionale Rose                                                                                                                          |
| Segment-Aggregation     | Letzter Wert · Summe · Durchschnitt · Minimum · Maximum | Letzter Wert     | Nur Verlauf/JSON-Zeitdaten: verdichtet die abgerufenen Punkte je Serie zu einem Segmentwert. (Tabelle/Spalten: jede Zeile **ist** der Wert — das Feld ruht) |
| Segment-Beschriftung    | Keine · Name · Prozent · Name + Prozent                 | Name + Prozent   |                                                                                                                                                             |
| Beschriftungsfarbe      | Farbe                                                   | Erbt (Textfarbe) | immer explizit emissiv — verhindert den ECharts-Auto-Kontrast-Halo auf transparentem Grund                                                                  |
| Erweitertes JSON        | –                                                       | –                | ganzes-Torten-Raw (Deep-Merge unter die GUI; Ziel für `labelLine`, `emphasis`, `startAngle`, `selectedMode` …). Pro Segment: Roh auf der Segment-Zeile      |

## Sektion Legende

Tabs: **Anzeige** | **Stil** | **Vorlagen**.

**Anzeige**

| Einstellung                   | Standard    | Beschreibung                                 |
| ----------------------------- | ----------- | -------------------------------------------- |
| Legende anzeigen              | an          |                                              |
| Legenden-Position             | Oben mittig | 3×3-Raster                                   |
| Werte in der Legende anzeigen | aus         | `Name [Wert]` — Live-Wert bzw. letzter Punkt |

**Stil** — Gruppen **Text** · **Symbol** · **Rahmen / Panel**:

| Einstellung                                                         | Standard               | Beschreibung                                                                     |
| ------------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------- |
| Textfarbe / Schriftgröße / Schriftstärke / Schriftstil              | geerbt                 | `textStyle` der Legende                                                          |
| Anordnung                                                           | Auto                   | Auto folgt der Kante (oben/unten = Reihe, links/rechts = Spalte); überschreibbar |
| Symbolform                                                          | Geerbt                 | Kreis, Rechteck, Abgerundetes Rechteck, Dreieck, Raute, Nadel, Pfeil, Keins      |
| Symbolbreite / Symbolhöhe / Abstand zwischen Einträgen              | 25 · 14 · 10 (ECharts) |                                                                                  |
| Farbe inaktiver Einträge                                            | #ccc                   | abgewählte Serien                                                                |
| Hintergrund / Rahmenfarbe / Rahmenstärke / Eckradius / Innenabstand | – / #ccc / 0 / 0 / 5   | Legende als Panel                                                                |
| X-Versatz / Y-Versatz                                               | 0                      | Nudge von der Kante; Mittelspalte/-reihe ignoriert ihn                           |

Legenden-Selektion steuert die sichtbaren Serien; Achsen folgen der Auswahl (eine Achse ohne sichtbare Serie verschwindet).

## Sektion Tooltip

Tabs: **Verhalten** | **Werte** | **Vorlagen**.

| Einstellung                     | Standard                             | Beschreibung                                                                                                                                                        |
| ------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tooltip-Auslöser                | Achse (kartesisch) / Element (Torte) | Achse = alle Serien am Zeitpunkt; Keine = aus                                                                                                                       |
| Tooltip-Vorlage                 | –                                    | ECharts-String-Template `{a}` Serienname · `{b}` Kategorie/Zeitpunkt · `{c}` Messwert · `{d}` Anteil (Torte); darf vis-2-Bindungen enthalten. Live-Beispiel daneben |
| Dezimalstellen                  | 0                                    | klemmt die Tooltip-Werte                                                                                                                                            |
| Einheiten-Suffix                | –                                    | z. B. ` kW`                                                                                                                                                         |
| Tooltip-Hintergrundfarbe        | Theme                                |                                                                                                                                                                     |
| Keine Interpolation im Tooltip  | aus                                  | nur kartesisch: verwirft Zeilen, deren Wert am gehoverten Zeitpunkt interpoliert ist                                                                                |
| Nullwerte im Tooltip ausblenden | aus                                  | nur kartesisch                                                                                                                                                      |
| Komma als Dezimaltrennzeichen   | aus                                  | wirkt auf alle Diagramm-Werte (Tooltip, Legende, Standard-Y-Labels); ein explizites Achsenformat bleibt                                                             |

## Sektion Farben

Tabs: **Palette** | **Zeichenfläche** | **Rahmen** | **Farbskala** (nur kartesisch).

| Einstellung                                                                         | Standard                            | Beschreibung                                                                                                                                |
| ----------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Palette-Quelle                                                                      | Theme (auto)                        | Theme folgt dem vis-2/MUI-Theme; Preset (Auswahl, Standard Tableau) oder Eigene Farben (`;`-getrennte Liste)                                |
| Dunkelmodus                                                                         | Auto (Theme folgen)                 | Hell/Dunkel erzwingen                                                                                                                       |
| Hintergrund                                                                         | transparent                         | CSS-Farbe der Diagrammfläche                                                                                                                |
| Rahmen anzeigen / Rahmenbreite (px) / Rahmenfarbe / Rahmenstil / Rahmenabstand (px) | aus · 1 · Divider-Token · solid · 0 | Container-CSS-Rahmen **um** die Diagrammfläche (kein ECharts-Objekt). Rahmenstil: die 8 CSS-Werte (Doppelt, Groove, Ridge, Inset, Outset …) |
| Wert→Farb-Skala                                                                     | aus · 0–100 · Theme-Rampe           | kontinuierlicher Farbverlauf nach Wert (überschreibt Serienfarben); Farbstops `;`-getrennt, leer = Theme-Rampe (blau→grün→orange→rot)       |

## Sektion Toolbox

Aus (kein Toolbox-Block) oder an — dann Tabs **Allgemein** | **Funktionen**.

**Allgemein:** Position (3×3), Ausrichtung (horizontal/vertikal), Icon-Größe, Icon-Abstand, Beschriftung bei Hover, Icon-Farbe, Hover-Farbe, Rahmen (Breite/Farbe/Eckradius/Innenabstand), Hintergrund.

**Funktionen** (die fünf ECharts-Features):

| Funktion             | Optionen                                                                       |
| -------------------- | ------------------------------------------------------------------------------ |
| Als Bild speichern   | Format (png/jpeg/svg), Dateiname (leer = Diagrammtitel), Pixel-Ratio           |
| Zurücksetzen         | Zoom- und Typ-Wechsel des Nutzers zurücknehmen                                 |
| Datenansicht         | Tabelle der Rohdaten; Schreibgeschützt default **an** (vis ist Anzeige)        |
| Zoomen               | Icons für Bereichs-Zoom (bedient vorhandene dataZoom-Komponenten); Filtermodus |
| Diagrammtyp wechseln | nur kartesisch: Typen (Linie/Balken/Stapel/Flächig)                            |

## Vorlagen & Erweitertes JSON

Titel, Legende, Tooltip, Serien, Achsen und die X-Karte tragen je ein **Erweitertes JSON** (Tab Vorlagen bzw. Erweitert): ein freies JSON für ECharts-Optionen **dieser Komponente**. Regeln:

- **Deep-Merge unter die GUI** — die GUI gewinnt jede Kollision; nur Schlüssel wirken, die die GUI nicht selbst verwaltet.
- **Vorlagen-Menü:** kuratierte Bausteine (nach Kategorie gruppiert, durchsuchbar). Aktive Vorlagen erscheinen als Chips und verschmelzen mit dem eigenen Text.
- **Chips folgen dem Text:** wer die Schlüssel einer Vorlage im Editor löscht, verliert ihren Chip; ungültiges JSON sperrt das Menü und lässt die Aktivierungen unangetastet.
- Beim Familien-Wechsel werden Aktivierungen, die die neue Familie nicht kennt, beim Übernehmen entfernt (Warnung vorher).

## vis-2-Paneleeinstellungen

Im vis-2-Attributspanel (außerhalb des Konfigurators) trägt das Widget:

| Feldname                                                | Typ                        | Standard | Beschreibung                                                                                                                                         |
| ------------------------------------------------------- | -------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| chartConfig                                             | custom                     | –        | Der Button **Diagramm-Konfiguration bearbeiten** — öffnet den Konfigurator                                                                           |
| paddingTop / paddingBottom / paddingLeft / paddingRight | slider (0–10, Schritt 0.1) | 0        | Diagramm-Padding in MUI-Units (1 = 8 px), außen am Rahmen **additiv** unter dem allgemeinen `basePadding`. 0 = pixelidentisch zum früheren Verhalten |

Alle übrigen Einstellungen (Modi, Serien, Achsen, …) sind versteckte rxData-Felder, die allein der Konfigurator schreibt — inklusive der base64-Konfigurations-Blobs (`seriesConfig`, `chartConfig`, `toolboxConfig`, `markLines`, `yAxes`, `xAxis`, `jsonSeriesStyle`, `jsonHidden`). Diese Blobs sind ein Speicherformat des Editors, kein dokumentierter Kontrakt — von Hand editieren ist unsupported.

## Verwandte Seiten

- [ECharts JSON-Formate](De-Echarts-JSON-Formate.md) — Datenpunkt-Payloads mit Beispielen
- [Home](De-Home.md) — Common-Einstellungen aller Widgets
