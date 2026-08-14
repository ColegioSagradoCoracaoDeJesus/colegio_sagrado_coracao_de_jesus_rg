import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#54000A',   // PLACEHOLDER brand-primary — marsala sagrado
          dark: '#0A0760',      // PLACEHOLDER brand-primary-dark
          soft: '#398AEA',      // PLACEHOLDER brand-secondary
          light: '#EBF2FA',     // azul suave para fundos de destaque
        },
        accent: '#D97706',      // PLACEHOLDER brand-accent — ambar/dourado de destaque
        anniversary: '#B8860B', // PLACEHOLDER cor comemorativa dos 70 anos (dourado festivo)
        neutral: {
          900: '#111827',
          600: '#4B5563',
          300: '#D1D5DB',
          100: '#F3F4F6',
          50: '#F9FAFB',
        },
        success: '#16A34A',
        error: '#DC2626',
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'Poppins', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '24px',
      },
      maxWidth: {
        content: '1280px',
        prose: '720px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,.08)',
        md: '0 4px 12px rgba(0,0,0,.10)',
        lg: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        18: '72px',
      },
    },
  },
  plugins: [],
}

export default config
