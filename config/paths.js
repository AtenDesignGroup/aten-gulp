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
config.theme = `${config.siteRoot}/sites/all/themes/MY_THEME`;

//
// Site CSS paths.
config.css = {};

// Paths for the platform's main theme CSS
config.css.source = `${config.theme}/src/scss/*.{scss,sass}`;
config.css.build = `${config.theme}/build/css`;

//
// Site JS paths.
config.js = {};

// Main theme JS
config.js.source = `${config.theme}/src/js/*.js`;
config.js.build = `${config.theme}/build/js`;

//
// Paths to site SVG files
config.svg = {};

// Main theme SVG
config.svg.source = `${config.theme}/img/svg`;
config.svg.build = `${config.theme}/build/css/icon`;
config.svg.optionsFile = `../../${config.svg.source}/grunticonOptions.js`;

module.exports = config;
