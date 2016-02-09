var gulp = require('gulp');
var glob = require('glob');
var path = require('path');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var shimify = require('browserify-shim');

var config = require('../config/config').js;

var defaults = {
  filesBundles: '/assets/js/*.js',
  filesSource: '/assets/js/**/*.js',
  filesBuild: '/public/js',
  babelPresets: ['es2015', 'react'],
  babelPlugins: ['transform-object-rest-spread']
};

var options = Object.assign({}, defaults, config);

/**
 * Bundle JS
 */
gulp.task('js', function(cb) {
  glob(options.filesBundles, function(er, files) {
    files.forEach(function(file) {
      var basename = path.basename(file);
      browserify(file)
        .exclude('jquery')
        // .plugin(watchify)
        // .transform(shimify)
        .transform('babelify', {
          presets: options.babelPresets, 
          plugins: options.babelPlugins
        })
        .bundle()
        // .on('update', bundle)
        .on('error', function(err){
          console.log(err.message);
        })
        .pipe(source(basename))
        .pipe(gulp.dest(options.filesBuild));
    });
    cb(er);
  });
});
