$(document).ready(function(){
	slide();
	speedUp1();
	slide1();//内容鼠标移上
	speedDown();
	changeColor();
	scrollFun();
	scroll1();
	scroll4();
	click1();//点击事件
	 window.onscroll=function(){
	 	goTop();
	 	scrollFun();
	 	scroll1();
//	 	scroll2();
	 	scroll4();
	 }
});

function speedUp1() {
	var i=0
	var tt=setInterval(function () {
		var lis=document.querySelectorAll('#wibPic li');
//		console.log(lis.length)
		lis[i].classList.add('wib1');
		i++;
		if (i>2) {
			clearInterval(tt);
			i=0;
		}
	},500)
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
	var text2=document.getElementById('chuangxin');
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var text2Top=text2.offsetTop+text2.offsetHeight/5;
	var documentH=document.documentElement.clientHeight;//页面高度/2
	if (scrollTop+documentH>=text2Top) {
		scrollLeft1('#chuangxin .text11');
		scrollRight1('#chuangxin .text12');
	}
}
function scroll2() {
	var text31=document.getElementById('liumei');
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var text31Top=text31.offsetTop+text31.offsetHeight/5;
	var documentH=document.documentElement.clientHeight;//页面高度/2
	if (scrollTop+documentH>=text31Top) {
		scrollLeft1('#liumei .text11');
		scrollRight1('#liumei .text12');
	}
}
function scroll4() {
	var text4=document.getElementById('foot1');
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var text4Top=text4.offsetTop-text4.offsetHeight;
	var documentH=document.documentElement.clientHeight;//页面高度/2
	if (scrollTop+documentH>=text4Top) {
		scrollUp('#foot1');
	}
}
const WIDTH=1180;
function scrollLeft1(obj1) {
//	var imgW=$(obj1).height()/4;
	var documentW=document.documentElement.clientWidth;//页面高度
	var w=Math.floor((documentW-WIDTH)/2);
	$(obj1).animate({
      left:w,
      opacity:'1',
      position: 'absolute'
    },800);
}	
function scrollRight1(obj1) {
	var documentW=document.documentElement.clientWidth;//页面宽度
	var w=Math.floor((documentW-WIDTH)/2);
	$(obj1).animate({
      right:w,
      opacity:'1',
      position: 'absolute'
    },800);
}

function scrollUp(obj1) {
	$(obj1).animate({
      top:0,
      opacity:'1',
      position: 'absolute'
    },800);
}

//点击事件
function click1() {
	$('.click1').eq(0).click(function () {
	    $(this).find('a').css('color','#ff8a00');
	    $(this).find('i').css('border-top',' #ff8a00  4px solid');
	    
	})
	$('.click1').eq(1).click(function () {
	    $(this).find('a').css('color','#ff8a00');
	    $(this).find('i').css('border-top',' #ff8a00  4px solid');
	    
	})
}
//鼠标移上
function slide1() {
	var a=0;
	$(".wibPic2").mouseover(function () {
		clearInterval(t);
		$(this).next('.wibPicTs').css('display','block')
		var w1=$(this).next('.wibPicTs');
		var t=setInterval(function () {
			a+=50
			w1.css('width',a+'px');
			if (w1.css('width')>='838px') {
				clearInterval(t);
				w1.css('width','838px');
			}
		},10)
	})
	$(".wibPic2").mouseleave(function () {
		clearInterval(t);
		var w1=$(this).next('.wibPicTs');
		var t=setInterval(function () {
			a-=50
			w1.css('width',a+'px');
			if (a<=0) {
				a=0;
				clearInterval(t);
				w1.css('display','none')
				w1.css('width','0px');
			}
		},10)
	})
	var b=0;
	$(".wibPic3").mouseover(function () {
		clearInterval(t);
		$(this).next('.wibPicTs').css('display','block')
		var w1=$(this).next('.wibPicTs');
		var t=setInterval(function () {
			b+=50
			w1.css('width',b+'px');
			if (w1.css('width')>='380px') {
				clearInterval(t);
				w1.css('width','380px');
			}
		},10)
	})
	$(".wibPic3").mouseleave(function () {
		clearInterval(t);
		var w1=$(this).next('.wibPicTs');
		var t=setInterval(function () {
			b-=50
			w1.css('width',b+'px');
			if (b<=0) {
				b=0;
				clearInterval(t);
				w1.css('display','none')
				w1.css('width','0px');
			}
		},10)
	})
}

//返回顶部
var goTop = function(){
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			if (scrollTop>50){
				var documentW=document.documentElement.clientWidth;//页面高度
				var w=Math.floor((documentW-WIDTH)/2)+'px';
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