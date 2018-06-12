$(document).ready(function(e){
		$("#navbar-toggle").click(function(){
			$("#main-nav").slideToggle(700);
			e.preventDefault();
		});
		
	});
