// we doing modular way of programing
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const message  = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")



const genComChoice = () =>{
  const options = ["rock","paper","scissors"]
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx]
}

const drawgame = ()=>{
    
    message.innerText ="Game was draw. Play again."
    message.style.backgroundColor = "#081b31"

}

const showWinner = (userWin, userChoice, compChoice) =>{
  if(userWin){
    userScore++;
    userScorePara.innerText = userScore
    console.log("You win!")
    message.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    message.style.backgroundColor = "green" 
  }
  else {
    compScore++;
    compScorePara.innerText = compScore;
    
    message.innerText=`You lose! ${compChoice} beats Your ${userChoice}`
    message.style.backgroundColor = "red"
  }

}

const playGame = (userChoice) => {
   console.log("User choice = ",userChoice)
 //generte computer choice
   const compChoice = genComChoice();
   console.log("Computer choice = ",compChoice)
   //Draw Game
   if(userChoice === compChoice){
    drawgame();
   }

   else{
    let userWin = true;
    if(userChoice === "rock"){
       //scissors, paper
       userWin = compChoice ==="paper" ? false : true;
    } else if(userChoice === "paper"){
        // rock, scissors
        userWin = compChoice === "scissors" ? false : true;
    }
    else{
        // rock, paper
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
   }
}

choices.forEach((choice) =>{ 
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id")
     playGame(userChoice)
    })
})

