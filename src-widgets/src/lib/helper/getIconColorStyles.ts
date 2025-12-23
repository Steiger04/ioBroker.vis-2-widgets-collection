import { isBase64Icon } from './isBase64Icon';

/**
 * Interface für Icon-Color-Styles
 */
export interface IconColorStyles {
    color?: string;
    filter?: string;
    transform?: string;
}

/**
 * Gibt die CSS-Styles für eingefärbte Icons zurück.
 *
 * Diese Funktion wendet die CSS-Filter-Technik (drop-shadow + translateY) an,
 * um Base64-kodierte Icons einzufärben. Die Technik funktioniert für alle
 * Base64-Bildformate (SVG, PNG, JPG, GIF), nicht aber für normale URLs.
 *
 * Die Technik:
 * 1. Setzt die Farbe des Icons
 * 2. Verschiebt das Icon um 10000px nach unten (translateY)
 * 3. Erzeugt einen Schatten an der ursprünglichen Position (drop-shadow)
 * 4. Das Ergebnis: Ein eingefärbtes Icon an der ursprünglichen Position
 *
 * @param iconSrc - Der Icon-String (Data-URI oder URL)
 * @param iconColor - Die gewünschte Farbe für das Icon
 * @returns Objekt mit CSS-Styles oder leeres Objekt
 */
export const getIconColorStyles = (
    iconSrc: string | null | undefined,
    iconColor: string | null | undefined,
): IconColorStyles => {
    // Prüfe, ob das Icon Base64-kodiert ist
    if (!isBase64Icon(iconSrc)) {
        return {};
    }

    // Prüfe, ob eine Farbe angegeben ist
    if (!iconColor || iconColor === '') {
        return {};
    }

    // Gib die Filter-Styles zurück
    return {
        color: iconColor,
        filter: 'drop-shadow(0px 10000px 0)',
        transform: 'translateY(-10000px)',
    };
};
