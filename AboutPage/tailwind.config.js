/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fiit: {
          dark: '#0f173b',
          navy: '#121b4a',
          deeper: '#090e29',
          blue: '#1e2d6b',
          accent: '#2563eb',
          purple: '#4f46e5',
          gold: '#f59e0b',
          amber: '#eab308',
          tag: '#f1f4fb',
          slate: '#334155'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace']
      }
    },
  },
  plugins: [],
}
