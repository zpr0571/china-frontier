$(document).ready(function(){
	slide();
	speedUp1();
	speedDown();
	changeColor();
	scrollFun();
	scroll1();
	scroll11();
	 window.onscroll=function(){
	 	scrollFun();
	 	scroll11();
	 	scroll1();
	 	scroll2();
	 	scroll3();
	 	goTop();
	 }
});
//下降下图
function speedUp1() {
	var i=0;
	var tt=setInterval(function () {
		var lis=document.querySelectorAll('.navLists1 a');
		lis[i].classList.add('wib1');
		i++;
		if (i>2) {
			clearInterval(tt);
			i=0;
		}
	},200)
}
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
function scroll1() {
	var text71=document.getElementById('content1');
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var text71Top=text71.offsetTop;
	var documentH=document.documentElement.clientHeight;//页面高度/2
	if (scrollTop+documentH>=text71Top||documentH>=text71Top-220) {
		scrollUp('#content1');
	}
}
function scroll2() {
	var text71=document.getElementById('content2');
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var text71Top=text71.offsetTop;
	var documentH=document.documentElement.clientHeight;//页面高度/2
	if (scrollTop+documentH>=text71Top-220) {
		scrollUp('#content2');
	}
}
function scroll3() {
	var text71=document.getElementById('content3');
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var text71Top=text71.offsetTop;
	var documentH=document.documentElement.clientHeight;//页面高度/2
	if (scrollTop+documentH>=text71Top-220) {
		scrollUp('#content3');
	}
}
function scrollUp(obj1) {
	$(obj1).animate({
      top:0,
      opacity:'1',
      position: 'absolute'
    },800);
}
function scroll11() {
	var text11=document.getElementById('foot1');
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var text11Top=text11.offsetTop-text11.offsetHeight;
	var documentH=document.documentElement.clientHeight;//页面高度/2
	if (scrollTop+documentH>=text11Top) {
		scrollUp('#foot1');
	}
}
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
				var w=Math.floor((documentW-1180)/2)+'px';
				$(".btBtn").css('margin-right',w);
				$(".btBtn").fadeIn();
				console.log(w)
			}
			else
			{
				$(".btBtn").fadeOut();
			}
	$(".Jq_btTop").click(function(){  
		$('body,html').animate({scrollTop:0},500);  
	});  
};