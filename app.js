let inputPick = document.querySelectorAll(".inputNumber")[0];
let errorPick = document.querySelectorAll(".error")[0];
let outputPick = document.querySelectorAll(".output h1")[0];
let errorSound = new Audio("error.mp3");
let clickSound = new Audio("click.mp3");

function add () {
    let reciveInput = Number(inputPick.value);
    printNumber(reciveInput, "+")
    clickSound.play()
}

function minus () {
    let reciveInput = Number(inputPick.value);
    printNumber(reciveInput, "-")
    clickSound.play()
}

function printNumber (inputValue, operator) {
    if(isNaN(inputValue)){
        errorPick.style = "display: block;"
        errorSound.play()
    }
    else if(operator === "+"){
        outputPick.innerHTML = `${Number(outputPick.innerHTML) + Number(inputValue)}`
        errorPick.style = "display: none;"
    }
    else if(operator === "-"){
        outputPick.innerHTML = `${Number(outputPick.innerHTML) - Number(inputValue)}`
        errorPick.style = "display: none;"
    }
}