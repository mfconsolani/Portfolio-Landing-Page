// function toggleClock() {
//     // get the clock
//     var myClock = document.getElementByTag('clock');

//     // get the current value of the clock's display property
//     var displaySetting = myClock.style.display;

//     // also get the clock button, so we can change what it says
//     var clockButton = document.getElementById('clockButton');

//     // now toggle the clock and the button text, depending on current state
//     if (displaySetting == 'block') {
//       // clock is visible. hide it
//       myClock.style.display = 'none';
//       // change button text
//       clockButton.innerHTML = 'Show clock';
//     }
//     else {
//       // clock is hidden. show it
//       myClock.style.display = 'block';
//       // change button text
//       clockButton.innerHTML = 'Hide clock';
//     }
//   }

// var x = document.querySelectorAll(".hidden");

// x.forEach() {
//     myFunction();
// }

// function myFunction() {
//     if (ele.style.display === "none") {
//       ele.style.display = "block";
//     } else {
//       ele.style.display = "none";
//     }
//   }

// var hiddenPara = document.querySelectorAll("p.hidden");
// console.log(hiddenPara);
.classList.toggle("hidden")

var hideableSections = document.querySelectorAll("p.hidden");
console.log(hideableSections);
var keyArray = Object.keys(hideableSections)
console.log(keyArray);

function myFunction() { 
    keyArray.forEach(function(key) {
    if (hideableSections[key].style.display === 'none') {
        hideableSections[key].style.display = "block";
      } else {
        hideableSections[key].style.display = "none";
      }
    });
}

