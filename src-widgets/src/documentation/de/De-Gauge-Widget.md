# Gauge Widget

![Gauge Widget](../img/collection-gauge.png)

## Beschreibung

Das Gauge Widget zeigt numerische Werte als Linear- oder Radial-Gauge an. Es bietet umfangreiche Konfigurationsmöglichkeiten für ein professionelles Aussehen.

**Hinweis:** Dieses Widget basiert auf der canvas-gauges-Bibliothek und bietet über 100 Konfigurationsoptionen. Diese Dokumentation behandelt die am häufigsten verwendeten Einstellungen. Für erweiterte Konfiguration siehe den Feld-Editor des Widgets, der alle verfügbaren Optionen mit Tooltips anzeigt.

## Einstellungshierarchie

Dieses Widget nutzt alle **vis-2 Einstellungen** und **Common Einstellungen**. Siehe [Home](De-Home.md) für Details.

Die Widget-spezifischen Einstellungen überschreiben die allgemeineren Einstellungen.

## Grundeinstellungen

| Feldname      | Typ      | Standard | Beschreibung                    | Bedingung |
| ------------- | -------- | -------- | ------------------------------- | --------- |
| gaugeType     | select   | 'linear' | Typ des Gauges (linear, radial) | -         |
| gaugeMinValue | number   | 0        | Minimaler Wert                  | -         |
| gaugeMaxValue | number   | 100      | Maximaler Wert                  | -         |
| gaugePadding  | number   | 10       | Innenabstand des Gauges         | -         |
| gaugeIconFit  | checkbox | false    | Icon an Gauge-Größe anpassen    | -         |

## Linear Gauge Einstellungen

### Borders

| Feldname                | Typ    | Standard | Beschreibung            | Bedingung                  |
| ----------------------- | ------ | -------- | ----------------------- | -------------------------- |
| linearGaugeBorderShadow | text   | -        | Schatten für den Rahmen | Nur bei gaugeType='linear' |
| linearGaugeBorderWidth  | number | -        | Breite des Rahmens      | Nur bei gaugeType='linear' |
| linearGaugeBorderRadius | number | -        | Radius der Ecken        | Nur bei gaugeType='linear' |

### Progress Bar

| Feldname                           | Typ    | Standard | Beschreibung          | Bedingung                  |
| ---------------------------------- | ------ | -------- | --------------------- | -------------------------- |
| linearGaugeBarProgressTopPosition  | text   | -        | Position von oben     | Nur bei gaugeType='linear' |
| linearGaugeBarProgressHeight       | text   | -        | Höhe der Progress-Bar | Nur bei gaugeType='linear' |
| linearGaugeBarProgressBorderRadius | number | -        | Radius der Ecken      | Nur bei gaugeType='linear' |

### Coloring

| Feldname                         | Typ   | Standard | Beschreibung             | Bedingung                  |
| -------------------------------- | ----- | -------- | ------------------------ | -------------------------- |
| linearGaugeBarProgressColorStart | color | -        | Startfarbe des Gradients | Nur bei gaugeType='linear' |
| linearGaugeBarProgressColorEnd   | color | -        | Endfarbe des Gradients   | Nur bei gaugeType='linear' |
| linearGaugeBackgroundBarColor    | color | -        | Hintergrundfarbe der Bar | Nur bei gaugeType='linear' |

### Element Positioning

| Feldname                          | Typ  | Standard | Beschreibung                   | Bedingung                  |
| --------------------------------- | ---- | -------- | ------------------------------ | -------------------------- |
| linearGaugeIconVerticalPosition   | text | -        | Vertikale Position des Icons   | Nur bei gaugeType='linear' |
| linearGaugeIconHorizontalPosition | text | -        | Horizontale Position des Icons | Nur bei gaugeType='linear' |
| linearGaugeValueTop               | text | -        | Position des Werts von oben    | Nur bei gaugeType='linear' |

### Ticks Bar

| Feldname               | Typ    | Standard | Beschreibung            | Bedingung                  |
| ---------------------- | ------ | -------- | ----------------------- | -------------------------- |
| linearGaugeTicksCount  | number | -        | Anzahl der Markierungen | Nur bei gaugeType='linear' |
| linearGaugeTicksHeight | text   | -        | Höhe der Markierungen   | Nur bei gaugeType='linear' |
| linearGaugeTicksWidth  | text   | -        | Breite der Markierungen | Nur bei gaugeType='linear' |
| linearGaugeTicksColor  | color  | -        | Farbe der Markierungen  | Nur bei gaugeType='linear' |

## Radial Gauge Einstellungen

### Ticks Bar

| Feldname                       | Typ    | Standard | Beschreibung                    | Bedingung                  |
| ------------------------------ | ------ | -------- | ------------------------------- | -------------------------- |
| radialGaugeStartAngle          | number | 135      | Startwinkel (Grad)              | Nur bei gaugeType='radial' |
| radialGaugeTicksCount          | number | -        | Anzahl der Markierungen         | Nur bei gaugeType='radial' |
| radialGaugeTicksLength         | text   | -        | Länge der Markierungen          | Nur bei gaugeType='radial' |
| radialGaugeTicksWidth          | text   | -        | Breite der Markierungen         | Nur bei gaugeType='radial' |
| radialGaugeTicksColor          | color  | -        | Farbe der Markierungen          | Nur bei gaugeType='radial' |
| radialGaugeTicksLabelsFontSize | text   | -        | Schriftgröße der Beschriftungen | Nur bei gaugeType='radial' |
| radialGaugeTicksLabelsColor    | color  | -        | Farbe der Beschriftungen        | Nur bei gaugeType='radial' |

### Needle

| Feldname                     | Typ      | Standard | Beschreibung                | Bedingung                  |
| ---------------------------- | -------- | -------- | --------------------------- | -------------------------- |
| radialGaugeNeedleType        | select   | 'arrow'  | Typ der Nadel (arrow, line) | Nur bei gaugeType='radial' |
| radialGaugeNeedleWidth       | text     | -        | Breite der Nadel            | Nur bei gaugeType='radial' |
| radialGaugeNeedleStart       | number   | -        | Startpunkt der Nadel (%)    | Nur bei gaugeType='radial' |
| radialGaugeNeedleEnd         | number   | -        | Endpunkt der Nadel (%)      | Nur bei gaugeType='radial' |
| radialGaugeNeedleCircleSize  | number   | -        | Größe des Nadel-Kreises     | Nur bei gaugeType='radial' |
| radialGaugeNeedleCircleOuter | checkbox | false    | Äußerer Kreis               | Nur bei gaugeType='radial' |
| radialGaugeNeedleCircleInner | checkbox | false    | Innerer Kreis               | Nur bei gaugeType='radial' |

### Coloring

| Feldname                          | Typ   | Standard | Beschreibung              | Bedingung                  |
| --------------------------------- | ----- | -------- | ------------------------- | -------------------------- |
| radialGaugeBarProgressColor       | color | -        | Farbe der Progress-Bar    | Nur bei gaugeType='radial' |
| radialGaugeBackgroundBarColor     | color | -        | Hintergrundfarbe der Bar  | Nur bei gaugeType='radial' |
| radialGaugeNeedleColor            | color | -        | Farbe der Nadel           | Nur bei gaugeType='radial' |
| radialGaugeNeedleCircleOuterColor | color | -        | Farbe des äußeren Kreises | Nur bei gaugeType='radial' |
| radialGaugeNeedleCircleInnerColor | color | -        | Farbe des inneren Kreises | Nur bei gaugeType='radial' |

### Animation

| Feldname                     | Typ      | Standard | Beschreibung                                      | Bedingung                                               |
| ---------------------------- | -------- | -------- | ------------------------------------------------- | ------------------------------------------------------- |
| radialGaugeAnimated          | checkbox | true     | Animation aktivieren                              | Nur bei gaugeType='radial'                              |
| radialGaugeAnimationDuration | number   | 1000     | Dauer der Animation (ms)                          | Nur bei gaugeType='radial' und radialGaugeAnimated=true |
| radialGaugeAnimationRule     | select   | 'linear' | Animation-Verlauf (linear, easeIn, easeOut, etc.) | Nur bei gaugeType='radial' und radialGaugeAnimated=true |

## Gemeinsame Einstellungen

### Fonts

| Feldname           | Typ   | Standard | Beschreibung           | Bedingung |
| ------------------ | ----- | -------- | ---------------------- | --------- |
| gaugeFontFamily    | text  | -        | Schriftart             | -         |
| gaugeValueFontSize | text  | -        | Schriftgröße des Werts | -         |
| gaugeValueColor    | color | -        | Farbe des Werts        | -         |

### Value Box

| Feldname                  | Typ    | Standard | Beschreibung     | Bedingung |
| ------------------------- | ------ | -------- | ---------------- | --------- |
| gaugeValueBoxStroke       | text   | -        | Rahmenbreite     | -         |
| gaugeValueBoxStrokeColor  | color  | -        | Rahmenfarbe      | -         |
| gaugeValueBoxBackground   | color  | -        | Hintergrundfarbe | -         |
| gaugeValueBoxBorderRadius | number | -        | Eckenradius      | -         |
| gaugeValueBoxWidth        | text   | -        | Breite           | -         |
| gaugeValueBoxPadding      | text   | -        | Innenabstand     | -         |

## Gauge-Typen

### Linear Gauge

- Horizontaler Fortschrittsbalken
- Progress-Bar zeigt aktuellen Wert
- Ticks (Markierungen) optional
- Icon und Wert frei positionierbar
- Gradient-Farben für Progress-Bar
- Moderne, flache Darstellung

### Radial Gauge

- Kreisförmiges Instrument (Tacho-Stil)
- Nadel zeigt auf aktuellen Wert
- Konfigurierbare Winkel (Standard: 135° bis 135° = 270° Bogen)
- Ticks mit Beschriftungen
- Animierte Nadel-Bewegung
- Klassische Instrument-Darstellung

## Styling-Optionen

### Farben

- **Gradient**: Linear Gauge unterstützt Farbverläufe (Start → End)
- **Feste Farbe**: Radial Gauge mit einfarbiger Progress-Bar
- **Hintergrund**: Separate Farbe für nicht-ausgefüllten Bereich
- **Ticks**: Eigene Farbe für Markierungen und Beschriftungen

### Schriftarten

- Globale Schriftart über `gaugeFontFamily`
- Wert-Schriftgröße über `gaugeValueFontSize`
- Tick-Beschriftungen (nur Radial) separat konfigurierbar

### Animationen

- Nur für Radial Gauge verfügbar
- Verschiedene Easing-Funktionen (linear, easeIn, easeOut, bounce, etc.)
- Konfigurierbare Dauer

## Anwendungsbeispiele

### Linear Gauge

- **Batteriestand**: 0-100%, Gradient grün→gelb→rot
- **Lautstärke**: 0-100%, Icon links, Wert rechts
- **Download-Fortschritt**: 0-100%, Ticks bei 25/50/75
- **Füllstand**: 0-100%, vertikale Orientierung möglich via CSS

### Radial Gauge

- **Temperatur**: -20°C bis 40°C, Nadel animiert
- **Geschwindigkeit**: 0-200 km/h, Tacho-Stil
- **Leistung**: 0-3000W, Ticks alle 500W
- **Luftfeuchtigkeit**: 0-100%, Nadel mit Kreis-Basis
