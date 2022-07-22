// addition function
let add = (num1, num2) => num1 + num2;

// subtraction function
let subtract = (num1, num2) => num1 - num2;

// multiplication function
let multiply = (num1, num2) => num1 * num2;

// division function
let divide = (num1, num2) => num1 / num2;

// operator function
let operate = (num1, num2, operator) => operator(num1, num2);

// document variables
let currentDisplayNumber = document.getElementById("current-display-number");
let previousDisplayNumber = document.getElementById("previous-display-number");
let buttonPress = document.querySelectorAll('.button');
let numberButton = document.querySelectorAll('.number');
let operatorButton = document.querySelectorAll('.operator');
let clearButton = document.querySelector('.clear');
let deleteButton = document.querySelector('.delete');
let equalButton = document.querySelector('.equal');

// value variables
let currentNum = '';
let previousNum = '';
let operator = '';

// animation for the individual buttons, and gets the textcontent of the element clicked
for (let i = 0; i < buttonPress.length; i++) {
    buttonPress[i].addEventListener('mousedown', () => {
        buttonPress[i].classList.add('button-press');
        buttonPress[i].addEventListener('mouseup', () => {
            buttonPress[i].classList.remove('button-press');
        });
    });
}

// click event to update the current-number-display with the user input
function updateCurrentNumDisplay (number) {
    currentNum += number;
    currentDisplayNumber.innerHTML = currentNum;
}

for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener('click', (e) => {
        updateCurrentNumDisplay(e.target.textContent);
    });
}

// save the currentnum as previousnum when an operator button is clicked, and save the operator
function updatePreviouNumDisplay (operation) {
    previousNum = currentNum;
    previousDisplayNumber.innerHTML = previousNum + " " + operation;
    currentNum = '';
    currentDisplayNumber.innerHTML = currentNum;
}

for (let i = 0; i < operatorButton.length; i++) {
    operatorButton[i].addEventListener('click', (e) => {
        updatePreviouNumDisplay(e.target.textContent);
    });
}