/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // src 폴더 안의 모든 vue/ts 파일을 다 감시!
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--bg)',
        grid: 'var(--grid)',
        title: 'var(--txt-title)',
        sub : 'var(--txt-sub)',
        body: 'var(--txt-body)',
        mint: 'var(--txt-mint)',
        lightmint: 'var(--bg-mint)',
      },
      backgroundImage: {
         radial : 'var(--color-bg-radial)',
      },
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'], // font-size, line-height
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      fontFamily: {
        sans: ['"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
