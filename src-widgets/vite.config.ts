import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import commonjs from 'vite-plugin-commonjs';
import vitetsConfigPaths from 'vite-tsconfig-paths';
import { federation } from '@module-federation/vite';
import { moduleFederationShared } from '@iobroker/types-vis-2/modulefederation.vis.config';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import topLevelAwait from 'vite-plugin-top-level-await';
import { buildExposes } from './src/widgetsRegistry';

const require = createRequire(import.meta.url);
const pack = JSON.parse(readFileSync('./package.json').toString());

const config = {
    // This project has no index.html, so without entries Vite would not
    // pre-bundle anything on startup. Deps would be discovered lazily on
    // first request, and every discovery run invalidates all dep hashes —
    // the "504 Outdated Optimize Dep" cascade that breaks the vis-2 host.
    optimizeDeps: {
        entries: ['src/**/*.{ts,tsx}', '!src/**/*.test.*'],
        include: [
            // Injected by the federation plugin's dev glue — never reached
            // by crawling the src entries above. Must use forward slashes:
            // runtime discovery registers this module with a POSIX-style id,
            // and a backslash id (require.resolve on Windows) creates a
            // second, duplicate optimizer identity that crashes re-runs with
            // "Cannot read properties of undefined (reading 'fileHash')".
            '@module-federation/runtime',
            '@module-federation/runtime/helpers',
            require
                .resolve('@module-federation/dts-plugin/dist/esm/dynamic-remote-type-hints-plugin.mjs')
                .replace(/\\/g, '/'),
        ],
    },
    plugins: [
        federation({
            manifest: true,
            name: 'vis2CollectionWidget',
            filename: 'customWidgets.js',
            exposes: buildExposes(),
            remotes: {},
            shared: moduleFederationShared(pack),
        }),
        topLevelAwait({
            // The export name of top-level await promise for each chunk module
            promiseExportName: '__tla',
            // The function to generate import names of top-level await promise in each chunk module
            promiseImportName: (i: number): string => `__tla_${i}`,
        }),
        react(),
        svgr({
            include: ['**/*.svg?react'], // Include SVG files for SVGR processing
        }),
        vitetsConfigPaths(),
        commonjs(),
    ],
    server: {
        port: 3000,
        proxy: {
            '/_socket': 'http://localhost:8082',
            '/vis.0': 'http://localhost:8082',
            '/adapter': 'http://localhost:8082',
            '/habpanel': 'http://localhost:8082',
            '/vis': 'http://localhost:8082',
            '/widgets': 'http://localhost:8082/vis',
            '/widgets.html': 'http://localhost:8082/vis',
            '/web': 'http://localhost:8082',
            '/state': 'http://localhost:8082',
        },
    },
    base: './',
    build: {
        target: 'chrome89',
        outDir: './build',
        rollupOptions: {
            onwarn(warning: { code: string }, warn: (warning: { code: string }) => void): void {
                // Suppress "Module level directives cause errors when bundled" warnings
                if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
                    return;
                }
                warn(warning);
            },
        },
    },
};

export default config;
