/*
$(document).ready(function() {
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
    console.log(newvalueX);
    console.log(newvalueY);
});
});
*/

var img;
function over(i){
    img = i;
    document.getElementById("over").style.display = "block";
    /*var child = document.getElementById("over-img");
    child.parentNode.removeChild(child);
    document.getElementById("over-img").parentNode.removeChild;
    var x;
    console.log("0");
    switch (i){
        case "img1": x = "e-pix/e-excel.JPG"; break;
        case "img2": x = "e-pix/e-word.JPG"; break;
        case "img3": x = "e-pix/e-powerpoint.JPG"; break;
        case "img4": x = "e-pix/e-outlook.JPG"; break;
        case "img5": x = "e-pix/e-cte.JPG"; break;
        case "img6": x = "e-pix/e-csp.JPG"; break;
        case "img7": x = "e-pix/e-hour of code.JPG"; break;
        case "img8": x = "e-pix/e-cts1.JPG"; break;
        case "img9": x = "e-pix/e-cts2.JPG"; break;
        case "img10": x = "e-pix/e-bottega.JPG"; break;
        case "img11": x = "e-pix/e-math.JPG"; break;
        case "img12": x = "e-pix/e-fed1.JPG"; break;
        case "img13": x = "e-pix/e-fed2.JPG"; break;
        case "img14": x = "e-pix/e-fed3.JPG"; break;
        case "img15": x = "img/ph.png"; break;
        default: x = "img/ph.png";
    }
    console.log("1");



    var newdiv = document.createElement("img");
    newdiv.innerHTML =
        "<img id=over-img src='"+ x +"'></img>";
    var olddiv = document.getElementById("over-img");
    document.getElementById("over-content").replaceChild(newdiv, olddiv);
    console.log("2");
    document.getElementById('over-img').style.backgroundImage = x;*/

    var x;
    for(x = 1; x <= 15; x++){
        var y = "over-content-img-" + x;
        console.log(y);
        document.getElementById(y).style.display="none";
        console.log(y + " display = none");
        y = "over-content-text-" + x;
        console.log(y);
        document.getElementById(y).style.display="none";
        console.log(y + " display = none");
    }
    /*
    document.getElementById("over-content-img-1").style.display="none";
    document.getElementById("over-content-img-2").style.display="none";
    document.getElementById("over-content-img-3").style.display="none";
    document.getElementById("over-content-img-4").style.display="none";
    document.getElementById("over-content-img-5").style.display="none";
    document.getElementById("over-content-img-6").style.display="none";
    document.getElementById("over-content-img-7").style.display="none";
    document.getElementById("over-content-img-8").style.display="none";
    document.getElementById("over-content-img-9").style.display="none";
    document.getElementById("over-content-img-10").style.display="none";
    document.getElementById("over-content-img-11").style.display="none";
    document.getElementById("over-content-img-12").style.display="none";
    document.getElementById("over-content-img-13").style.display="none";
    document.getElementById("over-content-img-14").style.display="none";
    document.getElementById("over-content-img-15").style.display="none";
    */
    // var imgs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
    // var img = i;

    var a = "over-content-img-" + i;
    document.getElementById(a).style.display="inline";
    var b = "over-content-text-" + i;
    document.getElementById(b).style.display="inline";

    /*switch (i){
        case "1":
            document.getElementById("over-content-img-1").style.display="inline";
            break;
        case "2":
            document.getElementById("over-content-img-2").style.display="inline";
            break;
        case "3":
            document.getElementById("over-content-img-3").style.display="inline";
            break;
        case "4":
            document.getElementById("over-content-img-4").style.display="inline";
            break;
        case "5":
            document.getElementById("over-content-img-5").style.display="inline";
            break;
        case "6":
            document.getElementById("over-content-img-6").style.display="inline";
            break;
        case "7":
            document.getElementById("over-content-img-7").style.display="inline";
            break;
        case "8":
            document.getElementById("over-content-img-8").style.display="inline";
            break;
        case "9":
            document.getElementById("over-content-img-9").style.display="inline";
            break;
        case "10":
            document.getElementById("over-content-img-10").style.display="inline";
            break;
        case "11":
            document.getElementById("over-content-img-11").style.display="inline";
            break;
        case "12":
            document.getElementById("over-content-img-12").style.display="inline";
            break;
        case "13":
            document.getElementById("over-content-img-13").style.display="inline";
            break;
        case "14":
            document.getElementById("over-content-img-14").style.display="inline";
            break;
        case "15":
            document.getElementById("over-content-img-15").style.display="inline";
            break;
        default: x = "img/ph.png";
    }*/
    addEventListener("keypress", myFunction);

function myFunction(event) {
    var x = event.keyCode;
    if (x == 37) {  // 37 is the LArrow key
        overback();
    }
    if (x == 39) {  // 119 is the RArrow key
        overnext();
    }
}
}
function overnext(){
    img = img +++ 1;
    if(img >= 16){
        img = 1;
    }
    over(img);
}
function overback(){
    img = img - 1;
    if(img <= 0){
        img = 15;
    }
    over(img);
}

function overexit(){
    // var child = document.getElementById("over-img");
    // child.parentNode.removeChild(child);
    document.getElementById("over").style.display = "none";
    console.log("3");
}
