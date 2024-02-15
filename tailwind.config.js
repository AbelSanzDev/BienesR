// tailwind-config.js
const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: ["./**/*.html"],  // Incluye todos los archivos HTML en tu proyecto
  theme: {
    extend: {},
  },
  plugins: [],
});


