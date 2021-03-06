/**
 * outputs exactly what went into each chunk
 * 
 * code is taken from the webpack documentation
 * https://github.com/webpack/docs/wiki/plugins#after-optimize-chunk-assetschunks-chunk
 */

var PrintChunksPlugin = function() {};
PrintChunksPlugin.prototype.apply = function(compiler) {
    compiler.plugin('compilation', function(compilation, params) {
        compilation.plugin('after-optimize-chunk-assets', function(chunks) {
            console.log(
                chunks.map(function(c) {
                    return {
                        id: c.id,
                        name: c.name,
                        includes: c.modules.map(function(m) {
                            return m.request;
                        })
                    };
                })
            );
        });
    });
};

module.exports = PrintChunksPlugin;
