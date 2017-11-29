$(document).ready(function(){
	slide();
	speedDown();
	changeColor();
	scrollFun();
	scroll1();
	scroll2();
	scroll4();
	click1();//点击事件
	 window.onscroll=function(){
	 	goTop();
	 	scrollFun();
	 	scroll1();
	 	scroll2();
	 	scroll3();
	 	scroll4();
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
function scroll1() {
	var text71=document.getElementById('conten1');
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var text71Top=text71.offsetTop;
	var documentH=document.documentElement.clientHeight;//页面高度/2
	if (scrollTop+documentH>=text71Top||documentH>0) {
		scrollUp('#conten1');
	}
}
function scroll2() {
	var text2=document.getElementById('chuangxin');
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var text2Top=text2.offsetTop+text2.offsetHeight/5;
	var documentH=document.documentElement.clientHeight;//页面高度/2
	if (scrollTop+documentH>=text2Top) {
		scrollLeft1('#chuangxin .text11');
		scrollRight1('#chuangxin .text12');
	}
}
function scroll3() {
	var text31=document.getElementById('liumei');
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var text31Top=text31.offsetTop+text31.offsetHeight/5;
	var documentH=document.documentElement.clientHeight;//页面高度/2
	if (scrollTop+documentH>=text31Top) {
		scrollLeft2('#liumei .text22');
		scrollRight2('#liumei .text21');
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
function scrollLeft2(obj1) {
	var documentW=document.documentElement.clientWidth;//页面高度
	var w=Math.floor((documentW-WIDTH)/2);
	$(obj1).animate({
      left:w,
      opacity:'1',
      position: 'absolute'
    },800);
}	
function scrollRight2(obj1) {
//	var imgW=$(obj1).height()/4;
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
	    $("#wendingfuwu").css('display','block');
	    
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