import { defineConfig } from 'vite';
import typegpuPlugin from 'unplugin-typegpu/vite';
import tailwindVite from '@tailwindcss/vite';

export default defineConfig({
  base: '/project-1392/',
  build: {
    target: 'esnext',
  },
  plugins: [
    tailwindVite(),
    typegpuPlugin(),
  ],
});
