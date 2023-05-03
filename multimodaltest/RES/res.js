function navdropdown(id){
  var dropdownlist = ["tec", "bus", "edu", "res", "rec", "pur", "faq", "inf", "abt"];
  for(var i=0;i<=dropdownlist.length;i++){
    $('#'+dropdownlist[i]).css("display", "none");
  }
  document.getElementById(id).style.display="block";
  $('#nav-dropdown').css("transform", "translateY(100px)");
}
function navdropdownhide() {
  var y = event.clientY;
  console.log(y);
  if(y > 120){
    $('#nav-dropdown').css("transform", "translateY(0px)");
    $('#header').css("transform", "translateY(0px)");
    console.log("<100");
  }
}
function navdropdownhideforce() {
  var y = event.clientY;
  console.log(y);
    $('#nav-dropdown').css("transform", "translateY(0px)");
    $('#header').css("transform", "translateY(0px)");
    console.log("<100");
}


/*var wait;
$(window).bind('mousewheel DOMMouseScroll', function(event){
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
      wait = setTimeout(btnmouseclick("upbtn"), 2000);

      console.log("up");
    }
    else {
      wait = setTimeout(btnmouseclick("downbtn"), 2000);
      console.log("down");
    }
});*/

function linkcheck(){
  var loc = document.URL;
  loc = loc.slice(-2)
  console.log(loc);
  switch (loc) {
    case "hr":
      btnmouseclick('downbtn');
      break;
    case "ac":
      btnmouseclick('downbtn');
      btnmouseclick('downbtn');
      break;
    case "ar":
      btnmouseclick('downbtn');
      btnmouseclick('downbtn');
      btnmouseclick('downbtn');
      break;
    default:
      console.log("ERROR: linkcheck");
  }
}


var section = 0;
function btnmouseclick(click){
  console.log("btnmouseclick");
  if(click === "upbtn"){
    section = section - 1;
    if(section < 0){
      section = 0;
    }
    console.log("section: " + section);
  }else if(click === "downbtn"){
    section = section + 1;
    if(section > 4){
      section = 4;
    }
    console.log("section: " + section);
  }
  switch (section) {
    case 0:
      document.getElementById('s-1').style.animation = "exitSection 1s forwards";
      // document.getElementById('s-2').style.animation = "exitSection 1s forwards";
      // document.getElementById('s-3').style.animation = "exitSection 1s forwards";
      // document.getElementById('s-4').style.animation = "exitSection 1s forwards";
      document.getElementById('s-0').style.animation = "enterSection 2s forwards";
      document.getElementById('up-btn').style.visibility = "hidden";
      document.getElementById('down-btn').style.visibility = "visible";
      break;
    case 1:
      document.getElementById('s-0').style.animation = "exitSection 1s forwards";
      document.getElementById('s-2').style.animation = "exitSection 1s forwards";
      // document.getElementById('s-3').style.animation = "exitSection 1s forwards";
      // document.getElementById('s-4').style.animation = "exitSection 1s forwards";
      document.getElementById('s-1').style.animation = "enterSection 2s forwards";
      document.getElementById('up-btn').style.visibility = "visible";
      document.getElementById('down-btn').style.visibility = "visible";
      break;
    case 2:
      // document.getElementById('s-0').style.animation = "exitSection 1s forwards";
      document.getElementById('s-1').style.animation = "exitSection 1s forwards";
      document.getElementById('s-3').style.animation = "exitSection 1s forwards";
      // document.getElementById('s-4').style.animation = "exitSection 1s forwards";
      document.getElementById('s-2').style.animation = "enterSection 2s forwards";
      document.getElementById('up-btn').style.visibility = "visible";
      document.getElementById('down-btn').style.visibility = "visible";
      break;
    case 3:
      // document.getElementById('s-0').style.animation = "exitSection 1s forwards";
      // document.getElementById('s-1').style.animation = "exitSection 1s forwards";
      document.getElementById('s-2').style.animation = "exitSection 1s forwards";
      // document.getElementById('s-4').style.animation = "exitSection 1s forwards";
      document.getElementById('s-3').style.animation = "enterSection 2s forwards";
      document.getElementById('up-btn').style.visibility = "visible";
      document.getElementById('down-btn').style.visibility = "hidden";
      break;
    default:
      console.log("error");
  }
}

function playAudio(e) {
  document.getElementById(e).play();
  $("#"+e).next().css("display", "none");
  $("#"+e).next().next().css("display", "inline");
  document.getElementById(e).addEventListener("ended", function(){
    document.getElementById(e).currentTime = 0;
    $("#"+e).next().css("display", "inline");
    $("#"+e).next().next().css("display", "none");
    console.log("ended");
  });
}
function pauseAudio(e) {
  document.getElementById(e).pause();
  $("#"+e).next().css("display", "inline");
  $("#"+e).next().next().css("display", "none");
}
