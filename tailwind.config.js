/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          main: "#212121",
          components: "#343a40",
        },
        text: {
          primary: "#f5f5f5",
          secondary: "#eeeeee",
          disabled: "#e0e0e0",
        },
        accent: {
          active: "#4db6ac",
          buttons: "#5c6bc0",
        },
        alert: {
          errors: "#ff1744",
          warning: "#ffa726",
        },
        success: "66bb6a",
        border: {
          primary: "#616161",
          secondary: "#757575",
        },
      },
    },
  },
  plugins: [],
};
