/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5865F2", // Discord blue
        secondary: "#2D3748",
        accent: "#7289DA",
        success: "#57F287", // Discord green
        warning: "#FEE75C", // Discord yellow
        danger: "#ED4245", // Discord red
        dark: "#23272A", // Discord dark
        light: "#F6F6F6",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
