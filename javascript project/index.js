const defaultResult = 0;
let currentResult = defaultResult;


function add(num1, num2) {
    const result = num1 + num2;
    return result;
}

add();

addBtn.addEventListener('click', add);

outputResult(currentResult, calculationDescription);
