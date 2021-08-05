
var mouseOriginX = 0;
var mouseOriginY = 0;
function startTime(e){
// $("#body").ready(function(e){
  mouseOriginX = e.clientX - ($(window).width() / 2);
  mouseOriginY = e.clientY - ($(window).height() / 2);
  console.log("i am running");
// });
}
$(document).ready(function(){
    var movementStrength = 30;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    console.log("mouseOriginX  " + mouseOriginX);
    var movementSensitivity = 60;
    var movementDelay = 0;

    $("#body").mousemove(function(ev){
      var pageX = ev.pageX - ($(window).width() / 2);
      var pageY = ev.pageY - ($(window).height() / 2);
      // console.log("pageX  " + pageX);
      // console.log("pageY  " + pageY);
      // var newvalueX = width * pageX * -1 - 205;
      // var newvalueY = height * pageY * -1 - 100;
      var newvalueX = width * pageX * -1 - 25;
      var newvalueY = height * pageY * -1 - 50;
      var finalvalueX = 0;
      var finalvalueY = 0;
      // setTimeout(moveBackground, 0);
      if ((pageX >= mouseOriginX+movementSensitivity || pageX <= mouseOriginX-movementSensitivity) || (pageY >= mouseOriginY+movementSensitivity || pageY <= mouseOriginY-movementSensitivity) && movementDelay == 0) {
        console.log("check = true");
        movementDelay = 1;
        moveBackground(newvalueX, newvalueY, finalvalueX, finalvalueY);
      } else {
        console.log("waiting...");
      }

    });

    function moveBackground(newvalueX, newvalueY, finalvalueX, finalvalueY) {
        console.log("moveBackground");
        var easevalueX = newvalueX / 10;
        var easevalueY = newvalueY / 10;
        for (var i = 0; i < 10; i++) {
          finalvalueX += easevalueX;
          finalvalueY += easevalueY;
          console.log("finalvalueX  " + finalvalueX);
          console.log("finalvalueY  " + finalvalueY);
          setTimeout(setvalues, 0);
          function setvalues() {
          $('#body').css("background-position", finalvalueX+"px "+finalvalueY+"px");
          }
        }
        console.log("finalvalueX  " + finalvalueX);
        console.log("finalvalueY  " + finalvalueY);
        setTimeout(movementDelay = 0, 3000);
        console.log("movementDelay = " + movementDelay);
      }
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
