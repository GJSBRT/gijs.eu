/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly SSR: Boolean
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
