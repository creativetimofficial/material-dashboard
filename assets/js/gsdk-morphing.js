!function ($) {

  var old = $.fn.morphingButton

  $.fn.morphingButton = function (option) {
      var $this = $(this);
      
      if(option == undefined){
            
            $(this).wrap('<div class="btn-morphing"/>');
            $(this).addClass('btn-toggle');
            $container = $(this).parent('.btn-morphing');   
            $container.append('<span class="fa"/>');
            
            if($(this).hasClass('btn-lg')){
                 $container.append('<svg width="55px" height="55px"><path class="circle" transform="rotate(90, 27.5, 27.5)" d="m2.5,27.5c0,-13.81215 11.18785,-25 25,-25c13.81215,0 25,11.18785 25,25c0,13.81215 -11.18785,25 -25,25c-13.81215,0 -25,-11.18785 -25,-25z"/></svg>');
                 $container.addClass('morphing-lg');    
            } else {
                $container.append('<svg width="40px" height="40px"><path class="circle" transform="rotate(90, 20,20)" d="m1,20c0,-10.49724 8.50276,-19 19,-19c10.49724,0 19,8.50276 19,19c0,10.49724 -8.50276,19 -19,19c-10.49724,0 -19,-8.50276 -19,-19z"/></svg>'); 
            }
            
            if($(this).hasClass('btn-round')){
                $container.find('path').css('stroke-width','1px');
            } 
            
            $(this).click(function(){
                button = this;
        		
        		$rotation_color = $(this).data('rotation-color');
        		$parent = $(this).parent('.btn-morphing');
        		$path = $parent.find('path');
        		$svg = $parent.find('svg');
        		
        		$(this).addClass('resize');
        		$(this).html('');
        		
        		setTimeout(function(){
        		    $(button).css('border-color','transparent');
        		    $svg.attr('class','rotation-animate');
        		    $path.attr('class','circle circle-animation');
            		if($rotation_color != undefined && $rotation_color != ''){
                		$path.attr('class','circle circle-animation circle-' + $rotation_color);
            		} else {
                		$path.attr('class','circle circle-animation circle-gray');
            		}
            		
            	    $parent.find('span').css('display','block');
            	    $parent.find('svg').css('display','block');
            		$(button).css('pointer-events','none');	
            		
        		}, 420);
        		
        		
            });
            
      } else if(option){
          
          if(option.action == 'setState'){
               state = option.state;
               icon = option.icon;
               
               $item = $(this);
               
               $parent = $item.parent('.btn-morphing');
               $parent.addClass('morphing-' + state);
               $path = $parent.find('path'); 
               $svg = $parent.find('svg');
               $parent.find('.fa').addClass(icon).addClass('visible');	
               
               $path.css('stroke-dashoffset',0).attr('class','circle');;
               
               setTimeout(function(){
                    $svg.removeAttr('class');    
               }, 500);
          }
      }
  }

 /* CHECKBOX NO CONFLICT
  * ================== */

  $.fn.morphingButton.noConflict = function () {
    $.fn.morphingButton = old;
    return this;
  }


}(window.jQuery);

