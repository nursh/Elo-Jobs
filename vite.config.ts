import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
// https://vite.dev/config/
dotenv.config()
export default defineConfig({
  plugins: [react()],
  server: {
    port: 80, // Change this to your desired port number
    host: true,
  },
})
