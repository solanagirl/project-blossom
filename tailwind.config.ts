import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-sky': 'linear-gradient(180deg, rgba(162,239,255,1) 0%, rgba(202,244,246,1) 31%, rgba(255,217,213,1) 68%, rgba(255,169,169,1) 100%)',
        'petal': "url('/petal.png')",
      },
      boxShadow: {
        'white-glow': '0px 8px 24px 12px rgba(255, 242, 255, 1)',
        'dark-glow-lg': '0px 8px 24px 12px rgba(125, 21, 49, 1)',
        'dark-glow-sm': '0px 4px 24px 8px rgba(125, 21, 49, 0.7)',
      },
      listStyleType: {
      },
      colors: {
        'peach': '#ffa9a9'
      },
    },
  },
  plugins: [],
}
export default config
