/**
 * Type declaration for Vite `?inline` asset imports.
 *
 * @remarks
 * Enables importing an asset as an inlined data-URI string. Used for the
 * bundled `@fontsource` woff2 fonts in `lib/theme/fontCatalogue` so the
 * `@font-face` rules are self-contained and load identically in the Vite dev
 * server and the production build — with no external font fetch:
 * ```typescript
 * import roboto400 from '@fontsource/roboto/files/roboto-latin-400-normal.woff2?inline';
 * ```
 * The default export is the data-URI string.
 */
declare module '*?inline' {
    const src: string;
    export default src;
}
