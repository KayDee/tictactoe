//adding a line of code
var user_choice = "X";
var computerchoice;
var update = document.getElementById("status");
var blocks;
var realBlocks = [["","",""],["","",""],["","",""]];

var points = 0;

function choose(character){
    update.innerHTML = "YOU CHOSE "+ character;
    user_choice = character;
}

function disappear(){
//    var btns = document.getElementsByTagName("button");
//    for(i = 0; i < btns.length; i++){
//        btns[i].style.top = "-90px";
//    }
    var  title = document.getElementById("title");
    title.style.top = "-50px";
}

function fillblock(){
    this.innerHTML = user_choice;
    if (user_choice == "X"){
        user_choice = "O";
    }else{
        user_choice = "X";
    }
    choose(user_choice);
    disappear();
    makeBlocks();
    win();
}

function disableBtn(){
    var btns = document.getElementsByTagName("button");
    for(i = 0; i < btns.length; i++){
        btns[i].disabled = "true";
    }
}

function makeBlocks(){
    blocks = document.getElementsByClassName("block");
    var j = 0;
    var k = 0;
    for(var i=0; i < blocks.length; i++){
        if(k == 3){
            k = 0;
            j++;
        }
        realBlocks[j][k] = blocks[i].innerText;
        k++;
    }
}

let reloadthepage = () => {
    location.reload();
}


function win(){
    let won = false;
    for(var i = 0; i < 3; i++){
        if(realBlocks[i][0] == "X" && realBlocks[i][1] == "X" && realBlocks[i][2] == "X"){
            update.innerText = "X WON";
            drawLine(i,"horizontal");
            won = true;
            break;
            
        }else if( realBlocks[i][0] == "Y" && realBlocks[i][1] == "Y" && realBlocks[i][2] == "Y" ){
            update.innerText = "Y WON";
            drawLine(i,"horizontal");
            won = true;
            break;
        }
    }
    
    for(var i = 0; i < 3; i++){
        if(realBlocks[0][i] == "X" && realBlocks[1][i] == "X" && realBlocks[2][i] == "X"){
            update.innerText = "X WON";
            drawLine(i, "vertical");
            won = true;
            break;
        }else if( realBlocks[0][i] == "Y" && realBlocks[1][i] == "Y" && realBlocks[2][i] == "Y" ){
            update.innerText = "Y WON";
            drawLine(i, "vertical");
            won = true;
            break;
        }
    }


    if(realBlocks[0][0] == "X" && realBlocks[1][1] == "X" && realBlocks[2][2] == "X"){
        update.innerText = "X WON";
        drawLine(i, "diagonalRight");
        won = true;
    }else if( realBlocks[0][0] == "Y" && realBlocks[1][1] == "Y" && realBlocks[2][2] == "Y" ){
        update.innerText = "Y WON";
        drawLine(i, "diagonalRight");
        won = true;
    }

    if(realBlocks[0][2] == "X" && realBlocks[1][1] == "X" && realBlocks[2][0] == "X"){
        update.innerText = "X WON";
        drawLine(i, "diagonalLeft");
        won = true;
    }else if( realBlocks[0][2] == "Y" && realBlocks[1][1] == "Y" && realBlocks[2][0] == "Y" ){
        update.innerText = "X WON";
        drawLine(i, "diagonalLeft");
        won = true;  
    }
    if(won){
        setTimeout( reloadthepage, 3000);
    }
}


function drawLine(index, dir){
    //confirm(realBlocks[0][0].style.top);
    update.innerText += " "+ dir;
    var line = document.createElement("hr");
    board.appendChild(line);
    line.style.position = "relative";
    line.style.border = "none";
    if(dir == "vertical"){
        
        line.style.left = ( -75.33  + (index * 75.33))+"px";
        line.style.top = -(50 / 2)+"px";
        line.style.backgroundColor = "red";
        line.style.width = "4px";
        line.style.height = "223px";
        
    }else if(dir == "horizontal"){
        
        line.style.left = "0px";
        line.style.top = index * 75.33+10+"px";
        line.style.backgroundColor = "red";
        line.style.width = "220px";
        line.style.height = "4px";  
        
    }else if(dir == "diagonalRight"){
        
    }else{
        
    }
    //appendChild was here
}






