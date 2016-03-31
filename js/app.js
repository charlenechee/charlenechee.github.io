$(document).ready(function(){
<<<<<<< HEAD
	$(".button-home").click(function(event){
		//var goTop = 300
		event.preventDefault();
		var goTop = $(".home").offset().top;
		//console.log($(".projects").offset().top);
		$("html, body").animate({scrollTop:goTop}, 1000, "easeInOutQuart");

	});

	$(".button-projects").click(function(event){
		//var goTop = 300
		event.preventDefault();
		var goTop = $(".projects").offset().top;
		//console.log($(".projects").offset().top);
		$("html, body").animate({scrollTop:goTop}, 1000, "easeInOutQuart");

	});

	$(".button-about").click(function(event){
		//var goTop = 300
		event.preventDefault();
		var goTop = $(".about").offset().top;
		//console.log($(".projects").offset().top);
		$("html, body").animate({scrollTop:goTop}, 1000, "easeInOutQuart");

	});
=======
	$(".button-projects").click(function(event){
		event.preventDefault();
		var goTopPosition = $(".projects").offset().top;
		$("html, body").animate({ scrollTop:goTopPosition }, 1000, "easeInOutQuart");
	});

	$(".button-home").click(goToSplash);
	$(".button-about").click(goToAbout);
	$(".button-contact").click(goToContact);
});

function goToSplash (event) {
	event.preventDefault();
	var goTopPosition = $(".splash").offset().top;
	$("html, body").animate({ scrollTop:goTopPosition }, 1000, "easeInOutQuart");
}

function goToAbout (event) {
	event.preventDefault();
	var goTopPosition = $(".about").offset().top;
	$("html, body").animate({ scrollTop:goTopPosition }, 1000, "easeInOutQuart");
}
function goToContact (event) {
	event.preventDefault();
	var goTopPosition = $(".contact").offset().top;
	$("html, body").animate({ scrollTop:goTopPosition }, 1000, "easeInOutQuart");
}






>>>>>>> origin/gh-pages

	$(".button-contact").click(function(event){
		//var goTop = 300
		event.preventDefault();
		var goTop = $(".contact").offset().top;
		//console.log($(".projects").offset().top);
		$("html, body").animate({scrollTop:goTop}, 1000, "easeInOutQuart");

<<<<<<< HEAD
	});


	window.sr = ScrollReveal();
	//sr.reveal('.splash');
	sr.reveal('.splash .header',{reset:true});
	sr.reveal('.splash .description', {reset:true, duration:2000, scale: 0.9});
	sr.reveal('.projects', {reset:true, duration:2000, scale: 0.9, },50);
});
=======

>>>>>>> origin/gh-pages
