/*let fname = "alex";
let lname = "vata";

let fullName = fname + " " + lname;

console.log(fullName);
*/

let name = "Linda";
let greeting = "Hi there";

function hello () {
    console.log(greeting + ", " + name + "!")
}

hello()

let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function threepts(){
    myPoints += 3;
}

function minuspt() {
    myPoints -= 1;
}

threepts();
minuspt();
threepts();
minuspt();
threepts();

// Call the functions to that the line below logs out 10
console.log(myPoints)

// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".


let errorParagraph = document.getElementById("error")
console.log(errorParagraph)

function btnerror() {
    console.log("button clicked")
    errorParagraph.textContent = "Something went wrong, please try again"
}


let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
let sumEl = document.getElementById("sum-el")
function add(){
    let sun = num1 + num2;
    sumEl.textContent = sun;
}

function substract(){
    let sun = num1 - num2;
    sumEl.textContent = sun;
}

function divide(){
    let sun = num1 / num2;
    sumEl.textContent = sun;
}

function multiply(){
    let sun = num1 * num2;
    sumEl.textContent = sun;
}