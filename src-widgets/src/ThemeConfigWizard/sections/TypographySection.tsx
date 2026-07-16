/**
 * Typography section of the structured theme form.
 *
 * @module ThemeConfigWizard/sections/TypographySection
 */

import DownloadIcon from '@mui/icons-material/Download';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Alert,
    Box,
    Button,
    Chip,
    CircularProgress,
    FormControl,
    InputLabel,
    Link,
    ListSubheader,
    MenuItem,
    Select,
    Slider,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import type React from 'react';

import Generic from '../../Generic';
import {
    BUNDLED_FONTS,
    CUSTOM_FONT_VALUE,
    FONT_CATALOGUE,
    resolveFontSelectValue,
    SYSTEM_FONTS,
} from '../../lib/theme/fontCatalogue';
import { injectGoogleFontFaces, loadGoogleFont } from '../../lib/theme/googleFonts';
import type { ThemeFormSectionProps } from '../../lib/theme/themeTypes';
import { getNestedValue } from '../../lib/theme/themeUtils';

/** Selectable CSS font weights. */
const FONT_WEIGHTS = [100, 200, 300, 400, 500, 600, 700, 800, 900];

/** Font-weight fields rendered as selects, in display order. */
const WEIGHT_FIELDS: ReadonlyArray<{ path: string; labelKey: string }> = [
    { path: 'typography.fontWeightLight', labelKey: 'theme_wizard_typography_weight_light' },
    { path: 'typography.fontWeightRegular', labelKey: 'theme_wizard_typography_weight_regular' },
    { path: 'typography.fontWeightMedium', labelKey: 'theme_wizard_typography_weight_medium' },
    { path: 'typography.fontWeightBold', labelKey: 'theme_wizard_typography_weight_bold' },
];

/** Typography section: font family, base sizes and weights. */
function TypographySection({ theme, onChange, defaultExpanded }: ThemeFormSectionProps): React.JSX.Element {
    const fontSize = getNestedValue<number>(theme, 'typography.fontSize') ?? 14;
    const fontFamily = getNestedValue<string>(theme, 'typography.fontFamily');
    const fontWeightRegular = getNestedValue<number>(theme, 'typography.fontWeightRegular');
    const lineHeight = getNestedValue<number>(theme, 'typography.allVariants.lineHeight');
    const [isCustomFont, setIsCustomFont] = useState<boolean>(resolveFontSelectValue(fontFamily) === CUSTOM_FONT_VALUE);
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

    return (
        <Accordion defaultExpanded={defaultExpanded ?? false}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{Generic.t('theme_wizard_section_typography')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Stack spacing={2}>
                    <Stack spacing={1}>
                        <FormControl
                            fullWidth
                            size="small"
                        >
                            <InputLabel id="theme-font-family-label">
                                {Generic.t('theme_wizard_typography_font_family')}
                            </InputLabel>
                            <Select
                                labelId="theme-font-family-label"
                                label={Generic.t('theme_wizard_typography_font_family')}
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
                        </FormControl>
                        {isCustomFont ? (
                            <TextField
                                fullWidth
                                size="small"
                                label={Generic.t('theme_wizard_typography_font_family_custom')}
                                value={fontFamily ?? ''}
                                onChange={event => onChange('typography.fontFamily', event.target.value || undefined)}
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
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                {Generic.t('theme_wizard_typography_google_font')}
                            </Typography>
                            <Link
                                href="https://fonts.google.com"
                                target="_blank"
                                rel="noreferrer"
                                variant="caption"
                            >
                                {Generic.t('theme_studio_google_fonts_link')}
                            </Link>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <TextField
                                fullWidth
                                size="small"
                                placeholder={Generic.t('theme_wizard_typography_google_font_hint')}
                                value={googleFontName}
                                onChange={event => setGoogleFontName(event.target.value)}
                                onKeyDown={event => {
                                    if (event.key === 'Enter') {
                                        event.preventDefault();
                                        void handleLoadGoogleFont();
                                    }
                                }}
                                disabled={googleFontLoading}
                            />
                            <Button
                                size="small"
                                variant="outlined"
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
                    <Box>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            gutterBottom
                        >
                            {Generic.t('theme_wizard_typography_font_size')}: {fontSize}
                        </Typography>
                        <Slider
                            value={fontSize}
                            min={8}
                            max={24}
                            step={0.5}
                            valueLabelDisplay="auto"
                            onChange={(_event, value) => onChange('typography.fontSize', value)}
                        />
                    </Box>
                    <Box>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            gutterBottom
                        >
                            {Generic.t('theme_wizard_typography_weight_section')}
                        </Typography>
                        <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ display: 'block', mb: 1 }}
                        >
                            {Generic.t('theme_wizard_typography_weight_hint')}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {WEIGHT_FIELDS.map(field => {
                                const weight = getNestedValue<number>(theme, field.path);
                                return (
                                    <FormControl
                                        key={field.path}
                                        size="small"
                                        sx={{ flex: '1 1 140px', minWidth: 140 }}
                                    >
                                        <InputLabel>{Generic.t(field.labelKey)}</InputLabel>
                                        <Select
                                            label={Generic.t(field.labelKey)}
                                            value={weight === undefined ? '' : String(weight)}
                                            onChange={(event: SelectChangeEvent) =>
                                                onChange(
                                                    field.path,
                                                    event.target.value === '' ? undefined : Number(event.target.value),
                                                )
                                            }
                                        >
                                            <MenuItem value="">&mdash;</MenuItem>
                                            {FONT_WEIGHTS.map(value => (
                                                <MenuItem
                                                    key={value}
                                                    value={String(value)}
                                                >
                                                    {value}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                );
                            })}
                        </Box>
                    </Box>
                    <Box>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            gutterBottom
                        >
                            {Generic.t('theme_wizard_typography_line_height')}: {lineHeight ?? '—'}
                        </Typography>
                        <Slider
                            value={lineHeight ?? 1.43}
                            min={1}
                            max={2}
                            step={0.05}
                            valueLabelDisplay="auto"
                            onChange={(_event, value) => onChange('typography.allVariants.lineHeight', value)}
                        />
                    </Box>
                    <Box>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            gutterBottom
                        >
                            {Generic.t('theme_wizard_typography_preview')}
                        </Typography>
                        <Box sx={{ p: 1.5, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                            <Typography
                                sx={{
                                    fontFamily: fontFamily || undefined,
                                    fontSize: `${fontSize}px`,
                                    fontWeight: fontWeightRegular ?? 400,
                                    lineHeight: lineHeight ?? undefined,
                                }}
                            >
                                {Generic.t('theme_wizard_typography_font_family_sample')}
                            </Typography>
                        </Box>
                    </Box>
                </Stack>
            </AccordionDetails>
        </Accordion>
    );
}

export default TypographySection;
