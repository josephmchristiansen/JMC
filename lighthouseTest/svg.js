
var time;
function showCoords(event) {
    var x = event.clientX -50;
    var y = event.clientY -50;
    // x = x / 4;
    // y = y / 4;
    
    
    time = setTimeout(move, 100);
    
    function move(){
    
    
    document.getElementById("line-1").setAttribute("x2", x-100);
    document.getElementById("line-1").setAttribute("y2", y);
    document.getElementById("line-2").setAttribute("x2", x);
    document.getElementById("line-2").setAttribute("y2", y-100);
    
    
    document.getElementById("circle").setAttribute("cx", x+0);
    document.getElementById("circle").setAttribute("cy", y+0);
    }
}