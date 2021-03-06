
'use strict';

var resolvePlugins = require('babel-preset-react-native/lib/resolvePlugins');

module.exports = {
  comments: false,
  compact: true,
  plugins: resolvePlugins([
    'transform-decorators-legacy',
    'syntax-async-functions',
    'syntax-class-properties',
    'syntax-trailing-function-commas',
    'transform-class-properties',
    'transform-es2015-function-name',
    'transform-es2015-arrow-functions',
    'transform-es2015-block-scoping',
    'transform-es2015-classes',
    'transform-es2015-computed-properties',
    'check-es2015-constants',
    'transform-es2015-destructuring',
    ['transform-es2015-modules-commonjs', { strict: false, allowTopLevelThis: true }],
    'transform-es2015-parameters',
    'transform-es2015-shorthand-properties',
    'transform-es2015-spread',
    'transform-es2015-template-literals',
    'transform-es2015-literals',
    'transform-flow-strip-types',
    'transform-object-assign',
    'transform-object-rest-spread',
    'transform-react-display-name',
    'transform-react-jsx',
    'transform-regenerator',
    ['transform-es2015-for-of', { loose: true }],
    require('babel-preset-react-native/transforms/transform-symbol-member'),
  ]),
  env: {
    development: {
      plugins: resolvePlugins(['transform-react-jsx-source']),
    },
  },
  retainLines: true,
  sourceMaps: false,
};
