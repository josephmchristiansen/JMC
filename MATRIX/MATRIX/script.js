var matrix = [];
var matrix_value_range = 4;
var matrix_level = 4;
var matrix_memory = [];
var matrix_memory_values = [];
var matrix_progress = 0;
var matrix_mode = "a";
var matrix_peek = 0;

function matrix_mode_change(mode){
    matrix_mode = mode;
    if(matrix_mode === "a"){
        // document.getElementById("matrix").style.color = "hsl(213, 28%, 19%)";
        for(var i = 1; i <= 40; i++){
        var id_temp = "box_" + i;
        // var value_check = matrix_memory
        document.getElementById(id_temp).style.visibility = "visible";
        }
    }else if(matrix_mode === "b"){
        // document.getElementById("matrix").style.color = "hsl(213, 28%, 19%)";
        for(var i = 1; i <= 40; i++){
        var id_temp = "box_" + i;
        // var value_check = matrix_memory
        document.getElementById(id_temp).style.visibility = "hidden";
        }
    }else if(matrix_mode === "c"){
        // document.getElementById("matrix").style.color = "hsl(213, 28%, 19%)";
    }
}
function matrix_level_change(change){
    matrix_level += change;
    document.getElementById("matrix_level_display").innerHTML = matrix_level;
    document.getElementById("matrix_score_display").innerHTML = matrix_progress + "/" + matrix_level;
    if(matrix_value_range < matrix_level){
        matrix_value_range = matrix_level;
        document.getElementById("matrix_value_range_display").innerHTML = matrix_value_range;
    }
    if(matrix_level < 1){
        matrix_level = 1;
        document.getElementById("matrix_level_display").innerHTML = matrix_level;
        document.getElementById("matrix_score_display").innerHTML = matrix_progress + "/" + matrix_level;
    }
}
function matrix_value_range_change(change){
    matrix_value_range += change;
    document.getElementById("matrix_value_range_display").innerHTML = matrix_value_range;
    if(matrix_value_range < matrix_level){
        matrix_value_range = matrix_level;
        document.getElementById("matrix_value_range_display").innerHTML = matrix_value_range;
    }
}




function matrix_reset(){
    console.log("\n MATRIX_RESET");
    matrix_mode_change(matrix_mode);
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
        document.getElementById(id_temp).style.background = "hsl(213, 28%, 19%)";
        value_temp = null;
        status_temp = 0;
        matrix.push(id_temp);
        matrix.push(status_temp);
        matrix.push(value_temp);
    }
    console.log("MATRIX: " + matrix);
}

function matrix_peek_change(status){
    matrix_peek = status;
    if(matrix_peek == 1){
        document.getElementById("matrix").style.color = "#fff !important";
        console.log("MATRIX_PEEK: 1");
    }else if(matrix_peek == 0){
        document.getElementById("matrix").style.color = "hsl(213, 28%, 19%) !important";
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
        document.getElementById(matrix_id).style.color = "#fff !important";
        // document.getElementById(matrix_id).className = "matrix2";
        matrix_progress += 1;
        document.getElementById("matrix_score_display").innerHTML = matrix_progress + "/" + matrix_level;
    }else{
        console.log("CORRECT");
        document.getElementById(matrix_id).style.background = "hsl(0, 28%, 19%)";
        document.getElementById(matrix_id).style.color = "#fff !important";
    }
    
    if(matrix_mode === "a"){
        document.getElementById("matrix").style.color = "hsl(213, 28%, 19%)";
        for(var i = 1; i <= 40; i++){
            var id_temp = "box_" + i;
            document.getElementById(id_temp).style.color = "hsl(213, 28%, 19%)";
        }
    }else if(matrix_mode === "b"){
        document.getElementById("matrix").style.color = "hsl(213, 28%, 19%)";
        for(var i = 1; i <= 40; i++){
            var id_temp = "box_" + i;
            document.getElementById(id_temp).style.color = "hsl(213, 28%, 19%)";
        }
    }else if(matrix_mode === "c"){
        document.getElementById("matrix").style.color = "hsl(213, 28%, 19%)";
        for(var i = 1; i <= 40; i++){
            var id_temp = "box_" + i;
            document.getElementById(id_temp).style.color = "hsl(213, 28%, 19%)";
        }
    }
}


var filter = -1;
function matrix_start() {
    document.getElementById("matrix_start").innerHTML = "RESTART";
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
