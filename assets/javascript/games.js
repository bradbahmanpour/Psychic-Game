// Creates an array that lists all the letters in Alphabet.
//  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Make it more predictable 

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f'];

// Variables for tracking our wins, losses and ties. They begin at 0.
var wins = 0;
var losses = 0;
var guesses = 10;
var numberofGuess = 0;
var allUserGuess = [];

// When the user presses a key, it will run the following function...
document.onkeypress = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice);


    if (userGuess === computerChoice) {
        wins++;
        document.getElementById('userGuess').innerHTML = null;
        guesses = 10;

    } else {
        guesses--;
    }

    if (guesses === 0) {
        losses++
        document.getElementById('userGuess').innerHTML = null;
        guesses = 10;
    }

    document.getElementById('userWins').innerHTML = wins;
    document.getElementById('userLost').innerHTML = losses;
    document.getElementById('numberofGuess').innerHTML = guesses;



    if (userGuess != computerChoice) {
        var userGuessString = document.getElementById('userGuess').innerHTML;
   //     console.log(userGuessString);

        document.getElementById('userGuess').innerHTML = userGuessString + userGuess + ",";
    }

}
