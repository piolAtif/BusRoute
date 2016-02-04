var showBus = function(buses){
	$('.buses').empty();
	buses.forEach(function(bus){
		$('.buses').append('<div class = "bus_no">'+bus+'</div>');
	})
};

var showList = function(listOfBuses){
	$('.source').empty();
	$('.destination').empty();
	listOfBuses.forEach(function(bus){
		$('.source').append('<option>'+bus+'</option>');
		$('.destination').append('<option>'+bus+'</option>');

	})
};

var showListOfBusNo = function(listOfBusesNo){
	$('.bus_no').empty();
	listOfBusesNo.forEach(function(busNo){
		$('.bus_no').append('<option>'+busNo+'</option>');
	})
}

var search = function(){
	var from = $('.source').val();
	var to = $('.destination').val();
	$.post("search_buses",{f:from,t:to},function(data){
		showBus(JSON.parse(data));
	});
};

var searchRoute = function(){
	var bus = $('.bus_no').val();
	$.post("search_routes",{b:bus},function(data){
		showBus(JSON.parse(data));
	})
}

var createList = function(){
	$.post('list_of_buses',function(data){
		showList(JSON.parse(data));
	})
}

var createBusNoList = function(){
	$.post('list_of_buses_no',function(data){
		showListOfBusNo(JSON.parse(data));
	})
}

window.onload = function(){
	createList();
	createBusNoList();
}