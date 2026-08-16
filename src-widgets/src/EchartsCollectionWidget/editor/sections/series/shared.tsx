/**
 * Shared building blocks of the Series section (ADR-0019 decomposition, WS5).
 *
 * @module EchartsCollectionWidget/editor/sections/series/shared
 * @remarks
 * The family-agnostic pieces every series sub-view composes: the read-only effective-colour
 * Swatch, the dashed EmptyState with CTA, the OID-first AddSeriesViaOid affordance, the
 * item-scoped IssueList, and the per-series raw-override editor with its categorised template
 * menu (ADR-0015/0017).
 */
import { useState, type FC, type ReactNode } from 'react';
import { Box, Button, Collapse, Typography } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { SelectID, type Connection, type IobTheme } from '@iobroker/adapter-react-v5';

import Generic from '../../../../Generic';
import JsonEditor from '../../JsonEditor';
import {
    injectTemplate,
    SERIES_TEMPLATES,
    TEMPLATE_CATEGORY_I18N,
    TEMPLATE_CATEGORY_ORDER,
    type SeriesTemplateSlot,
} from '../../seriesTemplates';
import TemplateMenu from '../TemplateMenu';
import type { ValidationIssue } from '../../validation';
import type { OidPickerCtx } from '../../OidPicker';

/** Read-only swatch showing a series' effective colour (explicit → palette slot). */
export const Swatch: FC<{ color: string }> = ({ color }) => (
    <Box
        sx={{
            width: 16,
            height: 16,
            borderRadius: '4px',
            backgroundColor: color,
            border: '1px solid',
            borderColor: 'divider',
            flexShrink: 0,
        }}
    />
);

/**
 * Dashed empty state; the CTA is supplied as children (an OID-picker CTA for cartesian/pie, a plain
 * button for radar indicators — ADR-0010 onboarding, skeleton removed per ADR-0013).
 */
export const EmptyState: FC<{ text: string; children: ReactNode }> = ({ text, children }) => (
    <Box
        sx={{
            border: '1px dashed',
            borderColor: 'divider',
            borderRadius: 1.5,
            p: 2,
            textAlign: 'center',
        }}
    >
        <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: 'block', mb: 1 }}
        >
            {text}
        </Typography>
        {children}
    </Box>
);

/**
 * An "add series" affordance that opens the OID picker FIRST and creates the series only once an OID
 * is chosen — no empty-OID card beforehand (the user's "keine Serie vor OID-Auswahl"). `variant='cta'`
 * for the empty state, `'button'` for the inline "+" add. cartesian/pie only.
 */
export const AddSeriesViaOid: FC<{
    pickerCtx: OidPickerCtx;
    historyOnly: boolean;
    onPick: (oid: string) => void;
    variant: 'cta' | 'button';
    label: string;
}> = ({ pickerCtx, historyOnly, onPick, variant, label }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            {variant === 'cta' ? (
                <Button
                    size="small"
                    variant="outlined"
                    startIcon={<AddIcon />}
                    onClick={() => setOpen(true)}
                    sx={{ textTransform: 'none' }}
                >
                    {label}
                </Button>
            ) : (
                <Button
                    size="small"
                    startIcon={<AddIcon />}
                    onClick={() => setOpen(true)}
                    sx={{ mt: 0.5 }}
                >
                    {label}
                </Button>
            )}
            {open && (
                <SelectID
                    socket={pickerCtx.socket as unknown as Connection}
                    theme={pickerCtx.theme as unknown as IobTheme}
                    themeType={pickerCtx.themeType}
                    selected=""
                    title={Generic.t('oid')}
                    {...(historyOnly ? { customFilter: { common: { custom: '_dataSources' } } } : {})}
                    onClose={() => setOpen(false)}
                    onOk={sel => {
                        onPick(typeof sel === 'string' ? sel : (sel?.[0] ?? ''));
                        setOpen(false);
                    }}
                />
            )}
        </>
    );
};

/** Item-scoped validation issues as a compact warning list on top of the section. */
export const IssueList: FC<{ issues: ValidationIssue[] }> = ({ issues }) => (
    <Box
        sx={{
            mb: 1.5,
            p: 1,
            bgcolor: 'action.hover',
            borderLeft: 3,
            borderColor: 'warning.main',
            borderRadius: 0.5,
        }}
    >
        {issues.map((issue, i) => (
            <Typography
                key={i}
                variant="caption"
                color="text.secondary"
                component="div"
            >
                • {issue.args?.length ? `${issue.args[0]}: ` : ''}
                {Generic.t(issue.key, ...(issue.args ?? []).slice(1))}
            </Typography>
        ))}
    </Box>
);

/** Categorised template dropdown for a series card (ADR-0017): injects a GUI-uncovered preset. */
const SeriesTemplateMenu: FC<{ slot: SeriesTemplateSlot; onInject: (json: string) => void }> = ({ slot, onInject }) => (
    <TemplateMenu
        templates={SERIES_TEMPLATES[slot]}
        categoryOrder={TEMPLATE_CATEGORY_ORDER}
        categoryI18n={TEMPLATE_CATEGORY_I18N}
        onInject={onInject}
    />
);

/**
 * Collapsible per-series raw echarts JSON override (ADR-0015/0017): GUI knobs win, data is managed.
 * When `slot` is set, a categorised template dropdown (ADR-0017) is shown above the editor.
 */
export const SeriesRawOverride: FC<{
    raw: string | undefined;
    onChange: (value: string) => void;
    slot?: SeriesTemplateSlot;
}> = ({ raw, onChange, slot }) => {
    const [open, setOpen] = useState(false);
    const trimmed = (raw ?? '').trim();
    let valid = true;
    if (trimmed) {
        try {
            const v = JSON.parse(trimmed);
            valid = !!v && typeof v === 'object' && !Array.isArray(v);
        } catch {
            valid = false;
        }
    }
    return (
        <Box sx={{ mt: 1 }}>
            <Button
                size="small"
                onClick={() => setOpen(v => !v)}
                sx={{ textTransform: 'none', color: 'text.secondary', minWidth: 0 }}
            >
                {open ? '−' : '+'} {Generic.t('echarts_series_raw')}
            </Button>
            {/* mountOnEnter: the JsonEditor (Prism highlighting) is expensive — mount it only when
                the raw override is actually opened, never for a collapsed one. */}
            <Collapse
                in={open}
                mountOnEnter
            >
                {slot && (
                    <SeriesTemplateMenu
                        slot={slot}
                        onInject={json => onChange(injectTemplate(raw, json))}
                    />
                )}
                <JsonEditor
                    value={raw ?? ''}
                    onChange={onChange}
                    minRows={3}
                    placeholder={'{\n  "markPoint": { "data": [{ "type": "max" }] }\n}'}
                />
                <Typography
                    variant="caption"
                    sx={{ color: valid ? 'success.main' : 'error.main', display: 'block' }}
                >
                    {valid ? Generic.t('echarts_editor_valid_json') : `✗ ${Generic.t('echarts_series_raw_invalid')}`}
                </Typography>
                <Typography
                    variant="caption"
                    color="text.secondary"
                >
                    {Generic.t('echarts_series_raw_hint')}
                </Typography>
            </Collapse>
        </Box>
    );
};
