$(function(){
	$("#navbar .nav>li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	//
	
	$('.carousel').carousel({interval:3000});
	//
	
	var cur = 0;
	var imgLen = $(".imgMachine li").length;

	$(".dirr").click(function(e){
		
		if(cur==imgLen-1){return false;}else{ cur++; }
		change();
		e.preventDefault();

	});
	$(".dirl").click(function(e){
		
		if(cur<=0){return false;}else{ cur--; }
		change();
		e.preventDefault();
			
	});
	function change(){
		var imgLength = $(".imgMachine li").outerWidth();
		$(".imgMachine").animate({"left":-imgLength*cur},300);
		var text = $(".imgMachine img").eq(cur).attr("alt");
		$(".textMachine span").text(text);
	}
	
	//
	$("#shop .col-sm-3").hover(function(){
		$(this).addClass("show").siblings().removeClass("show");
	});
});
	
   
