//require('./gulp_dir')
require('coffee-script/register');
var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  sass = require('gulp-ruby-sass'),
  coffee = require('gulp-coffee'),
  gulpCopy = require('gulp-copy'),
  imagemin = require('gulp-imagemin'),
  clean = require('gulp-clean'),
  replace = require('gulp-replace'),
  autoprefixer = require('gulp-autoprefixer'),
  minifyCss = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  concatCss = require('gulp-concat-css'),
  gulpsync = require('gulp-sync')(gulp),
  argv = require('yargs').argv,
  browserSync = require('browser-sync').create();
//copy common css file to this array and they will concat to one simple file
var venders = [
  './src/components/normalize.css/normalize.css',
  './src/components/slick.js/slick/slick.css',
  './src/components/fullpage/jquery.fullPage.css'
];

//delete dist dir
gulp.task('clean', function () {
  return gulp.src('./dist', {read: false})
    .pipe(clean());
});

//copy
var copyFiles  =  [
  './src/components/**/*.*',
  './src/res/**/*.*'
];
//imagemin
gulp.task('images', function () {
  return gulp.src('./src/res/**/*.*')
    .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
    .pipe(gulp.dest('./dist'));
});
//copy other files from src to dist
gulp.task('copy', function () {
  return gulp.src(copyFiles)
    .pipe(gulpCopy('./dist',{prefix:1}));
});
//compile coffee to dist dir
gulp.task('coffee', function() {
  gulp.src('./src/coffee/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream());
});
//compile sass and autofix css and minisize css file
gulp.task('sass', function () {
  return sass('./src/scss')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

//concat css files to one vender.css
gulp.task('vender', function () {
  return gulp.src(venders)
    .pipe(concatCss("./dist/css/vender.css"))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./'));
});

//live reload and use mondemon to restart node
gulp.task('watch', function() {
  gulp.watch("./src/*.scss", ['sass']);
  gulp.watch("./src/coffee/**/*.coffee",['coffee']);
  gulp.watch("./src/views/**/*.ejs",['copy']);
  browserSync.init({
    proxy: "http://localhost:6300",
    files: ['./src/views/**/*.ejs'],
    port: 7000
  });
});


var BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('develop', function (cb) {
  var called = false;
  return nodemon({
    script: 'app.js',
    watch: ['app.js']
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

//dev task
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
//release task
gulp.task('build', gulpsync.sync([
  'clean',
  [
    'sass',
    'coffee',
    'copy',
    'vender'
  ]
]));
