// The customization panel for Tailwind.
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0d0d10',
        surface: '#16171c',
        surface2: '#1b1d24',
        surfaceHover: '#222530',
        border: '#2a2d37',
        text: '#f7f7fb',
        muted: '#8e93a7',
        accent: '#00f5d4',
        accentDark: '#00b894',
        secondary: '#ff4b2b',
        success: '#22c55e',
        warning: '#f59e0b',
        danger: '#ff4b2b',
        info: '#38bdf8',
        focus: '#00f5d4',
      },
      boxShadow: {
        card: '0 20px 55px rgba(0, 0, 0, 0.24)',
        soft: '0 14px 42px rgba(0, 0, 0, 0.24)',
        elevated: '0 35px 120px rgba(0, 0, 0, 0.42)',
      },
      borderRadius: {
        sm: '0.75rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '2.5rem',
      },
      fontFamily: {
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Exo 2', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        fade: 'fadeIn 0.35s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      screens: {
        '3xl': '1720px',
      },
    },
  },
  plugins: [],
};
