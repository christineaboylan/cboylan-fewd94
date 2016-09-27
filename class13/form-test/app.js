$(document).ready(function () {

	$('#myForm').submit(function(){
		var the_input = $('#name-input').val()
	$('#target').html(the_input);
	event.preventDefault();

	});

})
