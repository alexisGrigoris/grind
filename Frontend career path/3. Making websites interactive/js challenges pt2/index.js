
// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works



let person = {
    name : "Alexis",
    age : 24,
    country : "Greece"
}

function logData() {
    let answer  = person.name + " is " + person.age + " years old and lives in " + person.country
    console.log(answer)
}

logData()

//


// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

let age = 24

if (age < 6) {
    console.log("free")
} else if (age < 18) {
    console.log("child discount")
} else if (age < 27) {
    console.log("student discount")    
} else if (age < 67) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}


//


let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

console.log("The 5 largest countries in the world:")
for(i=0; i<largeCountries.length; i++){
    console.log("- " + largeCountries[i])
}


//



let flargeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

flargeCountries.pop()
flargeCountries.push("Pakistan")
flargeCountries.shift()
flargeCountries.unshift("China")
console.log(flargeCountries)


//


let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if( dayOfMonth === 13 && weekday ==="Friday") {
    console.log("😱")
} else {
    console.log("not friday 13th")
}




//

let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

//my solution 
function move () {
    let rh = Math.floor(Math.random() * 3)
    if (rh === 0) {
        console.log(hands[0])
    } else if (rh === 1 ) {
        console.log(hands[1])
    } else {
        console.log(hands[2])
    }
}

move()

//scrimba solution
function getHand() {
    let randomIndex = Math.floor( Math.random() * 3)
    console.log(hands[randomIndex])
}

getHand() 

let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let f1 = Math.floor(Math.random() * fighters.length)
    let f2 = Math.floor(Math.random() * fighters.length)
    stageEl.textContent = fighters[f1] + "vs" + fighters[f2]

})

let fruit = ["apple", "orange", "apple", "apple", "orange"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function frutex() {
    for(i=0; i<fruit.length; i++){
        if(fruit[i] === "apple"){
            appleShelf.textContent +=" " +  fruit[i]
        } else {
            orangeShelf.textContent +=" " + fruit[i]
        }
    }
}

frutex()

