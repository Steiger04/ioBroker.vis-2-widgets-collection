/**
 * The shared configurator control kit — layout + control primitives every configurator
 * section body is built from.
 *
 * @module components/controls
 * @remarks
 * Born in the echarts configurator (ADR-0019), generalised into a shared module by ADR-0020
 * so the theme studio (and future configurators) speak the same language:
 * - **FieldLabel** — the one label idiom: a 12 px caption above the control, never a floating
 *   label (those truncate brutally in narrow grid cells). Single-line with ellipsis; the full
 *   text rides as a tooltip.
 * - **FieldGrid** — the responsive workhorse: `repeat(auto-fill, minmax(150px, 1fr))`; cells
 *   reflow 1→4 columns purely with container width. No JS width measurement, so a splitter
 *   drag stays a layout/paint operation. A wide child takes `gridColumn: '1 / -1'`.
 * - **FieldRow** — flex-wrap row for composite fields (OID picker, colour); children own their
 *   `flex` basis, the row aligns control baselines (`flex-end`).
 * - **SubGroup** — an overline-labelled knob cluster inside a card body. Structure without
 *   disclosure: no fourth expand level.
 * - **SwitchList / SwitchRow** — the boolean idiom: label left, switch right, ~32 px rows in a
 *   hairline box. Replaces the stacked label-over-switch cell (the ~60 px wall).
 * - **SliderField** — the bounded-numeric idiom: slider + synced number input (either edits; the
 *   working copy updates live — the preview IS the feedback).
 * - **OptionalSliderField** — the optional bounded-numeric idiom: value can be UNSET (deferring to
 *   echarts' own default); the slider holds `fallback` when unset, the number clears back to "auto".
 * - **EditorCard** — the shared card shell: whole-header toggle, hover affordance, primary
 *   border while open, right-aligned actions, lazily mounted body.
 * - **InfoBox** — the quiet left-bordered advisory callout; `tone="warning"` accents it for
 *   non-blocking cautions. The one callout idiom across configurator sections.
 * - **LabeledSelect / NumberField / OptionalNumberField / TextField2** — scalar inputs on the
 *   caption-above idiom.
 * - **SectionTabs** — the one tab idiom (ADR-0073): a dense scrollable tab row for section and
 *   card bodies; view-only local state, ⚠ dot per tab beside the section rollup.
 *
 * Hardcoded pixel widths are banned from section bodies — these primitives carry the geometry.
 * All labels go through `Generic.t` at the call site.
 */
import { useEffect, useId, useState, type FC, type ReactNode } from 'react';
import type React from 'react';
import { Box, Collapse, MenuItem, Slider, Switch, Tab, Tabs, TextField, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import { ExpandMore as ExpandIcon } from '@mui/icons-material';

// ── tiny shared labels ────────────────────────────────────────────

/** Hides the native number spinners (ugly + inconsistent across browsers) on type=number inputs. */
export const noSpinnerSx = {
    '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
    },
    '& input[type=number]': { MozAppearance: 'textfield', appearance: 'textfield' },
} as const;

/**
 * The one label idiom (ADR-0019): a 12 px caption above the control — never a floating label
 * (those truncate brutally in narrow grid cells). Single-line with ellipsis; the full text rides
 * as a tooltip. The control below is label-free and owns the full cell width for its value.
 */
export const FieldLabel: FC<{ children: React.ReactNode }> = ({ children }) => (
    <Typography
        variant="caption"
        color="text.secondary"
        noWrap
        title={typeof children === 'string' ? children : undefined}
        sx={{ display: 'block', mb: 0.5 }}
    >
        {children}
    </Typography>
);

/** Section-level label: small bold title + optional quiet hint line beneath. */
export const SectionLabel: FC<{ children: React.ReactNode; hint?: string }> = ({ children, hint }) => (
    <Box>
        <Typography
            variant="subtitle2"
            fontWeight={600}
        >
            {children}
        </Typography>
        {hint && (
            <Typography
                variant="caption"
                color="text.secondary"
            >
                {hint}
            </Typography>
        )}
    </Box>
);

// ── scalar inputs (caption-above) ─────────────────────────────────

/** Select rendered as a label-free TextField under a FieldLabel caption. */
export const LabeledSelect: FC<{
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: ReadonlyArray<[string, string]>;
    disabled?: boolean;
}> = ({ label, value, onChange, options, disabled }) => (
    <Box>
        <FieldLabel>{label}</FieldLabel>
        <TextField
            select
            size="small"
            value={value}
            onChange={e => onChange(e.target.value)}
            disabled={disabled}
            fullWidth
            // displayEmpty: an option with the value '' (e.g. "Auto") must still be SHOWN when
            // selected — without this, MUI renders an empty value as a blank field (isFilled('') is
            // false), which reads as "selecting Auto does nothing".
            slotProps={{ select: { displayEmpty: true } }}
        >
            {options.map(([v, l]) => (
                <MenuItem
                    key={v}
                    value={v}
                >
                    {l}
                </MenuItem>
            ))}
        </TextField>
    </Box>
);

/** Number input under a FieldLabel caption; native spinners hidden. */
export const NumberField: FC<{
    label: string;
    value: number;
    onChange: (value: number) => void;
    step?: number;
    error?: boolean;
    helperText?: string;
    disabled?: boolean;
}> = ({ label, value, onChange, step = 1, error, helperText, disabled }) => (
    <Box>
        <FieldLabel>{label}</FieldLabel>
        <TextField
            size="small"
            type="number"
            value={value}
            inputProps={{ step }}
            onChange={e => onChange(Number(e.target.value) || 0)}
            error={error}
            helperText={helperText}
            disabled={disabled}
            fullWidth
            sx={noSpinnerSx}
        />
    </Box>
);

/**
 * Number field that can be cleared: an empty input maps to `undefined` (an optional numeric
 * config value, e.g. a pie inner radius where "unset" is meaningful and distinct from 0).
 */
export const OptionalNumberField: FC<{
    label: string;
    value: number | undefined;
    onChange: (value: number | undefined) => void;
    step?: number;
    error?: boolean;
    helperText?: string;
    disabled?: boolean;
    /** Shown in the EMPTY field — e.g. the inherited Voreinstellung an unset value falls back to. */
    placeholder?: string;
}> = ({ label, value, onChange, step = 1, error, helperText, disabled, placeholder }) => (
    <Box>
        <FieldLabel>{label}</FieldLabel>
        <TextField
            size="small"
            type="number"
            value={value ?? ''}
            inputProps={{ step }}
            error={error}
            helperText={helperText}
            disabled={disabled}
            placeholder={placeholder}
            onChange={e => {
                const raw = e.target.value;
                if (raw === '') {
                    onChange(undefined);
                    return;
                }
                const n = Number(raw);
                onChange(Number.isFinite(n) ? n : undefined);
            }}
            fullWidth
            sx={noSpinnerSx}
        />
    </Box>
);

/**
 * Text input, caption-above (ADR-0019). The placeholder is always visible (no floating label
 * competes with it) — used e.g. to show an inherited value as ghost text.
 */
export const TextField2: FC<{
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    error?: boolean;
    helperText?: string;
    disabled?: boolean;
}> = ({ label, value, onChange, placeholder, error, helperText, disabled }) => (
    <Box>
        <FieldLabel>{label}</FieldLabel>
        <TextField
            size="small"
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            error={error}
            helperText={helperText}
            disabled={disabled}
            fullWidth
        />
    </Box>
);

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

/**
 * Optional bounded-numeric idiom: like {@link SliderField} but the value can be UNSET (`undefined`
 * → "auto", deferring to echarts' own default). The slider always holds a position — `fallback`
 * (the inherited/effective default) when unset, so the track shows what the chart actually renders;
 * the synced number input is empty with that fallback as its placeholder, signalling "inherited"
 * (greyed) the way the colour inherit-swatches do. Dragging the slider or typing commits a concrete
 * value; clearing the number returns to unset. For echarts properties whose default the GUI does not
 * own (e.g. bar gap / bar category gap).
 */
export const OptionalSliderField: FC<{
    label: string;
    value: number | undefined;
    min: number;
    max: number;
    step?: number;
    /** Slider position + placeholder shown when `value` is unset (the effective inherited default). */
    fallback: number;
    onChange: (value: number | undefined) => void;
}> = ({ label, value, min, max, step = 1, fallback, onChange }) => {
    const [draft, setDraft] = useState<string | null>(null);
    const clamp = (n: number): number => Math.min(Math.max(n, min), max);
    const effective = value ?? fallback; // the slider always shows a real position
    const unset = value === undefined;
    return (
        <Box>
            <FieldLabel>{label}</FieldLabel>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 0.5 }}>
                <Slider
                    size="small"
                    value={effective}
                    min={min}
                    max={max}
                    step={step}
                    onChange={(_, v) => onChange(v as number)} // a drag commits a concrete value
                    aria-label={label}
                    sx={{ flex: 1, minWidth: 0 }}
                />
                <TextField
                    size="small"
                    type="number"
                    value={draft ?? (unset ? '' : String(value))}
                    inputProps={{ min, max, step, 'aria-label': label }}
                    placeholder={unset ? String(fallback) : undefined}
                    onFocus={() => setDraft(unset ? '' : String(value))}
                    onChange={e => {
                        setDraft(e.target.value);
                        if (e.target.value === '') {
                            onChange(undefined); // cleared → back to the inherited default
                            return;
                        }
                        const n = Number(e.target.value);
                        if (Number.isFinite(n)) {
                            onChange(clamp(n));
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
 * The shared card shell: quiet border (primary while open), whole-header toggle (chevron +
 * swatch + title/subtitle), right-aligned actions. The body mounts lazily on first expand
 * (`mountOnEnter`) and stays mounted afterwards — a collapsed card costs nothing at mount time
 * (with N cards the host must not mount N invisible card bodies), yet per-body local state
 * still survives collapsing.
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
        <Collapse
            in={open}
            mountOnEnter
        >
            <Box sx={{ px: 1.5, pb: 1.5, pt: 0.5 }}>{children}</Box>
        </Collapse>
    </Box>
);

// ── callout ───────────────────────────────────────────────────────

/**
 * The quiet advisory callout (ADR-0019 idiom): a left-bordered `action.hover` box with a caption.
 * `tone="warning"` accents the border for non-blocking cautions (e.g. an echarts constraint the GUI
 * cannot enforce). One callout across every configurator section — section bodies compose it inline.
 * THE convention for every field-explaining info text in the configurators (the renderer info is
 * the reference); `children` replaces `text` for structured content (token legends, live examples).
 */
export const InfoBox: FC<{
    text?: string;
    children?: ReactNode;
    tone?: 'info' | 'warning';
}> = ({ text, children, tone = 'info' }) => (
    <Box
        sx={{
            mt: 1,
            p: 1,
            bgcolor: 'action.hover',
            borderLeft: 3,
            borderColor: tone === 'warning' ? 'warning.main' : 'primary.main',
            borderRadius: 0.5,
        }}
    >
        <Typography
            variant="caption"
            color="text.secondary"
        >
            {children ?? text}
        </Typography>
    </Box>
);

// ── tab rows (ADR-0073: the one Sektions-Tab / Karten-Tab idiom) ──────────────────

/** One tab of a {@link SectionTabs} row (ADR-0073) — key, label, and its open issues. */
export interface SectionTab {
    /** Stable tab identity (content maps by POSITION; the key names it). */
    key: string;
    /** Visible tab text (already translated by the caller). */
    label: string;
    /**
     * Open validation issues ON THIS tab — > 0 renders the ⚠ dot beside the label (the
     *  section rollup chip stays; the dot is per-tab addressing, wired in spec ticket 08).
     */
    issueCount?: number;
}

/**
 * An external tab jump (ADR-0073 focus addressing): the Problems button / preview placeholder
 * steer to a section AND the tab of its first issue. The token re-triggers repeated requests
 * for the same tab (the same monotonic-token contract the section focus request uses).
 */
export interface SectionTabsFocus {
    key: string;
    token: number;
}

/**
 * The tab row of a section body or a card body (ADR-0073 — Sektions-Tab/Karten-Tab): MUI
 * `Tabs` in the scrollable variant (the rail spans ~320–720 px; long tab sets scroll, never
 * wrap), dense sizing, NO icons. The active tab is LOCAL view state — never persisted, every
 * open starts on the first tab; tabs write NOTHING to the editor state or history (the
 * ADR-0049 slices stay read-only surfaces). `children` maps the tabs by position: the active
 * tab's child renders beneath the row. Keyboard arrows stay MUI-standard; each tab carries
 * its label as `aria-label`. `focus` is the one EXTERNAL steer (ADR-0073): a fresh token
 * selects that tab once — the row stays local, nothing persists.
 */
export const SectionTabs: FC<{ tabs: SectionTab[]; children: ReactNode; focus?: SectionTabsFocus }> = ({
    tabs,
    children,
    focus,
}) => {
    const [active, setActive] = useState(tabs[0]?.key ?? '');
    // The external jump: keyed on the PRIMITIVE token (not the object identity — callers build
    // the focus inline, so identity would re-fire on every parent render and snap the user
    // back after a manual tab switch). A fresh token selects the tab once.
    const focusKey = focus?.key;
    const focusToken = focus?.token;
    useEffect(() => {
        if (focusKey !== undefined) {
            setActive(focusKey);
        }
    }, [focusKey, focusToken]);
    const items = Array.isArray(children) ? children : [children];
    // The children↔tabs contract is POSITIONAL — a diverging count silently hides content (an
    // extra child never renders). Dev-only guard: section/card authors see the mismatch
    // immediately instead of hunting a vanished field. Falsy children (a conditional tab's
    // `false && …` hole) count as absent — the hole keeps the positions aligned.
    if (import.meta.env?.DEV && items.filter(Boolean).length !== tabs.length) {
        console.warn(
            `SectionTabs: ${items.filter(Boolean).length} children for ${tabs.length} tabs — the lists map by position and must stay in sync.`,
        );
    }
    // The active key falls back to the first tab (a caller re-shuffling tabs mid-flight keeps
    // a sane selection instead of rendering nothing).
    const index = Math.max(
        0,
        tabs.findIndex(t => t.key === active),
    );
    return (
        <Box>
            <Tabs
                value={index}
                onChange={(_, v: number) => setActive(tabs[v]?.key ?? '')}
                variant="scrollable"
                scrollButtons="auto"
                // Dense sizing for the rail: a standard 48px+ tab row would eat a fifth of a
                // 320 px rail before any field renders.
                sx={{ minHeight: 36, '& .MuiTab-root': { minHeight: 36, py: 0.5, px: 1.5, fontSize: '0.8rem' } }}
            >
                {tabs.map(t => (
                    <Tab
                        key={t.key}
                        disableRipple
                        aria-label={t.label}
                        label={
                            <Box
                                component="span"
                                sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}
                            >
                                {t.label}
                                {!!t.issueCount && (
                                    <Box
                                        component="span"
                                        data-issue-dot
                                        aria-hidden
                                        sx={{
                                            width: 6,
                                            height: 6,
                                            borderRadius: '50%',
                                            bgcolor: 'warning.main',
                                        }}
                                    />
                                )}
                            </Box>
                        }
                    />
                ))}
            </Tabs>
            <Box sx={{ mt: 1.5 }}>{items[index]}</Box>
        </Box>
    );
};
