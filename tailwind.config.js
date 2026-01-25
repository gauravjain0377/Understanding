/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FBFBF9',
        'text-primary': '#1C1C1C',
        'text-secondary': '#5A5A5A',
        accent: '#4A7C8F',
        border: '#E8E8E6',
        subtle: '#F5F5F3',
      },
      fontFamily: {
        reading: ['var(--font-reading)', 'serif'],
        ui: ['var(--font-ui)', 'sans-serif'],
        technical: ['var(--font-technical)', 'monospace'],
      },
      maxWidth: {
        reading: '65ch', // Optimal reading width
        'visual': '1200px',
      },
      spacing: {
        'section': '4rem',
        'section-lg': '6rem',
        'visual': '85vh', // Updated for larger diagrams
      },
      minHeight: {
        'visual-primary': '85vh', // Larger for better readability
        'visual-secondary': '50vh',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#1A1A1A',
            fontSize: '20px',
            lineHeight: '1.8',
            letterSpacing: '0.01em',
            '--tw-prose-headings': '#1A1A1A',
            '--tw-prose-body': '#1A1A1A',
            '--tw-prose-links': '#5B8FA3',
            '--tw-prose-bold': '#1A1A1A',
            '--tw-prose-code': '#4A4A4A',
            p: {
              marginTop: '0',
              marginBottom: '2rem',
            },
            '@media (min-width: 768px)': {
              fontSize: '22px',
              lineHeight: '1.85',
              p: {
                marginBottom: '2.25rem',
              },
            },
            '@media (min-width: 1024px)': {
              fontSize: '23px',
            },
          },
        },
      },
    },
  },
  plugins: [],
}
