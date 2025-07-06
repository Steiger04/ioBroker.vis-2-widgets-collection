import React from 'react';

const CollectionBaseImage = ({ data, widget }) => {
    return !widget.data.noHeaderIcon && (data.icon || data.iconActive) ? (
        <img
            alt=""
            src={data.icon || data.iconActive}
            style={{
                position: 'absolute',
                top: `calc(0px - ${widget.data.iconYOffset})`,
                right: `calc(0px - ${widget.data.iconXOffset})`,
                width: data.iconSize || data.iconSizeActive,
                height: data.iconSize || data.iconSizeActive,
                color: data.iconColorActive || data.iconColor,
                filter: data.iconColorActive || data.iconColor ? 'drop-shadow(0px 10000px 0)' : null,
                transform: data.iconColorActive || data.iconColor ? 'translateY(-10000px)' : null,
            }}
        />
    ) : null;
};

export default CollectionBaseImage;
