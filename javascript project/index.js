const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
    return  parseInt (usrInput.value);
}

function createAndWriteOutput(operator,resultBeforeCalc,calcNumber) {
    const calcDescription = `${currentResult} ${operator} ${enteredNumber}`;
    outputResult(currentResult, calcDescription);
}

function add() {
    const enteredNumber =  getUserNumberInput();
    const calcDescription = `${currentResult} + ${enteredNumber}`
    currentResult = currentResult + enteredNumber ;
    outputResult(currentResult, calcDescription);
}

function subtract() {
    const enteredNumber =  getUserNumberInput();
    const calcDescription = `${currentResult} - ${enteredNumber}`
    currentResult = currentResult - enteredNumber ;
    outputResult(currentResult, calcDescription);
}

function multiply() {}

function divide() {}


addBtn.addEventListener('click', add);


