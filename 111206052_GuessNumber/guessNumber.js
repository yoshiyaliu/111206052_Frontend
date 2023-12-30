// Global variables
let secretNumber = generateRandomNumber();

// 4. Function to generate a random number between 1 and 10
function generateRandomNumber() {
  let num = Math.floor(Math.random()*10 + 1);
  return num;
}

// Function to check the user's guess
function checkGuess() {

  // Local variable
  let userGuess = document.getElementById("userGuess").value;
  let resultElement = document.getElementById("result");

  // 5. Here should be an if-else statement.

  // If the answer is correct, then output "Congratulations! You guessed the correct number!" with picture2 and music2.
  if(secretNumber == userGuess){
    document.writeln("Congratulations! You guessed the correct number!");
    showImageAndPlaySound("picture2.jpeg", "music2.mp3");
    generateRandomNumber()
  }
  // If the answer is wrong, then output "Sorry, try again!" with picture1 and music1.
    else{
      document.writeln("Sorry, try again!");
      showImageAndPlaySound("picture1.jpeg", "music1.mp3");
  }
  // P.S. Generate a new random number for the next round after getting the correct answer.

  // Clear the input field for the next guess
  document.getElementById("userGuess").value = "";
}

// Function to show image and play sound
function showImageAndPlaySound(imageSource, soundSource) {
  let imageElement = document.createElement("img");
  imageElement.src = imageSource;

  let soundElement = document.createElement("audio");
  soundElement.src = soundSource;
  soundElement.autoplay = true;

  let resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";
  resultContainer.appendChild(imageElement);
  resultContainer.appendChild(soundElement);
}
