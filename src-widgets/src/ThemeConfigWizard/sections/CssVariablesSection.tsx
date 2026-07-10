/**
 * CSS variables section of the structured theme form.
 *
 * @module ThemeConfigWizard/sections/CssVariablesSection
 * @remarks
 * `cssVariables` may be `boolean | object`. This section manages the whole
 * value as a single unit (not a nested path): `true` when enabled without a
 * prefix, `{ cssVarPrefix }` when a prefix is set, and removed (`undefined`)
 * when disabled.
 */

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    FormControlLabel,
    Stack,
    Switch,
    TextField,
    Typography,
} from '@mui/material';
import type React from 'react';

import Generic from '../../Generic';
import type { ThemeFormSectionProps } from '../../lib/theme/themeTypes';
import { getNestedValue } from '../../lib/theme/themeUtils';

/** CSS variables section: enable toggle + optional variable prefix. */
function CssVariablesSection({ theme, onChange, defaultExpanded }: ThemeFormSectionProps): React.JSX.Element {
    // `cssVariables` is `boolean | object`; read it generically because the
    // default `ThemeOptions` type only exposes it when CssThemeVariables is
    // augmented with `enabled: true`.
    const cssVariables = getNestedValue<unknown>(theme, 'cssVariables');
    const enabled = cssVariables === true || (typeof cssVariables === 'object' && cssVariables !== null);
    const prefix = getNestedValue<string>(theme, 'cssVariables.cssVarPrefix') ?? '';

    const handleToggle = (_event: React.ChangeEvent<HTMLElement>, checked: boolean): void => {
        onChange('cssVariables', checked ? true : undefined);
    };

    const handlePrefixChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const value = event.target.value;
        onChange('cssVariables', value ? { cssVarPrefix: value } : true);
    };

    return (
        <Accordion defaultExpanded={defaultExpanded ?? false}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{Generic.t('theme_wizard_section_css_variables')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Stack spacing={2}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={enabled}
                                onChange={handleToggle}
                            />
                        }
                        label={Generic.t('theme_wizard_css_variables_enable')}
                    />
                    {enabled ? (
                        <TextField
                            fullWidth
                            size="small"
                            label={Generic.t('theme_wizard_css_var_prefix')}
                            value={prefix}
                            onChange={handlePrefixChange}
                        />
                    ) : null}
                </Stack>
            </AccordionDetails>
        </Accordion>
    );
}

export default CssVariablesSection;
