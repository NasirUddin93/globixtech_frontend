import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import vercel from '@astrojs/vercel';  <-- এই লাইনটি আর লাগবে না

// https://astro.build/config
export default defineConfig({
  site: 'https://globixtech.com',
  output: 'static',
  // adapter: vercel(), <-- এই লাইনটি ডিলিট বা কমেন্ট করে দিন
  integrations: [tailwind()],
});