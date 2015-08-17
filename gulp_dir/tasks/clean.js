/**
 * Created by victoryan on 15/8/17.
 */
var gulp = require('gulp');
var clean = require('gulp-clean');

module.exports = gulp.task('clean', function () {
  return gulp.src('./dist', {read: false})
    .pipe(clean());
});
