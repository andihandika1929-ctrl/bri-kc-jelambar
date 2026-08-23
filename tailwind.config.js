/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bri: {
          blue: '#0052CC',       // Modern Primary Brand Blue
          secondary: '#2563EB',  // Modern Secondary Blue
          hover: '#1D4ED8',      // Primary Button Hover Blue
          footer: '#003B99',     // Modern Deep Corporate Blue for Footer
          darkblue: '#003B99',
          lightblue: '#3B82F6',
          softblue: '#EFF6FF',
          tintblue: '#DBEAFE',
          orange: '#F37021',
          darkorange: '#D95B0F',
          yellow: '#FFB800',
          gray: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        'bri-sm': '0 2px 8px -2px rgba(0, 82, 204, 0.08)',
        'bri': '0 8px 30px -4px rgba(0, 82, 204, 0.12)',
        'bri-lg': '0 12px 40px -4px rgba(0, 82, 204, 0.18)',
        'bri-orange': '0 8px 25px -4px rgba(243, 112, 33, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
