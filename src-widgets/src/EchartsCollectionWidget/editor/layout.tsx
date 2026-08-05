/**
 * The echarts configurator control kit (ADR-0019) — the layout + control primitives every section
 * body is built from.
 *
 * @module EchartsCollectionWidget/editor/layout
 * @remarks
 * - **FieldGrid** — the responsive workhorse: `repeat(auto-fill, minmax(150px, 1fr))`; cells
 *   reflow 1→4 columns purely with rail width. No JS width measurement, so a splitter drag stays
 *   a layout/paint operation. A wide child takes `gridColumn: '1 / -1'`.
 * - **FieldRow** — flex-wrap row for composite fields (OID picker, colour); children own their
 *   `flex` basis, the row aligns control baselines (`flex-end`).
 * - **SubGroup** — an overline-labelled knob cluster inside a card body. Structure without
 *   disclosure: no fourth expand level.
 * - **SwitchList / SwitchRow** — the boolean idiom: label left, switch right, ~32 px rows in a
 *   hairline box. Replaces the stacked label-over-switch cell (the ~60 px wall).
 * - **SliderField** — the bounded-numeric idiom: slider + synced number input (either edits; the
 *   working copy updates live — the preview IS the feedback).
 * - **EditorCard** — the shared series/axis card shell: whole-header toggle, hover affordance,
 *   primary border while open, right-aligned actions.
 *
 * Hardcoded pixel widths are banned from section bodies — these primitives carry the geometry.
 */
import { useId, useState, type FC, type ReactNode } from 'react';
import { Box, Collapse, Slider, Switch, TextField, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import { ExpandMore as ExpandIcon } from '@mui/icons-material';

import { FieldLabel, noSpinnerSx } from './controls';

// ── layout primitives ─────────────────────────────────────────────

/** Responsive field grid: auto-fill columns of ≥ `min` px; wide children span `'1 / -1'`. */
export const FieldGrid: FC<{ children: ReactNode; min?: number; sx?: SxProps<Theme> }> = ({
    children,
    min = 150,
    sx,
}) => (
    <Box
        sx={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fill, minmax(${min}px, 1fr))`,
            gap: 1.5,
            ...sx,
        }}
    >
        {children}
    </Box>
);

/** Flex-wrap row for composite fields; children own their flex basis, controls align at the bottom. */
export const FieldRow: FC<{ children: ReactNode; sx?: SxProps<Theme> }> = ({ children, sx }) => (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'flex-end', ...sx }}>{children}</Box>
);

/** A named knob cluster inside a card body — overline label, no disclosure. */
export const SubGroup: FC<{ title: string; hint?: string; children: ReactNode; sx?: SxProps<Theme> }> = ({
    title,
    hint,
    children,
    sx,
}) => (
    <Box sx={{ mb: 2, '&:last-child': { mb: 0 }, ...sx }}>
        <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 1, mb: 1 }}>
            <Typography
                variant="caption"
                sx={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'text.secondary',
                }}
            >
                {title}
            </Typography>
            {hint && (
                <Typography
                    variant="caption"
                    color="text.secondary"
                    noWrap
                >
                    {hint}
                </Typography>
            )}
        </Box>
        {children}
    </Box>
);

// ── boolean idiom ─────────────────────────────────────────────────

/** One boolean row: label left (clickable), switch right. Lives inside a SwitchList box. */
export const SwitchRow: FC<{ label: string; checked: boolean; onChange: (v: boolean) => void; disabled?: boolean }> = ({
    label,
    checked,
    onChange,
    disabled,
}) => {
    const id = useId();
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 1,
                pl: 1,
                pr: 0.5,
                py: 0.25,
                minHeight: 32,
            }}
        >
            <Typography
                component="label"
                htmlFor={id}
                variant="body2"
                noWrap
                sx={{ flex: 1, minWidth: 0, cursor: disabled ? 'default' : 'pointer' }}
            >
                {label}
            </Typography>
            <Switch
                id={id}
                size="small"
                checked={checked}
                disabled={disabled}
                onChange={e => onChange(e.target.checked)}
            />
        </Box>
    );
};

/** Hairline box grouping SwitchRows; rows separated by hairlines. */
export const SwitchList: FC<{ children: ReactNode; sx?: SxProps<Theme> }> = ({ children, sx }) => (
    <Box
        sx={{
            border: 1,
            borderColor: 'divider',
            borderRadius: 1.5,
            overflow: 'hidden',
            '& > *:not(:last-child)': { borderBottom: 1, borderColor: 'divider' },
            ...sx,
        }}
    >
        {children}
    </Box>
);

// ── bounded numeric idiom ─────────────────────────────────────────

/**
 * Slider + synced number input for bounded ranges (opacity, widths, radii, durations). The slider
 * commits live (`onChange`, not `onChangeCommitted`) — the working copy is local and the preview
 * is the feedback. The number input drafts while focused and clamps on commit.
 */
export const SliderField: FC<{
    label: string;
    value: number;
    min: number;
    max: number;
    step?: number;
    onChange: (value: number) => void;
    disabled?: boolean;
}> = ({ label, value, min, max, step = 1, onChange, disabled }) => {
    const [draft, setDraft] = useState<string | null>(null);
    const clamp = (n: number): number => Math.min(Math.max(n, min), max);
    return (
        <Box>
            <FieldLabel>{label}</FieldLabel>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 0.5 }}>
                <Slider
                    size="small"
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    disabled={disabled}
                    onChange={(_, v) => onChange(v as number)}
                    aria-label={label}
                    sx={{ flex: 1, minWidth: 0 }}
                />
                <TextField
                    size="small"
                    type="number"
                    disabled={disabled}
                    value={draft ?? String(value)}
                    inputProps={{ min, max, step, 'aria-label': label }}
                    onFocus={() => setDraft(String(value))}
                    onChange={e => {
                        setDraft(e.target.value);
                        if (e.target.value !== '') {
                            const n = Number(e.target.value);
                            if (Number.isFinite(n)) {
                                onChange(clamp(n));
                            }
                        }
                    }}
                    onBlur={() => setDraft(null)}
                    sx={{ width: 64, flexShrink: 0, ...noSpinnerSx }}
                />
            </Box>
        </Box>
    );
};

// ── card shell ────────────────────────────────────────────────────

/**
 * The shared series/axis card: quiet border (primary while open), whole-header toggle (chevron +
 * swatch + title/subtitle), right-aligned actions. The body collapses but stays mounted once
 * opened, so per-body local state survives.
 */
export const EditorCard: FC<{
    open: boolean;
    onToggle: () => void;
    swatch?: ReactNode;
    title: ReactNode;
    subtitle?: ReactNode;
    actions?: ReactNode;
    children: ReactNode;
}> = ({ open, onToggle, swatch, title, subtitle, actions, children }) => (
    <Box
        sx={{
            border: 1,
            borderColor: open ? 'primary.main' : 'divider',
            borderRadius: 1.5,
            mb: 1,
            overflow: 'hidden',
            transition: 'border-color 150ms',
        }}
    >
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.75,
                pl: 1,
                pr: 0.5,
                py: 0.5,
                borderRadius: 'inherit',
                '&:hover': { bgcolor: 'action.hover' },
            }}
        >
            <Box
                component="button"
                type="button"
                onClick={onToggle}
                aria-expanded={open}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.75,
                    flex: 1,
                    minWidth: 0,
                    border: 0,
                    p: 0,
                    bgcolor: 'transparent',
                    color: 'inherit',
                    font: 'inherit',
                    textAlign: 'left',
                    cursor: 'pointer',
                }}
            >
                <ExpandIcon
                    sx={{
                        fontSize: 16,
                        color: 'text.secondary',
                        transform: open ? 'rotate(180deg)' : 'none',
                        transition: 'transform 150ms',
                        flexShrink: 0,
                    }}
                />
                {swatch}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                        variant="body2"
                        noWrap
                    >
                        {title}
                    </Typography>
                    {subtitle !== undefined && subtitle !== null && (
                        <Typography
                            variant="caption"
                            noWrap
                            sx={{ display: 'block', color: 'text.secondary' }}
                        >
                            {subtitle}
                        </Typography>
                    )}
                </Box>
            </Box>
            {actions}
        </Box>
        <Collapse in={open}>
            <Box sx={{ px: 1.5, pb: 1.5, pt: 0.5 }}>{children}</Box>
        </Collapse>
    </Box>
);
