(function(){

	var total = 0;
	var count = 0;

	var price = 0;

	// Find Price Nodes
	$.each($('.l2 .price'), function(){
		price = parseInt($(this).text().replace(/\D/g, ''));
		total = total + price;
		count++;
	});

	alert(Math.round(total / count));

})();