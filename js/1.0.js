

// 当前显示图片序号
	var currentIndex = 0;
	var timerArr = [];
	//初始化
	(function(){
		// 1.第一张图显示，其他图隐藏
		for (var i = 0; i < box.children.length; i++) {
			if (i!=0) {
				box.children[i].style.opacity=0;
			}				
		}

		// 2.启动2s一次的定时器
		timerArr[2]=auto();
		navActive(0);

		// 3.给导航添加事件监听
		for (var i = 0; i < nav.children.length; i++) {
			nav.children[i].onclick=
				(function(index){
					return function(){
						// 点击处理
						// 1.中断当前轮播和动画
						clearInterval(timerArr[0]);
						clearInterval(timerArr[1]);
						clearInterval(timerArr[2]);
						
						for (var i = 0; i < box.children.length; i++) {
							if (i==currentIndex){
								box.children[i].style.opacity=1;
							}else{
								box.children[i].style.opacity=0;
							}				
						}

						// index对应的图片显示
						// currentIndex对应的图片消失
						fade(window['img'+index],'in');
						fade(window['img'+currentIndex],'out');
						currentIndex = index;
						timerArr[2]=auto();
						navActive(currentIndex);
					}					
				})(i);
		}
	})();

	// 每隔2s轮播一次
	function auto() {
		return setInterval(function(){
			// 播放淡出动画，并保存定时器
			timerArr[0]=fade(this['img'+currentIndex],'out');
			// 处理索引
			currentIndex++;
			if(currentIndex == 2)
				currentIndex = 0;
			// 播放淡入动画，并保存定时器
			timerArr[1]=fade(this['img'+(currentIndex)],'in');
			
			// 激活导航原点
			navActive(currentIndex);
		}, 4000);
	}
	
	function navActive(index) {
		for (var i = 0; i < nav.children.length; i++) {
			nav.children[i].className='';
		}
		nav.children[index].className='active';
	}


	// 淡出函数
	function fade(obj,type) {
		var o = type=='in'?0:1;
		var t = setInterval(function(){
			if (type=='in') {
				o += 0.04;
				if(o>=1){
					o = 1;
					clearInterval(t);
				}
			}else{
				o -= 0.04;
				if(o<=0){
					o = 0;
					clearInterval(t);
				}
			}			
			obj.style.opacity = o;
		}, 40);
		return t;
	}
	






//	设置轮播区宽和高
	setInterval(function  () {
		 var wid = document.body.clientWidth;
		 var imgs = document.getElementById('img0').children[0]
		 $('#img0>img').css({width:wid})
		 $('#img1>img').css({width:wid})
		 var h = imgs.height;
		 $('#container').css({height:h})
		 $('#box').css({height:h})
	},10)
	




//文本转换

	var lis = $('#ktv>li');
	var cour = 0 ;
	var num = 0 ;
	var tomer,timer;
	lis[1].style.bottom='-60px'
	var tt = setInterval(function  () {
		end(lis[cour]);
		cour++;
		if(cour==2){
			cour=0
		}
		star(lis[cour]);
	},3000)
	//上移函数	
	var speeds = -60;
	function star (obj) {
		 timer = setInterval(function (){
			num +=5;
			speeds +=5
			if(num > ktv.offsetHeight){
				speeds = -60
				num = 0 ;
				obj.className = 'tiao';
				clearInterval(timer);	
			}else{
				 
				obj.style.bottom = speeds+'px';
			}
		},30)
	}
	var speed = 0
	function end (obj) {
		 tomer = setInterval(function (){
			speed +=5 
			if(speed>=ktv.offsetHeight){
				obj.style.bottom = '-60px';
				speed=0;
				obj.className = '';
				clearInterval(tomer)
			}else{
				obj.style.bottom = speed+'px';
			}
		},30)
	}
	
	
	


$(document).ready(function(){
	slide();
	speedDown();
	changeColor();
	scrollFun();
	 window.onscroll=function(){
	 	scrollFun();
	 	liup(uls,300,'wells');
	 	liup(uls2,900,'wells2');
	 	textup ();
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



function liup (obj,n,cleaa) {
	var ss = document.body.scrollTop;
	if(ss>=n){
		var i = 0 ;
		var tt = setInterval(function  () {
			var lis = obj.children;
			lis[i].classList.add(cleaa);
			i++;
			if(i>=4){
				clearInterval(tt);
			}
		},500)
	}
}
function textup () {
	var ss = document.body.scrollTop;
	if(ss>=1600){
		p1.className = 'texts'
	}
}


//footer部分
function scroll11() {
	var text11=document.getElementById('foot1');
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var text11Top=text11.offsetTop-text11.offsetHeight;
	var documentH=document.documentElement.clientHeight;//页面高度/2
	if (scrollTop>=1800) {
		scrollUp('#foot1');
	}
}
function scrollUp(obj1) {
	$(obj1).animate({
      top:0,
      opacity:'1',
      position: 'absolute'
    },500);
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