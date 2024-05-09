function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, numOne, numTwo) {
  if (operator === "+") {
    return add(numOne, numTwo);
  } else if (operator === "-") {
    return subtract(numOne, numTwo);
  } else if (operator === "/") {
    return divide(numOne, numTwo);
  } else {
    return multiply(numOne, numTwo);
  }
}

function addEventListeners() {
  const buttons = document.querySelectorAll(".num");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if(!operatorPressed) {
        addFirstDisplay(button.value);
      }
      else {
        addSecondDisplay(button.value);
      }
    });
  });
}

function addOperatorListeners () {
  const operators = document.querySelectorAll(".op");
  operators.forEach(op => {
    op.addEventListener("click", () => {
      operatorValue = op.value;
      displayDiv.textContent = operatorValue;
      operatorPressed = true;
    });
  })
}

function addFirstDisplay(value) {
  if(displayValue === "0") {
    displayValue = value;
  } 
  else {
    displayValue += value;
  }
  displayDiv.textContent = displayValue;
}

function addSecondDisplay(value) {
  secondDisplayValue += value;
  displayDiv.textContent = secondDisplayValue;
}

let numOne;
let operator;
let numTwo;

let displayValue = "0";
let operatorValue = "";
let secondDisplayValue = "";
let operatorPressed = false;

const displayDiv = document.querySelector(".display-container h1");
displayDiv.textContent = displayValue;

const btn = document.querySelector("#clear");

btn.addEventListener("click", () => {
  alert("hey");
});

addEventListeners();
addOperatorListeners();
