const numbers = document.querySelectorAll(".number");
const entered = document.querySelector("input[type='text']");
const operators = document.querySelectorAll(".operator");
const deleteBtn = document.querySelector(".delete");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equal");
const dotBtn = document.querySelector(".dot");
let haveDot = false;

let calculator = {
    a: '',
    b: '',
    f_operator: '',
    s_operator:'',
}

function addText(e){
    if(calculator.f_operator == '')
    {
        if(e.target.textContent == "." && calculator.a.includes(".")) return
        calculator.a += e.target.textContent;
    } else {
        if(e.target.textContent == "." && calculator.b.includes(".")) return
        calculator.b += e.target.textContent;
    }
    print();
}

function print(){
    entered.value = `${calculator.a}${calculator.f_operator}${calculator.b}`;  
}

function deleteText(){
    entered.value = '';
    for(let x in calculator){
        calculator[x] = '';
   }
}

function clearText(){
    entered.value = '';
}

function addOperator(e){
    if(!calculator.b)
        calculator.f_operator = e.target.textContent; 
    else {
        evaluate();  
        calculator.f_operator = e.target.textContent;
    }   
    print();
}

function evaluate(){
    if( !calculator.a || !calculator.b || !calculator.f_operator)
        return;

    switch(calculator.f_operator){
        case "+":
            calculator.a = add(calculator.a, calculator.b);
            break;
        case "-":
            calculator.a = subtract(calculator.a, calculator.b);
            break;
        case "/":
            calculator.a = divide(calculator.a, calculator.b);
            break;
        case "x":
            calculator.a = multiply(calculator.a, calculator.b);
            break;           
    }

    calculator.b = '';
    calculator.f_operator = '';
    haveDot = false;
    print();
}

function add(a,b){
    return Number(a) + Number(b);

}
function subtract(a,b){
    return a - b;
    
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a/b;
}

function operate(a,b,operator){
    switch(operator){
        case "+":
            console.log(add(a,b));
            break;
    }
}

numbers.forEach (number => {
    number.addEventListener("click", addText);
});

operators.forEach (operator => {
    operator.addEventListener("click", addOperator);
});

deleteBtn.addEventListener("click", deleteText);
clearBtn.addEventListener("click", clearText);
dotBtn.addEventListener("click", addText);
equalBtn.addEventListener("click",evaluate);



