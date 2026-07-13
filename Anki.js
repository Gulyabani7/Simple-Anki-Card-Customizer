const ApplyButtons = document.querySelectorAll(".ApplyButtons");
const SandboxDiv = document.querySelector("#SandboxDiv")
const CodeDiv = document.querySelector("#CodeDiv")
const Code = document.querySelector("code");
const Overlay = document.querySelector("#Overlay")
const RandomQuestionAnswerList = ["What's the capital of China","北京 (Běijīng)","What's the capital of Turkey","Ankara","What's the longest river on Earth","Nile River","How many bones in the adult human body","206","What's longest bone in a human body","Femur","What DNA stands for","Deoxyribonucleic Acid"];
const Question = document.querySelector("#Question");
const Answer = document.querySelector("#Answer");
const ComputerButton = document.querySelector("#ComputerButton");
const ComputerTutorial = document.querySelector("#ComputerTutorial");
const MobileButton = document.querySelector("#MobileButton");
const MobileTutorial = document.querySelector("#MobileTutorial");
const Body = document.querySelector("body");
const Inputs = document.querySelectorAll("input");
let RandomQuestion = "";
let RandomAnswer = "";

function UpdateCode() {
    Code.innerHTML = `.card {
    <br>display:flex; 
    <br>background: ${SandboxDiv.style.background}; 
    <br>color: ${SandboxDiv.style.color}; 
    <br>padding: ${SandboxDiv.style.padding}; 
    <br>text-align: ${SandboxDiv.style.textAlign}; 
    <br>text-shadow: ${SandboxDiv.style.textShadow};
    <br>}`
}
function FRandomQuestion() {
    let X = Math.floor(Math.random() * RandomQuestionAnswerList.length)
    if (X%2 === 0) {
        RandomQuestion = `${RandomQuestionAnswerList[X]}`
        RandomAnswer = `${RandomQuestionAnswerList[X+1]}`
        Question.innerHTML = RandomQuestion;
        Answer.innerHTML = RandomAnswer
    }
    else if(X%2 === 1) {
        RandomQuestion = `${RandomQuestionAnswerList[X-1]}`
        RandomAnswer = `${RandomQuestionAnswerList[X]}`
        Question.innerHTML = RandomQuestion;
        Answer.innerHTML = RandomAnswer
    }
}
function ViewImageBigger(e) {
    const Image = e.currentTarget;
    Image.style.maxWidth = "90%"
    Image.classList.add("BigImage")
    Overlay.style.visibility = "visible";
    Body.style.overflow = "hidden";
}
function ApplyStuff(e) {
    const button = e.currentTarget;
    const input = button.previousElementSibling;
    if (input.name === "BackgroundColor") {
        SandboxDiv.style.background = input.value
        UpdateCode();
    }
    else if (input.name === "TextColor") {
        SandboxDiv.style.color = input.value;
        UpdateCode();
    }
    else if (input.name === "ShadowColor") {
        SandboxDiv.style.textShadow = `2px 2px ${input.value}`;
        UpdateCode()
    }
    else if (input.name === "Padding") {
        if (input.value > 50) {
            SandboxDiv.style.padding = "50px";
        }
        else if (input.value < 0) {
            SandboxDiv.style.padding = "0px";
        }
        else {
            SandboxDiv.style.padding = input.value + "px";
        }
        UpdateCode();    
    }
    else if (input.id === "TextAlignSpan") {
        const CheckedRadioButton = document.querySelector(`input[name="TextAlign"]:checked`)
        SandboxDiv.style.textAlign = CheckedRadioButton.value
        UpdateCode()
    }
    else if (input.name === "QuestionChange") {
        if (input.value === "") {
            window.alert("Please enter a valid text");
            input.placeholder = "Please enter a valid text :P";
        }
        else {
            input.placeholder = "Type you own example questions here";
            Question.innerHTML = input.value;
        }
    }
    else if (input.name === "AnswerChange") {
        if (input.value === "") {
            window.alert("Please enter a valid text");
            input.placeholder = "Please enter a valid text :P";
        }
        else {
            input.placeholder = "Type your own answers here";
            Answer.innerHTML = input.value;
        }
    }
}

for (let image of document.querySelectorAll("img")) {
    image.addEventListener("click",ViewImageBigger)
}
for (let button of ApplyButtons) {
    button.addEventListener("click", ApplyStuff);
}

FRandomQuestion()

document.querySelector("#TextShadowDisableButton").addEventListener("click",(event) => {
    SandboxDiv.style.textShadow = "none";
    UpdateCode()
})

SandboxDiv.addEventListener("click", (event) => {
    SandboxDiv.style.position = "fixed";
    SandboxDiv.style.transform = "translate(-50%,-50%)";
    SandboxDiv.style.top = "50%";
    SandboxDiv.style.left = "50%";
    SandboxDiv.style.width = "90%";
    SandboxDiv.style.height = "90%";
    SandboxDiv.classList.remove("SandboxDivHover2")
    Overlay.style.visibility = "visible";
    Body.style.overflow = "hidden";
})

Overlay.addEventListener("click",(event) => {
    Overlay.style.visibility = "hidden"
    SandboxDiv.style.position = ""
    SandboxDiv.style.transform = ""
    SandboxDiv.style.top = ""
    SandboxDiv.style.left = ""
    SandboxDiv.style.width = ""
    SandboxDiv.style.height = ""
    SandboxDiv.classList.add("SandboxDivHover2")
    for (let image of document.querySelectorAll("img")) {
        image.classList.remove("BigImage")
        image.style.maxWidth = "50%"
    }
    Body.style.overflow = "auto";
})

ComputerButton.addEventListener("click", (event) => {
    ComputerTutorial.style.height = "auto";
    ComputerTutorial.style.visibility = "visible";
    ComputerButton.style.background = "gainsboro";
    ComputerButton.style.color = "black";
    MobileButton.style.background = "black";
    MobileButton.style.color = "white";
})

MobileButton.addEventListener("click", (event) => {
    ComputerTutorial.style.height = "0";
    ComputerTutorial.style.visibility = "hidden";
    ComputerButton.style.background = "black";
    ComputerButton.style.color = "white";
    MobileButton.style.background = "gainsboro";
    MobileButton.style.color = "black";
})
