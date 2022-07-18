import { defineConfig } from 'vitest/config';
import solidPlugin from 'vite-plugin-solid';
import { undestructurePlugin } from 'babel-plugin-solid-undestructure';

export default defineConfig({
  plugins: [...undestructurePlugin('ts'), solidPlugin()],
  base: '/solid-todo-app-ts/',
  publicDir: './public',
  test: {
    environment: 'jsdom',
    globals: true,
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
    setupFiles: './src/vitest.setup.ts',
    // solid-js needs to be inline to work around
    // a resolution issue in vitest (same for scroll-lock):
    deps: {
      inline: [/solid-js/, /scroll-lock/],
    },
    // if you have few tests, try commenting one
    // or both out to improve performance:
    // threads: false,
    // isolate: false,
    include: ['src/**/*.test.{tsx,ts}'],
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
});
