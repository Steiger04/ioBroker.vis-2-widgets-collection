/**
 * OID picker for the echarts editor — a text field plus a "…" button that opens the
 * adapter-react-v5 `SelectID` dialog (the dialog form of the ObjectBrowser) filtered to
 * history-enabled states.
 *
 * @module EchartsCollectionWidget/editor/OidPicker
 * @remarks
 * Realises spec a1: an OID picker filterable to history-enabled states via
 * `{ common: { custom: '_dataSources' } }`. The text field still allows direct paste/edit; the
 * dialog is for browsing. `SelectID` is self-rendering (its own OK/Cancel Dialog), so this
 * component just toggles it.
 */
import { useState } from 'react';
import type React from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import {
    SelectID,
    type Connection,
    type IobTheme,
    type LegacyConnection,
    type ThemeType,
} from '@iobroker/adapter-react-v5';
import type { VisTheme } from '@iobroker/types-vis-2';

import Generic from '../../Generic';

/** Context the SelectID dialog needs, drilled down from the custom field component. */
export interface OidPickerCtx {
    socket: LegacyConnection;
    theme: VisTheme;
    themeType: ThemeType;
}

interface OidPickerProps {
    /** Current OID string (may be empty). */
    value: string;
    /** Called with a new OID (from typing or dialog selection). */
    onChange: (oid: string) => void;
    /** Dialog context (socket + theme). */
    ctx: OidPickerCtx;
}

export default function OidPicker({ value, onChange, ctx }: OidPickerProps): React.JSX.Element {
    const [open, setOpen] = useState(false);

    return (
        <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
            <TextField
                size="small"
                label="OID"
                value={value}
                onChange={e => onChange(e.target.value)}
                sx={{ width: 200 }}
            />
            <IconButton
                size="small"
                onClick={() => setOpen(true)}
                aria-label={Generic.t('echarts_editor_browse_oid')}
            >
                <SearchIcon fontSize="small" />
            </IconButton>
            {open && (
                <SelectID
                    socket={ctx.socket as unknown as Connection}
                    theme={ctx.theme as unknown as IobTheme}
                    themeType={ctx.themeType}
                    selected={value || ''}
                    title={Generic.t('oid')}
                    // Only history-enabled states (history/sql/influxdb custom settings).
                    customFilter={{ common: { custom: '_dataSources' } }}
                    onClose={() => setOpen(false)}
                    onOk={(selected): void => {
                        onChange(typeof selected === 'string' ? selected : (selected?.[0] ?? ''));
                        setOpen(false);
                    }}
                />
            )}
        </Box>
    );
}
