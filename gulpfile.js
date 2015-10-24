var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');
var runSequence = require('run-sequence');
var del = require('del');
var spawn = require('child_process').spawn;
var gutil = require('gulp-util');

var path = require('path');
var srcDir = 'public/srcjs';
var jsDir = 'public/js';
var nodeBin = '/home/polaris/src/node4';

var babelPaths = {
  vdna: [path.join(srcDir, '*.js')],
  dest: jsDir
};
gulp.task('clean', function() {
  del([
    path.join(jsDir, '*.js'),
    path.join(jsDir, 'bundle'),
  ]);
});
gulp.task('rewire', function() {
  var child = spawn(path.join(nodeBin, 'node'), ['bin/rewirewiki.js'], {cwd: process.cwd()}),
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

// ------------------- to be revamped later.
gulp.task('build', function(cb) {
  runSequence('babel', 'browserify', cb);
});
gulp.task('babel', function() {
  return gulp.src(babelPaths.vdna)
             .pipe(sourcemaps.init())
             .pipe(babel({
               sourceMaps: 'inline'
             }))
    // .pipe(sourcemaps.write('.', { sourceRoot: babelPaths.sourceRoot }))
             .pipe(gulp.dest(babelPaths.dest));
});
gulp.task('browserify', function() {
  return gulp.src('public/js/vdnamenu.js')
             .pipe(browserify({
               insertGlobals: true,
               debug: true
             }))
             .pipe(gulp.dest('public/js/bundle'))
});
gulp.task('watch', function() {
  gulp.watch(babelPaths.vdna, ['build']);
});
gulp.task('default', ['watch']);
