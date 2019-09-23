// This file isn't transpiled, so mut use CommonJS and ES5

// Register babel to transpile before our test run
require('babel-register')();

// Disable webpack features that Mocha doesn't underestand
require.extensions['.css'] = function () {};
