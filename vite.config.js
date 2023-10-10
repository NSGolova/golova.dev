import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import path from 'path';

export default defineConfig({
  resolve: {
    preserveSymlinks: false
  },
  server: {
  fs: {
    allow: [path.resolve(__dirname, 'FractalSoundWeb'), path.resolve(__dirname, 'LatticeGasWeb')]
  },
},
  plugins: [sveltekit()],
});
