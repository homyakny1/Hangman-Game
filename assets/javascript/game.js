var words = ["avatar", "titanic", "starwars", "avengers", "transformers", "skyfall", "terminator", "armageddon", "superbad", "it", "matrix"];

var choosenWord = "";
var triesLeft = 12;
var wins = 0;
var losses = 0;
var guessingWord = [];
var wrongLetters = [];
var image = document.getElementById("dancer");

function newGame() {

    choosenWord = words[Math.floor(Math.random() * words.length)];
    triesLeft = 12;
    choosenWord;
    guessingWord = [];
    wrongLetters = [];
    // document.getElementById("dancer").style.visibility = 'hidden';


    for (i = 0; i < choosenWord.length; i++) {
        guessingWord[i] = "_";
    }

    document.getElementById("guessingWord").innerHTML = guessingWord.join(" ");

    document.getElementById("triesLeft").innerHTML = triesLeft;

    document.getElementById("guessedLetters").innerHTML = "Wrong letters will be shown here";

    document.getElementById("wins").innerHTML = wins;

    document.getElementById("losses").innerHTML = losses;

    document.getElementById("gameStatus").innerHTML = "<b>Press any key to start the game!</b>";
}


function evaluateGuess(anyLetter, letterCode) {
    document.getElementById("gameStatus").innerHTML = "You have successfully started the game, good luck!";

    var guessLetterInWord = false;

    if ((letterCode <= 64) || (letterCode >= 91)) {
        var keyIsALetter = false;
        alert("This isn't MATH game!!!");
    } else if (anyLetter.length > 1) {
        alert("Don't you know? You should use letters in this game!");
    } else if (anyLetter.length === 1) {
        for (j = 0; j < guessingWord.length; j++) {
            if (choosenWord[j] === anyLetter) {
                guessingWord[j] = anyLetter;
                guessLetterInWord = true;
            }
        }

        document.getElementById("guessingWord").innerHTML = guessingWord.join(" ");
    }


    if ((guessLetterInWord === false) && (wrongLetters.indexOf(anyLetter) === -1)) {
        wrongLetters.push(anyLetter.toUpperCase());
        triesLeft--;
        document.getElementById("guessedLetters").innerHTML = wrongLetters.join(" ");
        document.getElementById("triesLeft").innerHTML = triesLeft;
    }
};


function tallyScores() {

    var image = document.getElementById("dancer");
    var youWinSound = document.getElementById("youWinSound");
    var youLoseSound = document.getElementById("youLoseSound");
    console.log(choosenWord);
    console.log(guessingWord.join(""));
    


    if (choosenWord === guessingWord.join("")) {
        
        wins++;
        function displayImage() {
            image.style.display = "block";
            }
        youWinSound.play();
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("gameStatus").innerHTML = "WOW!!! You won!!! Wait 3 Seconds!";
        
        setTimeout(function () {
            newGame();
        }, 3000);

    } else if (triesLeft === 0) {
        losses++;
        youLoseSound.play();
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("gameStatus").innerHTML = "Noooooo!!!!  It was " + choosenWord + ". Want more!? Wait 3 Seconds!";
        setTimeout(function () {
            newGame();
        }, 3000);
    }

};

newGame();

document.onkeyup = function (event) {
    

    var guessCode = event.keycode;
    var guessLetter = event.key.toLowerCase();

    evaluateGuess(guessLetter, guessCode);

    tallyScores();

};