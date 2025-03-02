/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      colors: {
        'blog-primary': '#1a365d',
        'blog-secondary': '#2d3748',
        'blog-accent': '#4299e1',
        'blog-background': '#f7fafc',
        'blog-text': '#2d3748',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [
    // Use require only if the plugin is installed
    // Otherwise, comment this out
  ],
} 