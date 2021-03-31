const resolver = require('babel-plugin-module-resolver');

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    [
      'module-resolver',
      {
        resolvePath(...args) {
          const path = resolver.resolvePath(...args);
          if (!path) return path;
          const extension = (args[1].match(/\.\w+$/) || [])[0];
          return extension && path.endsWith(extension) ? path : `${path}${extension}`;
        },
        root: 'src',
        stripExtensions: [],
      },
    ],
  ],
};
