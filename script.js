const userPoint = 0;
const compPoint = 0;

const choices = document.querySelectorAll(".choice")


// use to get the user choice
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})

//use to generate the computer choice
const compChoice = () =>{
    const comp = ["rock","paper","scissors"]
    const random = Math.floor(Math.random()*3)
    return comp[random]
}

//play Game
const playGame = (userChoice) =>{
    console.log("user choice:",userChoice)
    const compchoice = compChoice()
    console.log("computer choice:",compchoice)
}