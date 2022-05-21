$(document).ready(function() {
	$('.left_menu_3 .side-menu > li.child .name_link_wrapper > span').click(function(){
		var li = $(this).closest('li.child');
		var submenu = li.find('.submenu-wrapper');

		if(li.hasClass('active')){
			submenu.slideUp(400, function() {li.removeClass('active');} );
		} else {
			$('.left_menu_3 .side-menu > li.child.active').each(function() {
				var this_li = $(this)
				this_li.find('.submenu-wrapper').slideUp(400, function() {} );
				this_li.removeClass('active');
			});
						
			li.addClass('active');
			submenu.slideDown(400, function() {});


		}


	});
});