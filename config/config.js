var siteRoot = '../docroot';
var themeDir = siteRoot + '/sites/all/themes/erwc_theme';
var sourceDir = themeDir + '/sass';
var buildDir = themeDir + '/css';
var incPaths = ['bower'];

module.exports = {
  sass: {
    input: sourceDir + '/**/*.scss',
    output: buildDir,
    sourcemapsDir: '.',
    options: {
      errLogToConsole: true,
      includePaths: incPaths
    }
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  },
  watch: {
    sass: sourceDir + '/**/*.{sass,scss}'
  }
};
