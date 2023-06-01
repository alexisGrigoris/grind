let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name : "Sir/Madam",
    chips : 1000
}

let playerDetails = document.getElementById("player-el")
playerDetails.textContent = player.name + " your balance is $" + player.chips



function getRandomCard() {
    let rn = Math.floor(Math.random() * 13) + 1
        if (rn >10 ) {
            return 10
        } 
        else{
            return rn 
        }
}

function startGame(){
        isAlive = true
       // Generate two random numbes
       let firstCard = getRandomCard()
       let secondCard = getRandomCard()
       cards = [firstCard, secondCard]
       sum = firstCard + secondCard
    // Re-assign the cards and sum variables so that the game can start
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
    if ( isAlive === true && hasBlackJack === false) {
    console.log("You are drawing a new card")

    let ncard =  getRandomCard() 

    sum += ncard

    cards.push(ncard)

    renderGame();
    }

}

