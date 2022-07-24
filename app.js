// addition function
let add = (num1, num2) => Number(num1) + Number(num2);

// subtraction function
let subtract = (num1, num2) => Number(num1) - Number(num2);

// multiplication function
let multiply = (num1, num2) => Number(num1) * Number(num2)

// division function
let divide = (num1, num2) => Number(num1) / Number(num2);

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

// event listener to select the operator
for (let i = 0; i < operatorButton.length; i++) {
    operatorButton[i].addEventListener('click', (e) => {
        operator = operatorButton[i].textContent;
    });
}

// evaluate the operate button when the equal button is clicked
equalButton.addEventListener('click', () => {
    if (operator === '+') {
        previousDisplayNumber.textContent = previousNum + " " + operator + " " + currentNum;
        currentDisplayNumber.textContent = operate(previousNum, currentNum, add);
        currentNum = '';
        previousNum = '';
    } else if (operator === '-') {
        previousDisplayNumber.textContent = previousNum + " " + operator + " " + currentNum;
        currentDisplayNumber.textContent = operate(previousNum, currentNum, subtract);
        currentNum = '';
        previousNum = '';
    } else if (operator === 'x') {
        previousDisplayNumber.textContent = previousNum + " " + operator + " " + currentNum;
        currentDisplayNumber.textContent = operate(previousNum, currentNum, multiply);
        currentNum = '';
        previousNum = '';
    } else if (operator === '÷') {
        previousDisplayNumber.textContent = previousNum + " " + operator + " " + currentNum;
        currentDisplayNumber.textContent = operate(previousNum, currentNum, divide);
        currentNum = '';
        previousNum = '';
    } else {
        console.log('errorT');
    }
});

// clear all inputs when the AC button is clicked
clearButton.addEventListener('click', () => {
    currentNum = '';
    previousNum = '';
    currentDisplayNumber.textContent = '';
    previousDisplayNumber.textContent = '';
});

// delete the last input when the DEL button is clicked
deleteButton.addEventListener('click', () => { 
    let newStr = currentNum.slice(0, -1);
    currentNum = newStr;
    currentDisplayNumber.textContent = newStr; 
});
