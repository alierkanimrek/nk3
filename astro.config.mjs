import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://alierkanimrek.github.io',
    base: '/nk3',
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [mdx(), sitemap(), partytown({
            config: {
              forward: ["dataLayer.push"],
            },
        })],
    fonts: [{
    provider: fontProviders.fontsource(),
    name: "Manrope",
    cssVariable: "--font-manrope",
  }],
    experimental: {    fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Ephesis",
      cssVariable: "--font-ephesis",
    }
  ]
},
});
