/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
    keyframes: {
        dropFade: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '20%': { transform: 'translateY(5px)', opacity: '1' },
          '50%': { transform: 'translateY(15px)', opacity: '0.5' },
          '100%': { transform: 'translateY(30px)', opacity: '0' },
        },
      },

        animation: {
            'drop-fade': 'dropFade 1.5s ease-in-out infinite',
        },
    },
  },
  plugins: [],
};

