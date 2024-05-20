module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-combine-duplicated-selectors"),
    require("postcss-combine-media-query"),
    require("postcss-custom-media"),
    require("postcss-nesting"),
  ],
};
