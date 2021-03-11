$('#subnav li').each(function(i){
	$(this).click(function(){
	$('#subnav li').removeClass('li_new');
	$(this).addClass('li_new');
    $('#modify div').css('display','none');
	$($('#modify div')[i]).css('display','block');
	});
});
	
	