/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '380px',
      },
      colors: {
        bg: {
          DEFAULT: '#EDE0CC',
          primary: '#EDE0CC',   // Warm beige (main page background)
          secondary: '#E8DAC5', // Alternate section background
          section: '#E8DAC5',   // Slightly deeper creamy beige
          900: '#EDE0CC',
          800: '#E8DAC5',
          cream: '#E8DAC5',
        },
        surface: {
          DEFAULT: '#F2E7D8', // Soft sand/cream (cards)
          2: '#E8DAC5',       // Secondary surface / hover
          card: '#F2E7D8',    // Project and information cards
          sand: '#F2E7D8',
          beige: '#E8DAC5',
        },
        border: {
          DEFAULT: '#D2BFA6', // Warm beige border
          muted: '#DCCBBA',
          dark: '#BFA88D',
        },
        heading: {
          DEFAULT: '#54351F', // Deep mocha brown
          secondary: '#75451F', // Coffee brown
        },
        accent: {
          DEFAULT: '#75451F', // Primary coffee brown (buttons)
          hover: '#54351F',   // Deep mocha hover
          glow: 'rgba(185, 135, 91, 0.25)', // Caramel glow
          caramel: '#B9875B', // Caramel highlight
          2: '#B9875B',       // Secondary accent (caramel)
        },
        coffee: {
          DEFAULT: '#75451F',
          dark: '#54351F',
          light: '#B9875B',
        },
        text: {
          DEFAULT: '#44372E', // Dark warm brown body text
          muted: '#806F60',   // Muted brown
          mocha: '#54351F',   // Heading tone
          coffee: '#75451F',  // Button/accent tone
          caramel: '#B9875B', // Highlighted text
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
