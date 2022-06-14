import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { undestructurePlugin } from 'babel-plugin-solid-undestructure';

export default defineConfig({
  plugins: [...undestructurePlugin('ts'), solidPlugin()],
  base: '/solid-todo-app-ts/',
  publicDir: './public',
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
