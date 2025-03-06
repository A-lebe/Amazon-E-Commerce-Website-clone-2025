import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   base: "/Amazon-E-Commerce-Website-clone-2025",
})

// import { defineConfig } from 'vite';

// import react from '@vitejs/plugin-react';
// export default defineConfig({
//   plugins: [react({ jsxRuntime: 'automatic',  }), ], });//Ensures automatic JSX transform