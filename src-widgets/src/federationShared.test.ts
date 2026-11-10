import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { moduleFederationShared } from '@iobroker/types-vis-2/modulefederation.vis.config';

// vitest is launched with cwd = src-widgets (npm scripts and CI all cd here first).
// vite.config.ts hands exactly this package.json to moduleFederationShared, so the
// shared list below is what the remote negotiates with the vis-2 host.
const pack = JSON.parse(readFileSync(resolve(process.cwd(), 'package.json'), 'utf8')) as {
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
};

// ADR-0112: the widget set renders with the host's react, MUI 9 and emotion. Only
// direct entries of the widget package are shared, so MUI arriving transitively
// (as it did via adapter-react-v5) silently bundles a second MUI copy.
const HOST_SHARED = [
    '@emotion/react',
    '@mui/material',
    '@mui/private-theming',
    '@mui/system',
    'moment',
    'react',
    'react-dom',
    'react-dom/client',
    'react/jsx-dev-runtime',
    'react/jsx-runtime',
];

describe('module federation shared modules', () => {
    it('shares exactly the ten host modules of ADR-0112', () => {
        expect(Object.keys(moduleFederationShared(pack)).sort()).toEqual(HOST_SHARED);
    });

    it('takes every shared module from the host as a singleton of any version', () => {
        for (const entry of Object.values(moduleFederationShared(pack))) {
            expect(entry).toEqual({ requiredVersion: '*', singleton: true });
        }
    });
});
