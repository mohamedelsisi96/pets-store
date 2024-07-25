import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  base: '/pets-store/',
  plugins: [react()],
  build: {
    outDir: '../dist',
    emptyOutDir: true, // also necessary
  },
  root: 'src',
});
