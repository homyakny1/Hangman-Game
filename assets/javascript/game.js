//....vars for words & letters that will be used as keys

var words = ["avatar", "titanic", "starwars", "avengers", "transformers", "skyfall", "terminator", "armageddon", "superbad", "it", "matrix"];
var letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

//..... Global vars for game stats

var randomWord = "";
var triesLeft = 12;
var correctAnswers = 0;
var losses = 0;
var underScore = [];
var wrongletter = [];
var gameStarted = false;
var gameStatus = document.getElementById("gameStatus")

//....When page loads game stats update

document.getElementById("triesLeft").innerHTML = triesLeft;
document.getElementById("wins").innerHTML = correctAnswers;
document.getElementById("losses").innerHTML = losses;
gameStatus.innerHTML = "<p>Press any button to start the game!</p>"

//....event listener to start the game


addEventListener("keyup", function (event) {
if (gameStarted === false) {
        gameStarted = true;
        gameStatus.innerHTML = "<p>You successfully started the game. Good luck!</p>"
        startTheGame();
}
});


//.... when key pressed game has started and random word generated

function startTheGame() {

    var wrongletter = [];
    var underScore = [];
    var randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);

    //......for loop to replace number of randomWord letters with underscores      

    for (i = 0; i < randomWord.length; i++) {
        underScore[i] = "_";
        document.getElementById("guessingWord").innerHTML = underScore.join(" ");

        //.......event listener to find which letter was pressed by user

        addEventListener("keyup", function (event) {
            var keyPressed = [event.keyCode];
            var letterPressed = String.fromCharCode(keyPressed).toLowerCase();
            console.log(letterPressed)
            document.getElementById("triesLeft").innerHTML = triesLeft;

            //.......if right letter guessed, replace underscore with that letter

            if (letters.indexOf(letterPressed) >= 0 && randomWord.indexOf(letterPressed) >= 0) {
                for (j = 0; j < underScore.length; j++) {
                    if (randomWord[j] === letterPressed) {
                        underScore[j] = letterPressed;
                    }
                    document.getElementById("guessingWord").innerHTML = underScore.join(" ");
                    if (underScore.join("") === randomWord) {
                        gameStarted = false;
                        gameStatus.innerHTML = "You win! The word was <b>" + randomWord + "</b>. Press any button to restart."
                        correctAnswers++;
                        document.getElementById("wins").innerHTML = correctAnswers;
                    }
                }
            }

            //......... if guessed letter is wrong, push it to a wrong array and show it in wrong letter div    
            else if (letters.indexOf(letterPressed) >= 0 && randomWord.indexOf(letterPressed) <= 0) {
                if (wrongletter.indexOf(letterPressed) === -1) {
                    wrongletter.push(letterPressed);
                    document.getElementById("guessedLetters").innerHTML = wrongletter.join(" ");
                    triesLeft--;
                    document.getElementById("triesLeft").innerHTML = triesLeft;
                    if (triesLeft === 0) {
                        gameStarted = false;
                        gameStatus.innerHTML = "You lost! The word was <b>" + randomWord + "</b>. Press any button to restart."
                        losses++;
                        document.getElementById("losses").innerHTML = losses;
                    }
                }
            }
        })
    }
}