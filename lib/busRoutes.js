var graphs = {};
var allBuses = require('./busesWithRoutes');

graphs.BusGraph = function(){
	this.graph = allBuses.busRoutes;
	this.hasPathBetween = function(from, to, visiting){
	};

	this.hasDirectBusBetween = function(from, to){
		var busesNo = [];
		var path = this.graph.filter(function(bus){
			for(var route in bus){
				if(bus[route].indexOf(from) != -1 && bus[route].indexOf(to) != -1){
					busesNo.push(route);
				}
			}
		})
		return busesNo;
	};

	this.routeOfBus = function(bus){
		var route;
		var path = this.graph.filter(function(buses){
			for(var index in buses){
				if(index == bus){
					route = buses[index];
				}
			}
		})
		return route;
	};
};

graphs.BusGraph();
module.exports = graphs;