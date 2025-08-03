import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
  './app/**/*.{ts,tsx}',
  './pages/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './style/**/*.{css}',
],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        accent: 'var(--color-accent)',
        'primary-alt': 'var(--color-primary-alternate)',
        page: 'var(--color-page)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
      },
      fontFamily: {
        english: ['var(--font-english)', 'sans-serif'],
        farsi: ['var(--font-farsi)', 'sans-serif'],
      },
    },
    screens: {
      'mobile-portrait': '375px',
      'mobile-landscape': '600px',
      'tablet-portrait': '744px',
      'tablet-landscape': '1023px',
      'normal-screen': '1440px',
      'wide-screen': '1920px',
    },
  },
  plugins: [],
};

export default config;
