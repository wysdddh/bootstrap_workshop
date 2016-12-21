$(function(){
	var nav2Show = false; 
	$( window ).scroll(function(){
		var scrollTop = $( this ).scrollTop(),
		  	contentHeight = $("#wrap").innerHeight(),
		  	footerHeight = $("#footer").height(),
	 	 	winHeight = $(this).height(),
	 	 	navHeiderH = $("#header").innerHeight() || 0;
		if( scrollTop+winHeight >= contentHeight-footerHeight  ){
			if( scrollTop+winHeight-256 >= contentHeight-footerHeight ){
				var top =  Math.abs( scrollTop+winHeight - contentHeight );
				$( ".footer1" ).css({
					"position":"relative",
					"top" : top
				})
				$( ".footer1 .row" ).stop().animate({
					"opacity" : 1
				},200)
			}else{
				$( ".footer1 .row" ).stop().animate({
					"opacity" : 0
				},200)
				
				$( ".footer1" ).css({
					"position":"relative",
					"top" : footerHeight-256
				})
			}
			if( scrollTop+winHeight >=  contentHeight){
				$( ".footer2 > div" ).stop().animate({
					"opacity" : 1
				},200)
			}else{
				$( ".footer2 > div" ).stop().animate({
					"opacity" : 0
				},200)
			}
		}
		if( scrollTop < navHeiderH  ){
			$("#workshop_header").css({
				position : "absolute",
				top : 0
			})
			$( "#nav-select" ).hide().removeClass("on");
			nav2Show = false;
		}
		if( nav2Show ) return;
		if( scrollTop >= navHeiderH  ){
			$("#workshop_header").css({
				position : "fixed",
				top : -95
			})
			$( "#nav-select" ).fadeIn()
		}else{
			$("#workshop_header").css({
				position : "absolute",
				top : 0
			})
			$( "#nav-select" ).fadeOut()
		}
		
	})
	
	
	$( "#nav-select" ).click(function(){
		$(this).toggleClass("on");
		
		if( $(this).hasClass("on") ){
			nav2Show = true;
			$("#workshop_header").animate({
				top : 0
			},200)
		}else{
			nav2Show = false;
			$("#workshop_header").animate({
				top : -95
			},200)
		}
	})
	
	$( "#nav-select1" ).click(function(){
		$(this).toggleClass("on");
		
		if( $(this).hasClass("on") ){
			$("#header nav").slideDown()
		}else{
			$("#header nav").slideUp()
		}
	})
	
	
	var winHref = window.location.href;
	$("a.href").click(function(e){
		e.stopPropagation();
		var thisHref = $(this).attr("data-href");
		
		var pageHref = thisHref.substring(0,thisHref.indexOf("#") )
		if( winHref.indexOf(pageHref) != -1){
			$("html,body").animate({ scrollTop:$($(this).attr("href")).offset().top-95},1000);
			return false;
		}else{
			window.location = thisHref;
		}
		
	});
	$('.weixin').popover()
	$( "#main section" ).mouseover(function(){
		$(this).children("img:not(.map)").addClass("zoom")
		$(this).find(".col-md-6 > img").addClass("zoom")	
	})
	$( "#header nav ul li:last,#header2 nav ul li:last" ).hover(function(){
		$(this).find(".follow").show();
		return false;
	},function(){
		$(this).find(".follow").hide();
		return false;
	})

})
