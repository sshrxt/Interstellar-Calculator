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
        header.textContent = displayValue + " " + operatorValue;
        addSecondDisplay(button.value);
      }
    });
  });
}

function addOperatorListeners() {
  const operators = document.querySelectorAll(".op");
  operators.forEach((op) => {
    op.addEventListener("click", () => {
      header.textContent = displayValue;
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
          header.textContent += " " + operatorValue;
          findResult(
            operate(
              operatorValue,
              parseFloat(displayValue),
              parseFloat(secondDisplayValue)
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
          parseFloat(displayValue),
          parseFloat(secondDisplayValue)
        )
      );
    } else {
      displayDiv.textContent = "Error";
    }
    zeroOperators = false;
    lockedOperator = false;
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
  header.textContent =
    displayValue + " " + operatorValue + " " + secondDisplayValue + " =";
  displayValue = value;
  displayDiv.textContent = displayValue;
  secondDisplayValue = "";
}

function addClearListener() {
  const clear = document.querySelector("#clear");

  clear.addEventListener("click", () => {
    displayValue = "0";
    operatorValue = "";
    secondDisplayValue = "";
    operatorPressed = false;
    operatorSwitch = false;
    zeroOperators = false;
    lockedOperator = false;
    header.textContent = "";
    displayDiv.textContent = 0;
  });
}

function addDeleteListener() {
  const del = document.querySelector("#delete");

  del.addEventListener("click", () => {
    if (!lockedOperator) {
      if (displayValue.length === 1) {
        displayValue = "0";
        displayDiv.textContent = displayValue;
      } else {
        displayValue = displayValue.slice(0, -1);
        displayDiv.textContent = displayValue;
      }
    } else {
      console.log(secondDisplayValue);
      if (secondDisplayValue.length === 1) {
        secondDisplayValue = "0";
        displayDiv.textContent = secondDisplayValue;
      } else {
        secondDisplayValue = secondDisplayValue.slice(0, -1);
        displayDiv.textContent = secondDisplayValue;
      }
    }
  });
}

function addToggleListener() {
  const toggleButton = document.querySelector("#toggle");

  toggleButton.addEventListener("click", ()=> {
    toggle();
  });
}

function toggle() {
  if(toggleStatus) {
    console.log(1);
    background.style.backgroundColor = "rgb(69, 93, 142)";
    calcContainer.style.backgroundColor = "rgb(134, 161, 208)";
    buttons.forEach((button)=> {
      button.style.backgroundColor = "rgb(68, 66, 113)";
      button.addEventListener("mouseenter", function() {
        button.style.backgroundColor = "rgb(69, 93, 142)";
        button.style.transform = "translateY(-2px)";
      });
    
      button.addEventListener("mouseleave", function() {
        button.style.backgroundColor = "rgb(68, 66, 113)";
        button.style.transform = "translateY(0px)";
      });
      
    })
  }
  else {
    console.log(2);
    background.style.backgroundColor = "rgb(64, 9, 175)";
    calcContainer.style.backgroundColor = "rgb(38, 32, 41)";
    buttons.forEach((button)=> {
      button.style.backgroundColor = "rgb(124, 147, 251)";
      button.addEventListener("mouseenter", function() {
        button.style.backgroundColor = "rgb(30, 68, 219)";
        button.style.transform = "translateY(-2px)";
      });
    
      button.addEventListener("mouseleave", function() {
        button.style.backgroundColor = "rgb(124, 147, 251)";
        button.style.transform = "translateY(0px)";
      });
      
    })
  }
  toggleStatus = !toggleStatus;
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
let toggleStatus = true;

const header = document.querySelector(".display-container h5");
header.textContent = "";

const displayDiv = document.querySelector(".display-container h1");
displayDiv.textContent = displayValue;

const background = document.querySelector("body");
const calcContainer = document.querySelector(".calc-container");
const buttons = document.querySelectorAll("button");

addEventListeners();
addOperatorListeners();
addEqualListener();
addClearListener();
addDeleteListener();
addToggleListener();
