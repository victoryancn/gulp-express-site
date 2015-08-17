/**
 * Created by victoryan on 15/8/17.
 */
var gulp = require('gulp');
var gulpCopy = require('gulp-copy');
var config = require('../../config/config');

module.exports = gulp.task('copy', function () {
  return gulp.src(config.copyFiles)
    .pipe(gulpCopy('./dist',{prefix:1}));
});
