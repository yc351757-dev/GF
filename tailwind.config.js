/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#070114',
          900: '#0e0424',
          850: '#150933',
          800: '#1e0c45',
          700: '#2b105c',
        },
        plum: {
          900: '#26042e',
          800: '#380943',
          700: '#4d105b',
          600: '#69187a',
        },
        blush: {
          50: '#fff1f4',
          100: '#ffe4ea',
          200: '#fecdd8',
          300: '#fda4b8',
          400: '#fb7193',
          500: '#f43f71',
          600: '#e11d56',
        },
        lavender: {
          50: '#fbf7ff',
          100: '#f4ebff',
          200: '#ebd8ff',
          300: '#debfff',
          400: '#c595fe',
          500: '#a855f7',
        },
        romance: {
          gold: '#fcd34d',
          rose: '#ff4d79',
          glow: 'rgba(244, 63, 113, 0.4)',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        script: ['"Great Vibes"', '"Dancing Script"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.06)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      boxShadow: {
        'romantic-glow': '0 0 35px -5px rgba(244, 63, 113, 0.4)',
        'romantic-glow-lg': '0 0 60px -10px rgba(168, 85, 247, 0.4)',
        'card-glass': '0 8px 32px 0 rgba(14, 4, 36, 0.37)',
      }
    },
  },
  plugins: [],
};

