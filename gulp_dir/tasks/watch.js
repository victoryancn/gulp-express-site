/**
 * Created by victoryan on 15/8/17.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

module.exports = gulp.task('watch', function() {
  gulp.watch("./src/*.scss", ['sass']);
  gulp.watch("./src/coffee/**/*.coffee",['coffee']);
  gulp.watch("./src/views/**/*.ejs",['copy']);
  browserSync.init({
    proxy: "http://localhost:6300",
    files: ['./src/views/**/*.ejs'],
    port: 7000
  });
});
