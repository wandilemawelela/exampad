
/*-----------------------------------------------------------------------------------*/
/*	PRELOADER
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function () {
	//Preloader
	setTimeout("jQuery('#preloader').animate({'opacity' : '0'},300,function(){jQuery('#preloader').hide()})",1000);
	setTimeout("jQuery('.preloader_hide, .selector_open').animate({'opacity' : '1'},500)",1000);
	setTimeout("jQuery('footer').animate({'opacity' : '1'},500)",2000);

});
