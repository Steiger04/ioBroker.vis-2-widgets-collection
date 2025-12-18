/**
 * Header/icon rendering helper used by multiple Collection widgets.
 *
 * @module components/CollectionBaseImage
 */

import React, { useContext } from 'react';
import { CollectionContext } from './CollectionProvider';
import type { CollectionContextProps } from '../types';
import { type StyleData } from '../hooks/useData';

/**
 * Props for {@link module:components/CollectionBaseImage.default}.
 */
interface CollectionBaseImageProps {
    /** Style data computed by {@link module:hooks/useData}. */
    data: StyleData;
    /** Widget instance (used for reading config flags like `noHeaderIcon`). */
    widget: CollectionContextProps<any>['widget'];
}

/**
 * Renders the configured icon (active or inactive) in the header corner.
 *
 * @param props - Component props.
 * @returns An `<img>` element or `null` if icons are disabled.
 */
const CollectionBaseImage = ({ data, widget }: CollectionBaseImageProps): React.ReactElement | null => {
    const context = useContext(CollectionContext);
    const theme = context.theme;

    // Filter out `false` and keep string-only sources.
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
