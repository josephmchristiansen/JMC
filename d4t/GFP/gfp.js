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


function linkcheck(){
  var loc = document.URL;
  loc = loc.slice(-2)
  console.log(loc);
  switch (loc) {
    case "sr":
      btnmouseclick('downbtn');
      break;
    case "dm":
      btnmouseclick('downbtn');
      btnmouseclick('downbtn');
      break;
    case "va":
      btnmouseclick('downbtn');
      btnmouseclick('downbtn');
      btnmouseclick('downbtn');
      break;
    default:
      console.log("ERROR: linkcheck");
  }
}


function opt(option){
  $('.item').css("display", "none");
  if(option == 'x'){
    $('.item').css("display", "block");
  }else{
  $('.'+ option +'').css("display", "block");
  }
}
