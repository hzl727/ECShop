// JavaScript Document


//banner区域js开始
var Banner = document.getElementById('banner');
var Ul = document.getElementById('img');
var Img = Ul.getElementsByTagName('li');
var Icon = document.getElementById('icon');
var oIcon = Icon.getElementsByTagName('li');
var t = 0;
var time01 = null;

intertime01();

//鼠标移入事件
Banner.onmouseover=function()
{
	clearInterval(time01);	
	for(var a = 0;a <= Img.length-1; a++)
	{		
		oIcon[a].x = a;
		oIcon[a].onmouseover = function()
		{
			clear01();	
			this.className = 'now';
			Img[this.x].className = 'now';			
		}		
	}		
}
//鼠标移除事件
Banner.onmouseout=function()
{
	intertime01();		
}


//时间函数1
function intertime01()
{
	time01 = setInterval(function()
	{
		if(t == Img.length-1)
			{
				t = 0;
			}
			else
			{
				t ++;
			}
		clear01();
		Img[t].className = 'now';
		oIcon[t].className = 'now';
	},4000);
}
//样式清除1
function clear01()
{
	for(var j = 0;j <= Img.length-1;j++)
		{									
			Img[j].className = '';
			oIcon[j].className = '';
		}
}
//banner区域js结束


//品牌特卖区域js开始
var Title = document.getElementById('coltit');
var Lititle = Title.getElementsByTagName('li');
var Leftbox = document.getElementById('leftbox');
var Libox = Leftbox.getElementsByTagName('ul');

//鼠标移入事件
for(var a = 0; a <= Lititle.length - 1; a ++){
	Lititle[a].x = a;
	Lititle[a].onmouseover = function(){
		for(var b = 0; b <= Lititle.length - 1; b ++){
			Lititle[b].className = '';
			Libox[b].style.display = 'none';
		}
		this.className = 'now';
		Libox[this.x].style.display = 'block';
	}
}
//品牌特卖区域js结束


//1F区域js开始
var F1box = document.getElementById('F1');
var F1bnr = document.getElementById('F1bnr');
var F1bnrli = F1bnr.getElementsByTagName('li');
var F1icon = document.getElementById('F1icon');
var F1iconli = F1icon.getElementsByTagName('li');
var s = 0;
var time02 = null;

intertime02();

//鼠标移入事件
F1box.onmouseover=function()
{
	clearInterval(time02);	
	for(var n = 0;n <= F1bnrli.length-1;n ++)
	{		
		F1iconli[n].m = n;
		F1iconli[n].onmouseover = function()
		{
			clear02();	
			this.className = 'now';
			F1bnrli[this.m].style.display = 'block';			
		}		
	}		
}
//鼠标移除事件
F1box.onmouseout=function()
{
	intertime02();		
}


//时间函数1
function intertime02()
{
	time02 = setInterval(function()
	{
		if(s == F1bnrli.length-1)
			{
				s = 0;
			}
			else
			{
				s ++;
			}
		clear02();
		F1bnrli[s].style.display = 'block';
		F1iconli[s].className = 'now';
	},4000);
}
//样式清除1
function clear02()
{
	for(var j = 0;j <= F1bnrli.length-1;j++)
		{									
			F1bnrli[j].style.display = 'none';
			F1iconli[j].className = '';
		}
}
//1F区域js结束



//2F区域js开始
var F2box = document.getElementById('F2');
var F2bnr = document.getElementById('F2bnr');
var F2bnrli = F2bnr.getElementsByTagName('li');
var F2icon = document.getElementById('F2icon');
var F2iconli = F2icon.getElementsByTagName('li');
var q = 0;
var time03 = null;

intertime03();

//鼠标移入事件
F2box.onmouseover=function()
{
	clearInterval(time03);	
	for(var n = 0;n <= F2bnrli.length-1;n ++)
	{		
		F2iconli[n].m = n;
		F2iconli[n].onmouseover = function()
		{
			clear03();	
			this.className = 'now';
			F2bnrli[this.m].style.display = 'block';			
		}		
	}		
}
//鼠标移除事件
F2box.onmouseout=function()
{
	intertime03();		
}


//时间函数1
function intertime03()
{
	time03 = setInterval(function()
	{
		if(q == F2bnrli.length-1)
			{
				q = 0;
			}
			else
			{
				q ++;
			}
		clear03();
		F2bnrli[q].style.display = 'block';
		F2iconli[q].className = 'now';
	},4000);
}
//样式清除1
function clear03()
{
	for(var j = 0;j <= F2bnrli.length-1;j++)
		{									
			F2bnrli[j].style.display = 'none';
			F2iconli[j].className = '';
		}
}
//2F区域js结束



//3F区域js开始
var F3box = document.getElementById('F3');
var F3bnr = document.getElementById('F3bnr');
var F3bnrli = F3bnr.getElementsByTagName('li');
var F3icon = document.getElementById('F3icon');
var F3iconli = F3icon.getElementsByTagName('li');
var r = 0;
var time04 = null;

intertime04();

//鼠标移入事件
F3box.onmouseover=function()
{
	clearInterval(time04);	
	for(var n = 0;n <= F3bnrli.length-1;n ++)
	{		
		F3iconli[n].m = n;
		F3iconli[n].onmouseover = function()
		{
			clear04();	
			this.className = 'now';
			F3bnrli[this.m].style.display = 'block';			
		}		
	}		
}
//鼠标移除事件
F3box.onmouseout=function()
{
	intertime04();		
}


//时间函数1
function intertime04()
{
	time04 = setInterval(function()
	{
		if(r == F3bnrli.length-1)
			{
				r = 0;
			}
			else
			{
				r ++;
			}
		clear04();
		F3bnrli[r].style.display = 'block';
		F3iconli[r].className = 'now';
	},4000);
}
//样式清除1
function clear04()
{
	for(var j = 0;j <= F3bnrli.length-1;j++)
		{									
			F3bnrli[j].style.display = 'none';
			F3iconli[j].className = '';
		}
}
//3F区域js结束












