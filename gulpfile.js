var gulp = require('gulp');
var clean = require('gulp-clean');
var connect = require('gulp-connect');
var minifyCss = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');
var rev = require('gulp-rev');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var usemin = require('gulp-usemin');

// Tasks
gulp.task('default', ['sass', 'connect', 'watch']);
gulp.task('release', ['build', 'connect']);
gulp.task('build', ['clean', 'copy', 'sass', 'usemin']);

// Connect
gulp.task('connect', function() {
  connect.server({
    livereload: true
  })
})

// Watch
gulp.task('watch', function () {
  gulp.watch(['./src/**/*.html', './src/**/*.js']);
});

// Clean
gulp.task('clean', function() {
  return gulp
    .src(['./dist'])
    .pipe(clean());
});

// Copy
gulp.task('copy', function() {
  return gulp
    .src(['./src/assets/**/*'])
    .pipe(gulp.dest('./dist/assets'));
});

// SASS
gulp.task('sass', function(done) {
  return gulp.src('./src/index.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src'));
});

// Usemin
gulp.task('usemin', function() {
  return gulp.src(['./*.html', './src/**/*.html'])
    .pipe(usemin({
      css: [ rev ],
      html: [ function () { return minifyHtml({ empty: true }); }],
      js: [ uglify, rev ],
      inlinejs: [ uglify ],
      inlinecss: [ minifyCss, 'concat' ]
    }))
    .pipe(gulp.dest('./dist'));
});

