import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// Vitest uses this file in preference to vite.config.ts, so the Module Federation
// and top-level-await plugins (build-time only, they crash the node test env)
// never load. Only the plugins tests actually need are wired here.
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    test: {
        environment: 'happy-dom',
        globals: true,
        include: ['src/**/*.test.{ts,tsx}'],
    },
});
