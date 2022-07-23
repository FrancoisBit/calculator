let number1 = 0;
let number2 = 0;
let operator = "";

function add(number1, number2) {

    return number1 + number2;
}

function subtract(number1, number2) {

    return number1 - number2;
}

function multiply(number1, number2) {

    return number1 * number2;
}

function divide(number1, number2) {

    return number1 / number2;
}

function operate(operator, number1, number2) {
    let result = 0;

    number1 = parseInt(number1);
    number2 = parseInt(number2);

    if(operator === "+") {
        result = add(number1, number2);
    }

    else if(operator === "-") {
        result = subtract(number1, number2);
    }

    else if(operator === "x") {
        result = multiply(number1, number2);
    }

    else if(operator === "/") {
        result = divide(number1, number2);
    }

    return result;
}

function countDecimals(value) {
    console.log('value' + value)
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0; 
}    

function displayValue(newNumber) {
    const display = document.querySelector(".display");

    const count = countDecimals(parseFloat(newNumber));
    console.log('countDecimals' + count)

    if(count > 3) {
        newNumber = parseFloat(newNumber).toFixed(3);
    }

    if(operator === "") {
        console.log(number1)

        if(number1 == 0) {
            display.textContent = newNumber;
        }

        else {
            display.textContent += newNumber;
        }

        number1 = display.textContent;
    }

    else {
        display.textContent = newNumber;
        number2 = display.textContent
    }
}

function applyClear(event) {
    number1 = 0;
    number2 = 0;
    operator = "";

    displayValue(0);
}

function applyNumber(event) {
    displayValue(event.target.textContent)
}

function applyOperator(event) {
    console.log("applyyyy")
    if(number1 != 0 && number2 != 0) {
        console.log("operator " + operator);
        console.log("number1 " + number1);
        console.log("number2 " + number2);

        const result = operate(operator, number1, number2);
        displayValue(result);
        console.log("result " + result);
        number1 = result;
        number2 = 0;
    }

    console.log("operator " + operator);

    if(event.target.textContent != "=") {
        operator = event.target.textContent;
    }

    console.log("operator " + operator);
}

function buttonMouseEnter(event) {
    event.target.classList.add("hover");
}

function buttonMouseExit(event) {
    event.target.classList.remove("hover")
}

function addButtonClearEventListener() {
    const buttons = document.querySelectorAll(".clear");

    buttons.forEach(function(button) {
        button.addEventListener("click", applyClear);
    });
}

function addButtonNumberEventListener() {
    const buttons = document.querySelectorAll(".number");

    buttons.forEach(function(button) {
        button.addEventListener("click", applyNumber);
    });
}

function addButtonOperatorEventListener() {
    const buttons = document.querySelectorAll(".operator");

    buttons.forEach(function(button) {
        button.addEventListener("click", applyOperator);
    });
}

function addButtonMouseEventListener() {
    const operators = document.querySelectorAll(".button");

    operators.forEach(function(operator) {
        operator.addEventListener("mouseenter", buttonMouseEnter);
        operator.addEventListener("mouseleave", buttonMouseExit);
    });
}

addButtonClearEventListener()
addButtonNumberEventListener();
addButtonOperatorEventListener();
addButtonMouseEventListener();