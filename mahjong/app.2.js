////////////////////////////////////////////////////////////////////////////
//THE MAHJONG GAME////VERSION: 3.0//////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
//© 2017. JOSEPH CHRISTIANSEN. All rights reserved./////////////////////////
////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////
//CODE/////////////////////////////CODE///////////////////////////////CODE//
////////////////////////////////////////////////////////////////////////////
var color = color1;
var tilesLeft = 72;
var play=1;
/*
setScreen("main");
var color = color1;
var tilesLeft = 52;

var play=0;
function hide(){
  document.getElementById('settings.box').style.visibility = 'hidden';
  document.getElementById('color1').style.visibility = 'hidden';
  document.getElementById('color2').style.visibility = 'hidden';
  document.getElementById('color3').style.visibility = 'hidden';
  document.getElementById('htp.box').style.visibility = 'hidden';
  document.getElementById('info.box').style.visibility = 'hidden';
}
onEvent("play.btn", "click", function(){
  play=1;
  setScreen("game");
  layTiles();
});
onEvent("settings1.btn", "click", function(){
  hide();
  showElement("settings.box");
  showElement("color1");
  showElement("color2");
  showElement("color3");
});
onEvent("color1","click",function(){
  color="color1";
});
onEvent("color2","click",function(){
  color="color2";
});
onEvent("color3","click",function(){
  color="color3";
});
onEvent("htp.btn", "click", function(){
  hide();
  showElement("htp.box");
});
onEvent("info1.btn", "click", function(){
  hide();
  showElement("info.box");
});
*/

// document.getElementById("game-start").addEventListener("click", layTiles());
//////////////
//TILE FILES//
//////////////
var tileMetadata = [];
var files=color1;
// var color1 = ["assets/zet00.png", "assets/zet01.png", "assets/zet02.png", "assets/zet03.png", "assets/zet04.png", "assets/zet05.png", "assets/zet06.png", "assets/zet07.png", "assets/zet08.png", "assets/zet09.png", "assets/zet10.png", "assets/zet11.png"];
var color1 = ["zet00.png", "zet01.png", "zet02.png", "zet03.png", "zet04.png", "zet05.png", "zet06.png", "zet07.png", "zet08.png", "zet09.png", "zet10.png", "zet11.png"];
// var color1 = ["assets/zdt00.png", "assets/zdt01.png", "assets/zdt02.png", "assets/zdt03.png", "assets/zdt04.png", "assets/zdt05.png", "assets/zdt06.png", "assets/zdt07.png", "assets/zdt08.png", "assets/zdt09.png", "assets/zdt10.png", "assets/zdt11.png"];
// var color1 = ["ict00.png", "ict01.png", "ict02.png", "ict03.png", "ict04.png", "ict05.png", "ict06.png", "ict07.png", "ict08.png", "ict09.png", "ict10.png", "ict11.png", "ict12.png", "ict13.png", "ict14.png", "ict15.png", "ict16.png", "ict17.png", "ict18.png", "ict19.png", "ict20.png"];
var color2 = ["ct00.png", "ct01.png", "ct02.png", "ct03.png", "ct04.png", "ct05.png", "ct06.png", "ct07.png", "ct08.png", "ct09.png", "ct10.png", "ct11.png", "ct12.png", "ct13.png", "ct14.png", "ct15.png", "ct16.png", "ct17.png", "ct18.png", "ct19.png", "ct20.png"];
var color3 = ["t00.png", "t01.png", "t02.png", "t03.png", "t04.png", "t05.png", "t06.png", "t07.png", "t08.png", "t09.png", "t10.png", "t11.png", "t12.png", "t13.png", "t14.png", "t15.png", "t16.png", "t17.png", "t18.png", "t19.png", "t20.png", "t21.png"];
// var onlyFour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var onlyFour = [0,0,0,0,0,0,0,0,0,0,0,0];
/*function randomNum(r){
  r = Math.floor((Math.random() * 12) + 0);
  console.log("onlyFour"+onlyFour[r]);
	if(onlyFour[r] >= 6){
	  randomNum(r);
	  console.log(r);
	}
	console.log("onlyFour"+onlyFour[r]);
}*/
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
// document.getElementById("restart.btn").addEventListener("click", function(){
//   restart();
// });
/*
function restart(){
  console.log("restarting...");
  deleteElement("1t1");
  for (var z = 0; z<= 1000; z++){}
  for (var i2 = 0; i2 <= 8; i2++){
    var child = document.getElementById("2t"+i2);
    child.parentNode.removeChild(child);
    for (var z = 0; z<= 1000; z++){}
  }
  for (var i3 = 0; i3 <= 24; i3++){	
    child = document.getElementById("3t"+i3);
    child.parentNode.removeChild(child);
    for (var z = 0; z<= 1000; z++){}
  }
  for (var i = 0; i <= 48; i++){
    child = document.getElementById("t"+i);
    child.parentNode.removeChild(child);
    for (var z = 0; z<= 1000; z++){}
  }
  child = document.getElementById("clickIndicator");
    child.parentNode.removeChild(child);
  //for (var z = 0; z<= 10000; z++){}
  onlyFour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  clickHistory.length = 0;
  tileMetadata.length = 0;
  play=1;
  layTiles();
  console.log("ready");
}*/

files = color1;
///////////////////////////////////////////////////////////////////////
//TIER 4////////////////////////TIER 4/////////////////////////TIER 4//
///////////////////////////////////////////////////////////////////////

var x = 169;
var y = 53;
var img = 0;
var imgFile;
for (var i = 0; i <= 44; i++){	
// 	img = (randomNumber(0, 11));
// 	img = Math.floor((Math.random() * 12) + 0);
// 	console.log(img);
// 	var w = onlyFour[img];

// while (onlyFour[img] >= 6){
//   img = Math.floor((Math.random() * 12) + 0);
// }

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
/*console.log("onlyFour"+onlyFour[img]);
	if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	  console.log(img);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	  console.log(img);
	}if(onlyFour[img] >= 6){
	  img = Math.floor((Math.random() * 12) + 0);
	  console.log(img);
	}*/
// 	imgFile = color1[img];
	imgFile = files[img];
	onlyFour[img]=(onlyFour[img]+1);
	var button = document.createElement("DIV");
	button.setAttribute("id", "d"+i);
// 	button.setAttribute("style", )
    document.getElementById("game-board").appendChild(button);
    console.log(imgFile);
    document.getElementById("d"+i).style.background = 'url('+imgFile+')';
    document.getElementById("d"+i).style.position = "relative";
    document.getElementById("d"+i).style.top = y;
    document.getElementById("d"+i).style.left = x;
// 	 button(("t"+i), " ");
// 	 setPosition(("t"+i),x,y,tw,th);
// 	 setProperty(("t"+i),"image", imgFile);
// 	 setProperty(("t"+i), "background-color", t4color);
	 //setProperty(("t"+i), "background-color", "rgb(7, 13, 18)");
	 tileMetadata.push(("d"+i));
	 tileMetadata.push(imgFile);
	 if(i===0||i==5||i==12||i==19||i==26||i==33||i==40||i==4||i==11||i==18||i==25||i==32||i==39||i==44){
	  tileMetadata.push("1");
	 }else{
	  tileMetadata.push("0");
	 }console.log("tileMetadata line 84: " + tileMetadata);
//DELAY//
for (var z = 0; z<= 1000; z++){}
if (i == 4||i == 11||i == 18||i == 25||i == 32){y = y + 52;x=129;}
else if (i == 39){y = y + 52;x=169;}
else {x = x + 40;}
}

///////////////////////////////////////////////////////////////////////
//TIER 3////////////////////////TIER 3/////////////////////////TIER 3//
///////////////////////////////////////////////////////////////////////

var x3 = 209;
var y3 = 101;
var img3 = 0;
var imgFile3;
for (var i3 = 0; i3 <= 20; i3++){	
// 	img3 = (randomNumber(0, 11));
/*img3 = Math.floor((Math.random() * 12) + 0);
while (onlyFour[img3] >= 6){
  img3 = Math.floor((Math.random() * 12) + 0);
}*/
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
/*  img3 = Math.floor((Math.random() * 12) + 0);
  	console.log(img3);
  // 	w = onlyFour[img3];
	if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	  console.log(img3);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	  console.log(img3);
	}if(onlyFour[img3] >= 6){
	  img3 = Math.floor((Math.random() * 12) + 0);
	  console.log(img3);
	}*/
// 	while((onlyFour[img3])==6){
// 	  img3 = (randomNumber(0, 11));
// 	}
	imgFile3 = files[img3];
	onlyFour[img3]=(onlyFour[img3]+1);
	button = document.createElement("DIV");
	button.setAttribute("id", "c"+i3);
// 	button.setAttribute("style", )
    document.getElementById("game-board").appendChild(button);
    console.log(imgFile3);
    document.getElementById("c"+i3).style.background = 'url('+imgFile3+')';
    document.getElementById("c"+i3).style.position = "relative";
    document.getElementById("c"+i3).style.top = y3;
    document.getElementById("c"+i3).style.left = x3;
	 //button(("3t"+i3), " ");
	 //setPosition(("3t"+i3),x3,y3,tw,th);
	 //setProperty(("3t"+i3),"image", imgFile3);
	 //setProperty(("3t"+i3), "background-color", t3color);
	 //setProperty(("3t"+i3), "background-color", "rgb(8,32,67)");
	 tileMetadata.push(("c"+i3));
	 tileMetadata.push(imgFile3);
	 if(i3===0||i3==3||i3==8||i3==13||i3==18||i3==2||i3==7||i3==12||i3==17||i3==20){
	  tileMetadata.push("1");
	 }else{
	  tileMetadata.push("0");
	 }console.log("tileMetadata line 136: " + tileMetadata);
//DELAY//
for (var z = 0; z<= 1000; z++){}
if (i3 == 2||i3 == 7||i3 == 12){y3 = y3 + 52;x3=163;}
else if(i3 == 17){y3 = y3 + 52;x3=209;}
else {x3 = x3 + 40;}
}
///////////////////////////////////////////////////////////////////////
//TIER 2////////////////////////TIER 2/////////////////////////TIER 2//
///////////////////////////////////////////////////////////////////////
var x2 =255;
var y2 = 149;
var img2 = 0;
var imgFile2;
for (var i2 = 0; i2 <= 4; i2++){	
// 	img2 = (randomNumber(0, 11));
/*img2 = Math.floor((Math.random() * 12) + 0);
while (onlyFour[img2] >= 6){
  img2 = Math.floor((Math.random() * 12) + 0);
}*/
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
  /*img2 = Math.floor((Math.random() * 12) + 0);
  	console.log(img2);
  // 	w = onlyFour[img2];
	if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	  console.log(img2);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	  console.log(img2);
	}if(onlyFour[img2] >= 6){
	  img2 = Math.floor((Math.random() * 12) + 0);
	  console.log(img2);
	}*/
// 	while((onlyFour[img2])==6){
// 	  img2 = (randomNumber(0, 11));
// 	}
	imgFile2 = files[img2];
	onlyFour[img2]=(onlyFour[img2]+1);
	button = document.createElement("DIV");
	button.setAttribute("id", "b"+i2);
// 	button.setAttribute("style", )
    document.getElementById("game-board").appendChild(button);
    console.log(imgFile2);
    document.getElementById("b"+i2).style.background = 'url('+imgFile2+')';
    document.getElementById("b"+i2).style.position = "relative";
    document.getElementById("b"+i2).style.top = y2;
    document.getElementById("b"+i2).style.left = x2;
	 //button(("2t"+i2), " ");
	 //setPosition(("2t"+i2),x2,y2,tw,th);
	 //setProperty(("2t"+i2),"image", imgFile2);
	 //setProperty(("2t"+i2), "background-color", t2color);
	 //setProperty(("2t"+i2), "background-color", "rgb(14,58,103)");
	 tileMetadata.push(("b"+i2));
	 tileMetadata.push(imgFile2);
	 if(i2===0||i2==1||i2==4||i2==3){
	  tileMetadata.push("1");
	 }else{
	  tileMetadata.push("0");
	 }console.log("tileMetadata line 172: " + tileMetadata);
//DELAY//
for (var z = 0; z<= 1000; z++){}
if (i2 == 0){y2 = y2 + 52;x2=209;}
else if (i2 == 3){y2 = y2 + 52;x2=128;}
else {x2 = x2 + 40;}
}
///////////////////////////////////////////////////////////////////////
//TIER 1////////////////////////TIER 1/////////////////////////TIER 1//
///////////////////////////////////////////////////////////////////////
var x1 = 123;
var y1 = 197;
var img1 = 0;
var imgFile1;
// img1 = Math.floor((Math.random() * 12) + 0);
// 	console.log(img1);
// 	w = onlyFour[img1];
/*while (onlyFour[img1] >= 6){
  img1 = Math.floor((Math.random() * 12) + 0);
}*/
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
	/*if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	  console.log(img1);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	  console.log(img1);
	}if(onlyFour[img1] >= 6){
	  img1 = Math.floor((Math.random() * 12) + 0);
	  console.log(img1);
	}*/
// img1 = (randomNumber(0, 11));
// while((onlyFour[img1])==6){
// 	  img1 = (randomNumber(0, 11));
// 	}
	imgFile1 = files[img1];
	onlyFour[img1]=(onlyFour[img1]+1);
	button = document.createElement("DIV");
	button.setAttribute("id", "a"+1);
// 	button.setAttribute("style", )
    document.getElementById("game-board").appendChild(button);
    console.log(imgFile1);
    document.getElementById("a"+1).style.background = 'url('+imgFile1+')';
    document.getElementById("a"+1).style.position = "relative";
    document.getElementById("a"+1).style.top = y1;
    document.getElementById("a"+1).style.left = x1;
  // button("1t1", " ");
  // setPosition("1t1",x1,y1,tw,th);
  // setProperty("1t1","image", imgFile1);
  // setProperty("1t1", "background-color", t1color);
  //setProperty("1t1", "background-color", "rgb(27,159,198)");
  tileMetadata.push(("a1"));
  tileMetadata.push(imgFile1);
  tileMetadata.push("1");
  console.log("tileMetadata line 204: " + tileMetadata);

///////////////////////////////////////////////////////////////////////
//CLICK INDICATOR///////////CLICK INDICATOR///////////CLICK INDICATOR//
///////////////////////////////////////////////////////////////////////
/*button("clickIndicator", "");
document.getElementById('clickIndicator').style.visibility = 'hidden';
setPosition("clickIndicator",0,0,tw, th);
setProperty("clickIndicator","background-color","rgba(255, 255, 255, 0.0)");
setProperty("clickIndicator", "image", "assets/CI2.png");*/
///////////////////////////////////////////////////////////////////////
//GUI/////////////////////////////GUI/////////////////////////////GUI//
///////////////////////////////////////////////////////////////////////
/*onEvent("pause", "click", function(){
  
});*/


///////////////////////////////////////////////////////////////////////
//RULES//////////////////////////RULES//////////////////////////RULES//
///////////////////////////////////////////////////////////////////////
//////////////////
//timer function//
//////////////////
// var time = 0;
// var timer;
// timerFunc();
/*function timerFunc(){
timer = setInterval(function(){
  setText("timeBox", time = time + 1);

}, 1000);
}*/



var ci;
//var tilesLeft = 72;
var clickCheck = 0;
var clickHistory = [];
// setText("tilesLeft", 72);
var clicking;
function click(t){
  console.log("tile " + t + " clicked");
  clickCheck = clickCheck + 1;
/////////////////////////////////////////////////////////////////////////
  //if(clickCheck < 3){
  if(clickCheck == 1){
    //clickHistory.push(t);
    //clicking = ((tileMetadata.indexOf(clickHistory[0]))+2);
    clicking = ((tileMetadata.indexOf(t))+2);
    clicking = tileMetadata[clicking];
    //clickHistory.pop();
    console.log("clicking: " + clicking);
    if(clicking == "1"){
      //if("1" === "1"){
      //setProperty(t, "background-color", "#4d4d4d");
      ci = t;
      document.getElementById(t).style.filter = 'brightness(5)';
      // document.getElementById(t).style.filter = 'drop-shadow(16px 16px 10px blue)';
      console.log("test"+t);
      // setPosition("clickIndicator",(getXPosition(t)-5),(getYPosition(t)-5),tw, th);
      // showElement("clickIndicator");
      
      clickHistory.push(t);
      //tilesLeft = tilesLeft-1;
      //setText("tilesLeft", tilesLeft);
    }
    if(clicking == "0"){
      //clickHistory.push(t);
      //colorReset();
      // document.getElementById(clickHistory[0]).style.filter = 'none';
    	// document.getElementById(clickHistory[1]).style.filter = 'none';
      clickHistory.length = 0;
      clickCheck = 0;
    }
  }
/////////////////////////////////////////////////////////////////////////
  if(clickCheck == 2){
    //clickHistory.push(t);
    //clicking = ((tileMetadata.indexOf(clickHistory[1]))+2);
    clicking = ((tileMetadata.indexOf(t))+2);
    clicking = tileMetadata[clicking];
    //clickHistory.pop();
    console.log("clicking: " + clicking);
      if(clicking == "1"){
        //if("1" === "1"){
        //setProperty(t, "background-color", "#4d4d4d");
        clickHistory.push(t);
        //tilesLeft = tilesLeft-1;
        //setText("tilesLeft", tilesLeft);
      }
      if(clicking == "0"){
        clickHistory.push(t);
        //colorReset();
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
      // setText("tilesLeft",tilesLeft);
      console.log("------------");
      console.log("ONLY FOUR: " + onlyFour);
      
    }
    }
    document.getElementById(clickHistory[0]).style.filter = 'none';
    document.getElementById(clickHistory[1]).style.filter = 'none';
    clickHistory.length = 0;
    clickCheck = 0;
    // document.getElementById("clickIndicator").style.visibility = 'hidden';
    console.log("CI: "+ci);
    // for (var z = 0; z<= 1000; z++){}
    document.getElementById(ci).style.filter = 'none';
  }
  console.log("clickHistory =" + clickHistory);
  console.log("------------");
}

/*
function onEvent(a, b, c){
  document.getElementById(a).addEventListener("click", c);
}

onEvent("t0", "click", function(){click("t0");});onEvent("t1", "click", function(){click("t1");});onEvent("t2", "click", function(){click("t2");});onEvent("t3", "click", function(){click("t3");});onEvent("t4", "click", function(){click("t4");});onEvent("t5", "click", function(){click("t5");});onEvent("t6", "click", function(){click("t6");});onEvent("t7", "click", function(){click("t7");});onEvent("t8", "click", function(){click("t8");});onEvent("t9", "click", function(){click("t9");});onEvent("t10", "click", function(){click("t10");});onEvent("t11", "click", function(){click("t11");});onEvent("t12", "click", function(){click("t12");});onEvent("t13", "click", function(){click("t13");});onEvent("t14", "click", function(){click("t14");});onEvent("t15", "click", function(){click("t15");});onEvent("t16", "click", function(){click("t16");});onEvent("t17", "click", function(){click("t17");});onEvent("t18", "click", function(){click("t18");});onEvent("t19", "click", function(){click("t19");});onEvent("t20", "click", function(){click("t20");});onEvent("t21", "click", function(){click("t21");});onEvent("t22", "click", function(){click("t22");});onEvent("t23", "click", function(){click("t23");});onEvent("t24", "click", function(){click("t24");});onEvent("t25", "click", function(){click("t25");});onEvent("t26", "click", function(){click("t26");});onEvent("t27", "click", function(){click("t27");});onEvent("t28", "click", function(){click("t28");});onEvent("t29", "click", function(){click("t29");});onEvent("t30", "click", function(){click("t30");});onEvent("t31", "click", function(){click("t31");});onEvent("t32", "click", function(){click("t32");});onEvent("t33", "click", function(){click("t33");});onEvent("t34", "click", function(){click("t34");});onEvent("t35", "click", function(){click("t35");});onEvent("t36", "click", function(){click("t36");});onEvent("t37", "click", function(){click("t37");});onEvent("t38", "click", function(){click("t38");});onEvent("t39", "click", function(){click("t39");});onEvent("t40", "click", function(){click("t40");});onEvent("t41", "click", function(){click("t41");});onEvent("t42", "click", function(){click("t42");});onEvent("t43", "click", function(){click("t43");});onEvent("t44", "click", function(){click("t44");});onEvent("t45", "click", function(){click("t45");});onEvent("t46", "click", function(){click("t46");});onEvent("t47", "click", function(){click("t47");});onEvent("t48", "click", function(){click("t48");});
onEvent("3t0", "click", function(){click("3t0");});onEvent("3t1", "click", function(){click("3t1");});onEvent("3t2", "click", function(){click("3t2");});onEvent("3t3", "click", function(){click("3t3");});onEvent("3t4", "click", function(){click("3t4");});onEvent("3t5", "click", function(){click("3t5");});onEvent("3t6", "click", function(){click("3t6");});onEvent("3t7", "click", function(){click("3t7");});onEvent("3t8", "click", function(){click("3t8");});onEvent("3t9", "click", function(){click("3t9");});onEvent("3t10", "click", function(){click("3t10");});onEvent("3t11", "click", function(){click("3t11");});onEvent("3t12", "click", function(){click("3t12");});onEvent("3t13", "click", function(){click("3t13");});onEvent("3t14", "click", function(){click("3t14");});onEvent("3t15", "click", function(){click("3t15");});onEvent("3t16", "click", function(){click("3t16");});onEvent("3t17", "click", function(){click("3t17");});onEvent("3t18", "click", function(){click("3t18");});onEvent("3t19", "click", function(){click("3t19");});onEvent("3t20", "click", function(){click("3t20");});onEvent("3t21", "click", function(){click("3t21");});onEvent("3t22", "click", function(){click("3t22");});onEvent("3t23", "click", function(){click("3t23");});onEvent("3t24", "click", function(){click("3t24");});
onEvent("2t0", "click", function(){click("2t0");});onEvent("2t1", "click", function(){click("2t1");});onEvent("2t2", "click", function(){click("2t2");});onEvent("2t3", "click", function(){click("2t3");});onEvent("2t4", "click", function(){click("2t4");});onEvent("2t5", "click", function(){click("2t5");});onEvent("2t6", "click", function(){click("2t6");});onEvent("2t7", "click", function(){click("2t7");});onEvent("2t8", "click", function(){click("2t8");});
onEvent("1t1", "click", function(){click("1t1");});
}
//*/

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