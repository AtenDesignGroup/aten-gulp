var gulp = require('gulp');
var config = require('../config/config').watch;

/**
 * Add comments...
 */
gulp.task('watch', function() {
  gulp.watch(config.css, ['css']);
  gulp.watch(config.js, ['js']);
  // gulp.watch([
  //   config.paths.themeSourceSVG
  // ],['svg']);
});
