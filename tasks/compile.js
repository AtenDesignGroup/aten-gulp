var gulp = require('gulp');
var config = require('../config').watch;

/**
 * Dev task
 */
gulp.task('compile', [
  'css',
  'js',
  'js-modules',
  'browser-sync',
  'watch'
]);
