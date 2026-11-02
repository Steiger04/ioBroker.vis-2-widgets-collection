/**
 * Typography & Shape section of the studio panel (ADR-0020).
 *
 * @module ThemeConfigWizard/sections/TypographySection
 * @remarks
 * Font family (bundled / system / Google / custom), base size and the corner radius.
 * Decluttered per ADR-0020: the corner radius is ONE linked slider with an unlink toggle (the
 * linked state was always the default — the UI now sells it); unlinked, the four radii are
 * number fields laid out where their corners are (2x2 grid),
 * and the rare knobs (font weights, line height) live behind the "Feintuning" disclosure
 * with a hint that bundled fonts ship real 400/700 faces only (other weights synthesise).
 * Everything sits on the shared control kit (`FieldLabel`, `SliderField`, `FieldGrid`).
 *
 * Shown state follows the theme (so it follows undo, reset and presets): the custom-font field
 * and the corner link are derived from the draft — unequal radii are never shown as linked;
 * only an explicit "Custom…" pick or unlink click adds UI state on top. Changes spanning
 * several paths (Google Font faces + the family using them) go through `onApply` as ONE undo
 * step.
 */

import DownloadIcon from '@mui/icons-material/Download';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinkIcon from '@mui/icons-material/Link';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import {
    Alert,
    Box,
    Button,
    Chip,
    CircularProgress,
    IconButton,
    Link,
    ListSubheader,
    MenuItem,
    Select,
    Stack,
    TextField,
    Tooltip,
    Typography,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import type React from 'react';

import Generic from '../../Generic';
import SectionCard from '../../components/SectionCard';
import HelpHint from '../../components/HelpHint';
import {
    FieldGrid,
    FieldLabel,
    InfoBox,
    LabeledSelect,
    noSpinnerSx,
    SliderField,
    TextField2,
} from '../../components/controls';
import {
    BUNDLED_FONTS,
    CUSTOM_FONT_VALUE,
    FONT_CATALOGUE,
    resolveFontSelectValue,
    SYSTEM_FONTS,
} from '../../lib/theme/fontCatalogue';
import { injectGoogleFontFaces, loadGoogleFont } from '../../lib/theme/googleFonts';
import type { StudioSectionProps, UserTheme } from '../../lib/theme/themeTypes';
import { CORNER_RADIUS_MAX, getNestedValue, setNestedValue } from '../../lib/theme/themeUtils';

/** Selectable CSS font weights. */
const FONT_WEIGHTS = [100, 200, 300, 400, 500, 600, 700, 800, 900];

/** Font-weight fields rendered as selects, in display order. */
const WEIGHT_FIELDS: ReadonlyArray<{ path: string; labelKey: string }> = [
    { path: 'typography.fontWeightLight', labelKey: 'theme_wizard_typography_weight_light' },
    { path: 'typography.fontWeightRegular', labelKey: 'theme_wizard_typography_weight_regular' },
    { path: 'typography.fontWeightMedium', labelKey: 'theme_wizard_typography_weight_medium' },
    { path: 'typography.fontWeightBold', labelKey: 'theme_wizard_typography_weight_bold' },
];

/**
 * Corner-radius fields (border radius per corner) in reading order of a 2x2 grid, so each
 * field sits where its corner is: top left | top right / bottom left | bottom right.
 */
const CORNER_FIELDS: ReadonlyArray<{ corner: string; path: string; labelKey: string }> = [
    { corner: 'topLeft', path: 'corners.topLeft', labelKey: 'theme_studio_corner_top_left' },
    { corner: 'topRight', path: 'corners.topRight', labelKey: 'theme_studio_corner_top_right' },
    { corner: 'bottomLeft', path: 'corners.bottomLeft', labelKey: 'theme_studio_corner_bottom_left' },
    { corner: 'bottomRight', path: 'corners.bottomRight', labelKey: 'theme_studio_corner_bottom_right' },
];

/** Default radius (px) of a corner without a stored value. */
const DEFAULT_CORNER_RADIUS = 4;

/** Props of the typography section: the studio section props plus whole-draft transitions. */
export interface TypographySectionProps extends StudioSectionProps {
    /**
     * Applies a whole-draft transformation as ONE undo step — for changes that touch several
     * paths at once (a Google Font's faces + the family that uses it).
     */
    onApply: (next: (prev: UserTheme) => UserTheme) => void;
}

/** The Google Font family stack written to `typography.fontFamily` for `name`. */
const googleFontFamily = (name: string): string => `'${name}', sans-serif`;

/**
 * Whether the font stack `fontFamily` uses the font `name` as its first (primary) family —
 * quotes and case are irrelevant, as in CSS.
 */
function usesFontFirst(fontFamily: string | undefined, name: string): boolean {
    const first = fontFamily
        ?.split(',')[0]
        .trim()
        .replace(/^(['"])(.*)\1$/, '$2');
    return first !== undefined && first.toLowerCase() === name.trim().toLowerCase();
}

/** Whether all four corners share one radius (missing corners count as the default). */
function cornersAreEven(theme: UserTheme): boolean {
    const radii = CORNER_FIELDS.map(field => getNestedValue<number>(theme, field.path) ?? DEFAULT_CORNER_RADIUS);
    return radii.every(radius => radius === radii[0]);
}

/** One corner's radius as a number field, kept within 0 … {@link CORNER_RADIUS_MAX}. */
function CornerField({
    corner,
    label,
    value,
    onChange,
}: {
    corner: string;
    label: string;
    value: number;
    onChange: (value: number) => void;
}): React.JSX.Element {
    return (
        <Box data-corner={corner}>
            <FieldLabel>{label}</FieldLabel>
            <TextField
                size="small"
                type="number"
                value={value}
                inputProps={{ min: 0, max: CORNER_RADIUS_MAX, step: 0.5 }}
                onChange={event => {
                    // An empty or half-typed number ("7.") reads as '' — keep the value meanwhile,
                    // so the next keystroke can complete it.
                    const raw = event.target.value;
                    const next = Number(raw);
                    if (raw !== '' && Number.isFinite(next)) {
                        onChange(Math.min(CORNER_RADIUS_MAX, Math.max(0, next)));
                    }
                }}
                fullWidth
                sx={noSpinnerSx}
            />
        </Box>
    );
}

/** Typography & Shape section: font family, base size, corner radius, feintuning. */
function TypographySection({
    theme,
    onChange,
    onApply,
    expanded,
    onExpandedChange,
}: TypographySectionProps): React.JSX.Element {
    const fontSize = getNestedValue<number>(theme, 'typography.fontSize') ?? 14;
    const fontFamily = getNestedValue<string>(theme, 'typography.fontFamily');
    const lineHeight = getNestedValue<number>(theme, 'typography.allVariants.lineHeight');
    // Picking "Custom…" keeps the current family to edit, so the theme alone cannot tell. The
    // pick is remembered together with the family it was made on; once the family changes
    // elsewhere (undo, reset, another font) the theme decides again.
    const [customPick, setCustomPick] = useState<{ fontFamily: string | undefined } | null>(null);
    const isCustomFont =
        resolveFontSelectValue(fontFamily) === CUSTOM_FONT_VALUE ||
        (customPick !== null && customPick.fontFamily === fontFamily);
    // Feintuning disclosure: weights + line height (rare, expert knobs — ADR-0020).
    const [feintuningOpen, setFeintuningOpen] = useState<boolean>(false);
    // Corner-radius link: an explicit unlink is UI state, but unequal radii are never linked.
    const [unlinkedByUser, setUnlinkedByUser] = useState<boolean>(false);
    const linked = cornersAreEven(theme) && !unlinkedByUser;
    const fontSelectValue = isCustomFont ? CUSTOM_FONT_VALUE : resolveFontSelectValue(fontFamily);

    // Google Fonts loaded by name (stored as inlined woff2 in theme.googleFonts).
    const googleFonts = theme.googleFonts;
    const loadedGoogleFonts = googleFonts ? Object.keys(googleFonts) : [];
    const [googleFontName, setGoogleFontName] = useState<string>('');
    const [googleFontLoading, setGoogleFontLoading] = useState<boolean>(false);
    const [googleFontError, setGoogleFontError] = useState<string | null>(null);

    // Inject @font-face rules for loaded Google Fonts so the sample preview
    // (and the runtime, via useCollectionTheme) can render them. Idempotent.
    useEffect(() => {
        injectGoogleFontFaces(googleFonts);
    }, [googleFonts]);

    const handleLoadGoogleFont = async (): Promise<void> => {
        const name = googleFontName.trim();
        if (!name || googleFontLoading) {
            return;
        }
        setGoogleFontLoading(true);
        setGoogleFontError(null);
        try {
            const faces = await loadGoogleFont(name);
            // Faces + family in one transition: one undo step restores the state before.
            onApply(prev =>
                setNestedValue(
                    setNestedValue(prev, `googleFonts.${name}`, faces),
                    'typography.fontFamily',
                    googleFontFamily(name),
                ),
            );
            setGoogleFontName('');
        } catch (error: unknown) {
            setGoogleFontError(error instanceof Error ? error.message : String(error));
        } finally {
            setGoogleFontLoading(false);
        }
    };

    // Deleting a font also resets a family that uses it — in the same transition.
    const handleDeleteGoogleFont = (name: string): void => {
        onApply(prev => {
            const next = setNestedValue(prev, `googleFonts.${name}`, undefined);
            return usesFontFirst(getNestedValue<string>(prev, 'typography.fontFamily'), name)
                ? setNestedValue(next, 'typography.fontFamily', undefined)
                : next;
        });
    };

    const handleFontFamilyChange = (event: SelectChangeEvent): void => {
        const selected = event.target.value;
        if (selected === CUSTOM_FONT_VALUE) {
            // Reveal the custom free-text field; keep any existing value to edit.
            setCustomPick({ fontFamily });
        } else {
            setCustomPick(null);
            onChange('typography.fontFamily', selected === '' ? undefined : selected);
        }
    };

    const handleCustomFontChange = (value: string): void => {
        // Typing keeps the field open, even while the text is empty or matches a catalogue entry.
        setCustomPick({ fontFamily: value || undefined });
        onChange('typography.fontFamily', value || undefined);
    };

    // Linked: one value drives all four corners. Unlinked: each corner individually.
    const linkedRadius = getNestedValue<number>(theme, 'corners.topLeft') ?? DEFAULT_CORNER_RADIUS;
    const handleLinkedRadiusChange = (value: number): void => {
        onChange('corners', { topLeft: value, topRight: value, bottomRight: value, bottomLeft: value });
    };
    const handleLinkToggle = (): void => {
        if (linked) {
            setUnlinkedByUser(true);
            return;
        }
        setUnlinkedByUser(false);
        // Linking evens the corners to the top-left radius (the value the slider then shows).
        if (!cornersAreEven(theme)) {
            handleLinkedRadiusChange(linkedRadius);
        }
    };
    const handleCornerChange = (path: string, value: number): void => {
        onChange(path, value);
    };

    // Renders the closed Select's value in the selected font (live preview).
    const renderFontValue = (value: string): React.ReactNode => {
        if (!value) {
            return Generic.t('theme_wizard_typography_font_family_default');
        }
        if (value === CUSTOM_FONT_VALUE) {
            return Generic.t('theme_wizard_typography_font_family_custom');
        }
        const entry = FONT_CATALOGUE.find(font => font.value === value);
        return <span style={{ fontFamily: value }}>{entry?.label ?? value}</span>;
    };

    // Summary: font + base size + radius (the section's three hero values).
    const fontLabel = !fontSelectValue
        ? Generic.t('theme_wizard_typography_font_family_default')
        : fontSelectValue === CUSTOM_FONT_VALUE
          ? Generic.t('theme_wizard_typography_font_family_custom')
          : (FONT_CATALOGUE.find(font => font.value === fontSelectValue)?.label ?? fontSelectValue);
    const summary = `${fontLabel} · ${fontSize}px · r=${linkedRadius}`;

    return (
        <SectionCard
            title={Generic.t('theme_studio_section_schrift_form')}
            summary={summary}
            expanded={expanded}
            onExpandedChange={onExpandedChange}
        >
            <Stack spacing={2}>
                <Stack spacing={1}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.5 }}>
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                            <FieldLabel>{Generic.t('theme_wizard_typography_font_family')}</FieldLabel>
                            <Select
                                size="small"
                                fullWidth
                                value={fontSelectValue}
                                onChange={handleFontFamilyChange}
                                // The default entry has value '' — without displayEmpty MUI skips
                                // renderValue and the closed select renders empty.
                                displayEmpty
                                renderValue={renderFontValue}
                            >
                                <MenuItem value="">{Generic.t('theme_wizard_typography_font_family_default')}</MenuItem>
                                <ListSubheader>
                                    {Generic.t('theme_wizard_typography_font_family_group_bundled')}
                                </ListSubheader>
                                {BUNDLED_FONTS.map(font => (
                                    <MenuItem
                                        key={font.value}
                                        value={font.value}
                                        sx={{ fontFamily: font.value }}
                                    >
                                        {font.label}
                                    </MenuItem>
                                ))}
                                <ListSubheader>
                                    {Generic.t('theme_wizard_typography_font_family_group_system')}
                                </ListSubheader>
                                {SYSTEM_FONTS.map(font => (
                                    <MenuItem
                                        key={font.value}
                                        value={font.value}
                                        sx={{ fontFamily: font.value }}
                                    >
                                        {font.label}
                                    </MenuItem>
                                ))}
                                <MenuItem value={CUSTOM_FONT_VALUE}>
                                    {Generic.t('theme_wizard_typography_font_family_custom')}
                                </MenuItem>
                            </Select>
                        </Box>
                        <Box sx={{ pt: '18px' }}>
                            <HelpHint title={Generic.t('theme_studio_help_fonts')} />
                        </Box>
                    </Box>
                    {isCustomFont ? (
                        <TextField2
                            label={Generic.t('theme_wizard_typography_font_family_custom')}
                            value={fontFamily ?? ''}
                            onChange={handleCustomFontChange}
                        />
                    ) : null}
                    {fontFamily ? (
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontFamily }}
                        >
                            {Generic.t('theme_wizard_typography_font_family_sample')}
                        </Typography>
                    ) : null}
                </Stack>
                <Stack
                    spacing={1}
                    data-google-font-group=""
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <FieldLabel>{Generic.t('theme_wizard_typography_google_font')}</FieldLabel>
                        <Link
                            href="https://fonts.google.com"
                            target="_blank"
                            rel="noreferrer"
                            variant="caption"
                        >
                            {Generic.t('theme_studio_google_fonts_link')}
                        </Link>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                            <TextField2
                                label={Generic.t('theme_wizard_typography_google_font_hint')}
                                placeholder={Generic.t('theme_studio_google_font_placeholder')}
                                value={googleFontName}
                                onChange={setGoogleFontName}
                                disabled={googleFontLoading}
                            />
                        </Box>
                        <Button
                            size="small"
                            variant="outlined"
                            sx={{ mt: '22px', flexShrink: 0 }}
                            startIcon={googleFontLoading ? <CircularProgress size={16} /> : <DownloadIcon />}
                            onClick={() => void handleLoadGoogleFont()}
                            disabled={googleFontLoading || !googleFontName.trim()}
                        >
                            {Generic.t('theme_wizard_typography_google_font_load')}
                        </Button>
                        <Box sx={{ pt: '18px' }}>
                            <HelpHint title={Generic.t('theme_studio_help_google_font')} />
                        </Box>
                    </Box>
                    {googleFontError ? (
                        <Alert
                            severity="error"
                            onClose={() => setGoogleFontError(null)}
                        >
                            {googleFontError}
                        </Alert>
                    ) : null}
                    {loadedGoogleFonts.length > 0 ? (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {loadedGoogleFonts.map(name => (
                                <Chip
                                    key={name}
                                    label={name}
                                    size="small"
                                    onClick={() => onChange('typography.fontFamily', googleFontFamily(name))}
                                    onDelete={() => handleDeleteGoogleFont(name)}
                                />
                            ))}
                        </Box>
                    ) : null}
                </Stack>
                <SliderField
                    label={Generic.t('theme_wizard_typography_font_size')}
                    value={fontSize}
                    min={8}
                    max={24}
                    step={0.5}
                    onChange={value => onChange('typography.fontSize', value)}
                />
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.5 }}>
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                            {linked ? (
                                <SliderField
                                    label={Generic.t('theme_wizard_layout_border_radius')}
                                    value={linkedRadius}
                                    min={0}
                                    max={CORNER_RADIUS_MAX}
                                    step={0.5}
                                    onChange={handleLinkedRadiusChange}
                                />
                            ) : (
                                <>
                                    <FieldLabel>{Generic.t('theme_wizard_layout_border_radius')}</FieldLabel>
                                    <Box
                                        data-corner-grid
                                        sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}
                                    >
                                        {CORNER_FIELDS.map(field => (
                                            <CornerField
                                                key={field.path}
                                                corner={field.corner}
                                                label={Generic.t(field.labelKey)}
                                                value={
                                                    getNestedValue<number>(theme, field.path) ?? DEFAULT_CORNER_RADIUS
                                                }
                                                onChange={value => handleCornerChange(field.path, value)}
                                            />
                                        ))}
                                    </Box>
                                </>
                            )}
                        </Box>
                        {/* The tooltip names what a click does; aria-pressed carries the state. */}
                        <Tooltip
                            title={Generic.t(linked ? 'theme_studio_corners_unlink' : 'theme_studio_corners_link')}
                        >
                            <IconButton
                                size="small"
                                onClick={handleLinkToggle}
                                aria-pressed={linked}
                                color={linked ? 'primary' : 'default'}
                                sx={{ mt: '18px' }}
                            >
                                {linked ? <LinkIcon fontSize="small" /> : <LinkOffIcon fontSize="small" />}
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
                <Box>
                    <Box
                        component="button"
                        type="button"
                        onClick={() => setFeintuningOpen(open => !open)}
                        aria-expanded={feintuningOpen}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            border: 0,
                            p: 0,
                            bgcolor: 'transparent',
                            color: 'text.secondary',
                            cursor: 'pointer',
                        }}
                    >
                        <ExpandMoreIcon
                            sx={{
                                fontSize: 16,
                                transform: feintuningOpen ? 'rotate(180deg)' : 'none',
                                transition: 'transform 150ms',
                            }}
                        />
                        <Typography variant="caption">{Generic.t('theme_studio_feintuning')}</Typography>
                    </Box>
                    {feintuningOpen ? (
                        <Stack
                            spacing={2}
                            sx={{ mt: 1.5 }}
                        >
                            <Box
                                data-weights-group
                                sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.5 }}
                            >
                                <FieldGrid
                                    min={110}
                                    sx={{ flex: 1, minWidth: 0 }}
                                >
                                    {WEIGHT_FIELDS.map(field => {
                                        const weight = getNestedValue<number>(theme, field.path);
                                        return (
                                            <LabeledSelect
                                                key={field.path}
                                                label={Generic.t(field.labelKey)}
                                                value={weight === undefined ? '' : String(weight)}
                                                onChange={value =>
                                                    onChange(field.path, value === '' ? undefined : Number(value))
                                                }
                                                options={[
                                                    ['', '—'],
                                                    ...FONT_WEIGHTS.map(
                                                        w => [String(w), String(w)] as [string, string],
                                                    ),
                                                ]}
                                            />
                                        );
                                    })}
                                </FieldGrid>
                                <Box sx={{ pt: '18px' }}>
                                    <HelpHint title={Generic.t('theme_studio_help_weights')} />
                                </Box>
                            </Box>
                            <SliderField
                                label={Generic.t('theme_wizard_typography_line_height')}
                                value={lineHeight ?? 1.43}
                                min={1}
                                max={2}
                                step={0.05}
                                onChange={value => onChange('typography.allVariants.lineHeight', value)}
                            />
                            <InfoBox text={Generic.t('theme_studio_feintuning_hint')} />
                        </Stack>
                    ) : null}
                </Box>
            </Stack>
        </SectionCard>
    );
}

export default TypographySection;
