// HTML elements
let startButton = document.querySelector(".js-start");
let stopButton = document.querySelector(".js-stop");
let resetButton = document.querySelector(".js-reset");
let displayElement = document.querySelector(".js-display");

// Stopwatch variables
let startTime;
let elapsedTime = 0;
let timerInterval;

// Event listeners
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

// Format the time as "HH:MM:SS"
function formatTime(seconds) {
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var remainingSeconds = seconds % 60;

  return (
    padZero(hours) + ":" + padZero(minutes) + ":" + padZero(remainingSeconds)
  );
}

// Pad a single digit number with a leading zero
function padZero(number) {
  return number.toString().padStart(2, "0");
}

function updateDisplay() {
  if (startTime) {
    // Calculate the elapsed time in seconds
    let seconds = Math.floor((Date.now() - startTime + elapsedTime) / 1000);

    // Format the time as "HH:MM:SS"
    let formattedTime = formatTime(seconds);

    // Update the display element
    displayElement.textContent = formattedTime;
  } else {
    // If the timer is not running, display "00:00:00"
    displayElement.textContent = "00:00:00";
  }
}

function startTimer() {
  // Reset the elapsed time to 0
  elapsedTime = 0;

  // Store the current timestamp as the start time
  startTime = Date.now();

  // Update the display every 100 milliseconds
  timerInterval = setInterval(updateDisplay, 100);
}

function stopTimer() {
  // Clear the interval to stop updating the display
  clearInterval(timerInterval);
}

function resetTimer() {
  // Stop the timer if it's running
  stopTimer();

  // Reset the elapsed time to 0
  elapsedTime = 0;

  // Reset the start time
  startTime = null;

  // Update the display
  updateDisplay();
}
