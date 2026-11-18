
const suits = ["♥", "♦", "♣", "♠"];

const suitNames = {
    "♥": "hearts",
    "♦": "diamonds",
    "♣": "clubs",
    "♠": "spades"
};

const values = [
    "A", "2", "3", "4", "5", "6", "7",
    "8", "9", "10", "J", "Q", "K"
];

const cardNames = {
    "A": "ace",
    "J": "jack",
    "Q": "queen",
    "K": "king"
};

let deck = [];

for (let suit of suits) {
    for (let value of values) {

        let fileName = cardNames[value] || value;

        let imagePath =
            `images/png cards/card fronts/${suitNames[suit]}/${fileName} of ${suitNames[suit]}.png`;

        deck.push({
            suit: suit,
            value: value,
            image: imagePath
        });
    }
}

console.log(deck);
console.log("Total cards:", deck.length);


const weights = [1,2,4,8,16,32];

let questionGroups = [];

for(let weight of weights){
    let group = deck.filter((card,index) => {
        let cardNumber = index +1;

        return (cardNumber & weight) !== 0;
    });

    questionGroups.push(group);
}

console.log("Six question groups:", questionGroups);

let currentQuestion = 0;
let guessedNumber = 0;

const homeScreen = document.getElementById("homeScreen");
const gameScreen = document.getElementById("gameScreen");
const resultScreen = document.getElementById("resultScreen");

const cardGrid = document.getElementById("cardGrid");
const questionTitle = document.getElementById("questionTitle");

document.getElementById("startBtn").addEventListener("click",function() {
    homeScreen.style.display = "none";
    gameScreen.style.display = "block";

    showQuestion();
});

function showQuestion() {
    questionTitle.textContent = 
    `Question ${currentQuestion + 1} of 6`;

    cardGrid.innerHTML = "";

    let group = questionGroups[currentQuestion];

    group.forEach(function(card) {
        let cardElement = document.createElement("div");

        cardElement.className = "playing-card";

        let cardImage = document.createElement("img");

        cardImage.src = card.image;
        cardImage.alt = card.value + "of" + suitNames[card.suit];

        cardElement.appendChild(cardImage);

        cardGrid.appendChild(cardElement);
    });

    document.getElementById("progressBar").style.width = 
    ((currentQuestion + 1) / 6)* 100 + "%";
}

function answerQuestion(answer) {
    if (answer) {
        guessedNumber += weights[currentQuestion];
    }

    currentQuestion++;

    if(currentQuestion < 6){
        showQuestion();
    }
    else{
        showResult();
    }
}

document.getElementById("yesBtn").addEventListener("click", function() {
    answerQuestion(true);
});

document.getElementById("noBtn").addEventListener("click", function() {
    answerQuestion(false);
});


function showResult() {
    console.log("All questions completed!");
    console.log("Guessed number:", guessedNumber);

    gameScreen.style.display = "none";
    resultScreen.style.display = "block";

    let guessedCard = deck[guessedNumber - 1];
    let resultCard = document.getElementById("resultCard");

    if (!guessedCard) {
        resultCard.textContent = "Invalid card";
        return;
    }

    resultCard.innerHTML = "";

    let cardImage = document.createElement("img");

    cardImage.src = guessedCard.image;
    cardImage.alt = guessedCard.value + " of " + suitNames[guessedCard.suit];
    cardImage.className = "result-playing-card";

    resultCard.appendChild(cardImage);
}


document.getElementById("restartBtn").addEventListener("click", function() {
    currentQuestion = 0;
    guessedNumber = 0;

    resultScreen.style.display = "none";
    homeScreen.style.display = "block";

    document.getElementById("progressBar").style.width = "0%";
});