//....vars for words & letters that will be used as keys

var words = ["avatar", "titanic", "starwars", "avengers", "transformers", "skyfall", "terminator", "armageddon", "superbad", "it", "matrix"];
var letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

//..... Global vars for game stats

var triesLeft = 12;
var correctAnswers = 0;
var losses = 0;
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
        startTheGame();
    }
});

//.... when key pressed game has started and random word generated

function startTheGame() {
    keyPressedByUser()
}

//.......for loop to replace number of randomWord letters with underscores      
//.......event listener to find which letter was pressed by user

function keyPressedByUser() {
    var youWinSound = document.getElementById("youWinSound");
    var youLoseSound = document.getElementById("youLoseSound");
    document.getElementById("dancer").style.display = "none"
    var underScore = [];
    var wrongletter = [];
    document.getElementById("triesLeft").innerHTML = triesLeft;
    gameStatus.innerHTML = "<p>You successfully started the game. Good luck!</p>"
    var randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);
    for (i = 0; i < randomWord.length; i++) {
        underScore[i] = "_";
        document.getElementById("guessingWord").innerHTML = underScore.join(" ");
    }
    addEventListener("keyup", function (event) {
        document.getElementById("guessedLetters").innerHTML = wrongletter.join(" ");
        var keyPressed = [event.keyCode];
        var letterPressed = String.fromCharCode(keyPressed).toLowerCase();
        console.log(letterPressed)

        //.......if right letter guessed, replace underscore with that letter

        if (letters.indexOf(letterPressed) >= 0 && randomWord.indexOf(letterPressed) >= 0) {
            for (j = 0; j < underScore.length; j++) {
                if (randomWord[j] === letterPressed) {
                    underScore[j] = letterPressed;
                    document.getElementById("guessingWord").innerHTML = underScore.join(" ");
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
            }
        }

        //.......... if word was guessed say you win, if not then say you loose, restart the game by pressing any button

        if (triesLeft === 0) {
            gameStatus.innerHTML = "You lost! Try again! Press any button to restart."
            gameStarted = false;
            losses++;
            youLoseSound.play();
            document.getElementById("losses").innerHTML = losses;
            randomWord = "";
            wrongletter = "";
            underScore = "";
            triesLeft = 12;
        } else if (underScore.join("") === randomWord) {
            gameStatus.innerHTML = "You win! Press any button to restart."
            document.getElementById("dancer").style.display = "block"
            gameStarted = false;
            correctAnswers++;
            youWinSound.play();
            document.getElementById("wins").innerHTML = correctAnswers;
            randomWord = "";
            wrongletter = "";
            underScore = "";
            triesLeft = 12;
        }
    })
}