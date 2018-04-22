$(".addButton").on('click',function(){
	$('tbody').append('<tr><td> <input type="text" class="inputText" > </td></tr>')
});

$(".btnDelete").on('click',function(){
	$(this).remove();
	//$(this).attr("class").val();

});