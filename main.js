const nickNameText = document.querySelector(".nick-name");
const btnPlayGame = document.querySelector(".play-btn");
const minTextValue = document.querySelector(".min-value");
const maxTextValue = document.querySelector(".max-value");
const userTextGuess = document.querySelector(".user-guess");
const btnguessText = document.querySelector(".guess-button");

let nickName;
let minValue;
let maxValue;
let randomNumber;
let userGuess;
let score;

btnPlayGame.addEventListener("click", e => {
    nickName = nickNameText.value;
    minValue = Number(minTextValue.value)
    maxValue = Number(maxTextValue.value)
    
    document.getElementById("getValue").innerHTML = `Welcome ${nickName} please choose a number between ${minValue} and ${maxValue}`;

  randomNumber = Math.trunc(Math.random() * (maxValue - minValue) + minValue);
    console.log(randomNumber);


});

          function clickLogIn() {
            document.getElementById("sectionTwo").style.display = "block";
            document.getElementById("sectionOne").style.display = "none";

        }

        btnguessText.addEventListener("click", e => {
            score = 20;
            userGuess = userTextGuess.value;
            document.getElementById("guessed-no").innerHTML = `Your guessed: ${userGuess}`;
            if (userGuess > randomNumber) {
                document.getElementById("display-guess").innerHTML = ` ${nickName} Your guess is too high`;
                // document.getElementById("user").innerHTML = `score: ${score - 2}`;
            } else if (userGuess < randomNumber){
                document.getElementById("display-guess").innerHTML = ` ${nickName} Your guess is too Low`;
                // document.getElementById("user").innerHTML = `score: ${score - 2}`;
            } else
            document.getElementById("display-guess").innerHTML = `Congratulations ${nickName} You guessed right`;
            // document.getElementById("user").innerHTML = `score: ${score - 2}`;

            if (userGuess == randomNumber) {
                document.getElementById("user").innerHTML = `score = ${score + 2}`;
            } else if (userGuess < randomNumber) {
                document.getElementById("user").innerHTML = `score = ${score - 2}`;
            } else 
            document.getElementById("user").innerHTML = `score = ${score - 2}`;

        })



