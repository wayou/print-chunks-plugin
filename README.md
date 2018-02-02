# print-chunks-plugin

outputs exactly what went into each chunk

the code is taken from the [webpack documentation](https://github.com/webpack/docs/wiki/plugins#after-optimize-chunk-assetschunks-chunk)


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
