var gulp = require('gulp');
var config = require('../config/config').browserSync;
var browserSync = config.instance;

gulp.task('browser-sync', function() {
  browserSync.init(null, {
    proxy: config.proxy || 'localhost:7000',
    files: config.files || ['public/**/*.*'],
    browser: config.browser || 'google chrome',
    port: config.port || 7000,
    open: config.port || 'local'
  });

  gulp.watch(config.files).on('change', browserSync.reload);
});
