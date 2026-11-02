/**
 * The frame's corner icon (CONTEXT "Eck-Icon") — internal to {@link module:components/CollectionBase}.
 *
 * @module components/CornerIcon
 * @remarks
 * The frame owns the icon: it renders it from its own style data, a widget only substitutes
 * that data (Gauge) or switches the icon off (`cornerIcon` prop of CollectionBase). The
 * `noHeaderIcon` switch is read from the widget data in the collection context. The colour
 * comes resolved from the state resolvers (terminal `primary` included); the colour mask follows
 * the widget-level flag `forceColorMaskCm`.
 */

import React, { useContext } from 'react';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { CollectionContext } from './CollectionProvider';

import { type StyleData } from '../hooks/useData/types';
import SafeImg from './SafeImg';

/**
 * Props for {@link module:components/CornerIcon.default}.
 */
interface CornerIconProps {
    /** The icon's style data: the frame's own, or the widget's substitute. */
    data: StyleData;
}

/**
 * Renders the icon in the frame's top-right corner, absolutely positioned.
 *
 * @param props - Component props.
 * @param props.data - The icon's style data.
 * @returns An `<img>` element, or `null` without an icon or when `noHeaderIcon` is set.
 */
const CornerIcon = ({ data }: CornerIconProps): React.ReactElement | null => {
    const { widget } = useContext(CollectionContext);

    const iconSrc = data.icon;

    return !widget.data.noHeaderIcon && iconSrc ? (
        <SafeImg
            alt=""
            src={iconSrc}
            style={{
                position: 'absolute',
                top: `calc(0px - ${data.iconYOffsetCm})`,
                right: `calc(0px - ${data.iconXOffsetCm})`,

                height: data.iconSizeCm,

                ...getIconColorStyles(iconSrc, data.iconColor, Boolean(data.forceColorMaskCm)),
            }}
        />
    ) : null;
};

export default CornerIcon;
