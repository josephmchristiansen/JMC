var wait;
function load(){
    stroke_set();
    wait = setTimeout(showPage, 2500);
    // wait = setTimeout(showPage, 0);
}
function showPage() {
  document.getElementById("page").style.display = "block";
  document.getElementById("header").style.display = "block";
  $('#svg').css("animation", "svghide 500ms ease-out forwards");
}
/*
function pagechange(page){
  console.log("pagechange");
  switch (page) {
    case 'GFP':
      document.getElementById('body').style.animation = "pagechange 500ms ease-in forwards";
      var wait;
      wait = setTimeout(go, 500);
      function go(){
        window.location = "GFP/gfp.html";
      }
      console.log("GFP");
      break;
    case 'purchase':
      $('#ttb-content-purchase').css("visibility", "visible");
      console.log("purchase");
      break;
    case 'tech':
      $('#ttb-content-tech').css("visibility", "visible");
      console.log("tech");
      break;
    case 'business':
      $('#ttb-content-business').css("visibility", "visible");
      console.log("business");
      break;
    case 'education':
      $('#ttb-content-education').css("visibility", "visible");
      console.log("education");
      break;
    case 'faq':
      $('#ttb-content-faq').css("visibility", "visible");
      console.log("faq");
      break;
    case 'about':
      $('#ttb-content-about').css("visibility", "visible");
      console.log("about");
      break;
    default:
    console.log("error loading content");
  }
}
*/

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

// function calcpath{
//   var path = document.getElementById(brain);
//   var lenght = path.getTotalLength();
// }

// .brain_0{stroke-dasharray:304 306;stroke-dashoffset:305;animation:brain_draw 2000ms linear 0ms forwards;}

function stroke_set(){
  var stroke_data = [304, 306, 305, 0, 198, 200, 199, 12, 304, 306, 305, 24, 304, 306, 305, 37, 356, 358, 357, 49, 331, 333, 332, 61, 305, 307, 306, 74, 180, 182, 181, 86, 658, 660, 659, 98, 369, 371, 370, 111, 240, 242, 241, 123, 157, 159, 158, 135, 525, 527, 526, 148, 525, 527, 526, 160, 300, 302, 301, 172, 169, 171, 170, 185, 458, 460, 459, 197, 160, 162, 161, 209, 583, 585, 584, 222, 592, 594, 593, 234, 422, 424, 423, 246, 257, 259, 258, 259, 280, 282, 281, 271, 374, 376, 375, 283, 182, 184, 183, 296, 542, 544, 543, 308, 160, 162, 161, 320, 537, 539, 538, 333, 257, 259, 258, 345, 120, 122, 121, 358, 457, 459, 458, 370, 294, 296, 295, 382, 334, 336, 335, 395, 194, 196, 195, 407, 257, 259, 258, 419, 100, 102, 101, 432, 240, 242, 241, 444, 180, 182, 181, 456, 285, 287, 286, 469, 667, 669, 668, 481, 270, 272, 271, 493, 257, 259, 258, 506, 294, 296, 295, 518, 558, 560, 559, 530, 114, 116, 115, 543, 402, 404, 403, 555, 217, 219, 218, 567, 260, 262, 261, 580, 307, 309, 308, 592, 382, 384, 383, 604, 165, 167, 166, 617, 265, 267, 266, 629, 109, 111, 110, 641, 305, 307, 306, 654, 297, 299, 298, 666, 274, 276, 275, 679, 123, 125, 124, 691, 163, 165, 164, 703, 100, 102, 101, 716, 80, 82, 81, 728, 114, 116, 115, 740, 160, 162, 161, 753, 89, 91, 90, 765, 202, 204, 203, 777, 157, 159, 158, 790, 362, 364, 363, 802, 354, 356, 355, 814, 202, 204, 203, 827, 317, 319, 318, 839, 142, 144, 143, 851, 154, 156, 155, 864, 205, 207, 206, 876, 257, 259, 258, 888, 137, 139, 138, 901, 160, 162, 161, 913, 205, 207, 206, 925, 240, 242, 241, 938, 160, 162, 161, 950, 205, 207, 206, 962, 160, 162, 161, 975, 188, 190, 189, 987, 160, 162, 161, 1000];
  var cls = 0;
  var a;
  var b;
  var c;
  var d;
  for(var i = 0; i <= 328; i = i + 4){
    a = stroke_data[i];
    b = stroke_data[i+1];
    c = stroke_data[i+2];
    d = stroke_data[i+3];
    $('.brain_'+cls).css("stroke-dasharray", a + " " + b);
    $('.brain_'+cls).css("stroke-dashoffset", c);
    $('.brain_'+cls).css("animation","brain_draw 2000ms linear "+ d + "ms forwards");

    cls++;
  }
}
