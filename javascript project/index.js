const defaultResult = 0;
let currentResult = defaultResult;


function add() {
    const enteredNumber =  parseInt (usrInput.value);
    const calcDescription = `${currentResult} + ${usrInput.value}`
    currentResult = currentResult + + parseInt (usrInput.value) ;
    outputResult(currentResult, calcDescription);
}


addBtn.addEventListener('click', add);


