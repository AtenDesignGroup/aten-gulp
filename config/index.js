var browserSync = require('browser-sync');
var path = require('path');

var siteRoot = './../../web';
var themeDir = path.join(siteRoot, '/themes/prototype');
var modulesDir = path.join(siteRoot, '/modules/custom');
var sourceDir = path.join(themeDir, '/src');
var buildDir = path.join(themeDir, '/build');
var incPaths = [
  './node_modules/breakpoint-sass/stylesheets',
  themeDir + '/partials'
];

var grunticonOptions = require(path.join(
  process.cwd(),
  themeDir,
  '/images/icons/grunticonOptions.js')
);

module.exports = {
  css: {
    inputs: [
      themeDir + '/components/**/*.scss',
      themeDir + '/libraries/**/*.scss',
      themeDir + '/partials/**/*.scss'
    ],
    output: buildDir,
    base: themeDir,
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
    css: [sourceDir + '/scss/**/*.scss'],
    js: sourceDir + '/js/**/*.{js,jsx}',
    jsModules: modulesDir + '/**/src/js/**/*.{js,jsx}',
    planner: siteRoot + '/modules/custom/planner/src/**/*.php',
  },
  browserSync: {
    instance: browserSync.create(),
    proxy: process.env.BSPROXY || 'c4l.dev:8080',
    files: [
      buildDir + '/**/*.*',
      themeDir + '/**/*.{theme, twig, yml, php}',
      modulesDir + '/**/src/js/*.{js, jsx}'
    ],
    reloadDebounce: 2000
  },
  js: {
    theme: {
      inputs: [
        themeDir + '/components/*/*/*.js',
        themeDir + '/libraries/*/*.js'
      ],
      output: buildDir,
      base: themeDir,
      babelPresets: [
        'babel-preset-es2015',
        'babel-preset-react'
      ],
      babelPlugins: [],
      paths: [path.resolve(process.cwd(), './node_modules')],
      commonDir: buildDir + '/libraries/global'
    },
    filesBundles: sourceDir + '/js/*.js',
    filesModuleBundles: modulesDir + '/**/src/js/*.js',
    filesSource: sourceDir + '/js/**/*.js',
    filesBuild: buildDir + '/js',
    filesCommonDir: modulesDir + '/c4l_global/build/js/',
    babelPresets: [
      './node_modules/babel-preset-es2015',
      './node_modules/babel-preset-react'
    ],
    babelPlugins: []
  },
  svg: {
    grunticonOptions: grunticonOptions,
    filesSource: sourceDir + '/img/svg',
    filesBuild: buildDir + '/img/svg'
  }
};
