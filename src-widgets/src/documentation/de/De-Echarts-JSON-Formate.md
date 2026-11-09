# ECharts Widget – JSON-Formate

Diese Seite beschreibt, welche **JSON-Strukturen der Datenpunkt** im Datenmodus **JSON** des [ECharts-Widgets](De-Echarts-Widget.md#datenmodi-und-payload-familien) liefern muss — für beide Payload-Familien (**Fertige Serien** und **Tabelle/Spalten**), mit je einem kurzen Beispiel pro Format. Die Felder dazu stehen auf der Widget-Seite unter [Modus JSON](De-Echarts-Widget.md#modus-json).

## Kontext: Datenmodus und Payload-Familien

Das Widget kennt die Datenmodi **Verlauf** (Abruf über einen History-Adapter, kein JSON) und **JSON** (alles aus einem Datenpunkt). Im JSON-Modus wählt die gepinnte Auswahl **Payload-Familie**, **wie** der Payload gelesen wird:

| Payload-Familie     | Prinzip                                                                                   | Wer bestimmt die Serien?                                        |
| ------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **Fertige Serien**  | Der Payload trägt fertige Serien (Namen + Punkte). Auto-Erkennung von vier Formen.        | Der **Payload** — Konfigurator gestaltet/blendet nur nach Namen |
| **Tabelle/Spalten** | Der Payload ist eine Zeilenliste; Zeilenpfad + X-Spalte + Y-Spalten leiten die Serien ab. | Der **Nutzer** (Zuordnung) — der Payload liefert die Werte      |

Beide Familien lesen **denselben Datenpunkt** — der Familien-Wechsel setzt den Datenpfad zurück (Serien, Y-Achsen, Stil und Ausblenden der Payload-Serien, Zuordnung, Markierungen), der JSON-Datenpunkt bleibt.

## Der JSON-Datenpunkt

| Eigenschaft    | Vorgabe                                                                                       |
| -------------- | --------------------------------------------------------------------------------------------- |
| Typ            | `string` — der State-Wert muss der JSON-**Text** sein                                         |
| Schreiben      | `setState(id, JSON.stringify(objekt))` — **niemals das Objekt selbst**                        |
| Aktualisierung | Jede Wertänderung zeichnet das Diagramm neu (Live-Abonnement)                                 |
| Punktzahl      | Keine Obergrenze: **Max. Punkte** gilt nur im Verlauf, den Umfang begrenzt der Payload selbst |

> **Andere Werttypen:** Ein ungeparstes Objekt (statt eines Strings) liest das Widget als leer — es bleibt der Leerfall, kein Fehler. Zahlen und Booleans sind als Payload unbrauchbar: Sie parsen zwar, ergeben bei Fertige Serien aber den Leerfall und bei Tabelle/Spalten die Fehlerfläche. Datenpunkte vom ioBroker-Typ `json` funktionieren, solange der Wert ein String bleibt.

Beispiel: Datenpunkt anlegen und aus dem Skript-Adapter füllen:

```js
// Datenpunkt einmalig anlegen (Typ string):
createState('0_userdata.0.charts.tagesstatistik', { type: 'string', role: 'json', def: '' });

// Periodisch füllen — JSON.stringify macht den Text daraus:
const statistik = [
    { tag: '2026-01-01', erzeugung: 18.4, verbrauch: 24.1 },
    { tag: '2026-01-02', erzeugung: 12.7, verbrauch: 22.8 },
];
setState('0_userdata.0.charts.tagesstatistik', JSON.stringify(statistik), true);
```

## Familie „Fertige Serien"

Vier Payload-Formen werden automatisch erkannt — die Wahl geschieht allein über die Gestalt des JSON (kein Schalter im Konfigurator). Der Payload liefert nur Namen und Punkte, weitere Schlüssel einer Serie (`color`, `type`, `stack` …) liest das Widget nicht. Im Diagrammtyp **Torte** wird jede Serie ein Segment, die Segment-Aggregation verdichtet ihre Punkte. Die Karten beschreibt [JSON: Fertige Serien](De-Echarts-Widget.md#json-fertige-serien-kartesisch).

### Form 1: Objekt mit `series` (mehrere Serien)

```json
{
    "series": [
        {
            "name": "Erzeugung",
            "data": [
                [1767225600000, 0],
                [1767229200000, 420],
                [1767232800000, 1850]
            ]
        },
        {
            "name": "Verbrauch",
            "data": [
                [1767225600000, 610],
                [1767229200000, 720],
                [1767232800000, 680]
            ]
        }
    ]
}
```

Jedes Element wird eine Serie: `name` ist die Identität (Legende, Stil, Achsen-Bindung, Ausblenden), `data` die Punkte. Fehlt `name` oder ist es kein String, heißt die Serie `Series n`; ohne Array in `data` bleibt sie leer. Kommen `series` und `data` zusammen vor, gilt `series`.

### Form 2: Objekt mit `data` (eine Serie)

```json
{
    "data": [
        [1767225600000, 21.4],
        [1767229200000, 21.9],
        [1767232800000, 22.3]
    ]
}
```

Ergibt genau eine Serie namens `Series 1`.

### Form 3: Nacktes Punkte-Array (eine Serie)

```json
[
    [1767225600000, 21.4],
    [1767229200000, 21.9],
    [1767232800000, 22.3]
]
```

Der Payload selbst ist die Punkteliste — eine Serie (`Series 1`).

### Form 4: Array von Serien-Objekten (mehrere Serien)

```json
[
    {
        "name": "Erzeugung",
        "data": [
            [1767225600000, 0],
            [1767229200000, 420]
        ]
    },
    {
        "name": "Verbrauch",
        "data": [
            [1767225600000, 610],
            [1767229200000, 720]
        ]
    }
]
```

Den Ausschlag gibt das erste Element ungleich `null`: Ist es ein Objekt mit Array-Feld `data`, ist das Array eine Serienliste, sonst gilt Form 3. Inhaltlich ist es Form 1 ohne das umschließende Objekt.

### Punkt-Formate (alle Formen)

| Form            | Beispiel                                                                          | Zeitstempel                                                         |
| --------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Paar-Array      | `[1767229200000, 420]`                                                            | Erstes Element **muss eine Zahl** sein; sonst Array-Index und Lücke |
| Objekt          | `{ "ts": 1767229200000, "val": 420 }`                                             | `ts`, sonst `time`, sonst `x`; nicht-numerisch ⇒ Array-Index        |
| Objekt (Aliase) | `{ "time": 1767229200000, "value": 420 }` oder `{ "x": 1767229200000, "y": 420 }` | Wert-Schlüssel: `val`, sonst `value`, sonst `y`                     |
| Anderes         | `420`, `"420"`                                                                    | Kein Punkt: Array-Index und Lücke                                   |

```json
[
    { "ts": 1767225600000, "val": 21.4 },
    { "time": 1767229200000, "value": 21.9 },
    { "x": 1767232800000, "y": 22.3 }
]
```

Die Schlüssel dürfen sich von Punkt zu Punkt ändern — jeder Punkt wird einzeln gelesen. Zeitstempel gelten unverändert als Millisekunden: Sekunden-Epoch wird hier nicht umgerechnet, sortiert wird nicht. Ein String-Zeitstempel (`"ts": "2026-01-01"`) ist keine Zahl: der Punkt rutscht auf seinen Array-Index (0, 1, 2 …) und landet als Millisekunden-Wert am Anfang der Zeitachse (1970), nicht auf seiner Zeit.

### Regeln für Namen

- `name` ist die **Identität** der Serie: Stil, Achsen-Bindung und Ausblenden hängen am Namen. Der Stil eines verschwundenen Namens bleibt gespeichert und gilt wieder, sobald der Name zurückkommt; ein umbenannter Name ist eine neue Serie.
- Serien mit **demselben Namen** teilen sich Stil, Achse und Ausblenden — im Payload eindeutige Namen vergeben (der Konfigurator warnt bei Duplikaten).
- Der Payload allein entscheidet über Anzahl und Reihenfolge der Serien; hinzufügen/löschen ist im Konfigurator nicht möglich (nur ausblenden, reaktivierbar).
- Die Achsen gleicht der geöffnete Konfigurator ab: Ein neuer Name bekommt eine eigene Y-Achse, eine gesetzte Bindung bleibt bei Payload-Wechseln erhalten. Ein verschwundener oder ausgeblendeter Name verliert die Bindung, eine Achse ohne sichtbare Serie fällt. Ohne Bindung zeichnet die Laufzeit auf der ersten Y-Achse.

## Familie „Tabelle/Spalten"

Der Payload ist (oder enthält) ein **Array von Zeilen**; jede Objekt-Eigenschaft einer Zeile ist eine Spalte. Drei Einstellungen im Konfigurator (Sektion **Datenquelle**, Tab **Zuordnung**, und Sektion **Serien**) verbinden Payload und Diagramm; die Karten beschreibt [JSON: Tabelle/Spalten](De-Echarts-Widget.md#json-tabellespalten-kartesisch):

| Einstellung                      | Ort         | Bedeutung                                                                                                                                                                                                                                         |
| -------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Zeilenpfad** (`jsonRowPath`)   | Datenquelle | Dot-Pfad zum Zeilen-Array. Leer = der Payload **selbst** muss das Array sein. Die Chips bieten die über Objektschlüssel erreichbaren Arrays, die Laufzeit liest auch Array-Indizes. Trifft der Pfad kein Array, zeigt das Widget die Fehlerfläche |
| **X-Spalte** (`jsonXPath`)       | Datenquelle | Spalte der X-Dimension; leer = Zeilenindex                                                                                                                                                                                                        |
| **Y-Spalte** (`yPath`, je Serie) | Serien      | Eine Karte pro gebundener Y-Spalte; dazu Anzeigename (leer = letztes Pfadsegment), Stil, Wert-Verarbeitung                                                                                                                                        |

### Beispiel Kategorie: Payload selbst ist das Array

```json
[
    { "raum": "Wohnzimmer", "temp": 21.7 },
    { "raum": "Schlafzimmer", "temp": 19.2 },
    { "raum": "Küche", "temp": 22.9 }
]
```

- Zeilenpfad: **leer** (oberste Ebene)
- X-Spalte: `raum` — Text ⇒ **Kategorieachse** mit den Labels „Wohnzimmer", „Schlafzimmer", „Küche" (Payload-Reihenfolge, Duplikate bleiben erhalten)
- Y-Spalte: `temp` — eine Serie mit 21.7 / 19.2 / 22.9

### Beispiel Zeitachse: Datumsspalte

```json
[
    { "tag": "2026-01-01", "erzeugung": 18.4, "verbrauch": 24.1 },
    { "tag": "2026-01-02", "erzeugung": 12.7, "verbrauch": 22.8 },
    { "tag": "2026-01-03", "erzeugung": 21.3, "verbrauch": 25.6 }
]
```

- X-Spalte: `tag` — Datums-**Text** wird erkannt ⇒ **Zeitachse**; Punkte werden `[ms, wert]`, aufsteigend sortiert. `2026-01-01` liest als lokale Mitternacht — ISO-Strings mit Offset (`2026-01-01T12:00:00Z`) übernehmen ihre Offset-Angabe
- Y-Spalten: `erzeugung` **und** `verbrauch` — zwei Serien (zwei Karten in der Sektion Serien)

### Beispiel Zeilenpfad: verschachtelter Payload

```json
{
    "query": "SELECT ts, temp FROM history WHERE ...",
    "rows": [
        { "ts": 1767225600000, "temp": 21.4 },
        { "ts": 1767229200000, "temp": 21.9 }
    ]
}
```

- Zeilenpfad: `rows` — Metadaten wie `query` bleiben außen vor; der Chip trägt das Badge **Vorschlag**, gesetzt wird er nicht
- X-Spalte: `ts` (Epoch-Zahl ⇒ Zeitachse; Sekunden- und Millisekunden-Epoch werden erkannt)
- Y-Spalte: `temp`

### Beispiel Index: ohne X-Spalte

```json
[{ "temp": 21.4 }, { "temp": 21.9 }, { "temp": 22.3 }]
```

Ohne X-Spalte (oder wenn die Spalte nur `null` oder gar keine Werte hat) nummeriert das Widget die Zeilen: X-Labels `1`, `2`, `3` …; im Diagrammtyp Torte heißen die Segmente „Zeile 1", …

### Beispiel Pfade mit Array-Indizes

```json
[
    {
        "raum": "Wohnzimmer",
        "sensoren": [{ "wert": 21.7 }, { "wert": 48 }]
    },
    {
        "raum": "Schlafzimmer",
        "sensoren": [{ "wert": 19.2 }, { "wert": 52 }]
    }
]
```

- X-Spalte: `raum`
- Y-Spalten: `sensoren[0].wert` (Temperatur) und `sensoren[1].wert` (Luftfeuchte) — zwei Serien aus einem Payload. Ohne eigenen Namen heißen beide `wert` (letztes Pfadsegment), der Konfigurator warnt

### Beispiel Torte: mehrere Ringe

```json
[
    { "raum": "Wohnzimmer", "ist": 21.7, "soll": 21.0 },
    { "raum": "Schlafzimmer", "ist": 19.2, "soll": 19.5 },
    { "raum": "Küche", "ist": 22.9, "soll": 22.0 }
]
```

Im Diagrammtyp **Torte** wird jede Y-Spalte ein Ring (hier `ist` und `soll`). Die X-Spalte benennt die Segmente und bestimmt die Farbe: **gleicher Name = gleiche Farbe in allen Ringen**; gleichnamige Zeilen bleiben eigene Segmente und teilen einen Legendeneintrag. Bei einer Datumsspalte tragen die Segmente den Payload-Text, nach Zeit sortiert; Zeilen ohne lesbares Datum fallen weg. Ohne X-Spalte heißen die Segmente „Zeile n".

### X-Ableitungsregeln (Tabelle/Spalten)

Die Art der X-Achse leitet sich aus den Typen der Werte ungleich `null` in der X-Spalte ab. Schon ein einziger Datumswert in einer sonst reinen Text-Spalte macht sie zur Datumsspalte; jede andere Mischung ist eine Kategorie:

| X-Spalte                    | X-Art              | Verhalten                                                                                                                                                      |
| --------------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Datumswerte (auch mit Text) | **Zeitachse**      | Punkte `[ms, wert]`; Zeilen ohne lesbares Datum **fallen** (keine Position); aufsteigend sortiert, gleiche Zeitstempel behalten die Payload-Reihenfolge        |
| Beliebige andere Werte      | **Kategorieachse** | Labels sind der Zell-Text (`String(wert)`), Payload-Reihenfolge, **Duplikate bleiben**; `null`, fehlende, Objekt- und Array-Zellen fallen auf „Zeile n" zurück |
| Ohne X-Spalte / nur `null`  | **Zeilenindex**    | Labels `1..n`; Torten-Segmente „Zeile n"                                                                                                                       |

**Erkannte Datumsformen:** ISO 8601 **mit** `Z` oder Offset, `JJJJ-MM-TT`, `TT.MM.JJJJ` (optional `HH:mm[:ss]`), `MM/TT/JJJJ` (optional Zeit), Tag und Monat zweistellig, sowie Epoch-Zahlen — Millisekunden (≥ 10¹¹) und Sekunden (≥ 10⁹; kleinere Zahlen sind Kategorien). Formen ohne Offset gelten als **lokale Zeit**, Tagesdaten ohne Zeitangabe als lokale Mitternacht. ISO-Text ohne Offset (`2026-01-01T12:00:00`) ist **kein** Datum; als Text geschriebene Epoch-Werte (`"1767225600000"`) sind **keine** Zahlen und werden nicht als Datum gelesen.

## Werte-Interpretation (beide Familien)

Jeder Y-Wert durchläuft denselben Anfang der [Wert-Kette](De-Echarts-Widget.md#werte-verarbeitung-je-serie-wert-kette) — erst die **Wert-Zuordnung**, dann der **plottbare Wert**, dann die **Null-Werte**:

### 1. Wert-Zuordnung (`valueMap`, optional je Serie)

- Trifft `String(rohwert)` **exakt** einen Schlüssel der Zuordnung, übernimmt die zugeordnete Zahl.
- Ein Zielwert `null` (in der GUI: leeres Ziel) ist eine **bewusste Lücke** — sie wird von keiner Null-Werte-Stufe aufgefüllt.
- Nicht getroffene Werte laufen unverändert in den plottbaren Wert.

### 2. Plottbarer Wert

| Rohwert                                                    | Gelesen als                                  |
| ---------------------------------------------------------- | -------------------------------------------- |
| `true` / `false` (Boolean)                                 | `1` / `0`                                    |
| `"true"` / `"false"` (Text)                                | `1` / `0`                                    |
| Zahl                                                       | unverändert                                  |
| `"23,5"` (Komma ohne Punkt)                                | `23.5` — Komma-Dezimal                       |
| `"1.234,5"` (Komma und Punkt)                              | `1.234` — Tausender werden nicht unterstützt |
| `"23.5 °C"`, `"12 Watt"`                                   | Präfix-Zahl: `23.5`, `12`                    |
| alles andere (`"unlesbar"`, `""`, `null`, Objekte, Arrays) | **Lücke** (null) — kein Fehler               |

### 3. Null-Werte (`keep` / `forward` / `zero`)

Voreinstellung ist die Chart-Einstellung **Null-Werte** (`ignoreNull`): Sie steht nur im Modus Verlauf im Panel (Tab **Datenabruf**), wirkt aber auch hier. Das gleichnamige Feld im Tab **Daten** der Serienkarte (`nullMode`) überschreibt sie; die Segment-Zeilen der Torte bei Fertige Serien haben diesen Tab nicht. Bewusste (zugeordnete) Lücken bleiben in jedem Modus immun.

| Modus                                       | Bedeutung                                                                                                           |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Lücken belassen (`keep`)                    | Lücken bleiben Lücken (Standard)                                                                                    |
| Lücken auffüllen (letzter Wert) (`forward`) | letzter Wert wird fortgeschrieben — auf der Zeitachse **nach** der Sortierung; vor dem ersten Wert bleibt die Lücke |
| Lücken mit 0 füllen (`zero`)                | Lücken werden `0`                                                                                                   |

### Beispiel Interpretation

```json
[
    { "pumpe": true, "druck": "2,4" },
    { "pumpe": false, "druck": "2,1" },
    { "pumpe": true, "druck": "unlesbar" }
]
```

- `pumpe` (Y-Spalte): `1`, `0`, `1`
- `druck` (Y-Spalte): `2.4`, `2.1`, **Lücke** (bleibt im Modus „belassen" eine Lücke; „auffüllen" trüge 2.1 fort)

## Fehler- und Leerfälle

| Situation                                                                    | Verhalten                                                                                                                                         |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kein JSON-Datenpunkt gewählt                                                 | **Leerfall** „JSON-OID auswählen"                                                                                                                 |
| Tabelle: noch keine Y-Spalte gebunden                                        | **Leerfall** „Spalten zuordnen — X- und Y-Spalten im Konfigurator wählen"; hat Vorrang vor den anderen Leerfällen                                 |
| Datenpunkt leer / noch nie geschrieben                                       | **Leerfall** „Der Datenpunkt liefert keine darstellbaren Daten — Format prüfen; Payloads mit Zeilenliste brauchen die Familie „Tabelle/Spalten"." |
| Ungültiges JSON (`JSON.parse` schlägt fehl)                                  | **Fehlerfläche** mit der Parser-Meldung                                                                                                           |
| Tabelle: Zeilenpfad trifft kein Array (`rows path "…" is not an array`)      | **Fehlerfläche**; der Konfigurator markiert den Chip „Nicht mehr im Payload"                                                                      |
| Tabelle: Zeilenpfad leer, Payload kein Array (`payload is not a rows array`) | **Fehlerfläche**, auch vor der ersten Zuordnung; der Tab Zuordnung zeigt nur den Vorschlag                                                        |
| Tabelle: X-Spalte fehlt im Payload                                           | **Zeilenindex**, ohne Warnung                                                                                                                     |
| Tabelle: Y-Spalte fehlt im Payload                                           | **Leere Serie** (kein Fehler); der Konfigurator warnt „Y-Spalte … fehlt im Payload — die Serie rendert leer."                                     |
| Tabelle: Y-Spalte vom Typ Text                                               | Serie zeichnet nur die als Zahl interpretierbaren Zellen, Rest Lücken (Hinweis im Konfigurator)                                                   |
| Fertige Serien: Objekt ohne `series`/`data` oder JSON-Primitive              | **Leerfall** wie bei leerem Datenpunkt                                                                                                            |
| Kein Punkt mit Wert, z. B. Zeilenliste oder nackte Zahlen bei Fertige Serien | **Leerfall** wie bei leerem Datenpunkt; gilt auch, wenn bei Tabelle/Spalten alle Serien nur Lücken tragen                                         |
| Wert-Zuordnung trifft nicht                                                  | Wert läuft durch den plottbaren Wert (kein Fehler)                                                                                                |

> **Konfigurator-Analyse:** Bei Tabelle/Spalten analysiert der Konfigurator den aktuellen Payload live — Zeilenpfad-Chips mit Array-Länge, Spaltenliste mit Typ-Badge (Datum/Zahl/Text/Boolean/…) und Beispielwerte an der X-Spalte. Gesetzt wird nichts automatisch: Bei einem Objekt-Payload markiert das Badge **Vorschlag** den längsten Pfad, X- und Y-Spalten wählt der Nutzer. Die Analyse ist auf 10 Verschachtelungsebenen begrenzt und meldet das, die Laufzeit löst jede Tiefe. Bei Fertige Serien liest der Konfigurator nur die Seriennamen.

## Verwandte Seiten

- [ECharts Widget](De-Echarts-Widget.md) — Konfigurator-Referenz (Datenquelle, Serien, Achsen, …)
- [JSON Table Widget](De-JsonTable-Widget.md) — tabellarische **Anzeige** von JSON-Daten (ohne Diagramm)
