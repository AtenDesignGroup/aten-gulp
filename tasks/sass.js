var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var config = require('../config/config').sass;

gulp.task('sass', function () {
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src(config.input)
    // Run Sass on those files
    .pipe(sass(config.options).on('error', sass.logError))
    // Add CSS hacks for older browsers
    .pipe(autoprefixer(config.autoprefixer))
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(config.output));
});
