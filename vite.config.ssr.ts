import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: ['resources/css/app.css', 'resources/js/ssr.tsx'],
            refresh: true,
        }),
    ],
})
