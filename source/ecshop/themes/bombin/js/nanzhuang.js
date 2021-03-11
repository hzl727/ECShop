
$('#yxz li').each(function(i){
	$(this).click(function(){
	$(this).css('display','none');
	$($('#pp li')[i]).css('display','block');	
	})
});


$('#pp li').each(function(i){
	$(this).click(function(){
	$(this).css('display','none');
	$($('#yxz li')[i]).css('display','block');
	})
});

