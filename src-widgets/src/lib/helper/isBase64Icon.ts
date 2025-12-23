/**
 * Prüft, ob ein Icon ein Base64-kodiertes Bild ist.
 *
 * Base64-Icons sind als Data-URIs eingebettet und können mit CSS-Filtern eingefärbt werden.
 * Unterstützt werden: SVG, PNG, JPG/JPEG, GIF.
 *
 * Die CSS-Filter-Technik (drop-shadow + translateY) funktioniert für alle Base64-Bildformate,
 * auch wenn die Einfärbung bei SVG-Grafiken am besten funktioniert.
 *
 * @param icon - Der Icon-String (Data-URI oder URL)
 * @returns true, wenn das Icon ein Base64-kodiertes Bild ist, sonst false
 */
export const isBase64Icon = (icon: string | null | undefined): boolean => {
    if (!icon || typeof icon !== 'string') {
        return false;
    }

    // Erkennt alle gängigen Base64-Bildformate: SVG, PNG, JPG/JPEG, GIF
    // Case-insensitive Prüfung auf 'data:image/<format>;base64,'
    return /^data:image\/(svg\+xml|png|jpe?g|gif);base64,/i.test(icon);
};
