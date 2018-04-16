function cnvs_getCoordinates(e){
x=e.clientX;
y=e.clientY;
he = 400;
wi = 600;
document.getElementById("xycoordinates").innerHTML="Coordinates: (" + x + "," + y + ")";
}
var he = 400;
var wi = 600;
function cnvs_clearCoordinates(){
document.getElementById("xycoordinates").innerHTML="";
}

var a = e.clientX;
var b = e.clientY;
var x = a +++ 300;
var y = b +++ 200;


var context = document.getElementById('canvas').getContext("2d");
var img = new Image();
img.src = "img/night scene 2.jpg";
function imgmove(e){
var a = e.clientX;
var b = e.clientY;
var x = a - 300;
var y = b - 200;

if((a <= 40)&&(b <= 40)){
    x = 0;
    y = 0;
}


// x = a - a;
// y = b - b;





he = he + w;
wi = wi + w;
wi = wi + w;
    context.drawImage(img, x, y, wi, he);
    
}

// window.onload = function() {
//     var canvas = document.getElementById("myCanvas");
//     var ctx = canvas.getContext("2d");
//     var img = document.getElementById("scream");
//   ctx.drawImage(img, 10, 10);
// };

function load(){
    var context = document.getElementById('canvas').getContext("2d");
        var img = new Image();
        img.onload = function (){
            context.drawImage(img, 0, 0, 400, 200);
        }
        img.src = "img/night scene 2.jpg";
}

// var myimage = document.getElementById("canvas");
// if (myimage.addEventListener) {
// 	// IE9, Chrome, Safari, Opera
// 	myimage.addEventListener("mousewheel", MouseWheelHandler, false);
// 	// Firefox
// 	myimage.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
// }
// // IE 6/7/8
// else myimage.attachEvent("onmousewheel", MouseWheelHandler);

// function wheel(e){
// var e = window.event || e; // old IE support
// 	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
// 	console.log(delta);
// // var q = e.wheelDelta;
// // y=e.clientY;
// document.getElementById("wheel").innerHTML="Wheel: " + delta + ".";
// }




var w = 1-1;
console.log("wjefpqhewfiuphh");
console.log(w);
function wheel() {
    w = 1-1;
	var sq = {};
	sq.e = document.getElementById("canvas");
	if (sq.e.naturalWidth) {
		sq.nw = sq.e.naturalWidth;
	}
	else {
		var i = new Image();
		i.src = sq.e.src;
		sq.nw = i.width;
	}
	sq.zoom = 30;
	
	if (sq.e.addEventListener) {
		sq.e.addEventListener("mousewheel", MouseWheelHandler, false);
		sq.e.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
	}
	else sq.e.attachEvent("onmousewheel", MouseWheelHandler);
	
	function MouseWheelHandler(e) {

		// cross-browser wheel delta
		var e = window.event || e;
		var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
console.log(delta);
console.log(w);
console.log("wjefpqhewfiuphh");
if(delta === -1){
    w = w - 10;
    console.log("delta === -1");
    console.log(w);
}else{
    w = w + 10;
    console.log("delta === 1");
    console.log(w);
}

document.getElementById("wheel").innerHTML="Wheel: " + w + ".";
		return false;
	}

}






// window.onload = function() {

// 	var sq = {};
// 	sq.e = document.getElementById("canvas");
// 	if (sq.e.naturalWidth) {
// 		sq.nw = sq.e.naturalWidth;
// 	}
// 	else {
// 		var i = new Image();
// 		i.src = sq.e.src;
// 		sq.nw = i.width;
// 	}
// 	sq.zoom = 30;
	
// 	if (sq.e.addEventListener) {
// 		sq.e.addEventListener("mousewheel", MouseWheelHandler, false);
// 		sq.e.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
// 	}
// 	else sq.e.attachEvent("onmousewheel", MouseWheelHandler);
	
// 	function MouseWheelHandler(e) {

// 		// cross-browser wheel delta
// 		var e = window.event || e;
// 		var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
// // 		sq.e.style.width = Math.max(sq.zoom, Math.min(sq.nw, sq.e.width + (sq.zoom * delta))) + "px";
// document.getElementById("wheel").innerHTML="Wheel: " + delta + ".";
// 		return false;
// 	}

// }