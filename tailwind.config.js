/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        primary: {
          50: '#F0F5FF',
          100: '#E6ECFF',
          200: '#C2D7FF',
          300: '#8AB5FF',
          400: '#5591FF',
          500: '#2563EB',
          600: '#004AC6',
          700: '#003BA3',
          800: '#002B7A',
          900: '#001C52',
        },
        // Secondary (Updated)
        secondary: {
          50: '#E8F5F1',
          100: '#BBE3D6',
          200: '#8FD1B8',
          300: '#6CF8BB',
          400: '#4EE9A0',
          500: '#30DA85',
          600: '#006A4E',
          700: '#005840',
          800: '#004632',
          900: '#003424',
        },
        // Surface
        surface: {
          0: '#FFFFFF',
          50: '#F8F9FF',
          100: '#EFF4FF',
          200: '#DEE9FC',
          300: '#D9E3F6',
          400: '#C8D6F0',
        },
        // Text
        text: {
          primary: '#121C2A',
          secondary: '#434655',
          tertiary: '#737686',
        },
        // Error
        error: '#BA1A1A',
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '26px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['28px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '44px' }],
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        px: '1px',
        0: '0px',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        12: '48px',
        14: '56px',
        16: '64px',
        20: '80px',
        24: '96px',
      },
      borderRadius: {
        none: '0px',
        xs: '4px',
        sm: '6px',
        base: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        full: '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
    },
  },
  plugins: [],
};
