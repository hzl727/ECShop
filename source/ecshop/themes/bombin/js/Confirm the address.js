// JavaScript Document

var Add = document.getElementById('add');
var Addli = Add.getElementsByTagName('li');

for( var a = 0; a <= Addli.length - 1; a ++){

/*鼠标点击事件*/

Addli[a].onclick = function(){
	for( var b = 0; b <= Addli.length - 1; b ++){
		Addli[b].className = '';
	}
	this.className = 'now';
}
}