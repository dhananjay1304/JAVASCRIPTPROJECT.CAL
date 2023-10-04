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
    const initialResult = currentResult;
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    createAndWriteOutput('+', initialResult, enteredNumber);
}

function subtract() {
    const enteredNumber =  getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber ;
    createAndWriteOutput('-', initialResult, enteredNumber)
}

function multiply() {}

function divide() {}


addBtn.addEventListener('click', add);


