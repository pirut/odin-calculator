const numButtonsElement = document.querySelector(".leftButtons");
const operatorButtonsElement = document.querySelector(".rightButtons");
const displayElement = document.querySelector(".display p");

function addNumber(currentNumber, adderNumber) {
    currentNumber = currentNumber.toString();
    adderNumber = adderNumber.toString();
    return parseFloat(currentNumber + adderNumber);
}

function evaluateNumbers() {
    if (calculator.second === null) {
        calculator.result = calculator.first;
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
        calculator.evalFlag = true;
        calculator.first = calculator.result;
        displayElement.textContent = calculator.result;
    }
}

function addOperator(operator) {
    if (calculator.operator !== null && calculator.result === parseFloat(displayElement.textContent)) {
        calculator.second = parseFloat(displayElement.textContent);
        evaluateNumbers();
    } else if (calculator.operator !== null) {
        evaluateNumbers();
        calculator.second = 0;
    }
    calculator.evalFlag = false;
    calculator.operator = operator;
    calculator.workingNum = 1;
    if (calculator.second === null) {
        calculator.second = 0;
    }
}

function calculatorReset() {
    calculator = {
        first: 0,
        second: null,
        operator: null,
        result: null,
        workingNum: 0,
        evalFlag: false,
        reset: false,
    };
    displayElement.textContent = calculator.first;
}

function numButtonPress(number) {
    if (calculator.evalFlag) {
        calculatorReset();
    }
    if (calculator.workingNum === 0) {
        calculator.first = addNumber(calculator.first, number);
        displayElement.textContent = calculator.first;
    } else {
        calculator.second = addNumber(calculator.second, number);
        displayElement.textContent = calculator.second;
    }
}

let calculator = {
    first: 0,
    second: null,
    operator: null,
    result: null,
    workingNum: 0,
    evalFlag: false,
    reset: false,
};

numButtonsElement.addEventListener("click", (event) => {
    numButtonPress(parseInt(event.target.textContent));
    // console.log(parseInt(event.target.textContent));
});

operatorButtonsElement.addEventListener("click", (event) => {
    addOperator(event.target.getAttribute("value"));
});
