/**
 * Created by victoryan on 15/8/17.
 */
require('coffee-script/register');
var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var config = require('../../config/config');
module.exports = gulp.task('vender', function () {
  return gulp.src(config.venders)
    .pipe(concatCss("./dist/css/vender.css"))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./'));
});
