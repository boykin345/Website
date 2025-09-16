import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        react({
            jsxRuntime: 'automatic'
        })
    ],
    base: './',
    preview: {
        port: 4173,
        strictPort: true,
        host: true
    }
})