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
var serverSrcDir = 'src';
var serverDestDir = 'server';
var nodeBin = '/home/polaris/bin';

var babelPaths = {
  serverSrc: [path.join(serverSrcDir, '*.js')],
  serverDest: serverDestDir,
  src: [path.join(srcDir, 'facettest.js')],
  gungeSrc: [path.join(srcDir, 'facetgunge.js')],
  dest: jsDir
};
gulp.task('clean', function() {
  del([
    path.join(jsDir, '*.js'),
    path.join(jsDir, 'bundle'),
    path.join(src, '*.js')
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

// build the server

gulp.task('build-server', function(cb) {
  return gulp.src(babelPaths.serverSrc)
             .pipe(sourcemaps.init())
             .pipe(babel({
               presets: ['es2015']
             }))
             .pipe(sourcemaps.write('.'))
             .pipe(gulp.dest(babelPaths.serverDest));
});

// run the server

gulp.task('server', ['build-server'], function() {
  var child = spawn(path.join(nodeBin, 'node4'), [path.join(babelPaths.serverDest, '/wikisearch.js')], {cwd: process.cwd()}),
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

// stable

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

// experimental

gulp.task('build-gunge', function(cb) {
  runSequence('babel-gunge', 'browserify-gunge', cb);
});
gulp.task('babel-gunge', function() {
  return gulp.src(babelPaths.gungeSrc)
             .pipe(sourcemaps.init())
             .pipe(babel({
               presets: ['es2015', 'react']
             }))
             .pipe(gulp.dest(babelPaths.dest));
});
gulp.task('browserify-gunge', function() {
  return gulp.src('public/js/facetgunge.js')
             .pipe(browserify({
               insertGlobals: true,
               debug: true
             }))
             .pipe(gulp.dest('public/js/bundle'))
});

// ------------

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
