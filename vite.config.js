import { defineConfig } from 'vite'

export default defineConfig({
    base: '/testimonial-card/',
    build: {
        outDir: 'docs',
        emptyOutDir: true
    }
})