/**
 * Created by victoryan on 15/8/17.
 */
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();

var BROWSER_SYNC_RELOAD_DELAY = 500;
module.exports = gulp.task('develop', function (cb) {
  var called = false;
  return nodemon({
    script: './app.js',
    watch: ['./app.js']
  })
    .on('start', function onStart() {
      if (!called) { cb(); }
      called = true;
    })
    .on('restart', function onRestart() {
      setTimeout(function reload() {
        browserSync.reload({
          stream: false   //
        });
      }, BROWSER_SYNC_RELOAD_DELAY);
    });
});
