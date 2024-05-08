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

let numOne;
let operator;
let numTwo;

const btn = document.querySelector("#clear");

btn.addEventListener("click", () => {
  alert("hey");
});
