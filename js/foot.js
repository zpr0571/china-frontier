$(document).ready(function(){
//	scroll11();
	window.onscroll=function(){
	 	scroll11();
	 }
});
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