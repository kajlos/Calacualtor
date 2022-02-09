const number = document.querySelectorAll('.numberButton');
const del = document.querySelector('.del');
const clear = document.querySelector('.clear');
const operator = document.querySelectorAll('.operator');
const display = document.querySelector('.display');
const equals = document.querySelector('.equals');
const pointer = document.querySelector('.pointer');
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
let previous;
let current=0;
let chosenOperation ;
operator.forEach(operation=>{
    operation.addEventListener('click',()=>{
        if (chosenOperation == undefined){
            previous = parseFloat(display.textContent);
            chosenOperation = operation.textContent;
            display.textContent = '';
        }else{
            chosenOperation = operation.textContent;
        }
    })
})
equals.addEventListener('click',()=>{
    if( chosenOperation != null && display.textContent !='' && previous !=''){
        b = parseFloat(display.textContent);
        console.log(previous,b,chosenOperation);
        let result = operate(previous,b,chosenOperation);
        let round= Math.round(result * 100) / 100;
        display.textContent = round;
        chosenOperation = undefined;
    }
})

pointer.addEventListener('click',()=>{
    let string = display.textContent;
    if(!string.includes('.')){
        display.textContent += '.';
    }
})

window.addEventListener('keydown',k=>{
    key=k.key;
    console.log(key);
    switch(key){
        case '0': display.textContent += key;
        break;
        case '1': display.textContent += key;
        break;
        case '2': display.textContent += key;
        break;
        case '3': display.textContent += key;
        break;
        case '4': display.textContent += key;
        break;
        case '5': display.textContent += key;
        break;
        case '6': display.textContent += key;
        break;
        case '7': display.textContent += key;
        break;
        case '8': display.textContent += key;
        break;
        case '9': display.textContent += key;
        break;
        case 'Backspace': const text = display.textContent.slice(0,-1);
        display.textContent=text;
        break;
    }
})