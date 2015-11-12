var requireDir = require('require-dir');

// Require all tasks in gulp, including subfolders
requireDir('./tasks', { recurse: true });
