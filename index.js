const numButtonsElement = document.querySelector(".leftButtons");
const operatorButtonsElement = document.querySelector(".rightButtons");
const displayElement = document.querySelector(".display p");
const equalsButtonElement = document.querySelector(".display .operatorButton");

function evaluateNumbers() {
    if (calculator.second === null) {
        calculator.result = calculator.first;
        calculator.reset = true;
    } else {
        switch (calculator.operator) {
            case "add":
                calculator.result = calculator.first + calculator.second;
                break;
            case "subtract":
                calculator.result = calculator.first - calculator.second;
                break;
            case "multiply":
                calculator.result = calculator.first * calculator.second;
                break;
            case "divide":
                calculator.result = calculator.first / calculator.second;
                break;
            default:
                calculatorReset();
                break;
        }
        calculator.reset = true;
        calculator.first = calculator.result;
        displayElement.textContent = calculator.result;
    }
}

function addOperator(operator) {
    if (calculator.operator !== null) {
        evaluateNumbers();
        calculator.reset = false;
    }
    calculator.operator = operator;
}

function calculatorReset() {
    calculator = {
        memory: 0,
        operator: null,
        reset: false,
    };
    displayElement.textContent = calculator.memory;
}

function numButtonPress(number) {
    if (displayElement.textContent === "0") {
        displayElement.textContent = number;
    } else if (number === "." && displayElement.textContent.includes(".")) {
    } else {
        displayElement.textContent += number;
    }
}

let calculator = {
    memory: 0,
    operator: null,
    reset: false,
};

numButtonsElement.addEventListener("click", (event) => {
    numButtonPress(event.target.getAttribute("value"));
});

operatorButtonsElement.addEventListener("click", (event) => {
    const value = event.target.getAttribute("value");
    value === "erase" ? calculatorReset() : addOperator(value);
});

equalsButtonElement.addEventListener("click", (event) => {
    evaluateNumbers();
});
