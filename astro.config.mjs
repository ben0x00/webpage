// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://ben0x00.com',
    integrations: [sitemap()],
    fonts: [{
        provider: fontProviders.local(),
        name: "Workbench",
        cssVariable: "--font-workbench",
        options: {
            variants: [{
                src: ['./src/fonts/Workbench.ttf'],
                weight: 'normal',
                style: 'normal'
            }]
        }
    }]
});
