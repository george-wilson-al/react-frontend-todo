import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
    build: {
        sourcemap: true
    },
    plugins: [react(), svgrPlugin()],
    server: {
        host: '0.0.0.0',
    }
});
