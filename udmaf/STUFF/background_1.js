var x1=0;
function setLines(){
  var wH = window.innerHeight;
  for(var i=1; i<61; i++){
  document.getElementById("phantomline-" + i).setAttribute("y2", wH);
  x1 = x1 + 20;
  document.getElementById("phantomline-" + i).setAttribute("x1", x1);
  document.getElementById("phantomline-" + i).setAttribute("x2", x1);
  document.getElementById("line-" + i).setAttribute("x1", x1);
  document.getElementById("line-" + i).setAttribute("x2", x1);
  }
}
var x;
var y;
function showCoords(event) {
    x = event.clientX -50;
    y = event.clientY;
    /*var wH = window.innerHeight;
    for(var i=1; i<21; i++){
      var rNum = Math.floor((Math.random() * wH) + 1);
      document.getElementById("line-" + i).setAttribute("y2", rNum);*/
      // document.getElementById("anim-" + i).setAttribute("to", rNum);
      // document.getElementById("anim-" + i).setAttribute("begin", "0s");

      // var line = document.getElementById("line-" + i);
      // var animate = document.getElementById("anim-" + i);
      // var newAnimate = document.createElement("animate");
      // newAnimate.innerHTML = "<animate id=anim-" + i + " attributeName='y2' dur='2s' begin='0s' fill='freeze' to=" + rNum + "></animate>";
      // animate.line.replaceChild(newAnimate, animate);
    // }
}
function changeLine(event) {
    var wH = window.innerHeight;
    // var y = event.clientY + 200;
    console.log(y);
    var rNum = Math.floor((Math.random() * wH) + 1);
    document.getElementById("line-" + event).setAttribute("y2", y);
}
