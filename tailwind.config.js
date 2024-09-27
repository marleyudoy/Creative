/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'selector',
  content: ["index.html"],
  theme: {   
    extend: {
      colors : {
        "primary-color" : "#F44335",
        "secondary-color" : "#00FF84",
        "dark-text" : "#f0f0f0" 
      },
      fontSize : {
        "p-text" : "16px",
        "btn-text" : "18px",
        "medium-text" : "24px",
        "heading-text" : "64px",
      },
      backgroundColor : {
        "dark" : "#202020",
      }
    },
    container : {
      center : true,
      padding : {
        "xl" : "5rem"
      }
    },
  },
  plugins: [],
}

