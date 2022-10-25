// moment hook for current date and time
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));

var plannerContainer = document.querySelector(".container");
var am9 = document.getElementById("am9")
var am10 = document.getElementById("am10")
var am11 = document.getElementById("am11")
var pm12 = document.getElementById("pm12")
var pm1 = document.getElementById("pm1")
var pm2 = document.getElementById("pm2")
var pm3 = document.getElementById("pm3")
var pm4 = document.getElementById("pm4")
var pm5 = document.getElementById("pm5")
var userBoxEl = document.getElementById("userBox")
var userInputEl = document.getElementById("userInput")
//button element hooks
var editBtn9am = document.getElementById("am9Btn")
var editBtn10am = document.getElementById("am10Btn")
var editBtn11am = document.getElementById("am11Btn")
var editBtn12pm = document.getElementById("pm12Btn")
var editBtn1pm = document.getElementById("pm1Btn")
var editBtn2pm = document.getElementById("pm2Btn")
var editBtn3pm = document.getElementById("pm3Btn")
var editBtn4pm = document.getElementById("pm4Btn")
var editBtn5pm = document.getElementById("pm5Btn")

editBtn9am.addEventListener("click", changeText())


var emptyInput = ""



function changeText() {
  
  

  if(userInputEl === emptyInput){
    return;
  }
}


/* 
psudeocode
--may need event listeners for all buttons 


*/