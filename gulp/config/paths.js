/**
 * @file
 * Config file containing variables for key paths in the system.
 */

const config = {};

//
// Folder where site files lives.
config.siteRoot = '../public_html';

//
// Site theme folders.
config.mainTheme = `${config.siteRoot}/sites/all/themes/stanford_pcs`;
config.subTheme = `${config.siteRoot}/sites/default/themes/spcs_subtheme`;

//
// Site CSS paths.
config.css = {};

// Paths for the platform's main theme CSS
config.css.source = [
  `${config.mainTheme}/src/scss/*.{scss,sass}`,
  `${config.mainTheme}/src/scss/**/*.{scss,sass}`
];
config.css.build = `${config.mainTheme}/build/css`;

// Paths for the site subtheme's CSS.
config.css.sourceSubtheme = [
  `${config.subTheme}/src/scss/*.{scss,sass}`,
  `${config.subTheme}/src/scss/**/*.{scss,sass}`
];
config.css.buildSubtheme = `${config.subTheme}/build/css`;

//
// Site JS paths.
config.js = {};

// Main theme JS
config.js.source = `${config.mainTheme}/src/js/*.js`;
config.js.build = `${config.mainTheme}/build/js`;

// Subtheme JS.
config.js.sourceSubtheme = `${config.subTheme}/src/js/*.js`;
config.js.buildSubtheme = `${config.subTheme}/build/js`;

//
// Paths to site SVG files
config.svg = {};

// Main theme SVG
config.svg.source = `${config.mainTheme}/img/svg`;
config.svg.build = `${config.mainTheme}/build/css/icon`;
config.svg.optionsFile = `../../${config.svg.source}/grunticonOptions.js`;

module.exports = config;
