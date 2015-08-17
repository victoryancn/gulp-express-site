/**
 * Created by victoryan on 15/8/17.
 */
require('coffee-script/register');
var gulp = require('gulp'),
  gulpsync = require('gulp-sync')(gulp);
gulp.task('default', gulpsync.sync([
  'clean',//sync
  [
    'sass',
    'coffee',
    'copy',
    'vender',
    'watch',
    'develop'
  ]
]));
gulp.task('build', gulpsync.sync([
  'clean',
  [
    'sass',
    'coffee',
    'copy',
    'vender'
  ]
]));
