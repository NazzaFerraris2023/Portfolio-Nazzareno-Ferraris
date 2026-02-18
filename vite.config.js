import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
server: {
    port: 3001,
    host: true,
    // Reduce el polling para evitar sobrecarga
    watch: {
      usePolling: false,
      interval: 1000
    }
  },})
