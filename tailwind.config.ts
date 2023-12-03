import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'mini': '450px',
      'medium': '1150px',
      'half': '790px',
    },
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
        '2000': '2000px',
        '100': '23rem',
        '1020': '1020px',
        '1280': '1280px',
        '924': '65rem',
        '500': '500px',
        '650': '650px',
        '630': '630px',
        '420': '420px',
        '400': '400px',
        '300': '300px',
        '250': '250px',
        '170': '170px',
      },
      height: {
        '750': '750px',

      },
      colors: {
        'amber-25': '#fffbf5',
      },
    },
  },
  plugins: [],
}
export default config
