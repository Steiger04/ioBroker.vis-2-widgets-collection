/**
 * Issue → section-tab addressing (ADR-0073) — the leaf the sections consume.
 *
 * @module EchartsCollectionWidget/editor/issueTabs
 * @remarks
 * Since ADR-0083 the family profiles' sections and the validation engine meet in the module
 * graph (the editorial record imports the sections; validateEditor reads the profile's
 * `validate`). Housing the tab addressing HERE keeps that graph acyclic: the sections import
 * this leaf instead of the validation engine. The validation engine re-exports the trio, so
 * existing import sites stay stable.
 */

/** One validation finding: an i18n key plus optional `%s` interpolation args. */
export interface ValidationIssue {
    key: string;
    args?: string[];
}

/**
 * The SECTION TAB an issue's field lives on (ADR-0073 tab addressing) — derived purely from
 * the field placement, nothing persisted. `undefined` = not tab-placeable: the Series body is
 * the tab-less card list, and issues inside a CARD (the Y-axis Werte tab) address the card's
 * host tab (Achsen) — the section-level jump lands the user beside the card.
 */
export const tabOfIssue = (issue: ValidationIssue): string | undefined => {
    switch (issue.key) {
        case 'echarts_val_yminmax':
            return 'axes'; // inside the Y-axis cards on the Achsen tab
        case 'echarts_val_vmap_range':
            return 'scale'; // the Farbskala tab (Colours)
        default:
            return undefined;
    }
};

/** Issue counts per section-tab key — the ⚠ dot feed (ADR-0073; the header rollup stays). */
export const issueCountsByTab = (issues: readonly ValidationIssue[] | undefined): Record<string, number> => {
    const out: Record<string, number> = {};
    for (const issue of issues ?? []) {
        const tab = tabOfIssue(issue);
        if (tab !== undefined) {
            out[tab] = (out[tab] ?? 0) + 1;
        }
    }
    return out;
};

/**
 * Validation findings grouped by their section, keyed generically. The validation engine's
 * `SectionIssues` narrows the keys to the SectionKey union; this generic form serves the
 * family profiles (whose `validate` returns findings for base sections and own slots alike)
 * WITHOUT pulling the SectionKey derivation into the type graph — that derivation flows the
 * other way (SectionKey derives FROM the profiles, ADR-0083), so a SectionKey-typed return
 * here would be a circular type reference.
 */
export type IssueMap = Partial<Record<string, ValidationIssue[]>>;
