import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/cd
export default defineConfig({
  plugins: [react()],
})
