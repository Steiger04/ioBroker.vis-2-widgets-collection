/**
 * Simple divider component used by widget property editors.
 *
 * @module components/CollectionDivider
 */

import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import SliderCollectionWidget from '../SliderCollectionWidget/SliderCollectionWidget';

/**
 * @typedef {Object} CollectionDividerProps
 * @property {string=} dividerText Optional translation key to render as divider label.
 */

/**
 * Renders a full-width divider optionally labeled using widget translations.
 *
 * @param {CollectionDividerProps} props Component props.
 * @returns {JSX.Element} Divider block.
 */
function CollectionDivider({ dividerText = '' }) {
    const style = {
        position: 'absolute',
        left: 0,
        width: '100%',
    };

    return (
        <Box
            sx={{
                display: 'block',
                pt: 1.5,
                pb: dividerText ? 2 : 1.5,
            }}
        >
            {dividerText ? (
                <Divider sx={style}>
                    <Typography
                        sx={{
                            opacity: 0.5,
                            color: 'primary.main',
                        }}
                        variant="caption"
                    >
                        {SliderCollectionWidget.t(dividerText)}
                    </Typography>
                </Divider>
            ) : (
                <Divider sx={style} />
            )}
        </Box>
    );
}

export default CollectionDivider;
