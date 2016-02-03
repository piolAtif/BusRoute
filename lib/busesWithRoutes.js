var fs = require('fs');
var busesWithNumber = fs.readFileSync('./textFile/routes.txt','utf8');

var allBuses = busesWithNumber.split('\r\n');

exports.busRoutes = allBuses.map(function(route){
	var busNumberWithRoute = {};
	var bus = route.split(':');
	busNumberWithRoute[bus[0]] = bus[1].split(',');
	return busNumberWithRoute;
})

