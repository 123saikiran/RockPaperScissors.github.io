var userScore=0;
var compScore=0;
var userScore_span = document.getElementById("user-score");
var compScore_span = document.getElementById("comp-score");
var scoreBoard_div = document.querySelector(".Score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getCompChoice(){
    const choices =['r','p','s'];
    const randomNum =Math.floor(Math.random()*3);
    return choices[randomNum];

}
function convertToword(letter){
    if (letter=="r") return "rock";
    if (letter=="p") return "paper";
    return "scissors";
}

function win(userChoice,compChoice) {
    userScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    result_div.innerHTML=convertToword(userChoice) +" beats "+convertToword(compChoice)+ " You win!!";    

}

function lose(userChoice,compChoice) {
    compScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    result_div.innerHTML=convertToword(userChoice) + " Lost to "+ convertToword(compChoice)+ " You Lost";
}
function draw(userChoice,compChoice) {
    result_div.innerHTML=convertToword(userChoice) + " equals "+ convertToword(compChoice)+ " Its A Draw!!";
}

function game(userChoice){
   const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,compChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
             lose(userChoice,compChoice);
            break;
        case "ss":
        case "rr":
        case "pp":
              draw();
              break;
    }
}
 
function main() {
rock_div.addEventListener("click", function() {
        game("r");
})

paper_div.addEventListener("click", function() {
    game("p");
})

scissor_div.addEventListener("click", function() {
    game("s");
})


}

main(); 
