/**
 * Typography & Shape section of the studio panel (ADR-0020).
 *
 * @module ThemeConfigWizard/sections/TypographySection
 * @remarks
 * Font family (bundled / system / Google / custom), base size and the corner radius.
 * Decluttered per ADR-0020: the four per-corner sliders collapse into ONE linked slider
 * with an unlink expander (the linked state was always the default — the UI now sells it),
 * and the rare knobs (font weights, line height) live behind the "Feintuning" disclosure
 * with a hint that bundled fonts ship real 400/700 faces only (other weights synthesise).
 * Everything sits on the shared control kit (`FieldLabel`, `SliderField`, `FieldGrid`).
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
    Typography,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import type React from 'react';

import Generic from '../../Generic';
import HelpHint from '../../components/HelpHint';
import { FieldGrid, FieldLabel, LabeledSelect, SliderField, TextField2 } from '../../components/controls';
import {
    BUNDLED_FONTS,
    CUSTOM_FONT_VALUE,
    FONT_CATALOGUE,
    resolveFontSelectValue,
    SYSTEM_FONTS,
} from '../../lib/theme/fontCatalogue';
import { injectGoogleFontFaces, loadGoogleFont } from '../../lib/theme/googleFonts';
import type { StudioSectionProps } from '../../lib/theme/themeTypes';
import { getNestedValue } from '../../lib/theme/themeUtils';
import StudioSection from './StudioSection';

/** Selectable CSS font weights. */
const FONT_WEIGHTS = [100, 200, 300, 400, 500, 600, 700, 800, 900];

/** Font-weight fields rendered as selects, in display order. */
const WEIGHT_FIELDS: ReadonlyArray<{ path: string; labelKey: string }> = [
    { path: 'typography.fontWeightLight', labelKey: 'theme_wizard_typography_weight_light' },
    { path: 'typography.fontWeightRegular', labelKey: 'theme_wizard_typography_weight_regular' },
    { path: 'typography.fontWeightMedium', labelKey: 'theme_wizard_typography_weight_medium' },
    { path: 'typography.fontWeightBold', labelKey: 'theme_wizard_typography_weight_bold' },
];

/** Corner-radius fields (border radius per corner), in display order. */
const CORNER_FIELDS: ReadonlyArray<{ path: string; labelKey: string }> = [
    { path: 'corners.topLeft', labelKey: 'theme_studio_corner_top_left' },
    { path: 'corners.topRight', labelKey: 'theme_studio_corner_top_right' },
    { path: 'corners.bottomRight', labelKey: 'theme_studio_corner_bottom_right' },
    { path: 'corners.bottomLeft', labelKey: 'theme_studio_corner_bottom_left' },
];

/** Typography & Shape section: font family, base size, corner radius, feintuning. */
function TypographySection({ theme, onChange, expanded, onExpandedChange }: StudioSectionProps): React.JSX.Element {
    const fontSize = getNestedValue<number>(theme, 'typography.fontSize') ?? 14;
    const fontFamily = getNestedValue<string>(theme, 'typography.fontFamily');
    const lineHeight = getNestedValue<number>(theme, 'typography.allVariants.lineHeight');
    const [isCustomFont, setIsCustomFont] = useState<boolean>(resolveFontSelectValue(fontFamily) === CUSTOM_FONT_VALUE);
    // Feintuning disclosure: weights + line height (rare, expert knobs — ADR-0020).
    const [feintuningOpen, setFeintuningOpen] = useState<boolean>(false);
    // Corner-radius "link" toggle: default on when the four radii are uniform.
    const [linked, setLinked] = useState<boolean>(() => {
        const cornerVals = [
            getNestedValue<number>(theme, 'corners.topLeft') ?? 4,
            getNestedValue<number>(theme, 'corners.topRight') ?? 4,
            getNestedValue<number>(theme, 'corners.bottomRight') ?? 4,
            getNestedValue<number>(theme, 'corners.bottomLeft') ?? 4,
        ];
        return cornerVals.every(v => v === cornerVals[0]);
    });
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
            onChange(`googleFonts.${name}`, faces);
            onChange('typography.fontFamily', `'${name}', sans-serif`);
            setGoogleFontName('');
        } catch (error: unknown) {
            setGoogleFontError(error instanceof Error ? error.message : String(error));
        } finally {
            setGoogleFontLoading(false);
        }
    };

    const handleFontFamilyChange = (event: SelectChangeEvent): void => {
        const selected = event.target.value;
        if (selected === CUSTOM_FONT_VALUE) {
            // Reveal the custom free-text field; keep any existing value to edit.
            setIsCustomFont(true);
        } else if (selected === '') {
            setIsCustomFont(false);
            onChange('typography.fontFamily', undefined);
        } else {
            setIsCustomFont(false);
            onChange('typography.fontFamily', selected);
        }
    };

    // Linked: one value drives all four corners. Unlinked: each corner individually.
    const linkedRadius = getNestedValue<number>(theme, 'corners.topLeft') ?? 4;
    const handleLinkedRadiusChange = (value: number): void => {
        onChange('corners', { topLeft: value, topRight: value, bottomRight: value, bottomLeft: value });
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
        <StudioSection
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
                            onChange={value => onChange('typography.fontFamily', value || undefined)}
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
                <Stack spacing={1}>
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
                                    onClick={() => onChange('typography.fontFamily', `'${name}', sans-serif`)}
                                    onDelete={() => onChange(`googleFonts.${name}`, undefined)}
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
                                    max={32}
                                    step={0.5}
                                    onChange={handleLinkedRadiusChange}
                                />
                            ) : (
                                <>
                                    <FieldLabel>{Generic.t('theme_wizard_layout_border_radius')}</FieldLabel>
                                    <FieldGrid min={110}>
                                        {CORNER_FIELDS.map(field => (
                                            <SliderField
                                                key={field.path}
                                                label={Generic.t(field.labelKey)}
                                                value={getNestedValue<number>(theme, field.path) ?? 4}
                                                min={0}
                                                max={32}
                                                step={0.5}
                                                onChange={value => handleCornerChange(field.path, value)}
                                            />
                                        ))}
                                    </FieldGrid>
                                </>
                            )}
                        </Box>
                        <IconButton
                            size="small"
                            onClick={() => setLinked(l => !l)}
                            title={Generic.t('theme_studio_corners_link')}
                            color={linked ? 'primary' : 'default'}
                            sx={{ mt: '18px' }}
                        >
                            {linked ? <LinkIcon fontSize="small" /> : <LinkOffIcon fontSize="small" />}
                        </IconButton>
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
                            <FieldGrid min={110}>
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
                                                ...FONT_WEIGHTS.map(w => [String(w), String(w)] as [string, string]),
                                            ]}
                                        />
                                    );
                                })}
                            </FieldGrid>
                            <SliderField
                                label={Generic.t('theme_wizard_typography_line_height')}
                                value={lineHeight ?? 1.43}
                                min={1}
                                max={2}
                                step={0.05}
                                onChange={value => onChange('typography.allVariants.lineHeight', value)}
                            />
                            <Typography
                                variant="caption"
                                color="text.secondary"
                            >
                                {Generic.t('theme_studio_feintuning_hint')}
                            </Typography>
                        </Stack>
                    ) : null}
                </Box>
            </Stack>
        </StudioSection>
    );
}

export default TypographySection;
