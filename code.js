// Sélectionner les éléments HTML
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let operator = null;
let firstOperand = null;

// Fonction pour mettre à jour l'affichage
function updateDisplay() {
  display.value = currentInput;
}

// Fonction pour effacer l'affichage
function clearDisplay() {
  currentInput = "";
  operator = null;
  firstOperand = null;
  updateDisplay();
}

// Fonction pour gérer les chiffres
function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

// Fonction pour gérer les opérateurs
function handleOperator(op) {
  if (currentInput === "") return;

  if (firstOperand !== null) {
    calculateResult();
  }

  firstOperand = parseFloat(currentInput);
  operator = op;
  currentInput = "";
}

// Fonction pour calculer le résultat
function calculateResult() {
  if (operator === null || currentInput === "") return;

  const secondOperand = parseFloat(currentInput);
  let result;

  switch (operator) {
    case "+":
      result = firstOperand + secondOperand;
      break;a
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;
    case "/":
      if (secondOperand === 0) {
        alert("Division par zéro!");
        clearDisplay();
        return;
      }
      result = firstOperand / secondOperand;
      break;
  }

  currentInput = result.toString();
  firstOperand = null;
  operator = null;
  updateDisplay();
}

// Ajouter des écouteurs d'événements aux boutons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;

    if (buttonValue === "C") {
      clearDisplay();
    } else if (buttonValue === "=") {
      calculateResult();
    } else if (["+", "-", "*", "/"].includes(buttonValue)) {
      handleOperator(buttonValue);
    } else if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].includes(buttonValue)) {
      appendNumber(buttonValue);
    }
  });
});