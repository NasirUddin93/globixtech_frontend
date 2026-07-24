/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'primary': '#3a86ff',
                'secondary': '#8338ec',
                'accent': '#ff006e',
                'dark': '#1a1a2e',
                'light': '#f8f9fa',
                'glass-light': 'rgba(255, 255, 255, 0.65)',
                'glass-light-strong': 'rgba(255, 255, 255, 0.85)',
                'glass-dark': 'rgba(15, 23, 42, 0.55)',
                'surface-soft': '#fbfbfd',
                'surface-elevated': '#f5f5f7',
                'accent-cyan': '#00b7ff',
            },
            backdropBlur: {
                xs: '4px',
                'glass-sm': '14px',
                'glass-md': '20px',
                'glass-lg': '24px',
                'glass-xl': '32px',
            },
            backgroundImage: {
                'accent-gradient': "linear-gradient(135deg, #3a86ff, #00b7ff)",
            },
            boxShadow: {
                glass: '0 8px 32px rgba(0, 0, 0, 0.08)',
                'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.35)',
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
            }
        },
    },
    plugins: [],
};

