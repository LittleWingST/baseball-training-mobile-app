/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif'],
        'acumin': ['Acumin Pro ExtraCondensed', 'sans-serif'],
      },
      colors: {
        neutral: {
          100: '#f5f5f5',
          400: '#a3a3a3',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        indigo: {
          400: '#818cf8',
          500: '#6366f1',
        },
        amber: {
          300: '#fcd34d',
        },
        blue: {
          500: '#3b82f6',
          600: '#2563eb',
        },
        gray: {
          200: '#e5e7eb',
          400: '#9ca3af',
          600: '#4b5563',
          900: '#111827',
        },
        stone: {
          300: '#d6d3d1',
          900: '#1c1917',
          950: '#0c0a09',
        },
        zinc: {
          300: '#d4d4d8',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
        sky: {
          900: '#0c4a6e',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'custom': '0px 2px 5px -2px rgba(10,9,11,0.06), 0px 2px 7px 0px rgba(10,9,11,0.03), 0px 0px 0px 1px rgba(10,9,11,0.04)',
      },
    },
  },
  plugins: [],
}