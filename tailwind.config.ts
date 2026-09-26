module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef7ff',
          100: '#d9efff',
          500: '#2f80ed',
          600: '#1f6fe8',
          700: '#195ac1'
        },
        success: '#22c55e',
        warning: '#f59e0b',
        danger: '#ef4444',
        dark: '#07111d',
        panel: '#0d1b2a'
      },
      boxShadow: {
        glow: '0 20px 45px rgba(47, 128, 237, 0.35)'
      },
      animation: {
        float: 'float 6s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      }
    }
  },
  plugins: []
};
