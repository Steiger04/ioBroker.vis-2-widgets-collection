import React, { useContext } from 'react';
import { CollectionContext } from './CollectionProvider';
import { type AllCollectionContextProps } from '../types';
import { type StyleData } from '../hooks/useData';

// Typen für die Props basierend auf der Verwendung in Collection-Komponenten
interface CollectionBaseImageProps {
    data: StyleData;
    widget: AllCollectionContextProps['widget'];
}

const CollectionBaseImage: React.FC<CollectionBaseImageProps> = ({ data, widget }) => {
    const context = useContext(CollectionContext);
    const theme = context.theme;

    // Type Guards für string-Werte (filtere false heraus)
    const iconSrc =
        (typeof data.icon === 'string' ? data.icon : undefined) ||
        (typeof data.iconActive === 'string' ? data.iconActive : undefined);

    const iconSize =
        (typeof data.iconSize === 'string' ? data.iconSize : undefined) ||
        (typeof data.iconSizeActive === 'string' ? data.iconSizeActive : undefined);

    const iconColor = data.iconColorActive || data.iconColor || theme.palette.primary.main;

    return !widget.data.noHeaderIcon && iconSrc ? (
        <img
            alt=""
            src={iconSrc}
            style={{
                position: 'absolute',
                top: `calc(0px - ${widget.data.iconYOffset || 0})`,
                right: `calc(0px - ${widget.data.iconXOffset || 0})`,
                width: iconSize,
                height: iconSize,
                color: iconColor,
                filter: iconColor ? 'drop-shadow(0px 10000px 0)' : undefined,
                transform: iconColor ? 'translateY(-10000px)' : undefined,
            }}
        />
    ) : null;
};

export default CollectionBaseImage;
