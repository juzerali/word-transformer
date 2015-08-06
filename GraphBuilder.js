var NodeFactory = require('./NodeFactory.js');
var Graph = require('./Graph.js');

/**
 * Builder for graph. Takes filename and creates a graph instance 
 * @param {Words} instance of Words class
 */
module.exports = function WordsGraphBuilder(words) {
  var self = this;
  var wordsHash = words.getWordsHash(true);
  var nodeFactory = new NodeFactory(wordsHash);

  /**
   * Creates and returns a graph
   *
   * @returns {Graph}
   */
  this.getGraph = function() {
    var graph = new Graph();
    Object.keys(wordsHash).forEach(function(word) {
      var node = nodeFactory.getNode(word);
      graph.addNode(node);
    });
    return graph;
  }
}