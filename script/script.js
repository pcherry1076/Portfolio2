$(function(){
		
	/*메뉴 내려오는 것*/
	$("#menu .li").on("mouseover" ,function(){
		$(".liu").stop().slideDown();
		$(".back").stop().slideDown();
	});
	
	$(".back").on("mouseout" ,function(){
		$("#menu .li").find(".liu").stop().slideUp();
		$(this).stop().slideUp();
	});
	
	/*figure*/
	
	$("figure img").each(function(aa){
		$(this).css({left:(aa-1)*1200});
	});
	
		setInterval(function(){
		$("figure img").each(function(img){
			var left=parseInt($(this).css("left"));
			var move=left-1200;
			$(this).animate({left:move},1000,function(){
				if(left<=-1200){
					$(this).css({left:1200});
				};//if 끝
			});//ainimate 끝
		});//each 끝
		},3000);//set 끝
		
	/*흔들리기*/
	$(window).on("mousemove" ,function(e){
		var posX=e.pageX; //변수 wid에 현재 브라우저의 넓이값 저장
		var posY=e.pageY; 
		
		$(".bg11").css({"left":20-(posX/20), "bottom":0-(posY/20)});
	});

	/*Se1*/
	$("#Sec1").mouseover(function(){
		$(this).stop().animate({opacity:1},1000);
	});
	$("#Sec1").mouseout(function(){
		$(this).stop().animate({opacity:0},1000);
	});
	$(window).scroll(function(){
		if($(this).scrollTop()>=900){
			$(".pep1").find(".pix1").stop().animate({left:560, opacity:1},1000);
			$(".pep1").find(".sp1").stop().animate({opacity:1});
		}if($(this).scrollTop()>=1300){
			$(".pep2").find(".pe").stop().animate({opacity:1},1000);
			$(".pep2").find(".P2").stop().animate({left:-30},1000);
		}if($(this).scrollTop()>=2000){
			$(".pep3").find(".pe2").stop().animate({opacity:1},1000);
			$(".pep3").find(".spna").stop().animate({top:70},1000);
		}else{
			$("#Sec1").stop().animate({opacity:0.9});
		}
	});
	
	/*Sec2*/
	$("#Sec2").mouseover(function(){
			$(this).find(".h").css({color:"#c7b7ce"});
			$(this).find(".La").animate({top:200},1000);
			$(this).find(".cic").stop().animate({opacity:1},1000);
	});
	$("#Sec2").mouseout(function(){
			$(this).find(".h").css({color:"#fff"});
			$(this).find(".La").stop().animate({top:-200},1000);
			$(this).find(".cic").stop().animate({opacity:0},1000);
	});
});