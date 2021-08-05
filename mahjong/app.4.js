////////////////////////////////////////////////////////////////////////////
//THE MAHJONG GAME////VERSION: 3.0//////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
//© 2017. JOSEPH CHRISTIANSEN. All rights reserved./////////////////////////
////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////
//CODE/////////////////////////////CODE///////////////////////////////CODE//
////////////////////////////////////////////////////////////////////////////
// var w = window.innerWidth;
// var h = window.innerHeight;
// var tileW = (w/7);
// var tileH = (h/7);
// var tileW = 80;
// var tileH = 80;
// var tileP = 10;
// var tileX = 0;
// var tileY = 0;

var color = color1;
var tilesLeft = 72;
var play=1;

//////////////
//TILE FILES//
//////////////
var tileMetadata = [];
var files=color1;
var color1 = ["zet00.png", "zet01.png", "zet02.png", "zet03.png", "zet04.png", "zet05.png", "zet06.png", "zet07.png", "zet08.png", "zet09.png", "zet10.png", "zet11.png"];
var onlyFour = [0,0,0,0,0,0,0,0,0,0,0,0];

////////////////////////////////////////////////////////////////////////////
//LAYTILES////////////////////////LAYTILES////////////////////////LAYTILES//
////////////////////////////////////////////////////////////////////////////
var t4color = "rgba(0,0,0,0)";
var t3color = "rgba(0,0,0,0)";
var t2color = "rgba(0,0,0,0)";
var t1color = "rgba(0,0,0,0)";
var tw = "46";
var th = "56";
function layTiles(){
  
    console.log("start");

files = color1;
///////////////////////////////////////////////////////////////////////
//TIER 4////////////////////////TIER 4/////////////////////////TIER 4//
///////////////////////////////////////////////////////////////////////
// tileX = (tileW);
var x = 70;
var y = 0;
var img = 0;
var imgFile;
for (var i = 0; i <= 44; i++){	
randomimg();
function randomimg(){
  img = Math.floor((Math.random() * 12) + 0);
  console.log("onlyFour"+onlyFour[img]);
	if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	}
	console.log("onlyFour"+onlyFour[img]);
}
	imgFile = files[img];
	onlyFour[img]=(onlyFour[img]+1);
	var button = document.createElement("DIV");
	button.setAttribute("id", "d"+i);
    document.getElementById("game-board").appendChild(button);
    console.log(imgFile);
    document.getElementById("d"+i).style.background = 'url('+imgFile+')';
    // document.getElementById("d"+i).style.width = tileW;
    // document.getElementById("d"+i).style.height = tileH;
    document.getElementById("d"+i).style.position = "relative";
    document.getElementById("d"+i).style.top = y;
    document.getElementById("d"+i).style.left = x;
	 tileMetadata.push(("d"+i));
	 tileMetadata.push(imgFile);
	 if(i===0||i==5||i==12||i==19||i==26||i==33||i==40||i==4||i==11||i==18||i==25||i==32||i==39||i==44){
	  tileMetadata.push("1");
	 }else{
	  tileMetadata.push("0");
	 }console.log("tileMetadata line 84: " + tileMetadata);
	 //tileX = tileW;
if (i == 4||i == 11||i == 18||i == 25||i == 32){y = y + 70;x=0;}
else if (i == 39){y = y + 70;x=70;}
else {x = x + 70;}
}

///////////////////////////////////////////////////////////////////////
//TIER 3////////////////////////TIER 3/////////////////////////TIER 3//
///////////////////////////////////////////////////////////////////////

// tileW = ((w - 20)/7);
// tileH = ((h - 20)/7);
// tileP = 10;
var x3 = 130;
var y3 = 60;
var img3 = 0;
var imgFile3;
for (var i3 = 0; i3 <= 20; i3++){	
randomimg3();
function randomimg3(){
  img3 = Math.floor((Math.random() * 12) + 0);
  console.log("onlyFour"+onlyFour[img3]);
	if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	}
	console.log("onlyFour"+onlyFour[img3]);
}
	imgFile3 = files[img3];
	onlyFour[img3]=(onlyFour[img3]+1);
	button = document.createElement("DIV");
	button.setAttribute("id", "c"+i3);
    document.getElementById("game-board").appendChild(button);
    console.log(imgFile3);
    document.getElementById("c"+i3).style.background = 'url('+imgFile3+')';
    // document.getElementById("c"+i3).style.width = tileW;
    // document.getElementById("c"+i3).style.height = 56;
    document.getElementById("c"+i3).style.position = "relative";
    document.getElementById("c"+i3).style.top = y3;
    document.getElementById("c"+i3).style.left = x3;
	 tileMetadata.push(("c"+i3));
	 tileMetadata.push(imgFile3);
	 if(i3===0||i3==3||i3==8||i3==13||i3==18||i3==2||i3==7||i3==12||i3==17||i3==20){
	  tileMetadata.push("1");
	 }else{
	  tileMetadata.push("0");
	 }console.log("tileMetadata line 136: " + tileMetadata);
if (i3 == 2||i3 == 7||i3 == 12){y3 = y3 + 70;x3=60;}
else if(i3 == 17){y3 = y3 + 70;x3=130;}
else {x3 = x3 + 70;}
}
///////////////////////////////////////////////////////////////////////
//TIER 2////////////////////////TIER 2/////////////////////////TIER 2//
///////////////////////////////////////////////////////////////////////

// tileW = ((w - 20)/7);
// tileH = ((h - 20)/7);
// tileP = 10;
var x2 =190;
var y2 = 120;
var img2 = 0;
var imgFile2;
for (var i2 = 0; i2 <= 4; i2++){	
randomimg2();
function randomimg2(){
  img2 = Math.floor((Math.random() * 12) + 0);
  console.log("onlyFour"+onlyFour[img2]);
	if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	}
	console.log("onlyFour"+onlyFour[img2]);
}  
	imgFile2 = files[img2];
	onlyFour[img2]=(onlyFour[img2]+1);
	button = document.createElement("DIV");
	button.setAttribute("id", "b"+i2);
    document.getElementById("game-board").appendChild(button);
    console.log(imgFile2);
    document.getElementById("b"+i2).style.background = 'url('+imgFile2+')';
    // document.getElementById("b"+i2).style.width = tileW;
    // document.getElementById("b"+i2).style.height = 56;
    document.getElementById("b"+i2).style.position = "relative";
    document.getElementById("b"+i2).style.top = y2;
    document.getElementById("b"+i2).style.left = x2;
	 tileMetadata.push(("b"+i2));
	 tileMetadata.push(imgFile2);
	 if(i2===0||i2==1||i2==4||i2==3){
	  tileMetadata.push("1");
	 }else{
	  tileMetadata.push("0");
	 }console.log("tileMetadata line 172: " + tileMetadata);
if (i2 == 0){y2 = y2 + 70;x2=120;}
else if (i2 == 3){y2 = y2 + 70;x2=190;}
else {x2 = x2 + 70;}
}
///////////////////////////////////////////////////////////////////////
//TIER 1////////////////////////TIER 1/////////////////////////TIER 1//
///////////////////////////////////////////////////////////////////////

// tileW = ((w - 20)/7);
// tileH = ((h - 20)/7);
// tileP = 10;
var x1 = 180;
var y1 = 180;
var img1 = 0;
var imgFile1;
	randomimg1();
function randomimg1(){
  img1 = Math.floor((Math.random() * 12) + 0);
  console.log("onlyFour"+onlyFour[img1]);
	if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	}
	console.log("onlyFour"+onlyFour[img1]);
}
	imgFile1 = files[img1];
	onlyFour[img1]=(onlyFour[img1]+1);
	button = document.createElement("DIV");
	button.setAttribute("id", "a"+1);
    document.getElementById("game-board").appendChild(button);
    console.log(imgFile1);
    document.getElementById("a"+1).style.background = 'url('+imgFile1+')';
    // document.getElementById("a"+1).style.width = tileW;
    // document.getElementById("a"+1).style.height = 56;
    document.getElementById("a"+1).style.position = "relative";
    document.getElementById("a"+1).style.top = y1;
    document.getElementById("a"+1).style.left = x1;
  tileMetadata.push(("a1"));
  tileMetadata.push(imgFile1);
  tileMetadata.push("1");
  console.log("tileMetadata line 204: " + tileMetadata);



///////////////////////////////////////////////////////////////////////
//RULES//////////////////////////RULES//////////////////////////RULES//
///////////////////////////////////////////////////////////////////////


var ci;
var clickCheck = 0;
var clickHistory = [];
var clicking;
function click(t){
  console.log("tile " + t + " clicked");
  clickCheck = clickCheck + 1;
  if(clickCheck == 1){
    clicking = ((tileMetadata.indexOf(t))+2);
    clicking = tileMetadata[clicking];
    console.log("clicking: " + clicking);
    if(clicking == "1"){
      ci = t;
      document.getElementById(t).style.filter = 'brightness(.5)';
      console.log("test"+t);
      
      clickHistory.push(t);
    }
    if(clicking == "0"){
      clickHistory.length = 0;
      clickCheck = 0;
    }
  }
/////////////////////////////////////////////////////////////////////////
  if(clickCheck == 2){
    clicking = ((tileMetadata.indexOf(t))+2);
    clicking = tileMetadata[clicking];
    console.log("clicking: " + clicking);
      if(clicking == "1"){
        clickHistory.push(t);
      }
      if(clicking == "0"){
        clickHistory.push(t);
        document.getElementById(clickHistory[0]).style.filter = 'none';
    	document.getElementById(clickHistory[1]).style.filter = 'none';
        clickHistory.length = 0;
        clickCheck = 0;
      }
    }
/////////////////////////////////////////////////////////////////////////
  if(clickCheck >= 2 ){
    console.log("clickCheck = 2");
    var tile1 = ((tileMetadata.indexOf(clickHistory[0]))+1);
    tile1 = tileMetadata[tile1];
    var tile2 = ((tileMetadata.indexOf(clickHistory[1]))+1);
    tile2 = tileMetadata[tile2];
    if(clickHistory[0]!==clickHistory[1]){
      if(tile1 == tile2){
      tileMetadata[((tileMetadata.indexOf(clickHistory[0]))+5)]="1";
      tileMetadata[((tileMetadata.indexOf(clickHistory[0]))-1)]="1";
      tileMetadata[((tileMetadata.indexOf(clickHistory[1]))+5)]="1";
      tileMetadata[((tileMetadata.indexOf(clickHistory[1]))-1)]="1";
      
      
      
      document.getElementById(clickHistory[0]).style.animation = 'blur 1s forwards';
      document.getElementById(clickHistory[1]).style.animation = 'blur 1s forwards';
      tilesLeft = tilesLeft -2;
      console.log("------------");
      console.log("ONLY FOUR: " + onlyFour);
      
    }
    }
    document.getElementById(clickHistory[0]).style.filter = 'none';
    document.getElementById(clickHistory[1]).style.filter = 'none';
    clickHistory.length = 0;
    clickCheck = 0;
    console.log("CI: "+ci);
    document.getElementById(ci).style.filter = 'none';
    if(tilesLeft <= 0){
    	alert("you win!");
    }
  }
  console.log("clickHistory =" + clickHistory);
  console.log("------------");
}


document.getElementById("d0").addEventListener("click", function(){click("d0");});
document.getElementById("d1").addEventListener("click", function(){click("d1");});
document.getElementById("d2").addEventListener("click", function(){click("d2");});
document.getElementById("d3").addEventListener("click", function(){click("d3");});
document.getElementById("d4").addEventListener("click", function(){click("d4");});
document.getElementById("d5").addEventListener("click", function(){click("d5");});
document.getElementById("d6").addEventListener("click", function(){click("d6");});
document.getElementById("d7").addEventListener("click", function(){click("d7");});
document.getElementById("d8").addEventListener("click", function(){click("d8");});
document.getElementById("d9").addEventListener("click", function(){click("d9");});
document.getElementById("d10").addEventListener("click", function(){click("d10");});
document.getElementById("d11").addEventListener("click", function(){click("d11");});
document.getElementById("d12").addEventListener("click", function(){click("d12");});
document.getElementById("d13").addEventListener("click", function(){click("d13");});
document.getElementById("d14").addEventListener("click", function(){click("d14");});
document.getElementById("d15").addEventListener("click", function(){click("d15");});
document.getElementById("d16").addEventListener("click", function(){click("d16");});
document.getElementById("d17").addEventListener("click", function(){click("d17");});
document.getElementById("d18").addEventListener("click", function(){click("d18");});
document.getElementById("d19").addEventListener("click", function(){click("d19");});
document.getElementById("d20").addEventListener("click", function(){click("d20");});
document.getElementById("d21").addEventListener("click", function(){click("d21");});
document.getElementById("d22").addEventListener("click", function(){click("d22");});
document.getElementById("d23").addEventListener("click", function(){click("d23");});
document.getElementById("d24").addEventListener("click", function(){click("d24");});
document.getElementById("d25").addEventListener("click", function(){click("d25");});
document.getElementById("d26").addEventListener("click", function(){click("d26");});
document.getElementById("d27").addEventListener("click", function(){click("d27");});
document.getElementById("d28").addEventListener("click", function(){click("d28");});
document.getElementById("d29").addEventListener("click", function(){click("d29");});
document.getElementById("d30").addEventListener("click", function(){click("d30");});
document.getElementById("d31").addEventListener("click", function(){click("d31");});
document.getElementById("d32").addEventListener("click", function(){click("d32");});
document.getElementById("d33").addEventListener("click", function(){click("d33");});
document.getElementById("d34").addEventListener("click", function(){click("d34");});
document.getElementById("d35").addEventListener("click", function(){click("d35");});
document.getElementById("d36").addEventListener("click", function(){click("d36");});
document.getElementById("d37").addEventListener("click", function(){click("d37");});
document.getElementById("d38").addEventListener("click", function(){click("d38");});
document.getElementById("d39").addEventListener("click", function(){click("d39");});
document.getElementById("d40").addEventListener("click", function(){click("d40");});
document.getElementById("d41").addEventListener("click", function(){click("d41");});
document.getElementById("d42").addEventListener("click", function(){click("d42");});
document.getElementById("d43").addEventListener("click", function(){click("d43");});
document.getElementById("d44").addEventListener("click", function(){click("d44");});


document.getElementById("c0").addEventListener("click", function(){click("c0");});
document.getElementById("c1").addEventListener("click", function(){click("c1");});
document.getElementById("c2").addEventListener("click", function(){click("c2");});
document.getElementById("c3").addEventListener("click", function(){click("c3");});
document.getElementById("c4").addEventListener("click", function(){click("c4");});
document.getElementById("c5").addEventListener("click", function(){click("c5");});
document.getElementById("c6").addEventListener("click", function(){click("c6");});
document.getElementById("c7").addEventListener("click", function(){click("c7");});
document.getElementById("c8").addEventListener("click", function(){click("c8");});
document.getElementById("c9").addEventListener("click", function(){click("c9");});
document.getElementById("c10").addEventListener("click", function(){click("c10");});
document.getElementById("c11").addEventListener("click", function(){click("c11");});
document.getElementById("c12").addEventListener("click", function(){click("c12");});
document.getElementById("c13").addEventListener("click", function(){click("c13");});
document.getElementById("c14").addEventListener("click", function(){click("c14");});
document.getElementById("c15").addEventListener("click", function(){click("c15");});
document.getElementById("c16").addEventListener("click", function(){click("c16");});
document.getElementById("c17").addEventListener("click", function(){click("c17");});
document.getElementById("c18").addEventListener("click", function(){click("c18");});
document.getElementById("c19").addEventListener("click", function(){click("c19");});
document.getElementById("c20").addEventListener("click", function(){click("c20");});


document.getElementById("b0").addEventListener("click", function(){click("b0");});
document.getElementById("b1").addEventListener("click", function(){click("b1");});
document.getElementById("b2").addEventListener("click", function(){click("b2");});
document.getElementById("b3").addEventListener("click", function(){click("b3");});
document.getElementById("b4").addEventListener("click", function(){click("b4");});


document.getElementById("a1").addEventListener("click", function(){click("a1");});

}