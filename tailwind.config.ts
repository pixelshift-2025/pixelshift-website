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
        'fuchsia-pink': '#FF85E6',
        'green-yellow': '#E8FF65',
        'blue-purple': '#B59BFF',
        'teal-deer': '#9AF8E0',
        'cultured': '#F4F4F5',
        'chinese-black': '#111111',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        'extrabold': '800',
        'semibold': '600',
        'regular': '400',
      },
    },
  },
  plugins: [],
}
export default config 