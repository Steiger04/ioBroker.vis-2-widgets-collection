/**
 * Type declaration for side-effect imports of `moment` locales.
 *
 * @remarks
 * The ECharts Time format registers the widget languages with moment by importing its locale
 * files for their side effect (ADR-0052, `EchartsCollectionWidget/timeFormat`):
 * ```typescript
 * import 'moment/locale/de';
 * ```
 * moment ships no typings for these files, and since TypeScript 6 an untyped side-effect import
 * is an error (TS2882). The import has no bindings, so the modules are declared without exports
 * (the vis-2 host declares the same pattern in `src-vis/src/declarations.d.ts`).
 */
declare module 'moment/locale/*' {}
