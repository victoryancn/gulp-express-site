/**
 * Created by victoryan on 15/8/17.
 */
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

module.exports = gulp.task('sass', function () {
  return sass('./src/scss')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});
