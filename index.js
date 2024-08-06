const numButtonsElement = document.querySelector(".leftButtons");
const operatorButtonsElement = document.querySelector(".rightButtons");
const displayElement = document.querySelector(".display");

function addNumber(currentNumber, adderNumber) {
    currentNumber = currentNumber.toString();
    adderNumber = adderNumber.toString();
    return parseInt(currentNumber + adderNumber);
}

function evaluateNumbers() {
    if (calculator.second === null) {
        return calculator.first;
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
                calculator.result = null;
                break;
        }
    }
}

function addOperator(operator) {
    calculator.operator = operator;
    calculator.workingNum = 1;
    if (calculator.second === null) {
        calculator.second = 0;
    }
    displayElement.textContent = calculator.second;
}

function calculatorReset() {
    calculator = {
        first: 0,
        second: null,
        operator: null,
        result: null,
        workingNum: 0,
        reset: false,
    };
    displayElement.textContent = calculator.first;
}

let calculator = {
    first: 0,
    second: null,
    operator: null,
    result: null,
    reset: false,
};
