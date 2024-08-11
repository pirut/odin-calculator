const numButtonsElement = document.querySelector(".leftButtons");
const operatorButtonsElement = document.querySelector(".rightButtons");
const displayElement = document.querySelector(".display p");
const equalsButtonElement = document.querySelector(".display .equalsButton");

function evaluateNumbers() {
    if (calculator.reset) {
        return 0;
    } else if (calculator.memory !== null) {
        let current = parseFloat(displayElement.textContent);
        let result;
        switch (calculator.operator) {
            case "add":
                result = calculator.memory + current;
                break;
            case "subtract":
                result = calculator.memory - current;
                break;
            case "multiply":
                result = calculator.memory * current;
                break;
            case "divide":
                result = calculator.memory / current;
                break;
            default:
                calculatorReset();
                break;
        }
        calculator.reset = true;
        calculator.resetNum = true;
        calculator.memory = result;
        displayElement.textContent = result;
    }
}

function addOperator(operator) {
    if (calculator.operator !== null) {
        evaluateNumbers();
        calculator.reset = false;
    }
    calculator.memory = parseFloat(displayElement.textContent);
    calculator.resetNum = true;
    calculator.operator = operator;
}

function calculatorReset() {
    calculator = {
        memory: null,
        operator: null,
        reset: false,
        resetNum: false,
    };
    displayElement.textContent = 0;
}

function numButtonPress(number) {
    if (calculator.reset) {
        calculatorReset();
    } else if (calculator.resetNum) {
        displayElement.textContent = "0";
        calculator.resetNum = false;
    }
    if (displayElement.textContent === "0") {
        displayElement.textContent = number;
    } else if (number === "." && displayElement.textContent.includes(".")) {
        //do nothing
    } else {
        displayElement.textContent += number;
    }
}

let calculator = {
    memory: null,
    operator: null,
    reset: false,
    resetNum: false,
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
