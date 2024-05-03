import { defineConfig } from 'vite';

export default defineConfig({
    publicDir: 'resources/static',
    base: '',
    build: {
        assetsDir: 'public/assets',
        emptyOutDir: true,
        manifest: false,
        outDir: 'public/assets',
        rollupOptions: {
            input: 'resources/js/index.js',
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]'
            },
        },
    }
});
