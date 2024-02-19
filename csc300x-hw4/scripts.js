//instantiating all cards for player and question mark card

const playerChoices = document.querySelectorAll('.player-choice');
const computerThrow = document.getElementById('question-mark');

//player choice will be used to determine winner
let playerChoice = 0;

// get image array for computerThrow to cycle through
let images=["images/rock.PNG", "images/scissors.PNG", "images/paper.PNG"]

//timer for computer throw shuffling
timerId = null;

//add event listeners for all clickable cards with a single function to change borders
for (let index = 0; index < playerChoices.length; index++) {
    const element = playerChoices[index];
    element.addEventListener('click', eventsKickoff);
}

function eventsKickoff(event){
    //highlight the player's choice
    highlightPlayerChoice(event);
    //randomly roll the computer's choice
    computerChoice(event);
    //determine winner
    determineWinner(event);
}

function highlightPlayerChoice(event) {
    const chosenCard = event.currentTarget;
    console.log(chosenCard);
    chosenCard.style.border = "5px solid green";
    for (let index = 0; index < playerChoices.length; index++) {
        //remove all elements that arent the player's choice
        const element = playerChoices[index];
        if (element !== chosenCard) {
            element.style.display = "none";
        }
    }
}

function computerChoice() {
    //start shuffling
    computerThinking();
    //stop shuffling
    setTimeout(stopShuffle, 3000);
}

function computerThinking() {
    id("computer-action").textContent = "THINKING..."
    timerId = setInterval(shuffle, 100);
}

function shuffle() {
    let randImg = getRandomInt(images.length);
    computerThrow.src = images[randImg];
}

function stopShuffle() {
    // clear the interval timerId is tied to
    clearInterval(timerId);
    //decide what card to use here
    computerChoice = getRandomInt(images.length);
    computerThrow.src = images[computerChoice];
    console.log(computerChoice);
}

function determineWinner() {
    //ASSOCIATE COMPUTER'S CHOICE BY ID OF PLAYER'S CHOICE (EITHER ROCK, PAPER, SCISSORS) THEN COMPARE THOSE STRINGS TO DETERMINE WINNER
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//helper function for id
function id(id) {
    return document.getElementById(id);
}