import { Suspense } from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

import Container from './elements/Container';
import RenderError from './pages/Errors/Render';

createInertiaApp({
    resolve: (name) => {
        // @ts-expect-error - Glob import
        const pages = import.meta.glob('./pages/**/*.tsx', { 
            eager: true 
        });

        return pages[`./pages/${name}.tsx`];
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