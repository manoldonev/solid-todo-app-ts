import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { undestructurePlugin } from 'babel-plugin-solid-undestructure';

export default defineConfig({
  plugins: [...undestructurePlugin('ts'), solidPlugin()],
  base: '/todo-app-solid-ts/',
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
