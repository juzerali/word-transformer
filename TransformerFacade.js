// dependencies
var Words = require('./Words.js');
var GraphBuilder = require('./GraphBuilder.js');
var Graph = require('./Graph.js');
var Transformer = require('./Transformer.js');

module.exports = function TransformerFacade(filename) {
  var words = new Words(filename);
  var graphBuilder = new GraphBuilder(words);
  var graph = graphBuilder.getGraph();
  var transformer = new Transformer(graph);

  this.transform = function(w1, w2) {
    return transformer.transform(w1, w2);
  }
}