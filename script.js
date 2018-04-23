

$(".addButton").on('click',function(){
	$('tbody').append('<tr><td> <input type="text" class="inputText" > <input type="submit" class="btnDelete"  value="Delete"></td></tr>') //new row addition on clicking Add button

    //Delete selected row on clicking Delete button
    $(".btnDelete").on('click',function(){
        $(this).parent().parent().remove();
    })

});  