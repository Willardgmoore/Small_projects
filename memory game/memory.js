$(document).ready(function(){
	star = $('.star');
	number = $('.number');

	number.click(function(){
		var lk = $(this).find('.num');
		console.log(lk);
	})

	star.click(function(){
		number.removeClass('hide');
		star.hide();
		number.show();
	})

	number.click(function(){
		number.hide();
		star.show();
	})
});

