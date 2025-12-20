# SliderCollectionWidget - fontSize Styling

## Style-Priorität

Die fontSize für Slider-Markierungen wird durch eine mehrstufige Fallback-Kette bestimmt:

### Globale Styles (SliderCollection.tsx, Zeilen 411-427)

- Angewendet auf: Alle `.MuiSlider-markLabel` Elemente
- Fallback-Kette:
    1. `widget.data.markerTextSize` (Slider-spezifisch, 0-500%)
    2. `data.valueSize` (aus commonFields)
    3. `'1em'` (Browser-Standard)

### Individuelle Styles (CollectionMark.tsx, Zeilen 111-117)

- Angewendet auf: Jede einzelne Markierung via Custom Slot
- Fallback-Kette:
    1. `widget.data.valueSizeActive` (wenn Markierung aktiv)
    2. `mark.fontSize` (aus useData.ts, vorberechnet)
    3. `data.valueSize` (aus commonFields)
    4. `'1em'` (Browser-Standard)

### Priorität

**Individuelle Styles > Globale Styles**

Die individuellen Styles in `CollectionMark` überschreiben die globalen Styles durch höhere CSS-Spezifität (direkte `sx`-Props vs. CSS-Selektoren).

## Test-Szenarien

1. **Nur globale markerTextSize gesetzt**: Alle Markierungen verwenden `markerTextSize`
2. **Individuelle valueSize${i} gesetzt**: Spezifische Markierungen verwenden ihre individuellen Werte
3. **valueSizeActive gesetzt + Markierung aktiv**: Aktive Markierung verwendet `valueSizeActive`
4. **Keine Werte gesetzt**: Fallback auf `data.valueSize` oder `'1em'`

## Vergleich mit ButtonGroupCollectionWidget

Die Implementierung ist analog zu `ButtonGroupCollection.tsx` (Zeilen 607-615):

- Gleiche Fallback-Kette
- Gleiche Prüfung auf aktiven Zustand
- Gleiche Verwendung von `valueSizeActive` aus commonFields
