const numButtonsElement = document.querySelector(".leftButtons");
const operatorButtonsElement = document.querySelector(".rightButtons");
const displayElement = document.querySelector(".display");

function addNumber(currentNumber, adderNumber) {
    currentNumber = currentNumber.toString();
    adderNumber = adderNumber.toString();
    return parseInt(currentNumber + adderNumber);
}

function evaluateNumbers(operation) {
    if (operation.first === null && operation.second === null) {
        return 0;
    } else if (operation.first !== null && operation.second === null) {
        return operation.first;
    } else {
        switch (operation.operator) {
            case "add":
                return operation.first + operation.second;
            case "subtract":
                return operation.first - operation.second;
            case "multiply":
                return operation.first * operation.second;
            case "divide":
                return operation.first / operation.second;
            default:
                return null;
        }
    }
}

let calculator = {
    first: null,
    second: null,
    operator: null,
    result: null,
};
