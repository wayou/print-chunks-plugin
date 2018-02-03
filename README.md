# print-chunks-plugin

[![npm package](https://img.shields.io/npm/v/print-chunks-plugin.svg)](https://www.npmjs.com/package/print-chunks-plugin)
[![npm package](https://img.shields.io/npm/dm/print-chunks-plugin.svg)](https://www.npmjs.com/package/print-chunks-plugin)

Outputs exactly what went into each chunk

The code is taken from the [webpack documentation](https://github.com/webpack/docs/wiki/plugins#after-optimize-chunk-assetschunks-chunk)


I find this so useful for debugging. But there's no package in the npm.


### install

```
npm i -D print-chunks-plugin
```

### usage

```js
var PrintChunksPlugin = require('print-chunks-plugin');
var webpackConfig = {
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [new PrintChunksPlugin()]
};
```
