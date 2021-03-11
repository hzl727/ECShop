// JavaScript Document

var Pay = document.getElementById('payway');
var Payli = Pay.getElementsByTagName('li');
var Payinput = Pay.getElementsByTagName('input');

for(var a = 0; a <= Payli.length - 1; a ++){
/*li的点击事件*/
Payli[a].x = a
Payli[a].onclick = function(){
	for(var b = 0; b <= Payli.length - 1; b ++){
		Payinput[b].checked = false;
		Payli[b].style.borderColor = '#dfdfdf';
	}
	this.style.borderColor = '#f00';
	Payinput[this.x].checked = 'checked';
}
}


