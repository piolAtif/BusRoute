var showBus = function(buses){
	$('.buses').empty();
	buses.forEach(function(bus){
		$('.buses').append('<div class = "bus_no">'+bus+'</div>');
	})
};

var search = function(){
	var from = document.querySelector('input[name = "from"]').value;
	var to = document.querySelector('input[name = "to"]').value;
	$.post("search_buses",{f:from,t:to},function(data){
		showBus(JSON.parse(data));
	});
};

var searchRoute = function(){
	var bus = document.querySelector('input[name = "bus_no"]').value;
	$.post("search_routes",{b:bus},function(data){
		showBus(JSON.parse(data));
	})
}