var graphs = require('../lib/busRoutes');
var assert = require('chai').assert;

describe("busRoutes",function(){
	it("should be give the all bus numbers between two places",function(){
		var g = new graphs.BusGraph();
		var bus = g.hasDirectBusBetween('YESHWANTHPUR BUS STAND','JAYANAGAR BUS STAND');
		assert.equal(4,bus.length);
		assert.deepEqual(['1','1A','23','369K'],bus);
	})
	it("should be give the path of a specific bus",function(){
		var g = new graphs.BusGraph();
		var path = g.routeOfBus('1A');
		var busRoute = [ 'YESHWANTHPUR BUS STAND','GOVT SOAP FACTORY','MALLESWARAM 11TH CR.','MALLESWARAM 8TH CR.',
       					'SWASTIK','TELEPHONE EXCHANGE','K R CIRCLE','CORPORATION OFFICE','K R MARKET',
       					'CHAMRAJPET','GANDHIBAZAR CIRCLE','SOUTH END CIRCLE','JAYANAGAR BUS STAND','JAYANAGAR 9TH BLK' 
       					];

		assert.deepEqual(busRoute,path);
		assert.equal(14,path.length);
	})
});