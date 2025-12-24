# ioBroker.vis-2 Widget Collection - Benutzerhandbuch

Willkommen zur Dokumentation der Widget Collection für ioBroker.vis-2. Diese Sammlung bietet professionelle Widgets zur Visualisierung und Steuerung Ihrer Smart Home Geräte.

## Prinzip der Einstellungen

Die Einstellungen folgen einer klaren Hierarchie vom Allgemeinen zum Spezifischen:

1. **vis-2 Einstellungen** - Immer verfügbar für alle Widgets
2. **Common Einstellungen** - Gemeinsame Einstellungen für alle Widgets dieser Sammlung
3. **Widget-spezifische Einstellungen** - Spezifisch für den jeweiligen Widget-Typ
4. **Value-spezifische Einstellungen** - Individuelle Einstellungen pro Wert (falls mehrere Werte definiert)

**Wichtig:** Spezifischere Einstellungen überschreiben immer allgemeinere Einstellungen.

## vis-2 Einstellungen (immer verfügbar)

Diese Einstellungen sind für alle vis-2 Widgets verfügbar und können über den Eigenschafts-Editor konfiguriert werden.

### Allgemein (CSS Common)

| Eigenschaft | Beschreibung                                                  |
| ----------- | ------------------------------------------------------------- |
| Position    | Left, Top, Right, Bottom (absolute Positionierung)            |
| Größe       | Width, Height (Breite und Höhe)                               |
| Z-Index     | Stapelreihenfolge der Elemente                                |
| Overflow    | Verhalten bei Inhaltsüberlauf (visible, hidden, scroll, auto) |
| Cursor      | Mauszeiger-Stil                                               |
| Transform   | CSS-Transformationen (rotate, scale, translate, etc.)         |
| Opacity     | Transparenz (0-1)                                             |

### Font & Text (CSS Font Text)

| Eigenschaft    | Beschreibung                                   |
| -------------- | ---------------------------------------------- |
| Font Family    | Schriftart                                     |
| Font Size      | Schriftgröße                                   |
| Font Style     | Schriftstil (normal, italic, oblique)          |
| Font Weight    | Schriftstärke (normal, bold, 100-900)          |
| Color          | Textfarbe                                      |
| Text Align     | Textausrichtung (left, center, right, justify) |
| Line Height    | Zeilenhöhe                                     |
| Letter Spacing | Buchstabenabstand                              |
| Text Shadow    | Textschatten                                   |

### Hintergrund (CSS Background)

| Eigenschaft           | Beschreibung                                                              |
| --------------------- | ------------------------------------------------------------------------- |
| Background Color      | Hintergrundfarbe                                                          |
| Background Image      | Hintergrundbild (URL)                                                     |
| Background Position   | Position des Hintergrundbilds                                             |
| Background Size       | Größe des Hintergrundbilds (auto, cover, contain, custom)                 |
| Background Repeat     | Wiederholung des Hintergrundbilds (repeat, no-repeat, repeat-x, repeat-y) |
| Background Attachment | Scroll-Verhalten (scroll, fixed, local)                                   |

### Ränder (CSS Border)

| Eigenschaft   | Beschreibung                                                                   |
| ------------- | ------------------------------------------------------------------------------ |
| Border Width  | Rahmenbreite (top, right, bottom, left)                                        |
| Border Style  | Rahmenstil (none, solid, dashed, dotted, double, groove, ridge, inset, outset) |
| Border Color  | Rahmenfarbe                                                                    |
| Border Radius | Eckenradius (top-left, top-right, bottom-right, bottom-left)                   |

### Schatten & Abstand (CSS Shadow Padding)

| Eigenschaft | Beschreibung                            |
| ----------- | --------------------------------------- |
| Box Shadow  | Schatten um das Element                 |
| Padding     | Innenabstand (top, right, bottom, left) |

### Zeige letzte Änderung

| Eigenschaft      | Beschreibung                                                   |
| ---------------- | -------------------------------------------------------------- |
| Object ID        | OID des Zustands, dessen letzte Änderung angezeigt werden soll |
| Format           | Anzeigeformat der letzten Änderung                             |
| Interval         | Aktualisierungsintervall                                       |
| Date/Time Format | Formatierung von Datum und Uhrzeit                             |

### Signaturbilder

| Eigenschaft | Beschreibung               |
| ----------- | -------------------------- |
| Bild OID    | OID für das Signaturbild   |
| Größe       | Größe des Signaturbilds    |
| Position    | Position des Signaturbilds |

## Common Einstellungen (alle Widgets)

Diese Einstellungen sind für alle Widgets der Collection verfügbar.

### Icon

| Feldname    | Typ            | Standard | Beschreibung         |
| ----------- | -------------- | -------- | -------------------- |
| icon        | image          | -        | Großes Icon (Bild)   |
| iconSmall   | icon64         | -        | Kleines Icon (SVG)   |
| iconSize    | slider (1-500) | -        | Icon-Größe in Pixel  |
| iconColor   | color          | -        | Icon-Farbe           |
| iconXOffset | text           | 0px      | Horizontaler Versatz |
| iconYOffset | text           | 0px      | Vertikaler Versatz   |

### Header

| Feldname     | Typ      | Standard | Beschreibung         |
| ------------ | -------- | -------- | -------------------- |
| noHeader     | checkbox | false    | Kein Header anzeigen |
| noHeaderIcon | checkbox | false    | Kein Icon im Header  |
| header       | text     | -        | Header-Text          |
| headerSize   | slider   | -        | Header-Schriftgröße  |

### Value

| Feldname  | Typ    | Standard | Beschreibung       |
| --------- | ------ | -------- | ------------------ |
| alias     | text   | -        | Alias für den Wert |
| value     | text   | -        | Anzuzeigender Wert |
| valueSize | slider | -        | Wert-Schriftgröße  |

### Footer

| Feldname   | Typ      | Standard | Beschreibung         |
| ---------- | -------- | -------- | -------------------- |
| noFooter   | checkbox | false    | Kein Footer anzeigen |
| footer     | text     | -        | Footer-Text          |
| footerSize | slider   | -        | Footer-Schriftgröße  |

### Charakteristiken

| Feldname      | Typ           | Standard | Beschreibung                    |
| ------------- | ------------- | -------- | ------------------------------- |
| noCard        | checkbox      | false    | Keine Card (kein Hintergrund)   |
| squaredCorner | checkbox      | false    | Eckige Ecken (statt abgerundet) |
| textColor     | color         | -        | Textfarbe                       |
| outlined      | checkbox      | false    | Outline-Stil                    |
| outlinedFrame | checkbox      | false    | Outline für Rahmen              |
| basePadding   | slider        | -        | Basis-Innenabstand              |
| baseElevation | slider (0-24) | -        | Material-UI Elevation           |

### Geometrie

| Feldname | Typ      | Standard | Beschreibung      |
| -------- | -------- | -------- | ----------------- |
| square   | checkbox | false    | Quadratische Form |
| ellipse  | checkbox | false    | Elliptische Form  |
| circle   | checkbox | false    | Kreisform         |

### Hintergrund

| Feldname        | Typ   | Standard | Beschreibung                   |
| --------------- | ----- | -------- | ------------------------------ |
| background      | text  | -        | Hintergrund (Gradient möglich) |
| backgroundColor | color | -        | Hintergrundfarbe               |

### Rahmenhintergrund

| Feldname             | Typ   | Standard | Beschreibung                         |
| -------------------- | ----- | -------- | ------------------------------------ |
| frameBackground      | text  | -        | Rahmenhintergrund (Gradient möglich) |
| frameBackgroundColor | color | -        | Rahmen-Hintergrundfarbe              |

## Widget-Übersicht

Die Widget Collection umfasst folgende Widgets:

- [State Widget](De-State-Widget.md) - Anzeige und Steuerung von Zuständen (boolean, number, string, mixed)
- [Switch Widget](De-Switch-Widget.md) - Schalter für boolesche Werte
- [Checkbox Widget](De-Checkbox-Widget.md) - Checkbox für boolesche Werte
- [Slider Widget](De-Slider-Widget.md) - Schieberegler für numerische Werte
- [ButtonGroup Widget](De-ButtonGroup-Widget.md) - Button-Gruppe für verschiedene Datentypen
- [Select Widget](De-Select-Widget.md) - Dropdown-Auswahl für verschiedene Datentypen
- [RadioGroup Widget](De-RadioGroup-Widget.md) - Radio-Gruppe für verschiedene Datentypen
- [Dialog Widget](De-Dialog-Widget.md) - Dialog zur Anzeige von Views
- [Gauge Widget](De-Gauge-Widget.md) - Gauge zur Anzeige numerischer Werte (Linear/Radial)
- [Light Widget](De-Light-Widget.md) - Lichtsteuerung mit Farbauswahl
