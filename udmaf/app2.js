$(document).ready(function() {
    var movementStrength = 30;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("#body").mousemove(function(e){
      var pageX = e.pageX - ($(window).width() / 2);
      var pageY = e.pageY - ($(window).height() / 2);
    //   var newvalueX = width * pageX * -1 - 205;
    //   var newvalueY = height * pageY * -1 - 100;
      var newvalueX = width * pageX * -1 - 25;
      var newvalueY = height * pageY * -1 - 50;
    $('#body').css("background-position", newvalueX+"px     "+newvalueY+"px");
    console.log(newvalueX);
    console.log(newvalueY);
});
});


// jQuery(document).ready(function($) {
//   $('.resume') .hide()
// $('a[href^="#"]').on('click', function(event) {
// $('.resume') .hide()
//     var target = $( $(this).attr('href') );
// target.fadeToggle(1000);
//     $('.resume'+target).toggle();

// });
// });

// jQuery(document).ready(function($) {
// $('a[href^="#"]').on('click', function(event) {

//     var target = $( $(this).attr('href') );
//     target.fadeToggle(1000);
//     /*if( target.length ) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top
//         }, 2000);
//     }*/

// });
// });

// function about() {
//     document.getElementById("about").style.display = "block";
//     document.getElementById("skills").style.display = "none";
//     document.getElementById("experience").style.display = "none";
//     document.getElementById("portfolio").style.display = "none";
// }
// function skills() {
//     document.getElementById("skills").style.display = "block";
//     document.getElementById("experience").style.display = "none";
//     document.getElementById("portfolio").style.display = "none";
//     document.getElementById("about").style.display = "none";
// }
// function experience() {
//     document.getElementById("experience").style.display = "block";
//     document.getElementById("skills").style.display = "none";
//     document.getElementById("portfolio").style.display = "none";
//     document.getElementById("about").style.display = "none";
// }
// function portfolio() {
//     document.getElementById("portfolio").style.display = "block";
//     document.getElementById("skills").style.display = "none";
//     document.getElementById("experience").style.display = "none";
//     document.getElementById("about").style.display = "none";
// }

// function notice(){
//   window.alert('NOTICE: YOU ARE VIEWING AN UNFINISHED PRODUCT.  THIS WEBSITE IS CURRENTLY UNDER DEVELOPMENT.  COME BACK SOON TO GET THE FULL EXPERIENCE.');
// }
