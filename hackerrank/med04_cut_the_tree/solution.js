function Node(data) {
	this.data = data;
	this.parent = null;
	this.children = [];
}

function Tree(data) {
	var node = new Node(data);
	this._root = node;
}

function processData(input) {
    //Enter your code here
    var inputArr = input.split("\n");
    var num_of_verticies = parseInt(inputArr[0]);
    console.log("num of ver: " + num_of_verticies);
    var data_arr = inputArr[1].split(" ");
    console.log("data arr = " + data_arr);
    var edge_arr = inputArr.slice(2);
    console.log("edge arr = " + edge_arr);


	console.log("end");
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});