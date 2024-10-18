import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: "0.0.0.0", // Ajoute cette ligne
    port: 5173, // Assure-toi que le port est correct
  },
})
