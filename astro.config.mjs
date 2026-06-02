// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite' ;

// https://astro.build/config

export default defineConfig({
    site: 'https://Rojas-099.github.io/MANUAL-ASTRO/',
    base: '/MANUAL-ASTRO/',
    vite: {
        plugins: [tailwindcss()]
    }
});
