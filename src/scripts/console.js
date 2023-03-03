const consoleInput = document.querySelector(".consoleInput");
const historyContainer = document.querySelector(".consoleHistory");

let howManyAppendedInput = 0;
let howManyAppendedoOutput = 0;

const helpText = "If you want more specific help to a command type 'help {commandName}'.";
const clsHelpText = "cls/clear clear the console";
const aboutHelpText = "about  About section of the main page";
const linksHelpText = "links get the links."

const aboutText = "So as you already know, my name is Francisco, bla bla bla";
const linksText = "LinkedIn | Github";
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
    howManyAppendedoOutput++;
}

function addOutput(output){
    const outputLogElement = document.createElement('div');

    outputLogElement.classList.add("consoleOutputLog");

    outputLogElement.textContent = output;

    historyContainer.append(outputLogElement);
    howManyAppendedoOutput++;
}

function addLinks(inputAsString){
    var aGitHub = document.createElement('a');
    var aLinkedIn = document.createElement('p');
    const inputLogElement = document.createElement('div');
    const outputLogElementGitHub = document.createElement('div');
    const outputLogElementLinkedIn = document.createElement('div');

    var linkTextLinkedIn = document.createTextNode("LinkedIn");
    /* aLinkedIn.appendChild(+); */
    aLinkedIn.title = "LinkedIn";
    aLinkedIn.target = "blank_";
    aLinkedIn.href="https://google.com";

    var linkTextGitHub = document.createTextNode("GitHub");
    aGitHub.appendChild(linkTextGitHub);
    aGitHub.title = "github";
    aGitHub.target = "blank_";
    aGitHub.href="https://github.com/Franciscoborges2002";

    inputLogElement.classList.add("consoleInputLog");
    outputLogElementGitHub.classList.add("consoleOutputLog");

    inputLogElement.textContent = `$ ${inputAsString}`

    outputLogElementGitHub.appendChild(aGitHub);
    outputLogElementLinkedIn.appendChild(aLinkedIn);

    historyContainer.append(inputLogElement, outputLogElementGitHub, outputLogElementLinkedIn);
    howManyAppendedInput++;
    howManyAppendedoOutput++;
}

function javascriptify(code){
    consoleInput.value = "";//put the text in the input field equals to none

    switch(code.toLowerCase()){
        case 'help':
            console.log("adsasd")
            addResult(code, helpText);
            addOutput(clsHelpText);
            addOutput(aboutHelpText);
            addOutput(linksHelpText);
        break;
        case 'about':
            addResult(code, aboutText);
        break;
        case 'links':
            addLinks();
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
    for(var i = 0; i < howManyAppendedInput; i++){
        historyContainer.removeChild(document.querySelector(".consoleInputLog"));
    }

    for(var i = 0; i < howManyAppendedoOutput; i++){
        historyContainer.removeChild(document.querySelector(".consoleOutputLog"));
    }

    howManyAppendedInput = 0;
    howManyAppendedoOutput = 0;
}

consoleInput.addEventListener('keyup', (event) =>{
    const code = consoleInput.value;
    
    if(code.length === 0){
        return;
    }

    if(event.key === 'Enter' || event.keyCode === 13){
        javascriptify(code);
    }
})