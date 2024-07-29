/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#0c0a09',
        light: '#fafaf9',
        primary: '#ef4444',
        hoverPrimary: '#dc2626',
        secundary: '#fb923c'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')]
}
