/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'primary': '#3a86ff',
                'secondary': '#8338ec',
                'accent': '#ff006e',
                'dark': '#1a1a2e',
                'light': '#f8f9fa'
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
            }
        },
    },
    plugins: [],
};
