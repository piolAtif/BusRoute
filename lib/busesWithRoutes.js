var fs = require('fs');
var lodash = require('lodash');
var busesWithNumber = fs.readFileSync('./textFile/routes.txt','utf8');

var allBuses = busesWithNumber.split('\r\n');

exports.busRoutes = allBuses.map(function(route){
	var busNumberWithRoute = {};
	var bus = route.split(':');
	busNumberWithRoute[bus[0]] = bus[1].split(',');
	return busNumberWithRoute;
})

exports.listOfPlaces = function(){
	var data = [];
	var places = allBuses.forEach(function(route){
		var bus = route.split(':');
		data.push(bus[1].split(','));
	})	
	var data = lodash.flatten(data);
	return lodash.uniq(data);	
};

exports.busesOfOnePlace = function(placeName){
	var buses = [];
	exports.busRoutes.forEach(function(route){
		for(var index in route){
			var path = route[index].some(function(bus){
				if(bus == placeName){
					return bus == placeName;	
				}
			})
			if(path)
				buses.push(index);
		}
	})
	return buses;	
}