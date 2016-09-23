$(document).ready(function(){
console.log('hi')

var rawTemp;
var convTemp;
var rawUnit;
var convUnit;

$('#submit').click(function(e){
	rawTemp = $('#input').val();
	rawUnit = $('select').val();
	if(rawUnit === 'f'){
		convTemp = (rawTemp - 32) / 1.8;
		convUnit = 'c';
	} else{
			convTemp = (rawTemp *1.8) + 32;
			convUnit = 'f';
		}
		$('#output').html(convTemp + " " + convUnit);
e.preventDefault()
});

});



