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




function openFAQ(element) {
  var x = document.getElementsByClassName('faq-content');
  for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  var x = element.id;
  console.log("id: " + x);
  document.getElementById(x+x).setAttribute('style', 'display: block;');
}


function linkcheck(){
  var loc = document.URL;
  loc = loc.slice(-2)
  console.log(loc);
  switch (loc) {
    case "cu":
      openFAQ(q8);
      // location.assign("#q8");
      document.getElementById("q8").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      break;
    case "fu":
      // openFAQ();
      // location.assign("#");
      openFAQ(qb);
      // location.assign("#q1");
      document.getElementById("qb").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      break;
    case "pe":
      openFAQ(q1);
      // location.assign("#q1");
      document.getElementById("q1").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      break;
    case "co":
      openFAQ(q3);
      // location.assign("#q3");
      document.getElementById("q3").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      break;
    case "sa":
      openFAQ(qa);
      // location.assign("#q");
      document.getElementById("qa").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      break;
    case "li":
      openFAQ(q5);
      // location.assign("#q5");
      document.getElementById("q5").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      break;
    default:
      console.log("ERROR: linkcheck");
  }
}

function playAudio(e) {
  document.getElementById(e).play();
  $("#"+e).next().css("display", "none");
  $("#"+e).next().next().css("display", "inline");
  console.log($("#"+e).next());
  console.log($("#"+e).next().next());
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
