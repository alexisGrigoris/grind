/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

// a promise can be a variable also except than a function as the last example


const practice = new Promise ((pass,fail) => {
    const error = "yellow";
    /*const ex = true; if i have a boolean var the if works like this
    if (error) {
            
    } else{
        }
        */
    if (error !== "yellow") {
        fail("scheisse 04");
    } else {
        pass("BVB09");
    }
})

practice
    .then((right) => console.log(right)) 
    .catch((wrong) => console.log(wrong));