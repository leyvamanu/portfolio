import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({mode}) => {

    const env = loadEnv(mode, process.cwd())

    return {
        base: "./",
        plugins: [
            react(),
            tailwindcss(),
        ], define: {
            'process.env.VITE_RECAPTCHA_SITE_KEY': JSON.stringify(env.VITE_RECAPTCHA_SITE_KEY)
        }
    }
})
