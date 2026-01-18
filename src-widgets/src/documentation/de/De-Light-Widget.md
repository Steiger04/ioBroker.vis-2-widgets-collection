# Light Widget

![Light Widget](../img/collection-light.png)

## Beschreibung

Das Light Widget ist eine umfassende Lichtsteuerung mit Farbauswahl, Helligkeitsregelung und Farbtemperatursteuerung. Es unterstützt RGB, HSV und CCT (Color Temperature) Lichter.

## Einstellungshierarchie

Dieses Widget nutzt alle **vis-2 Einstellungen** und **Common Einstellungen**. Siehe [Home](De-Home.md) für Details.

Die Widget-spezifischen Einstellungen überschreiben die allgemeineren Einstellungen.

## Farblicht-Konfiguration

### UI-Komponenten-Auswahl

| Feldname             | Typ      | Standard | Beschreibung                                      | Bedingung                                    |
| -------------------- | -------- | -------- | ------------------------------------------------- | -------------------------------------------- |
| colorLightUIComponent| select   | 'wheel'  | Farbwähler-UI (wheel, box, slider)                | Nur wenn colorLightType nicht 'none' oder 'cct'|
| colorWheelLightness  | checkbox | false    | Helligkeitsregler im Farbrad anzeigen             | Nur wenn colorLightUIComponent='wheel'       |

### Farbtyp-Konfiguration

| Feldname             | Typ    | Standard | Beschreibung                                      | Bedingung |
| -------------------- | ------ | -------- | ------------------------------------------------- | --------- |
| colorLightType       | select | 'none'   | Farbsteuerungstyp (none, cct, rgb, rgbcct, r/g/b, r/g/b/cct, h/s/v, h/s/v/cct) | - |

### Farbtemperatur (CCT)

| Feldname                | Typ    | Standard | Beschreibung                           | Bedingung                                    |
| ----------------------- | ------ | -------- | -------------------------------------- | -------------------------------------------- |
| colorLightTemperatureOid| id     | -        | OID für Farbtemperatursteuerung        | Nur wenn colorLightType 'cct' enthält        |
| colorLightCtMin         | number | 2000     | Minimale Farbtemperatur (500-10000K)   | Nur wenn colorLightTemperatureOid gesetzt    |
| colorLightCtMax         | number | 6500     | Maximale Farbtemperatur (500-10000K)   | Nur wenn colorLightTemperatureOid gesetzt    |

### RGB-Konfiguration

| Feldname             | Typ | Standard | Beschreibung                           | Bedingung                                    |
| -------------------- | --- | -------- | -------------------------------------- | -------------------------------------------- |
| colorLightRgbHexOid  | id  | -        | OID für RGB-Hex-Wert (#RRGGBB)         | Nur wenn colorLightType 'rgb' oder 'rgbcct'  |
| colorLightRedOid     | id  | -        | OID für Rot-Kanal (0-255)              | Nur wenn colorLightType 'r/g/b' oder 'r/g/b/cct'|
| colorLightGreenOid   | id  | -        | OID für Grün-Kanal (0-255)             | Nur wenn colorLightType 'r/g/b' oder 'r/g/b/cct'|
| colorLightBlueOid    | id  | -        | OID für Blau-Kanal (0-255)             | Nur wenn colorLightType 'r/g/b' oder 'r/g/b/cct'|

### HSV-Konfiguration

| Feldname                | Typ | Standard | Beschreibung                           | Bedingung                                    |
| ----------------------- | --- | -------- | -------------------------------------- | -------------------------------------------- |
| colorLightHueOid        | id  | -        | OID für Farbton (0-360)                | Nur wenn colorLightType 'h/s/v' oder 'h/s/v/cct'|
| colorLightSaturationOid | id  | -        | OID für Sättigung (0-100)              | Nur wenn colorLightType 'h/s/v' oder 'h/s/v/cct'|
| colorLightBrightnessOid | id     | -        | OID für Helligkeit/Wert (0-100)        | Nur wenn colorLightType 'cct', 'h/s/v' oder 'h/s/v/cct'|

### Button-Modus

| Feldname                   | Typ      | Standard | Beschreibung                                      | Bedingung                    |
| -------------------------- | -------- | -------- | ------------------------------------------------- | ---------------------------- |
| colorLightButton           | checkbox | false    | Button-Modus aktivieren (Langer Druck öffnet Farbwähler)| -                     |
| colorLightDelayLongPress   | number   | 500      | Verzögerung für langen Druck in Millisekunden (0-10000)| Nur wenn colorLightButton=true|
| colorLightModalWidth       | number   | -        | Breite des Farbwähler-Modals (0-5000px)          | Nur wenn colorLightButton=true|
| colorLightModalHeight      | number   | 300      | Höhe des Farbwähler-Modals (0-5000px)            | Nur wenn colorLightButton=true|

### Styling

| Feldname                | Typ    | Standard | Beschreibung                           | Bedingung |
| ----------------------- | ------ | -------- | -------------------------------------- | --------- |
| colorLightSliderWidth   | slider | 1        | Breite der Farbregler (0-10)           | -         |
| colorLightBorderWidth   | slider | 3        | Rahmenbreite (0-100)                   | -         |
| colorLightBorderColor   | color  | -        | Rahmenfarbe                            | -         |
| colorLightPadding       | number | 1        | Innenabstand (min: 0, Schritt: 0.5)    | -         |

### Schalter-OID

| Feldname            | Typ | Standard | Beschreibung                        | Bedingung |
| ------------------- | --- | -------- | ----------------------------------- | --------- |
| colorLightSwitchOid | id  | -        | OID für Ein/Aus-Schalter (boolean) | -         |

### Farbraum

| Feldname        | Typ    | Standard | Beschreibung                                   | Bedingung |
| --------------- | ------ | -------- | ---------------------------------------------- | --------- |
| colorLightGamut | select | -        | Farbraum (default, A, B, C für Philips Hue)   | -         |

### Automatische Erkennung

Das Light-Widget kann automatisch zugehörige Farbsteuerungs-Zustände erkennen, wenn Sie eine Schalter-OID auswählen. Wenn das ausgewählte Objekt Teil eines Gerätekanals ist, durchsucht das Widget verwandte Zustände (RGB, CCT, Helligkeit usw.) basierend auf ioBroker-Zustandsrollen und füllt die entsprechenden OID-Felder automatisch aus.

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
