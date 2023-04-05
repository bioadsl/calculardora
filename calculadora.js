// Puxar todos os botões

const buttons = document.querySelectorAll(".calc-button")

// Puxar o display de dados

const display = document.querySelector(".calc-display")

let firstOperand = null
let operator = null
let currentOperand = ""

// Leitura de dados
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
            const target = event.target;
            const value = target.innerText;

            if (target.id == "limpar") {
                firstOperand = null;
                currentOperand = "";
                display.innerText = "";

            } else if (target.id == "mais-menos") {    
                display.innerText = -1 * display.innerText;

            } else if (target.id == "porcentagem") { 
                display.innerText = parseFloat(display.innerText) / 100;    

            } else if (
                target.id == "dividir" || 
                target.id == "multiplica" ||
                target.id == "subtrair" || 
                target.id == "soma") 
                {
                operator = value;
                firstOperand = parseFloat(display.innerText);
                currentOperand = "";

            }  else if (target.id == "igual") {
                if (operator){
                    const secondOperand = parseFloat(display.innerText)
                    if (operator === "+"){
                        firstOperand = firstOperand + secondOperand
                    }
                    else if (operator === "-"){
                        firstOperand = firstOperand - secondOperand
                    }
                    else if (operator === "×"){
                        firstOperand = firstOperand * secondOperand
                    }
                    else if (operator === "÷"){
                        firstOperand = firstOperand / secondOperand
                    }
                    operator = null;
                    currentOperand = firstOperand.toString();
                    display.innerText = firstOperand;
                }

            }  else {
                if (value === "." && currentOperand.includes (".")) {
                    return
                }
                currentOperand += value;
                display.innerText = currentOperand;
            }
    });
});
