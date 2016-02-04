var express = require('express');
var route = require('../lib/busRoutes');
var bodyParser = require('body-parser')
var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.get('/',function(req, res){
	res.redirect('/busRoutes.html');
});

app.post('/search_buses',function(req, res){
	var buses = route.hasDirectBusBetween(req.body.f,req.body.t);
	console.log("buses",buses);
	res.send(JSON.stringify(buses));
})

app.post('/search_routes',function(req, res){
	var bus_no = route.routeOfBus(req.body.b);
	res.send(JSON.stringify(bus_no));
})

app.post('/list_of_buses',function(req, res){
	var list = route.listOfBus();
	res.send(JSON.stringify(list));
})

app.post('/list_of_buses_no',function(req, res){
	var busNo = route.listOfBusesNo();
	res.send(JSON.stringify(busNo));
})

module.exports = app;