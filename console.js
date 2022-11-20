const consoleInput = document.querySelector(".consoleInput");
const historyContainer = document.querySelector(".consoleHistory");

let howManyAppendedInput = 0;
let howManyAppendedoOutput = 0;

const helpText = "If you want more specific help to a command type 'help {commandName}'.";
const clsText = "cls/clear      clear the console";
const a = "a";
const pingText = "pong";

function addResult(inputAsString, output){
    const outputAsString = output instanceof Array ? `[${ output.join(', ') }]` : output.toString();
    const inputLogElement = document.createElement('div');
    const outputLogElement = document.createElement('div');

    inputLogElement.classList.add("consoleInputLog");
    outputLogElement.classList.add("consoleOutputLog");

    inputLogElement.textContent = `$ ${inputAsString}`
    outputLogElement.textContent = outputAsString;

    historyContainer.append(inputLogElement, outputLogElement);
    howManyAppendedInput++;
}

function addOutput(output){
    const outputLogElement = document.createElement('div');

    outputLogElement.classList.add("consoleOutputLog");

    outputLogElement.textContent = output;

    historyContainer.append(outputLogElement);
}

function javascriptify(code){
    consoleInput.value = "";//put the text in the input field equals to none

    switch(code.toLowerCase()){
        case 'help':
            addResult(code, helpText);
            addOutput(clsText);
        break;
        case 'cls':
            clearConsole();
        break;
        case 'clear':
            clearConsole();
        break;
        case 'ping':
            addResult(code, pingText);
        break;
        default:
            addResult(code, "No command found, type help.");
        break;
    }
}

function clearConsole(){
    for(var i = 0; i < howManyAppended; i++){
        historyContainer.removeChild(document.querySelector(".consoleInputLog"));
        historyContainer.removeChild(document.querySelector(".consoleOutputLog"));
        historyContainer.removeChild(document.querySelector(".consoleOutputLog"));
    }

    howManyAppended = 0;
}

consoleInput.addEventListener('keyup', (event) =>{
    const code = consoleInput.value;
    
    if(code.length === 0){
        return;
    }

    if(event.key === "Enter"){
        /* try {
            addResult(code, javascriptify(code));
        } catch (error) {
            addResult(code, error);
        } */
        javascriptify(code);
    }
})