var numSquares = 6;
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetButton = document.getElementById("reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
easybtn.addEventListener("click", function(){
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
        for(var i = 0; i < squares.length; i++){
            if(colors[i]){
                squares[i].style.background = colors[i];
            }
            else{
                squares[i].style.display = "none";
            }
        }
    });
    
    hardbtn.addEventListener("click", function(){
        easybtn.classList.remove("selected");
        hardbtn.classList.add("selected");
        numSquares = 6;
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for(var i = 0; i < squares.length; i++){
            squares[i].style.background = colors[i];
            if(colors[i]){
                squares[i].style.display = "block";
            }
        }
    });
        
resetButton.addEventListener("click", function(){
     colors = generateRandomColors(numSquares);
     pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    this.textContent = "new color";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
});
colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedcolor = this.style.background;
        if(clickedcolor === pickedColor){
            h1.style.background = clickedcolor;
            messageDisplay.textContent = "CORRECT";
            resetButton.textContent = "play again?";
            changeColors(clickedcolor);
            
            }
        else {
            this.style.background = "#232323";
            messageDisplay.textContent = "TRY AGAIN";
        }
        
    });
}
function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}
function pickColor(){
 var random =  Math.floor(Math.random() * colors.length);
 return colors[random];
}
function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
var r = Math.floor(Math.random() * 256);
 var g =  Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  "rgb(r, g, b)"
 return "rgb(" + r + ", " + g + ", " + b + ")"
}