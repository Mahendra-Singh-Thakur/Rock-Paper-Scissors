const boxes = document.querySelectorAll(".box");
let myscore = document.querySelector("#mysco");
let compscore = document.querySelector("#compsco");
let textpara = document.querySelector("#textdis");
let resetbtn = document.querySelector("#resetbtn");
let boxIDs = [];
let compoint = 0;
let mypoint = 0;

const gencompuchoice = () => {
    const randomIndex = Math.floor(Math.random() * boxIDs.length);
    console.log(randomIndex);
    return boxIDs[randomIndex];
};

resetbtn.addEventListener("click", () => {
    textpara.innerText = "Pick Your Move";
    textpara.style.backgroundColor = "aquamarine";
    textpara.style.color = "black";
    compoint = 0;
    mypoint = 0;
    compscore.innerText = compoint;
    myscore.innerText = mypoint;
    myscore.style.backgroundColor = "white";
    compscore.style.backgroundColor = "white";
});

let winnerCheck = (usechoice, compuChoice) => {
    if (usechoice === compuChoice) {
        return 0;
    }
    else if (
        (usechoice === "rock" && compuChoice === "scissors") ||
        (usechoice === "paper" && compuChoice === "rock") ||
        (usechoice === "scissors" && compuChoice === "paper")
    ) {
        return 1;
    }
    else if (
        (usechoice === "rock" && compuChoice === "paper") ||
        (usechoice === "paper" && compuChoice === "scissors") ||
        (usechoice === "scissors" && compuChoice === "rock")
    ) {
        return -1;
    }

}

const playGame = (userChoice) => {
    const compuChoice = gencompuchoice();
    console.log(userChoice);
    console.log(compuChoice);
    const val = winnerCheck(userChoice, compuChoice);
    if (val === -1) {
        textpara.innerText = `You Lose! ${userChoice} Beats ${compuChoice}`;
        textpara.style.backgroundColor = "red";
        compoint++;
    }
    else if (val === 0) {
        textpara.style.backgroundColor = "black";
        textpara.style.color = "white";
        textpara.innerText = `It Was Draw !`;
    }
    else if (val === 1) {
        textpara.innerText = `You Win! ${userChoice} Beats ${compuChoice}`;
        textpara.style.backgroundColor = "green";
        mypoint++;
    }
    myscore.innerText = `${mypoint}`;
    compscore.innerText = `${compoint}`;
    if (mypoint > compoint) {
        myscore.style.backgroundColor = "green";
        compscore.style.backgroundColor = "red";
    }
    else if (mypoint < compoint) {
        myscore.style.backgroundColor = "red";
        compscore.style.backgroundColor = "green";
    }
    else {
        myscore.style.backgroundColor = "green";
        compscore.style.backgroundColor = "green";
    }
};

boxes.forEach((box) => {
    boxIDs.push(box.id);
    box.addEventListener("click", () => {
        const usechoice = box.id;
        playGame(usechoice);
    });
});