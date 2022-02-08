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

let previous=0;
let current=0;
operator.forEach(operation=>{
    operation.addEventListener('click',()=>{
        previous = parseInt(display.textContent);
        console.log(typeof(previous));
        let result = display.textContent;
        console.log(result);
    })
})
console.log(previous);
equals.addEventListener('click',()=>{
    
})