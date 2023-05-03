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
  opt(loc);
}


function opt(option){
  $('.item').css("display", "none");
  if(option == 'xx'){
    $('.item').css("display", "block");
  }else{
  $('.'+ option +'').css("display", "block");
  }
}



function checkout(item, type){
  console.log('item: ' + item);
  console.log('type: ' + type);
  $("#checkout").css("display", "block");
  /*$( '#' + item +'' ).clone().appendTo(".checkout-cart");
  $('.item-img').css("display", "none");
  $('.item-description').css("display", "none");
  $('.item-buy').css("display", "none");
  $('.item').css("width", "100%");
  $('.item-title').css("width", "50%");
  $('.item-cost').css({"width" : "15%", "float" : "left", "min-width":"300px"});
  $('.item-title').css({"float" : "left", "margin" : "0px","font-size":"20px","min-width":"300px"});*/
}
function checkout_close(){
  $("#checkout").css("display", "none");
  /*$('.item-img').css("display", "block");
  $('.item-description').css("display", "block");
  $('.item-buy').css("display", "block");*/
}
