/*$(document).ready(function() {
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
});
});*/

//WHY DOES THIS NOT WORK??????
//WHY DOES THIS NOT WORK??????
//WHY DOES THIS NOT WORK??????
//WHY DOES THIS NOT WORK??????
/*
var projectName = ["Math High", "Macbeth", "Higher Ed", "Fiddler on the Roof", "Cryptography", "Mountain Wheels", "Redball Pizza", "Sudoku", "Form", "Vocab"];
var projectSrc = ["webdev/tutorial.01 done/case1/mhJoe.html", "webdev/tutorial.01 done/case2/macbethJoe.html", "webdev/tutorial.02 done/case1/uwlistJoe.html", "webdev/tutorial.02 done/case2/home.htm", "webdev/tutorial.03 done/case1/crypt.htm", "webdev/tutorial.03 done/case2/bmtour.htm", "webdev/tutorial.04 done/case2 COMPLETE/redballtxt.htm", "webdev/tutorial.05/case1 done/sudoku.htm", "webdev/OTHER/form/form.html", "webdev/OTHER/vocab/vocab.html"];

$(document).ready(function projects(){
  console.log("projects");
console.log("projects2");
for(var i = 0; i <= projectName.lenght; i++){
  var iframe = document.createElement('div');
  console.log("for i: " + i);
  newdiv.innerHTML =
  "<div class='iframe-container' id=if" + i +"><div id=iframe-cover onClick='viewIframe(this)'><div id=iframe-cover-text>VIEW PROJECT</div></div><div id=iframe-nav-left><img id=iframe-back src='img/icon-left.png' alt='back' onClick='history.go(-1);return true;'></img><img id=iframe-forward src='img/icon-right.png' alt='forward'  onClick='history.go(1);return true;'></img><div id=iframe-title>" + projectName[i] + "</div></div><div id=iframe-nav-right><img id=iframe-close src='img/icon-close.png' alt='close'  onClick='closeIframe(this)'></img><img id=iframe-open src='img/icon-open.png' alt='open'  onClick='openIframe(this)'></img><img id=iframe-info src='img/icon-info.png' alt='info'  onClick='infoIframe(this)'></img></div><iframe style='background: white;'src='" + projectSrc[i] + "' height='600' width='700'></iframe></div>";
  console.log("iframe made");
  document.getElementById(grid).appendChild(iframe);
  console.log("for i: " + i);
}
});
*/

/*
var iframeNavRight = document.createElement("DIV");
	iframeNavRight.setAttribute("id", "iframe-nav-right");
    document.getElementById("iframe-container").appendChild(iframeNavRight);
    document.createElement("DIV").setAttribute("id", "iframe-close");
    document.getElementById("iframe-nav-right").appendChild("iframe-close");
    document.getElementById("iframe-close").setAttribute('style', 'visibility: visible;');
*/


function viewIframe(element) {
  var parent = element.parentNode;
  var x = parent.id;
  console.log("id: "+x);
  document.getElementById(x).scrollIntoView({behavior: 'smooth'});
  // window.scrollBy(0, -50);
  // var q = document.getElementById(x).childNodes[1].getAttribute("width");
  // console.log("width: "+q);
  // document.getElementById(x).setAttribute('style', "width:" + q + ";");
  document.getElementById(x).setAttribute('style', "animation: viewIframe 1s forwards; position: fixed; z-index: 1000;");
  document.getElementById(x).childNodes[1].setAttribute('style', 'visibility: hidden;');
  var title = document.getElementsByClassName('iframe-title');
  var back = document.getElementsByClassName('iframe-back');
  var forward = document.getElementsByClassName('iframe-forward');
  var navRight = document.getElementsByClassName('iframe-nav-right');
  // var iframe = document.getElementsByTagName('iframe');
  // var iframe = document.getElementsByClassName('iframe-container');
  for (var i = 0; i < title.length; i++) {
      // iframe[i].style.animation = "iframeScroll 1s forwards";
      title[i].style.position = "relative";
      back[i].style.visibility = "visible";
      forward[i].style.visibility = "visible";
      navRight[i].style.visibility = "visible";
  }
}

function closeIframe(element) {
  var parent = element.parentNode;
  parent = parent.parentNode;
  var x = parent.id;
  console.log("id: "+x);
  document.getElementById(x).scrollIntoView();
  document.getElementById(x).setAttribute('style', "animation: closeIframe 1s forwards;");
  var title = document.getElementsByClassName('iframe-title');
  var back = document.getElementsByClassName('iframe-back');
  var forward = document.getElementsByClassName('iframe-forward');
  var navRight = document.getElementsByClassName('iframe-nav-right');
  // var iframe = document.getElementsByTagName('iframe');
  for (var i = 0; i < title.length; i++) {
      // iframe[i].property.scrolling = "no";
      title[i].style.position = "absolute";
      back[i].style.visibility = "hidden";
      forward[i].style.visibility = "hidden";
      navRight[i].style.visibility = "hidden";
  }
  document.getElementById(x).scrollIntoView({behavior: 'smooth'});
  document.getElementById(x).childNodes[1].setAttribute('style', 'animation: viewCover 1s forwards;');
}


/*
Math High
Macbeth
Higher Ed
Fiddler on the Roof
Cryptography
Mountain Wheels
Redball Pizza
Sudoku
Form
Vocab



"webdev/tutorial.01 done/case1/mhJoe.html"
"webdev/tutorial.01 done/case2/macbethJoe.html"
"webdev/tutorial.02 done/case1/uwlistJoe.html"
"webdev/tutorial.02 done/case2/home.htm"
"webdev/tutorial.03 done/case1/crypt.htm"
"webdev/tutorial.03 done/case2/bmtour.htm"
"webdev/tutorial.04 done/case2 COMPLETE/redballtxt.htm"
"webdev/tutorial.05/case1 done/sudoku.htm"
"webdev/OTHER/form/form.html"
"webdev/OTHER/vocab/vocab.html"
*/
