/**
 * Catalog anatomy (ADR-0047) — the ONE bundle shape every raw level's template menu renders,
 * plus `defineCatalog()` pinning the anatomy's invariants at the type level. A catalog file's
 * domain content (the JSON scaffolds, the category grouping) stays hand-written next to its
 * templates; only the boilerplate triple (order + i18n + bundle) comes from here.
 *
 * @module EchartsCollectionWidget/editor/catalog
 * @remarks
 * Before ADR-0047 this shape existed twice (`AxisTemplateCatalog` in axisTemplates, and the
 * inline structural prop type in RawJsonSection) and every catalog file re-declared its bundle
 * by hand. `defineCatalog` absorbs both: it is an identity function at runtime — the entire
 * value is the TYPE constraint, which pins (a) every template's `category` to the
 * category-order union and (b) the i18n map to exactly that union (a missing category header
 * translation is a compile error, an extra one too).
 */
import type { SnippetTemplate } from './snippetComposition';

/** The catalog bundle a raw-JSON section renders — structural, so every section catalog satisfies it. */
export interface RawTemplateCatalog {
    templates: readonly { id: string; category: string; label: string; json: string }[];
    categoryOrder: readonly string[];
    categoryI18n: Record<string, string>;
}

/**
 * Declare a catalog bundle. Purely type-level (identity at runtime): the category union `C` is
 * inferred from the category order, every template's category must be a `C`, and the i18n map
 * must cover exactly `C`. The returned bundle widens to the structural
 * {@link RawTemplateCatalog} — the UI never sees the per-file category unions.
 */
export const defineCatalog = <C extends string>(catalog: {
    templates: readonly (SnippetTemplate & { category: C; label: string })[];
    categoryOrder: readonly C[];
    categoryI18n: Record<C, string>;
}): RawTemplateCatalog => catalog;
