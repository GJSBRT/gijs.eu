import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';

import Container from './elements/Container';
import RenderError from './pages/Errors/Render';

createInertiaApp({
    resolve: (name) => {
        // @ts-expect-error - Glob import
        const pages = import.meta.glob('./pages/**/*.tsx', { 
            eager: true 
        });

        let filePath = `./pages/${name}.tsx`;

        if (pages[filePath] === undefined) {
            if (pages[`./pages/${name}/index.tsx`] !== undefined) {
                filePath = `./pages/${name}/index.tsx`;
            } else {
                console.error(`Page ${name} not found`);
                pages['./pages/Errors/Render.tsx'];
            }
        }

        return pages[filePath];
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <Suspense fallback={<RenderError/>}>
                <Container>
                    <App { ...props } />
                </Container>
            </Suspense>
        )
    },
})