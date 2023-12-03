import ReactDOMServer from 'react-dom/server';
import createServer from '@inertiajs/react/server';
import { StrictMode, Suspense, lazy } from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

import Container from './elements/Container';

const RenderError = lazy(() => import('./pages/Errors/Render.tsx'));

createServer(page => 
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        progress: false,
        resolve: (name) => {
            // @ts-expect-error - Glob import
            const pages = import.meta.glob('./pages/**/*.tsx');
            let filePath = `./pages/${name}.tsx`;
    
            if (pages[filePath] === undefined) {
                if (pages[`./pages/${name}/index.tsx`] !== undefined) {
                    filePath = `./pages/${name}/index.tsx`;
                } else {
                    console.error(`Page ${name} not found`);
                    pages['./pages/Errors/Render.tsx'];
                }
            }
    
            return resolvePageComponent(filePath, pages);
        },
        setup: (({ el, App, props }) => (
            <Container>
                <App { ...props } />
            </Container>
        )),
    })
)
