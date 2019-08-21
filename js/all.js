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

//sidebar
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
			$(this).text('移除項目');
			$(this).toggleClass('inCart');
		}else if($(this).text()=='移除項目'){
			items.splice(0,1);
			$(this).text('加入購物車');
			$(this).toggleClass('inCart');
		}
		
		
		$('.cartNum').text(items.length);

	});


	$('.caculate').click(function(){
		event.preventDefault();
	//var i=$('div').size();//获得div标签的数目
	//var x=$('.heart_w').size();   //获得class为mm的font标签的数目
	//$('#quantity').html('購物車'+x+'件物品');
	//alert('好');

	});


});

