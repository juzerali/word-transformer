// dependencies
var fs = require('fs');

/**
 * Class Words
 * @param {String} filename
 */
module.exports = function Words(filename) {
  this.words = [];

  var content = fs.readFileSync(filename).toString();
  this.words = content.split('\n');

  /**
   * Reads the file and returns list of words present. Words should be separated by newline.
   * 
   * @private
   * returns {Array} array of words in the dictionary
   */
  var getWordsList = function() {
    return words;
  }

  /**
   * Returns a map of available words.
   * 
   * @public
   * returns {*} value with which to initialize the hash
   */
  this.getWordsHash = function(initialize) {
    var hash = {};
    this.words.forEach(function(word) {
      hash[word] = initialize;
    });
    return hash;
  }
}