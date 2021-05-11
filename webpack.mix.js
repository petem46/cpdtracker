const mix = require("laravel-mix");
// require('laravel-mix-bundle-analyzer');

// if (!mix.inProduction()) {
//     mix.bundleAnalyzer();
// }
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
const webpack = require("webpack");
mix.webpackConfig({
  plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
});

mix
  .js("resources/js/app.js", "public/js")
  .vue()
  .sass("resources/sass/app.scss", "public/css")
  .version()
  .extract();

if (mix.inProduction()) {
  mix.version();
}
