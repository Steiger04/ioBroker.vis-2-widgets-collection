/**
 * Slider mark-label renderer used by MUI `Slider`.
 *
 * @module widgets/CollectionMark
 */

import { SliderMarkLabel, Box, Typography } from '@mui/material';
import React, { useState, useEffect, useContext, type FC, type HTMLAttributes } from 'react';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useStyles from '../hooks/useStyles';

import type { SliderCollectionContextProps } from '../types';

interface MarkData {
    value: number;
    label: string;
    fontSize: string | null;
    textColor?: string;
    icon: string | null;
    iconWidth: number;
    iconHeight: number;
    iconXOffset: string;
    iconYOffset: string;
    iconColor: string | null;
}

// Extend HTMLAttributes for the remaining props passed through to SliderMarkLabel.
interface CollectionMarkProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
    marks: boolean;
    sliderOrientation: 'horizontal' | 'vertical';
    aliasActive?: string;
    activeMarkIndex?: number | null;
    defaultIconColor?: string;
    'data-index': number;
    ownerState: {
        marks?: MarkData[];
    };
    // Additional MUI-specific props.
    style?: React.CSSProperties;
    className?: string;
}

/**
 * Renders a mark label with optional icon.
 *
 * @remarks
 * MUI passes mark metadata via `ownerState.marks` and the current index via
 * `data-index`. This component uses `innerHTML` to support markup in labels.
 */
const CollectionMark: FC<CollectionMarkProps> = ({
    marks,
    sliderOrientation,
    aliasActive,
    activeMarkIndex,
    defaultIconColor,
    ...props
}) => {
    const [ref, setRef] = useState<HTMLElement | null>(null);
    const { data } = useData('oid');
    const context = useContext(CollectionContext) as SliderCollectionContextProps;
    const { widget } = context;

    const { fontStyles, textStyles } = useStyles(widget.style);

    const index = props['data-index'];
    // Get the mark data from MUI's ownerState.marks (which contains our sliderMarks)
    const mark = props.ownerState?.marks?.[index];

    // Check if this is exactly the current selected mark using our index
    const isCurrentSelected = activeMarkIndex === index;

    useEffect(() => {
        if (ref && mark?.label) {
            // Use aliasActive ONLY for the currently selected mark (not all active marks)
            if (isCurrentSelected && aliasActive) {
                ref.innerHTML = aliasActive;
            } else {
                ref.innerHTML = mark.label;
            }
        }
    }, [mark?.label, ref, isCurrentSelected, aliasActive, index]);

    return marks && mark ? (
        <SliderMarkLabel {...props}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: sliderOrientation === 'vertical' ? 'row' : 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    data-font="active"
                    ref={setRef}
                    sx={{
                        ...fontStyles,
                        ...textStyles,
                        textTransform: 'none',
                        flexGrow: 1,
                        pr: sliderOrientation === 'vertical' ? 1 : 0,
                        pb: sliderOrientation === 'vertical' ? 0 : 1,

                        // fontSize: Vollständige Prioritätskette (alle Werte als % relativ zu 1em)
                        // 1. valueSizeActive (Gruppe Aktiv, wenn diese Markierung aktiv ist)
                        // 2. mark.fontSize (vorberechnet in useData.ts, nur für States)
                        //    - valueSize${i} (Gruppe Wert[1]-Wert[n], individuell für diesen Zustand)
                        //    - markerTextSize (Gruppe Schieberegler, nur für Markierungen die Zustände sind)
                        // 3. data.valueSize (Gruppe Allgemein, globaler Fallback für alle Markierungen)
                        // 4. '1em' (finaler Fallback, entspricht 100%)
                        //
                        // color: Vollständige Prioritätskette (analog zu fontSize)
                        // 1. textColorActive (Gruppe Aktiv, wenn diese Markierung aktiv ist)
                        // 2. mark.textColor (vorberechnet in useData.ts, nur für States)
                        //    - textColor${i} (Gruppe Wert[1]-Wert[n], individuell für diesen Zustand)
                        //    - markerTextColor (Gruppe Schieberegler, nur für Markierungen die Zustände sind)
                        // 3. data.textColor (Gruppe Allgemein, globaler Fallback für alle Markierungen)
                        //
                        // WICHTIG: Diese Styles überschreiben die globalen MuiSlider-markLabel Styles
                        // aus SliderCollection.tsx (Zeilen 415-426) durch höhere CSS-Spezifität.
                        // Min/Max/Step-Markierungen (keine States) haben mark.fontSize=undefined und
                        // mark.textColor=undefined und verwenden nur data.valueSize/data.textColor oder Fallbacks.
                        fontSize:
                            (isCurrentSelected &&
                                typeof widget.data.valueSizeActive === 'number' &&
                                `${widget.data.valueSizeActive}%`) ||
                            mark.fontSize ||
                            data.valueSize ||
                            '1em',

                        color: (isCurrentSelected && widget.data.textColorActive) || mark.textColor || data.textColor,
                    }}
                />
                <Box
                    data-position="active"
                    sx={{
                        position: 'relative',
                        bottom: mark.iconYOffset,
                        left: mark.iconXOffset,

                        flexGrow: 1,
                    }}
                >
                    <img
                        data-img="active"
                        src={
                            mark.icon ||
                            'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                        }
                        alt=""
                        style={{
                            position: 'relative',
                            width: `${(24 * mark.iconWidth) / 100}px`,
                            height: `${(24 * mark.iconHeight) / 100}px`,

                            color: mark.iconColor || defaultIconColor || undefined,
                            filter: mark.iconColor || defaultIconColor ? 'drop-shadow(0px 10000px 0)' : undefined,
                            transform: mark.iconColor || defaultIconColor ? 'translateY(-10000px)' : undefined,
                        }}
                    />
                </Box>
            </Box>
        </SliderMarkLabel>
    ) : null;
};

export default CollectionMark;
