/**
 * Field definitions of a Theme-Auftrag (ADR-0115): the data of a placed
 * `tplCollectionThemeWizard`.
 *
 * @remarks
 * One value per setting the vis-2 assistant filled, as it wrote it — beside keys that are no
 * setting (the host adds `bindings`). No value has a promised type: nothing between the
 * assistant and the project checks what it writes, so every setting reads the form of its own
 * value. Which settings exist is the one list in `ThemeConfigWizard/themeOrder`; the fields
 * the assistant reads are built from it (`ThemeConfigWizard/themeOrderFields`), and so no
 * setting is named here a second time.
 */
export interface ThemeOrderFieldsRxData {
    /** A setting of the order, or a key that is none. */
    readonly [name: string]: unknown;
}
