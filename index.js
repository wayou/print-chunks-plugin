/**
 * outputs exactly what went into each chunk
 *
 * code is taken from the webpack documentation
 * https://github.com/webpack/docs/wiki/plugins#after-optimize-chunk-assetschunks-chunk
 */

var util = require("util");

var PrintChunksPlugin = function (options = {}) {
  this.options = options;
};
PrintChunksPlugin.prototype.apply = function (compiler) {
  var showFull = this.options.showFull;
  compiler.plugin("compilation", function (compilation, params) {
    compilation.plugin("after-optimize-chunk-assets", function (chunks) {
      var items = chunks.map(function (c) {
        return {
          id: c.id,
          name: c.name,
          includes: c.modules.map(function (m) {
            return m.request;
          }),
        };
      });
      console.log(
        showFull ? util.inspect(items, { maxArrayLength: null }) : items
      );
    });
  });
};

module.exports = PrintChunksPlugin;
