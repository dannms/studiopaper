jQuery(document).ready(function($){
	var MQL = 1170;

	if($(window).width() > MQL) {
		var headerHeight = $('.header').height();
		$(window).on('scroll',
		{
	        previousTop: 0
	    }, 
	    function () {
		    var currentTop = $(window).scrollTop();
		    if (currentTop < this.previousTop ) {
		    	if (currentTop > 0 && $('.header').hasClass('is-fixed')) {
		    		$('.header').addClass('is-visible');
		    	} else {
		    		$('.header').removeClass('is-visible is-fixed');
		    	}
		    } else {
		    	$('.header').removeClass('is-visible');
		    	if( currentTop > headerHeight && !$('.header').hasClass('is-fixed')) $('.header').addClass('is-fixed');
		    }
		    this.previousTop = currentTop;
		});
	}

	$('.navigation-toggle').on('click', function(){
		$('.menu-icon').toggleClass('is-clicked'); 
		$('.header').toggleClass('menu-is-open');
		
		if( $('.navigation').hasClass('is-visible') ) {
			$('.navigation').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.navigation').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}
	});
});