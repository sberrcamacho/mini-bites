/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './404.html'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fredoka', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        cream: '#FDF8F5',
        choco: '#3E2723',
        butter: '#FEE180',
        pinky: '#FFD3E0',
        nequi: '#FF0082',
        wapp: '#25D366',
      },
      boxShadow: {
        soft: '0 20px 40px -15px rgba(62, 39, 35, 0.08)',
        float: '0 30px 60px -20px rgba(62, 39, 35, 0.15)',
      },
    },
  },
};
