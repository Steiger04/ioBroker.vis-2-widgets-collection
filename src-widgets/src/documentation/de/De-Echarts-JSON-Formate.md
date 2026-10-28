# ECharts Widget – JSON-Formate

Diese Seite beschreibt, welche **JSON-Strukturen der Datenpunkt** im Datenmodus **JSON** des [ECharts-Widgets](De-Echarts-Widget.md) liefern muss — für beide Payload-Familien (**Serien-Dokument** und **Tabelle/Spalten**), mit je einem kurzen Beispiel pro Format.

## Kontext: Datenmodus und Payload-Familien

Das Widget kennt die Datenmodi **Verlauf** (History-Adapter-Abruf, kein JSON) und **JSON** (alles aus einem Datenpunkt). Im JSON-Modus wählt die gepinnte Auswahl **Payload-Familie**, **wie** das Dokument gelesen wird:

| Payload-Familie     | Prinzip                                                                                    | Wer bestimmt die Serien?                                        |
| ------------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| **Serien-Dokument** | Das Dokument trägt fertige Serien (Namen + Punkte). Auto-Erkennung von vier Formen.        | Der **Payload** — Konfigurator gestaltet/blendet nur nach Namen |
| **Tabelle/Spalten** | Das Dokument ist eine Zeilenliste; Zeilenpfad + X-Spalte + Y-Spalten leiten die Serien ab. | Der **Nutzer** (Zuordnung) — der Payload liefert die Werte      |

Beide Familien lesen **denselben Datenpunkt** — der Familien-Wechsel löscht nur die abgeleitete Konfiguration (Serien/Achsen), nicht die OID.

## Der JSON-Datenpunkt

| Eigenschaft    | Vorgabe                                                                |
| -------------- | ---------------------------------------------------------------------- |
| Typ            | `string` — der State-Wert muss der JSON-**Text** sein                  |
| Schreiben      | `setState(id, JSON.stringify(objekt))` — **niemals das Objekt selbst** |
| Aktualisierung | Jede Wertänderung zeichnet das Diagramm neu (Live-Abonnement)          |

> **Objekte lesen als leer:** Übergibt das Skript ein ungeparstes Objekt (statt eines Strings), liest das Widget den Wert als leer — es bleibt der Leerfall, kein Fehler. Zahlen-/Boolean-Werte sind als Payload unbrauchbar. Datenpunkte vom ioBroker-Typ `json` funktionieren, solange der Inhalt ein String bleibt.

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

## Familie „Serien-Dokument"

Vier Dokument-Formen werden automatisch erkannt — die Wahl geschieht allein über die Gestalt des JSON (kein Schalter im Konfigurator).

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

Jedes Element wird eine Serie: `name` ist die Identität (Legende, Stil, Achsen-Bindung, Ausblenden), `data` die Punkte. Fehlt `name`, heißt die Serie `Series n`.

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

Das Dokument selbst ist die Punkteliste — eine Serie (`Series 1`).

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

Erkannt am ersten Element mit Array-Feld `data`; die Form aus Form 1 ohne das umschließende Objekt.

### Punkt-Formate (alle Formen)

| Form            | Beispiel                                                                          | Zeitstempel                                       |
| --------------- | --------------------------------------------------------------------------------- | ------------------------------------------------- |
| Paar-Array      | `[1767229200000, 420]`                                                            | Erstes Element **muss eine Zahl** sein (Epoch-ms) |
| Objekt          | `{ "ts": 1767229200000, "val": 420 }`                                             | `ts`/`time`/`x`; nicht-numerisch ⇒ Zeilenindex    |
| Objekt (Aliase) | `{ "time": 1767229200000, "value": 420 }` oder `{ "x": 1767229200000, "y": 420 }` | Wert-Schlüssel: `val`/`value`/`y`                 |

```json
[
    { "ts": 1767225600000, "val": 21.4 },
    { "time": 1767229200000, "value": 21.9 },
    { "x": 1767232800000, "y": 22.3 }
]
```

Die Schlüssel dürfen sich von Punkt zu Punkt ändern — jeder Punkt wird einzeln gelesen. Ein String-Zeitstempel (`"ts": "2026-01-01"`) ist keine Zahl: der Punkt rutscht auf seinen Zeilenindex (0, 1, 2 …) und zeichnet als flache X-Position, nicht als Zeit.

### Regeln für Namen

- `name` ist die **Identität** der Serie: Stil, Achsen-Bindung und Ausblenden hängen (über das Overlay) am Namen und überleben Payload-Wechsel.
- Serien mit **demselben Namen** teilen sich Stil, Achse und Ausblenden — im Payload eindeutige Namen vergeben (der Konfigurator warnt bei Duplikaten).
- Der Payload allein entscheidet über Anzahl und Reihenfolge der Serien; hinzufügen/löschen ist im Konfigurator nicht möglich (nur ausblenden, reaktivierbar).

## Familie „Tabelle/Spalten"

Das Dokument ist (oder enthält) ein **Array von Zeilen**; jede Objekt-Eigenschaft einer Zeile ist eine Spalte. Drei Einstellungen im Konfigurator (Sektion **Datenquelle → Zuordnung** + **Serien**) verbinden Payload und Diagramm:

| Einstellung                       | Ort         | Bedeutung                                                                                                                                                                          |
| --------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Zeilenpfad** (`rowPath`)        | Datenquelle | Dot-Pfad zum Zeilen-Array. Leer = das Dokument **selbst** muss das Array sein. Array-Indizes erlaubt. Ein Pfad, der kein Array trifft, ist der einzige harte Fehler dieser Familie |
| **X-Spalte** (`xPath`)            | Datenquelle | Spalte der X-Dimension; leer = Zeilenindex                                                                                                                                         |
| **Y-Spalten** (`yPath`, je Serie) | Serien      | Eine Karte pro gebundener Y-Spalte; dazu Anzeigename, Stil, Wert-Verarbeitung                                                                                                      |

### Beispiel Kategorie: Dokument selbst ist das Array

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

- X-Spalte: `tag` — Datums-**Text** wird erkannt ⇒ **Zeitachse**; Punkte werden `[ms, wert]`, aufsteigend sortiert. `2026-01-01` liest als lokale Mitternacht — volle ISO-Strings (`2026-01-01T12:00:00Z`) übernehmen ihre Offset-Angabe
- Y-Spalten: `erzeugung` **und** `verbrauch` — zwei Serien (zwei Karten in der Sektion Serien)

### Beispiel Zeilenpfad: verschachteltes Dokument

```json
{
    "query": "SELECT ts, temp FROM history WHERE ...",
    "rows": [
        { "ts": 1767225600000, "temp": 21.4 },
        { "ts": 1767229200000, "temp": 21.9 }
    ]
}
```

- Zeilenpfad: `rows` — Metadaten wie `query` bleiben außen vor
- X-Spalte: `ts` (Epoch-Zahl ⇒ Zeitachse; Sekunden- und Millisekunden-Epoch werden erkannt)
- Y-Spalte: `temp`

### Beispiel Index: ohne X-Spalte

```json
[{ "temp": 21.4 }, { "temp": 21.9 }, { "temp": 22.3 }]
```

Ohne X-Spalte (oder wenn die Spalte keine brauchbaren Werte hat) nummeriert das Widget die Zeilen: X-Labels `1`, `2`, `3` …; im Torten-Diagramm heißen die Segmente „Zeile 1", …

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
- Y-Spalten: `sensoren[0].wert` (Temperatur) und `sensoren[1].wert` (Luftfeuchte) — zwei Serien aus einem Dokument

### Beispiel Torte: mehrere Ringe

```json
[
    { "raum": "Wohnzimmer", "ist": 21.7, "soll": 21.0 },
    { "raum": "Schlafzimmer", "ist": 19.2, "soll": 19.5 },
    { "raum": "Küche", "ist": 22.9, "soll": 22.0 }
]
```

Im Diagrammtyp **Torte** wird jede Y-Spalte ein Ring (hier `ist` und `soll`). Die X-Spalte benennt die Segmente und bestimmt die Farbe: **gleicher Name = gleiche Farbe in allen Ringen**. Ohne X-Spalte heißen die Segmente „Zeile n".

### X-Ableitungsregeln (Tabelle/Spalten)

Die Art der X-Achse leitet sich aus dem **dominanten Typ** der X-Spalte ab:

| X-Spalte    | X-Art         | Verhalten                                                                                                                                              |
| ----------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Datumswerte | **Zeitachse** | Punkte `[ms, wert]`; Zeilen mit unparsebarem X **fallen** (keine Position); aufsteigend sortiert, gleiche Zeitstempel behalten die Payload-Reihenfolge |

**Erkannte Datumsformen:** ISO 8601 (inkl. Zeit/Offset), `JJJJ-MM-TT`, `TT.MM.JJJJ` (optional `HH:mm[:ss]`), `MM/TT/JJJJ` (optional Zeit) sowie Epoch-Zahlen — Millisekunden (≥ 10¹¹) und Sekunden (≥ 10⁹). Tagesdaten ohne Zeitangabe gelten als **lokale Mitternacht**; volle ISO-Strings mit `Z`/Offset nach ISO-Regeln. Als Text geschriebene Epoch-Werte (`"1767225600000"`) sind **keine** Zahlen und werden nicht als Datum gelesen.
| Beliebige andere Werte | **Kategorieachse** | Labels sind der Zell-Text (`String(wert)`), Payload-Reihenfolge, **Duplikate bleiben**; Objekt-/Array-Zellen fallen auf „Zeile n" zurück |
| Ohne X-Spalte / nur Leeren | **Zeilenindex** | Labels `1..n`; Torten-Segmente „Zeile n" |

## Werte-Interpretation (beide Familien)

Jeder Y-Wert durchläuft dieselbe Kette — erst die **Wert-Zuordnung**, dann die **numerische Interpretation**, dann die **NULL-Behandlung**:

### 1. Wert-Zuordnung (`valueMap`, optional je Serie)

- Trifft `String(rohwert)` **exakt** einen Schlüssel der Zuordnung, übernimmt die zugeordnete Zahl.
- Ein Zielwert `null` (in der GUI: leeres Ziel) ist eine **bewusste Lücke** — sie wird von keiner NULL-Behandlung aufgefüllt.
- Nicht getroffene Werte laufen unverändert in die Interpretation.

### 2. Numerische Interpretation

| Rohwert                                 | Gelesen als                    |
| --------------------------------------- | ------------------------------ |
| `true` / `false` (Boolean)              | `1` / `0`                      |
| `"true"` / `"false"` (Text)             | `1` / `0`                      |
| Zahl                                    | unverändert                    |
| `"23,5"` (Komma ohne Punkt)             | `23.5` — Komma-Dezimal         |
| `"23.5 °C"`, `"12 Watt"`                | Präfix-Zahl: `23.5`, `12`      |
| alles andere (`"unlesbar"`, Objekte, …) | **Lücke** (null) — kein Fehler |

### 3. NULL-Behandlung (`keep` / `forward` / `zero`)

Chart-Voreinstellung (Datenquelle) mit Serien-Override (Serienkarte). Bewusste (gemappte) Lücken bleiben in jedem Modus immun.

| Modus                        | Bedeutung                                                                     |
| ---------------------------- | ----------------------------------------------------------------------------- |
| Lücken belassen (`keep`)     | Lücken bleiben Lücken (Standard)                                              |
| Lücken auffüllen (`forward`) | letzter Wert wird fortgeschrieben — auf der Zeitachse **nach** der Sortierung |
| Lücken mit 0 füllen (`zero`) | Lücken werden `0`                                                             |

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

| Situation                                                               | Verhalten                                                                                       |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Datenpunkt leer / noch nie geschrieben                                  | **Leerfall** — Platzhalter mit Konfigurations-Hinweis, kein Fehler                              |
| Ungültiges JSON (`JSON.parse` schlägt fehl)                             | **Fehlerfläche** mit der Parser-Meldung                                                         |
| Tabelle: Zeilenpfad trifft kein Array (`rows path "…" is not an array`) | **Fehlerfläche** — der einzige harte Fehler der Tabellen-Familie                                |
| Tabelle: Y-Spalte fehlt im Dokument / drifted                           | **Leere Serie** (kein Fehler); der Konfigurator markiert die Spalte „Nicht mehr im Dokument"    |
| Tabelle: Y-Spalte vom Typ Text                                          | Serie zeichnet nur die als Zahl interpretierbaren Zellen, Rest Lücken (Hinweis im Konfigurator) |
| Serien-Dokument: Form weder Objekt-mit-`series`/`data` noch Array       | **Leerfall** („Der Datenpunkt liefert keine darstellbaren Daten — Format prüfen")               |
| Wert-Zuordnung trifft nicht                                             | Wert läuft durch die normale Interpretation (kein Fehler)                                       |

> **Konfigurator-Analyse:** Im JSON-Modus analysiert der Konfigurator den aktuellen Payload live — Spaltenliste mit Typ-Badge (Datum/Zahl/Text/Boolean/…), Beispielwerte und ein X-Vorschlag. Tabelle/Spalten-Dokumente mit sinnvollen Spaltennamen brauchen die Zuordnung meist nur zu bestätigen. Die Analyse ist auf 10 Verschachtelungsebenen begrenzt.

## Verwandte Seiten

- [ECharts Widget](De-Echarts-Widget.md) — Konfigurator-Referenz (Datenquelle, Serien, Achsen, …)
- [JSON Table Widget](De-JsonTable-Widget.md) — tabellarische **Anzeige** von JSON-Daten (ohne Diagramm)
