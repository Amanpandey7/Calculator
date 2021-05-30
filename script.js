var firstNumber=0,secondNumber=0,currentOperator;
var flag1=0, flag2=0;

function inputNum(e){
    let nextDigit=0;
    switch(e){
        case "one":
            nextDigit=1;
            break;
        case "two":
            nextDigit=2;
            break;
        case "three":
            nextDigit=3;
            break;
        case "four":
            nextDigit=4;
            break;
        case "five":
            nextDigit=5;
            break;
        case "six":
            nextDigit=6;
            break;
        case "seven":
            nextDigit=7;
            break;
        case "eight":
            nextDigit=8;
            break;
        case "nine":
            nextDigit=9;
            break;
         default:
            nextDigit=0;
            break;
    }
    let currentNumber;
    if(flag2 === 1){
        secondNumber*= 10;
        secondNumber+=nextDigit;
        currentNumber=secondNumber;

    }
    else{
        firstNumber*=10;
        firstNumber+=nextDigit;
        currentNumber=firstNumber;

    }
    const scr = document.getElementById("screen");
    scr.textContent = currentNumber;
    flag1 =1;
    
}

function inputOp(e){
    if(flag1 === 0){
        return;
    }
    if(e === "equal"){
        if(flag2 === 1){
            let currentNumber ;
            switch(currentOperator){
                case "add":
                    currentNumber = firstNumber + secondNumber;
                    break;
                case "subtract":
                    currentNumber = firstNumber - secondNumber;
                    break;
                case "multiply":
                    currentNumber = firstNumber * secondNumber;
                    break;
                case "divide":
                    currentNumber = firstNumber / secondNumber;
                    break;
                default:
                    console.log("error");
                    break;
            }
            const scr = document.getElementById("screen");
            scr.textContent = currentNumber;
             flag1 =1;
             firstNumber = currentNumber;
             secondNumber = 0;
             currentOperator = "";
             flag2 = 0;
            

        }
        else{
            return;
        }

    }
    else{
        currentOperator=e;
        flag2=1;
    }


    
}

function deleteDigit(){
    let currentNumber;
    if(flag2 === 1){
        if(secondNumber === 0){
            currentOperator = "";
            flag2 =0;
        }
        else{
            secondNumber/=10;
            secondNumber = Math.floor(secondNumber)
            currentNumber = secondNumber;
            const scr = document.getElementById("screen");
    scr.textContent = currentNumber;
        }

    }
    else{
        firstNumber/=10;
        firstNumber = Math.floor(firstNumber);
        currentNumber = firstNumber;
        const scr = document.getElementById("screen");
    scr.textContent = currentNumber;

    }
    
}
function clearAll(){
    firstNumber =0;
    secondNumber =0;
    currentOperator = "";
    flag1=0;
    flag2=0;
    const scr = document.getElementById("screen");
    scr.textContent = "";
}

function inputSym(e){
    console.log(e);
}