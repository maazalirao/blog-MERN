import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Export Vite configuration
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Default development server port
    open: true, // Automatically open the browser on server start
  },
  build: {
    outDir: 'dist', // Output directory for the build
    sourcemap: true, // Generate source maps for debugging
  },
  define: {
    'process.env': {
      REACT_APP_OPENAI_API_KEY: process.env.REACT_APP_OPENAI_API_KEY, // Pass OpenAI API key to the client
    },
  },
});
