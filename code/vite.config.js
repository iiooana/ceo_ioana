import {defineConfig, loadEnv} from 'vite';
import laravel from 'laravel-vite-plugin';
import {bunny} from 'laravel-vite-plugin/fonts';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(),'VITE_'); //LOAD ONYL WITH VITE_

    return {
        server:  {
            host: '0.0.0.0', //request from all
            port: env.VITE_PORT || 5175,
            strictPort: true,
            hmr: {
                host: '172.0.0.1',
                port: env.VITE_PORT || 5175
            },
            watch: {
                ignored: ['**/storage/framework/views/**']
            }
        },
        plugins: [
            laravel({
                input: ['resources/css/app.css', 'resources/js/app.jsx'],
                refresh: true,
                fonts: [
                    bunny('Instrument Sans', {
                        weights: [400, 500, 600],
                    }),
                ],
            }),
            tailwindcss(),
            react(),
        ]
    }
});
