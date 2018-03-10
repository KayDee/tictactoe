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

function win(){
    
    for(var i = 0; i < 3; i++){
        if(realBlocks[i][0] == user_choice && realBlocks[i][1] == user_choice && realBlocks[i][2] == user_choice){
            update.innerText = user_choice + " WON";
            drawLine(i,"horizontal");
            break;
            
        }
    }
    
    for(var i = 0; i < 3; i++){
        if(realBlocks[0][i] == user_choice && realBlocks[1][i] == user_choice && realBlocks[2][i] == user_choice){
            update.innerText = user_choice + " WON";
            drawLine(i, "vertical");
            break;
        }
    }


    if(realBlocks[0][0] == user_choice && realBlocks[1][1] == user_choice && realBlocks[2][2] == user_choice){
        update.innerText = user_choice+" WON";
        drawLine(i, "diagonalRight");
       
    }

    if(realBlocks[0][2] == user_choice && realBlocks[1][1] == user_choice && realBlocks[2][0] == user_choice){
        update.innerText = user_choice+" WON";
        drawLine(i, "diagonalLeft");
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






