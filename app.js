// addition function
let add = (num1, num2) => num1 + num2;

// subtraction function
let subtract = (num1, num2) => num1 - num2;

// multiplication function
let multiply = (num1, num2) => num1 * num2;

// division function
let divide = (num1, num2) => num1 / num2;

// operator function
let operation = (num1, num2, operator) => operator(num1, num2);

// document variables
let buttonPress = document.getElementsByClassName('button');
let numberButton = document.getElementsByClassName('number');
let displayText = document.querySelector('#display-text');

// animation for the individual buttons, and gets the textcontent of the element clicked
for (let i = 0; i < buttonPress.length; i++) {
    buttonPress[i].addEventListener('mousedown', () => {
        buttonPress[i].classList.add('button-press');
        buttonPress[i].addEventListener('mouseup', () => {
            buttonPress[i].classList.remove('button-press');
        });
    });
}

// click event to update the display with the user input
for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener('click', () => {

        
    });
}