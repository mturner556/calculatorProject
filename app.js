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

// animation for button press 
let buttonPress = document.getElementsByClassName('button');

for (let i = 0; i < buttonPress.length; i++) {
    buttonPress[i].addEventListener('click', () => {
        buttonPress[i].classList.add('button-press');
        setTimeout(() => {
            buttonPress[i].classList.remove('button-press');
        }, 75);
    });
}