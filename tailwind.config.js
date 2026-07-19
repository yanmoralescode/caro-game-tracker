/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#090b10',
        surface: '#111827',
        surface2: '#0f1725',
        surfaceHover: '#1f2937',
        border: '#1f2937',
        text: '#e5e7eb',
        muted: '#94a3b8',
        accent: '#22d3ee',
        accentDark: '#06b6d4',
        success: '#22c55e',
        warning: '#f59e0b',
        danger: '#ef4444',
        info: '#38bdf8',
        focus: '#38bdf8',
      },
      boxShadow: {
        card: '0 20px 45px rgba(0, 0, 0, 0.18)',
        soft: '0 10px 30px rgba(15, 23, 42, 0.28)',
        elevated: '0 24px 80px rgba(0, 0, 0, 0.24)',
      },
      borderRadius: {
        sm: '0.75rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '2.5rem',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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
