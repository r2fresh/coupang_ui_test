$(document).ready(function(){

	var COUNT = 5;

	var $tapMenu = $('.gnb menu');

	var preIndex = parseInt(COUNT*Math.random());

	contentDisplay(preIndex)

	$tapMenu.find('li a').each(function(index,element){

		$(element).bind('click',function(e){
			e.preventDefault();

			if(preIndex === index) return;

			contentDisplay(index)
		})

	})

	function contentDisplay(index){

		$('content:eq(' + index + ')').removeClass('displayNone');

		$tapMenu.find('li a').addClass('');

		if(index === preIndex) return;

		$('content:eq(' + preIndex + ')').addClass('displayNone');

		$tapMenu.find('li a').removeClass('');

		preIndex = index;

	}


	$('.menu3 .banner a').bind('mouseover',function(e){

		e.preventDefault();

		$('.menu3 .banner .cover').removeClass('displayNone');
	})

	$('.menu3 .banner a').bind('mouseout',function(e){
		e.preventDefault();

		$('.menu3 .banner .cover').addClass('displayNone');
	})
});