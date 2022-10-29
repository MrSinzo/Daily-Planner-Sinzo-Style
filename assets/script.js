// moment hook for current date and time
var today = moment();
$("#currentDay").text(
  today.format(
    "[Today is ]dddd, MMMM Do YYYY, [And the current time is ] HH:mm:ss"
  )
); // changed hh to HH for 24 hour format

var currentHour = moment().startOf("hour").format("HH:mm"); // added this one for the for loop  // changed hh to HH for 24 hour format
console.log(currentHour);

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
var timeBlocks = document.getElementsByClassName("timeBlock"); // added this one for the for loop

// Added this for loop to run through the "timeBlocks" class and apply 
// background colors dependant on real time
// (affixed to each time slot container)
for (let i = 0; i < timeBlocks.length; i++) {
  var timeBlockHour = timeBlocks[i].children[0].innerHTML;
  if (currentHour > timeBlockHour) {

    timeBlocks[i].classList.add("past"); // this will change all previous hours in time to a dark pink background
    console.log(timeBlockHour + " im in the past");
  } else if (currentHour === timeBlockHour) {
    timeBlocks[i].classList.add("present"); // if current hour matches timeblock, turns the respective box red
    console.log(timeBlockHour + " im the current hour");
  } else {
    timeBlocks[i].classList.add("future"); // if hour is in the future, turns these boxes green.
    console.log(timeBlockHour + " im in the future");
  }
}
// button event listeners to save the text information inputted by user
editBtn9am.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  saveTodo9();
  function saveTodo9() {
    var savedText9am = {
      userText: document.getElementById("userInput9").value.trim(),
    };
    localStorage.setItem("savedText9am", JSON.stringify(savedText9am));
    console.log(savedText9am);
  }
});

editBtn10am.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  saveTodo10();
  function saveTodo10() {
    var savedText10am = {
      userText: document.getElementById("userInput10").value.trim(),
    };
    localStorage.setItem("savedText10am", JSON.stringify(savedText10am));
    console.log(savedText10am);
  }
});

editBtn11am.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  saveTodo11();
  function saveTodo11() {
    var savedText11am = {
      userText: document.getElementById("userInput11").value.trim(),
    };
    localStorage.setItem("savedText11am", JSON.stringify(savedText11am));
    console.log(savedText11am);
  }
});

editBtn12pm.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  saveTodo12();
  function saveTodo12() {
    var savedText12pm = {
      userText: document.getElementById("userInput12").value.trim(),
    };
    localStorage.setItem("savedText12pm", JSON.stringify(savedText12pm));
    console.log(savedText12pm);
  }
});

editBtn1pm.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  saveTodo1();
  function saveTodo1() {
    var savedText1pm = {
      userText: document.getElementById("userInput1").value.trim(),
    };
    localStorage.setItem("savedText1pm", JSON.stringify(savedText1pm));
    console.log(savedText1pm);
  }
});

editBtn2pm.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  saveTodo2();
  function saveTodo2() {
    var savedText2pm = {
      userText: document.getElementById("userInput2").value.trim(),
    };
    localStorage.setItem("savedText2pm", JSON.stringify(savedText2pm));
    console.log(savedText2pm);
  }
});

editBtn3pm.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  saveTodo3();
  function saveTodo3() {
    var savedText3pm = {
      userText: document.getElementById("userInput3").value.trim(),
    };
    localStorage.setItem("savedText3pm", JSON.stringify(savedText3pm));
    console.log(savedText3pm);
  }
});

editBtn4pm.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  saveTodo4();
  function saveTodo4() {
    var savedText4pm = {
      userText: document.getElementById("userInput4").value.trim(),
    };
    localStorage.setItem("savedText4pm", JSON.stringify(savedText4pm));
    console.log(savedText4pm);
  }
});

editBtn5pm.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  saveTodo5();
  function saveTodo5() {
    var savedText5pm = {
      userText: document.getElementById("userInput5").value.trim(),
    };
    localStorage.setItem("savedText5pm", JSON.stringify(savedText5pm));
    console.log(savedText5pm);
  }
});

function showLastTodos() {
  //
  var am9Slot = JSON.parse(localStorage.getItem("savedText9am"));
  if (am9Slot !== null) {
    document.getElementById("userInput9").innerText = am9Slot.userText;
  }
  //
  var am10Slot = JSON.parse(localStorage.getItem("savedText10am"));
  if (am10Slot !== null) {
    document.getElementById("userInput10").innerText = am10Slot.userText;
  }
  //
  var am11Slot = JSON.parse(localStorage.getItem("savedText11am"));
  if (am11Slot !== null) {
    document.getElementById("userInput11").innerText = am11Slot.userText;
  }
  //
  var pm12Slot = JSON.parse(localStorage.getItem("savedText12pm"));
  if (pm12Slot !== null) {
    document.getElementById("userInput12").innerText = pm12Slot.userText;
  }
  //
  var pm1Slot = JSON.parse(localStorage.getItem("savedText1pm"));
  if (pm1Slot !== null) {
    document.getElementById("userInput1").innerText = pm1Slot.userText;
  }
  //
  var pm2Slot = JSON.parse(localStorage.getItem("savedText2pm"));
  if (pm2Slot !== null) {
    document.getElementById("userInput2").innerText = pm2Slot.userText;
  }
  //
  var pm3Slot = JSON.parse(localStorage.getItem("savedText3pm"));
  if (pm3Slot !== null) {
    document.getElementById("userInput3").innerText = pm3Slot.userText;
  }
  //
  var pm4Slot = JSON.parse(localStorage.getItem("savedText4pm"));
  if (pm4Slot !== null) {
    document.getElementById("userInput4").innerText = pm4Slot.userText;
  }
  //
  var pm5Slot = JSON.parse(localStorage.getItem("savedText5pm"));
  if (pm5Slot !== null) {
    document.getElementById("userInput5").innerText = pm5Slot.userText;
  }
}

function init() {
  showLastTodos(); //when application fires up, this will generate the last entered text that was saved to local storage
}

init();

/* 
psudeocode -- eliminate needs as they are fulfilled 
-- all needs fulfilled!
*/
// no use appends
// var am9 = document.getElementById("am9");
// var am10 = document.getElementById("am10");
// var am11 = document.getElementById("am11");
// var pm12 = document.getElementById("pm12");
// var pm1 = document.getElementById("pm1");
// var pm2 = document.getElementById("pm2");
// var pm3 = document.getElementById("pm3");
// var pm4 = document.getElementById("pm4");
// var pm5 = document.getElementById("pm5");

/* This for loop set up did not work
for (let i = 0; i < timeBlocks.length; i++) {
  // console.log(timeBlocks[i].children[0].innerHTML);
  var timeBlockHour = timeBlocks[i].children[0].innerHTML;
  if (currentHour > timeBlockHour[i]) {
    // if current hour (eg 2pm) is greater than time block hour;
    timeBlocks[i].classList.add("past"); // this should change all previous hours in time to a gray background
    console.log(timeBlockHour + " im in the past");
  }
  if (currentHour === timeBlockHour[i]) {
    timeBlocks[i].classList.add("present");
    console.log(timeBlockHour + " im the current hour");
  }
  if (currentHour < timeBlockHour[i]) {
    timeBlocks[i].classList.add("future");
    console.log(timeBlockHour + " im in the future");
  }
}

*/
