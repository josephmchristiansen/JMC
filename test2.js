$(document).bind('mousemove', function(e){
    $('#test').css({
      left:  e.pageX - 75,
      top:   e.pageY - 75
    });
});