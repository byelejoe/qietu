(function(a){a.fn.extend({"soChange":function(b){b=a.extend({thumbObj:null,botPrev:null,botNext:null,changeType:'fade',thumbNowClass:'now',thumbOverEvent:true,slideTime:1000,autoChange:true,clickFalse:true,overStop:true,changeTime:5000,delayTime:300},b||{});var c=a(this);var d;var e=c.size();var f=0;var g;var h;var i;function j(){if(f!=g){if(b.thumbObj){a(b.thumbObj).removeClass(b.thumbNowClass).eq(g).addClass(b.thumbNowClass)};if(b.slideTime<=0){c.eq(f).hide();c.eq(g).show()}else if(b.changeType=='fade'){c.eq(f).fadeOut(b.slideTime);c.eq(g).fadeIn(b.slideTime)}else{c.eq(f).slideUp(b.slideTime);c.eq(g).slideDown(b.slideTime)};f=g;}};function k(){g=(f+1)%e;j()};c.hide().eq(0).show();if(b.thumbObj){d=a(b.thumbObj);d.removeClass(b.thumbNowClass).eq(0).addClass(b.thumbNowClass);d.click(function(){g=d.index(a(this));j();if(b.clickFalse){return false}});if(b.thumbOverEvent){d.hover(function(){g=d.index(a(this));i=setTimeout(j,b.delayTime)},function(){clearTimeout(i)})}};if(b.botNext){a(b.botNext).click(function(){if(c.queue().length<1){k()};return false})};if(b.botPrev){a(b.botPrev).click(function(){if(c.queue().length<1){g=(f+e-1)%e;j()};return false})};if(b.autoChange){h=setInterval(k,b.changeTime);if(b.overStop){c.hover(function(){clearInterval(h);},function(){h=setInterval(k,b.changeTime)})}}}})})(jQuery);


$(function(){
	
	$(".n2 .btns li").click(function(){
		var _this=$(this);
		_this.addClass("cur").siblings().removeClass("cur");
		var index=_this.index();
		$(".n2 .wrapper").animate({"top":-index*819+"px"},500);
	});
	
	
	$(".n5 .pic li").hover(function(){
		$(".n4 .wrapper").stop(true,false);
		$(this).addClass("cur").siblings().removeClass("cur");
		var _this=$(this);
		var index=_this.index();
		$(".n4 .wrapper").animate({"left":-index*1200+"px"},3000);
	},function(){});
	
	$(".n5 .btns .next").click(function(){
		var index=$(".n5 .pic").find("li.cur").index();
		if (index==2){
			$(".n4 .wrapper").stop().animate({"left":"0px"},3000);
			$(".n5 .pic li").eq(0).addClass("cur").siblings().removeClass("cur");
		}else{
			$(".n4 .wrapper").stop().animate({"left":-(index+1)*1200+"px"},3000);
			$(".n5 .pic li").eq(index+1).addClass("cur").siblings().removeClass("cur");
		}
	});
	
	$(".n5 .btns .prev").click(function(){
		$(".n4 .wrapper").stop(true,false);
		var index=$(".n5 .pic").find("li.cur").index();
		if (index==0){
			$(".n4 .wrapper").stop().animate({"left":"-2400px"},3000);
			$(".n5 .pic li").eq(2).addClass("cur").siblings().removeClass("cur");
		}else{
			$(".n4 .wrapper").stop().animate({"left":-(index-1)*1200+"px"},3000);
			$(".n5 .pic li").eq(index-1).addClass("cur").siblings().removeClass("cur");
		}
	});
	
	$(".n6").slide({mainCell:".bd",effect:"left",titOnClassName:"hover",autoPlay:true,interTime:5000,delayTime:800,switchLoad:"data-src"});
	
	$("ul.pics li").hover(function(){
		$(this).find(".tri").show();
		$(this).find(".img").addClass("cur");
		$(this).find("span").addClass("hover");
		$(this).find("div.img").append("<img class='cross' src='images/cross.png'/>");
	},function(){
		$(this).find(".tri").hide();
		$(this).find(".img").removeClass("cur");
		$(this).find("span").removeClass("hover");
		$(this).find("img.cross").remove();
	});
	
	$(".n10 .btns .prev").click(function(){
		var index=$(".n10 .scroll li.cur").index();
		$(".n10 .wrapper").animate({"left":-index*550+"px"},500);
		$(".n10 .scroll li").eq(index+1).addClass("cur").siblings().removeClass("cur");
	});
	
	
	$(".n10 .btns .next").click(function(){
		var index=$(".n10 .scroll li.cur").index();
		$(".n10 .wrapper").animate({"left":-(index-1)*550+"px"},500);
		$(".n10 .scroll li").eq(index-1).addClass("cur").siblings().removeClass("cur");
	});
	
	
	$(".n11 ul.btns li").click(function(){
		var index=$(this).index();
		$(".n11 ul.posts").stop().animate({"top":-index*90+"px"},500);
		$(this).addClass("cur").siblings().removeClass("cur");
	});
	

	
});