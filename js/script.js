

$(function() {

	

	
	var menu_button = $( ".menuButton" );
	var nav_buttons = $( ".mainNav li" );
	var nav_list = $( ".mainNavUl" );

	var menu_visible = false;
	nav_list.hide();

	menu_button.on( "click", function(e){

		if( menu_visible ){
			nav_list.slideUp( "slow" );
			menu_visible = false;
		}
		else{
			nav_list.slideDown( "slow " );
			menu_visible = true;
		}

		e.preventDefault();
	});

	var programs_button = $( ".programButton" );
	var programs_list = $( ".footerHat ul" );
	var programs_visible = false;
	programs_list.hide();
	
	var newsletter = $( ".newsletter" );
	var form = $( ".nlforms" );

	var form_visible = false;
	form.hide();
	
	programs_button.on( "click", function(ep){

		if( menu_visible ){
			nav_list.slideUp( "slow" );
			menu_visible = false;
		}

		if( form_visible ){
			form.slideUp( "slow" );
			form_visible = false;
			$(".newsletter").children(".overlay").css( "background", "none" );
		}

		if( programs_visible ){
			programs_list.slideUp( "slow" );
			programs_visible = false;
			$(this).children(".overlay").css( "background", "none" );
		}
		else{
			programs_list.slideDown( "slow" );
			programs_visible = true;
			$(this).children(".overlay").css( "background", "rgba(0,0,0, 0.5)" );
		}

		ep.preventDefault();
	});

	

	newsletter.on( "click", function(en){

		if( menu_visible ){
			nav_list.slideUp( "slow" );
			menu_visible = false;
		}

		if( programs_visible ){
			programs_list.slideUp( "slow" );
			programs_visible = false;
			$(".programButton").children(".overlay").css( "background", "none" );
		}

		if( form_visible ){
			form.slideUp( "slow" );
			form_visible = false;
			$(this).children(".overlay").css( "background", "none" );
		}
		else{
			form.slideDown( "slow" );
			form_visible = true;
			$(this).children(".overlay").css( "background", "rgba(0,0,0, 0.5)" );
		}

		en.preventDefault();
		console.log( "hi");
	});


});