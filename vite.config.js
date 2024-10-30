// vite.config.js
import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    // input https://www.npmjs.com/package/html-minifier-terser options
    ViteMinifyPlugin({}),
	ViteImageOptimizer({}),
  ],
})