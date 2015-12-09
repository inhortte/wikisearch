var gulp        = require('gulp');
var sourcemaps  = require('gulp-sourcemaps');
var babel       = require('gulp-babel');
var browserify  = require('gulp-browserify');
var uglify      = require('gulp-uglify');
var runSequence = require('run-sequence');
var del         = require('del');
var spawn       = require('child_process').spawn;
var gutil       = require('gulp-util');

var path = require('path');
var srcDir = 'public/srcjs';
var jsDir = 'public/js';
var nodeBin = '/home/polaris/bin';

var babelPaths = {
  src: [path.join(srcDir, '*.js')],
  dest: jsDir
};
gulp.task('clean', function() {
  del([
    path.join(jsDir, '*.js'),
    path.join(jsDir, 'bundle'),
  ]);
});
gulp.task('rewire', function() {
  var child = spawn(path.join(nodeBin, 'node4'), ['bin/rewirewiki.js'], {cwd: process.cwd()}),
      stdout = '',
      stderr = '';

  child.stdout.setEncoding('utf8');

  child.stdout.on('data', function (data) {
    stdout += data;
    gutil.log(data);
  });

  child.stderr.setEncoding('utf8');
  child.stderr.on('data', function (data) {
    stderr += data;
    gutil.log(gutil.colors.red(data));
    gutil.beep();
  });

  child.on('close', function(code) {
    gutil.log("Done with exit code", code);
    gutil.log("You access complete stdout and stderr from here"); // stdout, stderr
  });
});
gulp.task('build-dev', function(cb) {
  runSequence('babel-dev', 'browserify-dev', cb);
});
gulp.task('babel-dev', function() {
  return gulp.src(babelPaths.src)
             .pipe(sourcemaps.init())
             .pipe(babel({
               presets: ['es2015', 'react']
             }))
             .pipe(gulp.dest(babelPaths.dest));
});
gulp.task('browserify-dev', function() {
  return gulp.src('public/js/facettest.js')
             .pipe(browserify({
               insertGlobals: true,
               debug: true
             }))
             .pipe(gulp.dest('public/js/bundle'))
});
gulp.task('build-prod', function(cb) {
  runSequence('babel-prod', 'browserify-prod', cb);
});
gulp.task('babel-prod', function() {
  return gulp.src(babelPaths.src)
             .pipe(babel({
               presets: ['es2015', 'react']
             }))
             .pipe(gulp.dest(babelPaths.dest));
});
gulp.task('browserify-prod', function() {
  return gulp.src('public/js/facettest.js')
             .pipe(browserify())
             .pipe(uglify())
             .pipe(gulp.dest('public/js/bundle'));
});
gulp.task('watch', function() {
  gulp.watch(babelPaths.src, ['build-dev']);
});
gulp.task('default', ['watch']);
