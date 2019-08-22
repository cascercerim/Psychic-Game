//Create an array of letters in the alphabet for word guess game 
//Create random generator for letter guess
//Create a scorecard for wins 
//Create a scorecard for losses
//Create a scorecard for guesses 
//When playere wins add to score card 
//When player loses subtract one form score card

var computersChoice = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v',
'w','x','y','z'];

var wins = 0;
var losses = 0;
var guesses = 9; 
var userGuesses = "";
var computerGuess = "";
var tie = 0;

computerGuess = computersChoice[Math.floor(Math.random() * computersChoice.length)];

var userChoices = document.getElementById("userchoice-button");
var computerChoice = document.getElementById("computerchoice-button");
var guessSoFar = document.getElementById("guesses");
var winnerAlert = document.getElementById("winner");
var loserAlert = document.getElementById("loser");
var tieAlert = document.getElementById("tie");

document.onkeypress = function(event) {
    var userGuess = event.key;

    userGuesses += userGuess + ", ";
    guesses--;

    if(userGuess === computerGuess){
        wins++;   
     guesses===0;

    } else if(guesses===0) {
        losses++;
    }
    // else{
    //     guesses--;
    // }
    // if(guesses === 0){
    //     loses++
    // }
 
    // pushButton.textContent = " "; 
    userChoices.textContent = "You chose: " + userGuesses;
    computerChoice.textContent = "The computer chose: " + computerGuess;
    winnerAlert.textContent = "wins: " + wins;
    guessSoFar.textContent = "guesses: "  + guesses;
    loserAlert.textContent = "loser: " + losses;
    // tiesAlert.textContent = "tie: " + tie;
  }


