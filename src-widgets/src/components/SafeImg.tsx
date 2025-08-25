import { type CSSProperties } from 'react';

const fallback = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

type SafeImgProps = {
    src?: string;
    alt?: string;
    style?: CSSProperties;
};

const SafeImg: React.FC<SafeImgProps> = ({ src, style = {}, alt = '' }) => {
    const safeSrc = src && src !== 'undefined' ? src : fallback;

    return (
        <img
            src={safeSrc}
            alt={alt}
            style={style}
            onError={e => {
                const target = e.currentTarget as HTMLImageElement;
                target.onerror = null; // verhindert Endlosschleifen
                target.src = fallback;
            }}
        />
    );
};

export default SafeImg;
