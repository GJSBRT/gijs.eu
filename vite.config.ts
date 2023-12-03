import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            refresh: true,
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'inertia': ['@inertiajs/react'],
                    'react-markdown': ['react-markdown'],
                    'heroicons': ['@heroicons/react'],
                    'utils': ['sort-by', 'match-sorter']
                },
            }
        },
    },
})
