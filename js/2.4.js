
var h = li1.offsetHeight;
$(document).ready(function(){
	slide();
	speedDown();
	changeColor();
	scrollFun();
	 window.onscroll=function(){
	 	scrollFun();
	 	leff (h,li3)
	 	rigg (h*2,li4)
	 	leff (h*3,li5)
	 	rigg (h*4,li6)
	 	leff (h*5,li7)
	 	rigg (h*6,li8)
	 	leff (h*7,li9)
	 	rigg (h*8,li10)
	 	leff (h*9,li11)
	 	rigg (h*10,li12)
	 	leff (h*11,li13)
	 	rigg (h*12,last)
	 	scroll11();
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

function leff (hh,obj) {
	var ss = document.body.scrollTop;
	if(ss>=hh){
		obj.classList.add('leff')
	}
}

function rigg (hh,obj) {
	var ss = document.body.scrollTop;
	if(ss>=hh){
		obj.classList.add('rigg')
	}
}








//footer
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