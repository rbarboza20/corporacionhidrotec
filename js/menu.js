//$=jQuery.noConflict();

jQuery(document).ready(function(){
	var altura=jQuery('nav').offset().top;
	jQuery(window).on('scroll',function(){
		 if(jQuery(window).scrollTop()>50){
			 jQuery('nav').addClass('shrink-me');
		 }else {
			 	jQuery('nav').removeClass('shrink-me	');

		 }
		 //
		 // alert(1);
		 if(jQuery(window).scrollTop()>innerHeight){
			 jQuery('.left-menu-me').addClass('left-menu-me-fixed');
		 }else {
			 	jQuery('.left-menu-me').removeClass('left-menu-me-fixed	');

		 }
		 //
	})
});

jQuery(document).ready(function(){
	var imgItems = jQuery('.slider li').length; // Numero de Slides
	var imgPos = 1;

	// Agregando paginacion --
	for(i = 1; i <= imgItems; i++){
		jQuery('.pagination').append('<li><span class="far fa-circle" aria-hidden="true"></span></li>');
	}
	//------------------------

	jQuery('.slider li').hide(); // Ocultanos todos los slides
	jQuery('.slider li:first').show(); // Mostramos el primer slide
	jQuery('.pagination li:first').css({'color': '#CD6E2E'}); // Damos estilos al primer item de la paginacion

	// Ejecutamos todas las funciones
	jQuery('.pagination li').click(pagination);
	jQuery('.right span').click(nextSlider);
	jQuery('.left span').click(prevSlider);


	setInterval(function(){
		nextSlider();
	}, 5000);

	// FUNCIONES =========================================================

	function pagination(){
		var paginationPos = jQuery(this).index() + 1; // Posicion de la paginacion seleccionada

		jQuery('.slider li').hide(); // Ocultamos todos los slides
		jQuery('.slider li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado

		// Dandole estilos a la paginacion seleccionada
		jQuery('.pagination li').css({'color': '#858585'});
		jQuery(this).css({'color': '#CD6E2E'});

		imgPos = paginationPos;

	}

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;}
		else {imgPos++;}

		jQuery('.pagination li').css({'color': '#858585'});
		jQuery('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		jQuery('.slider li').hide(); // Ocultamos todos los slides
		jQuery('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;}
		else {imgPos--;}

		jQuery('.pagination li').css({'color': '#858585'});
		jQuery('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		jQuery('.slider li').hide(); // Ocultamos todos los slides
		jQuery('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
	}

});
