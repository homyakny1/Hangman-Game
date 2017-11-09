var words = ["avatar","titanic","star wars","avengers","transformers","skyfall","terminator","armageddon","superbad","it"];

var choosenWord = words[Math.floor(Math.random()*words.length)];
var underScore = [];
var rightWord = [];
var wrongWord = [];
var guessesLeft = 12;

var docUnderScore = document.getElementById("guessingWord")

console.log(choosenWord);

var generateUnderscore = function(){
    for(var i=0; i<choosenWord.length; i++){
        underScore.push('_ ');
    }
    return underScore;
};

console.log(generateUnderscore());

document.addEventListener('keyup', (event) =>{

    var keyword = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    console.log(letter);
    var letter = choosenWord.indexOf(keyword);

    if(letter > -1){
        rightWord.push(keyword);
        underScore [letter] = keyword;
        console.log(rightWord);
        if (underScore.join("") == choosenWord){
            alert("You are correct it's " + choosenWord);

        }
    }
    else{
        wrongWord.push(keyword);
        guessesLeft -=1;
        console.log(wrongWord);

    }

    document.getElementById("guessingWord").innerHTML = generateUnderscore();
    document.getElementById("triesLeft").innerHTML = guessesLeft;
    document.getElementById("guessedLetters").innerHTML = wrongWord;
});