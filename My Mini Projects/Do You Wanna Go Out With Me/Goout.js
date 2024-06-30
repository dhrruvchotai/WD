// function no(){
//     alert("are you sure")
// }
// Get the button element by its id
var button = document.getElementById("randomButton");

// Define a function to generate a random number between 0 and max
function random(max) {
  return Math.floor(Math.random() * max);
}

// Define a function to change the button's position to a random location
function changePosition() {
  // Get the width and height of the window
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  // Get the width and height of the button
  var buttonWidth = button.offsetWidth;
  var buttonHeight = button.offsetHeight;

  // Calculate the maximum possible left and top positions for the button
  var maxLeft = windowWidth - buttonWidth;
  var maxTop = windowHeight - buttonHeight;

  // Generate random left and top positions within the range
  var left = random(maxLeft);
  var top = random(maxTop);

  // Set the button's style properties to the new positions
  button.style.left = left + "px";
  button.style.top = top + "px";
}

// Add an event listener to the button for the mouseover event
button.addEventListener("mouseover", changePosition);
