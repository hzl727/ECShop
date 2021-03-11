/* CSS Document */

$('#che1').click(function(){
	if($(this).attr('checked') == 'checked'){
		$('.checked').attr('checked','checked');
		}else{
			$('.checked').attr('checked',false);
		}
	});
	
var rmb1 = document.getElementById('redwz1').innerHTML;
var rmb2 = document.getElementById('redwz1').innerHTML;
var price = document.getElementById('price').innerHTML;
var Price = Number(price);
$('#che1').click(function(){
	rmb2 = Number(rmb2);
	rmb1 = Number(rmb1);	
	if($(this).attr('checked') == 'checked'){
		$('.checked').attr('checked','checked');		
		Price = rmb2 + rmb1;
		Price = Price.toFixed(2);				
		price = document.getElementById('price').innerHTML = Price;				
		}else{
			$('.checked').attr('checked',false);
			price = document.getElementById('price').innerHTML = "00.00";
		}
	});

price = document.getElementById('price').innerHTML = "00.00";	
$('.li01 input').each(function(i){
	$(this).click(function(){
		//alert(0);
	  if($(this).attr('checked') == 'checked'){
		  Price = Number(price);
		  //$('.checked').attr('checked','checked');		
		  Price = Price + Number($($('.num')[i]).text());
		  //alert(Price);
		  Price = Price.toFixed(2);				
		  price = document.getElementById('price').innerHTML = Price;
						  
		  }else{
			  Price = Number(price);
			  Price = Price - Number($($('.num')[i]).text());
			  //$('.checked').attr('checked',false);  
			  Price = Price.toFixed(2);
			  price = document.getElementById('price').innerHTML = Price;
			  $('#che1').attr('checked',false);
		  }
	});
});



var Jian1 = document.getElementById('jian1');
var Ja1 = document.getElementById('ja1');
var Unber1 = document.getElementById('num1');
var nowjg1 = document.getElementById('nowjg1').innerHTML;
var rmb1 = document.getElementById('redwz1').innerHTML;
var V = Unber1.value;
var Nowjg1 = Number(nowjg1);

V = parseInt(V);
Jian1.onclick = function(){	
		var Rmb1 = Number(rmb1);
		if(V !== 1){
			V = V - 1;
			Unber1.value = V;
			Rmb1 = Rmb1 - Nowjg1;
			Rmb1 = Rmb1.toFixed(2);			
			rmb1 = document.getElementById('redwz1').innerHTML = Rmb1;
			
			if($('.li01 input').attr('checked') == 'checked'){
				Price = Number(price);		
				Price = Price - Number($('#nowjg1').text());
				Price = Price.toFixed(2);				
				price = document.getElementById('price').innerHTML = Price;		
			}
		}	
}
Ja1.onclick = function(){
	var Rmb1 = Number(rmb1);
	V = V + 1;
	Unber1.value = V;
	Rmb1 = Rmb1 + Nowjg1;
	Rmb1 = Rmb1.toFixed(2);
	rmb1 = document.getElementById('redwz1').innerHTML = Rmb1;
		if($('.li01 input').attr('checked') == 'checked'){
			Price = Number(price);		
			Price = Price + Number($('#nowjg1').text());
			Price = Price.toFixed(2);				
			price = document.getElementById('price').innerHTML = Price;		
		}
}

var Jian2 = document.getElementById('jian2');
var Ja2 = document.getElementById('ja2');
var Unber2 = document.getElementById('num2');
var nowjg2 = document.getElementById('nowjg2').innerHTML;
var rmb2 = document.getElementById('redwz2').innerHTML;
var N = Unber2.value;
var Nowjg2 = Number(nowjg2);

N = parseInt(N);
Jian2.onclick = function(){
	var Rmb2 = Number(rmb2);
	if(N !== 1){
		N = N - 1;
		Unber2.value = N;
		Rmb2 = Rmb2 - Nowjg2;
		Rmb2 = Rmb2.toFixed(2);		
		rmb2 = document.getElementById('redwz2').innerHTML = Rmb2;
		if($('.li01 input').attr('checked') == 'checked'){
				Price = Number(price);		
				Price = Price - Number($('#nowjg2').text());
				Price = Price.toFixed(2);				
				price = document.getElementById('price').innerHTML = Price;		
			}
	}
}
Ja2.onclick = function(){
	var Rmb2 = Number(rmb2);
	N = N + 1;
	Unber2.value = N;
	Rmb2 = Rmb2 + Nowjg1;
	Rmb2 = Rmb2.toFixed(2);
	rmb2 = document.getElementById('redwz2').innerHTML = Rmb2;
	if($('.li01 input').attr('checked') == 'checked'){
				Price = Number(price);		
				Price = Price + Number($('#nowjg2').text());
				Price = Price.toFixed(2);				
				price = document.getElementById('price').innerHTML = Price;		
			}
}
