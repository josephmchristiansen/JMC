// When ready...
window.addEventListener("load",function() {
	// Set a timeout...
	setTimeout(function(){
		// Hide the address bar!
		window.scrollTo(0, 1);
	},0);
});
var matrix = [];
var matrix_value_range = 6;
var matrix_level = 6;
var matrix_memory = [];
var matrix_memory_values = [];
var matrix_progress = 0;
var matrix_mode = "b";
var matrix_peek = 1;
var matrix_settings_status = 1;
var matrix_prep_time = 3;
// var matrix_duration_timer;

function matrix_mode_change(mode){
    matrix_mode = mode;
    if(matrix_mode === "a"){
        // document.getElementById("matrix").style.color = "#6c8bac";
        for(var i = 1; i <= 40; i++){
        var id_temp = "box_" + i;
        // var value_check = matrix_memory
        document.getElementById(id_temp).style.visibility = "visible";
        }
    }else if(matrix_mode === "b"){
        // document.getElementById("matrix").style.color = "#6c8bac";
        for(var i = 1; i <= 40; i++){
        var id_temp = "box_" + i;
        // var value_check = matrix_memory
        document.getElementById(id_temp).style.visibility = "hidden";
        }
    }else if(matrix_mode === "c"){
        // document.getElementById("matrix").style.color = "#6c8bac";
    }
}
function matrix_level_change(change){
    var x = document.getElementById('matrix_level_slider').value;
    matrix_level = x;
    // if
    matrix_level = matrix_level +++ change;
    document.getElementById('matrix_level_slider').value = matrix_level;
    document.getElementById("matrix_level_display").innerHTML = matrix_level + "&nbsp; TILES";
    document.getElementById("matrix_score_display").innerHTML = matrix_progress + "/" + matrix_level;
    if(matrix_value_range < matrix_level){
        matrix_value_range = matrix_level;
        document.getElementById("matrix_range_display").innerHTML = "NUMBERS:&nbsp;&nbsp;1&nbsp;&nbsp;-&nbsp;&nbsp;" + matrix_value_range;
    }
    if(matrix_level <= 1){
        matrix_level = 1;
        document.getElementById("matrix_level_display").innerHTML = matrix_level + "&nbsp; TILE";
        document.getElementById("matrix_score_display").innerHTML = matrix_progress + "/" + matrix_level;
    }else if(matrix_level >= 40){
        matrix_level = 40;
        document.getElementById("matrix_level_display").innerHTML = matrix_level + "&nbsp; TILES";
        document.getElementById("matrix_score_display").innerHTML = matrix_progress + "/" + matrix_level;
        document.getElementById('matrix_level_slider').value = matrix_level;
    }
}
function matrix_value_range_change(change){
    var x = document.getElementById('matrix_range_slider').value;
    matrix_value_range = x;
    // if
    matrix_value_range = matrix_value_range +++ change;
    document.getElementById('matrix_range_slider').value = matrix_value_range;
    document.getElementById("matrix_range_display").innerHTML = "NUMBERS:&nbsp;&nbsp;1&nbsp;&nbsp;-&nbsp;&nbsp;" + matrix_value_range;
    if(matrix_value_range < matrix_level){
        matrix_value_range = matrix_level;
        document.getElementById("matrix_range_display").innerHTML = "NUMBERS:&nbsp;&nbsp;1&nbsp;&nbsp;-&nbsp;&nbsp;" + matrix_value_range;
    }else if(matrix_value_range >= 1000){
        matrix_value_range = 1000;
        document.getElementById("matrix_range_display").innerHTML = "NUMBERS:&nbsp;&nbsp;1&nbsp;&nbsp;-&nbsp;&nbsp;" + matrix_value_range;
        document.getElementById('matrix_range_slider').value = matrix_value_range;
    }
}


function matrix_prep_time_change(change){
    var x = document.getElementById('matrix_time_slider').value;
    matrix_prep_time = x;
    // if
    matrix_prep_time = matrix_prep_time +++ change;
    document.getElementById('matrix_time_slider').value = matrix_prep_time;
    document.getElementById("matrix_time_display").innerHTML = "PREP TIME:&nbsp;&nbsp;" + matrix_prep_time + "&nbsp;SECONDS";
    if(matrix_prep_time < 1){
        matrix_prep_time = 1;
        document.getElementById("matrix_time_display").innerHTML = "PREP TIME:&nbsp;&nbsp;" + matrix_prep_time + "&nbsp;SECONDS";
    }else if(matrix_prep_time >= 60){
        matrix_prep_time = 60;
        document.getElementById("matrix_time_display").innerHTML = "PREP TIME:&nbsp;&nbsp;" + matrix_prep_time + "&nbsp;SECONDS";
        document.getElementById('matrix_time_slider').value = matrix_prep_time;
    }
}



function matrix_reset(){
    console.log("\n MATRIX_RESET");
    matrix_mode_change(matrix_mode);
    document.getElementById("matrix_score_display").innerHTML = matrix_progress + "/" + matrix_level;
    document.getElementById("matrix").style.color = "#fff";
    for(var i = 1; i <= 40; i++){
            var id_temp = "box_" + i;
            document.getElementById(id_temp).style.color = "#fff";
        }
    matrix = [];
    matrix_memory = [];
    matrix_memory_values = [];
    matrix_progress = 0;
    var id_temp, status_temp, value_temp;
    for(var i = 1; i <= 40; i++){
        id_temp = "box_" + i;
        console.log("id_temp: " + id_temp);
        document.getElementById(id_temp).innerHTML = " ";
        document.getElementById(id_temp).style.background = "#6c8bac";
        value_temp = null;
        status_temp = 0;
        matrix.push(id_temp);
        matrix.push(status_temp);
        matrix.push(value_temp);
    }
    console.log("MATRIX: " + matrix);
}

function matrix_peek_change(){
    matrix_peek += 1;
    if(matrix_peek%2 == 0){
        // document.getElementById("matrix").style.color = "#fff !important";
        for(var i = 1; i <= 40; i++){
            var id_temp = "box_" + i;
            document.getElementById(id_temp).style.color = "#fff";
        }
        console.log("MATRIX_PEEK: 1");
    }else{
        // document.getElementById("matrix").style.color = "#6c8bac !important";
        for(var i = 1; i <= 40; i++){
            var id_temp = "box_" + i;
            document.getElementById(id_temp).style.color = "#6c8bac";
        }
        console.log("MATRIX_PEEK: 0");
    }
}

function matrix_click(matrix_id){
    var matrix_temp = matrix.indexOf(matrix_id) + 1;
    var matrix_status = matrix[matrix_temp];
    matrix_temp += 1;
    var matrix_value = matrix[matrix_temp];
    console.log("MATRIX_CLICK\n MATRIX_PROGRESS: " + matrix_progress + "\n ID: " + matrix_id + "\n STATUS: " + matrix_status + "\n VALUE: " + matrix_value);
    
    if(matrix_value == matrix_memory_values[matrix_progress]){
        console.log("CORRECT");
        document.getElementById(matrix_id).style.background = "hsl(120, 28%, 19%)";
        // document.getElementById(matrix_id).style.color = "#fff !important";
        // document.getElementById(matrix_id).className = "matrix2";
        matrix_progress += 1;
        document.getElementById("matrix_score_display").innerHTML = matrix_progress + "/" + matrix_level;
    }else{
        console.log("CORRECT");
        document.getElementById(matrix_id).style.background = "hsl(0, 28%, 19%)";
        // document.getElementById(matrix_id).style.color = "#fff !important";
    }
    
    if(matrix_mode === "a"){
        // document.getElementById("matrix").style.color = "#6c8bac";
        // document.getElementById("matrix").style.color = "#6c8bac";
        for(var i = 1; i <= 40; i++){
            var id_temp = "box_" + i;
            document.getElementById(id_temp).style.color = "#6c8bac";
        }
    }else if(matrix_mode === "b"){
        // document.getElementById("matrix").style.color = "#6c8bac";
        // document.getElementById("matrix").style.color = "#6c8bac";
        for(var i = 1; i <= 40; i++){
            var id_temp = "box_" + i;
            document.getElementById(id_temp).style.color = "#6c8bac";
        }
    }else if(matrix_mode === "c"){
        // document.getElementById("matrix").style.color = "#6c8bac";
        for(var i = 1; i <= 40; i++){
            var id_temp = "box_" + i;
            document.getElementById(id_temp).style.color = "#6c8bac";
        }
    }
}

function matrix_time_start(){
    setTimeout(matrix_prep_time_end, matrix_prep_time);
}

var matrix_duration_timer = ['','00','00'];
var matrix_timer_int;
var int = 00;
var sec = 00;
var min = 0;
function matrix_timer(action){
    
    
    switch (action) {
        case 'start':
            clearInterval(matrix_timer_int);
            matrix_timer_int = setInterval(matrix_timer_start, 10);
            function matrix_timer_start(){
                int++;
                if(int == 100){
                    int = 0;
                    sec += 01;
                }else if(sec == 60){
                    sec = 0;
                    min += 01;
                    matrix_duration_timer[0] = min;
                    var mdt0 = matrix_duration_timer[0].toString();
                    if(mdt0.toString().length < 2){
                    var min_temp = min.toString();
                    matrix_duration_timer[0] = "0" + min_temp;
                }
                }
                matrix_duration_timer[1] = sec;
                matrix_duration_timer[2] = int;
                
                var mdt1 = matrix_duration_timer[1].toString();
                if(mdt1.length < 2){
                    var sec_temp = sec.toString();
                    matrix_duration_timer[1] = "0" + sec_temp;
                }
                var mdt2 = matrix_duration_timer[2].toString();
                if(mdt2.length < 2){
                    var int_temp = int.toString();
                    matrix_duration_timer[2] = "0" + int_temp;
                }
                
                document.getElementById('matrix_timer').innerHTML = matrix_duration_timer[0] + ":" + matrix_duration_timer[1] + ":" + matrix_duration_timer[2];
                
                // console.log("TIMER: " + matrix_duration_timer);
                
                if(sec == matrix_prep_time){
                    matrix_prep_time_end();
                    console.log("PREP TIME OVER!");
                }
            }
            break;
        
        case 'stop':
            clearInterval(matrix_timer_int);
            console.log("TIMER: STOP" + matrix_duration_timer);
            matrix_duration_timer = ['','00','00'];
            int = 00;
            sec = 00;
            min = 00;
            console.log("TIMER: " + matrix_duration_timer);
            break;
            
        case 'pause':
            clearInterval(matrix_timer_int);
            console.log("TIMER PAUSE: " + matrix_duration_timer);
            break;
            
        default:
            console.log("YOU DONE MESSED UP!");
    }
}
function matrix_prep_time_end(){
    // document.getElementById(matrix_id).style.background = "hsl(120, 28%, 19%)";
    for(var i = 1; i <= 40; i++){
            var id_temp = "box_" + i;
            document.getElementById(id_temp).style.color = "#6c8bac";
        }
}






var filter = -1;
function matrix_start() {
    matrix_timer('stop');
    matrix_timer('start');
    // matrix_time_start();
    document.getElementById("matrix_start").innerHTML = "PLAY<br>AGAIN";
    matrix_reset();
    console.log("MATRIX_START");
    for(var i = 0; i < matrix_level; i++){
        if((matrix_level > matrix_value_range)||(matrix_level > 40)){
            window.alert("ERROR!!! WTF!!! YOU DONE MESSED UP!!!");
            break;
        }
        while(true) {
            var id_temp = Math.floor(Math.random() * 40) + 1;
            id_temp = "box_" + id_temp;
            filter = matrix_memory.indexOf(id_temp);
            if(filter == -1){
                break;
            }
        }
        while(true) {
            var value_temp = Math.floor(Math.random() * matrix_value_range) + 1;
            filter = matrix_memory.indexOf(value_temp);
            if(filter == -1){
                break;
            }
        }
        console.log("id_temp: " + id_temp);
        console.log("value_temp: " + value_temp);
        document.getElementById(id_temp).innerHTML = value_temp;
        document.getElementById(id_temp).style.visibility = "visible";
        matrix_memory.push(id_temp);
        matrix_memory.push(value_temp);
        var matrix_temp = matrix.indexOf(id_temp) + 1;
        matrix[matrix_temp] = 1;
        matrix_temp += 1;
        matrix[matrix_temp] = value_temp;
        matrix_memory_values.push(value_temp);
    }
    console.log("MATRIX:\n " + matrix);
    matrix_memory_values.sort(function(a, b){return a - b});
    console.log("MATRIX_MEMORY_VALUES:\n " + matrix_memory_values);
}




function matrix_settings_btn(){
    matrix_settings_status += 1;
    if(matrix_settings_status%2 == 0){
        document.getElementById("matrix_settings").style.transform = "translateX(0px)";
        console.log("MATRIX_SETTINGS: 1");
    }else{
        document.getElementById("matrix_settings").style.transform = "translateX(-480px)";
        console.log("MATRIX_SETTINGS: 0");
    }
}