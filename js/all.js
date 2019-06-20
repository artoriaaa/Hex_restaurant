$(document).ready(function($) {

	//漢堡選單 
	$('.hambur').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('body').toggleClass('active');

	});

	//至頂按鈕
	$('.top').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('html,body').animate({
			scrollTop: 0},
			860);
	});

	//sidebar
	$('.category a').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		
	});

	//購物車愛心
	$('.loveBox').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		/* var $heart = $('.heartBox>img');
		    if ($heart.attr('src','assets/heart_w.svg')) {
		        $heart.attr('src','assets/heart_line.svg');
		    } 
		    else {
		       // $listSort.attr('colspan', 6);
		    }*/
		$(this).find('img').attr('src','assets/heart_w.svg')


	});




});