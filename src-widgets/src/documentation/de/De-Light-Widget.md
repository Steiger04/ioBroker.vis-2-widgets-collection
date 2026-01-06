# Light Widget

![Light Widget](../img/collection-light.png)

## Beschreibung

Das Light Widget ist eine umfassende Lichtsteuerung mit Farbauswahl, Helligkeitsregelung und Farbtemperatursteuerung. Es unterstützt RGB, HSV und CCT (Color Temperature) Lichter.

## Einstellungshierarchie

Dieses Widget nutzt alle **vis-2 Einstellungen** und **Common Einstellungen**. Siehe [Home](De-Home.md) für Details.

Die Widget-spezifischen Einstellungen überschreiben die allgemeineren Einstellungen.

## Widget-spezifische Einstellungen

### Grundkonfiguration

| Feldname              | Typ    | Standard | Beschreibung                           | Bedingung |
| --------------------- | ------ | -------- | -------------------------------------- | --------- |
| colorLightType        | select | 'rgb'    | Typ der Lichtsteuerung (rgb, cct, hsv) | -         |
| colorLightUiComponent | select | 'wheel'  | UI-Komponente (wheel, box, slider)     | -         |
| colorLightPadding     | number | 10       | Innenabstand                           | -         |
| colorLightBorderColor | color  | -        | Rahmenfarbe                            | -         |
| colorLightBorderWidth | number | -        | Rahmenbreite                           | -         |

### Schalter-OID

| Feldname                 | Typ      | Standard | Beschreibung                       | Bedingung                     |
| ------------------------ | -------- | -------- | ---------------------------------- | ----------------------------- |
| colorLightSwitchOid      | text     | -        | OID für Ein/Aus-Schalter (boolean) | -                             |
| colorLightButton         | checkbox | false    | Als Button verwenden (keine OID)   | -                             |
| colorLightDelayLongPress | number   | 500      | Verzögerung für Long-Press (ms)    | Nur bei colorLightButton=true |

### RGB Einstellungen

| Feldname            | Typ  | Standard | Beschreibung                        | Bedingung |
| ------------------- | ---- | -------- | ----------------------------------- | --------- |
| colorLightRgbHexOid | text | -        | OID für RGB Hex-Wert (z.B. #FF0000) | -         |
| colorLightRedOid    | text | -        | OID für Rot-Kanal (0-255)           | -         |
| colorLightGreenOid  | text | -        | OID für Grün-Kanal (0-255)          | -         |
| colorLightBlueOid   | text | -        | OID für Blau-Kanal (0-255)          | -         |

### Helligkeit

| Feldname                | Typ  | Standard | Beschreibung               | Bedingung |
| ----------------------- | ---- | -------- | -------------------------- | --------- |
| colorLightBrightnessOid | text | -        | OID für Helligkeit (0-100) | -         |

### HSV Einstellungen

| Feldname                | Typ  | Standard | Beschreibung                  | Bedingung                    |
| ----------------------- | ---- | -------- | ----------------------------- | ---------------------------- |
| colorLightHueOid        | text | -        | OID für Farbton/Hue (0-360)   | Nur bei colorLightType='hsv' |
| colorLightSaturationOid | text | -        | OID für Sättigung (0-100)     | Nur bei colorLightType='hsv' |
| colorLightHsvOid        | text | -        | OID für kombinierter HSV-Wert | Nur bei colorLightType='hsv' |

### Farbtemperatur (CCT)

| Feldname                 | Typ    | Standard | Beschreibung                    | Bedingung                    |
| ------------------------ | ------ | -------- | ------------------------------- | ---------------------------- |
| colorLightTemperatureOid | text   | -        | OID für Farbtemperatur (Kelvin) | Nur bei colorLightType='cct' |
| colorLightCtMin          | number | 2700     | Minimale Farbtemperatur (warm)  | Nur bei colorLightType='cct' |
| colorLightCtMax          | number | 6500     | Maximale Farbtemperatur (kalt)  | Nur bei colorLightType='cct' |

### UI-Größen

| Feldname              | Typ    | Standard | Beschreibung                   | Bedingung |
| --------------------- | ------ | -------- | ------------------------------ | --------- |
| colorLightSliderWidth | number | -        | Breite des Helligkeits-Sliders | -         |
| colorLightModalWidth  | number | -        | Breite des Farb-Modals         | -         |
| colorLightModalHeight | number | -        | Höhe des Farb-Modals           | -         |

### Erweiterte Einstellungen

| Feldname            | Typ      | Standard | Beschreibung                             | Bedingung                             |
| ------------------- | -------- | -------- | ---------------------------------------- | ------------------------------------- |
| colorWheelLightness | checkbox | false    | Helligkeit im Farbrad anzeigen           | Nur bei colorLightUiComponent='wheel' |
| colorLightGamut     | select   | -        | Farbraum (sRGB, DCI-P3, Adobe RGB, etc.) | -                                     |

**Hinweis:** Zusätzlich zu den oben genannten Einstellungen sind die **Wert schreiben**-Einstellungen (Verzögerung/Intervall) verfügbar. Diese steuern, wie Wertänderungen an die OID geschrieben werden. Siehe [Common Einstellungen - Wert schreiben](De-Home.md#wert-schreiben) für Details.

## Lichttypen

### RGB

- **RGB Hex**: Kompletter Farbwert als Hex-String (z.B. #FF0000 für Rot)
- **Separate Kanäle**: Rot, Grün, Blau jeweils 0-255
- **Verwendung**: Standard für die meisten RGB-Lichter
- **Vorteil**: Direkte Steuerung aller Farben

### CCT (Color Temperature)

- **Farbtemperatur**: Warmweiß (2700K) bis Kaltweiß (6500K)
- **Nur Weißtöne**: Keine Farbsteuerung
- **Verwendung**: Weiße LED-Strips, Deckenleuchten
- **Vorteil**: Natürliche Weißtöne für Arbeits-/Wohnräume

### HSV (Hue, Saturation, Value)

- **Hue (Farbton)**: 0-360° (Farbkreis)
- **Saturation (Sättigung)**: 0-100% (Grau bis volle Farbe)
- **Value (Helligkeit)**: 0-100%
- **Verwendung**: Philips Hue, einige Smart-Lichter
- **Vorteil**: Intuitive Farbwahl über Farbrad

## UI-Komponenten

### Wheel (Farbrad)

- Kreisförmige Farbauswahl
- Intuitive Farbwahl durch Klick/Touch
- Optional mit Helligkeitsring (`colorWheelLightness`)
- Am besten für RGB/HSV
- Kompakte Darstellung

### Box (Farbfeld)

- Rechteckige Farbauswahl
- Helligkeit und Sättigung in einem Feld
- Farbton über Slider
- Präzise Farbwahl
- Größere Darstellung

### Slider

- Separate Slider für jede Komponente
- RGB: 3 Slider (Rot, Grün, Blau)
- HSV: 3 Slider (Hue, Saturation, Value)
- CCT: 1 Slider (Temperatur)
- Präzise Steuerung
- Kompakt bei wenigen Werten

## OID-Erkennung

Das Widget kann automatisch OIDs eines Lichts erkennen:

### Automatische Erkennung

1. Wähle eine Schalter-OID (`colorLightSwitchOid`)
2. Widget analysiert das Gerät
3. Findet automatisch RGB/HSV/CCT-OIDs
4. Konfiguriert Typ entsprechend

### Manuelle Konfiguration

- Alle OIDs können manuell gesetzt werden
- Nützlich bei ungewöhnlichen Geräten
- Ermöglicht individuelle Zuordnung

## Farbsteuerung

### RGB-Steuerung

**Option 1: RGB Hex**

- Setze nur `colorLightRgbHexOid`
- Widget schreibt Hex-Wert (z.B. #FF0000)
- Einfachste Konfiguration

**Option 2: Separate Kanäle**

- Setze `colorLightRedOid`, `colorLightGreenOid`, `colorLightBlueOid`
- Widget schreibt separate Werte (0-255)
- Mehr Kontrolle, aber aufwändiger

### HSV-Steuerung

**Option 1: HSV kombiniert**

- Setze `colorLightHsvOid`
- Widget schreibt kombinierten HSV-String
- Format abhängig vom Gerät

**Option 2: Separate Werte**

- Setze `colorLightHueOid`, `colorLightSaturationOid`, `colorLightBrightnessOid`
- Widget schreibt separate Werte
- Flexibler, aber mehr OIDs

### Farbtemperatur (CCT)

- Setze `colorLightTemperatureOid`
- Definiere Min/Max in Kelvin
- Slider zeigt Warmweiß → Kaltweiß
- Widget schreibt Kelvin-Wert

## Helligkeitsregelung

- Separate OID: `colorLightBrightnessOid`
- Wert: 0-100%
- Slider im Widget
- Kann mit allen Lichttypen kombiniert werden

## Button-Modus

Mit `colorLightButton = true`:

- Widget öffnet Modal bei Click
- Kein direktes Schreiben auf OID
- Long-Press-Verzögerung konfigurierbar
- Nützlich für komplexe Steuerungen ohne direkte OID

## Modal-Dialog

Bei Click auf Widget (außer Button-Modus):

- Öffnet Farb-Auswahl-Dialog
- Größe über `colorLightModalWidth/Height` einstellbar
- Vollständige Farbsteuerung
- Schließt nach Auswahl oder Click außerhalb

## Farbraum (Gamut)

Optionaler Farbraum für präzise Farbwiedergabe:

- **sRGB**: Standard (Internet, Monitore)
- **DCI-P3**: Erweiterter Farbraum (Apple-Displays)
- **Adobe RGB**: Professionelle Fotografie
- **Rec. 2020**: HDR, Zukunftssicher

**Hinweis:** Nur setzen, wenn dein Licht einen spezifischen Farbraum unterstützt.

## Anwendungsbeispiele

### RGB LED-Strip

```
colorLightType: rgb
colorLightUiComponent: wheel
colorLightSwitchOid: hue.0.strip.on
colorLightRgbHexOid: hue.0.strip.rgb
colorLightBrightnessOid: hue.0.strip.level
```

### Philips Hue (HSV)

```
colorLightType: hsv
colorLightUiComponent: wheel
colorLightSwitchOid: hue.0.lamp.on
colorLightHueOid: hue.0.lamp.hue
colorLightSaturationOid: hue.0.lamp.sat
colorLightBrightnessOid: hue.0.lamp.bri
```

### CCT Deckenleuchte

```
colorLightType: cct
colorLightUiComponent: slider
colorLightSwitchOid: zigbee.0.lamp.state
colorLightTemperatureOid: zigbee.0.lamp.color_temp
colorLightBrightnessOid: zigbee.0.lamp.brightness
colorLightCtMin: 2700
colorLightCtMax: 6500
```

### RGB Button (ohne OID)

```
colorLightButton: true
colorLightDelayLongPress: 1000
colorLightUiComponent: box
```

Nutze JavaScript-Skript um auf Widget-Events zu reagieren.
