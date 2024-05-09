let currentDisplay = "0";

function updateDisplay() {
  document.getElementById("display").innerText = currentDisplay;
}

function appendToDisplay(value) {
  if (currentDisplay === "0") {
    currentDisplay = value;
  } else {
    currentDisplay += value;
  }
  updateDisplay();
}

function clearDisplay() {
  currentDisplay = "0";
  updateDisplay();
}

function calculate() {
  try {
    currentDisplay = eval(currentDisplay).toString();
    updateDisplay();
  } catch (error) {
    currentDisplay = "Error";
    updateDisplay();
  }
}
