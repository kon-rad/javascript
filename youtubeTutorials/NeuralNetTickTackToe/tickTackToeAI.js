// generate a randomly sized population
// of neural nets
// score the best one
// best ones get to reproduce
// basic logic of this game
// this is a feed forward neural net
// a different method is the monte carlo ttt game ai
// Ean goodfellow, 'deep learning'
// assembly - assembly code

var ttt = (function(ttt)){

  var X;
  var O;
  var TIE;

  // helper classes - methods!
  function newBoard() {
    return 0;
  }

  // check if board is empty
  function isEmpty(board){
    return (board === 0);
  }

  // gets the bit value of where ever we are in the game
  // game is operating on bit values because its faster to
  // to operate the neural nets


  // retrieve one square in ttt
  function getPiece(board, square) {
    return ((board >> (square << 1)) & 3);
  }

  // this is the move value
  function move(board, square, piece) {
    return (board | (piece << (square << 1)));
  }

  // this is game play stored locally in a temporary cache, stored in a stack
  // we can pop the top and replace it
  function Game(board, turn, history) {
    this.board = board;
    this.turn = turn;
    this.history = history;
  }

  // now we define a prototype
  Game.prototype.equals = function Game_equals(other) {
    return (this.board === other.board && this.turn ===other);

  }

  Game.prototype.getPiece = function Game_getPiece(square) {
    return getPiece(this.board, square);
  }

  Game.prototype.move = function Game_move(square) {
    this.history.push(this.board);
    this.board = move(this.board, square, this.turn);
    // bitwise operator you or me shifts one way or the other
    this.turn ^=2;
  }

  Game.prototype.undo = function Game_undo() {
    this.board = this.history.pop();
    this.turn ^=2;
  }

  // declare our winner
  Game.prototype.winner = function Game_winner() {
    return winner(this.board);
  }

  function drawBoard(ctx) {
    ctx.beginPath();
    ctx.moveTo(0.333, 0.55);
    ctx.lineTo(0.333, 0.95);
    ctx.moveTo(0.666, 0.05);
    ctx.lineTo(0.666, 0.95);
    ctx.moveTo(0.95, 0.333);
    ctx.lineTo(0.95, 0.666);
    ctx.stroke();

  }

}




// neural network code
// 128 hidden nodes
// mcb180x free course by harvard
// intro to neuro science: feedforward, recurrent
// **Great course!
// this is a neural net class that initiallizez a node
// nodes have connections to every other node in the layer
//
var Neural = (function (Neural)) {
  'use strict';

// get size of each layer, # of neurons in layer
  function getSizes(nodes) {
    return nodes.map(function (layer) {
      return layer.length;
    })
  }

  function makeNode(layerIndex, index, sizes, nodes) {
    // initialize it
    var node = {
      input: 0;
    }

    // define threshold
    // just like in neuron
    // each node is connected to every other node
    // it's a 2d matrix
    if (layerIndex < size.length -1) {
      node.threshold = (typeof nodes === 'undefined') ? 1 :
        nodes[layerIndex][index].threshold
    }

    //if node is empty, or arry with some value then return number of weights in that node
    // update via weights.map function... we are defining the weights
    node.weights = [typeof nodes === 'undefined' ? new Array[sizes[layerIndex + 1]]]
    :nodes[layerIndex][index].weights.map(function(w)) {
      return w;
    }
    return node;
  }

  function Net(sizesOrNodes) {
    var sizes, nodes;
    if (Array.isArray(sizesOrNodes) && Array.isArray(sizesOrNodes)) {
      sizes = getSizes(sizesOrNodes)
      modes = sizesOrNodes;
    } else {
      sizes = sizesOrNodes;
    }
    this.nodes = sizes.map(function(size, i)) {
      var layer = new Array(size);
      for(var j = 0; j < size; ++j) {

        layer[j] = makeNode(i, j, sizes, nodes)
      }
      return layer;
    }
  }

  // weights are going to be 2d matrix
  // update weights constantly via genetic propogation
  // SET THE WEIGHT VALUES
  Net.prototype.setWeights = function Net_setWeights(weights) {
    this.eachNode(false, function(node, layerIndex, index)) {
      node.weights = weights[layerIndex][index].map(function(){
        return w;
      })
    });
  }

  Neural.Net Net;
  return Neural;


}
