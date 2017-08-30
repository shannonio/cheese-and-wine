


$(document).ready(function(){
  /*I used checkboxes over radio buttons for the purpose of being able to
  select more than one flavor for the matching portion*/
  $("input[type='checkbox']").on('click', function(){
    var checked=$(this).is(':checked');
    var flavor=$(this).val();
    /*I needed to have my program set up to allow for my program to retroactively
    work even when the user doesn't select a particular box*/
    if (checked){
      $('td.flavor').each(function(){
        if($(this).html().toLowerCase().indexOf(flavor)< 0){
        $(this).parent().hide();
        }
      })
    }
    else {
      $('td.flavor').each(function(){
        if($(this).html().toLowerCase().indexOf(flavor)< 0){
        $(this).parent().show();
        }
      })
    }
  });

})
