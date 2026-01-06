# Slider Widget

![Slider Widget](../img/collection-slider.png)

## Beschreibung

Das Slider Widget ist ein Schieberegler für numerische Werte mit umfangreichen Konfigurationsmöglichkeiten für Orientierung, Markierungen und Icons.

## Einstellungshierarchie

Dieses Widget nutzt alle **vis-2 Einstellungen** und **Common Einstellungen**. Siehe [Home](De-Home.md) für Details.

Die Widget-spezifischen Einstellungen überschreiben die allgemeineren Einstellungen.

## Widget-spezifische Einstellungen

### Grundeinstellungen

| Feldname          | Typ    | Standard     | Beschreibung                            | Bedingung |
| ----------------- | ------ | ------------ | --------------------------------------- | --------- |
| sliderSize        | slider | -            | Dicke des Schiebereglers in Pixel       | -         |
| sliderOrientation | select | 'horizontal' | Ausrichtung des Schiebereglers          | -         |
| valueLabelDisplay | select | 'auto'       | Anzeige des Wert-Labels (auto, on, off) | -         |
| labelPosition     | select | 'top'        | Position des Labels                     | -         |
| sliderColor       | color  | -            | Farbe des Schiebereglers                | -         |

### Wertebereich

| Feldname | Typ    | Standard | Beschreibung   | Bedingung |
| -------- | ------ | -------- | -------------- | --------- |
| minValue | number | 0        | Minimaler Wert | -         |
| maxValue | number | 100      | Maximaler Wert | -         |
| step     | number | 1        | Schrittweite   | -         |

### Markierungen

| Feldname        | Typ      | Standard | Beschreibung                                  | Bedingung           |
| --------------- | -------- | -------- | --------------------------------------------- | ------------------- |
| marks           | checkbox | false    | Markierungen anzeigen                         | -                   |
| markPosition    | select   | 'bottom' | Position der Markierungen (top, bottom, both) | Nur wenn marks=true |
| markStep        | number   | -        | Schrittweite der Markierungen                 | Nur wenn marks=true |
| markerTextColor | color    | -        | Textfarbe der Markierungen                    | Nur wenn marks=true |
| markerTextSize  | slider   | -        | Textgröße der Markierungen                    | Nur wenn marks=true |
| markerIconColor | color    | -        | Icon-Farbe der Markierungen                   | Nur wenn marks=true |
| markerIconSize  | slider   | -        | Icon-Größe der Markierungen                   | Nur wenn marks=true |

### Start-Icon (Min)

| Feldname       | Typ    | Standard | Beschreibung                 | Bedingung |
| -------------- | ------ | -------- | ---------------------------- | --------- |
| iconSmallMin   | icon64 | -        | Kleines Icon (SVG) am Anfang | -         |
| iconMin        | image  | -        | Großes Icon (Bild) am Anfang | -         |
| iconSizeStart  | slider | -        | Größe des Start-Icons        | -         |
| startIconColor | color  | -        | Farbe des Start-Icons        | -         |

### End-Icon (Max)

| Feldname     | Typ    | Standard | Beschreibung               | Bedingung |
| ------------ | ------ | -------- | -------------------------- | --------- |
| iconSmallMax | icon64 | -        | Kleines Icon (SVG) am Ende | -         |
| iconMax      | image  | -        | Großes Icon (Bild) am Ende | -         |
| iconSizeEnd  | slider | -        | Größe des End-Icons        | -         |
| endIconColor | color  | -        | Farbe des End-Icons        | -         |

**Hinweis:** Zusätzlich zu den oben genannten Einstellungen sind die **Wert schreiben**-Einstellungen (Verzögerung/Intervall) verfügbar. Diese steuern, wie Wertänderungen an die OID geschrieben werden. Siehe [Common Einstellungen - Wert schreiben](De-Home.md#wert-schreiben) für Details.

## Orientierung

### Horizontal

- Schieberegler von links nach rechts
- Standard-Ausrichtung
- Wert steigt nach rechts

### Vertikal

- Schieberegler von unten nach oben
- Platzsparend für schmale Layouts
- Wert steigt nach oben

## Markierungen

Markierungen helfen bei der Orientierung auf dem Schieberegler:

### Schrittweite

- `markStep` definiert den Abstand zwischen Markierungen
- Beispiel: Bei minValue=0, maxValue=100, markStep=10 werden Markierungen bei 0, 10, 20, ... 100 angezeigt

### Position

- **Top**: Markierungen oberhalb des Sliders
- **Bottom**: Markierungen unterhalb des Sliders
- **Both**: Markierungen auf beiden Seiten

### Styling

- Text und Icons an Markierungen können separat gestylt werden
- Farbe und Größe unabhängig einstellbar

## Min/Max Icons

Icons an den Enden des Schiebereglers visualisieren den Wertebereich:

### Start-Icon (Minimum)

- Wird am Anfang des Schiebereglers angezeigt (links bei horizontal, unten bei vertikal)
- Beispiel: Lautsprecher-Symbol für Lautstärke-Minimum

### End-Icon (Maximum)

- Wird am Ende des Schiebereglers angezeigt (rechts bei horizontal, oben bei vertikal)
- Beispiel: Lautsprecher-Symbol mit Schallwellen für Lautstärke-Maximum

## Anwendungsbeispiele

- **Lautstärkeregler**: Min-Icon = leiser Lautsprecher, Max-Icon = lauter Lautsprecher
- **Helligkeitsregler**: Min-Icon = Mond, Max-Icon = Sonne
- **Temperatur**: Min-Icon = Schneeflocke, Max-Icon = Flamme
- **Jalousie**: Vertikal, Min = geschlossen, Max = offen
