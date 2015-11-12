var gulp = require('gulp');
var config = require('../config/config').watch;

/**
 * Add comments...
 */
gulp.task('watch', function() {
  gulp.watch(config.sass, ['sass']);
});
