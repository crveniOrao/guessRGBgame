numSqueres = 6;
var colors = generateRandomColors(numSqueres);
var squeres = document.querySelectorAll(".squere");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var headerText = document.querySelector("#headerText");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");


// buttons
easyBtn.addEventListener("click", function (){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSqueres = 3;
    colors = generateRandomColors(numSqueres);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squeres.length; i++){
        if(colors[i]){
            squeres[i].style.background = colors[i];
        }
        else {
            squeres[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function (){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSqueres = 6;
    colors = generateRandomColors(numSqueres);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squeres.length; i++){
        squeres[i].style.background = colors[i];
        squeres[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    //generate new colors
    colors = generateRandomColors(numSqueres);
    //pick new corect color
    pickedColor = pickColor();
    //change squeres colors to new one
    for(var i=0; i < squeres.length; i++ ){
    squeres[i].style.background = colors[i];
    //change headerText background
    headerText.style.background = "steelblue";
    //change colorDisplay
    colorDisplay.textContent = pickedColor;
    //message to default
    messageDisplay.textContent = "";
    //reset button name
    resetButton.textContent = "New colors";
}

});


//game logic
colorDisplay.textContent = pickedColor;

for(var i=0; i < squeres.length; i++ ){
    //add initial colors
    squeres[i].style.background = colors[i];

    //add click listeners for colors
    squeres[i].addEventListener("click", function(){
        // grab the color
        var clickedColor = this.style.background;
        // compare 
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            headerText.style.background = pickedColor;
            resetButton.textContent = "Play again";
        }
        else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });

}

//functions

function changeColors(color) {
    for(var i = 0; i < squeres.length; i++){
        squeres[i].style.background = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    //add array
    var arr = [];
    //add random colors to array
    for (var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    //return arr
    return arr;
}   
function randomColor(){
    //make random red
    var r = Math.floor(Math.random() * 256);
    //make random green
    var g = Math.floor(Math.random() * 256);
    //make random blue
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}