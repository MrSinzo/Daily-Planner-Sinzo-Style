// moment hook for current date and time
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));

var plannerContainer = document.querySelector(".container");
var am9 = document.getElementById("am9");
var am10 = document.getElementById("am10");
var am11 = document.getElementById("am11");
var pm12 = document.getElementById("pm12");
var pm1 = document.getElementById("pm1");
var pm2 = document.getElementById("pm2");
var pm3 = document.getElementById("pm3");
var pm4 = document.getElementById("pm4");
var pm5 = document.getElementById("pm5");
var userBoxEl = document.getElementById("userBox");
var userInputEl = document.getElementById("userInput");
//button element hooks
var editBtn9am = document.getElementById("am9Btn");
var editBtn10am = document.getElementById("am10Btn");
var editBtn11am = document.getElementById("am11Btn");
var editBtn12pm = document.getElementById("pm12Btn");
var editBtn1pm = document.getElementById("pm1Btn");
var editBtn2pm = document.getElementById("pm2Btn");
var editBtn3pm = document.getElementById("pm3Btn");
var editBtn4pm = document.getElementById("pm4Btn");
var editBtn5pm = document.getElementById("pm5Btn");

// showTodo();
editBtn9am.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  var am9Slot = {
    userText: document.getElementById("userInput9").value.trim(),
  };
  localStorage.setItem("am9Slot", JSON.stringify(am9Slot));
});




function showLastTodos(){
  var am9lastTodo = JSON.parse(localStorage.getItem("am9Slot"));
  if (am9lastTodo !== null){
    document.getElementById("userInput9").innerHTML = am9lastTodo.userText.value;
  } else {
    return;
  }
}

function init(){
  showLastTodos()
}
init()
//  var user9Data = JSON.parse(localStorage.getItem("userInput9"));
//  user9Data.push(am9Slot)
//  localStorage.setItem("userInput9", JSON.stringify(user9Data))

// function showTodo() {
//   // Use JSON.parse() to convert text to JavaScript object
//   var am9Reveal = JSON.parse(localStorage.getItem("am9Slot"));
//   // Check if data is returned, if not exit out of the function
//   if (am9Reveal !== null) {
//   document.getElementById("userInput9").innerHTML = am9Reveal.userText;
//   } else {
//     return;
//   }
// }
// console.log(showTodo)

// var emptyInput = "";
// function changeText(event) {
//   event.preventDefault();
//   let userTextInput = "";
//   userTextInput = userInputEl.value.trim();

//   if (userInputEl === emptyInput) {
//     return;
//   }
// }

/* 
psudeocode
--may need event listeners for all buttons 


*/
