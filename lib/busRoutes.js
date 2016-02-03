var graphs = {};
var allBuses = require('./busesWithRoutes');

graphs.BusGraph = function(){
	this.graph = allBuses;
	console.log("this.graph",this.graph);

	this.addVertex = function(vertex){
		this.graph[vertex] = [];
	};

	this.addEdge = function(edge){
		this.graph[edge.from].push(edge);
	};

	this.hasPathBetween = function(from, to, visiting){
		var visiting = visiting || [];
		if(from == to)
			return visiting;
		for(var index in this.graph[from]){
			var vertex = this.graph[from][index].to;
			return this.hasPathBetween(vertex, to, visiting.concat(this.graph[from][index])); 
		}
	};

	this.hasEdge = function(from, to){
		return this.hasPathBetween(from, to);
	};

	this.allEdgesBetween = function(from, to){
		var path = this.hasPathBetween(from, to);
		var vertices = path.map(function(vertex){
			return vertex.to;
		});
		vertices.unshift(path[0].from);
		return vertices;
	};

	this.busRoute = function(busNumber){
		var routesOfBus = [];
		for(var index in this.graph){
			var vertex = this.graph[index][0];
			if(routesOfBus.length == 0)
			console.log("vertex",vertex.from);
				routesOfBus.push(vertex.from);
			if(busNumber == vertex.edge){
			console.log(busNumber == vertex.edge);
				routesOfBus.push(vertex.to);
			}
		}
		console.log("routesOfBus",routesOfBus);
	};

};

graphs.Edge = function(edge, from, to){
	this.edge = edge;
	this.from = from;
	this.to = to;

};

graphs.BusGraph();
module.exports = graphs;