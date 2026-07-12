const ApplyButtons = document.querySelectorAll(".ApplyButtons");
const SandboxDiv = document.querySelector("#SandboxDiv")
const CodeDiv = document.querySelector("#CodeDiv")
const Code = document.querySelector("code");
const Overlay = document.querySelector("#Overlay")
const RandomQuestionAnswerList = ["What's the capital of China","北京 (Běijīng)","What's the capital of Turkey","Ankara","What's the longest river on Earth","Nile River","How many bones in the adult human body","206","What's longest bone in a human body","Femur","What DNA stands for","Deoxyribonucleic Acid"];
const Question = document.querySelector("#Question");
const Answer = document.querySelector("#Answer");
const ComputerButton = document.querySelector("#ComputerTutorial");
const MobileButton = document.querySelector("#MobileTutorial");
let RandomQuestion = "";
let RandomAnswer = "";

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
FRandomQuestion()

function ApplyStuff(e) {
    const button = e.currentTarget;
    const input = button.previousElementSibling;
    if (input.name === "BackgroundColor") {
        SandboxDiv.style.background = input.value
        Code.innerHTML = `.card { <br>display:flex; <br>background: ${SandboxDiv.style.background}; <br>color: ${SandboxDiv.style.color}; <br>padding: ${SandboxDiv.style.padding}; <br>text-align: ${SandboxDiv.style.textAlign}; <br>text-shadow: ${SandboxDiv.style.textShadow}; }`
    }
    else if (input.name === "TextColor") {
        SandboxDiv.style.color = input.value
        Code.innerHTML = `.card { <br>display:flex; <br>background: ${SandboxDiv.style.background}; <br>color: ${SandboxDiv.style.color}; <br>padding: ${SandboxDiv.style.padding}; <br>text-align: ${SandboxDiv.style.textAlign}; <br>text-shadow: ${SandboxDiv.style.textShadow}; }`
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
        Code.innerHTML = `.card { <br>display:flex; <br>background: ${SandboxDiv.style.background}; <br>color: ${SandboxDiv.style.color}; <br>padding: ${SandboxDiv.style.padding}; <br>text-align: ${SandboxDiv.style.textAlign}; <br>text-shadow: ${SandboxDiv.style.textShadow}; }`
    }
    else if (input.name === "TextAlign") {
        if (input.checked === false) {
            const CenterRadioButtonLabel = input.previousElementSibling;
            const CenterRadioButton = CenterRadioButtonLabel.previousElementSibling;
            if ( CenterRadioButton.checked === false) {
                const LeftRadioButtonLabel = CenterRadioButton.previousElementSibling;
                const LeftRadioButton = LeftRadioButtonLabel.previousElementSibling;
                SandboxDiv.style.textAlign = LeftRadioButton.value
                Code.innerHTML = `.card { <br>display:flex; <br>background: ${SandboxDiv.style.background}; <br>color: ${SandboxDiv.style.color}; <br>padding: ${SandboxDiv.style.padding}; <br>text-align: ${SandboxDiv.style.textAlign}; <br>text-shadow: ${SandboxDiv.style.textShadow}; }`
            }
            else {
                SandboxDiv.style.textAlign = CenterRadioButton.value;
                Code.innerHTML = `.card { <br>display:flex; <br>background: ${SandboxDiv.style.background}; <br>color: ${SandboxDiv.style.color}; <br>padding: ${SandboxDiv.style.padding}; <br>text-align: ${SandboxDiv.style.textAlign}; <br>text-shadow: ${SandboxDiv.style.textShadow}; }`
            }
        }
        else {
            SandboxDiv.style.textAlign = input.value;
            Code.innerHTML = `.card { <br>display:flex; <br>background: ${SandboxDiv.style.background}; <br>color: ${SandboxDiv.style.color}; <br>padding: ${SandboxDiv.style.padding}; <br>text-align: ${SandboxDiv.style.textAlign}; <br>text-shadow: ${SandboxDiv.style.textShadow}; }`
        }
    }
    else if (input.name === "ShadowColor") {
        SandboxDiv.style.textShadow = `2px 2px ${input.value}`
        Code.innerHTML = `.card { <br>display:flex; <br>background: ${SandboxDiv.style.background}; <br>color: ${SandboxDiv.style.color}; <br>padding: ${SandboxDiv.style.padding}; <br>text-align: ${SandboxDiv.style.textAlign}; <br>text-shadow: ${SandboxDiv.style.textShadow}; }`
    }
}

for (let button of ApplyButtons) {
    button.addEventListener("click", ApplyStuff);
}

SandboxDiv.addEventListener("click", (event) => {
    SandboxDiv.style.position = "fixed";
    SandboxDiv.style.transform = "translate(-50%,-50%)";
    SandboxDiv.style.top = "50%";
    SandboxDiv.style.left = "50%";
    SandboxDiv.style.width = "90%";
    SandboxDiv.style.height = "90%";
    SandboxDiv.classList.remove("SandboxDivHover2")
    Overlay.style.visibility = "visible";
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
})