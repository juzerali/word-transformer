
/**
 * Class Graph
 */
module.exports = function Graph() {
  var nodes = {};

  /**
   * adds node to this graph
   *
   * @param {Node} node
   */
  this.addNode = function(node) {
    nodes[node.getKey()] = node;
  }

  /**
   * @returns {Node} - node with given key, null if not present
   */
  this.getNode = function(key) {
    return nodes[key];
  }
}