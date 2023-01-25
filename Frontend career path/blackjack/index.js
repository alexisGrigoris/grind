let firstCard = 3
let secondCard = 11
let cards = [firstCard, secondCard]
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
    renderGame();
}

function renderGame(){

       
        cardsEl.textContent = "Cards : " 
        for (i = 0; i < cards.length; i++ ) {
            cardsEl.textContent += cards[i] + " "
        }



        sumEl.textContent = "Sum : " +   sum;
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
    
    

}

function newCard() {
    console.log("You are drawing a new card")

    let ncard = 7

    sum += ncard

    cards.push(ncard)

    renderGame();
    

}

