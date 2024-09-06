import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Enable polling if file watching doesn't work
      interval: 100,    // Polling interval
    },
  },
});
