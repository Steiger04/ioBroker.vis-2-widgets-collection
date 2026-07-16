/**
 * Type declaration for side-effect CSS imports.
 *
 * @remarks
 * Enables side-effect imports of stylesheets such as the bundled `@fontsource`
 * `@font-face` rules pulled in from `lib/theme/fontCatalogue`:
 * ```typescript
 * import '@fontsource/roboto/latin-400.css';
 * ```
 * The import has no bindings — Vite bundles the stylesheet and injects it at
 * runtime via its preload helper. CSS Modules are not used in this project, so
 * `*.module.css` is intentionally not declared.
 */
declare module '*.css' {}
