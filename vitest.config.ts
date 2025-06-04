/// <reference types="vitest" />

import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    angular(),
    viteTsConfigPaths({
      root: './',
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    deps: {
      inline: [
        '@angular',
        '@analogjs',
      ]
    }
  },
  resolve: {
    alias: {
      '@core': '/src/core',
      '@ui': '/src/ui',
      '@config': '/src/config'
    }
  }
});
