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
  } else if (operator === "x") {
    return multiply(numOne, numTwo);
  }
}

function addEventListeners() {
  const buttons = document.querySelectorAll(".num");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!operatorPressed) {
        addFirstDisplay(button.value);
      } else {
        lockedOperator = true;
        addSecondDisplay(button.value);
      }
    });
  });
}

function addOperatorListeners() {
  const operators = document.querySelectorAll(".op");
  operators.forEach((op) => {
    op.addEventListener("click", () => {
      if (lockedOperator) {
        zeroOperators = true;
      }
      if (!zeroOperators) {
        operatorValue = op.value;
        displayDiv.textContent = operatorValue;
        operatorPressed = true;
        console.log(op.value);
        if (lockedOperator) {
          zeroOperators = true;
        }
      } else {
        console.log(op.value);
        if (lockedOperator) {
          findResult(
            operate(
              operatorValue,
              parseInt(displayValue),
              parseInt(secondDisplayValue)
            )
          );
          zeroOperators = false;
          lockedOperator = false;
        }
      }
    });
  });
}

function addEqualListener() {
  const equal = document.querySelector(".equal");
  equal.addEventListener("click", () => {
    console.log(displayValue + operatorValue + secondDisplayValue);
    if (
      displayValue !== "0" &&
      operatorValue !== "" &&
      secondDisplayValue !== ""
    ) {
      findResult(
        operate(
          operatorValue,
          parseInt(displayValue),
          parseInt(secondDisplayValue)
        )
      );
    } else {
      displayDiv.textContent = "Error";
    }
    zeroOperators = false;
    lockedOperator = false;~
  });
}

function addFirstDisplay(value) {
  if (displayValue === "0") {
    displayValue = value;
  } else {
    displayValue += value;
  }
  displayDiv.textContent = displayValue;
}

function addSecondDisplay(value) {
  secondDisplayValue += value;
  displayDiv.textContent = secondDisplayValue;
}

function findResult(value) {
  //console.log(displayValue + operatorValue + secondDisplayValue);
  displayValue = value;
  displayDiv.textContent = displayValue;
  secondDisplayValue = "";
}

let numOne;
let operator;
let numTwo;

let displayValue = "0";
let operatorValue = "";
let secondDisplayValue = "";
let operatorPressed = false;
let operatorSwitch = false;
let zeroOperators = false;
let lockedOperator = false;

const displayDiv = document.querySelector(".display-container h1");
displayDiv.textContent = displayValue;

const btn = document.querySelector("#clear");

btn.addEventListener("click", () => {
  alert("hey");
});

addEventListeners();
addOperatorListeners();
addEqualListener();
