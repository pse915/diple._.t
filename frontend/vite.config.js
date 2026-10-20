import { defineConfig } from 'vite';
export default defineConfig({
  base: './',
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  build: {
    outDir: 'build',
    lib: { entry: 'src/index.tsx', formats: ['es'], fileName: () => 'workshop.js' },
    rollupOptions: { output: { inlineDynamicImports: true } },
    target: 'es2022',
    sourcemap: false
  }
});
