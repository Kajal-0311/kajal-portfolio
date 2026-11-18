/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          900: '#050B1A',
          800: '#081430',
        },
        surface: {
          DEFAULT: '#0C1B3D',
          2: '#11264F',
        },
        border: 'rgba(120, 160, 255, 0.15)',
        accent: {
          DEFAULT: '#1E7BFF',
          glow: 'rgba(30, 123, 255, 0.35)',
          2: '#38E1FF',
        },
        text: {
          DEFAULT: '#F2F6FF',
          muted: '#9FB0D0',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        card: '20px',
        frame: '28px',
        chip: '8px',
      },
      boxShadow: {
        card: '0 20px 60px -20px rgba(30, 123, 255, 0.35)',
        glow: '0 0 30px rgba(30, 123, 255, 0.35)',
        'glow-accent2': '0 0 30px rgba(56, 225, 255, 0.3)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'spin-slow': 'spin 60s linear infinite',
        'float-slow': 'float 4s ease-in-out infinite',
        'float-delayed': 'float 4s ease-in-out 2s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
