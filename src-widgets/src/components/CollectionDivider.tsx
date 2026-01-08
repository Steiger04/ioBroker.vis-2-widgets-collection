/**
 * Simple divider component for widget property editors.
 *
 * @module components/CollectionDivider
 */

import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import Generic from '../Generic';

/**
 * Props for the CollectionDivider component.
 */
interface CollectionDividerProps {
    /** Optional translation key for the divider label */
    dividerText?: string;
}

/**
 * Renders a full-width divider optionally labeled using widget translations.
 *
 * @remarks
 * This component is used in widget property editors to visually separate sections.
 * If `dividerText` is provided, the text is translated via `Generic.t()`.
 * @example
 * ```tsx
 * // Divider without text
 * <CollectionDivider />
 *
 * // Divider with translation key
 * <CollectionDivider dividerText="thumb" />
 * ```
 */
const CollectionDivider: React.FC<CollectionDividerProps> = ({ dividerText = '' }) => {
    const style: React.CSSProperties = {
        position: 'absolute',
        left: 0,
        width: '100%',
    };

    return (
        <Box
            sx={{
                display: 'inline-block',
                pt: 1.5,
                pb: dividerText ? 2 : 1.5,
            }}
        >
            {dividerText ? (
                <Divider sx={style}>
                    <Typography
                        sx={{
                            opacity: 0.7,
                            color: 'primary.main',
                        }}
                        variant="caption"
                    >
                        {Generic.t(dividerText)}
                    </Typography>
                </Divider>
            ) : (
                <Divider sx={style} />
            )}
        </Box>
    );
};

export default CollectionDivider;
