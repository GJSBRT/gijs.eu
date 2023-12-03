import * as React from 'react'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

import Container from './elements/Container'

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./pages/**/*.tsx', { eager: true })
        return pages[`./pages/${name}.tsx`]
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <Container>
                <App { ...props } />
            </Container>
        )
    },
})