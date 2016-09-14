var searchVisible = 0;
var transparent = true;

var transparentDemo = true;
var fixedTop = false;

var navbar_initialized = false;

$(document).ready(function(){

    $.material.init();

    window_width = $(window).width();

    // check if there is an image set for the sidebar's background
    mkd.checkSidebarImage();

    // Init navigation toggle for small screens
    if(window_width <= 991){
        mkd.initRightMenu();
    }

    //  Activate the tooltips
    $('[rel="tooltip"]').tooltip();


    //      Activate the switches with icons
    if($('.switch').length != 0){
        $('.switch')['bootstrapSwitch']();
    }
    //      Activate regular switches
    if($("[data-toggle='switch']").length != 0){
         $("[data-toggle='switch']").wrap('<div class="switch" />').parent().bootstrapSwitch();
    }

    $('.form-control').on("focus", function(){
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function(){
        $(this).parent(".input-group").removeClass("input-group-focus");
    });

});

// activate collapse right menu when the windows is resized
$(window).resize(function(){
    if($(window).width() <= 991){
        mkd.initRightMenu();
    }
});

md = {
    misc:{
        navbar_menu_visible: 0
    },

    checkSidebarImage: function(){
        $sidebar = $('.sidebar');
        image_src = $sidebar.data('image');

        if(image_src !== undefined){
            sidebar_container = '<div class="sidebar-background" style="background-image: url(' + image_src + ') "/>'
            $sidebar.append(sidebar_container);
        }
    },

    initRightMenu: debounce(function(){
        $sidebar_wrapper = $('.sidebar-wrapper');

        if(!navbar_initialized){
            
        } else {

        }

    }, 500);
}


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
};
