const buttonEl = document.querySelectorAll("button");
let lastInputIsOperator = false;

for (let i = 0; i < buttonEl.length; i++) {
  buttonEl[i].addEventListener("click", function () {
    const operator = ["+", "-", "*", "/"];
    const resultField = document.getElementById("result");
    const currentValue = resultField.value;

    if (this.innerHTML === "=") {
      if (currentValue !== "") {
        resultField.value = evaluateExpression(currentValue);
      }
    } else if (this.innerHTML === "C") {
      resultField.value = "";
      lastInputIsOperator = false;
    } else if (operator.includes(this.innerHTML)) {
      if (!lastInputIsOperator) {
        if (currentValue !== "") {
          resultField.value += this.innerHTML;
        }
      } else {
        // Replace the last operator with the new one
        resultField.value = currentValue.slice(0, -1) + this.innerHTML;
      }
      lastInputIsOperator = true;
    } else {
      resultField.value += this.innerHTML;
      lastInputIsOperator = false;
    }
  });
}

function evaluateExpression(expression) {
  try {
    return eval(expression);
  } catch (error) {
    console.error("Error evaluating expression:", error);
    return null;
  }
}
