const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  //mode: 'jit',
  darkMode: 'class', //layout.tsx
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    nextui()
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      },
      maxWidth: {
        '4xs': '300px',
        '3xs': '375px',
        '2xs': '425px',
        'xs': '576px',
        '2xl': '1440px',
        '3xl': '1560px',
        '4xl': '1680px',
        '5xl': '1760px',
        '6xl': '1920px',
        '7xl': '1920px',
        '8xl': '2140px',
        '9xl': '2460px',
        '10xl': '2700px',
        '11xl': '2860px',
        '12xl': '3200px',
      },
      screens: {
        '3xs': '300px',
        '2xs': '375px',
        'xs': '425px',
        '2xl': '1440px',
        '3xl': '1560px',
        '4xl': '1680px',
        '5xl': '1760px',
        '6xl': '1920px',
        '7xl': '1920px',
        '8xl': '2140px',
        '9xl': '2460px',
        '10xl': '2700px',
        '11xl': '2860px',
        '12xl': '3200px',
      }
    },

    fontFamily: {
      'body': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui', 
        '-apple-system', 
        'system-ui', 
        'Segoe UI', 
        'Roboto', 
        'Helvetica Neue', 
        'Arial', 
        'Noto Sans', 
        'sans-serif', 
        'Apple Color Emoji', 
        'Segoe UI Emoji', 
        'Segoe UI Symbol', 
        'Noto Color Emoji'
      ],
      'sans': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui', 
        '-apple-system', 
        'system-ui', 
        'Segoe UI', 
        'Roboto', 
        'Helvetica Neue', 
        'Arial', 
        'Noto Sans', 
        'sans-serif', 
        'Apple Color Emoji', 
        'Segoe UI Emoji', 
        'Segoe UI Symbol', 
        'Noto Color Emoji'
      ],
    },
  }
}
