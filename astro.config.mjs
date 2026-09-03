// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
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
