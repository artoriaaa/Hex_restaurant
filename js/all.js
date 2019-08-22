 $(document).ready(function($) {

//漢堡選單 
	$('.hambur').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('body').toggleClass('toggle');

	});

//至頂按鈕
	$('.top').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('html,body').animate({
			scrollTop: 0},
			860);
	});

//sidebar清單
	$('.category li').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		if($(this).hasClass('c1')){
			
			$('.c_all_products').css('display','block');
			$('.c_all_products').siblings('.itemList').css('display','none');

		}
		if($(this).hasClass('c2')){
			
			$('.c_franch_fries').css('display','block');
			$('.c_franch_fries').siblings('.itemList').css('display','none');

		}
		if($(this).hasClass('c3')){
			
			$('.c_instant').css('display','block');
			$('.c_instant').siblings('.itemList').css('display','none');

		}
		if($(this).hasClass('c4')){

			$('.c_hamburgers').css('display','block');
			$('.c_hamburgers').siblings('.itemList').css('display','none');
		}
	});

//購物車愛心
   	$('.loveBox').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		//$(this).find('img').attr('src','assets/heart_w.svg');
		$(this).toggleClass('heart_w');
	});

//購物車數量
	var items=[];

	$('.addToCart').click(function(event) {
		event.preventDefault();
		if($(this).text()=='加入購物車'){
			items.push(1);
			$('.cartNum').css('display', 'block');
			$(this).text('移除項目');
			$(this).toggleClass('inCart');
		}else if($(this).text()=='移除項目'){
			items.splice(0,1);
			$(this).text('加入購物車');
			$(this).toggleClass('inCart');
		}
		
		
		$('.cartNum').text(items.length);

	});

//sidebar 滑動
	$(window).scroll(function(){
	    //scrollTop=body-window，space是預留空間
	    var space=240;
	    last=$("body").height()-$(window).height()-space

	    if(window.matchMedia('(min-width: 569px)').matches){
	     	if($(window).scrollTop()<last && $(window).scrollTop()>420){
	       //還沒捲到到底部
		        $('.sidebar').css({
					position: 'fixed', 
					top:'20px'
				});
		    }else if($(window).scrollTop()>=last){//表示已捲動到底部範圍、侧欄固定
			    $('.sidebar').css({
					position: 'absolute',
					bottom:'80px',
					top:'inherit'
				});
		     }else{
		     	 $('.sidebar').css({
					position: 'absolute',
					top:'inherit',
					bottom:'inherit'
				});
		     }
		 }else{
		 	 $('.sidebar').css({
					position: 'absolute',
					top:'inherit',
					bottom:'inherit'
			 });
		 }
	 })
});

