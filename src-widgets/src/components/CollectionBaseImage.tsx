/**
 * Header/icon rendering helper used by multiple Collection widgets.
 *
 * @module components/CollectionBaseImage
 */

import React, { useContext } from 'react';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { CollectionContext } from './CollectionProvider';

import { type StyleData } from '../hooks/useData';
import type { CollectionBaseImageWidgetData, CollectionContextProps } from '../types';

/**
 * Props for {@link module:components/CollectionBaseImage.default}.
 */
interface CollectionBaseImageProps {
    /** Style data computed by {@link module:hooks/useData}. */
    data: StyleData;
    /** Widget instance (used for reading config flags like `noHeaderIcon`). */
    widget: CollectionContextProps<CollectionBaseImageWidgetData>['widget'];
}

/**
 * Renders the configured icon (active or inactive) in the header corner.
 *
 * @param props - Component props.
 * @param props.data - Style data computed by `useData`.
 * @param props.widget - Widget instance for config flags (e.g., `noHeaderIcon`).
 * @returns An `<img>` element or `null` if icons are disabled.
 */
const CollectionBaseImage = ({ data, widget }: CollectionBaseImageProps): React.ReactElement | null => {
    const context = useContext(CollectionContext);
    const theme = context.theme;

    console.log('data in CollectionBaseImage:', data);

    // Filter out `false` and keep string-only sources.
    const iconSrc =
        (typeof data.iconActive === 'string' ? data.iconActive : undefined) ||
        (typeof data.icon === 'string' ? data.icon : undefined);

    const iconSize = typeof data.iconSize === 'string' ? data.iconSize : undefined; /* ||
        (typeof data.iconSizeActive === 'string' ? data.iconSizeActive : undefined); */

    const iconColor =
        widget.data.iconColorActive || data.iconColorActive || data.iconColor || theme.palette.primary.main;

    // Determine which toggle to use based on which icon is being rendered
    // const isActiveIcon = !data.icon && typeof data.iconActive === 'string';
    /* const forceColorMask = isActiveIcon
        ? (widget.data.enableIconColorMaskActive ?? false)
        : (widget.data.enableIconColorMask ?? false); */

    return !widget.data.noHeaderIcon && iconSrc ? (
        <img
            alt=""
            src={iconSrc}
            style={{
                position: 'absolute',
                top: `calc(0px - ${widget.data.iconYOffset || 0})`,
                right: `calc(0px - ${widget.data.iconXOffset || 0})`,
                // width: iconSize,
                height: iconSize,

                ...getIconColorStyles(
                    iconSrc,
                    iconColor,
                    Boolean(widget.data.enableIconColorMaskActive || data.forceColorMaskActive),
                ),
            }}
        />
    ) : null;
};

export default CollectionBaseImage;
