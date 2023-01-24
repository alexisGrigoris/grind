let firstCard = 3
let secondCard = 11
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
// 1. Declare a variable called message and assign its value to an empty string
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// queryselector is similar to getElementByIdS
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
        if (sum <= 20) {
        message = "Do you want to draw a new card? "
    }   else if (sum === 21) {
        message = "Blackjack! "
        hasBlackJack = true
    }   else {
        message = "You're out of the game! "
        isAlive = false
    }

    messageEl.textContent = message;
    sumEl.textContent = "Sum : " +   sum;
    cardsEl.textContent = "Cards : " + firstCard + ", " + secondCard
    

}

function newCard() {
    console.log("You are drawing a new card")
    // 1. Create a card variable, and hard code its value to a number (2-11)
    let ncard = 7
    // 2. Add the new card to the sum variable
    sum += ncard;

    startGame();
    
    // 3. Call startGame()
}

