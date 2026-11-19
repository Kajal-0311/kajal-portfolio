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
          DEFAULT: '#F5EBDD',
          primary: '#F5EBDD',   // Warm cream
          secondary: '#FAF6EF', // Soft ivory
          section: '#EFE3D3',   // Light beige
          900: '#F5EBDD',
          800: '#EFE3D3',
          ivory: '#FAF6EF',
        },
        surface: {
          DEFAULT: '#FFF9F1', // Warm off-white
          2: '#F5ECE1',       // Hover state of cards
          card: '#FFF9F1',
          beige: '#EFE3D3',
        },
        border: {
          DEFAULT: '#D8C1A8', // Muted beige
          muted: '#E6D7C7',
          dark: '#C8AE93',
        },
        heading: {
          DEFAULT: '#54351F', // Deep mocha brown
          secondary: '#75451F', // Coffee brown
        },
        accent: {
          DEFAULT: '#75451F', // Primary coffee brown
          hover: '#54351F',   // Deep mocha hover
          glow: 'rgba(185, 135, 91, 0.25)', // Caramel glow
          caramel: '#B9875B', // Caramel beige
          2: '#B9875B',       // Secondary accent (caramel)
        },
        coffee: {
          DEFAULT: '#75451F',
          dark: '#54351F',
          light: '#B9875B',
        },
        text: {
          DEFAULT: '#44372E', // Dark warm brown
          muted: '#806F60',   // Muted brown
          mocha: '#54351F',
          coffee: '#75451F',
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
        card: '0 10px 30px -10px rgba(84, 53, 31, 0.08), 0 4px 12px -2px rgba(84, 53, 31, 0.04)',
        'card-hover': '0 20px 45px -12px rgba(84, 53, 31, 0.16), 0 8px 18px -4px rgba(84, 53, 31, 0.08)',
        glow: '0 0 30px rgba(185, 135, 91, 0.25)',
        'glow-accent2': '0 0 30px rgba(185, 135, 91, 0.3)',
        soft: '0 4px 20px rgba(84, 53, 31, 0.06)',
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
