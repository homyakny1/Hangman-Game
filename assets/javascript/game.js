//....vars for words & letters that will be used as keys

var words = ["avatar", "titanic", "starwars", "avengers", "transformers", "skyfall", "terminator", "armageddon", "superbad", "it", "matrix"];
var letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

//.....vars for game stats and other vars

var triesLeft = 12;
var wins = 0;
var losses = 0;
var gameStarted = false;
var gameStatus = document.getElementById("gameStatus")
var randomWord = words[Math.floor(Math.random() * words.length)];
var underScore = [];
var wrongletter = [];

//....divs fill up

document.getElementById("triesLeft").innerHTML = triesLeft;
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
gameStatus.innerHTML = "<p>Press <b>ENTER</b> to start the game!</p>"

//....event listener to start the game and generate a random word

addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13 && gameStarted === false) {
        generateRandomWord();
        gameStarted = true;
        console.log("Has Game Started? " + gameStarted);
        gameStatus.innerHTML = "<p>You successfully started the game. Good luck!</p>"
        startTheGame()
    }
});

//....random word generator

function generateRandomWord() {
    randomWord
    console.log(randomWord)
}

//.... create underscores and insert them in #guessingWord div

function startTheGame() {
    if (gameStarted === true) {
        for (i = 0; i < randomWord.length; i++) {
            underScore[i] = "_";
            document.getElementById("guessingWord").innerHTML = underScore.join(" ");
        }
        addEventListener("keyup", function (event) {
            triesLeft = "";
            var keyPressed = [event.keyCode];
            var letterPressed = String.fromCharCode(keyPressed).toLowerCase();
            console.log(letterPressed)
            if (letters.indexOf(letterPressed) >= 0 && randomWord.indexOf(letterPressed) >= 0) {
                underScore[randomWord.indexOf(letterPressed)] = letterPressed;
                document.getElementById("guessingWord").innerHTML = underScore.join(" ");
            }
            if (letters.indexOf(letterPressed) >= 0 && randomWord.indexOf(letterPressed) <= 0) {
                if (wrongletter.indexOf(letterPressed) === -1) {
                    wrongletter.push(letterPressed);
                    document.getElementById("guessedLetters").innerHTML = wrongletter.join(" ");
                    triesLeft -=1;
                }
            }

        })
    }
}