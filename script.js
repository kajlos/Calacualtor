const number = document.querySelectorAll('.numberButton');
const del = document.querySelector('.del');
const clear = document.querySelector('.clear');
const operator = document.querySelectorAll('.operator');
const display = document.querySelector('.display');
const equals = document.querySelector('.equals');

number.forEach(button =>{
    button.addEventListener('click',()=>{
        display.textContent = display.textContent + button.textContent;
    })
})
clear.addEventListener('click',()=>{
    display.textContent = '';
})

del.addEventListener('click',()=>{
    const text = display.textContent.slice(0,-1);
    display.textContent=text;
})

function add(a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b!=0){
        return a/b;
    }
    return 0;
}
function operate(a,b,operator){
    switch(operator){
        case '+':
            return add(a,b);
        case '-':
            return substract(a,b);
        case '*':
            return multiply(a,b);
        case '÷':
            return divide(a,b);
    }
}
console.log(operate(2,4,'÷'));
let previous=0;
let current=0;
let chosenOperation ;
operator.forEach(operation=>{
    operation.addEventListener('click',()=>{
        previous = parseInt(display.textContent);
        console.log(typeof(previous));
        chosenOperation = operation.textContent;
        display.textContent = '';
    })
})
console.log(chosenOperation);
equals.addEventListener('click',()=>{
    if( chosenOperation != null){
        b = parseInt(display.textContent);
        console.log(previous,b,chosenOperation);
        let result = operate(previous,b,chosenOperation);
        display.textContent = result;
    }
})