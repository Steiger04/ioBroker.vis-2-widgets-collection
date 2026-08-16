/**
 * Generic categorised template menu — the shared affordance behind the Series templates
 * (ADR-0017) and the Axis templates (ADR-0037).
 *
 * @module EchartsCollectionWidget/editor/sections/TemplateMenu
 * @remarks
 * One menu, two catalogs: hosts a flat template list grouped under translated category headers
 * (in `categoryOrder`), injecting a template's JSON on click. The callers own the catalog and the
 * category metadata; template labels are echarts vocabulary shown as-is (only headers translate).
 */
import { useState, type FC } from 'react';
import { Box, Button, ListSubheader, Menu, MenuItem } from '@mui/material';

import Generic from '../../../Generic';

/** The shape both catalogs share (series + axis templates). */
export interface TemplateEntry {
    /** Stable id for React keys. */
    id: string;
    /** Category grouping key (indexes `categoryI18n` / `categoryOrder`). */
    category: string;
    /** Display label (echarts vocabulary; shown as-is). */
    label: string;
    /** JSON object injected into the card's raw. */
    json: string;
}

const TemplateMenu: FC<{
    templates: readonly TemplateEntry[];
    /** Category render order — categories without entries are skipped. */
    categoryOrder: readonly string[];
    /** i18n key per category header. */
    categoryI18n: Record<string, string>;
    onInject: (json: string) => void;
}> = ({ templates, categoryOrder, categoryI18n, onInject }) => {
    const [anchor, setAnchor] = useState<HTMLElement | null>(null);
    if (!templates.length) {
        return null;
    }
    return (
        <Box sx={{ mt: 1 }}>
            <Button
                size="small"
                variant="outlined"
                onClick={e => setAnchor(e.currentTarget)}
                sx={{ textTransform: 'none' }}
            >
                {Generic.t('echarts_stpl_insert')} ▾
            </Button>
            <Menu
                anchorEl={anchor}
                open={!!anchor}
                onClose={() => setAnchor(null)}
                slotProps={{ paper: { sx: { maxHeight: 360 } } }}
            >
                {categoryOrder.flatMap(cat => {
                    const items = templates.filter(t => t.category === cat);
                    if (!items.length) {
                        return [];
                    }
                    return [
                        <ListSubheader key={`cat-${cat}`}>{Generic.t(categoryI18n[cat])}</ListSubheader>,
                        ...items.map(t => (
                            <MenuItem
                                key={t.id}
                                onClick={() => {
                                    onInject(t.json);
                                    setAnchor(null);
                                }}
                                sx={{ textTransform: 'none' }}
                            >
                                {t.label}
                            </MenuItem>
                        )),
                    ];
                })}
            </Menu>
        </Box>
    );
};

export default TemplateMenu;
