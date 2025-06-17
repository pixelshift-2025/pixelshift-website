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
        'fuchsia-pink': '#FF12CE',
        'green-yellow': '#D9FF12',
        'blue-purple': '#9D12FF',
        'teal-deer': '#84FF5A',
        'cultured': '#F7F9F5',
        'chinese-black': '#191919',
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