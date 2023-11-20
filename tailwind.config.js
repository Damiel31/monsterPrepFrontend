/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#111928",
        "secondary-color": "#637381",
        "ocean-blue": "#3758F9",
        "field-green": "#17972C",
        "ashe-gray": "#DFE4EA",
      },
    },
  },
  plugins: [],
};
