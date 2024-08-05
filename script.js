let userPoint = 0;
let compPoint = 0;

const choices = document.querySelectorAll(".choice")
const messege = document.querySelector("#message")
const userpoint = document.querySelector("#user-point")
const comppoint = document.querySelector("#comp-point")
const userOp = document.querySelector("#user-op")
const compOp = document.querySelector("#comp-op")


// use to get the user choice
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })

   
})

//use to generate the computer choice
// Example compChoice function (you should define this as per your requirement)
const getCompChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//play Game
const playGame = (userChoice) => {
    console.log("user choice:", userChoice);
    userOp.innerHTML = userChoice
    const compChoice = getCompChoice(); 
    console.log("computer choice:", compChoice);
    compOp.innerHTML = compChoice

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = (compChoice === "paper" ? false : true);
        } else if (userChoice === "paper") {
            userWin = (compChoice === "scissors" ? false : true);
        } else {
            userWin = (compChoice === "rock" ? false : true);
        }
        youWin(userWin);
    }
};

const drawGame = () => {
    console.log("It's a draw!");
    messege.classList.add ("draw")
    messege.classList.remove("userwin")
    messege.classList.remove("userlose")
    messege.innerHTML = "It's a draw!"
}

const youWin = (win) => {
    if (win) {
        console.log("You win!");
         messege.classList.add("userwin")
         messege.classList.remove("userlose")
         messege.classList.remove("draw")
         messege.innerHTML = "You win!"
         userPoint += 1;
         userpoint.innerHTML = userPoint;
    } else {
        console.log("You lose!");
         messege.classList.add("userlose")
         messege.classList.remove("userwin")
         messege.classList.remove("draw")
         messege.innerHTML = "You lose!"
         compPoint += 1;
         comppoint.innerHTML = compPoint;
    }
}