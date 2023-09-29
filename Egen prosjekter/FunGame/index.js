let fullvalue = document.getElementById("valuepr")
let snake = document.querySelector(".snake")

let newval = 0
let value = ""
var currentLeft = getComputedStyle(snake).Left;
var currentRight = getComputedStyle(snake).Right;
var currentTop = getComputedStyle(snake).Top;
var currentBottom = getComputedStyle(snake).Bottom;

const startPos = getComputedStyle(snake.style.transform)
var newPos = startPos + 10 

function getVal() {
  newval = Math.floor(Math.random() * 200)
  value = newval
  fullvalue.textContent = value
}
snake.style.translate += 40 + "px"
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        
       snake.style.transform = snake.style.transform + 100 + "px"
    } else if(event.keyCode == 39) {
       
        snake.style.right =  (parseInt(currentRight, 1) + 10) + "px";

    } else if(event.keyCode == 38) {
      
      snake.style.top =  (parseInt(currentTop, 1) + 10) + "px";
    } else if (event.keyCode == 40){
      
      snake.style.Bottom = (parseInt(currentBottom) + 10) + "px";
    }
});