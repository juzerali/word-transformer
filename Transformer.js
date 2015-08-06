/**
 * Class Transformer
 * 
 * Algorithm for getting path from one word to another
 *
 * @param {Graph} the words graph
 */
module.exports = function Transformer(graph) {
  var queue, counter;

  /**
   * Tranform algorithm wrapper for validation and initialization
   * 
   * @public
   *
   * @param {String} word1 - the source word
   * @param {String} word2 - the destination word
   */
  this.transform = function(word1, word2) {
    if(!graph.getNode(word1)) throw new Error(word1 + ' not in dictionary');
    if(!graph.getNode(word2)) throw new Error(word2 + ' not in dictionary');

    // base case, both words are same
    if(word1 == word2) return [word1];

    // Initialize queue, this will assist in breadth first search
    queue = [graph.getNode(word1)];

    // Keeping track of nodes visited with its distance from source word
    counter = {};
    counter[word1] = 0;
    return this._transform(word1, word2);
  }

  /**
   * The tranform algorithm
   * 
   * @private
   *
   * @param {String} word1 - the source word
   * @param {String} word2 - the destination word
   */
  this._transform = function(word1, word2) {
    if(!queue.length) return [];

    var node = queue.shift();
    counter[node.getKey()]++;

    var nodes = node.getNodes();
    
    for (var i = nodes.length - 1; i >= 0; i--) {
      var n = graph.getNode(nodes[i]);
      if(!counter[n.getKey()]) {
        counter[n.getKey()] = counter[node.getKey()];
        queue.push(n);
      } else {
        counter[n.getKey()] = Math.min(counter[node.getKey()]+1, counter[n.getKey()]); // Just in case
      }

      if(n.getKey() == word2) {
        counter[n.getKey()]++;
        return this.trace(n);
      }
    };
    return this._transform(word1, word2);
  }

  /**
   * Traces back the destination word to source word
   * 
   * @private
   *
   * @param {String} word1 - the source word
   * @param {String} word2 - the destination word
   */
  this.trace = function(node) {
    // Reached dead end
    if(!counter[node.getKey()]) return false;

    // Base case, found source word
    if(counter[node.getKey()] == 1) return [node.getKey()];

    var nodes = node.getNodes();
    for (var i = nodes.length - 1; i >= 0; i--) {
      var n = graph.getNode(nodes[i]);

      if(counter[n.getKey()] === counter[node.getKey()]-1) {
        // Making progress, continue
        var result = this.trace(n);
        if(result) {
          // Result is not falsy, that means coming from source, append this and return;
          result.push(node.getKey());
          return result;
        }
      }

      // Fell through if block, that means no node found that is making progress or was in the path, return
    }
  }
}