var colors =  generateRandomColors(6)
var square = document.querySelectorAll(".square")
var picked = pickedColor()
 
 var h1Color = document.querySelector("#color")
 var h1 = document.querySelector("h1")
 var resultMessage = document.querySelector("#result")
 var easyTrue = false; 
 var hardTrue = false; 
 var resetButton = document.querySelector("#reset")
var easy = document.querySelector("#easy")
var hard = document.querySelector("#hard") 
 hard.addEventListener("click", function(){
 this.classList.add("hard")
 easy.classList.remove("easy")
   
      colors = generateRandomColors(6)
  
  picked = pickedColor();
  h1Color.textContent = picked;
   h1.style.backgroundColor = "steelblue"; 
  squareColors();
  hardTrue = true;
  easyTrue = false; 
  
 })
 easy.addEventListener("click", function() {
   this.classList.add("easy")
   hard.classList.remove("hard")
 h1.style.backgroundColor = "steelblue"
   colors =  generateRandomColors(3)
   picked = pickedColor()
   squareColors()
    for (var j=3;j<6;j++) {
     square[j].style.backgroundColor = "black"
   }
 easyTrue = true; 
 hardTrue = false; 
 }) 
 function squareColors() {
   resetButton.textContent = "Reset"
    var tries = 0 ; 
    resultMessage.textContent = ""; 
    h1Color.textContent = picked
 for(var i=0;i<colors.length;i++) {
   //colors 
   square[i].style.backgroundColor = colors[i]
   
   //event listeners
  
   square[i].addEventListener("click", function() {
     
    var userpickedColor = this.style.backgroundColor; 
 
     if (userpickedColor === picked) {
       resetButton.textContent = "Play again?"
       tries++
       resultMessage.textContent = "Correct! Total tries: " + tries 
        resultMessage.classList.add("correct")
      changeColor()
     }
     else {
       tries++ 
       resultMessage.textContent = "Try again. Total tries: " + tries
       this.style.backgroundColor = "black"
       resultMessage.classList.remove("correct")
       
     }
   })
 }
 }
 // function to run when user picks correct color 
 function changeColor() { 
   h1.style.backgroundColor = picked
   for(var i=0;i<colors.length;i++) {
   //colors 
   square[i].style.backgroundColor = picked
   }
   
 }
 function pickedColor() {
   return colors[Math.floor(Math.random() *colors.length)]
 }
 function generateRandomColors(num) {
   // make an array 
   // add num random colors to array
   // return array
  
   let colorArr = []; 
   for (var i=0;i<num;i++) {
  
     colorArr.push(`rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})` )
   }
   return colorArr 
 }
 
 function randomNumber() {
   return  Math.floor(Math.random() *256) 
 }
 
resetButton.addEventListener("click", function() {
  if (easyTrue){
  colors =  generateRandomColors(3);
  }
  else if (hardTrue) {
    colors = generateRandomColors(6)
  }
  picked = pickedColor();
  h1Color.textContent = picked;
   h1.style.backgroundColor = "steelblue"; 
  squareColors();
  
})