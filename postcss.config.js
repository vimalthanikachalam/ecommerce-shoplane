module.exports = {
  plugins: [
    require("autoprefixer")({
      overrideBrowserslist: ["> 0.5%", "last 2 versions", "IE 10"],
    }),
  ],
};
