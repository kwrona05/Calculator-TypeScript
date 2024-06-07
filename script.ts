const number1: HTMLInputElement | null = document.querySelector('.firstNumber');
const number2: HTMLInputElement | null = document.querySelector('.secondNumber');

const plusBtn: HTMLButtonElement | null = document.querySelector('.plus');
const minusBtn: HTMLButtonElement | null = document.querySelector('.minus');
const multiplyBtn: HTMLButtonElement | null = document.querySelector('.multiply');
const divideBtn: HTMLButtonElement | null = document.querySelector('.divide');

const paragraph = document.querySelector('.result')


function plus() {
    if(number1 && number2 && paragraph) {
    const result = parseFloat(number1.value) + parseFloat(number2.value)
    paragraph.textContent = result
    }
}

function minus() {
    if(number1 && number2 && paragraph) {
    const result = parseFloat(number1.value) - parseFloat(number2.value)
    paragraph.textContent = result
    }
}

function multiply() {
    if(number1 && number2 && paragraph) {
    const result = parseFloat(number1.value) * parseFloat(number2.value)
    paragraph.textContent = result
    }
}

function divide() {
    if(number1 && number2 && paragraph) {
    const result = parseFloat(number1.value) / parseFloat(number2.value)
    paragraph.textContent = result
    }
}


plusBtn?.addEventListener('click', plus)
minusBtn?.addEventListener('click', minus)
multiplyBtn?.addEventListener('click', multiply)
divideBtn?.addEventListener('click', divide)