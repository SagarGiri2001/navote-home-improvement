// Get the element with the ID 'dynamic-text'
var dynamicTextElement = document.getElementById('dynamic-text');

// Define an array of text options
var textOptions = [
  "Design",
  "Home Build",
  "Renovation",
  "Digging",
  "Interior"
];

// Function to update the text every 3 seconds
function updateText() {
  // Generate a random index to select a text option from the array
  var randomIndex = Math.floor(Math.random() * textOptions.length);
  // Update the text content of the element with the selected text option
  dynamicTextElement.textContent = textOptions[randomIndex];
}

// Call the updateText function every 3 seconds
setInterval(updateText, 2500);
