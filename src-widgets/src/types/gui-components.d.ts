/**
 * Type-only stand-in for '@iobroker/gui-components'.
 *
 * The vis-2 type package (types-vis-2 >= 2.20) imports Connection/ThemeType/
 * IobTheme/ThemeName from that package but does not depend on it. This repo
 * does not install it (its current majors bundle MUI 9), so the names are
 * mapped to the API-compatible exports of @iobroker/adapter-react-v5, which
 * is installed.
 *
 * Remove this file if @iobroker/gui-components is ever added as a dependency.
 */
/* eslint-disable @typescript-eslint/consistent-type-imports -- import() is the
   only way to reference another module from inside an ambient module block
   without turning this script file into a module (which would downgrade the
   declare block into an augmentation of a package that is not installed). */
declare module '@iobroker/gui-components' {
    export type Connection = import('@iobroker/adapter-react-v5').Connection;
    export type ThemeType = import('@iobroker/adapter-react-v5').ThemeType;
    export type ThemeName = import('@iobroker/adapter-react-v5').ThemeName;
    export type IobTheme = import('@iobroker/adapter-react-v5').IobTheme;
}
