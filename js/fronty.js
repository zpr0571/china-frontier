
$(document).ready(function(){
	slide();
	speedDown();
	changeColor();
	scrollFun();
	 window.onscroll=function(){
	 	scrollFun();
	 	checkRLMove();
	 	checkSildeUp();
	 	goTop();
	 }
});

function changeColor() {
	$(".mainN>ul>li").mouseleave(function () {
		$(this).css("background-color",'');
		$(this).removeClass("active1");
	})

	$(".mainN>ul>li").mouseover(function () {
		$(this).addClass("active1");
		$(this).css("background-color",'#ffdf00');
	})
}
var slide=function () {
	$(".mainN1").mouseover(function(){
		$(this).find('div').slideDown("fast");
	})
	$(".mainN1").mouseleave(function(){
		$(this).find('div').slideUp("fast");
	})
}
var speedDown=function () {
	
	var t=setInterval(function () {
		var speed=Math.ceil((0-header.offsetTop)/10);
		header.style.top=header.offsetTop+speed+'px';
		alpha1(3);
		if (header.offsetTop==0&&alpha>100) {
			clearInterval(t);
		}
	},30)
}
var alpha=0;
var alpha1=function (i) {
	alpha+=i;
	header.style.filter='alpha(opacity:'+alpha+')';
	header.style.opacity=alpha/100;
}
function scrollFun (){
	var head=document.querySelector('header');
	var header=document.getElementById('header')
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		if (scrollTop>100) {
			head.className='header2';
		}else{
			head.className='header1';
		}
}
//左右移动判断
function checkRLMove() {
	$(".cont").each(function (i,n) {
		var documentH=$(window).height();
		var scrollT=$(window).scrollTop();
		var contH=$(this).offset().top;
		if (contH<=scrollT+documentH-100) {
			var cont1=$(this).find('.cont1');
			var cont2=$(this).find('.cont2');
			scrollMove(cont1,cont2);
		}
		
	})
}
//判断上移动
function checkSildeUp() {
	$(".slideUp").each(function () {
		var documentH=$(window).height();
		var scrollT=$(window).scrollTop();
		var contH=$(this).offset().top;
		if (contH<=scrollT+documentH+100) {
			scrollUp(this);
		}
	})
}
//左右移动函数
const WIDTH=1180;
function scrollMove(obj1,obj2) {
	console.log(obj2)
	var documentW=document.documentElement.clientWidth;//页面高度
	var w=Math.floor((documentW-WIDTH)/2);
	$(obj1).animate({
      left:w,
      opacity:'1',
      position: 'absolute'
    },800);
	$(obj2).animate({
      right:w,
      opacity:'1',
      position: 'absolute'
    },800);
}	
//上移动函数
function scrollUp(obj1) {
	$(obj1).animate({
      top:0,
      opacity:'1',
      position: 'absolute'
    },800);
}
//返回顶部
var goTop = function(){
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			if (scrollTop>50){
				var documentW=document.documentElement.clientWidth;//页面高度
				var w=Math.floor((documentW-WIDTH)/2)+'px';
				$(".btBtn").css('margin-right',w);
				$(".btBtn").fadeIn();
			}
			else
			{
				$(".btBtn").fadeOut();
			}
	$(".Jq_btTop").click(function(){  
		$('body,html').animate({scrollTop:0},500);  
	});  
};
