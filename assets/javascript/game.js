var words = ["avatar","titanic","star wars","avengers","transformers","skyfall","terminator","armageddon","superbad","it"];

var randomWord = words[Math.floor(Math.random()*words.length)];
var placeHolder = "";
var totalWins = 0;
var totalLosses = 0;
var guessesRemaining = 12;

document.addEventListener('keyup', function (event) {
    if (event.which === 13) {
      beginGame();
    }
  });

function beginGame() {
    for(var i = 0; i < randomWord.length; i++)
    {
        placeHolder += "_ ";
    }
    document.getElementById("guessingWord").innerHTML = placeHolder;
    document.getElementById("wins").innerHTML = totalWins;
    document.getElementById("losses").innerHTML = totalLosses;
    document.getElementById("triesLeft").innerHTML = guessesRemaining;
    document.getElementById("gameStatus").innerHTML = "You have successfully started the game, good luck!";
    document.getElementById("guessedLetters").innerHTML = key.event;
};
