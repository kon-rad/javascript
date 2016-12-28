// Siraj Raval 'How to Make an Asteroids Game Bot (LIVE)'
// Created 12/28/16

// github.io ... asteroids link
//5 min Q and A
// Learn scikit, tensor flow
// archive.org for science papers

// Neuro Evolution is the technique we're using
// modifies actual structure of network: adds neurons and conections
// it even modifies the learning rate, this differentiates it from
// regular back progagation
// this is a type of reinforcement learning
// this is a game, things are random, sparse feedback is available

// create neuroevolution object
// create neuron
// layer
// network
// genome (another word for being in generation)
// generations
// these things get bigger at each step
// a type of reinforcement learning

var Neuroevolution = function(options) {
  var self = this;
  self.options = [

    // sigmoid function - run in EVERY neuron
    activation: function(a) {
      ap = (-a)/1;
      return (1/(1 + Math.exp(ap)))// converts every number into a probability
    }
    randomClamped:function() {
      return Math.random() * 2 - 1
    },
    population:50,
    elitism:0.2,
    raondomBehavior:0.2,
    mutationRate:0.1,
    mutationRange:0.5,
    network[1,[1],1],// this is a three layer feed forward neural network
    historic: 0,
    lowHistoric: false,
    scoreSort: -1,
    nbChild:1
  ]

  // initalize set variables to have options available
  self.set = functions(options) {
    for(var i in options) {
      if(this.option[i] != undefined) {
        self.options[i] = options[i];
      }
    }
  }

  var Neuron = function() {
    this.value = 0;
    this.weights = [];
  }

  // randomly initialize weight values,
  // we want them to be distinct
  Neuron.prototype.populate = function(nb) {//number of weights that we want
    // generally we randomly initialize our weights
    // research is done to see if this is most efficient
    this.weights = []
    for(var i = 0; i < nb; i++) {
      this.weights.push(self.options.randomClamped)
    }
  }

  // Layer
  // has an ID and a number of neurons
  var Layer = function(index) {
    this.id = index || 0
    this.neurons = [];
  }

  Layer.prototype.populate = function(nbNeurons, nbInputs) {
    this.neurons = [];
    for(var i = 0; nbNeuron; i++) {
      var n = new Neuron();
      n.populate(nbInputs)
      this.neurons.push(n)
    }
  }

  //Network
  var Network = function() {
    this.layers = [];
  }

  //perceptron is another word for neuron
  // watch west world "show"
  Network.prototype.perceptronGeneration = function(input, hiddens, output) {
    // input layer
    var index = 0;
    var previousNeurons = 0;
    var layer = new Layer(index)
    layer.populate(input, previousNeurons);
    this.layers.push(layer);
    index++;
    // hidden layer
    for (var i in hiddens) {
      var layer = new Layer(index)
      layer.populate(hiddens[i], previousNeurons);
      previoiusNeurons = hiddens[i]
      this.layers.push(layer)
      index++;
    }
    var layer = new Layer(index)
    layer.populate(output, previousNeurons)
    this.layers.push(layer)
  }

  // computation step!!!
  Network.prototype.compute = functions(inputs) {

    for(var i in inputs) {
      if(this.layers[0] && this.layers[0].neurons[i]) {
        this.layers[0].neurons[i].value = inputs[i];
      }
    }

    // activation function step
    var prevLayer = this.layers[0];
    // iterate through neurons in a layer
    for (var i = 1; i < this.layer.length; i++) {

      var sum = 0;
      for (var j in this.layers[i].neurons) {
        sum += prevLayer.neurons[k].value * this.layers[i].neurons[j].weights[k];
      }
      this.layers[i].neurons[j].value = self.options.activation(sum);
    }

    prevLayer = this.layer[i]
  }

  //Genome (another word for living being in our generation)
  var Genome = function(score, network) {
    this.score = score || 0;
    this.network = network || score;
  }

  // Generation (a list of genomes)
  var Generation = function() {
    this.genome = [];
  }

  // add genome to current generation
  Generation.prototype.addGenome = function(genome) {


    for (var i = 0; i < this.genomes.length; i++) {
      if(self.options < 0) {
        if(genome.score > this.genomes[i].score) {
          break;
        }

      }else {
        if(genome.score < this.genomes[i].score) {
          break;
        }
      }
    }
    // add our genomes
    this.genomes.splice(i, 0, geonome)
  }

  // time to breed
  Generation.prototype.breed = function(g1, g2, nbChilds) {

    var datas = [];
    for(var nb = 0; nb < nbChilds; nb++) {
      var data = JSON.parse(JSON.stringify(g1))
      for (var i in g2.network.weights) {

        if(Mat.random() <= 0.5) {
          data.network.weights[i] = g2.network.weights[i];
        }
      }
      // add some mutation to each weights
      for(var i in data.network.weights) {
        if(Math.random()) <= self.options.mutationRate) {
          data.network.weights[i] += Math.random() * self.options.mutationRange * 2 - self.option.MutationRange;
        }
      }
      datas.push(data);
    }
    // return list of breeded genomes, more robust neural networks
    return datas;
  }

}
