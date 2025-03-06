
let user = 0;
let comp = 0;
const choices = document.querySelectorAll(".choice");
const msgg = document.querySelector("#msgg");
const userscorepara = document.querySelector("#score");
const compscorepara = document.querySelector("#cscore");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const rand = Math.floor(Math.random() * 3);
    return options[rand];
};

const drawgame = () => {
    console.log("Game was a draw");
    msgg.innerText = "Game Draw";
    msgg.style.backgroundColor = "gray";
};

const showwinner= (userwin, userchoice, compchoice) => {
    if (userwin) {
        user++;
        userscorepara.innerText = user;
        console.log("You win!");
        msgg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msgg.style.backgroundColor = "green";
    } else {
        comp++;
        compscorepara.innerText = comp;
        console.log("You lose!");
        msgg.innerText = `You lose! Your ${userchoice} loses to ${compchoice}`;
        msgg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    console.log("User choice =", userchoice);
    const compchoice = gencompchoice();
    console.log("Computer choice =", compchoice);

    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissor" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("Choice clicked:", userchoice);
        playgame(userchoice);
    });
});
