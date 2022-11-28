/*
ARROW
FUNCTIONS
*/

//function declaration
function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
}

//anonymous function,           we can call an anonymous function like this : console.log(lunchMenu());
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
} 

//Arrow function
const dinnerMenu = () => {
    return "Im going to eat pasta for dinner"; //example with no parameters
}

const dinnerMenu1 = food => `Im going to eat ${food} for dinner`; // Shorter way : no parenethesis if only one parameter and no need of brackets and return cause it automatically returns it.

const dinnerMenu2 = (who,food) => `${who} going to eat ${food} for dinner`; // example with parameters

console.log(dinnerMenu());
console.log(dinnerMenu1("a burger"));
console.log(dinnerMenu2("We are","sushi"));
