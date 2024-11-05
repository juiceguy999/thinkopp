import type { Config } from 'tailwindcss';

const config: Partial<Config> = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        main: { DEFAULT: '#1d1d1d', transparent: 'rgba(0,0,0,0.19)' },
        red: { invalid: '#BE1F2A' }
      },
      fontFamily: {
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        helveticaNeue: ['var(--font-helvetica-neue)', 'sans-serif'],
        interTight: ['var(--font-inter-tight)']
      },
      container: {
        center: true,
        padding: '1.25rem',
        screens: {
          xl: '1160px'
        }
      },
      fontSize: {
        sub: ['0.9375rem', '17.89px'],
        '5xl': [
          '3rem',
          {
            lineHeight: '58.13px',
            letterSpacing: '-0.48px'
          }
        ]
      }
    }
  },
  plugins: []
};
export default config;
