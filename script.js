
//Clear addText function
function clearField()
{
    $(".addText").val('');
}
$(".addButton").on('click',function(){
    var inputText=$(".addText").val();  //Adding Text box
    var cbox="<input type='checkbox' class='checkbox'>"; //Adding checkbox
    $('tbody').append('<tr><td><div class="lists">'+cbox+ ' <div class="text"> '+inputText+'</div> <input type="submit" class="btnDelete"  value="Delete"></div></td></tr>') //new row addition on clicking Add button
    
    // clear the addText field once added
    clearField();  

    //Delete selected row on clicking Delete button
    $(".btnDelete").on('click',function(){
        $(this).parent().parent().remove();
    })
    
    //strike through text on clicking checkbox
    $(".checkbox").on('click',function(){
        $(this).parent().toggleClass('finished');
    })
    
});  