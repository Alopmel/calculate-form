function reset() {
    document.getElementById('Mycalculate').reset();
}

let buttonSolution = document.getElementById("bSolution");
let finalResult = document.getElementById("result");

buttonSolution.addEventListener("click" , function (){
    
    let firstValue = parseInt(document.getElementById("value1").value);
    let operator = document.getElementById("operators").value;
    let secondValue = parseInt(document.getElementById("value2").value);   
        
    let finalValue = "";
       switch (operator){
        case "+":
            finalValue = firstValue + secondValue;
            break;
        case "-":
            finalValue = firstValue - secondValue;
            break;
        case "/":
            finalValue = firstValue / secondValue;
            break;
        case "*":
            finalValue = firstValue * secondValue;
            break;
        default:
            console.log("Values are incorrect");
            break;      
    }
    result.textContent = `Result: ${finalValue}`;
    console.log(finalValue);
    }
    );
