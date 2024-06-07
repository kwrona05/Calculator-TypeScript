var number1 = document.querySelector('.firstNumber');
var number2 = document.querySelector('.secondNumber');
var plusBtn = document.querySelector('.plus');
var minusBtn = document.querySelector('.minus');
var multiplyBtn = document.querySelector('.multiply');
var divideBtn = document.querySelector('.divide');
var paragraph = document.querySelector('.result');
function plus() {
    if (number1 && number2 && paragraph) {
        var result = parseFloat(number1.value) + parseFloat(number2.value);
        paragraph.textContent = result.toString();
    }
}
function minus() {
    if (number1 && number2 && paragraph) {
        var result = parseFloat(number1.value) - parseFloat(number2.value);
        paragraph.textContent = result.toString();
    }
}
function multiply() {
    if (number1 && number2 && paragraph) {
        var result = parseFloat(number1.value) * parseFloat(number2.value);
        paragraph.textContent = result.toString();
    }
}
function divide() {
    if (number1 && number2 && paragraph) {
        var result = parseFloat(number1.value) / parseFloat(number2.value);
        paragraph.textContent = result.toString();
    }
}
plusBtn === null || plusBtn === void 0 ? void 0 : plusBtn.addEventListener('click', plus);
minusBtn === null || minusBtn === void 0 ? void 0 : minusBtn.addEventListener('click', minus);
multiplyBtn === null || multiplyBtn === void 0 ? void 0 : multiplyBtn.addEventListener('click', multiply);
divideBtn === null || divideBtn === void 0 ? void 0 : divideBtn.addEventListener('click', divide);
