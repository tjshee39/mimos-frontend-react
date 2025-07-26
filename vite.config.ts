import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    root: './',
    base: '/',
    server: {
      host: env.VITE_HOST,
      port: Number(env.VITE_PORT),
      open: false,
      historyApiFallback: true,
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@app': path.resolve(__dirname, './src/app'),
        '@core': path.resolve(__dirname, './src/app/core'),
        '@pages': path.resolve(__dirname, './src/app/pages'),
        '@shared': path.resolve(__dirname, './src/app/shared'),
        '@components': path.resolve(__dirname, './src/app/shared/components'),
        '@assets': path.resolve(__dirname, './src/assets')
      }
    }
  }
})