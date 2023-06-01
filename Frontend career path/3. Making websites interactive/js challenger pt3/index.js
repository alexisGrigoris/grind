// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
    
    let logout =`${desc}  ${arr.length} best players are  ${arr}`
    for (i=0; i< arr.length; i++){
        
    }
    console.log(logout)
}

generateSentence("bvb",["reus", "brandt","sancho","haaland"])


// SETTING THE STAGE
const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = false

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player}  got  ${points}   points and won the  ${game} game!`)
} else {
    console.log(`The winner is   ${opponent} !  ${player}  lost the game`)
}

// Go through all variables and decide if they should be const or const
// Change the console logs to use template strings instead of double quotes

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function log(arr) {
    for (i=0; i < arr.length; i++){
        console.log(arr[i]) 
    }
}

log(myCourses)


// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

localStorage.setItem("lastname", "Smith");
let myLastName = localStorage.getItem("lastname");
console.log(myLastName);




// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)
const btn = document.getElementById("btn")
const text = document.querySelector(".text")

btn.addEventListener ("click", function() {
    text.textContent = data[0].score
})

let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]


// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const container = document.getElementById("container")
const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/logo.jpg"
]

function renimg() {
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDOM
    
    
}

renimg()


// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

const totalPrice = "420.69235632455"
const btn2 = document.getElementById("purchase-btn")
const tPriceFixed =  Number(totalPrice).toFixed(2);
btn2.textContent = `Buy ${ tPriceFixed }EUR`

