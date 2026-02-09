/**
 * Header/icon rendering helper used by multiple Collection widgets.
 *
 * @module components/CollectionBaseImage
 */

import React, { useContext } from 'react';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { CollectionContext } from './CollectionProvider';

import { type StyleData } from '../hooks/useData/types';
import type { CollectionBaseImageWidgetData, CollectionContextProps } from '../types';
import SafeImg from './SafeImg';

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

    const iconSrc = data.icon;

    const iconColor = data.iconColor || theme.palette.primary.main;

    return !widget.data.noHeaderIcon && iconSrc ? (
        <SafeImg
            alt=""
            src={iconSrc}
            style={{
                position: 'absolute',
                top: `calc(0px - ${data.iconYOffsetCm})`,
                right: `calc(0px - ${data.iconXOffsetCm})`,

                // width: iconSize,
                height: data.iconSizeCm,

                ...getIconColorStyles(
                    iconSrc,
                    iconColor,

                    Boolean(data.forceColorMaskCm),
                ),
            }}
        />
    ) : null;
};

export default CollectionBaseImage;
