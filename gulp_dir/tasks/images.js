/**
 * Created by victoryan on 15/8/17.
 */
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('images', function () {
  return gulp.src('./src/res/**/*.*')
    .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
    .pipe(gulp.dest('./dist'));
});
