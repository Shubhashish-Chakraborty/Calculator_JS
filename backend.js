const NumberBtnsArr = document.querySelectorAll(".numberBtns")
const OperatorBtnsArr = document.querySelectorAll(".operatorBtns")
const EqualButton = document.querySelector("#equalBtn")

let display = document.querySelector("#displayAnswer")
let clearButton = document.querySelector("#clearBtn")
let currentInput = "";
let firstNumber = null;
let secondNumber = null;
let currentOperator = null;


// Appending Numbers to the Display screen On click!!

NumberBtnsArr.forEach((NumberButton) => {

    NumberButton.addEventListener("click", () => {
        currentInput += NumberButton.textContent;
        display.value = currentInput
    })
})


// Appending Numbers to the Display screen On keyPress!!
document.body.addEventListener('keyup', (e) => {
    let numInp = parseInt(e.key)

    if (numInp >= 0 && numInp <= 9) {
        currentInput += numInp
        display.value = currentInput
    }


})


// Giving functionality to the clear button

clearButton.addEventListener("click", () => {
    display.value = "";
    currentInput = "";
})

document.body.addEventListener("keyup", (e) => {
    if (e.key === "Backspace") {
        display.value = "";
        currentInput = "";
    }
})

// Grabbing the First Number.

OperatorBtnsArr.forEach((operatorButton) => {
    operatorButton.addEventListener("click", () => {
        if (currentInput === "" && display.value !== "") {
            firstNumber = display.value; // Grabbed the First Number
        }
        else {
            firstNumber = currentInput;
        }

        currentOperator = operatorButton.textContent

        display.value = ""
        currentInput = ""

    })
})

document.body.addEventListener("keyup", (e) => {
    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
        if (currentInput === "" && display.value !== "") {
            firstNumber = display.value; // Grabbed the First Number
        }
        else {
            firstNumber = currentInput;
        }

        currentOperator = e.key;

        display.value = ""
        currentInput = ""
    }
})

// Grabbing the Second Number. And Calling the main CALCULATE FUNCTION!!

EqualButton.addEventListener("click", () => {

    if (currentInput === "" && display.value !== "") {
        secondNumber = display.value; // Grabbed the Second Number!
    }
    else {
        secondNumber = currentInput;
    }

    display.value = "";
    currentInput = "";

    CALCULATE(firstNumber, secondNumber, currentOperator);

})

document.body.addEventListener("keyup", (e) => {
    if (e.key === "Enter" || e.key === "=") {
        if (currentInput === "" && display.value !== "") {
            secondNumber = display.value; // Grabbed the Second Number!
        }
        else {
            secondNumber = currentInput;
        }

        display.value = "";
        currentInput = "";

        CALCULATE(firstNumber, secondNumber, currentOperator);
    }
})

const CALCULATE = (FIRST_NUMBER, SECOND_NUMBER, OPERATION) => {

    FIRST_NUMBER = parseInt(FIRST_NUMBER)
    SECOND_NUMBER = parseInt(SECOND_NUMBER)

    if (OPERATION === "+") {
        display.value = `Answer => ${FIRST_NUMBER + SECOND_NUMBER}`
    }
    else if (OPERATION === "-") {
        display.value = `Answer => ${FIRST_NUMBER - SECOND_NUMBER}`
    }
    else if (OPERATION === "*") {
        display.value = `Answer => ${FIRST_NUMBER * SECOND_NUMBER}`

    }
    else if (OPERATION === "/") {
        display.value = `Answer => ${FIRST_NUMBER / SECOND_NUMBER}`

    }

}