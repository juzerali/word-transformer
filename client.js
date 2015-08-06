// dependencies
var Transformer = require('./TransformerFacade.js');


// Filename of dictionary, there is a small dictionary file at ./words.txt
var filename = '/usr/share/dict/cracklib-small';
var filename = './words.txt';

var transformer = new Transformer(filename);

// test it here
var path = transformer.transform('cap', 'ate');
console.log(path);








