/**
 * Generic categorised template menu — the shared affordance behind the template multi-select at
 * all three raw levels (the chart-level catalog ADR-0040, the Series templates ADR-0017, the
 * Axis templates ADR-0037; multi-select semantics ADR-0042).
 *
 * @module EchartsCollectionWidget/editor/sections/TemplateMenu
 * @remarks
 * One menu, three catalogs: a search field (ADR-0043 — the catalogs grew from a handful of atomic
 * snippets to full Option-group scaffolds, so the entry count needs filtering) above a flat
 * template list grouped under translated category headers (in `categoryOrder`). The search
 * matches the label AND the JSON keys — typing "shadow" finds every scaffold carrying a shadow
 * key, which is the discovery affordance the design library is built on. Each entry is a CHECKBOX
 * toggling the template's persistent activation ("Aktive Vorlage", ADR-0042). The menu stays open
 * across clicks so several snippets can be picked in one pass; the callers own the catalog, the
 * category metadata and the activation state. Template labels are echarts vocabulary shown as-is
 * (only headers translate). While the level's editor text is invalid JSON the button locks
 * (ADR-0042 decision 8) — a toggle would have to discard the text, so nothing is offered instead.
 */
import { useState, type FC } from 'react';
import { Box, Button, Checkbox, ListSubheader, Menu, MenuItem, TextField } from '@mui/material';

import Generic from '../../../Generic';

/** The shape all three catalogs share (series + axis + chart-level templates). */
export interface TemplateEntry {
    /** Stable catalog id (the persisted activation references it). */
    id: string;
    /** Category grouping key (indexes `categoryI18n` / `categoryOrder`). */
    category: string;
    /** Display label (echarts vocabulary; shown as-is). */
    label: string;
    /** JSON object composed into the level's raw text while active. */
    json: string;
}

const TemplateMenu: FC<{
    templates: readonly TemplateEntry[];
    /** Category render order — categories without (matching) entries are skipped. */
    categoryOrder: readonly string[];
    /** i18n key per category header. */
    categoryI18n: Record<string, string>;
    /** Ordered ACTIVE template ids — checked entries + the button's count (ADR-0042). */
    activeIds: readonly string[];
    /** Toggle one template's activation; the menu stays open for further picks. */
    onToggle: (id: string) => void;
    /** Lock the affordance (the level's editor text is invalid JSON — ADR-0042 decision 8). */
    disabled?: boolean;
}> = ({ templates, categoryOrder, categoryI18n, activeIds, onToggle, disabled = false }) => {
    const [anchor, setAnchor] = useState<HTMLElement | null>(null);
    // Menu-local search state (ADR-0043): not persisted, reset when the menu closes.
    const [query, setQuery] = useState('');
    if (!templates.length) {
        return null;
    }
    const active = new Set(activeIds);
    const q = query.trim().toLowerCase();
    // Label OR JSON-key match — searching the payload is the point (find-by-key discovery).
    const matches = (t: TemplateEntry): boolean =>
        !q || t.label.toLowerCase().includes(q) || t.json.toLowerCase().includes(q);
    const close = (): void => {
        setAnchor(null);
        setQuery('');
    };
    return (
        <Box sx={{ mt: 1 }}>
            <Button
                size="small"
                variant="outlined"
                disabled={disabled}
                onClick={e => setAnchor(e.currentTarget)}
                sx={{ textTransform: 'none' }}
                title={disabled ? Generic.t('echarts_stpl_locked') : undefined}
            >
                {Generic.t('echarts_stpl_templates')}
                {activeIds.length > 0 ? ` (${activeIds.length})` : ''} ▾
            </Button>
            <Menu
                anchorEl={anchor}
                open={!!anchor}
                onClose={close}
                // Keep the focus in the search field instead of the first menu item.
                disableAutoFocus
                disableAutoFocusItem
                slotProps={{
                    paper: {
                        sx: {
                            maxHeight: '70vh',
                            maxWidth: 380,
                        },
                    },
                }}
            >
                {/* The menu children live inside a MenuList (a <ul>) — the search field must ride
                    as a <li> (a div inside a ul would be invalid DOM nesting), sticky above the
                    scrolling list. The paper itself scrolls (MUI default maxHeight behaviour). */}
                <Box
                    component="li"
                    sx={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        bgcolor: 'background.paper',
                        listStyle: 'none',
                        px: 1.5,
                        pt: 1,
                        pb: 0.5,
                    }}
                >
                    <TextField
                        size="small"
                        fullWidth
                        placeholder={Generic.t('echarts_stpl_search')}
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        slotProps={{ htmlInput: { 'aria-label': Generic.t('echarts_stpl_search') } }}
                    />
                </Box>
                {categoryOrder.flatMap(cat => {
                    const items = templates.filter(t => t.category === cat && matches(t));
                    if (!items.length) {
                        return [];
                    }
                    return [
                        <ListSubheader key={`cat-${cat}`}>{Generic.t(categoryI18n[cat])}</ListSubheader>,
                        ...items.map(t => (
                            <MenuItem
                                key={t.id}
                                onClick={() => onToggle(t.id)}
                                sx={{ textTransform: 'none' }}
                            >
                                <Checkbox
                                    checked={active.has(t.id)}
                                    size="small"
                                    tabIndex={-1}
                                    disableRipple
                                    sx={{ ml: -1, mr: 0.5, p: 0.5 }}
                                />
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
