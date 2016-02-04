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
