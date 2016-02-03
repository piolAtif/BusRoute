var graphs = require('../lib/busRoutes');
var assert = require('chai').assert;

 describe("add Edges",function(){
 	it('should be able to determine if an edge is present',function(){
 		var pathBetweenStand = ['YESHWANTHPUR BUS STAND','GOVT SOAP FACTORY','MALLESHWARAM 11TH CR',
 								'MALLESHWARAM 8TH CR','SWASTIK','TELEPHONE EXCHANGE','CORPORATION OFFICE',
 								'K R MARKET','CHAMRAJPET','GANDHIBAZAR CIRCLE','SOUTH END CIRCLE',
 								'JAYANAGAR BUS STAND'];

 		var g = new graphs.BusGraph();
 		g.addVertex('YESHWANTHPUR BUS STAND');
 		g.addVertex('GOVT SOAP FACTORY');
 		g.addVertex('MALLESHWARAM 11TH CR');
 		g.addVertex('MALLESHWARAM 8TH CR');
 		g.addVertex('SWASTIK');
 		g.addVertex('TELEPHONE EXCHANGE');
 		g.addVertex('CORPORATION OFFICE');
 		g.addVertex('K R MARKET');
 		g.addVertex('CHAMRAJPET');
 		g.addVertex('GANDHIBAZAR CIRCLE');
 		g.addVertex('SOUTH END CIRCLE');
 		g.addVertex('JAYANAGAR BUS STAND');

 		var e1 = new graphs.Edge('1','YESHWANTHPUR BUS STAND','GOVT SOAP FACTORY');
 		var e2 = new graphs.Edge('1','GOVT SOAP FACTORY','MALLESHWARAM 11TH CR');
 		var e3 = new graphs.Edge('1','MALLESHWARAM 11TH CR','MALLESHWARAM 8TH CR');
 		var e4 = new graphs.Edge('1','MALLESHWARAM 8TH CR','SWASTIK');
 		var e5 = new graphs.Edge('1','SWASTIK','TELEPHONE EXCHANGE');
 		var e6 = new graphs.Edge('1','TELEPHONE EXCHANGE','CORPORATION OFFICE');
 		var e7 = new graphs.Edge('1','CORPORATION OFFICE','K R MARKET');
 		var e8 = new graphs.Edge('1','K R MARKET','CHAMRAJPET');
 		var e9 = new graphs.Edge('1','CHAMRAJPET','GANDHIBAZAR CIRCLE');
 		var e10 = new graphs.Edge('1','GANDHIBAZAR CIRCLE','SOUTH END CIRCLE');
 		var e11 = new graphs.Edge('1','SOUTH END CIRCLE','JAYANAGAR BUS STAND');

 		g.addEdge(e1);
 		g.addEdge(e2);
 		g.addEdge(e3);
 		g.addEdge(e4);
 		g.addEdge(e5);
 		g.addEdge(e6);
 		g.addEdge(e7);
 		g.addEdge(e8);
 		g.addEdge(e9);
 		g.addEdge(e10);
 		g.addEdge(e11);

 		var path = g.hasEdge('MALLESHWARAM 8TH CR','SWASTIK');
 		assert.equal(e4,path[0]);
 		var path = g.allEdgesBetween('YESHWANTHPUR BUS STAND','JAYANAGAR BUS STAND');
 		assert.deepEqual(pathBetweenStand,path);
 	});
	
	it('should be determine another path between two vertex',function(){
		var pathBetweenStand = ['YESHWANTHPUR BUS STAND','GOVT SOAP FACTORY','MALLESHWARAM 11TH CR',
 								'MALLESHWARAM 8TH CR','SWASTIK','TELEPHONE EXCHANGE','K R CIRCLE','CORPORATION OFFICE',
 								'K R MARKET','CHAMRAJPET','GANDHIBAZAR CIRCLE','SOUTH END CIRCLE',
 								'JAYANAGAR BUS STAND'];

 		var g = new graphs.BusGraph();
 		g.addVertex('YESHWANTHPUR BUS STAND');
 		g.addVertex('GOVT SOAP FACTORY');
 		g.addVertex('MALLESHWARAM 11TH CR');
 		g.addVertex('MALLESHWARAM 8TH CR');
 		g.addVertex('SWASTIK');
 		g.addVertex('K R CIRCLE');
 		g.addVertex('TELEPHONE EXCHANGE');
 		g.addVertex('CORPORATION OFFICE');
 		g.addVertex('K R MARKET');
 		g.addVertex('CHAMRAJPET');
 		g.addVertex('GANDHIBAZAR CIRCLE');
 		g.addVertex('SOUTH END CIRCLE');
 		g.addVertex('JAYANAGAR BUS STAND');

 		var e1 = new graphs.Edge('1A','YESHWANTHPUR BUS STAND','GOVT SOAP FACTORY');
 		var e2 = new graphs.Edge('1A','GOVT SOAP FACTORY','MALLESHWARAM 11TH CR');
 		var e3 = new graphs.Edge('1A','MALLESHWARAM 11TH CR','MALLESHWARAM 8TH CR');
 		var e4 = new graphs.Edge('1A','MALLESHWARAM 8TH CR','SWASTIK');
 		var e5 = new graphs.Edge('1A','SWASTIK','TELEPHONE EXCHANGE');
 		var e6 = new graphs.Edge('1A','TELEPHONE EXCHANGE','K R CIRCLE');
 		var e7 = new graphs.Edge('1A','K R CIRCLE','CORPORATION OFFICE');
 		var e8 = new graphs.Edge('1A','CORPORATION OFFICE','K R MARKET');
 		var e9 = new graphs.Edge('1A','K R MARKET','CHAMRAJPET');
 		var e10 = new graphs.Edge('1A','CHAMRAJPET','GANDHIBAZAR CIRCLE');
 		var e11 = new graphs.Edge('1A','GANDHIBAZAR CIRCLE','SOUTH END CIRCLE');
 		var e12 = new graphs.Edge('1A','SOUTH END CIRCLE','JAYANAGAR BUS STAND');

 		g.addEdge(e1);
 		g.addEdge(e2);
 		g.addEdge(e3);
 		g.addEdge(e4);
 		g.addEdge(e5);
 		g.addEdge(e6);
 		g.addEdge(e7);
 		g.addEdge(e8);
 		g.addEdge(e9);
 		g.addEdge(e10);
 		g.addEdge(e11);
 		g.addEdge(e12);

 		var path = g.hasEdge('MALLESHWARAM 8TH CR','SWASTIK');
 		assert.equal(e4,path[0]);
 		var path = g.allEdgesBetween('YESHWANTHPUR BUS STAND','JAYANAGAR BUS STAND');
 		assert.deepEqual(pathBetweenStand,path);
	});
 });

describe("busRoute",function(){
	var path = function(){
		var g = new graphs.BusGraph();
 		g.addVertex('YESHWANTHPUR BUS STAND');
 		g.addVertex('GOVT SOAP FACTORY');
 		g.addVertex('MALLESHWARAM 11TH CR');
 		g.addVertex('MALLESHWARAM 8TH CR');
 		g.addVertex('SWASTIK');
 		g.addVertex('TELEPHONE EXCHANGE');
 		g.addVertex('CORPORATION OFFICE');
 		g.addVertex('K R MARKET');
 		g.addVertex('CHAMRAJPET');
 		g.addVertex('GANDHIBAZAR CIRCLE');
 		g.addVertex('SOUTH END CIRCLE');
 		g.addVertex('JAYANAGAR BUS STAND');

 		var e1 = new graphs.Edge('1','YESHWANTHPUR BUS STAND','GOVT SOAP FACTORY');
 		var e2 = new graphs.Edge('1','GOVT SOAP FACTORY','MALLESHWARAM 11TH CR');
 		var e3 = new graphs.Edge('1','MALLESHWARAM 11TH CR','MALLESHWARAM 8TH CR');
 		var e4 = new graphs.Edge('1','MALLESHWARAM 8TH CR','SWASTIK');
 		var e5 = new graphs.Edge('1','SWASTIK','TELEPHONE EXCHANGE');
 		var e6 = new graphs.Edge('1','TELEPHONE EXCHANGE','CORPORATION OFFICE');
 		var e7 = new graphs.Edge('1','CORPORATION OFFICE','K R MARKET');
 		var e8 = new graphs.Edge('1','K R MARKET','CHAMRAJPET');
 		var e9 = new graphs.Edge('1','CHAMRAJPET','GANDHIBAZAR CIRCLE');
 		var e10 = new graphs.Edge('1','GANDHIBAZAR CIRCLE','SOUTH END CIRCLE');
 		var e11 = new graphs.Edge('1','SOUTH END CIRCLE','JAYANAGAR BUS STAND');

 		g.addEdge(e1);
 		g.addEdge(e2);
 		g.addEdge(e3);
 		g.addEdge(e4);
 		g.addEdge(e5);
 		g.addEdge(e6);
 		g.addEdge(e7);
 		g.addEdge(e8);
 		g.addEdge(e9);
 		g.addEdge(e10);
 		g.addEdge(e11);	
	};

	var secondPath = function(){
	};

	it('should give all path of given bus',function(){
		var g = new graphs.BusGraph();
		
		g.addVertex('YESHWANTHPUR BUS STAND');
 		g.addVertex('GOVT SOAP FACTORY');
 		g.addVertex('MALLESHWARAM 11TH CR');
 		g.addVertex('MALLESHWARAM 8TH CR');
 		g.addVertex('SWASTIK');
 		g.addVertex('K R CIRCLE');
 		g.addVertex('TELEPHONE EXCHANGE');
 		g.addVertex('CORPORATION OFFICE');
 		g.addVertex('K R MARKET');
 		g.addVertex('CHAMRAJPET');
 		g.addVertex('GANDHIBAZAR CIRCLE');
 		g.addVertex('SOUTH END CIRCLE');
 		g.addVertex('JAYANAGAR BUS STAND');

		var e1 = new graphs.Edge('1A','YESHWANTHPUR BUS STAND','GOVT SOAP FACTORY');
 		var e2 = new graphs.Edge('1A','GOVT SOAP FACTORY','MALLESHWARAM 11TH CR');
 		var e3 = new graphs.Edge('1A','MALLESHWARAM 11TH CR','MALLESHWARAM 8TH CR');
 		var e4 = new graphs.Edge('1A','MALLESHWARAM 8TH CR','SWASTIK');
 		var e5 = new graphs.Edge('1A','SWASTIK','TELEPHONE EXCHANGE');
 		var e6 = new graphs.Edge('1A','TELEPHONE EXCHANGE','K R CIRCLE');
 		var e7 = new graphs.Edge('1A','K R CIRCLE','CORPORATION OFFICE');
 		var e8 = new graphs.Edge('1A','CORPORATION OFFICE','K R MARKET');
 		var e9 = new graphs.Edge('1A','K R MARKET','CHAMRAJPET');
 		var e10 = new graphs.Edge('1A','CHAMRAJPET','GANDHIBAZAR CIRCLE');
 		var e11 = new graphs.Edge('1A','GANDHIBAZAR CIRCLE','SOUTH END CIRCLE');
 		var e12 = new graphs.Edge('1A','SOUTH END CIRCLE','JAYANAGAR BUS STAND');

 		g.addEdge(e1);
 		g.addEdge(e2);
 		g.addEdge(e3);
 		g.addEdge(e4);
 		g.addEdge(e5);
 		g.addEdge(e6);
 		g.addEdge(e7);
 		g.addEdge(e8);
 		g.addEdge(e9);
 		g.addEdge(e10);
 		g.addEdge(e11);
 		g.addEdge(e12);

 		var pathBetweenStand = ['YESHWANTHPUR BUS STAND','GOVT SOAP FACTORY','MALLESHWARAM 11TH CR',
 								'MALLESHWARAM 8TH CR','SWASTIK','TELEPHONE EXCHANGE','CORPORATION OFFICE',
 								'K R MARKET','CHAMRAJPET','GANDHIBAZAR CIRCLE','SOUTH END CIRCLE',
 								'JAYANAGAR BUS STAND'];

 		var route = g.busRoute('1A');
 		assert.deepEqual(pathBetweenStand, route);

	});
});