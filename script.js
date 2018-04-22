$("#addButton").on('click',function(){
	$('tbody').append('<tr><td><img   class="btnDelete" src="deleteImage.png"> <input type="text" class="" > </td></tr>')
});

$(".btnDelete").on('click',function(){
	$(this).remove();
	//$(this).attr("class").val();

});