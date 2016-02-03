var fs = require('fs');
var busesWithNumber = fs.readFileSync('../textFile/routes.txt','utf8');
var allBuses = busesWithNumber.split('\r\n');

exports.busRoutes = allBuses.map(function(route){
	var busNumberWithRoute = {};
	var bus = route.split(':');
	busNumberWithRoute[bus[0]] = [];
	busNumberWithRoute[bus[0]].push(bus[1]);
	return busNumberWithRoute;
})