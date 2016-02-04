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
module.exports = app;