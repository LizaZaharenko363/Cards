var attempt = 1;
var playerScore=0;
var compScore = 0;
var nominal1 = 0;
var nominal2 = 0;
function startpage(){
    var player =prompt("What's your name?");
    if(player.length!=0)document.getElementById('player').textContent = player;
}
function play(){
    if(attempt>3){
        alert("Restart the game");
        return;
    }
    var num1 = Math.floor(36*Math.random());
    var num2 = Math.floor(36*Math.random());
    var img1 = document.createElement('img'); 
    var img2 = document.createElement('img'); 

    switch(true){
        case(num1 < 4):
            nominal1 = 6;
            break;
        case(num1 < 8):
            nominal1 = 7;
            break;
        case(num1 < 12):
            nominal1 = 8;
            break;
        case(num1 < 16):
            nominal1 = 9;
            break;
        case(num1 < 20):
            nominal1 = 10;
            break;
        case(num1 < 24):
            nominal1 = 2;
            break;
        case(num1 < 28):
            nominal1 = 3;
            break;
        case(num1 < 32):
            nominal1 = 4;
            break;
        case(num1 < 36):
            nominal1 = 11;
            break;
    }
    switch(true){
        case(num2 < 4):
            nominal2 = 6;
            break;
        case(num2 < 8):
            nominal2 = 7;
            break;
        case(num2 < 12):
            nominal2 = 8;
            break;
        case(num2 < 16):
            nominal2 = 9;
            break;
        case(num2 < 20):
            nominal2 = 10;
            break;
        case(num2 < 24):
            nominal2 = 2;
            break;
        case(num2 < 28):
            nominal2 = 3;
            break;
        case(num2 < 32):
            nominal2 = 4;
            break;
        case(num2 < 36):
            nominal2 = 11;
            break;
    }

    if(nominal1!= nominal2){
        playerScore+=nominal1;
        compScore+=nominal2;
        if(attempt==3){
            if(playerScore>compScore){
                alert("You won:)");
            } 
            if(playerScore<compScore){
                alert("You lost:(");
            }
            if(playerScore==compScore){
                alert("Nobody won");
            }
        }
        attempt++;
    }else alert("Try once more");

    document.getElementById('firstCard').src = "img/"+num1+".png";
    document.getElementById('secondCard').src = "img/"+num2+".png";
    document.getElementById('playScore').textContent = ("You have "+playerScore);
    document.getElementById('compScore').textContent = ("Computer has "+compScore);

}