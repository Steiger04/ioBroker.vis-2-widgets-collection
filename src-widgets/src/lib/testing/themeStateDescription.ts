/**
 * The description of the theme state, for the tests that hold it to the code and to the wiki.
 *
 * @module lib/testing/themeStateDescription
 * @remarks
 * The description (`common.desc` of the instance object `theme` in `io-package.json`) is
 * what an MCP client reads of the theme state — beside the KI-Leitfaden of the Theme-Auftrag the
 * other AI channel to the same theme. Several tests check it from their side; this is the one
 * place it is read from the file.
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

/** `io-package.json` in the repo root, four levels above this folder. */
const IO_PACKAGE = resolve(__dirname, '..', '..', '..', '..', 'io-package.json');

/**
 * Reads the description of the theme state.
 *
 * @returns The text as an MCP client reads it from the state's object; empty when the object
 *   declares none.
 */
export function themeStateDescription(): string {
    const ioPackage = JSON.parse(readFileSync(IO_PACKAGE, 'utf8')) as {
        instanceObjects: { _id: string; common: { desc?: unknown } }[];
    };
    const desc = ioPackage.instanceObjects.find(object => object._id === 'theme')?.common.desc;
    return typeof desc === 'string' ? desc : '';
}
