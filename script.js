
//Clear addText function
function clearField()
{
    $(".addText").val('');
}
var count=0;
$(".addText").on('change',function(){
    count++;
    var inputText=$(".addText").val();  //Adding Text box
    var cbox=`<input type='checkbox' class='checkbox${count}'>`; //Adding checkbox
    var dbtn=`<input type='submit' class='btnDelete${count}'  value='Delete'>` //adding delete button
    $('tbody').append(`<tr><td><div class='lists'> ${cbox} <div class='text'> ${inputText} </div> ${dbtn} </div></td></tr>`) //new row addition on clicking Add button
    
    // clear the addText field once added
    clearField();  

    //Delete selected row on clicking Delete button
    $(`.btnDelete${count}`).on('click',function(){
        $(this).parent().parent().remove();
    });

    //strike through text on clicking checkbox
    $(`.checkbox${count}`).bind('click',function(){
        $(this).parent().toggleClass('finished');
    });
    
    
});  

