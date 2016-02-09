var gulp = require('gulp');
var config = require('../config/config').watch;

/**
 * Dev task
 */
gulp.task('dev', ['css', 'js', 'browser-sync', 'watch']);
