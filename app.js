/*
$(document).ready(function() {
  var movementStrength = 2;
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
*/
/*
$(document).ready(function() {
  var movementStrength3 = 5;
    var height3 = movementStrength3 / $(window).height();
    var width3 = movementStrength3 / $(window).width();
    $("#L3").mousemove(function(e){
      var pageX3 = e.pageX - ($(window).width() / 2);
      var pageY3 = e.pageY - ($(window).height() / 2);
    //   var newvalueX = width * pageX * -1 - 205;
    //   var newvalueY = height * pageY * -1 - 100;
      var newvalueX3 = width3 * pageX3 * -1 - 25;
      var newvalueY3 = height3 * pageY3 * -1 - 50;
    $('#L3').css("background-position", newvalueX3+"px     "+newvalueY3+"px");
    // $('#L1').css("top", newvalueY1 + "px");
    // $('#L1').css("left", newvalueX1 + "px");
    console.log(newvalueX3);
    console.log(newvalueY3);
});
});

$(document).ready(function() {
  var movementStrength2 = 15;
    var height2 = movementStrength2 / $(window).height();
    var width2 = movementStrength2 / $(window).width();
    $("#L2").mousemove(function(e){
      var pageX2 = e.pageX - ($(window).width() / 2);
      var pageY2 = e.pageY - ($(window).height() / 2);
    //   var newvalueX = width * pageX * -1 - 205;
    //   var newvalueY = height * pageY * -1 - 100;
      var newvalueX2 = width2 * pageX2 * -1 - 25;
      var newvalueY2 = height2 * pageY2 * -1 - 50;
    $('#L2').css("background-position", newvalueX2+"px     "+newvalueY2+"px");
    // $('#L2').css("top", newvalueY2 + "px");
    // $('#L2').css("left", newvalueX2 + "px");
    console.log(newvalueX2);
    console.log(newvalueY2);
});
});

$(document).ready(function() {
  var movementStrength1 = 40;
    var height1 = movementStrength1 / $(window).height();
    var width1 = movementStrength1 / $(window).width();
    $("#L1").mousemove(function(e){
      var pageX1 = e.pageX - ($(window).width() / 2);
      var pageY1 = e.pageY - ($(window).height() / 2);
    //   var newvalueX = width * pageX * -1 - 205;
    //   var newvalueY = height * pageY * -1 - 100;
      var newvalueX1 = width1 * pageX1 * -1 - 25;
      var newvalueY1 = height1 * pageY1 * -1 - 50;
    $('#L1').css("background-position", newvalueX1+"px     "+newvalueY1+"px");
    // $('#L1').css("top", newvalueY1 + "px");
    // $('#L1').css("left", newvalueX1 + "px");
    console.log(newvalueX1);
    console.log(newvalueY1);
});
});
// */








/*
$(document).ready(function() {
  var mS = [2, 5, 15, 40];
  var id = ['#body', '#L3', '#L2', '#L1'];
  while (true) {
    for (var i = 0; i < id.length; i++) {
      var height = mS[i] / $(window).height();
      var width = mS[i] / $(window).width();
      $('#body').mousemove(function(e){
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        //   var newvalueX = width * pageX * -1 - 205;
        //   var newvalueY = height * pageY * -1 - 100;
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;
        $(id[i]).css("background-position", newvalueX+"px     "+newvalueY+"px");
        console.log(newvalueX);
        console.log(newvalueY);
      });
    }
  }
});
*/

















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
