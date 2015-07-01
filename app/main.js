$(document).ready(function(){

	$('.slider_controls-bautton').on('click', function(e) {
		      e.preventDefault();

		      var 
		      	$this = $(this),
		      	container = $this.closest('.slider'),
		      	list = container.find('.slider__content'),
		      	items = container.find('slider__items'),
		      	activeSlide = items.filter('.active'),
		      	nextSlide = activeSlide.next(),
		      	prevslide = activeSlide.prev(),
		      	FirstSlide = items.first(),
		      	LastSlide = items.last(),
		      	sliderOffset = container.offset().left,
		      	reqPos = 0;


		     if ($(this)).hasClass('slider_controls-bautton-next')) {

		           reqPos = nextSlide.offset().left - sliderOffset;

		           nextSlide.addClass('active').siblings().removeClass('active');

		     } 	else {

		     	reqPos = prevSlide.offset().left - sliderOffset;

		     	prevSlide.addClass('active').siblings().removeClass('active');
		     }

		     list.css('left', '-=' + reqPos +'px');

		 });

});
