module.exports = {
  purge: [ "./src/_includes/**/*.njk", "./src/*.html" ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
       'top-image': "url('/brueckevonarselectronica.jpg')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
