import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        varela: ['Varela Round']
      },
      width: {
        '100': '23rem',
        '1180': '77rem',
        '924': '65rem',
        '500': '500px',
        '650': '650px',
      },
      height: {
        'big': '40rem',

      },
      colors: {
        'amber-25': '#fffbf5',
      },
    },
  },
  plugins: [],
}
export default config
