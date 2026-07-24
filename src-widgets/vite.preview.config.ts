import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// Standalone config for the preview-image generator (scripts/gen-previews.mjs).
//
// Intentionally a SEPARATE config, modelled on vitest.config.ts: NO Module
// Federation, NO top-level-await — those plugins are build-only and crash a
// non-build (createServer / Node) context. Keeping this isolated means
// vite.config.ts stays byte-for-byte unchanged, so the production MF build is
// untouched. `?inline` (used by lib/theme/fontCatalogue for bundled woff2)
// stays active because it is a Vite default.
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
});
