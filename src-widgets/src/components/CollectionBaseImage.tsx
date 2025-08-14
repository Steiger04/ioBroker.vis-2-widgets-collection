import React from 'react';

// Typen für die Props basierend auf der Verwendung in Collection-Komponenten
interface CollectionBaseImageProps {
    data: {
        icon?: string | false;
        iconActive?: string | false;
        iconSize?: string;
        iconSizeActive?: string | false;
        iconColor?: string;
        iconColorActive?: string;
        [key: string]: any; // Für weitere dynamische Properties
    };
    widget: {
        data: {
            noHeaderIcon?: boolean;
            iconYOffset?: string | number;
            iconXOffset?: string | number;
            [key: string]: any; // Für weitere Widget-Data-Properties
        };
        [key: string]: any; // Für weitere Widget-Properties
    };
}

const CollectionBaseImage: React.FC<CollectionBaseImageProps> = ({ data, widget }) => {
    // Type Guards für string-Werte (filtere false heraus)
    const iconSrc =
        (typeof data.icon === 'string' ? data.icon : undefined) ||
        (typeof data.iconActive === 'string' ? data.iconActive : undefined);

    const iconSize =
        (typeof data.iconSize === 'string' ? data.iconSize : undefined) ||
        (typeof data.iconSizeActive === 'string' ? data.iconSizeActive : undefined);

    const iconColor = data.iconColorActive || data.iconColor;

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
