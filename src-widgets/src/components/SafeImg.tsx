/**
 * Image component that falls back to a transparent pixel on invalid or failed sources.
 *
 * @module components/SafeImg
 */

import { type CSSProperties } from 'react';

const fallback = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

type SafeImgProps = {
    /** Image source URL (string). */
    src?: string | null;
    /** Alternate text. */
    alt?: string;
    /** Optional inline styles. */
    style?: CSSProperties;
};

/**
 * Renders an `<img>` that never breaks layout due to missing sources.
 *
 * @param props - Component props.
 * @param props.src - Image source URL (string).
 * @param props.alt - Alternate text.
 * @param props.style - Optional inline styles.
 * @returns An `<img>` element.
 */
const SafeImg: React.FC<SafeImgProps> = ({ src, style = {}, alt = '' }) => {
    const safeSrc = src && src !== 'undefined' && src !== null ? src : fallback;

    return (
        <img
            src={safeSrc}
            alt={alt}
            style={style}
            onError={e => {
                console.log('ERROR LOADING IMAGE, FALLING BACK TO TRANSPARENT PIXEL');
                const target = e.currentTarget as HTMLImageElement;
                target.onerror = null; // prevent infinite onError loops
                target.src = fallback;
            }}
        />
    );
};

export default SafeImg;
