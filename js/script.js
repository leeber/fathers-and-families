

$(function() {


	console.log($);

	
	var menu_button = $( ".menuButton" );
	var nav_buttons = $( ".mainNav li" );
	var nav_list = $( ".mainNavUl" );

	var menu_visible = false;
	nav_list.hide();


	menu_button.on( "mousedown", function(e){

		if( menu_visible ){
			nav_list.slideUp( "slow" );
			menu_visible = false;
		}
		else{
			nav_list.slideDown( "slow " );
			menu_visible = true;
		}


	});

	var programs_button = $( ".programButton" );
	var programs_list = $( ".footerHat ul" );

	var programs_visible = false;
	programs_list.hide();

	programs_button.on( "mousedown", function(ep){

		if( menu_visible ){
			nav_list.slideUp( "slow" );
			menu_visible = false;
		}

		if( programs_visible ){
			programs_list.slideDown( "slow" );
			programs_visible = false;
		}
		else{
			programs_list.slideUp( "slow" );
			programs_visible = true;
		}

	});

	var newsletter = $( ".newsletter" );
	var form = $( ".nlforms" );

	var form_visible = false;
	form.hide();

	newsletter.on( "mousedown", function(en){

		if( menu_visible ){
			nav_list.slideUp( "slow" );
			menu_visible = false;
		}

		if( form_visible ){
			form.slideUp( "slow" );
			form_visible = false;
		}
		else{
			form.slideDown( "slow" );
			form_visible = true;
		}
	});

});









