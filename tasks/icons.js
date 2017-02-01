var gulp = require('gulp');
var path = require('path');
var q = require('q');
var fs = require('fs');
var config = require('../config').svg;
var Grunticon = require('grunticon-lib');

var grunticonOptions = config.grunticonOptions;

gulp.task('icons', function () {
  var deferred = q.defer();
  var iconDir = config.filesSource;
  var options = Object.assign({ enhanceSVG: true }, grunticonOptions);

  var files = fs.readdirSync(iconDir).map(function (fileName) {
    return path.join(iconDir, fileName);
  });

  var grunticon = new Grunticon(files, config.filesBuild, options);

  grunticon.process(function () {
    deferred.resolve();
  });

  return deferred.promise;
});
