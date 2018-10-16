$(document).ready(function() {

	$('.carousel').carousel({
		interval: 3000
	});

	$("dropdown-item").change(function(e) {
		e.preventDefault();

	});
	
	// Drop Down Date with bootstrap 4
	$('#datepicker').datepicker({
		uiLibrary: 'bootstrap4'
	});

	$( ".date" ).datepicker({
		container: '.container',
		format: "dd-mm-yyyy",
		autoclose: true,
		todayHighlight: true
	  });
	  
});