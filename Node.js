/**
 * Class Node
 */
module.exports = function Node(key) {
  var key = key;
  var nodes = [];

  /**
   * Connects another node with this one
   *
   * @param {String} - key
   */
  this.connect = function(key) {
    nodes.push(key);
  }

  /**
   * Tells if node is connected to this one
   *
   * @param {Node} node which is enquired
   */
  this.isConnectedTo = function(node) {
    return nodes.indexOf(node.getKey()) > -1;
  }

  /**
   * @returns {String} - the key representing this node
   */
  this.getKey = function() {
    return key;
  }

  /**
   * Returns a copy array of node keys connected to this server
   *
   * @returns {Array}
   */
  this.getNodes = function() {
    // Send a copy so that client can't modify the internal state
    return nodes.map(function(node) { return node; });
  }
}