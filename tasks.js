/*!
 * ioBroker tasks
 * Date: 2025-05-19
 */
'use strict';

const { existsSync } = require('node:fs');
const adapterName = require('./package.json').name.replace('iobroker.', '');
const { deleteFoldersRecursive, npmInstall, buildReact, copyFiles } = require('@iobroker/build-tools');

const SRC = 'src-widgets/';
const src = `${__dirname}/${SRC}`;
// build-tools installs with --force unless told otherwise; the widget package resolves without it.
// CI installs exactly from the lockfile (clean → npm ci); locally npm ci would delete
// src-widgets/node_modules under the running Vite dev server
const npmOptions = { force: false, clean: !!process.env.CI };

function clean() {
    deleteFoldersRecursive(`${src}build`);
    deleteFoldersRecursive(`${__dirname}/widgets`);
}

function copyAllFiles() {
    // copyFiles silently copies nothing for a missing source; without the bundle
    // entry the package would ship without widgets
    for (const file of ['customWidgets.js', 'mf-manifest.json']) {
        if (!existsSync(`${src}build/${file}`)) {
            throw new Error(`Build output "${SRC}build/${file}" is missing`);
        }
    }
    copyFiles([`${SRC}build/customWidgets.js`], `widgets/${adapterName}`);
    // vis-2 reads mf-manifest.json next to the remote entry to validate that a
    // widget set shares react and react/jsx-runtime before loading it
    copyFiles([`${SRC}build/mf-manifest.json`], `widgets/${adapterName}`);
    copyFiles([`${SRC}build/assets/*.*`], `widgets/${adapterName}/assets`);
    copyFiles([`${SRC}build/img/*`], `widgets/${adapterName}/img`);
}

// report the error and end with a non-zero exit code, so callers (release script, CI,
// dev-server watch) see the failure; exitCode instead of exit() lets the output flush
function fail(message) {
    console.error(message);
    process.exitCode = 1;
}

if (process.argv.includes('--0-clean')) {
    clean();
} else if (process.argv.includes('--1-npm')) {
    npmInstall(src, npmOptions).catch(e => fail(`Cannot install npm modules: ${e}`));
} else if (process.argv.includes('--2-build')) {
    buildReact(src, { rootDir: __dirname, vite: true }).catch(e => fail(`Cannot build: ${e}`));
} else if (process.argv.includes('--3-copy')) {
    try {
        copyAllFiles();
    } catch (e) {
        fail(`Cannot copy files: ${e}`);
    }
} else {
    clean();
    npmInstall(src, npmOptions)
        .then(() => buildReact(src, { rootDir: __dirname, vite: true }))
        .then(() => copyAllFiles())
        .catch(e => fail(`Cannot build: ${e}`));
}
