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


function showmore() {
  $('#list-showmore').css('display', 'none');
  $('#list-showless').css('display', 'block');
  $('#list-more').css('display', 'block');
}
function showless() {
  $('#list-showless').css('display', 'none');
  $('#list-showmore').css('display', 'block');
  $('#list-more').css('display', 'none');
  window.location.assign("#img-6");
}
function gtishowmore() {
  $('#gti-list-showmore').css('display', 'none');
  $('#gti-list-showless').css('display', 'block');
  $('#gti-list-more').css('display', 'block');
}
function gtishowless() {
  $('#gti-list-showless').css('display', 'none');
  $('#gti-list-showmore').css('display', 'block');
  $('#gti-list-more').css('display', 'none');
  window.location.assign("#gti-img-6");
}


function linkcheck(){
  var loc = document.URL;
  loc = loc.slice(-2)
  console.log(loc);
  switch (loc) {
    case "ts":
      // location.assign("#q8");
      document.getElementById("tsa-banner").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      break;
    case "tc":
      // openFAQ();
      // location.assign("#");
      document.getElementById("complist").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      break;
    case "gt":
      // location.assign("#q1");
      document.getElementById("gti-logo").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      break;
    case "gc":
      // location.assign("#q3");
      document.getElementById("gtilist").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      break;
    default:
      console.log("ERROR: linkcheck");
  }
}
